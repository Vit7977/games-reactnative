import GameService from "./game.service.js";

const GameController = {
  async createGame(req, res) {
    const result = await GameService.createGame(req.body);
    return res.status(201).json({
        message: "OK!",
        result
    });
  },
};

export default GameController;