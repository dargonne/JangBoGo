/** 
 * @project  "JANGBOGO"
 * @file     /src/server.ts
 * @version  1.0 
 * @date     2019-07-09 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보고 Koa Backend Server Code"
 */

import * as Koa from "Koa"; 
import * as logger from "koa-logger"; 
import * as json from "koa-json"; 
import * as bodyParser from "koa-bodyparser"; 
import * as mongoose from "mongoose"; 

import router from 'routes/index'; 
import SETTINGS from "settings/index"; 

export default class App {

  app: Koa;

  constructor() {
    this.app = new Koa(); 
    this.middleware(); 
    this.databaseConn(); 
  }

  middleware(): void {
    const { app } = this; 
    app.use(json()); 
    app.use(logger()); 
    app.use(bodyParser()); 
    app.use(router.routes()).use(router.allowedMethods());
  }

  databaseConn(): void {
    const SERVER_URL = SETTINGS[process.env.NODE_ENV].database.mongoDB; 

    try {
      mongoose.connect(SERVER_URL, { useNewUrlParser: true })
    } catch (err) {
      console.log("*************************************"); 
      console.log(`Error Occured @ Database Connection`); 
      console.log(`${err}`); 
      console.log("*************************************"); 
    }
  }

  listen(port: number): void {
    const { app } = this; 
    app.listen(port); 

    console.log("*************************************"); 
    console.log(`BACKEND-SERVER MODE : ${process.env.NODE_ENV}`); 
    console.log(`JANGBOGO SERVER RUNNING @ PORT : ${port}`); 
    console.log("*************************************"); 
  }
}


