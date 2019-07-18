/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/account/edit.ctrl.ts
 * @version  1.0 
 * @date     2019-07-18
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "회원정보 수정 API 컨트롤러"
 */

 import { Context } from "koa"; 
 import Account from "models/account"; 
 import BcryptModule from "modules/bcrypt"; 

 export default class EditAccountController {

   /** 기본정보 변경 처리 */
   async changeBasicInfo(ctx: Context) {
      const { id, email, username } = ctx.request.body; 
    
      try {
        await Account.where({ _id: id })
                .updateOne({
                  email: email, 
                  'profile.username': username, 
                })
                .setOptions({ runvalidators: true }); 

       return ctx.body = {
                "result": true,       
              }


      } catch (e) {
        return ctx.throw(500, e); 
      }
   }

   /** 비밀번호 변경 처리 */
   async changePassword(ctx: Context) {
     const { id, newPass } = ctx.request.body; 

     try {
      const bcrypt = new BcryptModule(); 
      const newPassHash = await bcrypt.generateHash(newPass); 
      
      await Account.where({ _id: id })
            .updateOne({
              password: newPassHash, 
            })
            .setOptions({ runvalidators: true }); 

      return ctx.body = {
        "result": true, 
      }
      
     } catch (e) {
        return ctx.throw(500, e); 
     }
   }

   /** 소셜 계정 연결 처리(보류) */
   async linkSocialAccount(ctx: Context) {
      try {

      } catch (e) {
        return ctx.throw(500, e); 
      }
   }

   /** 소셜 계정 해제 처리(보류) */
   async unlinkSocialAccount(ctx: Context) {
      try {

      } catch(e) {
        return ctx.throw(500, e); 
      }
   }

   /** 회원 탈퇴 처리 */
   async withdrawAccount(ctx: Context) {
     const { id } = ctx.request.body;

     try {
       await Account.findByIdAndRemove(id); 

       return ctx.body = {
        "result" : true, 
       } 

     } catch (e) {
       return ctx.throw(500, e); 
     }
   }
 }