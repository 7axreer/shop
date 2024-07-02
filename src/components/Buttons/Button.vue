<script setup>
    import { useFavoriteStore } from "@/store/favoriteStore";
    const favStore = useFavoriteStore();

    const addFav = (product) => {
        product.isFav = !product.isFav;
    };
</script>

<template>
    <div class="mainBtn">
        <button>
            <i class="fal fa-cart-plus"></i>
        </button>
        <button @click="addFav(item)">
            <i :class="{ isActive: item.isFav }" class="fas fa-heart"></i>
        </button>
    </div>
</template>

<style scoped>
    .isActive {
        color: #ff2200;
    }
</style>
