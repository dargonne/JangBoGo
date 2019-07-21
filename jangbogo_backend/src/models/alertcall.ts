/** 
 * @project  "JANGBOGO"
 * @file     /src/models/alertcall.ts
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "개인 알림 모델"
 */

import { Schema, Document, model } from "mongoose"; 

export interface IAlertItem extends Document {
  target: string, 
  content: string, 
  call_dt: Date, 
}

const alertItemSchema: Schema = new Schema({
  target: { type: String }, 
  content: { type: String }, 
  call_dt: { type: Date, default: Date.now }, 
}); 

export default model<IAlertItem>("Alerts", alertItemSchema, "alerts_collection"); 