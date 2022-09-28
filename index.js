import mongoose from "mongoose";

import { app } from "./app.js";
const start = async () => {
  // await mongoose.connect(
  //   "mongodb://localhost:27017/course-goals",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   },
  //   (err) => {
  //     if (err) {
  //       console.error("FAILED TO CONNECT TO MONGODB");
  //       console.error(err);
  //     } else {
  //       console.log("CONNECTED TO MONGODB");
  //       app.listen(80);
  //     }
  //   }
  // );
  await app.listen(1234);
  console.log("Listening on port 1234");
};

start();
