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
import SETTINGS_INFO from 'settings/index'; 

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
    username: String, 
    thumbnail: { 
      type: String, 
      default: "http://image.yes24.com/momo/TopCate1363/MidCate006/136259905.jpg"
    }
  }, 
  email: String, 
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

/** 해시 비밀번호 발급 */
async function generateHash(password) {
  const VALIDATE_INFO: any = SETTINGS_INFO[process.env.NODE_ENV].bcrypt; 

  const SALT: any = bcrypt.genSalt(VALIDATE_INFO.salt); 
  return await bcrypt.hash(password, SALT);  
}

/** 이메일 중복 확인 */
accountSchema.static.findByEmail = function (email: string) {
  return this.findOne({email: email}); 
}

/** 이름과 이메일을 통해 회원 조회 */
accountSchema.static.findAccountInfo = function(name: string, email: string) {
  return this.findOne({
          'profile.username': name, 
           email 
         }); 
};



/** 이메일로 회원 가입 */
accountSchema.methods.addLocalUser = function (cb: any) {
  this.password = generateHash(this.password); 

  return this.save(cb); 
}

/** 비밀번호 검증 확인 */
accountSchema.methods.validatePassword = function (password: string) {

}

export default model<IAccount>("Account", accountSchema, "account_collection"); 


