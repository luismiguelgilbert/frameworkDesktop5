<script setup lang="ts">
  const supabaseClient = useSupabaseClient();
  const user = useSupabaseUser();
  const router = useRouter();
</script>
<template>
  <h1>Home</h1>
  <br>
  <br>
  <br>
  {{user}}
</template>