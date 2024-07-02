import { defineStore } from "pinia";
import { useShopStore } from "./shopStore";

export const useBasketStore = defineStore("basket", {
    state: () => ({
        basket: [],
    }),
    getters: {
        basketCount: (state) => state.basket.reduce((count, item) => count + item.quantity, 0),
        totalSum: (state) => Math.floor(state.basket.reduce((sum, item) => sum + item.price * item.quantity, 0)),
    },
    actions: {
        addToBasket(id) {
            const shopStore = useShopStore();
            const product = shopStore.shop.find((item) => item.id === id);
            if (product) {
                const basketItem = this.basket.find((item) => item.id === id);
                if (basketItem) {
                    basketItem.quantity += 1;
                } else {
                    this.basket.push({ ...product, quantity: 1 });
                }
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
