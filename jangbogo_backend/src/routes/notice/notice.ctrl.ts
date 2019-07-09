/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/notice/notice.ctrl.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "공지사항 컨트롤러"
 */

import * as mongoose from "mongoose"; 
import { Context } from "koa";

import Notice from "models/notice"; 
import SETTINGS from "settings/index"; 
import notice from "models/notice";

const SERVER_URL = SETTINGS[process.env.NODE_ENV].database.mongoDB; 

export default class NoticeController {

  constructor() {
    mongoose.connect(SERVER_URL, { useNewUrlParser: true }); 
  }

  /** 공지글 목록 수신 */
  public async getList(ctx: Context) {
    const { pageNo } = ctx.params; 

    let articles; 

    try {
      articles = await Notice.find()
                 .sort({_id: -1})
                 .skip((pageNo-1)*10)
                 .limit(10); 
      
    } catch (e) {
      return ctx.throw(500, e); 
    }
    ctx.body = articles; 
  } 

  /** 특정 공지글 내용 수신 */
  public async getArticle(ctx: Context) {
    const { id } = ctx.params; 
    
    let article; 

    try {
      article = await Notice.find({ _id: id });
    } catch (e) {
      return ctx.throw(500, e); 
    }

    ctx.body = article; 
  }

  /** 신규 공지글 등록 */
  public addArticle(ctx: Context) {
    const { title, content, } = ctx.request.body; 

    const notice = new Notice({
      title, 
      content 
    }); 

    try {
      notice.save(); 
      ctx.body = {
        "result" : true
      }; 
    } catch(e) {
      return ctx.throw(500, e); 
    }

  }

  /** 특정 공지글 내용 수정 */
  public async editArticle(ctx: Context) {
    const { id } = ctx.params; 
    const { title, content } = ctx.request.body; 

    try {

      await notice.where({ _id: id })
            .updateOne({ 
              title, 
              content, 
              edited_dt: Date.now() 
            })
            .setOptions({ runValidators: true }); 

    } catch (e) {
      ctx.throw(500, e); 
    }

    ctx.body = {
      "result": true, 
    }
  }

  /** 특정 공지글 내용 삭제 */
  public async dropArticle(ctx: Context) {
    const { id } = ctx.request.body; 

    try {
      await Notice.findByIdAndRemove(id); 
    } catch (e) {
      ctx.throw(500, e); 
    }

    ctx.body = {
      "result" : true, 
    }
  }
}