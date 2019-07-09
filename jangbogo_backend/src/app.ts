/** 
 * @project  "JANGBOGO"
 * @file     /src/app.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보고 서버 시작 코드"
 */

import * as Koa from "Koa"; 
import * as Router from "koa-router"; 
import * as logger from "koa-logger"; 
import * as json from "koa-json"; 
import * as bodyParser from "koa-bodyparser"; 

import SETTINGS from 'settings/index'; 

import api from 'routes/index'; 

const app: Koa = new Koa(); 
const router: Router = new Router(); 

/** 운영모드에 따라 포트번호 및 서버 설정 지정 */
const PORT: Number = process.env.NODE_ENV === 'development' ? 3000 : 8080; 

/** 미들웨어 선언 */
app.use(json()); 
app.use(logger()); 

/** 라우팅 */
router.use("/api/v1", api.routes()); 
app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

/** Server Listen */
app.listen(PORT, () => {
  console.log("*************************************"); 
  console.log(`BACKEND-SERVER MODE : ${process.env.NODE_ENV}`); 
  console.log(`JANGBOGO SERVER RUNNING @ PORT : ${PORT}`); 
  console.log("*************************************"); 
}); 

