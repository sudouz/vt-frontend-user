<template>
  <section :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
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
            <span class="flex sm:flex-row flex-col items-center gap-1 justify-center text-sm">Shaxsiy kabinetingiz yo'qmi
              <router-link to="/register" class="text-[#4ec3e0] hover:underline">Ro'yxatdan o'tish</router-link></span>
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

<style lang="scss">
.area {
  width: 100%;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #4ec3e0;
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 50%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 60%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
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
  animation-duration: 11s;
}

.circles li:nth-child(11) {
  left: 65%;
  width: 40px;
  height: 50px;
  animation-delay: 0s;
  animation-duration: 21s;
}

.circles li:nth-child(12) {
  left: 75%;
  width: 50px;
  height: 50px;
  animation-delay: 0s;
  animation-duration: 31s;
}

.circles li:nth-child(13) {
  left: 35%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
  animation-duration: 21s;
}

.circles li:nth-child(14) {
  left: 5%;
  width: 90px;
  height: 90px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.circles li:nth-child(15) {
  right: 3%;
  width: 90px;
  height: 90px;
  animation-delay: 0s;
  animation-duration: 31s;
}

.circles li:nth-child(16) {
  right: 12%;
  width: 32px;
  height: 30px;
  animation-delay: 5s;
  animation-duration: 16s;
}

.circles li:nth-child(17) {
  right: 42%;
  width: 22px;
  height: 20px;
  animation-delay: 5s;
  animation-duration: 18s;
}

.circles li:nth-child(18) {
  right: 72%;
  width: 12px;
  height: 10px;
  animation-delay: 5s;
  animation-duration: 11s;
}

.circles li:nth-child(19) {
  right: 52%;
  width: 52px;
  height: 50px;
  animation-delay: 5s;
  animation-duration: 29s;
}

.circles li:nth-child(20) {
  right: 40%;
  width: 12px;
  height: 10px;
  animation-delay: 5s;
  animation-duration: 28s;
}

.circles li:nth-child(21) {
  right: 80%;
  width: 42px;
  height: 40px;
  animation-delay: 2s;
  animation-duration: 18s;
}

.circles li:nth-child(22) {
  right: 40%;
  width: 55px;
  height: 60px;
  animation-delay: 3s;
  animation-duration: 9s;
}

.circles li:nth-child(23) {
  right: 50%;
  width: 20px;
  height: 20px;
  animation-delay: 5s;
  animation-duration: 28s;
}

.circles li:nth-child(23) {
  right: 45%;
  width: 30px;
  height: 30px;
  animation-delay: 5s;
  animation-duration: 13s;
}

.circles li:nth-child(24) {
  right: 60%;
  width: 40px;
  height: 40px;
  animation-delay: 10s;
  animation-duration: 10s;
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
  animation-duration: 12s;
}


@keyframes animate {

  0% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 0;
  }

  100% {
    transform: translateY() rotate(0deg);
    opacity: 1;
    border-radius: 50%;
  }

}
</style>
