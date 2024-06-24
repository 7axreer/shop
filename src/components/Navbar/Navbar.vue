<script setup></script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <div class="nav__content-left">
                    <div class="nav__content-left-logo">
                        <a href="">
                            <img src="@/assets/img/logo.svg" alt="">
                            <span>SHOP</span>
                        </a>
                    </div>

                    <div class="nav__content-left-category">
                        <button>
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
                    <button class="nav__content-right-cart">
                        <i class="far fa-shopping-cart"></i>
                        <span>Savat</span>
                    </button>
                    <button class="nav__content-right-fav">
                        <i class="far fa-heart"></i>
                        <span>Saralangan</span>
                    </button>
                    <button class="nav__content-right-log">
                        <i class="far fa-user"></i>
                        <span>Kirish</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>

</template>
