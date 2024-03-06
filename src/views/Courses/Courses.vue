<template>
    <nav class="relative z-10 pt-40" :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="flex flex-col gap-12">
                <div class="flex sm:flex-row flex-col sm:items-center gap-5 justify-between">
                    <h2 class="sm:text-4xl text-2xl font-bold">Barcha o‘quv kurslari</h2>
                    <input :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }"
                        class="sm:w-96 px-5 py-3 rounded-full bg-transparent outline-none border border-[#4ec3e0] placeholder-[#4ec3e0]"
                        type="search" placeholder="Izlash">
                </div>
                <div class="flex flex-wrap items-center gap-5">
                    <button @click="active = 'barchasi'" :id="active == 'barchasi' ? 'active' : ''"
                        :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Barchasi
                    </button>
                    <button @click="active = 'frontend'" :id="active == 'frontend' ? 'active' : ''"
                        :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Frontend
                    </button>
                    <button @click="active = 'backend'" :id="active == 'backend' ? 'active' : ''"
                        :class="{ 'border-white ': navbar.userNav, 'border-[#12111F]': !navbar.userNav }"
                        class="border px-7 py-3 rounded-full hover:border-[#4ec3e0] hover:text-[#4ec3e0]">Backend
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <section class="relative z-10 sm:pt-20 pt-10 sm:pb-20 pb-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="grid lg:grid-cols-3 gap-5">
                <router-link to="/courses" :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
                    class="box rounded-3xl" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <div class="p-5 flex gap-5">
                        <img class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
                            src="https://www.kaashivinfotech.com/blog/wp-content/uploads/2023/10/html-css-beginners.jpg"
                            alt="">
                        <div class="flex flex-col justify-between gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-2xl font-bold">HTML/CSS</h3>
                                <span class="flex items-center gap-1 font-medium"><i
                                        class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi
                                </span>
                            </div>
                            <span class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]">20 000 so'm</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/courses" :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
                    class="box rounded-3xl" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <div class="p-5 flex gap-5">
                        <img class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                            alt="">
                        <div class="flex flex-col justify-between gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-2xl font-bold">Javascript </h3>
                                <span class="flex items-center gap-1 font-medium"><i
                                        class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi
                                </span>
                            </div>
                            <span class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]">20 000 so'm</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/courses" :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
                    class="box rounded-3xl" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <div class="p-5 flex gap-5">
                        <img class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGUUWRbIn8130p33QdtMYw6heRWTQI0xFxQ&usqp=CAU"
                            alt="">
                        <div class="flex flex-col justify-between gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-2xl font-bold">Tailwind CSS</h3>
                                <span class="flex items-center gap-1 font-medium"><i
                                        class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi
                                </span>
                            </div>
                            <span class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]">20 000 so'm</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/courses" :id="active == 'backend' || active == 'barchasi' ? '' : 'hidden'"
                    class="box rounded-3xl" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <div class="p-5 flex gap-5">
                        <img class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
                            src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg"
                            alt="">
                        <div class="flex flex-col justify-between gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-2xl font-bold">NodeJs </h3>
                                <span class="flex items-center gap-1 font-medium"><i
                                        class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi
                                </span>
                            </div>
                            <span class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]">20 000 so'm</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/courses" :id="active == 'backend' || active == 'barchasi' ? '' : 'hidden'"
                    class="box rounded-3xl" :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <div class="p-5 flex gap-5">
                        <img class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
                            src="https://miro.medium.com/v2/resize:fit:1358/0*1VyCqSN0pdtXitey.jpg" alt="">
                        <div class="flex flex-col justify-between gap-5">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-2xl font-bold">NestJs </h3>
                                <span class="flex items-center gap-1 font-medium"><i
                                        class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi
                                </span>
                            </div>
                            <span class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]">20 000 so'm</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
import { ref } from 'vue';
const navbar = useNavStore();
const frontend = ref(true);
const backend = ref(true);
const active = ref("barchasi")

const lamp = localStorage.getItem("active")

if (lamp) {
    active.value = lamp
}

</script>

<style lang="scss" scoped>
#active {
    background-color: #4ec3e0;
    border: 1px solid #4ec3e0;
    color: white;
}

#hidden {
    display: none;
}

.box {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

.box:hover {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: 0px 0px 10px 0px rgba(78, 195, 224, 1);
}
</style>