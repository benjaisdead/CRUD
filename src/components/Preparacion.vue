<template>
  <div>

              <b-container v-if="nolisto">
                  <b-progress v-bind:value="value" class="w-25"></b-progress>
              </b-container>
              <b-container v-else>
                      <b-row>
                        <b-col></b-col>
                        <b-col>

                                    <b-card
                                      v-bind:title="detallebebida[0].strDrink"
                                      v-bind:img-src="detallebebida[0].strDrinkThumb"
                                      img-alt="Image"
                                      img-top
                                      tag="article"
                                      style="max-width: 20rem;"
                                      class="mb-2"
                                    >
                                      <b-card-text>
                                          <div v-if="detallebebida[0].strInstructionsES != null">
                                              {{ detallebebida[0].strInstructionsES }}
                                          </div>
                                          <div v-else>
                                                {{ detallebebida[0].strInstructions }}
                                          </div>
                                      </b-card-text>

                                      <b-button variant="outline-primary"><router-link class="primary" to="/">Regresar</router-link></b-button>
                                    </b-card>





                        </b-col>
                        <b-col></b-col>
                      </b-row>


            </b-container>

  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default{
  name: 'Preparacion',
  data: ()=>{
    return{
        nolisto: true,
        value: 0,
    }
  },
  methods:{
      ...mapActions(["getDetallesBebida"]),
  },
  computed:{
      ...mapState(["detallebebida"]),
  },
  created(){
        let elid = parseInt(this.$route.params.idbebida);
        console.log(elid);
        let laurl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${elid}`;
        this.getDetallesBebida(laurl);

        setTimeout( ()=>{
            this.value=25;
        }, 1000);

        setTimeout( ()=>{
            this.value=50;
        }, 2000);

        setTimeout( ()=>{
            this.value=75;
        }, 3000);

        setTimeout( ()=>{
            this.value=100;
        }, 4000);

        setTimeout( ()=>{
            this.value=0;
            this.nolisto = false;
        }, 5000);
  },
}
</script>

<style scoped>
#eldetalle{

}
</style>
