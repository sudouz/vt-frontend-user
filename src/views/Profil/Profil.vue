<template>
  <section
    class="bg-[#4ec3e0] 2xl:pt-40 pt-40 relative z-10 pb-10"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div
        :class="
          modal
            ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-[100vh]'
            : 'hidden'
        "
      >
        <div
          class="relative sm:max-w-5xl sm:min-w-[50%] w-full px-5 sm:mt-0 sm:mb-0 mt-96 mb-10 h-auto"
        >
          <!-- Modal content -->
          <div
            class="box relative p-4 rounded-3xl shadow sm:p-5"
            :class="navbar.userNav ? 'bg-[#12111F]' : 'bg-white'"
          >
            <!-- Modal header -->
            <div
              class="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-[#4ec3e0] sm:mb-5"
            >
              <h3
                class="sm:text-2xl text-lg font-bold"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                Ma'lumotlarni o'zgartirish
              </h3>
              <button
                @click="toggleModal"
                type="button"
                class="bg-transparent hover:bg-[#4ec3e0] hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                :class="navbar.userNav ? 'text-white' : 'text-black'"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <form>
              <div class="grid font-medium gap-4 mb-4">
                <div>
                  <label
                    :class="navbar.userNav ? 'text-white' : 'text-black'"
                    for="login"
                    class="block mb-2 text-sm"
                    >Rasm</label
                  >
                  <input
                    :class="navbar.userNav ? 'text-white' : 'text-black'"
                    accept="image/jpg, image/jpeg, image/png"
                    type="file"
                    name="login"
                    id="login"
                    class="text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                    placeholder="Rasm"
                    @change="(e) => setImg(e)"
                  />
                </div>
                <div class="flex sm:flex-row flex-col items-center gap-5">
                  <div class="w-full">
                    <label
                      :class="navbar.userNav ? 'text-white' : 'text-black'"
                      for="name"
                      class="block mb-2 text-sm"
                      >To'liq ismi (I . F . O)</label
                    >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="bg-transparent border border-[#4ec3e0] text-sm rounded-3xl outline-none w-full p-4"
                      placeholder="To'liq ismini kiriting"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      :class="navbar.userNav ? 'text-white' : 'text-black'"
                      for="email"
                      class="block mb-2 text-sm"
                      >Email</label
                    >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-transparent border border-[#4ec3e0] text-sm rounded-3xl outline-none w-full p-4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="flex sm:flex-row flex-col items-center gap-5">
                  <div class="w-full">
                    <label
                      :class="navbar.userNav ? 'text-white' : 'text-black'"
                      for="password"
                      class="block mb-2 text-sm"
                      >Eski parol</label
                    >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="bg-transparent border border-[#4ec3e0] text-sm rounded-3xl outline-none w-full p-4"
                      placeholder="Eski parolni kiriting"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      :class="navbar.userNav ? 'text-white' : 'text-black'"
                      for="newpas"
                      class="block mb-2 text-sm"
                      >Yangi parol</label
                    >
                    <input
                      type="password"
                      name="newpas"
                      id="newpas"
                      class="bg-transparent border border-[#4ec3e0] text-sm rounded-3xl outline-none w-full p-4"
                      placeholder="Yangi parolni kiriting"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      :class="navbar.userNav ? 'text-white' : 'text-black'"
                      for="confirmnewpas"
                      class="block mb-2 text-sm"
                      >Tekshiruv yangi parol</label
                    >
                    <input
                      type="password"
                      name="confirmnewpas"
                      id="confirmnewpas"
                      class="bg-transparent border border-[#4ec3e0] text-sm rounded-3xl outline-none w-full p-4"
                      placeholder="Yangi parolni qayta kiriting"
                    />
                  </div>
                </div>
              </div>
              <div
                class="w-full flex items-center justify-between border-t border-[#4ec3e0] pt-5 mt-5"
              >
                <button
                  type="button"
                  @click="toggleModal"
                  class="border cursor-pointer inline-flex items-center text-red-700 hover:bg-red-700 border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  class="btnAdd cursor-pointer inline-flex items-center border border-[#4ec3e0] text-[#4ec3e0] hover:bg-[#4ec3e0] hover:text-white font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                >
                  O'zgartirish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="box-2 flex sm:flex-row flex-col sm:gap-0 gap-5 sm:items-center justify-between rounded-3xl w-full p-5"
      >
        <div class="flex items-center gap-5">
          <img class="sm:w-20 sm:h-20 w-14 h-14" src="/user.png" alt="" />
          <div class="flex flex-col gap-1">
            <h2
              class="sm:text-3xl text-base font-bold"
              :class="{
                ' text-[#12111F]': navbar.userNav,
                ' text-white': !navbar.userNav,
              }"
            >
              John Doe
            </h2>
            <a
              :class="{
                ' hover:text-[#12111F]': navbar.userNav,
                ' hover:text-white': !navbar.userNav,
              }"
              class="flex items-center gap-1 sm:text-sm text-xs font-medium hover:underline cursor-pointer"
            >
              johndoe@gmail.com
            </a>
          </div>
        </div>
        <div class="flex items-center gap-5 justify-end">
          <button
            @click="toggleModal"
            class="sm:flex hidden items-center gap-1 border px-7 py-3 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
          >
            <i class="bx bxs-edit-alt text-xl"></i>
            O'zgartirish
          </button>
          <button
            class="sm:flex hidden items-center gap-1 border px-7 py-3 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
          >
            <i class="bx bx-log-out text-xl"></i>
            Chiqich
          </button>
          <button
            @click="toggleModal"
            class="sm:hidden flex items-center gap-1 border px-3 py-1 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
          >
            <i class="bx bxs-edit-alt text-xl"></i>
          </button>
          <button
            class="sm:hidden flex items-center gap-1 border px-3 py-1 text-base rounded-full border-[#12111F] text-[#12111F] hover:bg-[#12111F] hover:text-white"
          >
            <i class="bx bx-log-out text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
    
  <section>
    <div class="container mx-auto px-5">
      <div
        class="pt-10"
        :class="{
          ' text-white': navbar.userNav,
          ' text-[#12111F]': !navbar.userNav,
        }"
      >
        <h2 class="sm:text-3xl text-2xl font-bold mb-10">
          Sotib olgan darslaringiz
        </h2>
        <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 mt-5 w-full">
          <router-link
          :to="`/profile/open-course/${1}/javascript`"
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
                <div class="flex items-center justify-end">
                  <span
                    class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]"
                    >To'langan</span
                  >
                </div>
              </div>
            </div>
          </router-link>

          <router-link
          :to="`/profile/open-course/${1}/javascript`"
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
                <div class="flex items-center justify-end">
                  <span
                    class="flex items-center gap-1 font-bold text-2xl text-[#4ec3e0]"
                    >To'langan</span
                  >
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
import { ref } from "vue";
const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
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
