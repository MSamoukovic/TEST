<template>
<div>
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
            <tr v-for="(item,index) in list" v-bind:key="item.Id" v-bind:index ="index">
              <td>{{item.FirstName}}</td>
              <td>{{item.LastName}}</td>
              <td>
                <b-button class="bg-white border-primary" @click="$bvModal.show('details-'+item.Id)"><font-awesome-icon icon="info" class="text-primary"/></b-button>
                <b-button class="bg-white border-success mx-3"><font-awesome-icon icon="pencil-alt" class="text-success"/></b-button>
                <b-button class="bg-white border-danger" @click="$bvModal.show(index+'delete-'+item.Id)"><font-awesome-icon icon="trash-alt" class="text-danger"/></b-button>
              </td>
              <b-modal :id ="'details-'+item.Id" hide-footer>
                <template v-slot:modal-title>
                <!-- Detalji -->
              </template>
                <StudentDetails :item="item"/>
              </b-modal> 

              <b-modal :id ="index+'delete-'+item.Id" hide-footer>
                <StudentDelete :item="item" :index="index" :list="list" @submit="$bvModal.hide(index+'delete-'+item.Id)" @cancel="$bvModal.hide(index+'delete-'+item.Id)"/>
              </b-modal>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
<div class="row d-flex justify-content-center">
      <div class="col-8 d-flex d-flex">
        <StudentCreate @submit="$bvModal.hide('add')" class="ml-auto" :studentList="list"/>
      </div>
    </div>
    </div>
</template>


<script>
import axios from 'axios'
import StudentDetails from './StudentDetails.vue'
import StudentDelete from './StudentDelete.vue'
import StudentCreate from './StudentCreate.vue'


export default {
    name: 'App',
    components: {
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
    },
}
</script>

<style scoped>
    .table th, .table td {
        vertical-align: middle;
    }
</style>