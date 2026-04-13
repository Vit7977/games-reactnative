import pool from "../../config/pool.js";

const GameStoreRepository = {
  async createGameStore(data) {
    return await pool.execute(
      `INSERT INTO jogo_loja(preco, preco_promocao, data_promocao_inicio, data_promocao_fim, avaliacao, avaliacao_max, jogo, loja) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        data.preco,
        data.preco_promocao ?? null,
        data.data_promocao_inicio ?? null,
        data.data_promocao_fim ?? null,
        data.avaliacao,
        data.avaliacao_max,
        data.jogo,
        data.loja,
      ],
    );
  },

  async updateGameStore(data) {
    return await pool.execute(
      `UPDATE jogo_loja SET preco=?, preco_promocao=?, data_promocao_inicio=?, data_promocao_fim=?, avaliacao=?, avaliacao_max=?, jogo=?, loja=? WHERE id=?`,
      [
        data.preco,
        data.preco_promocao,
        data.data_promocao_inicio,
        data.data_promocao_fim,
        data.avaliacao,
        data.avaliacao_max,
        data.jogo,
        data.loja,
        data.id,
      ],
    );
  },

  async deleteGameStore(id) {
    return await pool.execute(`DELETE FROM jogo_loja WHERE id=?`, [id]);
  },

  async getGameStoreById(id) {
    const [gameStore] = await pool.execute(
      `SELECT * FROM jogo_loja WHERE id=?`,
      [id],
    );
    return gameStore[0];
  },
  async getAllGameStore() {
    const [gameStore] = await pool.execute(`SELECT * FROM jogo_loja;`);
    return gameStore;
  },
};

export default GameStoreRepository;
