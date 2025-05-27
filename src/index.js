import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.cwd(), '.env')
});

import connectDB from "./db/index.js";
import {app} from './app.js'

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
=======
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import connectDB from "./db/index.js";
import {app} from './app.js'

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
>>>>>>> 749b53ae01bd7206b86f37b25ce57d09e6f79bda
