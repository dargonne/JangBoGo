/** 
 * @project  "JANGBOGO"
 * @file     /src/routes/bucket/index.ts
 * @version  1.0 
 * @date     2019-07-21 
 * @author   Seungjin Bang (seungjin.public＠gmail.com) 
 * @comment  "장보기 목록 API 모음"
 */

import * as Router from "koa-router"; 

import BucketController from "./bucket.ctrl"; 

const bucket: Router = new Router(); 
const bucketController: BucketController = new BucketController(); 

bucket.post("/", bucketController.addBucketList); 

bucket.get("/list/:uid", bucketController.getBucketListByUser);

bucket.get("/item/:bid", bucketController.getBucketListByItem);   
bucket.patch("/item", bucketController.modifyBucketListByItem);
bucket.delete("/item", bucketController.dropBucketListByItem); 

export default bucket; 