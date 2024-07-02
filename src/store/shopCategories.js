import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useShopCategorieStore = defineStore("categorie", {
    state: () => ({
        categorie: null,
    }),
    actions: {
        async getCategories() {
            try {
                const res = await apiShop.getCategories();
                this.categorie = res;
            } catch (error) {
                console.error(error);
            }
        },
    },
});