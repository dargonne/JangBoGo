/** 
 * @project  "JANGBOGO"
 * @file     /src/models/bucket.ts
 * @version  1.0 
 * @date     2019-07-21
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보기 목록 DB 스키마"
 */

 import { Schema, Document, model } from 'mongoose'; 

 export interface IBucketItem {
   name: string, 
   category: string, 
   quantity: number, 
 }

 export interface IKeywordItem {
   kwdItem: string, 
 }

 export interface IThumbnailItem {
   imgPath: string, 
 }

 export interface IBucket extends Document {
   title: string, 
   writer: string, 
   items: Array<IBucketItem>, 
   write_dt: Date, 
   edited_dt: Date, 
   keywords: Array<IKeywordItem>,
   thumbnails: Array<IThumbnailItem>,  
   views: number, 
   isPublic: boolean
 }

 const bucketSchema: Schema = new Schema({
   title: { type: String, index:true }, 
   writer: { type: String }, 
   items: { type: Array, index: true, default: [] }, 
   write_dt: { type: Date, default: Date.now }, 
   edited_dt: { type: Date, default: null }, 
   keywords: { type: Array, index: true, default: []},
   thumbnails: { type: Array, default:[]}, 
   views: { type: Number, default: 0 }, 
   isPublic: { type: Boolean, default: false }, 
 }); 

 export default model<IBucket>("Bucket", bucketSchema, "bucket_collection"); 