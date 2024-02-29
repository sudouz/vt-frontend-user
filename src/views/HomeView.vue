<template>
    <Header />
    <main class="area min-h-screen" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
        <router-view></router-view>
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </main>
    <Footer />
</template>
  
<script setup>
import { useNavStore } from "../stores/toggle";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const navbar = useNavStore();
</script>
  
<style>

.area {
    width: 100%;
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #4ec3e0;
    animation: animate 25s linear infinite;
    bottom: -150px;

}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 50%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 60%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

.circles li:nth-child(11) {
    left: 65%;
    width: 40px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 21s;
}

.circles li:nth-child(12) {
    left: 75%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 31s;
}

.circles li:nth-child(13) {
    left: 35%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 21s;
}

.circles li:nth-child(14) {
    left: 5%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 11s;
}

.circles li:nth-child(15) {
    right: 3%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 31s;
}

.circles li:nth-child(16) {
    right: 12%;
    width: 32px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 16s;
}

.circles li:nth-child(17) {
    right: 42%;
    width: 22px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 18s;
}

.circles li:nth-child(18) {
    right: 72%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 11s;
}

.circles li:nth-child(19) {
    right: 52%;
    width: 52px;
    height: 50px;
    animation-delay: 5s;
    animation-duration: 29s;
}

.circles li:nth-child(20) {
    right: 40%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 28s;
}

.circles li:nth-child(21) {
    right: 80%;
    width: 42px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 18s;
}

.circles li:nth-child(22) {
    right: 40%;
    width: 55px;
    height: 60px;
    animation-delay: 3s;
    animation-duration: 9s;
}

.circles li:nth-child(23) {
    right: 50%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 28s;
}

.circles li:nth-child(23) {
    right: 45%;
    width: 30px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 13s;
}

.circles li:nth-child(24) {
    right: 60%;
    width: 40px;
    height: 40px;
    animation-delay: 10s;
    animation-duration: 10s;
}

.circles li:nth-child(25) {
    right: 70%;
    width: 50px;
    height: 50px;
    animation-delay: 8s;
    animation-duration: 30s;
}

.circles li:nth-child(26) {
    right: 60%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
    animation-duration: 12s;
}


@keyframes animate {

    0% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 0;
    }

    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 50%;
    }

}
</style>