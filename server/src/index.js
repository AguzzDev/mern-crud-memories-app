import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

(() => {
  const Whitelist = [
    "http://localhost:3000",
    "https://aguzzdev-twitter.netlify.app",
  ];

  const app = express();
  const server = http.createServer(app);

  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors({ origin: Whitelist }));

  app.use("/user", userRoutes);
  app.use("/post", postRoutes);

  mongoose
    .connect(process.env.DB_URL)
    .then(() => server.listen(process.env.PORT, () => console.log("🚀")))
    .catch((error) => console.log("❌"));
})();
