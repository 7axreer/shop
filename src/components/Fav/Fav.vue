<script setup>
import { useFavoriteStore } from "@/store/favoriteStore";
import { useBasketStore } from "@/store/basketStore";

const favoriteStore = useFavoriteStore();
const basketStore = useBasketStore();

const removeFavorite = (id) => {
    favoriteStore.removeFavProduct(id);
};

const addToBasket = (product) => {
    if (!checkBasket(product.id)) {
        basketStore.addToBasket(product.id, "favorite", 1);
    }
};

const checkBasket = (id) => {
    return basketStore.basket.some(item => item.id === id);
};
</script>

<template>
<div>
    <div v-if="favoriteStore.favourite.length === 0" class="favNo">
        <div class="container">
            <div class="favNo__content">
                <img src="@/assets/img/fav.svg" alt="" />
                <div>
                    <h3>Savatda hozircha saralangan mahsulot yo'q.</h3>
                    <p>
                        Bosh sahifaga o'tib o'zingizga kerakli <br />bo'lgan mahsulotni tanlang va <br />
                        yurakcha belgisini ustiga bosing
                    </p>
                    <router-link to="/" class="empty__content-button">Bosh sahifaga o'tish</router-link>
                </div>
            </div>
        </div>
    </div>

    <section v-else class="fav">
        <div class="container">
            <div class="direction">
                <router-link class="fav__home" to="/"> Bosh sahifa </router-link>
                <i class="fas fa-chevron-right"></i>
                <p>Saralanganlar</p>
            </div>

            <div class="fav__content">
                <div v-for="item in favoriteStore.favourite" :key="item.id" class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img :src="item.thumbnail" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>{{ item.title }}</p>
                        <p>${{ item.price.toLocaleString() }}</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button @click="addToBasket(item)">
                            <i :class="checkBasket(item.id) ? 'far fa-check' : 'fal fa-cart-arrow-down'"></i>
                        </button>
                        <button @click="removeFavorite(item.id)">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<style scoped>
.isActive {
    color: #ff2200;
}
</style>
