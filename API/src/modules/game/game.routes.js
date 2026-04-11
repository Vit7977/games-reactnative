import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createGameDTO, getGameByIdDTO, updateGameDTO } from "./game.dto.js";
import GameController from "./game.controller.js";

const router = Router();

router.get("/", GameController.getAllGames);
router.get(
  "/:id",
  validate(getGameByIdDTO, "params"),
  GameController.getGameById,
);

router.post("/", validate(createGameDTO), GameController.createGame);

router.put(
  "/:id",
  validate(getGameByIdDTO, "params"),
  validate(updateGameDTO),
  GameController.updateGame,
);

router.delete(
  "/:id",
  validate(getGameByIdDTO, "params"),
  GameController.deleteGame,
);

export default router;
