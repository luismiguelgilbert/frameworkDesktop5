<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { user, isLoggedIn } = useAuth();
const { smAndUp } = useDisplay()
const selectedCompany = ref(0);

</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="white"
        class="font-weight-black ml-1"
        v-bind="props">
        {{`Compañía ${selectedCompany + 1}`}}
        <span class="ml-1">
          <v-icon light>fas fa-caret-down</v-icon>
        </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in 6"
        :key="index"
        :value="index"
        @click="(selectedCompany = index)" >
        <v-list-item-title>{{`Compañía ${index + 1}`}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
.v-btn {
  font-weight: bolder;
  text-transform:none !important;
}
</style>