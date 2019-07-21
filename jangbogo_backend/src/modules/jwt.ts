import * as jwt from "jsonwebtoken"; 
import SETTINGS from "settings/index"; 

export default class JWTmodule {
  SECRET: string; 

  constructor() {
    this.SECRET = SETTINGS[process.env.NODE_ENV].auth.jwt; 
  }

  async generateToken(target: Object) {
    try {
      return await jwt.sign(target, this.SECRET, { expiresIn: '1d'}); 
    } catch (e) {
      throw new Error("Error occured from generate jwt"); 
    }
  }

  async decodeToken(token: string) {
    try {
      return await jwt.verify(token, this.SECRET); 
    } catch (e) {
      throw new Error("Error occured from refresh jwt"); 
    }
  }
}