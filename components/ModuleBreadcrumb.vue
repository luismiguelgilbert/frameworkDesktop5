<script setup lang="ts">
  import { MenuItemInterface } from '@/typings/SystemInterfaces'
  defineProps({
    moduleItems: { type: Array<MenuItemInterface>, required: true },
  })
</script>
<template>
  <div>
    <div class="d-inline-flex align-center"
      v-for="(item, index) in moduleItems">
      <v-btn
        variant="text"
        :prepend-icon="item.icon">
        {{item.label}}
      </v-btn>
      <div class="mr-1" v-if="index===0" >/</div>
    </div>
  </div>
</template>
<style scoped>
.v-btn {
  text-transform:none !important;
}
</style>