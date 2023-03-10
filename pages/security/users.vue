<script setup lang="ts">

definePageMeta({
  layout: 'default'
})

const isMobile = computed(() => {
  return useMediaQuery('(max-width: 1024px)');
}) 

const headers = [
  {
    title: '',
    align: 'start',
    sortable: false,
    key: 'select',
  },
  { title: 'Usuario', align: 'center', key: 'firstName' },
  { title: 'Perfil', align: 'center', key: 'profile' },
  { title: 'Estado', align: 'center', key: 'is_active' },
  { title: 'Opciones', align: 'end', key: 'actions' },
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

const tab = ref('1');

</script>

<template>
  <div>
    <v-row
      style="max-width: 1000px;"
      class="mx-auto mt-3">
      <v-col cols="4" class="pa-0">
        <!--<div class="text-h5 mb-2 font-weight-bold">Sistema > Usuarios</div>-->
        <v-btn
          :block="!isMobile.value"
          color="primary"
          size="x-large"
          height="56"
          :prepend-icon="!isMobile.value ? 'fas fa-plus' : undefined"
          title="Nuevo Usuario" >
          <template v-slot:default>
            <div v-if="!isMobile.value">Nuevo Usuario</div>
            <v-icon v-if="isMobile.value">fas fa-plus</v-icon>
          </template>
        </v-btn>
      </v-col>
      <v-col class="pa-0"
        :offset="!isMobile.value ? 1 : 0" 
        :cols="!isMobile.value ? 7 : 0">
        <v-text-field
          class="pt-0 pl-5 ma-0"
          placeholder="Buscar Usuario..."
          hide-details
          variant="solo"
          clearable
          clear-icon="fas fa-times-circle"
          append-inner-icon="fas fa-search" >
        </v-text-field>
      </v-col>
    </v-row>
    
    <v-card
      style="max-width: 1000px;"
      rounded="lg"
      class="mx-auto mt-8 elevation-5"
      :class="isMobile.value ? 'mt-8' : 'mt-4'">
      <v-tabs
        v-model="tab"
        color="primary">
          <v-tab :value="1">Activos</v-tab>
          <v-tab :value="2">Inactivos</v-tab>
          <v-tab :value="3">Todos</v-tab>
          <v-spacer></v-spacer>
          <v-btn
            height="49"
            rounded="0"
            variant="text"
            prepend-icon="fas fa-filter"
            title="Filtros" >
            <template v-slot:default>
              {{ !isMobile.value ? 'Nuevo Usuario' : undefined }}
            </template>
          </v-btn>
      </v-tabs>
      <v-divider></v-divider>
      <!--<div class="d-flex flex-row ma-4">-->
      <!--<v-row class="pa-4 bg-red">
        <v-col cols="2">
          <v-text-field
            class="pr-5"
            placeholder="Buscar..."
            single-line
            hide-details>
            <template v-slot:append-inner>
              <v-icon
                class="mt-1"
                icon="fas fa-search"
              />
            </template>
          </v-text-field>
        </v-col>
        <v-col class="py-0" cols="3" offset="3">
        </v-col>
        
        <v-sheet class="ma-2 pa-2">Flex item 1</v-sheet>
        <v-sheet class="ma-2 pa-2">Flex item 2</v-sheet>
        <v-menu
          class="ma-2 pa-2"
          location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              size="large"
              prepend-icon="fas fa-caret-down"
              v-bind="props"
              variant="text">
              Opciones
            </v-btn>
          </template>
  
          <v-list nav>
            <v-list-item
              nav
              v-for="(item, index) in 5"
              :key="index"
              @click="">
              <v-list-item-title>{{ index }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>-->
      
      <v-divider></v-divider>
      <v-data-table-virtual
        :headers="headers"
        :items="items"
        item-value="name"
        density="compact"
        :height="isMobile.value ? 'calc(100vh - 220px)' : 'calc(100vh - 150px)'">
        <template v-slot:column.firstName="{ column }" class="font-weight-bold ml-5">
          <div class="font-weight-black ml-6">
            {{ column.title.toUpperCase() }}
          </div>
        </template>
        <template v-slot:column.profile="{ column }">
          <div class="font-weight-black">
            {{ column.title.toUpperCase() }}
          </div>
        </template>
        <template v-slot:column.is_active="{ column }">
          <div class="font-weight-black">
            {{ column.title.toUpperCase() }}
          </div>
        </template>
        <template v-slot:column.actions="{ column }">
          <div class="font-weight-black">
            {{ column.title.toUpperCase() }}
          </div>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td style="max-width: 35px;">
              <v-checkbox
                color="primary"
                hide-details
                true-icon="fas fa-square-check"
                false-icon="far fa-square">
              </v-checkbox>
            </td>
            
            <td class="pl-2">
              <v-list-item
                class="text-no-wrap"
                style="min-width: 300px;"
                :title="item.value.firstName + ' ' + item.value.lastName">
                <template v-slot:prepend>
                  <v-avatar color="primary">
                    {{ item.value.id }}
                  </v-avatar>
                </template>
                <template v-slot:title >
                  <div class="text-no-wrap font-weight-bold">{{ item.value.firstName + ' ' + item.value.lastName }}</div>
                </template>
                <template v-slot:subtitle>
                  {{ item.value.login }}
                </template>
              </v-list-item>
            </td>
            <td class="font-weight-medium">{{ item.value.profile }}</td>
            <td>
              <v-list-item
                class="font-weight-black"
                :title="item.value.firstName + ' ' + item.value.lastName">
                <template v-slot:title>
                  <div class="font-weight-medium">
                  <v-icon
                    size="small"
                    :color="item.value.is_active?'success':'red'"
                    :icon="item.value.is_active?'fas fa-circle-check':'fas fa-circle-xmark'">
                  </v-icon>
                  {{ item.value.is_active?'Activo':'Inactivo' }}
                  </div>
                </template>
              </v-list-item>
              
            </td>
            <td class="text-right">
              <v-btn
                variant="text"
                color="primary"
                icon="fas fa-ellipsis-vertical"
                title="Editar Usuario">
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table-virtual>
      
    </v-card>
  </div>
  
</template>

<style scoped>
.v-btn {
  text-transform:none !important;
  font-weight: 700 !important;
}
/*tr{
  height: 80px !important;
}*/
th {
  background-color: #ebeff1 !important;
}
.v-text-field .v-input__control .v-input__slot {
  height: 22px !important;
  max-height: 22px !important;
}
/*#__nuxt > div > div.v-application.v-theme--themeLight.v-layout.v-layout--full-height.v-locale--is-ltr > div > main > div > div > div.v-card.v-theme--themeLight.v-card--density-default.rounded-lg.v-card--variant-elevated.mx-auto.mt-4.elevation-5 > div.v-table.v-table--fixed-height.v-table--fixed-header.v-theme--themeLight.v-table--density-default.v-data-table.table > div > table > thead > tr > th:nth-child(2)*/
/*.table{
  background-color: red !important;
}*/
</style>