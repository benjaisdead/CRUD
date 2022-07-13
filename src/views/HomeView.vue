<template>
  <div class="home">
    <img id="ellogo" alt="mojito" src="../assets/mojito.jpg">

    <template>
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <!-- INICIO FORM
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>


          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

  FIN FORM      -->
          <template>
              <div>
                <b-form-group id="input-group-5" label="Individual radios" v-slot="{ ariaDescribedby }">
                  <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Alcoholic" required>Bebidas Alcoholicas</b-form-radio>
                  <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Non_Alcoholic" required>Bebidas Sin Alcohol</b-form-radio>
                </b-form-group>

                <div class="mt-3">Selected: <strong>{{ form.selected }}</strong></div>
              </div>
         </template>


          <b-button type="submit" variant="primary">Consultar</b-button>
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </template>











    <Vitrina v-bind:msg="titulo" v-bind:tipo="eltiposeleccionado"  />
  </div>
</template>

<script>
// @ is an alias to /src
import Vitrina from '@/components/Vitrina.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Vitrina
  },
  data: ()=>{
    return{
    form: {
    /*
      email: '',
      name: '',
      food: null,
      checked: [],
    */
      selected: ''
    },
    // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
    show: true,
    titulo: '',
    eltiposeleccionado:'',

    }//Fin return
  }, // fin data
  methods: {
      ...mapActions(["getBebidasAlcoholicas", "getBebidasSinAlcohol"]),
      onSubmit(event) {
        event.preventDefault();
        console.log('evento onSubmit');
        if(this.form.selected == 'Alcoholic'){
                      if(this.lasbebidasalcoholicas.length > 99){
                          console.log('Logica para renderizar las cards con alcohol desde almacen');
                          this.notificarHijo('Alcoholic');
                      }
                      else{
                            console.log('Logica para llenar el almacen de bebidas alcoholicas');
                            let laurl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.form.selected}`;
                            console.log(laurl);
                            this.getBebidasAlcoholicas(laurl);
                            alert(JSON.stringify(this.form));
                            setTimeout(()=>{
                              this.notificarHijo('Alcoholic');
                            },5000);

                      }
        }else if( this.form.selected == 'Non_Alcoholic'){

                      if(this.lasbebidassinalcohol.length > 57){
                          console.log('Logica para renderizar las cards sin alcohol desde almacen');
                          this.notificarHijo('Non_Alcoholic');
                      }
                      else{
                            console.log('Logica para llenar el almacen de bebidas sin alcohol');
                            let laurl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.form.selected}`;
                            console.log(laurl);
                            this.getBebidasSinAlcohol(laurl);
                            alert(JSON.stringify(this.form));

                            setTimeout(()=>{
                              this.notificarHijo('Non_Alcoholic');
                            },5000);
                      }

        }// fin else if


      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        /*
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        */
        this.form.selected = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        });
      }, // fin inReset
      notificarHijo(tipoBebida){
          this.eltiposeleccionado = tipoBebida;
          this.titulo = "Estos son los Cocteles";
      }
}, //fin methods
  computed:{
      ...mapState(["lasbebidasalcoholicas", "lasbebidassinalcohol"]),
  }

}//fin export
</script>

<style scoped>
#ellogo{
  width: 25%;
}
</style>
