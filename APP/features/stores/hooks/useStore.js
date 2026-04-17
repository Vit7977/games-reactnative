import { useState, useEffect } from "react";
import { getStores } from "../services/storeService.js"; 

export const useStore = () => {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStores = async () => {
    try {
      const data = await getStores();
      setStore(data);
    } catch (error) {
      console.log("Erro ao buscar jogos em loja: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);
  return {
    store,
    loading,
    refresh: fetchStores,
  };
};
