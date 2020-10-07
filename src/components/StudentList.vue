<template>
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
              <b-modal :id ="'details-'+item.Id" hide-footer>
                <template v-slot:modal-title>
                <!-- Detalji -->
              </template>
                <StudentDetails :item="item"/>
                <b-button class="my-3" block @click="$bvModal.hide('details-'+item.Id)">Izađi</b-button>
              </b-modal> 

              <b-modal :id ="'delete-'+item.Id" hide-footer>
                <StudentDelete :item="item" @submit="$bvModal.hide('delete-'+item.Id)" @cancel="$bvModal.hide('delete-'+item.Id)"/>
              </b-modal>
            </tr>
          </tbody>
        </table>
</template>


<script>
import axios from 'axios'
import StudentDetails from './StudentDetails.vue'
import StudentDelete from './StudentDelete.vue'

export default {
    name: 'App',
    components: {
        StudentDetails,
        StudentDelete
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
    },
}
</script>

<style scoped>
    .table th, .table td {
        vertical-align: middle;
    }
</style>