<script setup>
    import { useDiscShopStore } from "@/store/shopStore";
    import { ref } from "vue";

    const store = useDiscShopStore();
    store.getDiscProducts();
</script>

<template>
    <section class="product">
        <div class="container">
            <h1 class="section__title">Chegirmali mahsulotlar</h1>
            <div class="product__content">
                <router-link :to="'/single/' + item.id" v-for="item in store.discShop" :key="item.id" class="product__content-card">
                    <div class="product__content-card-img">
                        <span class="discount-span">Chegirma</span>
                        <img :src="item.thumbnail" alt="" />
                    </div>

                    <div class="product__content-card-text">
                        <p>{{ item.title }}</p>
                        <div class="product__content-card-text-box">
                            <div>
                                 <i class="fas fa-star"></i>
                                <span> {{ item.rating }} </span>
                            </div>
                            <div>
                                <i class="fal fa-comment-alt-lines"></i>
                                {{ item.weight }}
                            </div>
                        </div>
                        <span class="discount-span">$ {{ item.price }}</span>
                        <p>$ {{ item.discountPercentage }}</p>
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
