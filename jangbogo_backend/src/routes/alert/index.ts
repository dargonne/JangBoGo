/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/alert/index.ts 
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "알림 라우팅" 
 */

import * as Router from "koa-router"; 
import AlertController from "./alert.ctrl"; 

const alertRoute: Router = new Router(); 
const alertController: AlertController = new AlertController(); 

alertRoute.get("/list/:uid/:page", alertController.getAlertList); 
alertRoute.post("/", alertController.addAlertItem); 
alertRoute.delete("/", alertController.dropAlertItem); 


export default alertRoute; 
