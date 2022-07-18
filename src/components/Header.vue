 <template>
  <!-- <v-app> -->
    <div>
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
           src="../assets/logo.jpeg"
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
    
    <router-view/> 
  <!-- </v-app> -->
  </div>
</template>

  <script>

export default {
    name: "App",
           
};
  </script> 

