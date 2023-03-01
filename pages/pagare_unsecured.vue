<script setup lang="ts">

const currentStep = ref(0)
const var_cifras = ref(0)
const var_cifras_numero = ref('')
const var_periodo = ref(0) //30,45,90, 180, o el número de días acordado en el que se ejecutará el pago
const var_cobrador = ref('') //30,45,90, 180, o el número de días acordado en el que se ejecutará el pago
const var_porcentaje_numero = ref(0)
const var_acreedor = ref('')
const var_ciudad = ref('')
const var_fecha = ref('')

definePageMeta({
  layout: 'login'
})

const isMobile = computed(() => {
  return useMediaQuery('(max-width: 1024px)');
}) 

</script>
<template>
  <h1>PAGARÉ 1</h1>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-card
          title="Variables">
          <v-divider></v-divider>
          <v-container
            v-if="!isMobile.value">
            <v-text-field
              v-model="var_cifras"
              class="mb-6"
              type="number"
              color="primary"
              label="Monto del Pagaré"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_periodo"
              class="mb-6"
              type="number"
              color="primary"
              label="Días de Plazo"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_cobrador"
              class="mb-6"
              type="text"
              color="primary"
              label="Nombre del Cobrador"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_porcentaje_numero"
              class="mb-6"
              type="number"
              color="primary"
              label="Porcentaje de Interés"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_acreedor"
              class="mb-6"
              type="text"
              color="primary"
              label="Nombre del Acreedor"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_ciudad"
              class="mb-6"
              type="text"
              color="primary"
              label="Ciudad"
              variant="underlined"
              hide-details />
            <v-text-field
              v-model="var_fecha"
              class="mb-6"
              type="text"
              color="primary"
              label="Fecha"
              variant="underlined"
              hide-details />
          </v-container>
          <v-tabs
            v-if="isMobile.value"
            v-model="currentStep"
            bg-color="primary">
            <v-tab :value="1">Monto del Pagaré (1/7)</v-tab>
            <v-tab :value="2">Días de Plazo (2/7)</v-tab>
            <v-tab :value="3">Nombre del Cobrador (3/7)</v-tab>
            <v-tab :value="4">Porcentaje de Interés (4/7)</v-tab>
            <v-tab :value="5">Nombre del Acreedor (5/7)</v-tab>
            <v-tab :value="6">Ciudad (6/7)</v-tab>
            <v-tab :value="7">Fecha (7/7)</v-tab>
          </v-tabs>
          <v-window
            v-if="isMobile.value"
            v-model="currentStep">
            <v-window-item :value="1">
              <v-text-field
                v-model="var_cifras"
                class="my-5 mx-2"
                type="number"
                color="primary"
                label="Monto del Pagaré"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="2">
              <v-text-field
                v-model="var_periodo"
                class="my-5 mx-2"
                type="number"
                color="primary"
                label="Días de Plazo"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="3">
              <v-text-field
                v-model="var_cobrador"
                class="my-5 mx-2"
                type="text"
                color="primary"
                label="Nombre del Cobrador"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="4">
              <v-text-field
                v-model="var_porcentaje_numero"
                class="my-5 mx-2"
                type="number"
                color="primary"
                label="Porcentaje de Interés"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="5">
              <v-text-field
                v-model="var_acreedor"
                class="my-5 mx-2"
                type="text"
                color="primary"
                label="Nombre del Acreedor"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="6">
              <v-text-field
                v-model="var_ciudad"
                class="my-5 mx-2"
                type="text"
                color="primary"
                label="Ciudad"
                variant="outlined"
                hide-details />
            </v-window-item>
            <v-window-item :value="7">
              <v-text-field
                v-model="var_fecha"
                class="my-5 mx-2"
                type="text"
                color="primary"
                label="Fecha"
                variant="outlined"
                hide-details />
            </v-window-item>
          </v-window>
          <v-pagination
            v-if="isMobile.value"
            v-model="currentStep"
            :length="7"
            :total-visible="1"
            prev-icon="far fa-circle-left"
            next-icon="far fa-circle-right"
            rounded="circle">
          </v-pagination>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" lg="9">
        <v-card
          title="PAGARÉ">
          <v-divider></v-divider>
          <div class="pa-5">
            POR US$ <b class="text-primary">{{var_cifras > 0 ? var_cifras : 'poner valor en cifras'}}</b>
            <br/><br/>
            Debo y pagaré  a <b class="text-primary">{{var_periodo > 0 ? var_periodo : 'poner número de días acordado en el que se ejecutará el pago en cifras'}}</b> días vista en esta ciudad o en lugar en que se me reconvenga a la orden de 
            <b class="text-primary">{{ var_cobrador.length > 0 ? var_cobrador : 'poner nombre de la persona natural o jurídica que cobra el pagaré'}}</b>, la cantidad de 
            <b class="text-primary">{{ var_cifras_numero.length > 0 ? var_cifras_numero : '(poner valor en en letras CON 00/100'}}</b>
            Dólares de los Estados Unidos de América. <br/>
            Esta cantidad me obliga a pagar incondicionalmente, en moneda de curso legal, al vencimiento del plazo constante en esta obligación.
            También me obligo a pagar el interés del <b class="text-primary">{{ var_porcentaje_numero }}</b>% anual, desde esa fecha hasta el vencimiento del plazo señalado,
            siendo de mi cuenta todos los impuestos y tasas que causare este pagaré, así como a pagar los gastos judiciales y extrajudiciales que ocasionare el cobro,
            bastando para determinar el monto de tales gastos la sola aseveración del acreedor o tenedor legítimo de este título de crédito. <br/>
            En caso de mora, me obligo adicionalmente a pagar el interés de mora de acuerdo con lo establecido en la Regulación respectiva del Directorio del Banco Central del Ecuador a la fecha de dicha mora, 
            así como a pagar los gastos judiciales y extrajudiciales que ocasionare el cobro,
            bastando para determinar el monto de tales gastos, la sola aseveración del acreedor o tenedor legítimo de este título de crédito. <br/>
            Al fiel cumplimiento de lo estipulado me obligo con todos mis bienes presentes y futuros. 
            Renuncio a domicilio y vecindad y toda excepción que pudiera favorecerme, en juicio y de manera especial al derecho de alegar prescripción, así como al de interponer recurso de apelación y de hecho,
            respecto de las providencias y sentencias que se expidieren en el juicio o juicios que en relación al presente documento se iniciaren.
            Además autorizo a <b class="text-primary">{{ var_acreedor.length > 0 ? var_acreedor : 'nombre del acreedor '}}</b>, para disponer de valores o documentos que le hubiera endosado al cobro,
            como pago parcial o total de este pagaré. <br/>
            Me someto expresamente en la vía ejecutiva a los jueces o Tribunales de Guayaquil, ó a los que elija el acreedor, en cuyo caso renuncio a fuero, domicilio o vecindad. <br/>
            SIN PROTESTO.- Eximo al acreedor de presentación para el pago y de aviso por falta del mismo. <br/>
            <br/><br/>
            <b class="text-primary">{{var_ciudad.length > 0 ? var_ciudad: 'NA'}}</b>, <b class="text-primary">{{var_fecha.length > 0 ? var_fecha: ''}}</b>
            <br/><br/>
            Firma<br/><br/><br/>
            VISTO BUENO<br/>
            <b class="text-primary">{{var_fecha.length > 0 ? var_fecha: '(Poner fecha que se firma)'}} </b><br/>
            <b class="text-primary">{{var_acreedor.length > 0 ? var_acreedor: '(nombre de la persona natural o juridica que firma)'}} </b>
          </div>
        </v-card>
      </v-col>
    </v-row>
</template>

<style scoped>
.v-btn {
  text-transform:none !important;
  font-weight: 700 !important;
}
</style>