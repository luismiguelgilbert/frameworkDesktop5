<script setup lang="ts">

const var_cifras = ref(0)
const var_cifras_numero = ref('')
const var_periodo = ref(0) //30,45,90, 180, o el número de días acordado en el que se ejecutará el pago
const var_cobrador = ref('') //30,45,90, 180, o el número de días acordado en el que se ejecutará el pago
const var_porcentaje_numero = ref(0)
const var_acreedor = ref('')
const var_ciudad = ref('')
const var_fecha = ref('')

definePageMeta({
  layout: 'default'
})
</script>
<template>
  <h1>PAGARÉ</h1>

    <v-row>
      <v-col cols="3">
        <v-card
          class="mx-auto"
          title="Variables">
          <v-divider></v-divider>
          <v-container>
            <v-text-field
              v-model="var_cifras"
              type="number"
              color="primary"
              label="Monto del Pagaré"
              variant="underlined" />
            <v-text-field
              v-model="var_periodo"
              type="number"
              color="primary"
              label="Días de Plazo"
              variant="underlined" />
            <v-text-field
              v-model="var_cobrador"
              type="text"
              color="primary"
              label="Nombre del Cobrador"
              variant="underlined" />
            <v-text-field
              v-model="var_porcentaje_numero"
              type="number"
              color="primary"
              label="Porcentaje de Interés"
              variant="underlined" />
            <v-text-field
              v-model="var_acreedor"
              type="text"
              color="primary"
              label="Nombre del Acreedor"
              variant="underlined" />
            <v-text-field
              v-model="var_ciudad"
              type="text"
              color="primary"
              label="Ciudad"
              variant="underlined" />
            <v-text-field
              v-model="var_fecha"
              type="text"
              color="primary"
              label="Fecha"
              variant="underlined" />
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="9">
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