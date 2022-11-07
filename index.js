import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const URI = "mongodb://localhost:27017/fullstack_db";
const urlMongo ="mongodb+srv://awalmakka:awalmakka@cluster0.v86wgfg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(urlMongo,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));