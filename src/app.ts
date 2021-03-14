import "reflect-metadata";
import express from 'express';
import createConnection from './database';
import { router } from "./routes/routers";

createConnection().then((a)=>{
    //a.runMigrations()
    console.log('Connected to database')
})


const app = express();
app.use(express.json());
app.use(router);

export {app}