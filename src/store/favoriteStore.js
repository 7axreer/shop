import { defineStore } from "pinia";
import { useShopStore } from "./shopStore";

export const useFavoriteStore = defineStore("favoriteStore", {
    state: () => ({
        favourite: [],
    }),
    getters: {
        isFavorite: (state) => (id) => {
            return state.favourite.some((item) => item.id === id);
        },
    },
    actions: {
        getAddFavProduct(id) {
            const shopStore = useShopStore();
            const favShop = shopStore.shop?.find((item) => item.id == id);
            if (favShop) {
                favShop.isFav = true;
                this.favourite.push(favShop);
            }
        },
        removeFavProduct(id) {
            this.favourite = this.favourite.filter((item) => item.id !== id);
            const shopStore = useShopStore();
            const product = shopStore.shop?.find((item) => item.id == id);
            if (product) {
                product.isFav = false;
            }
        },
    },
    persist: true,
});
