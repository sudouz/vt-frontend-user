<template>
    <section class="relative z-10 lg:pt-60 pt-40"
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

    <section class="relative z-10 lg:mt-40 sm:mt-20 mt-10 sm:pb-20 pb-10"
        :class="{ ' text-white': navbar.userNav, ' text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <div class="wrapper">
                <h1 class="font-bold sm:text-3xl text-2xl mb-5">Ko'p so'raladigan savollar</h1>
                <div class="grid lg:grid-cols-2 gap-5" id="accordion-collapse" data-accordion="collapse">
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(0)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[0]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[0] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(1)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[1]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[1] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(2)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[2]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[2] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(3)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[3]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[3] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(4)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[4]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[4] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(5)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[5]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[5] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(6)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[6]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[6] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(7)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[7]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[7] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(8)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[8]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[8] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box rounded-3xl flex flex-col gap-3"
                        :class="{ 'bg-[#12111F]': navbar.userNav, 'bg-white': !navbar.userNav }">
                        <h2 id="accordion-collapse-heading-1">
                            <button @click="toggleModal(9)" type="button"
                                class="flex items-center gap-5 justify-between w-full text-left rounded-3xl py-5 px-5"
                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                aria-controls="accordion-collapse-body-1">
                                <span class="sm:text-base text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Commodi voluptatum optio, totam
                                    tenetur impedit eius exercitationem error
                                </span>
                                <i :class="modal[9]
                                    ? 'bx bx-minus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    : 'bx bx-plus bg-[#4ec3e0] text-white p-2 text-[30px] rounded-full'
                                    "></i>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="modal[9] ? '' : 'hidden'"
                            aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border-t rounded-b-3xl border-[#4ec3e0]">
                                <p class="sm:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim sed totam dolore
                                    placeat quas ratione. Nemo est modi velit laborum quae dolor rem aperiam? Nemo natus
                                    libero
                                    quidem porro!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useNavStore } from "../../stores/toggle";
import { ref } from "vue";
const navbar = useNavStore();
let modal = ref([false]);
const toggleModal = (id) => {
    if(modal.value.length-1 >= id){
        modal.value[id] = !modal.value[id]
        console.log(modal);
    }
    else {
        modal.value.push(true)
    }
    console.log(modal.value.length);
}
</script>

<style lang="scss" scoped>
.box {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
}
</style>