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
  
<style scoped>

</style>