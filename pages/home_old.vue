<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  });

  const client = useSupabaseClient()
  const user = useSupabaseUser()

  const modulesList = [
    { id: 1, icon: 'fas fa-building', label: 'Compañías', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-users', label: 'Usuarios', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-circle-user', label: 'Roles', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-bars', label: 'Módulos', comments: 'Administación de Módulos' },
  ]

  const openModule = (menuItem: any) => {
    console.log(menuItem);
    navigateTo('/register')
  }
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:my-4" style="width: 100%;">
    <h1>Good morning</h1>
    <hr />
    <HootGridLayout class="my-8">
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
                <v-icon :icon="menuItem.icon" size="4rem"></v-icon>
              </template>
              <v-list-item-title v-text="menuItem.label" class="text-h4 py-4 "></v-list-item-title>
              <v-list-item-subtitle v-text="menuItem.comments" class="text-h6 pb-4"></v-list-item-subtitle>
            </v-list-item>
          </template>
        </HootGridCard>
      </template>
    </HootGridLayout>
  </div>
</template>