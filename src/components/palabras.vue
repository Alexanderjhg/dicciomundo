<template>
    <v-container fuid grid-list-xl al>
      <section><h1 class="display-1 font-weight-regular">Palabras urbanas de {{url}}</h1></section>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <!-- cada targeta es un articulo -->
            <article>
                <!-- targeta -->
              <v-card xs3>
                <!-- cuerpo -->
                <v-card-title primary-title>
                  <div>
                    <h2 class="headline mb-0 body-2">*-Palabra: "<b>Hola</b>"</h2>
                    <div><h3 class="body-2">*-Descripcion :</h3><span class="caption">Descripcion</span></div>
                    <div><h3 class="body-2">*-Ejemplo :</h3><span class="caption">Ejemplo</span></div>
                  </div>
                </v-card-title>
              </v-card>
                <!-- fin de la targeta -->
            </article>

        </v-flex>

      </v-layout>

    </v-container>    
</template>

<script>
    export default {
        created(){
          this.url=this.$route.params.id
        },
        data(){
            return {
                palabras:null,
                url:null,
            }
        },

        watch:{
          '$route' (to, from) {
              // react to route changes...
            }
        },
    }
</script>
