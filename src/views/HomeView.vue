<template>
    <Header />
        <main class="area min-h-screen" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
        <router-view></router-view>
    </main>
    <Footer />
</template>
  
<script setup>
import { useNavStore } from "../stores/toggle";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const navbar = useNavStore();

</script>
  
<style >
button {
  transition: 0.5s;
}

::-webkit-scrollbar{
    width: 13px;
}

::-webkit-scrollbar-track{
    background: #12111F;
    box-shadow: inset 0 0 5px #12111F;
}

::-webkit-scrollbar-thumb{
    background: #4ec3e0;
    border-radius: 15px;

}
</style>