<script setup lang="ts">
  import { MenuItemInterface } from '@/typings/SystemInterfaces'

  defineProps({
    moduleTitle: { type: String, required: true },
    moduleIcon: { type: String, required: true },
    modulesList: { type: Array<MenuItemInterface>, required: true }
  })

  const hover = ref(-1);
  
  const openModule = (menuItem: MenuItemInterface) => {
    return navigateTo(menuItem.route)
  }
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:my-4" style="width: 100%;">
    <div class="d-inline-flex align-center">
      <v-btn :prepend-icon="moduleIcon" variant="text" @click="navigateTo('/system')" class="mr-1">{{moduleTitle}}</v-btn>
    </div>
    <hr />
    <HootGridLayout class="my-4">
      <template #content="gridInfo">
        <HootGridCard
          v-for="menuItem in modulesList"
          :key="menuItem.id"
          class="hootcol-sm-12 hootcol-md-12 hootcol-lg-12 hootcol-xl-6"
          style="cursor: pointer;"
          @click="openModule(menuItem)">
          <template #content>
            <v-list-item
              :value="menuItem.id">
              <template v-slot:prepend>
                <v-icon :icon="menuItem.icon" size="4rem" color="primary"></v-icon>
              </template>
              <v-list-item-title v-text="menuItem.label" class="text-h4 py-4 font-weight-black"></v-list-item-title>
              <v-list-item-subtitle v-text="menuItem.comments" class="text-h6 pb-4"></v-list-item-subtitle>
            </v-list-item>
          </template>
        </HootGridCard>
      </template>
    </HootGridLayout>
  </div>
</template>
<style scoped>
.v-btn {
  text-transform:none !important;
}
.active {
  background: #d8d9fc;

  /* background: #f0f2f7;
  background: #6E6AF0;
  background: #3700B3;
  background: #03DAC6;
  background: #018786;
  background: #B00020;
  background: #2196F3;
  background: #4CAF50;
  background: #FB8C00;*/

}
</style>