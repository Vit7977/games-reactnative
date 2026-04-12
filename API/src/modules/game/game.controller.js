import GameService from "./game.service.js";
import * as response from "../../utils/response.js";

const GameController = {
  async createGame(req, res) {
    await GameService.createGame(req.body);
    return response.created(res, { message: "Jogo criado com sucesso!" });
  },
  async updateGame(req, res) {
    const { id } = req.params;
    const dbGame = await GameService.getGameById(id);

    // dbGame é usado como padrão em caso do usuário não atualizar todos os campos o req.body sobrescreve o dbGame
    const data = { ...dbGame, ...req.body, id };

    await GameService.updateGame(data);

    return response.success(res, {
      message: "Jogo atualizado com sucesso!",
    });
  },
  async deleteGame(req, res) {
    const game = await GameService.getGameById(req.params.id);

    if (!game) {
      return response.notFound(res, { message: "Jogo não encontrado!" });
    }

    await GameService.deleteGame(req.params.id);
    return response.success(res, {
      message: "Jogo deletado com sucesso!",
    });
  },
  async getAllGames(_, res) {
    const games = await GameService.getAllGames();
    return response.success(res, {
      message: "Jogos consultados com sucesso!",
      data: games,
    });
  },
  async getGameById(req, res) {
    const game = await GameService.getGameById(req.params.id);

    if (!game) {
      return response.notFound(res, {
        message: "Jogo não encontrado!",
      });
    }

    return response.success(res, {
      message: "Jogo consultado com sucesso!",
      data: game,
    });
  },
};

export default GameController;
