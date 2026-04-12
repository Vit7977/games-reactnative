import pool from "../../config/pool.js";

const StoreRepository = {
  async createStore(store) {
    return await pool.execute(
      `INSERT INTO loja(nome, logo, site_url, cor1, cor2) VALUES(?, ?, ?, ?, ?)`,
      [store.nome, store.logo, store.site_url, store.cor1, store.cor2],
    );
  },
  async updateStore(store) {
    return await pool.execute(
      `UPDATE loja SET nome=?, logo=?, site_url=?, cor1=?, cor2=? WHERE id=?`,
      [
        store.nome,
        store.logo,
        store.site_url,
        store.cor1,
        store.cor2,
        store.id,
      ],
    );
  },

  async deleteStore(id) {
    return await pool.execute(`DELETE FROM loja WHERE id=?`, [id]);
  },

  async getStoreById(id) {
    const [store] = await pool.execute(`SELECT * FROM loja WHERE id = ?`, [id]);
    return store[0];
  },
  async getAllStores() {
    const [stores] = await pool.execute(`SELECT * FROM loja;`);
    return stores;
  },
};

export default StoreRepository;
