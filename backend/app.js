 const express = require("express");
 const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const product=require("./routes/product");
const order=require("./routes/order");


connectDatabase();

app.use(express.json())

// CORS middleware
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      return res.status(200).end();
   }
   next();
});

app.use('/api/v1/',product);
app.use('/api/v1/',order);

 app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
 });