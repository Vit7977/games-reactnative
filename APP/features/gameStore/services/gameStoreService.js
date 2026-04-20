import { api } from "../../../services/api.js";

export const getGameStore = async () => {
  const response = await api.get("/api/jogo_loja");
  return response.data.data;
};