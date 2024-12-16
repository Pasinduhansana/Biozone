import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



mongoose

  .connect(process.env.mongodbURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });