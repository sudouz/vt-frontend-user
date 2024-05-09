<template>
  <header
    class="fixed top-0 z-40 w-full border-b border-[#4ec3e0]"
    :class="{
      'bg-[#12111F] text-white': navbar.userNav,
      'bg-white text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <nav class="py-5 flex items-center justify-between">
        <div class="hidden lg:flex items-center gap-3">
          <img
            class="w-[70px] h-[70px] rounded-full"
            :src="navbar.userNav ? '/logo-black.jpg' : 'logo-white.jpg'"
            alt=""
          />
          <a href="#" class="uppercase font-bold text-[30px]"
            >Virtual <span class="text-[#4ec3e0]">Ta'lim</span></a
          >
        </div>
        <img
          class="lg:hidden block w-[70px] h-[70px] rounded-full"
          :src="navbar.userNav ? '/logo-black.jpg' : 'logo-white.jpg'"
          alt=""
        />
        <div class="flex items-center gap-5">
          <ul class="hidden lg:flex items-center gap-10">
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link to="/">Bosh sahifa</router-link>
            </li>
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link @click="click" to="/courses">Kurslar</router-link>
            </li>
            <li class="font-medium hover:text-[#4ec3e0]">
              <router-link to="/contact">Bog'lanish</router-link>
            </li>
          </ul>
          <div
            class="flex items-center gap-5 lg:border-l lg:pl-5 border-[#4ec3e0]"
          >
            <router-link
              to="/login"
              class="login lg:block hidden px-7 py-2 border border-[#4ec3e0] font-medium rounded-full bg-transparent hover:bg-[#4ec3e0] text-[#4ec3e0] hover:text-white"
              >Kirish</router-link
            >
            <div class="relative" @click="navbar.setMode()">
              <b
                class="flex w-[3.1rem] items-center justify-between h-7 cursor-pointer border-2 rounded-full"
                ><span class="rounded-full"
                  ><i
                    class="bx bxs-moon pl-1 text-yellow-300 rounded-full"
                  ></i></span
                ><span class="rounded-full"
                  ><i
                    class="bx bxs-sun px-1 rounded-full text-yellow-300"
                  ></i></span
              ></b>
              <p
                class="w-6 h-6 rounded-full absolute top-[2px] -z-10 duration-1000"
                :class="{
                  'translate-x-full bg-[#12111F]': !navbar.userNav,
                  'bg-white': navbar.userNav,
                }"
              ></p>
            </div>
            <div class="relative">
                <router-link to="/profil"
                  ><img class="w-14 h-14" src="/user.png" alt="" />
                </router-link>

            </div>
            <div class="lg:hidden block border-l border-[#4ec3e0] pl-5 py-1">
              <button @click="openModal" class="relative z-20">
                <i
                  class="text-[30px] transition-transform duration-700"
                  :class="sidebar.sidebar ? 'bx bx-menu' : 'bx bx-x'"
                ></i>
              </button>
              <div
                class="absolute z-10 top-0 left-0 right-0 w-full transition-transform duration-700 -translate-y-full bg-gray-200 border-r"
                :class="sidebar.sidebar ? '-translate-y-full' : 'translate-y-0'"
                @mousedown="sidebar.sidebar = true"
              >
                <div
                  class="w-full h-screen flex flex-col gap-10 items-end px-5 pt-24"
                  :class="{
                    'bg-[#12111F] text-white': navbar.userNav,
                    'bg-white text-[#12111F]': !navbar.userNav,
                  }"
                >
                  <ul class="w-full flex flex-col gap-10 items-center">
                    <li class="font-medium hover:text-[#4ec3e0]">
                      <router-link to="/">Bosh sahifa</router-link>
                    </li>
                    <li class="font-medium hover:text-[#4ec3e0]">
                      <router-link @click="click" to="/courses"
                        >Kurslar</router-link
                      >
                    </li>
                    <li class="font-medium hover:text-[#4ec3e0]">
                      <router-link to="/contact">Bog'lanish</router-link>
                    </li>
                    <router-link
                      to="/login"
                      class="login px-7 py-2 border border-[#4ec3e0] font-medium rounded-full bg-transparent hover:bg-[#4ec3e0] text-[#4ec3e0] hover:text-white"
                      >Kirish</router-link
                    >
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useNavStore } from "../stores/toggle";
import { useSidebarStore } from "../stores/sidebar";
const navbar = useNavStore();
const sidebar = useSidebarStore();
const openModal = () => (sidebar.sidebar = !sidebar.sidebar);

const click = () => {
  localStorage.clear("active");
  console.log("hello");
};
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

.box {
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

.menu {
  transition: transform 5s;
}

.register:hover + .login {
  background: #4ec3e0;
  color: white;
}

.login:hover + .register {
  background: transparent;
  color: #4ec3e0;
}

.user:hover + .menu {
  display: flex;
}

.menu:hover {
  display: flex;
}
</style>
