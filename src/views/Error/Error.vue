<template>
  <div class="h-[100vh]" :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl"
          >
            404
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold md:text-4xl"
          >
          Nimadir yetishmayapti
          </p>
          <p class="mb-4 text-lg font-medium">
            Kechirasiz, biz bu sahifani topa olmadik. Bosh sahifada qayting!
          </p>
          <router-link
            to="/"
            class="inline-flex bg-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0] border-2 border-[#4ec3e0] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-[#4ec3e0] my-4"
            >Bosh sahifaga qaytish</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
</script>

<style scoped></style>
