/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/index.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "REST API 라우팅 취합"
 */
import * as Router from 'koa-router'; 

import notice from 'routes/notice'; 

const api: Router = new Router(); 

api.use("/notice", notice.routes()); 

export default api; 