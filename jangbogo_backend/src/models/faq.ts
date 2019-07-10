/** 
 * @project  "JANGBOGO"
 * @file     /src/models/faq.ts
 * @version  1.0 
 * @date     2019-07-10 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "FAQ(자주 묻는 질문) DB 스키마"
 */

 import { Schema, Document, model } from 'mongoose'; 

 export interface IFaq extends Document {
   category: string; 
   title: string; 
   content: string; 
   created_dt: Date; 
   edited_dt: Date; 
 }; 

 const faqSchema: Schema = new Schema({
   category: String,
   title: String, 
   content: String, 
   created_dt: { type: Date, default: Date.now }, 
   edited_dt: { type: Date, default: null },  
 }); 

 export default model<IFaq>("Faq", faqSchema, "faq_collection"); 
