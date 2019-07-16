/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/account/index.ts
 * @version  1.0 
 * @date     2019-07-16
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "회원관련 API 모음"
 */

import * as Router from 'koa-router'; 
import SignupControlloer from './signup.ctrl'; 

const account: Router = new Router(); 
const signUpController: SignupControlloer = new SignupControlloer(); 

/** 회원가입 관련 조회 라우팅 */
account.get('/inquery/:email', signUpController.getEmailValidate); 

/** 신규 회원가입 라우팅(일반회원) */
account.post('/signup/email', signUpController.signUpAccount); 

/** 회원정보 수정 */


export default account; 