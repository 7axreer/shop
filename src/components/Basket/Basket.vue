<script setup></script>

<template>
    <section v-if="false" class="empty">
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
                        <div class="basket__content-left-products-card">
                            <div class="basket__content-left-products-card-left">
                                <img src="@/assets/img/iPhone.webp" alt="" />
                                <div>
                                    <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                                    <div>
                                        <button><i class="fal fa-trash-alt"></i></button>
                                        <button><i class="fal fa-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="basket__content-left-products-card-right">
                                <p>15 000 000 so'm</p>
                                <div>
                                    <button>
                                        <i class="far fa-minus"></i>
                                    </button>
                                    <span>0</span>
                                    <button>
                                        <i class="far fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="basket__content-left-products-card">
                            <div class="basket__content-left-products-card-left">
                                <img src="@/assets/img/iPhone.webp" alt="" />
                                <div>
                                    <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                                    <div>
                                        <button><i class="fal fa-trash-alt"></i></button>
                                        <button><i class="fal fa-heart"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="basket__content-left-products-card-right">
                                <p>15 000 000 so'm</p>
                                <div>
                                    <button>
                                        <i class="far fa-minus"></i>
                                    </button>
                                    <span>0</span>
                                    <button>
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
                            <p>0 ta</p>
                        </div>
                        <div>
                            <p>Jami summa</p>
                            <p>0 so'm</p>
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
