<script setup>
    import { ref } from "vue";
    import Navbar from "@/components/Navbar/Navbar.vue";
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
    <Category :active="openCategory" @close="closeCategory" />
    <RouterView/>
</template>
