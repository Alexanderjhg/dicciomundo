<template>
  <v-app>
    <v-toolbar app >
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
        <v-toolbar-items>
          <v-btn flat><a href="" class="link">Crear palabra</a></v-btn>
          <v-btn @click="dialog =true" flat>Login</v-btn>
          <v-menu :nudge-width="100">
            
            <v-toolbar-title slot="activator">
              <v-icon class="dark">arrow_drop_down</v-icon>
            </v-toolbar-title>

            <v-list>
              <!-- <v-list-tile v-for="item in items" :key="item" @click=""> -->
              <v-list-tile>
                <v-list-tile-title><a class="link" href="">Colombia</a></v-list-tile-title>
              </v-list-tile>
            </v-list>

          </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    <!--  -->

    <v-content>
      <router-view></router-view>
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Entrar con Google
        </v-card-title>

        <v-card-text class="text-xs-center">
          <v-spacer></v-spacer>
          <v-btn>Google</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-content>



    <v-footer fixed="fixed" app>
      <span>&copy; Alexander Hurtado</span>
    </v-footer>
    <!--  -->


  </v-app>
</template>

<script>
  export default {
    components:{
    },
    name: 'App',
      data() {
          return {
            title:"AlexanderH",
            dialog:false,
          }
      }
  }
</script>

<style>
.link{
  text-decoration: none;
  color: black;
}
</style>

