import express from "express";
import cors from "cors";
import "dotenv/config";

import GameRouter from "./modules/game/game.routes.js";

const PORT = process.env.API_PORT;
const api = express();

api.use(cors());
api.use(express.json());

api.use("/api/game", GameRouter);

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
