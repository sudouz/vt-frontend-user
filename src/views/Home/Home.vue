<template>
    <div class="area">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="area-mobile">
        <ul class="circles-mobile">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <section>
        <div class="container mx-auto px-5">
            <div class="2xl:pt-40 pt-40 relative z-10">
                <div class="bg-[#4ec3e0] px-5 py-20 rounded-3xl flex items-center justify-center">
                    <div class="flex flex-col items-center  gap-10"
                        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                        <h2 class="uppercase sm:text-2xl text-md font-bold ">virtual ta'lim</h2>
                        <div class="flex flex-col items-center gap-5">
                            <h1 class="hero-title 2xl:text-8xl lg:text-7xl sm:text-6xl text-2xl font-bold text-center"
                                :class="{ ' text-[#12111F]': navbar.userNav, ' text-white': !navbar.userNav }">
                                Biz
                                bilim
                                olishingizga ko'maklashamiz!</h1>
                            <p class=" sm:text-base text-xs">
                                Istalgan joyda, o'zingizga qulay vaqtda o'qish imkoniyati..
                            </p>
                        </div>
                        <button
                            class="rounded-full bg-white text-lg font-medium text-[#12111F] py-2 px-7 border border-white hover:border-[#12111F] hover:text-white hover:bg-[#12111F]">
                            <router-link to="/courses">Kurslarni ko'rish</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#4ec3e0] relative sm:mt-20 mt-10 z-10 overflow-x-hidden">
        <div class="container mx-auto px-5">
            <div class="items flex justify-between lg:gap-20 gap-10 py-5" data-v-e33b1926="">
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">5000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Jami tahsil olayotgan o’quvchilarimiz</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">1000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Shu kungacha bitirgan o‘quvchilar</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">100</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Platformamizda mavjud kurslar soni</p>
                </div>

                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">5000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Jami tahsil olayotgan o’quvchilarimiz</p>
                </div>
                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">1000</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Shu kungacha bitirgan o‘quvchilar</p>
                </div>

                <div class="entry flex items-center border rounded-3xl gap-3 p-5" data-v-e33b1926="">
                    <h3 class="text-white lg:text-5xl text-lg font-bold">100</h3>
                    <p class="text-white lg:text-lg text-xs font-medium">Platformamizda mavjud kurslar soni</p>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-10 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="">
                <h2 class="sm:text-3xl text-2xl font-bold mb-5">"Virtual Ta'lim" ning avzaliklari</h2>
                <div class="hidden sm:grid lg:grid-cols-2 gap-5">
                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <i
                            class='bx bxs-graduation sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Sifatli ta'lim</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <i
                            class='bx bx-brain sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Bepul mahorat darslari</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <i
                            class='bx bx-globe sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">24/7 aloqa</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <i
                            class='bx bxs-credit-card sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Arzon narxlar</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>
                </div>

                <div class="sm:hidden">
                    <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="1" :space-between="50"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                        @slideChange="onSlideChange" :autoplay="{ delay: 3000 }">
                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <i
                                    class='bx bxs-graduation sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                                <div class="flex flex-col gap-3 ">
                                    <h3 class="sm:text-2xl text-xl font-bold">Sifatli ta'lim</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Corporis illo culpa unde
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <i
                                    class='bx bx-brain sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                                <div class="flex flex-col gap-3 ">
                                    <h3 class="sm:text-2xl text-xl font-bold">Bepul mahorat darslari</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Corporis illo culpa unde
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <i
                                    class='bx bx-globe sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                                <div class="flex flex-col gap-3 ">
                                    <h3 class="sm:text-2xl text-xl font-bold">24/7 aloqa</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Corporis illo culpa unde
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <i
                                    class='bx bxs-credit-card sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                                <div class="flex flex-col gap-3 ">
                                    <h3 class="sm:text-2xl text-xl font-bold">Arzon narxlar</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Corporis illo culpa unde
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-20 lg:pt-40 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="bg-[#4ec3e0] relative rounded-3xl lg:px-20  lg:py-28">
                <div class="hidden lg:flex flex-col gap-5 w-[50%]">
                    <h2 class="text-5xl font-bold"
                        :class="{ ' text-[#12111F]': navbar.userNav, ' text-white': !navbar.userNav }">Savollaringiz bormi ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                </div>
                <div class="box lg:absolute -top-20 2xl:right-40 right-20 lg:w-[400px] rounded-3xl px-5 py-10"
                    :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <h2 class="lg:hidden block sm:text-3xl text-2xl font-bold mb-2">Savollaringiz bormi ?</h2>
                    <p class="lg:hidden block text-xs mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint
                        quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 sm:text-lg text-sm font-medium ">Ismingiz</label>
                            <input type="name" name="name" id="name"
                                class="border text-sm rounded-full outline-none block w-full p-4 bg-transparent border-[#4ec3e0]  placeholder-gray-400 "
                                placeholder="Ismingizni yozing" required="" />
                        </div>
                        <div>
                            <label for="telegram" class="block mb-2 sm:text-lg text-sm font-medium">Telegram
                                username</label>
                            <input type="username" name="username" id="telegram" placeholder="@username"
                                class="border outline-none text-sm rounded-full block w-full p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                                required="" />
                        </div>
                        <div>
                            <label for="savol" class="block mb-2 sm:text-lg text-sm font-medium">Savolingiz</label>
                            <textarea name="" id="savol" cols="30" rows="10" placeholder="Savol.."
                                class="w-full min-h-24 max-h-24 border outline-none text-sm rounded-2xl block p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"></textarea>
                        </div>
                        <button type="submit"
                            :class="{ 'hover:border-white hover:bg-white hover:text-[#4ec3e0]': navbar.userNav, 'hover:bg-[#12111F] hover:border-[#12111F]': !navbar.userNav }"
                            class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-full text-sm px-5 py-2.5 text-center">
                            Jo'natish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#4ec3e0] relative lg:mt-40 sm:mt-20 mt-10 z-10 overflow-x-hidden">
        <div class="container mx-auto px-5">
            <div class="items flex items-center justify-between gap-3 py-5" data-v-e33b1926="">
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Birinchi qadam sizdan</p>
            </div>
        </div>
    </section>

    <section class="relative z-10 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div>
                <div class="flex items-center justify-between mb-5">
                    <h2 class="text-3xl font-bold">Kurslar</h2>
                    <button
                        class="rounded-full bg-[#4ec3e0] sm:text-lg text-sm font-medium text-white py-2 px-7 border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0]">
                        <router-link to="/courses">Ko'proq ko'rish</router-link>
                    </button>
                </div>
                <div class="grid lg:grid-cols-2 gap-5">
                    <button @click="frontend" class="box rounded-3xl"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <div class="p-5 flex gap-5">
                            <img class="sm:block hidden w-40 h-40 rounded-3xl" src="/frontend.jpg" alt="">
                            <div class="flex flex-col justify-between gap-5">
                                <div class="flex flex-col text-start gap-2">
                                    <h3 class="text-2xl font-bold">Frontend</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Labore
                                        assumenda incidunt repudiandae officiis quasi. Laboriosam, assumenda..
                                    </p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="flex items-center gap-1 font-medium"><i
                                            class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi</span>
                                    <span class="flex items-center gap-1 font-medium"><i
                                            class='bx bx-play text-lg text-[#4ec3e0]'></i>50 dars</span>
                                </div>
                            </div>
                        </div>
                    </button>

                    <button @click="backend" class="box rounded-3xl"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <div class="p-5 flex gap-5">
                            <img class="sm:block hidden w-40 h-40 rounded-3xl" src="/backend.jpg" alt="">
                            <div class="flex flex-col justify-between gap-5">
                                <div class="flex flex-col text-start gap-2">
                                    <h3 class="text-2xl font-bold">Backend</h3>
                                    <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Labore
                                        assumenda incidunt repudiandae officiis quasi. Laboriosam, assumenda..
                                    </p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="flex items-center gap-1 font-medium"><i
                                            class='bx bxs-user text-lg text-[#4ec3e0]'></i>100 o'quvchi</span>
                                    <span class="flex items-center gap-1 font-medium"><i
                                            class='bx bx-play text-lg text-[#4ec3e0]'></i>50 dars</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-10 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="pt-5 sm:pb-5 pb-0 flex flex-col gap-5">
                <h2 class="sm:text-3xl text-2xl font-bold">O‘quvchilarning fikrlari</h2>

                <div class="lg:block hidden">
                    <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="3" :space-between="20"
                        :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :scrollbar="{ draggable: true }"
                        @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="sm:block lg:hidden hidden">
                    <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="2" :space-between="20"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                        @slideChange="onSlideChange" :autoplay="{ delay: 3000 }">
                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="sm:hidden">
                    <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="1" :space-between="20"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                        @slideChange="onSlideChange" :autoplay="{ delay: 3000 }">
                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5"
                                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Aperiam
                                        suscipit dolorem officiis
                                        in, unde inventore, laudantium atque praesentium hic rem culpa minus. Recusandae
                                        optio
                                        corrupti vitae rem, quo sunt debitis!
                                    </p>
                                    <button
                                        class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]">
                                        Ko'proq
                                        <i class='bx bx-chevron-down'></i>
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#4ec3e0] relative sm:mt-20 mt-10 z-10 overflow-x-hidden">
        <div class="container mx-auto px-5">
            <div class="items flex items-center justify-between gap-3 py-5" data-v-e33b1926="">
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
                <p class="entry text-white sm:text-base text-sm">•</p>
                <p class="entry text-white sm:text-base text-sm">Bir marta to'lang va har doim foydalaning</p>
            </div>
        </div>
    </section>

    <section class="relative z-10 lg:pt-40 sm:pt-20 pt-10 lg:pb-40 pb-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="bg-[#4ec3e0] relative rounded-3xl lg:px-5  lg:py-28">
                <div class="hidden lg:flex flex-col gap-5 w-[60%]">
                    <h2 class="text-5xl font-bold"
                        :class="{ ' text-[#12111F]': navbar.userNav, ' text-white': !navbar.userNav }">Biz bilan
                        bog'lanmoqchimisiz ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                </div>
                <div class="box lg:absolute -top-16 2xl:right-40 right-20 lg:w-[400px] rounded-3xl px-5 py-10"
                    :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <h2 class="lg:hidden block sm:text-3xl text-2xl font-bold mb-2">Biz bilan bog'lanmoqchimisiz ?</h2>
                    <p class="lg:hidden block text-xs mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint
                        quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 sm:text-lg text-sm font-medium ">Ismingiz</label>
                            <input type="name" name="name" id="name"
                                class="border text-sm rounded-full outline-none block w-full p-4 bg-transparent border-[#4ec3e0]  placeholder-gray-400 "
                                placeholder="Ismingizni yozing" required="" />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 sm:text-lg text-sm font-medium">Telefon
                                raqamingiz</label>
                            <input type="tel" name="tel" id="phone" placeholder="+998"
                                class="border outline-none text-sm rounded-full block w-full p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                                required="" />
                        </div>
                        <div>
                            <label for="telegram" class="block mb-2 sm:text-lg text-sm font-medium">Telegram
                                username</label>
                            <input type="username" name="username" id="telegram" placeholder="@username"
                                class="border outline-none text-sm rounded-full block w-full p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                                required="" />
                        </div>
                        <button type="submit"
                            :class="{ 'hover:border-white hover:bg-white hover:text-[#4ec3e0]': navbar.userNav, 'hover:bg-[#12111F] hover:border-[#12111F]': !navbar.userNav }"
                            class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-full text-sm px-5 py-2.5 text-center">
                            Jo'natish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useNavStore } from "../../stores/toggle";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// const modal = ref(false);
// const openModal = () => (modal.value = !modal.value);


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiper = useSwiper();
        const navbar = useNavStore();
        const router = useRouter();
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        const frontend = () => {
            localStorage.setItem("active", "frontend");
            router.push("/courses");
        }

        const backend = () => {
            localStorage.setItem("active", "backend");
            router.push("/courses");
        }
        return {
            onSwiper,
            onSlideChange,
            navbar,
            frontend,
            backend,
            router,
            swiper,
            modules: [Navigation, Pagination, A11y, Autoplay]
        };
    },
};
</script>

<style lang="css" scoped>
.items[data-v-e33b1926] {
    width: -moz-fit-content;
    width: fit-content;
    width: -moz-max-content;
    width: max-content;
    animation: carouselAnim-e33b1926 15s infinite alternate linear;
    overflow-x: auto;
}

@keyframes carouselAnim-e33b1926 {
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(calc(-100% + 1500px));
    }
}

.hero-title {
    font-family: "Roboto", sans-serif;
    letter-spacing: 2px;
}

.box {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

@keyframes fadeinout {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }


}

.area {
    width: 100%;
    height: 100%;
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #4ec3e0;
    animation: animate 25s linear infinite;
    /* bottom: -150px; */

}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 30s;
}


.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 40s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 34s;
}

.circles li:nth-child(4) {
    left: 50%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 48s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 30s;
}

.circles li:nth-child(6) {
    left: 60%;
    width: 110px;
    height: 110px;
    animation-delay: 40s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 30s;
    top: -100px;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 30s;
}

.circles li:nth-child(11) {
    left: 65%;
    width: 40px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 40s;
}

.circles li:nth-child(12) {
    left: 75%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 30s;
}

.circles li:nth-child(13) {
    left: 35%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 41s;
}

.circles li:nth-child(14) {
    left: 5%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 38s;
}

.circles li:nth-child(15) {
    right: 3%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 40s;
}

.circles li:nth-child(16) {
    right: 12%;
    width: 32px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles li:nth-child(17) {
    right: 42%;
    width: 22px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 48s;
}

.circles li:nth-child(18) {
    right: 72%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles li:nth-child(19) {
    right: 52%;
    width: 52px;
    height: 50px;
    animation-delay: 5s;
    animation-duration: 39s;
}

.circles li:nth-child(20) {
    right: 40%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 48s;
}

.circles li:nth-child(21) {
    right: 80%;
    width: 42px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 38s;
}

.circles li:nth-child(22) {
    right: 40%;
    width: 55px;
    height: 60px;
    animation-delay: 3s;
    animation-duration: 40s;
}

.circles li:nth-child(23) {
    right: 50%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles li:nth-child(23) {
    right: 45%;
    width: 30px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 40s;
}

.circles li:nth-child(24) {
    right: 60%;
    width: 40px;
    height: 40px;
    animation-delay: 10s;
    animation-duration: 70s;
}

.circles li:nth-child(25) {
    right: 70%;
    width: 50px;
    height: 50px;
    animation-delay: 8s;
    animation-duration: 30s;
}

.circles li:nth-child(26) {
    right: 60%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
    animation-duration: 60s;
}


@keyframes animate {

    0% {
        transform: translateY(10px) rotate(0deg);
        opacity: 0;
        border-radius: 5%;
    }

    10% {
        opacity: 0.2;
        border-radius: 20%;
    }

    20% {
        opacity: 0.3;
        border-radius: 20%;
    }

    30% {
        opacity: 0.4;
        border-radius: 20%;
    }

    40% {
        opacity: 0.5;
        border-radius: 20%;
    }

    50% {
        opacity: 0.6;
    }

    60% {
        opacity: 0.7;
    }

    70% {
        opacity: 0.8;
    }

    80% {

        opacity: 0.9;
    }

    100% {
        transform: translateY(3820px) rotate(720deg);
        opacity: 1;
        border-radius: 50%;
    }
}

.area-mobile {
    display: none;
    width: 100%;
    height: 100%;
}

.circles-mobile {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
}

.circles-mobile li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #4ec3e0;
    animation: animate-mobile 25s linear infinite;
    /* bottom: -150px; */

}

.circles-mobile li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 30s;
}


.circles-mobile li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 40s;
}

.circles-mobile li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 34s;
}

.circles-mobile li:nth-child(4) {
    left: 50%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 48s;
}

.circles-mobile li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 30s;
}

.circles-mobile li:nth-child(6) {
    left: 60%;
    width: 110px;
    height: 110px;
    animation-delay: 40s;
}

.circles-mobile li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 30s;
    top: -100px;
}

.circles-mobile li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles-mobile li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles-mobile li:nth-child(10) {
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(11) {
    left: 65%;
    width: 40px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 40s;
}

.circles-mobile li:nth-child(12) {
    left: 75%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(13) {
    left: 35%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 41s;
}

.circles-mobile li:nth-child(14) {
    left: 5%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 38s;
}

.circles-mobile li:nth-child(15) {
    right: 3%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 40s;
}

.circles-mobile li:nth-child(16) {
    right: 12%;
    width: 32px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(17) {
    right: 42%;
    width: 22px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 48s;
}

.circles-mobile li:nth-child(18) {
    right: 72%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(19) {
    right: 52%;
    width: 52px;
    height: 50px;
    animation-delay: 5s;
    animation-duration: 39s;
}

.circles-mobile li:nth-child(20) {
    right: 40%;
    width: 12px;
    height: 10px;
    animation-delay: 5s;
    animation-duration: 48s;
}

.circles-mobile li:nth-child(21) {
    right: 80%;
    width: 42px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 38s;
}

.circles-mobile li:nth-child(22) {
    right: 40%;
    width: 55px;
    height: 60px;
    animation-delay: 3s;
    animation-duration: 40s;
}

.circles-mobile li:nth-child(23) {
    right: 50%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(23) {
    right: 45%;
    width: 30px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 40s;
}

.circles-mobile li:nth-child(24) {
    right: 60%;
    width: 40px;
    height: 40px;
    animation-delay: 10s;
    animation-duration: 70s;
}

.circles-mobile li:nth-child(25) {
    right: 70%;
    width: 50px;
    height: 50px;
    animation-delay: 8s;
    animation-duration: 30s;
}

.circles-mobile li:nth-child(26) {
    right: 60%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
    animation-duration: 60s;
}

@keyframes animate-mobile {

    0% {
        transform: translateY(10px) rotate(0deg);
        opacity: 0;
        border-radius: 5%;
    }

    10% {
        opacity: 0.2;
        border-radius: 20%;
    }

    20% {
        opacity: 0.3;
        border-radius: 20%;
    }

    30% {
        opacity: 0.4;
        border-radius: 20%;
    }

    40% {
        opacity: 0.5;
        border-radius: 20%;
    }

    50% {
        opacity: 0.6;
    }

    60% {
        opacity: 0.7;
    }

    70% {
        opacity: 0.8;
    }

    80% {

        opacity: 0.9;
    }

    100% {
        transform: translateY(3000px) rotate(720deg);
        opacity: 1;
        border-radius: 50%;
    }
}

@media(max-width:650px) {
    .area-mobile {
        display: block;
    }

    .area {
        display: none;
    }
}
</style>