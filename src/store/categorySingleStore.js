import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useCategorySingleStore = defineStore("categorieSingle", {
    state: () => ({
        categorieSingle: null,
    }),
    actions: {
        async getSingleCategories(name) {
            try {
                const res = await apiShop.getSingleCategories(name);
                console.log(res.products, "asdasd");

                this.categorieSingle = res.products;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
