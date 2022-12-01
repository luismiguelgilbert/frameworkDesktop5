<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  });
  const modulesList = [
    { id: 0, icon: 'fas fa-home', route: '/home', label: 'PUNTOS DE CONTROL', comments: 'Administación de Compañías' },
    { id: 1, icon: 'fas fa-cog', route: '/system', label: 'VEHÍCULOS', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-database', route: '/catalogs', label: 'VISITAS', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'BITÁCORA', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'VIAJES', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'RONDAS', comments: 'Administación de Usuarios' },
  ]
</script>
<template>
  <ModuleMenu
    module-title="Bitácora"
    module-icon="fas fa-shield-halved"
    :modules-list="modulesList"
    />
</template>