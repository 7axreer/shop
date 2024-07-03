import { defineStore } from "pinia";
import apiShop from "@/helpers/api/api";

export const useShopStore = defineStore("shop", {
    state: () => ({
        shop: [], // Bo'sh array sifatida boshlash
    }),
    actions: {
        async getProducts() {
            try {
                const res = await apiShop.getProducts();
                this.shop = res.products;
                console.log("Mahsulotlar yuklandi:", this.shop); // Mahsulotlarni konsolga chiqaring
            } catch (error) {
                console.error("Mahsulotlarni yuklashda xato:", error);
            }
        },
        async getNewProducts() {
            try {
                const res = await apiShop.getNewProducts();
                this.shop = res.products;
                console.log("Yangi mahsulotlar yuklandi:", this.shop); // Mahsulotlarni konsolga chiqaring
            } catch (error) {
                console.error("Yangi mahsulotlarni yuklashda xato:", error);
            }
        },
    },
});
