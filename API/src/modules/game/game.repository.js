import pool from "../../config/pool.js";

const GameRepository = {
  async createGame(game) {
    return await pool.execute(
      `INSERT INTO jogo(titulo, descricao, capa_url, desenvolvedor, genero, data_lanc, class_indicativa, downloads) 
      VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
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
  },
  async updateGame(game) {
    return await pool.execute(
      `UPDATE jogo 
      SET titulo = ?, descricao = ?, capa_url = ?, desenvolvedor = ?, genero = ?, data_lanc = ?, class_indicativa = ?, downloads = ? WHERE id = ?`,
      [
        game.titulo,
        game.descricao,
        game.capa_url,
        game.desenvolvedor,
        game.genero,
        game.data_lanc,
        game.class_indicativa,
        game.downloads,
        game.id,
      ],
    );
  },
  async deleteGame(id) {
    return await pool.execute(`DELETE FROM jogo WHERE id = ?`, [id]);
  },
  async getAllGames() {
    const [games] = await pool.execute(`SELECT * FROM jogo;`);
    return games;
  },
  async getGameById(id) {
    const [game] = await pool.execute(`SELECT * FROM jogo WHERE id = ?`, [id]);
    return game[0];
  },
};

export default GameRepository;
