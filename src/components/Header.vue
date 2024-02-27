<template>
  <header class="fixed top-0 z-10 w-full border-b border-[#4ec3e0]"
    :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
    <div class="container mx-auto px-5">
      <nav class="py-5 flex items-center justify-between">
        <a href="#" class="uppercase font-bold text-[30px]">virtual <span class="text-[#4ec3e0]">ta'lim</span></a>
        <div class="flex items-center gap-5">
          <ul class="flex items-center gap-10">
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link to="/">Bosh sahifa</router-link>
            </li>
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link to="/kurslar">Kurslar</router-link>
            </li>
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link to="/boglanich">Bog'lanish</router-link>
            </li>
          </ul>
          <div class="flex items-center gap-5 border-l pl-5 border-[#4ec3e0]">
            <router-link to="/login"
              class="login px-7 py-2 border border-[#4ec3e0] font-medium rounded-full hover:bg-[#4ec3e0]">Kirish</router-link>
            <router-link to="/register"
              class="register px-7 py-2 border border-[#4ec3e0] bg-[#4ec3e0] font-medium rounded-full hover:bg-transparent">Ro'yxatdan
              o'tish</router-link>
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
  color: #4ec3e0;
}

button,
li,
a {
  transition: 0.5s;
}

.register:hover+.login {
  background: #4ec3e0;
}

.login:hover+.register {
  background: transparent;
}
</style>