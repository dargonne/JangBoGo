/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/notice/notice.ctrl.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "공지사항 컨트롤러"
 */

import { Context } from "koa";

import Notice from "models/notice"; 

export default class NoticeController {

  /** 공지글 목록 수신 */
  async getList(ctx: Context) {
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
  async getArticle(ctx: Context) {
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
  async addArticle(ctx: Context) {
    const { title, content, } = ctx.request.body; 

    const notice = new Notice({
      title, 
      content 
    }); 

    try {
      await notice.save(); 
      ctx.body = {
        "result" : true
      }; 
    } catch(e) {
      return ctx.throw(500, e); 
    } 

  }

  /** 특정 공지글 내용 수정 */
  async editArticle(ctx: Context) {
    const { id } = ctx.params; 
    const { title, content } = ctx.request.body; 

    try {

      await Notice.findByIdAndUpdate(id, { title, content, edited_dt: Date.now()})
            .setOptions({ runValidators: true }); 

    } catch (e) {
      ctx.throw(500, e); 
    } 

    ctx.body = {
      "result": true, 
    }
  }

  /** 특정 공지글 내용 삭제 */
  async dropArticle(ctx: Context) {
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