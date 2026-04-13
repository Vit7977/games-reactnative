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
};

export default GameStoreRepository;