import { useState, useEffect } from "react";
import { getGames } from "../services/gameService";

export const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.log("Erro ao buscar jogos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);
  return {
    games,
    loading,
    refresh: fetchGames,
  };
};
