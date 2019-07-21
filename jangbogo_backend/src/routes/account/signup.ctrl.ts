/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/account/signup.ctrl.ts
 * @version  1.0 
 * @date     2019-07-16
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "회원가입 라우팅 컨트롤러"
 */

import { Context } from "koa"; 
import Account from "models/account";
import BcryptModule from 'modules/bcrypt';  

export default class SignupController {
  /** 이메일 중복 확인 반환 */
  async getEmailValidate(ctx: Context) {
    const { email } = ctx.params; 
    let inqueryResult; 

    try {
      inqueryResult = await Account.collection.countDocuments({ email });
      
      if(inqueryResult) {
         return ctx.body = {
           "result": false, 
         }
      } else {
         return ctx.body = {
           "result": true, 
         }
      }
    } catch (e) {
      return ctx.throw(500, e); 
    }

  }

  /** 회원가입 처리(이메일 회원가입 처리) */
  async signUpAccount(ctx: Context) {
    const { email, password, username } = ctx.request.body; 

    try {
      const bcrypt = new BcryptModule(); 

      const hashPassword = await bcrypt.generateHash(password);

      const newAccount = new Account({
        email, 
        password : hashPassword, 
        profile: {
          username: username, 
          thumbnail: "" 
        }
      });
      

      await newAccount.save(); 

      ctx.body = {
        "result": true, 
      }

    } catch(e) {
      return ctx.throw(500, e); 
    }
  }
}