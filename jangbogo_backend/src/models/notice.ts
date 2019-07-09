/** 
 * @project  "JANGBOGO"
 * @file     /src/models/notice/index.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "공지사항 DB 스키마"
 */

import { Schema, Document, model } from 'mongoose'; 

export interface INotice extends Document {
  title: string; 
  content: string; 
}; 

export interface INoticeModel extends INotice, Document {
  created_dt: Date; 
  edited_dt: Date; 
}

const noticeSchema = new Schema({
  title: String, 
  content: String, 
  created_dt: { type: Date, default: Date.now }, 
  edited_dt: { type: Date, default: null }, 
})

export default model<INotice>("Notice", noticeSchema, "notice_collection"); 