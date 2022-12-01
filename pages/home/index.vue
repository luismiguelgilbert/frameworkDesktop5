<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  });
  const supabaseClient = useSupabaseClient();
  const user = useSupabaseUser();
  const router = useRouter();
</script>
<template>
  <div class="px-4 sm:px-6 lg:px-8 lg:my-4" style="width: 100%;">
    <div class="d-inline-flex align-center">
      <v-btn prepend-icon="fas fa-home" variant="text" class="mr-1">Bienvenido {{user?.email}}</v-btn>
    </div>
    <hr>
    {{user}}
  </div>
</template>
<style scoped>
.v-btn {
  text-transform:none !important;
}
</style>