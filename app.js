const express = require("express");
const app = express();

const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");

require('dotenv').config()

app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const PORT = 5050;

const start= async() => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`app listening on server ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

