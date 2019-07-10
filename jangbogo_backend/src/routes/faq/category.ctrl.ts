/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/faq/category.ctrl.ts
 * @version  1.0 
 * @date     2019-07-10
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "FAQ 카테고리 라우트 컨트롤러"
 */

 import { Context } from "koa"; 
 import FaqCategory from "models/faqCategories"; 

 export default class FaqCategoryController {

    /** 카테고리 목록 수신 */
    async getCategories(ctx: Context) {
      let categories; 

      try {
        categories = await FaqCategory.find(); 
      } catch (e) {
        return ctx.throw(500, e); 
      }

      ctx.body = categories; 
    }

    /** FAQ 카테고리 추가 */
    async addCategory(ctx: Context) {
      const { category } = ctx.request.body; 

      const faqCategory = new FaqCategory({
        category, 
      }); 

      try {
        await faqCategory.save(); 
        ctx.body = {
          "result": true 
        }; 
      } catch(e) {
        return ctx.throw(500, e); 
      } 
    }

    /** FAQ 카테고리 수정 */
    async editCategory(ctx: Context) {
      const { id } = ctx.params; 
      const { category } = ctx.request.body; 

      try {
        await FaqCategory.where({ _id: id })
              .updateOne({
                category, 
              })
              .setOptions({ runValidators: true }); 

      } catch(e) {
        return ctx.throw(500, e); 
      }

      ctx.body = {
        "result": true, 
      }
    }

    /** FAQ 카테고리 삭제 */
    async dropCategory(ctx: Context) {
      const { id } = ctx.request.body; 

      try {
        await FaqCategory.findByIdAndRemove(id); 
      } catch(e) {
        return ctx.throw(500, e); 
      }

      ctx.body = {
        "result": true, 
      }
    }


 }