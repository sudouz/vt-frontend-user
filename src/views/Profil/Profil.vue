<template>
    <section class="2xl:pt-40 pt-40 relative z-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class=" rounded-3xl flex flex-col items-center">
                <div class="box flex items-center justify-between rounded-3xl w-full p-5">
                    <div class="flex items-center gap-5">
                        <img class="sm:w-20 sm:h-20 w-14 h-14" src="/user.png" alt="">
                        <div class="flex flex-col gap-1">
                            <h2 class="sm:text-3xl text-base font-bold">John Doe</h2>
                            <a
                                class="flex items-center gap-1 sm:text-sm text-xs font-medium hover:underline cursor-pointer hover:text-[#4ec3e0]">
                                johndoe@gmail.com
                            </a>
                        </div>
                    </div>
                    <button class="sm:flex hidden items-center gap-1 border px-7 py-3 text-base rounded-full border-[#4ec3e0] text-[#4ec3e0] hover:bg-[#4ec3e0] hover:text-white">
                        <i class='bx bxs-edit-alt text-xl'></i>
                        O'zgartirish
                    </button>
                    <button class="sm:hidden flex items-center gap-1 border px-3 py-1 text-base rounded-full border-[#4ec3e0] text-[#4ec3e0] hover:bg-[#4ec3e0] hover:text-white">
                        <i class='bx bxs-edit-alt text-xl'></i>
                    </button>
                </div>

                <div class="border-b border-[#4ec3e0] w-full mt-5 flex items-center justify-center gap-20 pb-3">
                    <div class="flex flex-wrap items-center gap-5">
                        <button @click="active = 'videos'" :id="active == 'videos' ? 'active' : ''"
                            :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                            class="border sm:px-7 sm:py-3 px-5 py-2 sm:text-2xl text-lg rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">
                            <i class='bx bxs-videos'></i>
                        </button>
                        <button @click="active = 'save'" :id="active == 'save' ? 'active' : ''"
                            :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                            class="border sm:px-7 sm:py-3 px-5 py-2 sm:text-2xl text-lg rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">
                            <i class='bx bxs-bookmarks'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
import { ref } from 'vue';
const active = ref("videos")

</script>

<style lang="scss" scoped>
#active {
    background-color: #4ec3e0;
    border: 1px solid #4ec3e0;
    color: white;
}

.box {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}
</style>
