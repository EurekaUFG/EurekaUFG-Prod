import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export function useItemDataMutate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formData: FormData) =>
            axios.post(`${API_URL}/itens`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["item-data"] });
        }
    });
}
