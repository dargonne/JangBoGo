import * as bcrypt from 'bcryptjs'; 
import SETTINGS_INFO from 'settings/index'; 

export default class BcryptModule {
  
  VALIDATE_INFO: any; 
  SALT: any; 

  constructor() {
    this.VALIDATE_INFO =  SETTINGS_INFO[process.env.NODE_ENV].bcrypt;
    this.SALT = bcrypt.genSaltSync(this.VALIDATE_INFO.salt); 
  }

  async generateHash(password: string) {
    try {
      return bcrypt.hashSync(password, this.SALT); 
    } catch (e) {
      throw new Error("Error occured from password encryption"); 
    }
  }
}