import { defineStore } from "pinia";
import { useShopStore } from "./shopStore";

export const useFavoriteSingleStore = defineStore("favoriteSingle", {
    state: () => ({
        favoriteSingle: [], 
    }),
    getters: {
        isFavoriteSingle: (state) => (id) => {
            return state.favoriteSingle.some((item) => item.id === id);
        },
    },
    actions: {
        addFavoriteSingle(id) {
            const shopStore = useShopStore();
            const favProduct = shopStore.shop?.find((item) => item.id == id);
            if (favProduct) {
                favProduct.isFav = true; 
                this.favoriteSingle.push(favProduct); 
            }
        },
        removeFavoriteSingle(id) {
            this.favoriteSingle = this.favoriteSingle.filter((item) => item.id !== id); 
            const shopStore = useShopStore();
            const product = shopStore.shop?.find((item) => item.id == id);
            if (product) {
                product.isFav = false; 
            }
        },
    },
    persist: true,
});
