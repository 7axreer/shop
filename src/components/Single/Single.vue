<script setup>
    import { useSingleProduct } from "@/store/singleProductStore";
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log(route);
    const itemSingleStore = useSingleProduct();
    itemSingleStore.getSingleProduct(route.params.id);
</script>

<template>
    <section class="single">
        <div class="container sing__gap">
            <div class="single__content">
                <div class="single__content-left">
                   <img :src="itemSingleStore.single?.thumbnail" alt="" />
                </div>
                <div class="single__content-right">
                    <div class="single__content-right-top">
                        <i class="fas fa-star"></i>
                        <span> {{ itemSingleStore.single?.rating }} </span>
                    </div>

                    <div class="single__content-right-info">
                        <h2>{{ itemSingleStore.single?.title }}</h2>
                        <div>
                            <p>Mahsulot haqida qisqacha:</p>
                            <span>{{ itemSingleStore.single?.description }}</span>
                        </div>
                    </div>

                    <div class="single__content-right-count">
                        <div>
                            <button>
                                <i class="far fa-minus"></i>
                            </button>
                            <span>0</span>
                            <button>
                                <i class="far fa-plus"></i>
                            </button>
                        </div>
                        <p>Sotuvda {{ itemSingleStore.single?.stock }} dona bor</p>
                    </div>

                    <div class="single__content-right-price">
                        <div>
                            <p>
                                Mahsulot narxi:<br />
                                ${{ itemSingleStore.single?.price }}
                            </p>
                        </div>
                        <div>
                            Umumiy narx:<br />
                            ${{ itemSingleStore.single?.price }}
                        </div>
                    </div>

                    <div class="single__content-right-buttons">
                        <button><i class="fal fa-cart-plus"></i></button>
                        <button><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
