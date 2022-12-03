<script setup lang="ts">
  definePageMeta({ middleware: 'auth' });
  const modulesList = [
    { id: 0, icon: 'fas fa-users', route: '/system/users', label: 'Usuarios', comments: 'Administación de Usuarios' },
    { id: 1, icon: 'fas fa-cog', route: '/system/roles', label: 'Roles', comments: 'Administación de Compañías' },
    { id: 2, icon: 'fas fa-database', route: '/system/companies', label: 'Compañías', comments: 'Administación de Usuarios' },
    { id: 3, icon: 'fas fa-shield-halved', route: '/system/links',label: 'Módulos', comments: 'Administación de Usuarios' },
  ]
</script>
<template>
  <ModuleMenu
    module-title="Sistema"
    module-icon="fas fa-cog"
    :modules-list="modulesList"
    />
</template>