// modules
import express from "express";
import {
  createProxyMiddleware,
  // Filter,
  // Options,
  // RequestHandler,
} from "http-proxy-middleware";
import cors from "cors";
// import bodyParser from "body-parser";
// import { join } from "path";

// constants
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/graphql",
  createProxyMiddleware({
    target: "https://api.sorare.com/",
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  })
);

// start server
app.listen(PORT);
