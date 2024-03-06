<template>
    <section class="2xl:pt-40 pt-40 relative z-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="box rounded-3xl flex flex-col items-center p-5">
                <div class="flex items-center gap-10 border rounded-3xl border-[#4ec3e0] w-[800px] p-5">
                    <img class="sm:w-80 sm:h-80 w-40 h-40" src="/user.png" alt="">
                    <div class="flex flex-col gap-1 w-full">
                        <h2 class="sm:text-5xl font-bold">John Doe</h2>
                        <span class="sm:text-base text-[#4ec3e0] font-medium">O'quvchi</span>
                        <div class="flex items-center justify-between mt-10">
                            <span class="flex items-center gap-1 sm:text-base font-medium">
                                <i class='bx bx-envelope text-2xl text-red-500'></i>
                                johndoe@gmail.com
                            </span>
                            <span class="flex items-center gap-1 sm:text-base font-medium">
                                <i class='bx bx-phone text-2xl text-green-500'></i>
                                +998901234567
                            </span>
                        </div>
                    </div>
                </div>

                <div class="border-b border-[#4ec3e0] w-full mt-5 flex items-center justify-center gap-20 pb-3">
                    <div class="flex flex-wrap items-center gap-5">
                        <button @click="active = 'videos'" :id="active == 'videos' ? 'active' : ''"
                            :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                            class="border px-7 py-3 text-2xl rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">
                            <i class='bx bxs-videos'></i>
                        </button>
                        <button @click="active = 'save'" :id="active == 'save' ? 'active' : ''"
                            :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                            class="border px-7 py-3 text-2xl rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">
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