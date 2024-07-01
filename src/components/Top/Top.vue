<script setup>
    import { ref } from "vue";
    import { useShopStore } from "@/store/shopStore";

    const store = useShopStore();
    store.getProducts();

</script>

<template>
    <section class="product">
        <div class="container">
            <h1 class="section__title">Ko'p sotilgan mahsulotlar</h1>
            <div class="product__content">
                <router-link :to="'/single/' + item.id" v-for="item in store.shop" :key="item.id" class="product__content-card">
                    <div class="product__content-card-img">
                        <span class="sold">Top</span>
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
                        <p>$ {{ item.price }}</p>
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
