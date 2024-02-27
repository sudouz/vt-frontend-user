import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('toggle', () => {
  const userNav = ref(true);
  const userInfo = ref(false);
  if (localStorage.getItem('darkMode') == 'false') {
    userNav.value = false;
  } else {
    userNav.value = true;
  }

  const setMode = () => {
    localStorage.setItem('darkMode', !userNav.value);
    userNav.value = !userNav.value;
  }

  return { userNav, setMode, userInfo };
})