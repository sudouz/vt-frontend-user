<template>
    <nav class="relative z-10" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="flex flex-col gap-12">
                <div class="flex items-center justify-between">
                    <h2 class="sm:text-4xl text-2xl font-bold">Barcha o‘quv kurslari</h2>
                    <input :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }"
                        class="w-96 px-5 py-3 rounded-full bg-transparent outline-none border border-[#4ec3e0] placeholder-[#4ec3e0]"
                        type="search" placeholder="Izlash">
                </div>
                <div class="flex items-center gap-5">
                    <button id="active" :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Barchasi
                    </button>
                    <button :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Frontend
                    </button>
                    <button :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Backend
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useNavStore } from "../stores/toggle";
const navbar = useNavStore();
</script>

<style lang="scss" scoped>
#active {
    background-color: #4ec3e0;
    border: 1px solid #4ec3e0;
    color: white;
}
</style>