<script setup>
    import { ref } from "vue";
    import Navbar from "@/components/Navbar/Navbar.vue";
    import Banner from "@/components/Banner/Banner.vue";
    import Top from "@/components/Top/Top.vue";
    import New from "@/components/New/New.vue";
    import Discount from "@/components/Discount/Discount.vue";
    import Footer from "@/components/Footer/Footer.vue";
    import Category from "@/components/Category/Category.vue";

    const openCategory = ref(false);

    const toggleCategory = () => {
        openCategory.value = !openCategory.value;
    };

    const closeCategory = () => {
        openCategory.value = false;
    };
</script>

<template>
    <Navbar @toggleCategory="toggleCategory" />
    <Banner />
    <Top />
    <New />
    <Discount />
    <Footer />
    <Category :active="openCategory" @close="closeCategory" />
</template>
