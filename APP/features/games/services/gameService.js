import { api } from "../../../services/api.js";

export const getGames = async () => {
  const response = await api.get("/api/jogo");
  return response.data.data;
};
