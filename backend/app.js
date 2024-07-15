const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const connectDB = require("./db/db");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/usersRoutes");
const courseRoutes = require("./routes/coursesRoutes");

const app = express();

// DB connection
connectDB();

app.use(express.json());

//cors
app.use(cors());

//routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);

// error handler. Call next(err) on controller files
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
