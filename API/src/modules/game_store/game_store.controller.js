import GameStoreService from "./game_store.service.js";
import * as response from "../../utils/response.js";

const GameStoreController = {
  async createGameStore(req, res) {
    await GameStoreService.createGameStore(req.body);
    return response.created(res, {
      message: "Jogo em loja criado com sucesso!",
    });
  },
  async updateGameStore(req, res) {
    const { id } = req.params;
    const dbGameStore = await GameStoreService.getGameStoreById(req.params.id);

    if (!dbGameStore) {
      return response.notFound(res, {
        message: "Jogo em loja não encontrado!",
      });
    }

    const data = { ...dbGameStore, ...req.body, id };
    await GameStoreService.updateGameStore(data);
    return response.success(res, {
      message: "Jogo em loja atualizado com sucesso!",
    });
  },
  async deleteGameStore(req, res) {
    const dbGameStore = await GameStoreService.getGameStoreById(req.params.id);

    if (!dbGameStore) {
      return response.notFound(res, {
        message: "Jogo em loja não encontrado!",
      });
    }

    await GameStoreService.deleteGameStore(req.params.id);
    return response.success(res, {
      message: "Jogo em loja deletado com sucesso!",
    });
  },
  async getGameStoreById(req, res) {
    const gameStore = await GameStoreService.getGameStoreById(req.params.id);
    if (!gameStore) {
      return response.notFound(res, {
        message: "Jogo em loja não encontrado!",
      });
    }

    return response.success(res, {
      message: "Jogo em loja consultado com sucesso!",
      data: gameStore,
    });
  },
  async getAllGameStore(_, res) {
    const gameStore = await GameStoreService.getAllGameStore();
    return response.success(res, {
      message: "Jogos em loja consultados com sucesso!",
      data: gameStore,
    });
  },
};

export default GameStoreController;
