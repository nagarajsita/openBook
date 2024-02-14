import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import bodyParser from "body-parser";
import bookRoute from "../backend/routes/bookRoute.js"
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

//Allows all origins
app.use(cors());
//allows custome origins

// app.use(
//   cors({
//     origin:'https://localhost:3000',
//     methods:['GET','PUT','PUT','DELETE'],
//     allowedHeaders:['Content-Type'], 
//   })
// );


app.get("/", (req, res) => {
  return res.status(234).send("Welcome bitches!!!");
});


app.use("/books",bookRoute)
 
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is loading on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });