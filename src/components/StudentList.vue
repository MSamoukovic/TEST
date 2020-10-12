<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-lg-8">
        <table class="table table-striped text-center border">
          <thead>
            <tr>
              <th scope="col">Broj indeksa</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list" v-bind:key="item.Id" v-bind:index ="index">
              <td>{{item.StudentIdCard}}</td>
              <td>
                <b-button class="bg-white border-primary" @click="$bvModal.show('details-'+item.Id)"><font-awesome-icon icon="info" class="text-primary"/></b-button>
                <b-button class="bg-white border-success mx-3" @click="$bvModal.show('add');checkMethod(item.Id);"><font-awesome-icon icon="pencil-alt" class="text-success"/></b-button>
                <b-button class="bg-white border-danger" @click="$bvModal.show(index+'delete-'+item.Id)"><font-awesome-icon icon="trash-alt" class="text-danger"/></b-button>
              </td>
              <b-modal :id ="'details-'+item.Id" hide-footer>
                <StudentDetails :item="item"/>
              </b-modal> 
              <b-modal :id ="index+'delete-'+item.Id" hide-footer>
                <StudentDelete @submit="$bvModal.hide(index+'delete-'+item.Id)" @cancel="$bvModal.hide(index+'delete-'+item.Id)" :item="item" :index="index" :list="list"/>
              </b-modal>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-lg-8 d-flex ">
        <b-button @click="$bvModal.show('add');checkMethod('add');getAllCourses();">Dodaj novog studenta <font-awesome-icon icon="user-plus"/></b-button>
        <StudentCreate @submit="$bvModal.hide('add');getAllStudents()" class="ml-auto" :studentList="list" :isEdit="isEdit" :editItem="editItem" :allCourses="coursesList" />
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
  data () {
    return {
      list: undefined,
      isEdit : false,
      editItem :'',
      coursesList :null,
    }
  },
  mounted () {
    this.getAllStudents();   
    this.getAllCourses(); 
  },
  methods: {
    select: function(event) {
      console.log(event.target.id); 
    },
    getAllCourses(){
      axios.get('https://localhost:44358/api/courses')
      .then((resp) => {
        this.coursesList = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    getAllStudents(){
      axios.get('https://localhost:44358/api/students')
      .then((resp) => {
        this.list = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    checkMethod(elem){
      if (elem == 'add') {
        this.isEdit = false;
        this.editItem = '';
      }
      else{
        this.isEdit = true;
        axios.get('https://localhost:44358/api/students/' + elem)
        .then((resp) => {
          this.editItem = resp.data;
        })
        .catch(function (error) {
          console.log(error);
        }) 
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/tableStyle.css';
</style>