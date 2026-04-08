import GameService from "./game.service.js";
import * as response from "../../utils/response.js";

const GameController = {
  async createGame(req, res) {
    await GameService.createGame(req.body);
    return response.created(res, { message: "Jogo criado com sucesso!" });
  },
  async getAllGames(_, res){
    const result = await GameService.getAllGames();
    return response.success(res, { message: "Jogos consultados com sucesso!", data: result });
  }
};

export default GameController;
