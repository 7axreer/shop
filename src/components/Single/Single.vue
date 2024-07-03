<script setup>
import { ref, computed, onMounted } from "vue";
import { useSingleProduct } from "@/store/singleProductStore";
import { useRoute } from "vue-router";
import { useBasketStore } from "@/store/basketStore";
import { useFavoriteStore } from "@/store/favoriteStore";

const route = useRoute();
const itemSingleStore = useSingleProduct();
const basketStore = useBasketStore();
const favStore = useFavoriteStore();

const quantity = ref(1);

const checkFavourite = () => {
    if (itemSingleStore.single) {
        itemSingleStore.single.isFav = favStore.isFavorite(itemSingleStore.single.id);
    }
};

const addFav = (product) => {
    favStore.addFav(product);
    checkFavourite();
};

const addToBasket = (product) => {
    if (product && product.id && !checkBasket(product.id)) {
        basketStore.addToBasket(product.id, "single", quantity.value);
        quantity.value = 1;
    }
};

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const totalPrice = computed(() => {
    const price = itemSingleStore.single ? itemSingleStore.single.price * quantity.value : 0;
    return Math.floor(price);
});

const checkBasket = (id) => {
    return basketStore.basket.some(item => item.id === id);
};

onMounted(async () => {
    await itemSingleStore.getSingleProduct(route.params.id);
    checkFavourite();
});
</script>

<template>
<section class="single">
    <div class="container sing__gap">
        <div class="single__content">
            <div class="single__content-left">
                <img :src="itemSingleStore.single?.thumbnail" alt="" />
            </div>
            <div class="single__content-right">
                <div class="single__content-right-top">
                    <i class="fas fa-star"></i>
                    <span>{{ itemSingleStore.single?.rating }}</span>
                </div>

                <div class="single__content-right-info">
                    <h2>{{ itemSingleStore.single?.title }}</h2>
                    <div>
                        <p>Mahsulot haqida qisqacha:</p>
                        <span>{{ itemSingleStore.single?.description }}</span>
                    </div>
                </div>

                <div class="single__content-right-count">
                    <div>
                        <button @click="decrementQuantity">
                            <i class="far fa-minus"></i>
                        </button>
                        <span>{{ quantity }}</span>
                        <button @click="incrementQuantity">
                            <i class="far fa-plus"></i>
                        </button>
                    </div>
                    <p>Sotuvda {{ itemSingleStore.single?.stock }} dona bor</p>
                </div>

                <div class="single__content-right-price">
                    <div>
                        <p>
                            Mahsulot narxi:<br />
                            ${{ itemSingleStore.single?.price }}
                        </p>
                    </div>
                    <div>
                        Umumiy narx:<br />
                        ${{ totalPrice.toLocaleString() }}
                    </div>
                </div>

                <div class="single__content-right-buttons">
                    <button @click="addToBasket(itemSingleStore.single)">
                        <i :class="checkBasket(itemSingleStore.single?.id) ? 'far fa-check' : 'fal fa-cart-plus'"></i>
                    </button>
                    <button @click="addFav(itemSingleStore.single)">
                        <i :class="{ isActive: itemSingleStore.single && itemSingleStore.single.isFav }" class="fas fa-heart"></i>
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
