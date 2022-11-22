<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftSideBar = ref(true);
const toggleLeftSideBar = () => { leftSideBar.value = !leftSideBar.value };
const logOut = async() => { await navigateTo('/login') };

</script>
