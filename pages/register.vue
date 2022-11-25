<template>
  <div class="text-center">
    <v-card
      class="mx-auto my-8"
      max-width="90%" width="400"
      elevation="5">
      <v-toolbar
        :elevation="5"
        class="bg-primary">
        <v-btn icon="fas fa-circle-user"></v-btn>
        <v-toolbar-title>Bienvenido</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
        <form
          class="mx-auto pa-8">
          <v-text-field
            v-model="email"
            autofocus
            clearable
            clear-icon="fas fa-circle-xmark"
            color="primary"
            hide-details="auto"
            label="Correo Electrónico"
            prepend-inner-icon="fas fa-user" />
          <v-text-field
            class="pt-8"
            v-model="password"
            clearable
            clear-icon="fas fa-circle-xmark"
            color="primary"
            :type="pwdTextFieldType"
            hide-details="auto"
            label="Contraseña"
            prepend-inner-icon="fas fa-key" />
            <v-checkbox
              v-model="isPasswordVisible"
              color="primary"
              label="Mostrar contraseña" />
          <v-btn
            color="primary"
            rounded="md"
            block
            :disabled="isLoginDisabled"
            size="x-large"
            append-icon="fas fa-circle-right"
            @click="signUp">Registrarse</v-btn>
        </form>
    </v-card>
    <v-overlay 
      v-model="isLoading"
      class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        :width="15"
        color="primary" />
    </v-overlay>
    <v-snackbar
      v-model="showingError"
      :timeout="5000"
      close-on-back
      rounded
      color="red">
      <v-icon>fas fa-circle-exclamation</v-icon>
      {{errorMessage}}
    </v-snackbar>
  
  </div>
  </template>
  
  <script setup lang="ts">
  // import { fa } from 'vuetify/lib/iconsets/fa';
  const supabaseClient = useSupabaseClient();
  const user = useSupabaseUser();
  
  const email = ref('luismiguelgilbert@gmail.com');
  const password = ref('mypassword.2020');
  const isPasswordVisible = ref(false);
  const isLoading = ref(false);
  const showingError = ref(false);
  const errorMessage = ref('');
  const pwdTextFieldType = computed(() => { return !isPasswordVisible.value ? 'password' : undefined });
  const isLoginDisabled = computed(() => { return !(email.value && password.value) });
  
  const signUp = async () => {
    try{
      isLoading.value = true;
      const { error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: password.value,
        //phone: ''
        /*options: {
          captchaToken
        }*/
      })
      if(error){
        showingError.value = true;
        errorMessage.value = error.message;
      }
      isLoading.value = false;
    } catch(err) {
      isLoading.value = false;
      showingError.value = true;
      errorMessage.value = 'Error inesperado. Póngase en contacto con soporte técnico.';
      console.error(err);
    }
  }
  
  </script>
  
  <style scoped>
  .v-btn {
    text-transform: none;
  }
  </style>