/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/account/find.ctrl.ts
 * @version  1.0 
 * @date     2019-07-18
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "회원정보 찾기 API 컨트롤러"
 */
import { Context } from "koa"; 
import Account from "models/account"; 
import Mailgun from "modules/mailgun"; 

export default class FindAccountController {
  /** 비밀번호 찾기 */
  async findAccountPassword(ctx: Context) {
    const { email } = ctx.request.body; 
    
    try {
      const findByEmailResult = await Account.find({ email: email }).countDocuments(); 
      
      if(!findByEmailResult) {
        console.log('not found'); 
        throw new Error("Not exist account info"); 
      }

      /** 이메일 전송 시작 */
      /** 
       * 정상적으로 이메일이 전송되었는지 확인하는 목데이터
       * (상황별 이메일 전송양식 만들기) 
       */
      const sendPayload = {
        to: email, 
        subject: "이메일 전송 테스트", 
        text: "이메일이 잘 가나 확인해 볼게요"
      }; 

      const mailgun: Mailgun = new Mailgun(); 

      const sendResult = await mailgun.sendEmail(sendPayload); 
      
      if(!sendResult) {
        throw new Error("Email sending is failed"); 
      }

      return ctx.body = {
        "result": true, 
      }


    } catch (e) {
      return ctx.throw(500, e); 
    }
  }
}