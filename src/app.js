import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    // origin: process.env.CORS_ORIGIN, //Whitelisting the URL
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
); //Use to allow CORS

app.use(express.json({ limit: "20kb" })); //accepting the json
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("Public"));

//Routes
import userRouter from "./routes/data.routes.js";
app.use("/api/v1/users", userRouter);

export default app;
