import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from './routes/user.js'
const PORT = 8081;


const app = express();

app.use(express.json());
app.use(cors);

app.use('/auth', userRouter)

mongoose.connect(
  "mongodb+srv://new:mernpassword123@recipes.wijqwnk.mongodb.net/recipes?retryWrites=true&w=majority"
  );


  app.listen(PORT, () => { console.log("Listening on port " + PORT)})
