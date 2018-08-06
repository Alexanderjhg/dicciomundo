<template>
<main>
    <v-container>
        <div>
            
            <div><h1 class="display-1">Añadir palabra</h1></div>
            <p>Para poder a#adir la palabra por favor inicie sesion.</p>
        
        </div>

        <v-form>
            <v-layout row wrap>

                <v-flex xs12 sm6>
                <v-text-field
                    label="Titulo de la palabra..."
                    hint="Lo que agreges aqui sera visible con todos."
                    outline
                ></v-text-field>
                <v-text-field
                    label="Desfine la palabra"
                    hint="Lo que agreges aqui sera visible con todos."
                    outline
                ></v-text-field>
                    <v-textarea
                    outline
                    name="text1"
                    label="Usa la palabra en un ejemplo..."
                    ></v-textarea>
                    <v-btn outline>Enviar</v-btn>
                </v-flex>
                
            </v-layout>
        </v-form>
    </v-container>
</main>
</template>