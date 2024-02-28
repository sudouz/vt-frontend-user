<template>
    <section>
        <div class="container mx-auto 2xl:px-0 px-5">
            <!-- <div class="hero" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                <h1 id="changingText" class="hero-title 2xl:text-9xl lg:text-8xl sm:text-6xl text-3xl">Hush kelibsiz!</h1>
                <p class=" sm:text-base text-xs mt-3 sm:mt-5 lg:mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laboriosam
                </p>
                <button class="rounded-full">
                    <router-link to="/kurslar">Kurslarni korish</router-link>
                </button>
            </div> -->

            <div class="2xl:pt-60 pt-40 relative z-10">
                <div class="box px-5 py-20 rounded-3xl flex items-center justify-between">
                    <div class="flex flex-col items-start sm:w-[50%] gap-10"
                        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                        <h2 class="uppercase sm:text-2xl text-lg font-bold">virtual ta'lim</h2>
                        <div class="flex flex-col items-start gap-5">
                            <h1 class="hero-title lg:text-7xl sm:text-6xl text-3xl font-bold text-[#4ec3e0]">Biz bilim
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
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const textArray = ["Hush kelibsiz!", "Birinchi qadam sizdan!", "Ilimni bizdan oling!", "Biz bilim olishingizga ko'maklashamiz!"];
let currentTextIndex = 0;

function changeText() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    const changingTextElement = document.getElementById("changingText");
    changingTextElement.innerText = textArray[currentTextIndex];
}

setInterval(changeText, 3000);


</script>

<style lang="css" scoped>
.hero-title {
    /* animation: fadeinout 3s infinite; */
    font-family: "Roboto", sans-serif;

}

.box {
    /* -webkit-box-shadow: 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: 0px 0px 10px 0px rgba(78, 195, 224, 1); */

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