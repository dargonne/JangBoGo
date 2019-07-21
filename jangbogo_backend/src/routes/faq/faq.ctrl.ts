/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/faq/faq.ctrl.ts
 * @version  1.0 
 * @date     2019-07-10
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "FAQ(자주묻는 질문) 라우트 컨트롤러"
 */
 import { Context } from "koa"; 

 import Faq from "models/faq"; 

 export default class FaqController {
   /** 카테고리별 자주묻는 질문 목록 반환 */
   async getListByCategory(ctx: Context) {
     const { category } = ctx.params; 

     let articles; 

     try {
       articles = await Faq.find({ category }); 
     } catch(e) {
       ctx.throw(500, e); 
     }

     ctx.body = articles; 
   }
   
   /** 신규 자주묻는 질문 글 등록 */
   async addFaqArticle(ctx: Context) {
     const { category, title, content } = ctx.request.body; 

     try {
      const faqArticle = new Faq({
        category, 
        title, 
        content, 
      }); 

      await faqArticle.save(); 
     } catch (e) {
       ctx.throw(500, e); 
     }

     ctx.body = {
       "result": true, 
     }
   }

   /** 특정 자주묻는 질문 글 수정 */
   async editFaqArticle(ctx: Context) {
     const { id } = ctx.params;
     const { category, title, content } = ctx.request.body;  

     try {
       await Faq.findByIdAndUpdate(id, { category, title, content, edited_dt: Date.now()}).setOptions({ runValidators: true }); 

     } catch (e) {
       ctx.throw(500, e); 
     }

     ctx.body = {
       "result": true, 
     }
   }

   /** 특정 자주묻는 질문 글 삭제 */
   async dropFaqArticle(ctx: Context) {
    const { id } = ctx.request.body; 

    try {
      await Faq.findByIdAndRemove(id); 
    } catch (e) {
      ctx.throw(500, e); 
    }

    ctx.body = {
      "result": true, 
    }
   }
 }