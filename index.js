import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import app from "./src/app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is Listening at", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error Occured in running Server at", process.env.PORT);
  });
