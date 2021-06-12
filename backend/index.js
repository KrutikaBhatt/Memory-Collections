import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//The app object is instantiated on creation of the Express server. 
const app = express();

// body-parser middleware in our application is Third Party Middlewares
//The use of body-parser is that it’s used to parse the body of the incoming request typically a JSON request.
app.use(bodyParser.json({limit :"30mb",extended :true}));
app.use(bodyParser.urlencoded({limit :"30mb",extended :true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://krutika:krutika123@cluster0.cwqdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8080;

mongoose_option ={
    useNewUrlParser :true,
    useUnifiedTopology:true
}

mongoose.connect(CONNECTION_URL,mongoose_option)
    .then(()=>{
        app.listen(PORT,()=> console.log("Backend Server running at port 5000"))
    }).catch(()=>{})