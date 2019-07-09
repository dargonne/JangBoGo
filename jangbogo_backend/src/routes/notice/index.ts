/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/notice/index.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "공지사항 API 모음"
 */

import * as Router from 'koa-router'; 
import NoticeController from 'routes/notice/notice.ctrl'; 

const notice: Router = new Router(); 
const controller: NoticeController = new NoticeController(); 

notice.get("/list/:pageNo", controller.getList);
notice.get("/article/:id", controller.getArticle);
notice.patch("/article/:id", controller.editArticle);  
notice.post("/add", controller.addArticle); 
notice.delete("/drop", controller.dropArticle); 

export default notice; 