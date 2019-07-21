/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/bucket/bucket.ctrl.ts
 * @version  1.0 
 * @date     2019-07-21 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보기 목록 API 미들웨어"
 */

import { Context } from "koa"; 

import Bucket from "models/bucket"; 

export default class BucketController {

  /** 유저별 등록된 장보기 목록 가져오기(Only Title) */
  async getBucketListByUser(ctx: Context) {
    try {
      const { uid } = ctx.params; 
    
      const userBucketList = await Bucket.find({ writer: uid }); 

      return ctx.body = {
        "result": userBucketList, 
      }

    } catch(e) {
      return ctx.throw(500, e); 
    }
  } 

  /** 새 장보기 목록 등록 */
  async addBucketList(ctx: Context) {
    try {
      const { template } = ctx.request.body; 
      
      const newBucket = new Bucket(template); 
    
      await newBucket.save(); 

      return ctx.body = {
        "result": true, 
      }

    } catch(e) {
      return ctx.throw(500, e); 
    }
  }

  /** 선택한 장보기 목록 가져오기 */
  async getBucketListByItem(ctx: Context) {
    try {
      const { bid } = ctx.params; 

      const bucketItem = await Bucket.findById(bid); 

      return ctx.body = {
        "result": bucketItem, 
      }

    } catch (e) {
      return ctx.throw(500, e); 
    }
  }

  /** 선택한 장보기 목록 삭제 */
  async dropBucketListByItem(ctx: Context) {
    try {
      const { bid } = ctx.request.body; 
      
      await Bucket.findByIdAndRemove(bid); 

      return ctx.body = {
        "result": true, 
      }

    } catch(e) {
      return ctx.throw(500, e); 
    }
  }

  /** 특정 장보기 목록 수정 */
  async modifyBucketListByItem(ctx: Context) {
    try {
      const { bid, template } = ctx.request.body; 

     await Bucket.findByIdAndUpdate(bid, {
                ...template, 
                edited_dt: Date.now() 
            });

      return ctx.body = {
        "result": true, 
      }; 
    } catch(e) {
      return ctx.throw(500, e); 
    }
  }
}