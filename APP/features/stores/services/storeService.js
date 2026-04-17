import { api } from "../../../services/api.js";

export const getStores = async () => {
  const response = await api.get("/api/loja");
  return response.data.data;
};
