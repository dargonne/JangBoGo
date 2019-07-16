/** 
 * @project  "JANGBOGO"
 * @file     /src/models/account.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "회원 DB 스키마"
 */

import { Schema, Document, model } from 'mongoose'; 

import * as bcrypt from 'bcryptjs'; 

export interface IAccount extends Document {
  profile: IAccountProfile; 
  email: string; 
  password: string; 
  social: IAccountSocial;  
  created_dt: Date; 
}

export interface IAccountProfile extends Document {
  username: string; 
  thumbnail: string; 
}

export interface IAccountSocial extends Document {
  kakao: IAccountSocialDetail;  
  naver: IAccountSocialDetail; 
}

export interface IAccountSocialDetail extends Document {
  id: string; 
  accessToken: String; 
}

const accountSchema: Schema = new Schema({
  profile: {
    username: { type: String, index: true }, 
    thumbnail: { 
      type: String, 
      default: "http://image.yes24.com/momo/TopCate1363/MidCate006/136259905.jpg"
    }
  }, 
  email: { type: String, unique: true, index: true  }, 
  password: String, 
  social: {
    kakao: {
      id: { type: String, default: null }, 
      accessToken: { type: String, default: null }, 
    }, 
    naver: {
      id: { type: String, default: null }, 
      accessToken: { type: String, default: null }, 
    }
  }, 
  created_dt: { type: Date, default: Date.now } 
}); 


export default model<IAccount>("Account", accountSchema, "account_collection"); 


