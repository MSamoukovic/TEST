<template>
  <div id="app" class="container">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-8 py-4">
              <h3>Studenti:</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-8">
<table class="table table-striped text-center border">
  <thead>
    <tr>
      <th scope="col">Ime</th>
      <th scope="col">Prezime</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in list" v-bind:key="item.Id">
      <td>{{item.FirstName}}</td>
      <td>{{item.LastName}}</td>
      <td>
        <b-button @click="$bvModal.show('details-'+item.Id)">Detalji</b-button>
        <b-button class="mx-3">Izmijeni</b-button>
        <b-button @click="$bvModal.show('delete-'+item.Id)">Ukloni</b-button>
      </td>

      <!-- details      -->
    <b-modal :id ="'details-'+item.Id" hide-footer>
      <StudentDetails :item="item"/>
      <b-button class="my-3" block @click="$bvModal.hide('details-'+item.Id)">Izađi</b-button>
    </b-modal> 

    <b-modal :id ="'delete-'+item.Id" hide-footer>
      <StudentDelete :item="item" @submit="$bvModal.hide('delete-'+item.Id)" @cancel="$bvModal.hide('delete-'+item.Id)"/>
    </b-modal>

    <b-modal :id ="'create'" hide-footer>
      <StudentCreate />
    </b-modal> 
    </tr>
  </tbody>
</table>

</div>
</div>
<div class="row d-flex justify-content-center">
  <div class="col-8 d-flex">
      <b-button class="ml-auto" @click="$bvModal.show('create')">Dodaj novog studenta</b-button>
  </div>
  </div>
   <Create/>
  </div>
</template>

<script>
import axios from 'axios'
import Create from './components/Create.vue'
import StudentDetails from './components/StudentDetails.vue'
import StudentDelete from './components/StudentDelete.vue'
import StudentCreate from './components/StudentCreate.vue'




export default {
  name: 'App',
  components: {
   Create,
   StudentDetails,
   StudentDelete,
   StudentCreate
 },
  methods: {
        select: function(event) {
            console.log(event.target.id); 
        }
    },
     data () {
    return {
      list: undefined,
    }
  },
  mounted () {
    axios
      .get('https://localhost:44358/api/students')
      .then((resp) => {
        this.list = resp.data;
        console.log(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      })      
  }
}





</script>

<style scoped>
.table th, .table td{
  vertical-align:0;
}
</style>