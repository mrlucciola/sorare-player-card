// modules
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

// constants
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
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
