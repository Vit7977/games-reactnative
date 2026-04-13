import express from "express";
import cors from "cors";
import "dotenv/config";

import GameRouter from "./modules/game/game.routes.js";
import StoreRouter from "./modules/store/store.routes.js";
import GameStoreRouter from "./modules/game_store/game_store.routes.js";

const PORT = process.env.API_PORT;
const api = express();

api.use(cors());
api.use(express.json());

api.use("/api/jogo", GameRouter);
api.use("/api/loja", StoreRouter);
api.use("/api/jogo_loja", GameStoreRouter);

api.listen(PORT, () => {
  console.log(`API: http://localhost:${PORT}`);
});
