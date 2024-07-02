<script setup>
    import { useRoute } from "vue-router";
    import { useCategorySingleStore } from "@/store/categorySingleStore";
    import { useFavoriteSingleStore } from "@/store/favoriteSingleStore";
    import { ref, onMounted } from "vue";
    import { useShopStore } from "@/store/shopStore";
    import { useFavoriteStore } from "@/store/favoriteStore";
    import { useBasketStore } from "@/store/basketStore";

    const route = useRoute();
    const categoryStore = useCategorySingleStore();
    const favoriteStore = useFavoriteSingleStore();

    categoryStore.getSingleCategories(route.params.category);

    const store = useShopStore();
    const favStore = useFavoriteStore();
    const basketStore = useBasketStore();

    const checkFavorites = () => {
        store.shop.forEach((product) => {
            product.isFav = favStore.isFavorite(product.id);
        });
    };

    onMounted(async () => {
        await store.getProducts();
        checkFavorites();
    });

    const addFav = (product) => {
        if (product.isFav) {
            favStore.removeFavProduct(product.id);
        } else {
            favStore.getAddFavProduct(product.id);
        }
    };

    const addToBasket = (product) => {
        basketStore.addToBasket(product.id);
        console.log(basketStore);
    };
</script>

<template>
    <section class="singleCart">
        <div class="container">
            <h2>{{ route.params.category }}</h2>
            <div class="singleCart__content">
                <div v-for="item in categoryStore.categorieSingle" :key="item.id" class="singleCart__content-cart">
                    <RouterLink :to="'/single/' + item.id" class="singleCart__content-card-img">
                        <img :src="item.thumbnail" alt="" />
                    </RouterLink>

                    <div class="singleCart__content-cart-text">
                        <p>{{ item.title }}</p>

                        <div class="singleCart__content-cart-text-box">
                            <div>
                                <i class="fas fa-star"></i>
                                <span> {{ item.rating }} </span>
                            </div>
                            <div>
                                <i class="fal fa-comment-alt-lines"></i>
                                {{ item.weight }}
                            </div>
                        </div>
                        <p>${{ item.price }}</p>
                    </div>

                    <div class="singleCart__content-cart-buttons">
                        <button><i class="fal fa-cart-plus"></i></button>
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
        color: #ff2200; /* Change color to red (#ff2200) when active */
    }
</style>
