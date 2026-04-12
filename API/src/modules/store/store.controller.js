import StoreService from "./store.service.js";
import * as response from "../../utils/response.js";

const StoreController = {
  async createStore(req, res) {
    await StoreService.createStore(req.body);
    return response.created(res, { message: "Loja criada com sucesso!" });
  },

  async updateStore(req, res) {
    const { id } = req.params;
    const dbStore = await StoreService.getStoreById(id);

    const data = { ...dbStore, ...req.body, id };

    await StoreService.updateStore(data);
    return response.success(res, { message: "Loja atualizada com sucesso!" });
  },
  async deleteStore(req, res) {
    const store = await StoreService.getStoreById(req.params.id);

    if (!store) {
      return response.notFound(res, { message: "Loja não encontrada!" });
    }

    await StoreService.deleteStore(req.params.id);
    return response.success(res, { message: "Loja deletada com sucesso!" });
  },
  async getStoreById(req, res) {
    const store = await StoreService.getStoreById(req.params.id);

    if (!store) {
      return response.notFound(res, { message: "Loja não encontrada!" });
    }

    return response.success(res, {
      message: "Loja consultada com sucesso!",
      data: store,
    });
  },
  async getAllStores(_, res) {
    const stores = await StoreService.getAllStores();
    return response.success(res, {
      message: "Lojas consultadas com sucesso!",
      data: stores,
    });
  },
};

export default StoreController;
