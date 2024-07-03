import { defineStore } from "pinia";
import apiProducts from "@/helpers/api/api";

export const useSingleProduct = defineStore("single", {
    state: () => ({
        single: null,
    }),
    actions: {
        async getSingleProduct(id) {
            try {
                const res = await apiProducts.getSingleProduct(id);
                this.single = res;
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        },
    },
});
