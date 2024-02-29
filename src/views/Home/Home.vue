<template>
    <section>
        <div class="container mx-auto 2xl:px-0 px-5">
            <div class="2xl:pt-40 pt-40 relative z-10">
                <div class="box px-5 py-20 rounded-3xl flex items-center justify-between">
                    <div class="flex flex-col items-start sm:w-[50%] gap-10"
                        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                        <h2 class="uppercase sm:text-2xl text-lg font-bold text-[#4ec3e0]">virtual ta'lim</h2>
                        <div class="flex flex-col items-start gap-5">
                            <h1 class="hero-title lg:text-7xl sm:text-6xl text-3xl font-bold ">Biz bilim
                                olishingizga ko'maklashamiz!</h1>
                            <p class=" sm:text-base text-xs">
                                Istalgan joyda, o'zingizga qulay vaqtda o'qish imkoniyati..
                            </p>
                        </div>
                        <button
                            class="rounded-full bg-[#4ec3e0] text-lg font-medium text-white py-2 px-7 border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0]">
                            <router-link to="/kurslar">Kurslarni korish</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#4ec3e0] relative sm:mt-20 mt-10 z-10 overflow-x-hidden">
        <div class="container mx-auto px-5">
            <div class="items flex justify-between lg:gap-20 gap-10 py-5" data-v-e33b1926="">
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">5000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Jami tahsil olayotgan o’quvchilarimiz</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">1000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Shu kungacha bitirgan o‘quvchilar</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">100</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Platformamizda mavjud kurslar soni</p>
                </div>

                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">5000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Jami tahsil olayotgan o’quvchilarimiz</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">1000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Shu kungacha bitirgan o‘quvchilar</p>
                </div>

                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">100</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Platformamizda mavjud kurslar soni</p>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-10 sm:pt-20 pt-10" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto 2xl:px-0 px-5">
            <div class="box rounded-3xl p-5">
                <h2 class="sm:text-3xl text-2xl font-bold mb-10">Nima uchun "Virtual Ta'lim" da o’qish kerak ?</h2>
                <div class="grid lg:grid-cols-2 gap-5">
                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bxs-graduation sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Sifatli ta'lim</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bx-brain sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Bepul mahorat darslari</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bx-globe sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">24/7 aloqa</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bxs-credit-card sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Arzon narxlar</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
</script>

<style lang="css" scoped>
.items[data-v-e33b1926] {
    width: -moz-fit-content;
    width: fit-content;
    width: -moz-max-content;
    width: max-content;
    animation: 20s linear 0s infinite normal none running animation-1l6vhht;
    overflow-x: auto;
    transition: animation-play-state 0.3s ease 0s
}

@keyframes animation-1l6vhht {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(-100%);
    }
}

.hero-title {
    font-family: "Roboto", sans-serif;
    letter-spacing: 2px;
}

.box {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

@keyframes fadeinout {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>