<template>
    <section>
        <div class="container mx-auto px-5">
            <div class="hero" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                <h1 id="changingText" class="hero-title 2xl:text-9xl lg:text-8xl sm:text-6xl text-3xl">Hush kelibsiz!</h1>
                <p class=" sm:text-base text-xs mt-3 sm:mt-5 lg:mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laboriosam
                </p>
                <button class="rounded-full">
                    <router-link to="/kurslar">Kurslarni korish</router-link>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const textArray = ["Hush kelibsiz!", "Birinchi qadam sizdan!", "Ilimni bizdan oling!"];
let currentTextIndex = 0;

function changeText() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    const changingTextElement = document.getElementById("changingText");
    changingTextElement.innerText = textArray[currentTextIndex];
}

setInterval(changeText, 3000);


</script>

<style lang="css" scoped>
.hero {
    padding-top: 100px;
    position: relative;
    z-index: 2;
}

.hero-title {
    text-align: center;
    margin-top: 150px;
    cursor: pointer;
    font-weight: bold;
    animation: fadeinout 3s infinite;
}

.hero p {
    text-align: center;
    color: #4ec3e0;
}

.hero button {
    color: white;
    padding: 10px 30px;
    border: 2px solid #4ec3e0;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    background: #4ec3e0;
}

.hero button:hover {
    background-color: transparent;
}

@keyframes fadeinout {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}</style>