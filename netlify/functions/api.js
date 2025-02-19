// import express, { Router } from "express";
// import serverless from "serverless-http";

// const api = express();

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/", router);

// export const handler = serverless(api);


import express from "express";
import serverless from "serverless-http";

const api = express();
const router = express.Router();

// Define routes
router.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Attach router to match Netlify Function path
api.use("/api", router);

export const handler = serverless(api);