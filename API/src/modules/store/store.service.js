import StoreRepository from "./store.repository.js";

const StoreService = {
  async createStore(data) {
    return await StoreRepository.createStore(data);
  },
  async updateStore(data) {
    return await StoreRepository.updateStore(data);
  },
  async deleteStore(id) {
    return await StoreRepository.deleteStore(id);
  },
  async getStoreById(id) {
    return await StoreRepository.getStoreById(id);
  },
  async getAllStores() {
    return await StoreRepository.getAllStores();
  },
};

export default StoreService;
