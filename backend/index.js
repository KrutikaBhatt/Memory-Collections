import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
//The app object is instantiated on creation of the Express server. 
const app = express();
dotenv.config();

// body-parser middleware in our application is Third Party Middlewares
//The use of body-parser is that it’s used to parse the body of the incoming request typically a JSON request.
app.use(bodyParser.json({limit :"30mb",extended :true}));
app.use(bodyParser.urlencoded({limit :"30mb",extended :true}));
app.use(cors());

app.use('/posts',postRoutes);

const PORT = process.env.PORT || 8080;

const mongoose_option ={
    useNewUrlParser :true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.CONNECTION_URL,mongoose_option)
    .then(()=>{
        app.listen(PORT,()=> console.log("Backend Server running at port 8080"))
    }).catch((error)=>{console.log("The error occured in Monogodb connection ",error.message)})

mongoose.set('useFindAndModify',false);