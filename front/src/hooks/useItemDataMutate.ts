// src/hooks/useItemDataMutate.ts
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

async function postItem(formData: FormData) {
  const res = await axios.post(`${API_URL}/itens`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

export function useItemDataMutate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      // Recarrega a lista de itens depois de cadastrar um novo
      queryClient.invalidateQueries({ queryKey: ["item-data"] });
    },
  });
}
