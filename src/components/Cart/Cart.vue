<script setup>
    import { ref, onMounted, computed } from "vue";
    import { useShopStore } from "@/store/shopStore";
    import { useFavoriteStore } from "@/store/favoriteStore";
    import { useBasketStore } from "@/store/basketStore";

    const store = useShopStore();
    const favStore = useFavoriteStore();
    const basketStore = useBasketStore();

    const checkFavorites = () => {
        store.shop.forEach((product) => {
            product.isFav = favStore.isFavorite(product.id);
        });
    };

    const checkBasket = (id) => {
        return basketStore.basket.some((item) => item.id === id);
    };

    onMounted(async () => {
        await store.getProducts();
        checkFavorites();
    });

    const addFav = (product) => {
        favStore.addFav(product);
    };

    const addToBasket = (product) => {
        if (!checkBasket(product.id)) {
            basketStore.addToBasket(product.id, "shop");
        }
    };

    const basketCount = computed(() => basketStore.basket.length);
</script>

<template>
    <section class="cart">
        <div class="container">
            <div class="cart__content">
                <div v-for="item in store.shop" :key="item.id" class="cart__content-card">
                    <span class="sold">Top</span>
                    <RouterLink :to="'/single/' + item.id" class="cart__content-card-img">
                        <img :src="item.thumbnail" alt="" />
                    </RouterLink>

                    <div class="cart__content-card-text">
                        <p>{{ item.title }}</p>
                        <div class="cart__content-card-text-box">
                            <div>
                                <i class="fas fa-star"></i>
                                <span> {{ item.rating }} </span>
                            </div>
                            <div>
                                <i class="fal fa-comment-alt-lines"></i>
                                {{ item.weight }}
                            </div>
                        </div>
                        <p>$ {{ item.price }}</p>
                    </div>

                    <div class="cart__content-card-buttons">
                        <button @click="addToBasket(item)">
                            <i :class="checkBasket(item.id) ? 'far fa-check' : 'fal fa-cart-plus'"></i>
                        </button>
                        <button @click="addFav(item)">
                            <i :class="{ isActive: item.isFav }" class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .isActive {
        color: #ff2200;
    }
</style>
