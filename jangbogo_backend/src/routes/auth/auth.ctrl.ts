/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/auth/auth.ctrl.ts
 * @version  1.0 
 * @date     2019-07-19
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "사용자 인증 API 컨트롤러"
 */

import { Context } from "koa"; 
import SETTINGS from "settings/index";
import Account from "models/account"; 
import Bcrypt from "modules/bcrypt"; 
import JWT from "modules/jwt"; 

export default class AuthController {
  AUTH_INFO: Object; 
  
  constructor() {
    this.AUTH_INFO = SETTINGS[process.env.NODE_ENV].auth; 
  }

  async authUser(ctx: Context) {
    const { authInfo } = ctx.request.body; 

    try {
      const { type } = authInfo; 
      
      /** 일반로그인 or 소셜로그인의 경우 */
      if(type === "email") {
        const { email, pass } = authInfo; 
        
        const checkIsAccount = await Account.find({ email }); 

        if(checkIsAccount.length) {
          const accountItem = checkIsAccount[0]; 
          const { password } = accountItem; 
          const bcrypt = new Bcrypt(); 

          const compareResult = await bcrypt.compareHash(pass, password); 

          if(compareResult) {
            
            const { id, profile } = accountItem; 
            const jwt = new JWT(); 

            const tokenInfo = {id, profile}; 
            const token = await jwt.generateToken(tokenInfo); 

            ctx.cookies.set('jangbogo', token, { 
                            httpOnly: true, 
                            maxAge: 1000 * 60 * 60 * 24, 
                            domain: process.env.NODE_ENV === 'development' ? undefined : '.gasung.be', }); 

            return ctx.body = {
              "result": true, 
            }

          } else {
            throw new Error("Not valid account password"); 
          }
        } else {
          throw new Error("Not found Account info"); 
        }

      } else if(type === "social") {
        /** 소셜로그인 보류 */
        ctx.body = {
          "result": true, 
        }
      } else {
        throw new Error("Auth info is not exist."); 
      }
      
    } catch (e) {
      return ctx.throw(500, e); 
    }
  }

  async refreshToken(ctx: Context) {
    try {
      const token = ctx.cookies.get('jangbogo'); 

      if(!token) throw new Error("Not exist token"); 

      const jwt = new JWT(); 
      const decoded = await jwt.decodeToken(token); 

      if(!decoded) throw new Error("Not found decode token info"); 

      if(Date.now() / 1000 - decoded["iat"] > 60 * 60 * 24) {
        const refreshTarget = {
               id: decoded["id"], 
               profile: decoded["profile"],       
              }
        const freshToken = await jwt.generateToken(refreshTarget); 

        ctx.cookies.set('jangbogo', freshToken, { 
          httpOnly: true, 
          maxAge: 1000 * 60 * 60 * 24, 
          domain: process.env.NODE_ENV === 'development' ? undefined : '.gasung.be', }); 

        return ctx.body = {
          "result": true, 
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

  async signoutToken(ctx: Context) {
    try {
      ctx.cookies.set("jangbogo", null , {
        domain: process.env.NODE_ENV === 'development' ? undefined : '.gasung.be', }); 
    } catch(e) {
      return ctx.throw(500, e); 
    }
  }
}