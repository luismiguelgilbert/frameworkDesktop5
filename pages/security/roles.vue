<script setup lang="ts">

definePageMeta({
  layout: 'default'
})

const isMobile = computed(() => {
  return useMediaQuery('(max-width: 1024px)');
}) 

const headers = [
  {
    title: 'User ID',
    align: 'start',
    sortable: false,
    key: 'id',
  },
  { title: 'Usuario', align: 'center', key: 'firstName' },
  { title: 'Perfil', align: 'center', key: 'profile' },
  { title: 'Estado', align: 'center', key: 'is_active' },
  { title: 'Actions', align: 'end', key: 'actions' },
];

const items = Array.from({ length: 1000 }, (k, v) => {
  return {
    id: v + 1,
    login: (v + 1) % 2 == 0 ? 'luismiguelgilbert@gmail.com' : 'JohnDoe@gmailcom',
    firstName: 'John',
    lastName: 'Doe',
    profile: (v + 1) % 2 == 0 ? 'MASTER' : 'Usuario',
    is_active: (v + 1) % 2 == 0 ? true : false
  }
});

</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" lg="3" xl="2">
        <v-card
          :height="!isMobile.value?'calc(100vh - 30px)': 'auto'"
          class="mt-4 pa-2 elevation-5"
          title="Perfiles de Seguridad">
          <v-card
            flat link
            title="Todos los Perfiles"
            subtitle="32 perfiles">
            <template v-slot:prepend>
              <v-avatar color="primary">
                <v-icon icon="fas fa-user"></v-icon>
              </v-avatar>
            </template>
          </v-card>
          <v-card
            flat link
            title="Perfiles Activos"
            subtitle="28 perfiles">
            <template v-slot:prepend>
              <v-avatar color="green-accent-2">
                <v-icon color="white" icon="fas fa-check"></v-icon>
              </v-avatar>
            </template>
          </v-card>
          <v-card
            flat link
            title="Perfiles Inactivos"
            subtitle="28 perfiles">
            <template v-slot:prepend>
              <v-avatar color="red-accent-2">
                <v-icon color="white" icon="fas fa-times"></v-icon>
              </v-avatar>
            </template>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" lg="9" xl="10">
        <v-card
          class="mt-4 elevation-5">
          <template v-slot:title>
            <v-row>
              <v-col cols="3">
                <v-btn
                  block
                  color="primary"
                  size="large"
                  prepend-icon="fas fa-plus"
                  title="Nuevo Perfil">
                  {{ !isMobile.value ? 'Nuevo Perfil' : undefined }}
                </v-btn>
              </v-col>
              <v-col cols="6" offset="3">
                <v-text-field
                  class="pr-5"
                  label="Buscar"
                  placeholder="Buscar..."
                  append-inner-icon="fas fa-search"
                  hide-details
                  variant="underlined">
                </v-text-field>
              </v-col>
            </v-row>
          </template>
          <v-divider></v-divider>
          <v-data-table-virtual
            :headers="headers"
            fixed-header
            :items="items"
            height="calc(100vh - 100px)"
            item-value="name">
            <template v-slot:item="{ item }">
              <tr style="background-color: red;">
                <td>
                  <v-avatar color="primary">
                    {{ item.value.id }}
                  </v-avatar>
                </td>
                <td>
                  <v-list-item
                    :title="item.value.firstName + ' ' + item.value.lastName"
                    :subtitle="item.value.login">
                  </v-list-item></td>
                <td>{{ item.value.profile }}</td>
                <td>
                  <v-chip
                    class="ma-2"
                    :color="item.value.is_active?'green-accent-4':'red'"
                    label
                    text-color="white"
                  >
                    <v-icon
                      start
                      :icon="item.value.is_active?'fas fa-check':'fas fa-times'">
                    </v-icon>
                    {{ item.value.is_active?'Activo':'Inactivo' }}
                  </v-chip>
                </td>
                <td class="text-right">
                  <v-btn
                    variant="plain"
                    color="grey-darken-5"
                    icon="fas fa-edit"
                    title="Editar Usuario">
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table-virtual>
          
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform:none !important;
  font-weight: 700 !important;
}
tr{
  height: 70px !important;
}
</style>