<template>
    <footer class="w-full border-t border-[#4ec3e0]"
        :class="{ 'bg-[#12111F] text-white': navbar.userNav, 'bg-white text-[#12111F]': !navbar.userNav }">
        <div class="container mx-auto px-5">
            <nav class="py-5 flex md:flex-row flex-col md:items-center items-end justify-between">
                <div class="flex items-center gap-5 w-full">
                    <img class="w-[70px] h-[70px] rounded-full" :src="navbar.userNav ? '/logo-black.jpg' : 'logo-white.jpg'" alt="">
                    <ul class="flex items-center md:gap-10 gap-5 w-full md:justify-start justify-between">
                        <li class="font-medium md:text-[16px] text-sm hover:text-[#4ec3e0]">
                            <router-link to="/">Bosh sahifa</router-link>
                        </li>
                        <li class="font-medium md:text-[16px] text-sm hover:text-[#4ec3e0]">
                            <router-link to="/kurslar">Kurslar</router-link>
                        </li>
                        <li class="font-medium md:text-[16px] text-sm hover:text-[#4ec3e0]">
                            <router-link to="/boglanich">Bog'lanish</router-link>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-5 text-[24px]">
                    <a target="_blank" href="!#" class="hover:text-[#0866FF]">
                        <svg class="facebok" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                        </svg>
                    </a>
                    <a target="_blank" href="!#" class="hover:text-[#DC455C]">
                        <svg class="insta" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
                                clip-rule="evenodd" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.217 46.217 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.421 44.421 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a target="_blank" href="!#" class="hover:text-[#0866FF]">
                        <svg class="link" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>
                    </a>
                    <a target="_blank" href="!#" class="hover:text-[#0866FF]">
                        <svg class="telegram" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38" />
                        </svg>
                    </a>
                    <a target="_blank" href="!#" class="hover:text-red-500">
                        <svg class="youtube" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script setup>
import { useNavStore } from "../stores/toggle";
const navbar = useNavStore();
</script>

<style lang="css" scoped>
.router-link-exact-active {
  color: #4ec3e0;
}

button,
li, a {
  transition: 0.5s;
}
</style>