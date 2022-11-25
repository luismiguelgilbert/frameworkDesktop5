<script setup lang="ts">
import { MenuItemInterface } from '@/typings/SystemInterfaces'
const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();

const leftSideBar = ref(true);
const isLoading = ref(false);

const openMenu = (menuItem: MenuItemInterface) => {
  navigateTo(menuItem.route)
}

const logout = async () => {
  isLoading.value = true;
  await client.auth.signOut()
  router.push('/')
  window.location.href = '/';//required because of a bug?
  isLoading.value = false;
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
  <div v-if="user?.id">
    
      <v-app-bar
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
        <!--<template v-slot:prepend>
          <div>Search here</div>
        </template>-->
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
  </div>
</template>

<style scoped>
.bitt-toolbar {
  font-family: 'Calibri';
  font-weight: 100;
}
</style>