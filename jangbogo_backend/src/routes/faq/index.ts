/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/faq/index.ts
 * @version  1.0 
 * @date     2019-07-10
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "FAQ API 모음"
 */

 import * as Router from 'koa-router'; 
 import FaqCategoryController from 'routes/faq/category.ctrl'; 
 import FaqController from 'routes/faq/faq.ctrl'; 

 const faq: Router = new Router(); 
 const faqCategoryController: FaqCategoryController = new FaqCategoryController();
 const faqController: FaqController = new FaqController(); 

 /** Faq Category 관련 라우팅 */
 faq.get("/category", faqCategoryController.getCategories); 
 faq.post("/category", faqCategoryController.addCategory);
 faq.delete("/category", faqCategoryController.dropCategory); 
 faq.patch("/category/:id", faqCategoryController.editCategory); 

 /** Faq 자주묻는 질문 관련 라우팅 */
 faq.post("/article", faqController.addFaqArticle); 
 faq.delete("/article", faqController.dropFaqArticle); 
 faq.get("/article/:category", faqController.getListByCategory); 
 faq.patch("/article/:id", faqController.editFaqArticle); 
 export default faq; 