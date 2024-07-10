const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./db/db");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/usersRoutes");

const app = express();

// DB connection
connectDB();

//routes
app.use("/api", userRoutes);

// error handler. Call next(err) on controller files
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
