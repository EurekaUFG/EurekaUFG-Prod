import axios from "axios";
import { ItemData } from "../interface/ItemData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async () =>
  axios.get<ItemData[]>(`${API_URL}/itens`);

export function useItemData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["item-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
