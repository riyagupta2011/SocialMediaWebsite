const express=require('express');
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")
const app=express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Mongo db connected")
}).catch((err)=>console.log(err));

//middleware
app.use(express.json());
app.use(helmet())
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);
app.listen(8800,()=>{
    console.log("backend server is running")
})