import GameRepository from "./game.repository.js";

const GameService = {
  async createGame(data) {
    return await GameRepository.createGame(data);
  },
  async updateGame(data){
    return await GameRepository.updateGame(data);
  },
   async deleteGame(id){
    return await GameRepository.deleteGame(id);
  },
  async getAllGames() {
    return await GameRepository.getAllGames();
  },
  async getGameById(id) {
    return await GameRepository.getGameById(id);
  },
};

export default GameService;
