<script setup lang="ts">
  import { MenuItemInterface } from '@/typings/SystemInterfaces'

  const router = useRouter();
  const { signOut, user, isLoggedIn } = useAuth();

  const leftSideBar = ref(true);
  const isLoading = ref(false);


  const showAppHeader = computed(() => {
    return !router.currentRoute.value.fullPath.startsWith('/login')
  })

  const openMenu = (menuItem: MenuItemInterface) => {
    return navigateTo(menuItem.route)
  }

  const logout = async () => {
    isLoading.value = true;
    await signOut();
    isLoading.value = false;
    return navigateTo('/login')
  }

  const modulesList = [
    { id: 0, icon: 'fas fa-home', route: '/home', label: 'INICIO', comments: 'Administación de Compañías' },
    { id: 1, icon: 'fas fa-cog', route: '/system', label: 'SISTEMA', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-database', route: '/catalogs', label: 'CATÁLOGOS', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'BITÁCORA DIGITAL', comments: 'Administación de Usuarios' },
    { id: 4, icon: 'fas fa-fish', route: '/ens', label: 'ENS', comments: 'pendiente' },
  ]

</script>

<template>
  <v-layout ref="app" style="z-index: 0">
    <v-app-bar
      v-if="showAppHeader"
      style="color: #201c54;"
      prominent
      elevation="5">
      <v-btn variant="text" icon="fas fa-bars" class="bitt-toolbar" @click.stop="leftSideBar = !leftSideBar"></v-btn>
      <h2 class="pl-2 d-none d-sm-flex">Framework</h2>
      <v-spacer></v-spacer>
      <div class="d-inline-flex align-center">
        <h5>{{user?.email}}</h5>
        <v-avatar style="color: #201c54;">
          <v-icon>fas fa-user-circle</v-icon>
        </v-avatar>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-if="showAppHeader"
      v-model="leftSideBar"
      expand-on-hover
      permanent
      left
      rail
      color="primary"        
      >
      <v-list>
        <v-list-item
          v-for="menuItem in modulesList"
          :key="menuItem.id"
          :value="menuItem.id"
          @click="openMenu(menuItem)">
          <template v-slot:prepend>
            <v-avatar>
              <v-icon color="white">{{menuItem.icon}}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>{{menuItem.label}}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
        <v-list-item
          @click="logout">
          <template v-slot:prepend>
            <v-avatar>
              <v-icon color="white">fas fa-door-open</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>Salir</v-list-item-title>
        </v-list-item>
      </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <NuxtPage />
    </v-main>
    <v-overlay 
      v-model="isLoading"
      class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        :width="15"
        color="primary" />
    </v-overlay>
  </v-layout>
</template>