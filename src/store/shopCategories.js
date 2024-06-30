import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useShopCategories = defineStore("productsCategories", {
  state: () => ({
    categorie: null, 
  }),
  actions: {
    async getCategories() {
      try {
        const res = await apiShop.getCategories();
        this.categorie = res
      } catch (error) {
        console.error(error);
      }
    },
  },
  persist: true
});
