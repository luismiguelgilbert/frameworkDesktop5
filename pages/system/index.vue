<script setup lang="ts">
  const modulesList = [
    { id: 0, icon: 'fas fa-users', route: '/system/users', label: 'USUARIOS', comments: 'Administación de Usuarios' },
    { id: 1, icon: 'fas fa-cog', route: '/system/roles', label: 'ROLES', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-database', route: '/system/companies', label: 'COMPAÑÍAS', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/system/links',label: 'MÓDULOS', comments: 'Administación de Usuarios' },
  ]
</script>
<template>
  <ModuleMenu
    module-title="System"
    :modules-list="modulesList"
    />
</template>