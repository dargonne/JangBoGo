/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/index.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "REST API 라우팅 취합"
 */
import * as Router from 'koa-router'; 

import account from 'routes/account'; 
import notice from 'routes/notice'; 
import faq from 'routes/faq'; 

const api: Router = new Router(); 

api.prefix("/api/v1"); 
api.use("/account", account.routes()); 
api.use("/notice", notice.routes()); 
api.use("/faq", faq.routes()); 

export default api; 