<template>
  <div>
    <!--<QBtn color="primary" label="Hello" />-->
    <!--<Toolbar class="col-12" style="background-color: var(--surface-0);">
      <template #start>
        <Button
          class="p-button-rounded"
          icon="pi pi-bars"
          @click="toggleLeftSideBar"  />
          <Button
          class="p-button-rounded"
          icon="fas fa-bars"
          @click="toggleLeftSideBar"  />
      </template>
      <template #end>
        <InputText
          class="mr-2"/>
        <Menubar />
        <Button
          class="p-button-sm p-button-text p-button-plain"
          icon="pi pi-user"
          @click="logOut"  />
      </template>
    </Toolbar>
    -->

    <!--<Sidebar v-model:visible="leftSideBar" :baseZIndex="10000">
      <h3>Left Sidebar</h3>
      
      <NuxtLink to="https://nuxtjs.org">
        Nuxt website
      </NuxtLink>
    </Sidebar>-->
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-app-bar
        color="primary"
        prominent
      >
        <v-btn variant="text" icon="fas fa-bars" @click.stop="leftSideBar = !leftSideBar"></v-btn>

        <v-toolbar-title>My files{{leftSideBar}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="fas fa-bars"></v-btn>
        <v-btn variant="text" icon="fas fa-bars" @click.stop="leftSideBar = !leftSideBar"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="leftSideBar"
        bottom
        temporary
      >
        <!--<v-list
          :items="items"
        ></v-list>-->
      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>

    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const leftSideBar = ref(false);
const toggleLeftSideBar = () => { leftSideBar.value = !leftSideBar.value };
const logOut = async() => { await navigateTo('/login') };

</script>
