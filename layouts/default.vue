<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useSystemStore } from '@/stores/system'
import { MenuOption } from '@/typings/System'

const client = useSupabaseAuthClient() //useSupabaseClient()
const user = await useSupabaseUser()
const theme = useTheme()
const systemStore = useSystemStore();

const supabaseJWT = useCookie('sb-access-token')

const { data, pending, error, refresh } = await useAsyncData(
  'menuOptions',
  () => $fetch('/api/system', { headers: { Cookie: `sb-access-token=${supabaseJWT.value}` }})
)
const menuOptions = (data as unknown as MenuOption[]);
systemStore.setMenuOptions(menuOptions)
const rootMenuOptions = computed(() => {
  return systemStore.menuOptions?.filter(x => x.parent === null);
}) 

const userLogout = async () => {
  await client.auth.signOut()
}

const drawer = ref(true)
const isDarkEnabled = ref(theme.global.current.value.dark);
const darkBgColor = computed(() => {
  return isDarkEnabled.value ? 'bg-grey-darken-3' : 'bg-blue-grey-lighten-5'
}) 
const changeTheme = () => {
  console.log('changeTheme in default layout');
  isDarkEnabled.value = !isDarkEnabled.value
  theme.global.name.value = theme.global.current.value.dark ? 'themeLight' : 'themeDark'
}

const isMobile = computed(() => {
  return useMediaQuery('(max-width: 1024px)');
}) 

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/login')
  }
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <v-card>
    <v-app>
      
      <v-app-bar 
        v-if="isMobile.value"
        title="Framework">
        <v-btn
          size="small"
          flat
          :color="isDarkEnabled ? 'grey-darken-3' : 'grey-darken-1'"
          icon="fas fa-bars"
          @click="drawer = !drawer">
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        :permanent="!isMobile.value"
        floating
        v-model="drawer">

        <v-card
          flat
          class="mx-auto"
          width="400">
          <template v-slot:title>
            <div class="d-flex flex-row align-center">
              <v-btn
                size="small"
                flat
                :color="isDarkEnabled ? 'grey-darken-3' : 'grey-darken-1'"
                icon="fas fa-user"
                to="/security/user"
                ></v-btn>
              <div
                class="pl-2 text-h6 font-weight-black"
                :class="!isDarkEnabled ? 'text-grey-darken-3' : ''">Framework</div>
            </div>
          </template>
          
        </v-card>

        <!--<v-text-field
          class="ma-2"
          density="compact"
          variant="solo"
          label="Buscar..."
          append-inner-icon="fas fa-search"
          single-line
          hide-details>
        </v-text-field>-->

      
        <v-list
          class="overflow-y-auto"
          :height="`calc(100vh - ${isMobile.value ? 176 : 112}px)`">

          <v-list-item
            active-color="primary"
            to="/"
            variant="plain">
            <template v-slot:prepend>
              <v-icon class="mr-3" size="small" icon="fas fa-home"></v-icon>
            </template>
            <v-list-item-title class="font-weight-black" v-text="'Inicio'"></v-list-item-title>
            <v-tooltip
              activator="parent"
              location="end">
              Inicio
            </v-tooltip>
          </v-list-item>
          <v-divider></v-divider>

          <div
            v-for="item, index in rootMenuOptions">
            <v-list-subheader class="font-weight-black">{{ item.name_es }}</v-list-subheader>
              <v-list-item
                v-for="(subItem, i) in systemStore.menuOptions?.filter(x => x.parent === item.id)"
                :key="`${subItem}-${i}`"
                :value="`${subItem}-${i}`"
                active-color="primary"
                :to="subItem.link"
                variant="plain">
                <template v-slot:prepend>
                  <v-icon class="mr-3" size="small" :icon="subItem.icon"></v-icon>
                </template>
                <v-list-item-title class="text-subtitle-2"  v-text="`${subItem.name_es}`"></v-list-item-title>
                <v-tooltip
                  activator="parent"
                  location="end">
                  {{ item.name_es }} - {{ subItem.name_es }}
                </v-tooltip>
              </v-list-item>
              <v-divider v-if="rootMenuOptions && (index + 1) < rootMenuOptions?.length" class="my-3"></v-divider>
          </div>
          <br/>
        </v-list>

        <v-btn
          block
          color="primary"
          rounded="0"
          size="x-large"
          prepend-icon="fas fa-door-open"
          @click="userLogout">
          Cerrar Sesión
        </v-btn>
      </v-navigation-drawer>

      

      <v-main
        class="p-5"
        :class="darkBgColor"
        style="height: calc(100vh); overflow-y: scroll;">
        <div class="pa-10">
          <NuxtPage
            @changetheme="changeTheme" />
        </div>
      </v-main>

    </v-app>
  </v-card>
</template>

<style scoped>
</style>