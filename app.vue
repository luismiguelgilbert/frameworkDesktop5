<template>
  <!--<AppContainer class="bg-bitt">
    <AppHeader />
    <PageContainer>
      <NuxtPage />
    </PageContainer>
  </AppContainer>-->
  <v-app
    full-height
    style="color: #201c54; background-color: #f6f8fc;" >
    <v-container
      fluid
      class="d-flex flex-row align-start px-1 py-16 align-stretch">
      <AppHeader />
        <NuxtPage />
    </v-container>
  </v-app>
</template>
<style scoped>
.bg-bitt {
  background-color: #f8fafb; /*#f5f5f5 !important*/
}
</style>