<template>
    <header>
        <div class="container mx-auto px-5 border-b border-green-500">
            <nav class="py-5 flex items-center justify-between">
                <a href="#" class="uppercase text-white font-bold text-[30px]">virtual <span class="text-green-500">ta'lim</span></a>
                <ul class="flex items-center gap-10">
                    <li class="text-white font-medium hover:text-green-500">
                        <NuxtLink to="/">Bosh sahifa</NuxtLink>
                    </li>
                    <li class="text-white font-medium hover:text-green-500">
                        <NuxtLink to="/">Yangiliklar</NuxtLink>
                    </li>
                    <li class="text-white font-medium hover:text-green-500">
                        <NuxtLink to="/">Kurslar</NuxtLink>
                    </li>
                    <li class="text-white font-medium hover:text-green-500">
                        <NuxtLink to="/">O'qtuvchilar</NuxtLink>
                    </li>
                    <li class="text-white font-medium hover:text-green-500">
                        <NuxtLink to="/">Bog'lanish</NuxtLink>
                    </li>
                </ul>
                <div class="flex items-center gap-5 ">
                    <button class="login px-7 py-2 border border-green-500 text-white font-medium rounded-full hover:bg-green-500">Kirish</button>
                    <button class="register px-7 py-2 border border-green-500 bg-green-500 text-white font-medium rounded-full hover:bg-transparent">Ro'yxatdan o'tish</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="css" scoped>
button, li {
    transition: 0.5s;
}
.register:hover + .login{
    background:#22C55E ;
}
.login:hover + .register {
    background: transparent;
}


</style>