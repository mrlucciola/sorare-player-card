// modules
import express from "express";
import { createProxyMiddleware, Filter, Options, RequestHandler } from "http-proxy-middleware";
import cors from "cors";
import bodyParser from "body-parser";
import { join } from "path";

// constants
const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  "/graphql",
  createProxyMiddleware({
    target: "https://api.sorare.com/",
    changeOrigin: true,
  })
);

// init
// const app = express();
// // middlewares
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // serve static resources from client
// // app.use(express.static(join(__dirname, "../../client/public")));
// // Serve the HTML page
// app.get("/", (req: any, res: any) => {
//   res.send("Hello World!");
// });

// // start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
