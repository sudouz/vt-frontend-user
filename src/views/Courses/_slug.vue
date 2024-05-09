<template>
  <section>
    <div class="container mx-auto px-5">
      <div class="pt-40 relative z-10">
        <div
          class="bg-[#4ec3e0] px-5 sm:py-20 py-10 rounded-3xl flex items-center justify-center"
        >
          <div
            class="flex sm:flex-row flex-col items-center justify-between w-full sm:px-20"
            :class="{
              ' text-white': navbar.userNav,
              ' text-[#12111F]': !navbar.userNav,
            }"
          >
            <div
              class="flex flex-col items-center sm:items-start sm:gap-10 gap-5 text-center sm:text-start"
            >
              <h1
                class="hero-title 2xl:text-6xl lg:text-7xl sm:text-6xl text-2xl font-bold"
              >
                JavaScript <br />
                <span
                  :class="{
                    ' text-[#12111F]': navbar.userNav,
                    ' text-white': !navbar.userNav,
                  }"
                  >darslariga xush kelibsiz!</span
                >
              </h1>
              <p class="sm:text-base text-xs">
                1 - dars bepul qolgan hamma darslar 20 000 so'm. Arzon narx va
                sifatli dars! <br />
                Biz bilim olishingizga ko'maklashamiz!
              </p>
              <button
                class="rounded-full w-40 bg-white text-lg font-medium text-[#12111F] py-2 px-7 border border-white hover:border-[#12111F] hover:text-white hover:bg-[#12111F]"
              >
                <router-link to="#dars">Boshlash</router-link>
              </button>
            </div>
            <img
              class="sm:w-72 sm:h-72 lg:block hidden rounded-3xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-5">
      <div
        class="sm:pt-28 pt-20 relative z-10"
        :class="{
          ' text-white': navbar.userNav,
          ' text-[#12111F]': !navbar.userNav,
        }"
      >
        <div class="flex flex-col gap-5">
          <h2 class="sm:text-3xl text-2xl font-bold">
            Darslar haqida qisqacha
          </h2>
          <p class="box p-5 rounded-3xl sm:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, modi.
            <br />
            Accusamus eligendi adipisci facilis at, voluptate architecto ad
            delectus tempora, dicta natus ullam, explicabo id. Nam tempore esse
            fugit quae!
          </p>
          <div
            class="flex lg:flex-row flex-col items-center justify-between gap-5 w-full"
          >
            <div class="box p-5 rounded-3xl w-full flex flex-col gap-3">
              <h3 class="sm:text-2xl text-1xl font-bold text-[#4ec3e0]">
                Darslar soni
              </h3>
              <span class="sm:text-2xl text-xl font-bold">6 ta</span>
            </div>
            <div class="box p-5 rounded-3xl w-full flex flex-col gap-3">
              <h3 class="sm:text-2xl text-1xl font-bold text-[#4ec3e0]">
                Darslar davomiyligi
              </h3>
              <span class="sm:text-2xl text-xl font-bold">30 daqiqa</span>
            </div>
            <div class="box p-5 rounded-3xl w-full flex flex-col gap-3">
              <h3 class="sm:text-2xl text-1xl font-bold text-[#4ec3e0]">
                Sotib olganlar soni
              </h3>
              <span class="sm:text-2xl text-xl font-bold">100 ta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-5">
      <div
        class="sm:pt-28 pt-20 relative z-10"
        :class="{
          ' text-white': navbar.userNav,
          ' text-[#12111F]': !navbar.userNav,
        }"
      >
        <div class="flex lg:flex-row flex-col lg:gap-10 gap-20">
          <div class="flex flex-col gap-5">
            <iframe
              class="2xl:w-[1000px] 2xl:h-[600px] lg:w-[800px] lg:h-[500px] w-full sm:h-[400px] h-52"
              src="https://www.youtube.com/embed/PZUr2YyYmFY?si=5z_4aCguWiPe3dUH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
            <h2 class="sm:text-3xl text-2xl font-bold text-[#4ec3e0]">
              JavaScript 1 - dars. Kirish!
            </h2>
            <span class="sm:text-base text-xs"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequatur quis nesciunt perspiciatis totam dignissimos
              minima, quae, inventore magnam voluptatum, hic repellendus!
              Blanditiis placeat aliquid repellendus facilis asperiores
              perspiciatis aperiam?</span
            >
            <span class="sm:text-base text-xs"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi consequatur quis nesciunt perspiciatis totam dignissimos
              minima, quae, inventore magnam voluptatum, hic repellendus!
              Blanditiis placeat aliquid repellendus facilis asperiores
              perspiciatis aperiam?
            </span>
          </div>
          <div
            class="box p-5 rounded-3xl flex flex-col items-center w-full h-fit"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <div
              class="border-b border-[#4ec3e0] w-full flex flex-col"
              :class="{
                'bg-[#12111F]': navbar.userNav,
                'bg-white': !navbar.userNav,
              }"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  @click="toggleModal(0)"
                  type="button"
                  class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="sm:text-base text-sm">2 - dars </span>
                  <i
                    :class="
                      modal[0]
                        ? 'bx bx-chevron-up p-2 text-[30px] rounded-full'
                        : 'bx bx-chevron-down p-2 text-[30px] rounded-full'
                    "
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                :class="modal[0] ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores enim sed totam dolore placeat quas ratione. Nemo est
                    modi velit laborum quae dolor rem aperiam? Nemo natus libero
                    quidem porro!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border-b border-[#4ec3e0] w-full flex flex-col"
              :class="{
                'bg-[#12111F]': navbar.userNav,
                'bg-white': !navbar.userNav,
              }"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  @click="toggleModal(1)"
                  type="button"
                  class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="sm:text-base text-sm">3 - dars </span>
                  <i
                    :class="
                      modal[1]
                        ? 'bx bx-chevron-up p-2 text-[30px] rounded-full'
                        : 'bx bx-chevron-down p-2 text-[30px] rounded-full'
                    "
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                :class="modal[1] ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores enim sed totam dolore placeat quas ratione. Nemo est
                    modi velit laborum quae dolor rem aperiam? Nemo natus libero
                    quidem porro!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border-b border-[#4ec3e0] w-full flex flex-col"
              :class="{
                'bg-[#12111F]': navbar.userNav,
                'bg-white': !navbar.userNav,
              }"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  @click="toggleModal(2)"
                  type="button"
                  class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="sm:text-base text-sm">4 - dars </span>
                  <i
                    :class="
                      modal[2]
                        ? 'bx bx-chevron-up p-2 text-[30px] rounded-full'
                        : 'bx bx-chevron-down p-2 text-[30px] rounded-full'
                    "
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                :class="modal[2] ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores enim sed totam dolore placeat quas ratione. Nemo est
                    modi velit laborum quae dolor rem aperiam? Nemo natus libero
                    quidem porro!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border-b border-[#4ec3e0] w-full flex flex-col"
              :class="{
                'bg-[#12111F]': navbar.userNav,
                'bg-white': !navbar.userNav,
              }"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  @click="toggleModal(3)"
                  type="button"
                  class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="sm:text-base text-sm">5 - dars </span>
                  <i
                    :class="
                      modal[3]
                        ? 'bx bx-chevron-up p-2 text-[30px] rounded-full'
                        : 'bx bx-chevron-down p-2 text-[30px] rounded-full'
                    "
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                :class="modal[3] ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores enim sed totam dolore placeat quas ratione. Nemo est
                    modi velit laborum quae dolor rem aperiam? Nemo natus libero
                    quidem porro!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border-b border-[#4ec3e0] w-full flex flex-col"
              :class="{
                'bg-[#12111F]': navbar.userNav,
                'bg-white': !navbar.userNav,
              }"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  @click="toggleModal(4)"
                  type="button"
                  class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="sm:text-base text-sm">6 - dars </span>
                  <i
                    :class="
                      modal[4]
                        ? 'bx bx-chevron-up p-2 text-[30px] rounded-full'
                        : 'bx bx-chevron-down p-2 text-[30px] rounded-full'
                    "
                  ></i>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                :class="modal[4] ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores enim sed totam dolore placeat quas ratione. Nemo est
                    modi velit laborum quae dolor rem aperiam? Nemo natus libero
                    quidem porro!
                  </p>
                </div>
              </div>
            </div>
            <i class="bx bxs-lock-alt mt-14 text-8xl text-[#4ec3e0]"></i>
            <h2 class="sm:text-2xl text-xl font-bold mt-5">
              Darslarni sotib oling!
            </h2>
            <button
              :class="{
                'hover:border-white hover:bg-white hover:text-[#4ec3e0]':
                  navbar.userNav,
                'hover:bg-[#12111F] hover:border-[#12111F]': !navbar.userNav,
              }"
              class="rounded-full my-5 w-40 bg-[#4ec3e0] text-white text-lg font-medium py-2 px-7 border border-[#4ec3e0]"
            >
              <a href="https://t.me/davlat_jurayev" target="_blank"
                >Sotib olish</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-5">
      <div class="sm:pt-28 pt-20 relative z-10">
        <div
          class="bg-[#4ec3e0] px-5 sm:py-20 py-10 rounded-3xl flex items-center justify-center"
        >
          <div
            class="flex lg:flex-row flex-col lg:items-center gap-5 justify-between w-full sm:px-20"
            :class="{
              ' text-white': navbar.userNav,
              ' text-[#12111F]': !navbar.userNav,
            }"
          >
            <div class="flex flex-col lg:gap-10 gap-5">
              <h1
                class="hero-title 2xl:text-6xl lg:text-7xl sm:text-6xl text-2xl font-bold"
                :class="{
                  ' text-[#12111F]': navbar.userNav,
                  ' text-white': !navbar.userNav,
                }"
              >
                Darsni sotib olmoqchimisiz?
              </h1>
              <p class="sm:text-base text-xs">
                Darsni sotib olish uchun ro'yxatdan o'ting va
                <span
                  :class="{
                    ' text-[#12111F]': navbar.userNav,
                    ' text-white': !navbar.userNav,
                  }"
                >
                  "Sotib olish"
                </span>
                tugmasini bosing. <br />
                <span
                  :class="{
                    ' text-[#12111F]': navbar.userNav,
                    ' text-white': !navbar.userNav,
                  }"
                >
                  "Sotib olish"
                </span>
                tugmasi sizni telegram adminga yo'laydi va qolganini admin sizga
                tushuntirib beradi.
              </p>
            </div>
            <button
              class="rounded-full w-40 bg-white text-lg font-medium text-[#12111F] py-2 px-7 border border-white hover:border-[#12111F] hover:text-white hover:bg-[#12111F]"
            >
              <a href="https://t.me/davlat_jurayev" target="_blank"
                >Sotib olish</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative z-10 sm:pt-28 pt-20"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div class="pt-5 sm:pb-5 pb-0 flex flex-col gap-5">
        <h2 class="sm:text-3xl text-2xl font-bold">O‘quvchilarning fikrlari</h2>

        <div class="lg:block hidden">
          <swiper
            class="swiper-preloader-spin"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000 }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="sm:block lg:hidden hidden">
          <swiper
            class="swiper-preloader-spin"
            :modules="modules"
            :slides-per-view="2"
            :space-between="20"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="sm:hidden">
          <swiper
            class="swiper-preloader-spin"
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="pb-10">
              <div
                class="box rounded-3xl p-5 flex flex-col gap-5"
                :class="{
                  'bg-[#12111F]': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <div
                  class="flex items-center gap-3 border-b pb-5 border-[#4ec3e0]"
                >
                  <img class="w-16 h-16 rounded-full" src="/user.png" alt="" />
                  <h3 class="text-lg font-bold">John Doe</h3>
                </div>
                <div class="flex flex-col gap-8">
                  <p class="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam suscipit dolorem officiis in, unde inventore,
                    laudantium atque praesentium hic rem culpa minus. Recusandae
                    optio corrupti vitae rem, quo sunt debitis!
                  </p>
                  <button
                    class="sm:text-lg text-sm flex items-center justify-between font-medium text-[#4ec3e0]"
                  >
                    Ko'proq
                    <i class="bx bx-chevron-down"></i>
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative z-20 lg:pt-40 sm:pt-20 pt-20"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div class="bg-[#4ec3e0] relative rounded-3xl lg:px-20 lg:py-28">
        <div class="hidden lg:flex flex-col gap-5 w-[50%]">
          <h2
            class="text-5xl font-bold"
            :class="{
              ' text-[#12111F]': navbar.userNav,
              ' text-white': !navbar.userNav,
            }"
          >
            Savollaringiz bormi ?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            voluptatum error incidunt eum similique iure exercitationem numquam
            fuga rerum assumenda laborum
          </p>
        </div>
        <div
          class="box lg:absolute -top-20 2xl:right-40 right-20 lg:w-[400px] rounded-3xl px-5 py-10"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <h2 class="lg:hidden block sm:text-3xl text-2xl font-bold mb-2">
            Savollaringiz bormi ?
          </h2>
          <p class="lg:hidden block text-xs mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            voluptatum error incidunt eum similique iure exercitationem numquam
            fuga rerum assumenda laborum
          </p>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="name"
                class="block mb-2 sm:text-lg text-sm font-medium"
                >Ismingiz</label
              >
              <input
                type="name"
                name="name"
                id="name"
                class="border text-sm rounded-full outline-none block w-full p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                placeholder="Ismingizni yozing"
                required=""
              />
            </div>
            <div>
              <label
                for="telegram"
                class="block mb-2 sm:text-lg text-sm font-medium"
                >Telegram username</label
              >
              <input
                type="username"
                name="username"
                id="telegram"
                placeholder="@username"
                class="border outline-none text-sm rounded-full block w-full p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                required=""
              />
            </div>
            <div>
              <label
                for="savol"
                class="block mb-2 sm:text-lg text-sm font-medium"
                >Savolingiz</label
              >
              <textarea
                name=""
                id="savol"
                cols="30"
                rows="10"
                placeholder="Savol.."
                class="w-full min-h-24 max-h-24 border outline-none text-sm rounded-2xl block p-4 bg-transparent border-[#4ec3e0] placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              :class="{
                'hover:border-white hover:bg-white hover:text-[#4ec3e0]':
                  navbar.userNav,
                'hover:bg-[#12111F] hover:border-[#12111F]': !navbar.userNav,
              }"
              class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Jo'natish
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative z-10 sm:pt-40 pt-20"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <h2 class="sm:text-3xl text-2xl font-bold mb-5">Boshqa darslar</h2>
      <div class="grid lg:grid-cols-3 gap-5">
        <router-link
          :to="`/course/${1}/javascript`"
          :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
          class="box rounded-3xl"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="p-5 flex gap-5">
            <img
              class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
              src="https://www.kaashivinfotech.com/blog/wp-content/uploads/2023/10/html-css-beginners.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between gap-5 w-full">
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold">HTML/CSS</h3>
                <span class="flex items-center gap-1 font-medium"
                  ><i class="bx bxs-user text-lg text-[#4ec3e0]"></i>100
                  o'quvchi
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span
                  class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]"
                  >20 000 so'm</span
                >
                <button @click="toggleModal(0)">
                  <i
                    :class="modal[0] ? 'bx bxs-bookmark' : 'bx bx-bookmark'"
                    class="text-3xl"
                  ></i>
                  <!-- <i class='bx bxs-bookmark' ></i> -->
                </button>
              </div>
            </div>
          </div>
        </router-link>

        <router-link
          :to="`/course/${1}/javascript`"
          :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
          class="box rounded-3xl"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="p-5 flex gap-5">
            <img
              class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
              alt=""
            />
            <div class="flex flex-col justify-between gap-5 w-full">
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold">Javascript</h3>
                <span class="flex items-center gap-1 font-medium"
                  ><i class="bx bxs-user text-lg text-[#4ec3e0]"></i>100
                  o'quvchi
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span
                  class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]"
                  >20 000 so'm</span
                >
                <button @click="toggleModal(1)">
                  <i
                    :class="modal[1] ? 'bx bxs-bookmark' : 'bx bx-bookmark'"
                    class="text-3xl"
                  ></i>
                  <!-- <i class='bx bxs-bookmark' ></i> -->
                </button>
              </div>
            </div>
          </div>
        </router-link>

        <router-link
          :to="`/course/${1}/javascript`"
          :id="active == 'frontend' || active == 'barchasi' ? '' : 'hidden'"
          class="box rounded-3xl"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="p-5 flex gap-5">
            <img
              class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGUUWRbIn8130p33QdtMYw6heRWTQI0xFxQ&usqp=CAU"
              alt=""
            />
            <div class="flex flex-col justify-between gap-5 w-full">
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold">Tailwind CSS</h3>
                <span class="flex items-center gap-1 font-medium"
                  ><i class="bx bxs-user text-lg text-[#4ec3e0]"></i>100
                  o'quvchi
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span
                  class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]"
                  >20 000 so'm</span
                >
                <button @click="toggleModal(2)">
                  <i
                    :class="modal[2] ? 'bx bxs-bookmark' : 'bx bx-bookmark'"
                    class="text-3xl"
                  ></i>
                  <!-- <i class='bx bxs-bookmark' ></i> -->
                </button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-5">
      <div class="sm:pt-28 pt-20 sm:pb-28 pb-20 relative z-10">
        <div
          class="bg-[#4ec3e0] px-5 sm:py-20 py-10 rounded-3xl flex items-center justify-center"
        >
          <div
            class="flex lg:flex-row flex-col lg:items-center gap-5 justify-between w-full sm:px-20"
            :class="{
              ' text-white': navbar.userNav,
              ' text-[#12111F]': !navbar.userNav,
            }"
          >
            <div class="flex flex-col lg:gap-10 gap-5">
              <h1
                class="hero-title 2xl:text-6xl lg:text-7xl sm:text-6xl text-2xl font-bold"
                :class="{
                  ' text-[#12111F]': navbar.userNav,
                  ' text-white': !navbar.userNav,
                }"
              >
                Darsni sotib olmoqchimisiz?
              </h1>
              <p class="sm:text-base text-xs">
                Darsni sotib olish uchun ro'yxatdan o'ting va
                <span
                  :class="{
                    ' text-[#12111F]': navbar.userNav,
                    ' text-white': !navbar.userNav,
                  }"
                >
                  "Sotib olish"
                </span>
                tugmasini bosing. <br />
                <span
                  :class="{
                    ' text-[#12111F]': navbar.userNav,
                    ' text-white': !navbar.userNav,
                  }"
                >
                  "Sotib olish"
                </span>
                tugmasi sizni telegram adminga yo'laydi va qolganini admin sizga
                tushuntirib beradi.
              </p>
            </div>
            <button
              class="rounded-full w-40 bg-white text-lg font-medium text-[#12111F] py-2 px-7 border border-white hover:border-[#12111F] hover:text-white hover:bg-[#12111F]"
            >
              <a href="https://t.me/davlat_jurayev" target="_blank"
                >Sotib olish</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useNavStore } from "../../stores/toggle";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// const modal = ref(false);
// const openModal = () => (modal.value = !modal.value);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let modal = ref([]);
    for (let i = 0; i < 10; i++) {
      modal.value.push(false);
    }
    const toggleModal = (id) => {
      if (modal.value.length - 1 >= id) {
        modal.value[id] = !modal.value[id];
        console.log(modal);
      }
      console.log(modal.value.length);
    };

    const store = reactive({
      id: false,
      name: false,
    });
    const swiper = useSwiper();
    const navbar = useNavStore();
    const router = useRouter();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const frontend = () => {
      localStorage.setItem("active", "frontend");
      router.push("/courses");
    };

    const backend = () => {
      localStorage.setItem("active", "backend");
      router.push("/courses");
    };

    onMounted(() => {
      store.name = router.currentRoute.value.params.name.split("_").join(" ");
      store.id = router.currentRoute.value.params.id;
      // console.log(store.name);
      // console.log(store.id);
    });

    return {
      onSwiper,
      onSlideChange,
      navbar,
      frontend,
      backend,
      router,
      store,
      toggleModal,
      modal,
      swiper,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

.hero-title {
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
}
</style>
