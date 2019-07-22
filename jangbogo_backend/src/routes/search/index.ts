/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/search/index.ts 
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "검색 API 모음" 
 */

import * as Router from "koa-router"; 
import SearchController from "./search.ctrl"; 

const searchRouter: Router = new Router(); 
const searchController: SearchController = new SearchController(); 

searchRouter.get("/bucket/:keyword/:page", searchController.byBucketList); 


export default searchRouter; 