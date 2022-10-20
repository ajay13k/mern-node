const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://145d-116-206-151-194.in.ngrok.io",
    ],
  })
);

app.use(express.json());
const userRoute = require("./Routes/userRoute");
app.use("/api", userRoute);

const productRoute = require("./Routes/productRoute");
app.use("/api", productRoute);
app.listen(3600, console.log("server is running "));
