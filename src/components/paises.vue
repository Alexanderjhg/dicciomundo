<template>
        <v-container fuid grid-list-xl al>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="list in paises" :key="list.key">
              <!-- cada targeta es un articulo -->
                <article>
                    <!-- targeta -->
                  <v-card xs3>
                      <!-- imagen -->
                    <v-card-media :src="list.Url" height="180px"></v-card-media>
                    <!-- cuerpo -->
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0" v-text="list.Titulo"></h3>
                        <div><p>{{list.descripcion}}</p></div>
                      </div>
                    </v-card-title>
                    <!-- footer -->
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn outline color="info"><a href="" class="link">Ir</a></v-btn>
                    </v-card-actions>

                  </v-card>
                    <!-- fin de la targeta -->
                </article>

            </v-flex>

          </v-layout>

        </v-container>
    

    
</template>

<script>
    export default {
        data(){
            return {
                paises:[
                    {
                        Titulo:"Argentina",
                        Url:"https://dicciomundo.firebaseapp.com/img/argentina.png",
                        descripcion:"Acontinuacion, palabras de Argenina."
                    },
                    {
                        Titulo:"Mexico",
                        Url:"https://dicciomundo.firebaseapp.com/img/mexico.png",
                        descripcion:"Acontinuacion, palabras de Mexico."
                    },
                    {
                        Titulo:"Peru",
                        Url:"https://dicciomundo.firebaseapp.com/img/peru.png",
                        descripcion:"Acontinuacion, palabras de Peru."
                    },
                    {
                        Titulo:"Venezuela",
                        Url:"https://dicciomundo.firebaseapp.com/img/venezuela.png",
                        descripcion:"Acontinuacion, palabras de Venezuela."
                    },
                    {
                        Titulo:"Colombia",
                        Url:"https://dicciomundo.firebaseapp.com/img/colombia.png",
                        descripcion:"Acontinuacion, palabras de Colombia."
                    },
                    {
                        Titulo:"España",
                        Url:"https://dicciomundo.firebaseapp.com/img/espana.png",
                        descripcion:"Acontinuacion, palabras de España."
                    },
                    {
                        Titulo:"Panama",
                        Url:"https://dicciomundo.firebaseapp.com/img/panama.png",
                        descripcion:"Acontinuacion, palabras de Panama."
                    },
                    {
                        Titulo:"Chile",
                        Url:"https://dicciomundo.firebaseapp.com/img/chile.png",
                        descripcion:"Acontinuacion, palabras de Chile."
                    },
                ],
            }
        }
    }
</script>
