import pool from "../../config/pool.js";

const GameRepository = {
  async createGame(game) {
    const result = await pool.execute(
      `CALL p_createGame(?,?,?,?,?,?,?,?,?,?,?);`,
      [
        game.titulo,
        game.descricao,
        game.capa_url,
        game.desenvolvedor,
        game.genero,
        game.data_lanc,
        game.class_indicativa,
        game.downloads,
        game.preco,
        game.avaliacao,
        game.loja,
      ],
    );
    return result;
  },
  async getAllGames(){
    const [result] = await pool.execute(`SELECT * FROM jogo;`);
    return result;
  }
};

export default GameRepository;
