const express = require("express");
const app = express(); // Initialize Express app

// Enable CORS for all routes
const cors = require("cors");
app.use(cors());
const Port = 5000; // Specify the port number

// importing all controllers
const Form = require("./Controller/FormController");

// middle ware

app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://likhithk:R4uQGVrrT3osopDK@comstore.rlqdj.mongodb.net/ComStore"
  )
  .then((res) => {
    console.log("MongoDB Connected Successfully ");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes for all

// post
app.post("/api/Form", Form.FormPost);

// get
app.get("/api/GetForms", Form.GetAllForms);

// delete

app.delete("/api/DeleteFormById/:id", Form.DeleteForm);

// Start the server on 127.0.0.1
app.listen(Port, "127.0.0.1", () => {
  console.log(`Server started at ` + Port);
});
