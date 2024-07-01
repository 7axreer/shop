<script setup>
    import { defineProps } from "vue";
    import { useShopCategorieStore } from "@/store/shopCategories";
    import { useCategorySingleStore } from "@/store/categorySingleStore";
    const categories = useShopCategorieStore();
    const categoryStore = useCategorySingleStore();
    categories.getCategories();

    const props = defineProps({
        active: {
            type: Boolean,
            required: true,
        },
    });
    const loadCatalog = (name) => {
        categoryStore.getSingleCategories(name);
        

    };
</script>

<template>
    <section class="category">
        <ul class="category__list" :class="{ active: active }">
            <li>
                <RouterLink
                    @click="loadCatalog(item), $emit('close')"
                    :to="'/category/' + item"
                    v-for="item in categories.categorie"
                    :key="item.id"
                    class="category__list-link">
                    {{ item }}
                </RouterLink>
            </li>
        </ul>
        <div class="overlay" :class="{ active: active }" @click="$emit('close')"></div>
    </section>
</template>
