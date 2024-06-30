<script setup></script>

<template>
    <div  v-if="false"  class="favNo">
        <div class="container">
            <div class="favNo__content">
                <img src="@/assets/img/fav.svg" alt="" />
                <div>
                    <h3>Savatda hozircha saralangan mahsulot yo'q.</h3>
                    <p>
                        Bosh sahifaga o'tib o'zingizga kerakli <br />bo'lgan mahsulotni tanlang va <br />
                        yurakcha belgisini ustiga bosing
                    </p>
                    <router-link to="/" class="empty__content-button">Bosh sahifaga o'tish</router-link>
                </div>
            </div>
        </div>
    </div>

    <section v-else class="fav">
        <div class="container">
            <div class="direction">
                <router-link class="fav__home" to="/"> Bosh sahifa </router-link>
                <i class="fas fa-chevron-right"></i>
                <p>Saralanganlar</p>
            </div>

            <div class="fav__content">
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="fav__content-cart">
                    <div class="fav__content-cart-img">
                        <img src="@/assets/img/iPhone.webp" alt="" />
                    </div>
                    <div class="fav__content-cart-text">
                        <p>Smartfon iPhone 15 Pro Max 1TB gray metalic</p>
                        <p>15 000 000 so'm</p>
                    </div>
                    <div class="fav__content-cart-buttons">
                        <button>
                            <i class="fal fa-cart-arrow-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
