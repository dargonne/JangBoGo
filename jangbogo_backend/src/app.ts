import * as Koa from "Koa"; 
import * as Router from "koa-router"; 

import * as logger from "koa-logger"; 
import * as json from "koa-json"; 
import * as bodyParser from "koa-bodyparser"; 

import api from './routes'; 

const app = new Koa(); 
const router = new Router(); 

const PORT = process.env.NODE_ENV === 'development' ? 3000 : 8080; 

// middlewares 
app.use(json()); 
app.use(logger()); 
app.use(bodyParser()); 

// routes 
router.use("/api/v1", api.routes()); 
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("*************************************"); 
  console.log(`BACKEND-SERVER MODE : ${process.env.NODE_ENV}`); 
  console.log(`JANGBOGO SERVER RUNNING @ PORT : ${PORT}`); 
  console.log("*************************************"); 
}); 

