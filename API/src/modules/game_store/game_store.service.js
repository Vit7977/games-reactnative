import GameStoreRepository from "./game_store.repository.js";

const GameStoreService = {
  async createGameStore(data) {
    return await GameStoreRepository.createGameStore(data);
  },
  async updateGameStore(data) {
    return await GameStoreRepository.updateGameStore(data);
  },
  async deleteGameStore(id) {
    return await GameStoreRepository.deleteGameStore(id);
  },
  async getGameStoreById(id) {
    return await GameStoreRepository.getGameStoreById(id);
  },
  async getAllGameStore() {
    return await GameStoreRepository.getAllGameStore();
  },
};

export default GameStoreService;
