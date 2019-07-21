import * as request from "request"; 
import SETTINGS from "settings/index"; 

export default class SocialAuth {
  async authNaver(code: string) {
    try {
      const keyInfo: object = SETTINGS[process.env.NODE_ENV].auth.naver; 
      
    } catch (e) {
      throw new Error("Error Occured at authNaver"); 
    }
  }

  async authKakao(code: string) {
    try {
      const keyInfo: object = SETTINGS[process.env.NODE_ENV].auth.kakao; 
    } catch (e) {
      throw new Error("Error Occured at authKakao"); 
    }
  }
}