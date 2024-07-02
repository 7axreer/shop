<script setup>
    import { ref } from "vue";
    import Cart from "@/components/Cart/Cart.vue";
</script>

<template>
    <section class="product">
        <div class="container">
            <h1 class="section__title">Ko'p sotilgan mahsulotlar</h1>
            <div class="product__content">
                <Cart />
            </div>
        </div>
    </section>
</template>
