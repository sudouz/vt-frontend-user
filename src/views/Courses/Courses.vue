<template>
  <nav
    class="relative z-10 pt-40 bg-[#4ec3e0] pb-20"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div class="flex flex-col gap-12">
        <div
          class="flex sm:flex-row flex-col sm:items-center gap-5 justify-between"
        >
          <h2
            class="sm:text-4xl text-2xl font-bold"
            :class="{
              ' text-[#12111F]': navbar.userNav,
              ' text-white': !navbar.userNav,
            }"
          >
            Barcha o‘quv kurslari
          </h2>
          <input
            :class="{
              ' border-white placeholder-white': navbar.userNav,
              ' border-[#12111F] placeholder-[#12111F]': !navbar.userNav,
            }"
            class="sm:w-96 px-5 py-3 rounded-full bg-[#4ec3e0] outline-none border"
            type="search"
            placeholder="Izlash"
          />
        </div>
        <div class="flex flex-wrap items-center gap-5">
          <button
            @click="active = 'barchasi'"
            :id="active == 'barchasi' ? 'active' : ''"
            :class="{
              'border-white hover:border-[#12111F] hover:text-[#12111F]':
                navbar.userNav,
              'border-[#12111F] hover:border-white hover:text-white':
                !navbar.userNav,
            }"
            class="border px-7 py-3 rounded-full"
          >
            Barchasi
          </button>
          <button
            @click="active = 'frontend'"
            :id="active == 'frontend' ? 'active' : ''"
            :class="{
              'border-white hover:border-[#12111F] hover:text-[#12111F]':
                navbar.userNav,
              'border-[#12111F] hover:border-white hover:text-white':
                !navbar.userNav,
            }"
            class="border px-7 py-3 rounded-full"
          >
            Frontend
          </button>
          <button
            @click="active = 'backend'"
            :id="active == 'backend' ? 'active' : ''"
            :class="{
              'border-white hover:border-[#12111F] hover:text-[#12111F]':
                navbar.userNav,
              'border-[#12111F] hover:border-white hover:text-white':
                !navbar.userNav,
            }"
            class="border px-7 py-3 rounded-full"
          >
            Backend
          </button>
        </div>
      </div>
    </div>
  </nav>

  <section
    class="relative z-10 sm:pt-20 pt-10 sm:pb-20 pb-10"
    :class="{
      ' text-white': navbar.userNav,
      ' text-[#12111F]': !navbar.userNav,
    }"
  >
    <div class="container mx-auto px-5">
      <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
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

        <router-link
          :to="`/course/${1}/javascript`"
          :id="active == 'backend' || active == 'barchasi' ? '' : 'hidden'"
          class="box rounded-3xl"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="p-5 flex gap-5">
            <img
              class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
              src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between gap-5 w-full">
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold">NodeJs</h3>
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
                <button @click="toggleModal(3)">
                  <i
                    :class="modal[3] ? 'bx bxs-bookmark' : 'bx bx-bookmark'"
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
          :id="active == 'backend' || active == 'barchasi' ? '' : 'hidden'"
          class="box rounded-3xl"
          :class="{
            'bg-[#12111F]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="p-5 flex gap-5">
            <img
              class="sm:w-40 sm:h-40 w-20 h-20 rounded-3xl"
              src="https://miro.medium.com/v2/resize:fit:1358/0*1VyCqSN0pdtXitey.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between gap-5 w-full">
              <div class="flex flex-col gap-2">
                <h3 class="text-2xl font-bold">NestJs</h3>
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
                <button @click="toggleModal(5)">
                  <i
                    :class="modal[5] ? 'bx bxs-bookmark' : 'bx bx-bookmark'"
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
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
import { ref, reactive, onMounted } from "vue";
const navbar = useNavStore();
const active = ref("barchasi");

const lamp = localStorage.getItem("active");

if (lamp) {
  active.value = lamp;
}

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
</script>

<style lang="scss" scoped>
#active {
  background-color: #12111f;
  border: 1px solid #12111f;
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
