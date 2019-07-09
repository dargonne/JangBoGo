import * as Router from 'koa-router'; 

const notice = new Router(); 

notice.get("/", async(ctx, next) => {
  try {
    ctx.body = { msg: "Hello notice!"} 
  } catch (err) {
    ctx.status = err.status || 500; 
    ctx.body = err.message; 
    ctx.app.emit('error', err, ctx); 
  }
}); 

export default notice; 