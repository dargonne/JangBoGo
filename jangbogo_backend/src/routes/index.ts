import * as Router from 'koa-router'; 

import notice from './notice'; 

const api = new Router(); 

api.use("/notice", notice.routes()); 

export default api; 