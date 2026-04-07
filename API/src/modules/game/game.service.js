import GameRepository from "./game.repository.js";

const GameService = {
  async createGame(data) {
    return await GameRepository.createGame(data);
  },
};

export default GameService;
