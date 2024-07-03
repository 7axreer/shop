<script setup>
import { useRoute } from "vue-router";
import { useCategorySingleStore } from "@/store/categorySingleStore";
import { ref, onMounted } from "vue";
import { useFavoriteStore } from "@/store/favoriteStore";
import { useBasketStore } from "@/store/basketStore";

const route = useRoute();
const categoryStore = useCategorySingleStore();
const favStore = useFavoriteStore();
const basketStore = useBasketStore();

const checkBasket = (id) => {
    return basketStore.basket.some(item => item.id === id);
};

onMounted(async () => {
    await categoryStore.getSingleCategories(route.params.category);
    categoryStore.categorieSingle.forEach((product) => {
        product.isFav = favStore.isFavorite(product.id);
    });
});

const addFav = (product) => {
    favStore.addFav(product);
    product.isFav = true;
};

const addToBasket = (product) => {
    if (!checkBasket(product.id)) {
        basketStore.addToBasket(product.id, "category");
    }
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
