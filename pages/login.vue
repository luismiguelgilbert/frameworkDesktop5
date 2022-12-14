<script setup lang="ts">
  import { useMediaQuery } from '@vueuse/core'
  const { signIn, isLoggedIn, user } = useAuth();
  
  const email = ref('luismiguelgilbert@gmail.com');
  const password = ref('mypassword.2020');
  const isPasswordVisible = ref(false);
  const isLoading = ref(false);
  const showingError = ref(false);
  const errorMessage = ref('');
  const pwdTextFieldType = computed(() => { return !isPasswordVisible.value ? 'password' : undefined });
  const isLoginDisabled = computed(() => { return !(email.value && password.value) });

  const checkMobile = useMediaQuery('screen and (max-width: 600px)')
  const checkTablet = useMediaQuery('screen and (min-width: 601px) and (max-width: 960px)')
  const checkDesktop = useMediaQuery('screen and (min-width: 961px)')
  const cardWidth = computed(() => {
    if(checkMobile.value){
      return { maxWidth: 'calc(90vw)', width: 'calc(200vw)', marginTop: 'my-4' }
    }else if(checkTablet.value) {
      return { maxWidth: '600px', width: '500px', marginTop: 'my-8' }
    }else if(checkDesktop.value) {
      return { maxWidth: '600px', width: '500px', marginTop: 'my-10' }
    }
  })

  const handleSignIn = async() => {
    isLoading.value = true;
    if(isLoggedIn()){
      isLoading.value = false;
      return navigateTo('/');
    } else{
      try{
        await signIn(email.value, password.value);
        isLoading.value = false;
        if(isLoggedIn()){
          return navigateTo('/');
        }
      }catch(error){
        errorMessage.value = error.message;
        isLoading.value = false;
        showingError.value = true;
      }
    }
  }

  watch(user, () => {
    if(isLoggedIn()){
      navigateTo('/home');
    }
  });
  
</script>

<template>
  <!--<v-main
    class="text-center"
    :class="cardWidth?.marginTop">-->
    <v-card
      :max-width="cardWidth?.maxWidth"
      :width="cardWidth?.width"
      class="mx-auto"
      elevation="5">
      <v-toolbar
        :elevation="5"
        class="bg-primary">
        <v-icon icon="fas fa-door-open" size="2rem" color="white" class="mx-5"></v-icon>
        <h1 class="px-2">Bienvenido</h1>
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
            @click="handleSignIn">Ingresar</v-btn>
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
      position="absolute"
      color="red">
      <v-icon>fas fa-circle-exclamation</v-icon>
      {{errorMessage}}
    </v-snackbar>
  <!--</v-main>-->
</template>
    
<style scoped>
.v-btn {
  text-transform: none;
}
</style>