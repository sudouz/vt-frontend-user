<template>
  <header class="fixed top-0 z-10 w-full"
    :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
    <div class="container mx-auto px-5 border-b border-green-500">
      <nav class="py-5 flex items-center justify-between">
        <a href="#" class="uppercase font-bold text-[30px]">virtual <span class="text-green-500">ta'lim</span></a>
        <div class="flex items-center gap-5">
          <ul class="flex items-center gap-10">
          <li class="font-medium hover:text-green-500">
            <router-link to="/">Bosh sahifa</router-link>
          </li>
          <li class="font-medium hover:text-green-500">
            <router-link to="/yangiliklar">Yangiliklar</router-link>
          </li>
          <li class="font-medium hover:text-green-500">
            <router-link to="/kurslar">Kurslar</router-link>
          </li>
          <li class="font-medium hover:text-green-500">
            <router-link to="/oqtuvchilar">O'qtuvchilar</router-link>
          </li>
          <li class="font-medium hover:text-green-500">
            <router-link to="/boglanich">Bog'lanish</router-link>
          </li>
        </ul>
        <div class="flex items-center gap-5 border-l pl-5 border-[#22C55E]">
          <button
            class="login px-7 py-2 border border-green-500 font-medium rounded-full hover:bg-green-500">Kirish</button>
          <button
            class="register px-7 py-2 border border-green-500 bg-green-500 font-medium rounded-full hover:bg-transparent">Ro'yxatdan
            o'tish</button>
          <div class="relative" @click="navbar.setMode()">
            <b class="flex w-[3.1rem] items-center justify-between h-7 cursor-pointer border-2 rounded-full"><span
                class="rounded-full"><i class="bx bxs-moon pl-1 text-yellow-300 rounded-full"></i></span><span
                class="rounded-full"><i class="bx bxs-sun px-1 rounded-full text-yellow-300"></i></span></b>
            <p class="w-6 h-6 rounded-full absolute top-[2px] -z-10 duration-1000" :class="{
              'translate-x-full bg-black': !navbar.userNav,
              'bg-white': navbar.userNav,
            }"></p>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useNavStore } from "../stores/toggle";
const navbar = useNavStore();
</script>

<style lang="css" scoped>
.router-link-exact-active {
  color: #22C55E;
}

button,
li {
  transition: 0.5s;
}

.register:hover+.login {
  background: #22C55E;
}

.login:hover+.register {
  background: transparent;
}
</style>