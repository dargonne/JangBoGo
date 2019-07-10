/** 
 * @project  "JANGBOGO"
 * @file     /src/models/faqCategories.ts
 * @version  1.0 
 * @date     2019-07-10 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "FAQ(자주 묻는 질문) 카테고리 DB 스키마"
 */

import { Schema, Document, model } from 'mongoose'; 

export interface IFaqCategory extends Document {
  category: string; 
}

const faqCategorySchema: Schema = new Schema({
  category: String 
}); 

export default model<IFaqCategory>("FaqCategory", faqCategorySchema, "faq_category_collection"); 