<template>
    <v-main>
      <router-view/>
    </v-main>
  <!-- <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
           src="./assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        /> 

     <h1>ADDRESS BOOK</h1>

      </div>
      
          <router-link to="/"><v-btn 
       color="primary"
        dark
        right 
        >
        
        <v-icon>mdi-account-plus</v-icon>LogOut</v-btn>
      
      </router-link> 

    </v-app-bar>
    
  <v-main>
    <router-view/> 

   </v-main>
  </v-app> -->

</template>



  <script>

export default {
    name: "App",
           
};
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
