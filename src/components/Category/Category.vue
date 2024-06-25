<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        active: {
            type: Boolean,
            required: true,
        },
    });
</script>

<template>
    <section class="category">
        <ul class="category__list" :class="{ active: active }">
            <li class="category__list-link">Beauty</li>
            <li class="category__list-link">Fragrances</li>
            <li class="category__list-link">Furniture</li>
            <li class="category__list-link">Groceries</li>
            <li class="category__list-link">Home-Decoration</li>
            <li class="category__list-link">Kitchen-Accessories</li>
            <li class="category__list-link">Laptops</li>
            <li class="category__list-link">Mens-Shirts</li>
            <li class="category__list-link">Mens-Shoes</li>
            <li class="category__list-link">Mens-Watches</li>
            <li class="category__list-link">Mobile-Accessories</li>
            <li class="category__list-link">Motorcycle</li>
            <li class="category__list-link">Skin-Care</li>
            <li class="category__list-link">Smartphones</li>
            <li class="category__list-link">Sports-Accessories</li>
            <li class="category__list-link">Sunglasses</li>
            <li class="category__list-link">Tablets</li>
            <li class="category__list-link">Tops</li>
            <li class="category__list-link">Vehicle</li>
            <li class="category__list-link">Womens-Bags</li>
            <li class="category__list-link">Womens-Jewellery</li>
            <li class="category__list-link">Womens-Shoes</li>
            <li class="category__list-link">Womens-Watches</li>
        </ul>
        <div class="overlay" :class="{ active: active }" @click="$emit('close')"></div>
    </section>
</template>
