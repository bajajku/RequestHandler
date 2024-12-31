import express from 'express';
import {S3} from 'aws-sdk';

const app = express();


app.get("/*", (req, res)=>{

    // id.kunalVercel.com
    const host = req.hostname;
    const id = host.split(".")[0]; // ['id', 'kunalVercel', "com"]

    const filePath = req.path;

})

app.listen(3001);
