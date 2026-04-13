import GameStoreService from "./game_store.service.js";
import * as response from "../../utils/response.js";

const GameStoreController = {
  async createGameStore(req, res) {
    await GameStoreService.createGameStore(req.body);
    return response.created(res, {
      message: "Jogo em loja criado com sucesso!",
    });
  },
};

export default GameStoreController;
