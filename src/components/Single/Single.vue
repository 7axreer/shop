<script setup>
    import { onMounted } from "vue";
    import { useSingleProduct } from "@/store/singleProductStore";
    import { useRoute } from "vue-router";
    import { useShopStore } from "@/store/shopStore";
    import { useFavoriteStore } from "@/store/favoriteStore";

    const route = useRoute();
    const itemSingleStore = useSingleProduct();
    const store = useShopStore();
    const favStore = useFavoriteStore();

    const checkFavourite = () => {
        store.shop.forEach((product) => {
            product.isFav = favStore.checkId(product.id);
        });
    };

    const addFav = (product) => {
        if (product && product.id) {
            if (product.isFav) {
                favStore.removeFavProduct(product.id);
            } else {
                favStore.addFavProduct(product.id);
            }
        }
    };

    onMounted(async () => {
        await store.getProducts();
        itemSingleStore.getSingleProduct(route.params.id);
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
                            <button>
                                <i class="far fa-minus"></i>
                            </button>
                            <span>0</span>
                            <button>
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
                            ${{ itemSingleStore.single?.price }}
                        </div>
                    </div>

                    <div class="single__content-right-buttons">
                        <button><i class="fal fa-cart-plus"></i></button>
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
