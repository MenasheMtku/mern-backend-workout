require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    // Change to your frontend's URL
    // origin: "http://localhost:3000",
    origin: "https://workot-mern-app.netlify.app",
    // If you need to send cookies or authentication
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app - (message from the backEnd)" });
});
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to db & listening on port ${port} !!!`);
    });
  })
  .catch(error => {
    console.log(error);
  });
