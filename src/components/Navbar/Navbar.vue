<script setup></script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <div class="nav__content-left">
                    <div class="nav__content-left-logo">
                        <router-link to="/">
                            <img src="@/assets/img/logo.svg" alt="" />
                            <span>SHOP</span>
                        </router-link>
                    </div>

                    <div class="nav__content-left-category">
                        <button @click="$emit('toggleCategory')">  
                            <i class="far fa-bars"></i>
                            Katalog
                        </button>
                    </div>

                    <div class="nav__content-left-input">
                        <input type="text" />
                        <button>
                            <i class="far fa-search"></i>
                        </button>
                    </div>
                </div>

                <div class="nav__content-right">
                    <router-link to="/basket" class="nav__content-right-cart nav__content-right-buttons">
                        <i class="far fa-shopping-cart"></i>
                        <span>Savat</span>
                    </router-link>
                    <router-link to="/favorite" class="nav__content-right-fav nav__content-right-buttons">
                        <i class="far fa-heart"></i>
                        <span>Saralangan</span>
                    </router-link>
                    <button class="nav__content-right-log nav__content-right-buttons">
                        <i class="far fa-user"></i>
                        <span>Kirish</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
