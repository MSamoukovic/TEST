<template>
  <div id="app" class="container">
    <Create/>
    <table class="table table-striped">
    <thead>
    <tr>
      <th>Ime</th>
      <th>Prezime</th>
    </tr>
  </thead>
    <tr v-for="item in list" v-bind:key="item.Id">
      <td>{{item.FirstName}}</td>
      <td>{{item.LastName}}</td>
      <td>
        <b-button @click="$bvModal.show(item.Id)">Detalji</b-button>
      </td>

<!-- details      -->
     <b-modal :id =item.Id hide-footer>
              <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                <div class="col-4 border border-secondary">Index:</div>
                <div class="col-4 border border-secondary">{{item.StudentIdCard}}</div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-4 border border-secondary">Ime:</div>
                <div class="col-4 border border-secondary">{{item.FirstName}}</div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-4 border border-secondary">Prezime:</div>
                <div class="col-4 border border-secondary">{{item.LastName}}</div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-4 border border-secondary">Godina:</div>
                <div class="col-4 border border-secondary">{{item.Year}}</div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-4 border border-secondary">Status:</div>
                <div class="col-4 border border-secondary">{{item.StudentStatusId}}</div>
              </div>
            </div>
            <b-button class="my-3" block @click="$bvModal.hide(item.Id)">Izađi</b-button>
</b-modal> 
    </tr>
</table> 
    <Details :listdata="list"/>
  </div>
</template>

<script>
import axios from 'axios'
import Details from './components/Details.vue'
import Create from './components/Create.vue'


export default {
  name: 'App',
  components: {
   Details,
   Create
 },
  methods: {
        select: function(event) {
            console.log(event.target.id); 
        }
    },
     data () {
    return {
      list: undefined
    }
  },
  mounted () {
    axios
      .get('https://localhost:44358/api/students')
      .then((resp) => {
        this.list = resp.data;
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