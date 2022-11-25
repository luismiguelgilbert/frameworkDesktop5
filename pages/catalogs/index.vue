<script setup lang="ts">
  const modulesList = [
    { id: 0, icon: 'fas fa-home', route: '/home', label: 'SOCIOS', comments: 'Administación de Compañías' },
    { id: 1, icon: 'fas fa-cog', route: '/system', label: 'ITEMS', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-database', route: '/catalogs', label: 'BODEGAS', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'UNIDADES', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'MARCAS', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/bitacora',label: 'CLASIFICACIONES', comments: 'Administación de Usuarios' },
  ]
</script>
<template>
  <ModuleMenu
    module-title="Catálogos"
    :modules-list="modulesList"
    />
</template>