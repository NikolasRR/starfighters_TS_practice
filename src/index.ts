import express from "express";
import 'dotenv/config';
import cors from "cors";
import chalk from "chalk";

import router from "./routes/router.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(process.env.PORT, () => {
    console.log(chalk.bold.blue(`Server is up on port: ${process.env.PORT}`));
  });