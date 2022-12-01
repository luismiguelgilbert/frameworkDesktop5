<script setup lang="ts">
  import { MenuItemInterface } from '@/typings/SystemInterfaces'

  definePageMeta({
    middleware: 'auth'
  });
  const moduleItems: Array<MenuItemInterface> =  [
    { id: 0, icon: 'fas fa-cog', route: '/system', label: 'Sistema', comments: '' },
    { id: 1, icon: 'fas fa-users', route: '/system/users', label: 'Usuarios', comments: '' },
  ]
</script>
<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:my-4" style="width: 100%;">
    <ModuleBreadcrumb
      :module-items="moduleItems"
      />
    <!--<div class="d-inline-flex align-center">
      <v-btn prepend-icon="fas fa-cog" variant="text" @click="navigateTo('/system')" class="mr-1">Sistema</v-btn>
      /
      <v-btn prepend-icon="fas fa-users" variant="text" class="mx-1">Usuarios</v-btn>
    </div>-->
    <hr />
    <div>
      <v-list>
        <v-list-item
          v-for="n in 50"
          :key="n"
          title="Pruebas"
          :value="n"
          >
          <template #subtitle="Pruebas">
            Contenido
          </template>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<style scoped>
.v-btn {
  text-transform:none !important;
}
</style>