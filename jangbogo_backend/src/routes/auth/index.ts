/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/auth/index.ts
 * @version  1.0 
 * @date     2019-07-19
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "사용자 인증 API 모음"
 */

import * as Router from "koa-router"; 
import AuthController from "./auth.ctrl"; 

const auth: Router = new Router(); 
const authController: AuthController = new AuthController(); 

auth.post("/", authController.authUser); 
auth.post("/signout", authController.signoutToken); 
auth.get("/refresh", authController.refreshToken); 

export default auth; 
