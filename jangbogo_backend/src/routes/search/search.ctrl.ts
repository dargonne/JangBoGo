/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/search/search.ctrl.ts 
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "검색 API 컨트롤러" 
 */

import { Context } from "koa"; 
import Bucket from "models/bucket"; 

export default class SearchController {
  async byBucketList(ctx: Context) {
    try {
      const SIZE = 10; 
      const { keyword, page } = ctx.params; 

      const bucketList = await Bucket.find({
        $or: [
          { 'title': { $regex: '.*' + keyword + '.*' }}, 
          { 'keywords': { $regex: '.*' + keyword + '.*'}}, 
        ], 
       }).limit(SIZE).skip(SIZE * (page-1)); 

      return ctx.body = {
        "result": bucketList 
      }

    } catch (e) {
      return ctx.throw(500, e); 
    }
  }

  
}