/** 
 * @project  "JANGBOGO"
 * @file     /src/app.ts
 * @version  1.0 
 * @date     2019-07-10
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보고 서버 Bootstrapping"
 */

import Server from './server'; 

let SERVER: Server; 
let PORT: number; 

PORT = process.env.NODE_ENV === 'development' ? 3000 : 8080; 

if(PORT) {
  SERVER = new Server(); 
  SERVER.listen(PORT); 
}