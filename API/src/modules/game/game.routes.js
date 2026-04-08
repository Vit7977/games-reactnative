import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createGameDTO } from "./game.dto.js";
import GameController from "./game.controller.js";

const router = Router();

router.get("/", GameController.getAllGames)
router.post("/", validate(createGameDTO), GameController.createGame);

export default router;
