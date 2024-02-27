<template>
  <section
    :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
      <div class="z-10 w-full bg-transparent border border-[#4ec3e0] rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div class="flex flex-col items-center gap-3">
            <img class="md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full"
              :src="navbar.userNav ? '/logo-black.jpg' : 'logo-white.jpg'" alt="">
            <h1 class="text-[20px] uppercase font-bold leading-tight tracking-tight md:text-[24px]">
              Shaxsiy kabinetga kirish
            </h1>
          </div>
          <form class="space-y-4 md:space-y-6" @submit.prevent="useLogin" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium ">Elektron manzilingizni kiriting</label>
              <input v-model="user.email" type="email" name="email" id="email"
                class="border text-sm rounded-lg outline-none block w-full p-2.5 bg-transparent border-[#4ec3e0]  placeholder-gray-400 "
                placeholder="name@company.com" required="" />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium">Parolingizni kiriting</label>
              <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••"
                class="border outline-none text-sm rounded-lg block w-full p-2.5 bg-transparent border-[#4ec3e0] placeholder-gray-400"
                required="" />
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-[#4ec3e0] hover:underline">Parolni unutdingizmi?</a>
            </div>
            <button type="submit"
              class="w-full bg-[#4ec3e0] text-white border border-[#4ec3e0] hover:bg-transparent hover:text-[#4ec3e0] focus:ring-4 focus:outline-none focus:ring-[#4ec3e0] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Kirish
            </button>
            <span class="flex sm:flex-row flex-col items-center gap-1 justify-center text-sm">Shaxsiy kabinetingiz yo'qmi <router-link to="/register" class="text-[#4ec3e0] hover:underline">Ro'yxatdan o'tish</router-link></span>
          </form>
        </div>
      </div>
    </div>
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
    </ul>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const useLogin = () => {
  const senUser = {
    email: user.email,
    password: user.password,
  };

  useAuth.login(senUser)
    .then((res) => {
      console.log(res);
      console.log();
      localStorage.setItem("token", res?.data?.tokens?.refresh_token);
      localStorage.setItem("role", res?.data?.admin?.role);
      localStorage.setItem("id", res?.data?.admin?.id);
      router.push({ name: "home" });
      toast.success("Dashboard successfully logged in");
    })
    .catch(() => {
      toast.error("error");
    });
};
</script>

<style lang="scss" scoped></style>
