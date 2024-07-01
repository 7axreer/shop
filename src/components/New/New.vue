<script setup>
    import { useNewShopStore } from "@/store/shopStore";
    import { ref } from "vue";

    const store = useNewShopStore();
    store.getNewProducts();
</script>

<template>
    <section class="product">
        <div class="container">
            <h1 class="section__title">Yangi mahsulotlar</h1>
            <div class="product__content">
                
                <router-link :to="'/single/' + item.id" class="product__content-card" v-for="item in store.newShop" :key="item.id">
                    <div class="product__content-card-img">
                        <span>Yangi</span>
                        <img :src="item.thumbnail" alt="" />
                    </div>

                    <div class="product__content-card-text">
                        <p>{{ item.title }}</p>
                        <div class="product__content-card-text-box">
                            <div>
                                <span> {{ item.rating }} ball </span>
                            </div>
                            <div>
                                <i class="fal fa-comment-alt-lines"></i>
                                0 ta sharh
                            </div>
                        </div>
                        <p>${{ item.price }}</p>
                    </div>

                    <div class="product__content-card-buttons">
                        <button><i class="fal fa-cart-plus"></i></button>
                        <button><i class="far fa-heart"></i></button>
                    </div>
                </router-link>
                
            </div>
        </div>
    </section>
</template>
