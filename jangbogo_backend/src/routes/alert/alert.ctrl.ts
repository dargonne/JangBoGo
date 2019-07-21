/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/alert/alert.ctrl.ts 
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "알림 API 미들웨어" 
 */

import { Context } from "koa"; 
import AlertItem from "models/alertcall"; 

export default class AlertController {
  
  /** 회원별 알림 목록 가져오기(최근 10개 기준 feed 방식으로) */
  async getAlertList(ctx: Context) {
    try {
      const SIZE: number = 10; 
      const { uid, page } = ctx.params; 

      const alertListByUser = await AlertItem.find({
                                     target: uid 
                                    })
                                    .sort({ call_dt: -1 })
                                    .limit(10)
                                    .skip(SIZE * (page - 1)); 

      return ctx.body = {
        "result": alertListByUser, 
      }; 

    } catch (e) {
      return ctx.throw(500, e); 
    }
  }

  /** 알림 등록(개인 혹은 단체) */
  async addAlertItem(ctx: Context) {
    try {
      const { template } = ctx.request.body; 

      const alertItem = new AlertItem(template); 

      await alertItem.save(); 

      return ctx.body = {
        "result": true, 
      }
        
    } catch(e) {
      return ctx.throw(500, e); 
    }
  }

  /** 특정 알림 삭제 */
  async dropAlertItem(ctx: Context) {
    try {
      const { aid } = ctx.request.body; 

      await AlertItem.findByIdAndRemove(aid); 

      return ctx.body = {
        "result": true, 
      }
    } catch (e) {
      return ctx.throw(500, e); 
    }
  }
}