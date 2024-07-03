<script setup>
    import { useShopStore } from "@/store/shopStore";
    import { useBasketStore } from "@/store/basketStore";
    import { useFavoriteStore } from "@/store/favoriteStore";
    import { computed, onMounted } from "vue";

    const store = useShopStore();
    const basketStore = useBasketStore();
    const favStore = useFavoriteStore();

    const removeProduct = (id) => {
        basketStore.removeFromBasket(id);
    };

    const addFav = (product) => {
        if (product.isFav) {
            favStore.removeFavProduct(product.id);
        } else {
            favStore.getAddFavProduct(product.id);
        }
        product.isFav = !product.isFav;
    };

    const checkFavorites = () => {
        store.shop.forEach((product) => {
            product.isFav = favStore.isFavorite(product.id);
        });
    };

    onMounted(async () => {
        await store.getProducts();
        checkFavorites();
    });

    const basketCount = computed(() => basketStore.basketCount);
    const totalSum = computed(() => basketStore.totalSum);

    const incrementQuantity = (id) => {
        basketStore.incrementQuantity(id);
    };

    const decrementQuantity = (id) => {
        basketStore.decrementQuantity(id);
    };

    const heartCheck = (product) => {
        return product.isFav ? "isActive" : "";
    };
</script>

<template>
    <section v-if="basketStore.basket.length === 0" class="empty">
        <div class="container">
            <div class="empty__content">
                <img src="@/assets/img/empty.webp" alt="" />
                <div>
                    <h3>Savatda hozircha mahsulot yo'q.</h3>
                    <p>Bosh sahifaga o'tib o'zingizga kerakli <br />bo'lgan mahsulotni tanlang</p>
                    <router-link to="/" class="empty__content-button">Bosh sahifaga o'tish</router-link>
                </div>
            </div>
        </div>
    </section>

    <section v-else class="basket">
        <div class="container">
            <div class="basket__content">
                <div class="basket__content-left">
                    <h2>Savat</h2>
                    <div class="basket__content-left-products">
                        <div v-for="item in basketStore.basket" :key="item.id" class="basket__content-left-products-card">
                            <div class="basket__content-left-products-card-left">
                                <img :src="item.thumbnail" alt="" />
                                <div>
                                    <p>{{ item.title }}</p>
                                    <div>
                                        <button @click="removeProduct(item.id)">
                                            <i class="fal fa-trash-alt"> </i>
                                        </button>
                                        <button @click="addFav(item)">
                                            <i :class="[heartCheck(item), 'fas fa-heart']"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="basket__content-left-products-card-right">
                                <p>${{ item.price.toLocaleString() }}</p>
                                <div>
                                    <button @click="decrementQuantity(item.id)">
                                        <i class="far fa-minus"></i>
                                    </button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="incrementQuantity(item.id)">
                                        <i class="far fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="basket__content-right">
                    <div class="basket__content-right-top">
                        <h2>Sizning buyurtmangiz</h2>
                        <div>
                            <p>Mahsulot soni</p>
                            <p>{{ basketCount }} ta</p>
                        </div>
                        <div>
                            <p>Jami summa</p>
                            <p>${{ totalSum.toLocaleString() }}</p>
                        </div>
                    </div>
                    <div class="basket__content-right-middle">
                        <i class="fal fa-truck"></i>
                        <p>Siz uchun bepul yetkazib berish xizmati mavjud.</p>
                    </div>
                    <div class="basket__content-right-bottom">
                        <button>Buyurtmani tasdiqlash</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .isActive {
        color: #ff2200;
    }
</style>
