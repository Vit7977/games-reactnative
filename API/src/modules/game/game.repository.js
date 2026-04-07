import pool from "../../config/pool.js";

const GameRepository = {
  async createGame(game) {
    const result = await pool.execute(
      `INSERT INTO jogo(titulo, descricao, capa_url, desenvolvedor, genero, data_lanc, class_indicativa, downloads)
        VALUES(?,?,?,?,?,?,?,?);`,
      [
        game.titulo,
        game.descricao,
        game.capa_url,
        game.desenvolvedor,
        game.genero,
        game.data_lanc,
        game.class_indicativa,
        game.downloads,
      ],
    );
    return result;
  },
};

export default GameRepository;
