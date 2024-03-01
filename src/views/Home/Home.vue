<template>
    
    <section>
        <div class="container mx-auto px-5">
            <div class="2xl:pt-40 pt-40 relative z-10">
                <div class="box px-5 py-20 rounded-3xl flex items-center justify-center">
                    <div class="flex flex-col items-center  gap-10"
                        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
                        <h2 class="uppercase sm:text-2xl text-md font-bold text-[#4ec3e0]">virtual ta'lim</h2>
                        <div class="flex flex-col items-center gap-5">
                            <h1 class="hero-title 2xl:text-8xl lg:text-7xl sm:text-6xl text-2xl font-bold text-center">Biz
                                bilim
                                olishingizga ko'maklashamiz!</h1>
                            <p class=" sm:text-base text-xs">
                                Istalgan joyda, o'zingizga qulay vaqtda o'qish imkoniyati..
                            </p>
                        </div>
                        <button
                            class="rounded-full bg-[#4ec3e0] text-lg font-medium text-white py-2 px-7 border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0]">
                            <router-link to="/kurslar">Kurslarni korish</router-link>
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
            <div class="box rounded-3xl px-5 pt-10 sm:pb-10 pb-0"
                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                <h2 class="sm:text-3xl text-2xl font-bold mb-10">Nima uchun "Virtual Ta'lim" da o’qish kerak ?</h2>
                <div class="hidden sm:grid lg:grid-cols-2 gap-5">
                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bxs-graduation sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Sifatli ta'lim</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bx-brain sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">Bepul mahorat darslari</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
                        <i
                            class='bx bx-globe sm:min-w-20 sm:max-w-20 sm:min-h-20 sm:max-h-20 min-w-14 max-w-14 min-h-14 max-h-14 sm:text-5xl text-4xl bg-[#4ec3e0] rounded-full flex items-center justify-center text-white'></i>
                        <div class="flex flex-col gap-3 ">
                            <h3 class="sm:text-2xl text-xl font-bold">24/7 aloqa</h3>
                            <p class="sm:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corporis illo culpa unde
                            </p>
                        </div>
                    </div>

                    <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
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
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
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
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
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
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
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
                            <div class="box rounded-3xl p-10 flex sm:flex-row flex-col sm:items-center sm:gap-5 gap-3">
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

    <section class="relative z-10 lg:pt-40 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="box relative rounded-3xl lg:px-5  lg:py-28"
                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                <div class="hidden lg:flex flex-col gap-5 w-[40%]">
                    <h2 class="text-5xl font-bold">Savollaringiz bormi ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                </div>
                <div class="box lg:absolute -top-16 2xl:right-40 right-20 lg:w-[400px] rounded-3xl px-5 py-10"
                    :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <h2 class="lg:hidden block sm:text-3xl text-2xl font-bold mb-2">Savollaringiz bormi ?</h2>
                    <p class="lg:hidden block text-xs mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
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
                            class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-full text-sm px-5 py-2.5 text-center">
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
                        <router-link to="/kurslar">Ko'proq ko'rish</router-link>
                    </button>
                </div>
                <div class="grid lg:grid-cols-2 gap-5">
                    <router-link to="/frontend" class="box rounded-3xl"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <div class="p-5 flex gap-5">
                            <img class="sm:block hidden w-40 h-40 rounded-3xl" src="/frontend.jpg" alt="">
                            <div class="flex flex-col justify-between gap-5">
                                <div class="flex flex-col gap-2">
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
                    </router-link>

                    <router-link to="/backend" class="box rounded-3xl"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <div class="p-5 flex gap-5">
                            <img class="sm:block hidden w-40 h-40 rounded-3xl" src="/backend.jpg" alt="">
                            <div class="flex flex-col justify-between gap-5">
                                <div class="flex flex-col gap-2">
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
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-10 sm:pt-20 pt-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="box rounded-3xl px-5 pt-5 sm:pb-5 pb-0 flex flex-col gap-10"
                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                <div class="flex items-center justify-between">
                    <h2 class="sm:text-3xl text-2xl font-bold">O‘quvchilarning fikrlari</h2>
                    <div class="lg:flex hidden items-center gap-5">
                        <button
                            class="bg-[#4ec3e0] rounded-full h-14 w-14 flex items-center justify-center text-white hover:bg-transparent border border-[#4ec3e0] hover:text-[#4ec3e0]"><i
                                class='bx bx-chevron-left text-4xl'></i></button>
                        <button
                            class="bg-[#4ec3e0] rounded-full h-14 w-14 flex items-center justify-center text-white hover:bg-transparent border border-[#4ec3e0] hover:text-[#4ec3e0]"><i
                                class='bx bx-chevron-right text-4xl'></i></button>
                    </div>
                </div>

                <div class="lg:block hidden">
                    <swiper class="swiper-preloader-spin" :modules="modules" :slides-per-view="3" :space-between="20"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                        @slideChange="onSlideChange" :autoplay="{ delay: 5000 }">
                        <swiper-slide class="pb-10">
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                            <div class="box rounded-3xl p-5 flex flex-col gap-5">
                                <div class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]">
                                    <img class="w-16 h-16 rounded-full" src="/user.png" alt="">
                                    <h3 class="text-lg font-bold">John Doe</h3>
                                </div>
                                <div class="flex flex-col gap-8">
                                    <p class="sm:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div class="box relative rounded-3xl lg:px-5  lg:py-28"
                :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                <div class="hidden lg:flex flex-col gap-5 w-[60%]">
                    <h2 class="text-5xl font-bold">Biz bilan bog'lanmoqchimisiz ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae voluptatum error incidunt eum
                        similique iure exercitationem numquam fuga rerum assumenda laborum
                    </p>
                </div>
                <div class="box lg:absolute -top-16 2xl:right-40 right-20 lg:w-[400px] rounded-3xl px-5 py-10"
                    :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                    <h2 class="lg:hidden block sm:text-3xl text-2xl font-bold mb-2">Biz bilan bog'lanmoqchimisiz ?</h2>
                    <p class="lg:hidden block text-xs mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
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
                            <label for="phone" class="block mb-2 sm:text-lg text-sm font-medium">Telefon raqamingiz</label>
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
                            class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-full text-sm px-5 py-2.5 text-center">
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
import { ref } from "vue";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const navbar = useNavStore();
const modal = ref(false);
const openModal = () => (modal.value = !modal.value);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiper = useSwiper();
        const onSwiper = (swiper) => {

            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            navbar,
            swiper,
            modules: [Navigation, Pagination, A11y, Autoplay]
        };
    },
};
</script>

<style lang="css" scoped>
/* @keyframes swiper-preloader-spin {
    to {
        transform: rotate(1turn)
    }
} */

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
</style>