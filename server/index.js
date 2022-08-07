import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb://admin:admin@ac-mi7axdx-shard-00-00.1zfafwg.mongodb.net:27017,ac-mi7axdx-shard-00-01.1zfafwg.mongodb.net:27017,ac-mi7axdx-shard-00-02.1zfafwg.mongodb.net:27017/?ssl=true&replicaSet=atlas-922wxq-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
