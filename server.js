const express = require("express");
const cors = require('cors');
const connectDB = require("./mongoDB");
const todoRoute = require("./routes/todoRoutes");


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", todoRoute);

app.listen( PORT , () => {
     console.log(`Server is running at port :- ${PORT}`);
     
});  


