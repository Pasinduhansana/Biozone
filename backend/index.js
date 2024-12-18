import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './router/router.js'; 
import adminRoutes from './router/Adminroutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect(process.env.mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });

app.use('/api/admin', Routes);
app.use("/api/auth/admin", adminRoutes);
