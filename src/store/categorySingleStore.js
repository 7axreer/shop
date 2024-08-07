import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useCategorySingleStore = defineStore("categorieSingle", {
    state: () => ({
        categorieSingle: [],
    }),
    actions: {
        async getSingleCategories(name) {
            try {
                const res = await apiShop.getSingleCategories(name);

                this.categorieSingle = res.products;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
