import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import {
  createGameStoreDTO,
  getGameStoreById,
  updateGameStoreDTO,
} from "./game_store.dto.js";
import GameStoreController from "./game_store.controller.js";

const router = Router();

router.get("/", GameStoreController.getAllGameStore);

router.get(
  "/:id",
  validate(getGameStoreById, "params"),
  GameStoreController.getGameStoreById,
);

router.post(
  "/",
  validate(createGameStoreDTO),
  GameStoreController.createGameStore,
);

router.put(
  "/:id",
  validate(getGameStoreById, "params"),
  validate(updateGameStoreDTO),
  GameStoreController.updateGameStore,
);

router.delete(
  "/:id",
  validate(getGameStoreById, "params"),
  GameStoreController.deleteGameStore,
);

export default router;
