<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        active: {
            type: Boolean,
            required: true,
        },
    });
    import { useShopCategories } from "@/store/shopCategories";
    const productsCategories = useShopCategories();
</script>

<template>
    <section class="category">
        <ul class="category__list" :class="{ active: active }">
            <router-link v-for="title in productsCategories.categorie" :to="'/category/' + title" class="category__list-link" :key="title.id"
                >Beauty</router-link
            >
        </ul>
        <div class="overlay" :class="{ active: active }" @click="$emit('close')"></div>
    </section>
</template>
