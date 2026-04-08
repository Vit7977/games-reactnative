import GameRepository from "./game.repository.js";

const GameService = {
  async createGame(data) {
    return await GameRepository.createGame(data);
  },
  async getAllGames(){
    return await GameRepository.getAllGames();
  }
};

export default GameService;
