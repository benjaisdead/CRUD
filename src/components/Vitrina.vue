<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="msg">
        <h1> Se recibio prop</h1>
        <div v-if="tipo=='Alcoholic'">
            <div id="lacard" v-for="bebida of this.lasbebidasalcoholicas">

                    <div>
                      <b-card
                          v-bind:title="`Bebida # ${bebida.idDrink}`"
                          v-bind:img-src="bebida.strDrinkThumb"
                          v-bind:img-alt="bebida.strDrink"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          >
                          <b-card-text>
                              {{ bebida.strDrink }}
                          </b-card-text>

                          <b-button variant="outline-primary"><router-link class="primary" v-bind:to="`/preparacion/${bebida.idDrink}`">Ver Mas</router-link></b-button>
                      </b-card>
                    </div>

            </div> <!-- fin la card -->
        </div> <!-- fin Alcoholic -->

        <div v-if="tipo=='Non_Alcoholic'">
            <div id="lacard" v-for="bebida of this.lasbebidassinalcohol">

                    <div>
                      <b-card
                          v-bind:title="`Bebida # ${bebida.idDrink}`"
                          v-bind:img-src="bebida.strDrinkThumb"
                          v-bind:img-alt="bebida.strDrink"
                          img-top
                          tag="article"
                          style="max-width: 20rem;"
                          class="mb-2"
                          >
                          <b-card-text>
                              {{ bebida.strDrink }}
                          </b-card-text>

                          <b-button variant="outline-primary"><router-link class="primary" v-bind:to="`/preparacion/${bebida.idDrink}`">Ver Mas</router-link></b-button>
                      </b-card>
                    </div>

            </div> <!-- fin la card -->
        </div> <!-- fin Non_Alcoholic -->



    </div> <!-- fin recibio prop -->

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    tipo: String,
  },
  computed:{
    ...mapState(["lasbebidasalcoholicas", "lasbebidassinalcohol"]),

  }, //Fin computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#lacard{
  display: inline-block;
}

</style>
