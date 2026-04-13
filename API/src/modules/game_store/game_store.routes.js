import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createGameStoreDTO } from "./game_store.dto.js";
import GameStoreController from "./game_store.controller.js";

const router = Router();

router.post(
  "/",
  validate(createGameStoreDTO),
  GameStoreController.createGameStore,
);

export default router;
