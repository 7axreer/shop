<script setup>
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log(route);
    import { useCategorySingleStore } from "@/store/categorySingleStore";
    const categoryStore = useCategorySingleStore();

    categoryStore.getSingleCategories(route.params.category);
    console.log(route.params.category,'said');
</script>

<template>
    <section class="singCategory">
        <div class="container">
            <h2>Category</h2>
            <div class="singCategory__content">
                <div v-for="item in categoryStore.categorieSingle" :key="item.id" class="singCategory__content-cart">
                    <div class="singCategory__content-card-img">
                        <img :src="item.thumbnail" alt="" />
                    </div>

                    <div class="singCategory__content-cart-text">
                        <p>{{ item.title }}</p>

                        <div class="singCategory__content-cart-text-box">
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

                    <div class="singCategory__content-cart-buttons">
                        <button><i class="fal fa-cart-plus"></i></button>
                        <button><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
