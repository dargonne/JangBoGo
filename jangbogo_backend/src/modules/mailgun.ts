/** 
 * @project  "JANGBOGO"
 * @file     /src/modules/mailgun.ts
 * @version  1.0 
 * @date     2019-07-18
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "메일 발송(Mailgun) 모듈"
 */

import * as mailgun from 'mailgun-js'; 
import SETTINGS from 'settings/index'; 

interface IMailPayload {
  to: String; 
  subject: String; 
  text: String; 
}

export default class MailgunModule {
  INFO: Object; 
  MAILGUN: any; 

  constructor() {
    this.INFO = SETTINGS[process.env.NODE_ENV].mailgun;
    this.MAILGUN = mailgun({apiKey: this.INFO["key"], domain: this.INFO["domain"]}); 
  }

  /** 이메일 발송 */
  async sendEmail(payload: IMailPayload) {
    try {
      const sendResult = await this.MAILGUN.messages().send({
        ...payload, 
        from: this.INFO["from"] 
      }); 

      if(sendResult.id) {
        return true; 
      } else {
        throw new Error("Email Sending was failed"); 
      } 

    } catch (e) {
      console.log('Error Occured @ sending email'); 
      console.log(e); 
      return false; 
    }
  }
}