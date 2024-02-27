<template>
    <div class="hero" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }"  >
        <h1 id="changingText" class="hero-title" >Hush kelibsiz!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laboriosam.   
        </p>
        <button>
            Kurslardi korish
        </button>
    </div>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const textArray = ["Hush kelibsiz!", "Birinchi qadam sizdan!", "Ilimni bizdan o'rganing!"];
let currentTextIndex = 0;

function changeText() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    const changingTextElement = document.getElementById("changingText");
    changingTextElement.innerText = textArray[currentTextIndex];
}

setInterval(changeText, 3000);


</script>

<style lang="css" scoped>
.hero{
    padding-top: 100px;
    position: relative;
    z-index: 2;
}
.hero-title{
    font-size:60px;
    text-align: center;
    margin-top: 150px;
    cursor: pointer;
    font-weight: bold;
    animation: fadeinout 3s infinite;
}
.hero p{
    margin-top: 20px;
    text-align: center;
}
.hero button{
    padding: 10px;
    border: 2px solid #4ec3e0;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    border-radius: 10px;
    background:#4ec3e0 ;
}
@keyframes fadeinout {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

</style>