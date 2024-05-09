<template>
  <section class="bg-[#4ec3e0]">
    <div class="container mx-auto px-5">
      <div class="pt-40 pb-10">
        <div
          class="box-2 px-5 py-10 rounded-3xl flex items-center justify-center"
        >
          <div
            class="flex sm:flex-row flex-col gap-5 items-center justify-between w-full lg:px-10"
            :class="{
              ' text-white': navbar.userNav,
              ' text-[#12111F]': !navbar.userNav,
            }"
          >
            <div
              class="flex flex-col items-center sm:items-start sm:gap-10 gap-5 text-center sm:text-start"
            >
              <h1 class="hero-title sm:text-4xl text-2xl font-bold">
                JavaScript <br />
                1 - dars Kirish!
              </h1>
            </div>
            <div class="flex items-center gap-5 justify-end">
              <button
                class="sm:flex hidden items-center border px-5 py-2 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
              >
                <i class="bx bx-chevron-left text-3xl"></i>
                Orqaga
              </button>
              <button
                class="sm:flex hidden items-center border px-5 py-2 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
              >
                Keyingisi
                <i class="bx bx-chevron-right text-3xl"></i>
              </button>
              <button
                class="sm:hidden flex items-center border px-3 py-2 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
              >
                <i class="bx bx-chevron-left text-3xl"></i>
              </button>
              <button
                class="sm:hidden flex items-center border px-3 py-2 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
              >
                <i class="bx bx-chevron-right text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-5">
      <div
        class="lg:pt-20 pt-10 lg:pb-20 pb-10"
        :class="{
          ' text-white': navbar.userNav,
          ' text-[#12111F]': !navbar.userNav,
        }"
      >
        <div class="flex lg:flex-row flex-col gap-10">
          <div class="flex flex-col gap-5">
            <iframe
              class="2xl:h-[750px] xl:h-[650px] w-full lg:h-[500px] sm:h-[400px] h-52"
              src="https://www.youtube.com/embed/PZUr2YyYmFY?si=5z_4aCguWiPe3dUH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
            <h2 class="sm:text-3xl text-2xl font-bold text-[#4ec3e0]">
              Yozma shakildagi darslik!
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
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-[#4ec3e0] lg:pt-40 pt-10 lg:pb-40 pb-10"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div
        class="box-2 relative rounded-3xl xl:px-20 lg:px-10 xl:py-28 lg:py-16"
      >
        <div class="hidden lg:flex flex-col gap-5 w-[40%]">
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
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
import { reactive, onMounted } from "vue";
const navbar = useNavStore();

const store = reactive({
  id: false,
  name: false,
});

onMounted(() => {
  store.name = router.currentRoute.value.params.name.split("_").join(" ");
  store.id = router.currentRoute.value.params.id;
  // console.log(store.name);
  // console.log(store.id);
});
</script>

<style lang="scss" scoped>
.box {
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
  box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}

.box-2 {
  -webkit-box-shadow: inset 0px 0px 10px 0px #12111f;
  -moz-box-shadow: inset 0px 0px 10px 0px #12111f;
  box-shadow: inset 0px 0px 10px 0px #12111f;
}
</style>
