import { useState, useEffect } from "react";
import { getGameStore } from "../services/gameStoreService.js"; 

export const useGameStore = () => {
  const [gameStore, setGameStore] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGameStore = async () => {
    try {
      const data = await getGameStore();
      setGameStore(data);
    } catch (error) {
      console.log("Erro ao buscar jogos em loja: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGameStore();
  }, []);
  return {
    gameStore,
    loading,
    refresh: fetchGameStore,
  };
};
