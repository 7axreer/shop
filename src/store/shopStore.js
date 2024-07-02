import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useShopStore = defineStore("shop", {
    state: () => ({
        shop: null,
    }),
    actions: {
        async getProducts() {
            try {
                const res = await apiShop.getProducts();
                this.shop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async getNewProducts() {
            try {
                const res = await apiShop.getNewProducts();
                this.shop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
    },
});

export const useNewShopStore = defineStore("newShop", {
    state: () => ({
        newShop: null,
    }),
    actions: {
        async getNewProducts() {
            try {
                const res = await apiShop.getNewProducts();
                this.newShop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async getNewProducts() {
            try {
                const res = await apiShop.getNewProducts();
                this.newShop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
    },
});

export const useDiscShopStore = defineStore("discShop", {
    state: () => ({
        discShop: null,
    }),
    actions: {
        async getDiscProducts() {
            try {
                const res = await apiShop.getDiscProducts();
                this.discShop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        async getDiscProducts() {
            try {
                const res = await apiShop.getDiscProducts();
                this.discShop = res.products;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
    },
});
