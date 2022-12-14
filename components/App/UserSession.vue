<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { user, isLoggedIn } = useAuth();
const { smAndUp } = useDisplay()

</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        :class="smAndUp ? '' : 'v-btn--icon'"
        variant="text"
        v-bind="props">
        <div class="d-none d-sm-block">{{user?.email}}</div>
        <v-avatar style="color: #201c54;">
          <v-icon>fas fa-user-circle</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-subheader>Datos del Usuario</v-list-subheader>
      <!--<v-list-item value="1">
        {{user?.app_metadata}}
      </v-list-item>-->
      <v-list-item value="2">
        <v-list-item-title>{{ user?.confirmation_sent_at }}</v-list-item-title>
        <v-list-item-subtitle>
          Fecha de creación
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item value="3">
        <v-list-item-title>{{ user?.last_sign_in_at }}</v-list-item-title>
        <v-list-item-subtitle>
          Último ingreso
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item value="4">
        <v-list-item-title>{{ user?.role }}</v-list-item-title>
        <v-list-item-subtitle>
          Rol del Usuario
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item value="5">
        <v-list-item-title>{{ user?.id }}</v-list-item-title>
        <v-list-item-subtitle>
          ID del Usuario
        </v-list-item-subtitle>
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