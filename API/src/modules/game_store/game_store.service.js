import GameStoreRepository from "./game_store.repository.js";

const GameStoreService = {
  async createGameStore(data) {
    return await GameStoreRepository.createGameStore(data);
  },
};

export default GameStoreService;