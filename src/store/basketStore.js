import { defineStore } from "pinia";
import { useSingleProduct } from "./singleProductStore";
import { useCategorySingleStore } from "./categorySingleStore";
import { useShopStore } from "./shopStore";
import { useFavoriteStore } from "./favoriteStore";

export const useBasketStore = defineStore("basket", {
    state: () => ({
        basket: [],
    }),
    getters: {
        basketCount: (state) => state.basket.reduce((count, item) => count + item.quantity, 0),
        totalSum: (state) => Math.floor(state.basket.reduce((sum, item) => sum + item.price * item.quantity, 0)),
    },
    actions: {
        addToBasket(id, source, quantity = 1) {
            let product = null;

            if (source === "single") {
                const singleProductStore = useSingleProduct();
                product = singleProductStore.single;
            } else if (source === "category") {
                const categoryStore = useCategorySingleStore();
                product = categoryStore.categorieSingle.find((item) => item.id === id);
            } else if (source === "shop") {
                const shopStore = useShopStore();
                product = shopStore.shop.find((item) => item.id === id);
            } else if (source === "favorite") {
                const favoriteStore = useFavoriteStore();
                product = favoriteStore.favourite.find((item) => item.id === id);
            }

            if (product && product.id === id) {
                const basketItem = this.basket.find((item) => item.id === id);
                if (basketItem) {
                    basketItem.quantity += quantity;
                } else {
                    this.basket.push({ ...product, quantity });
                }
                console.log("Yangi basket:", this.basket);
            } else {
                console.error("Mahsulot topilmadi:", id);
            }
        },
        removeFromBasket(id) {
            this.basket = this.basket.filter((item) => item.id !== id);
        },
        incrementQuantity(id) {
            const basketItem = this.basket.find((item) => item.id === id);
            if (basketItem) {
                basketItem.quantity += 1;
            }
        },
        decrementQuantity(id) {
            const basketItem = this.basket.find((item) => item.id === id);
            if (basketItem && basketItem.quantity > 1) {
                basketItem.quantity -= 1;
            }
        },
    },
    persist: true,
});
