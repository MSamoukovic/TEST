<template>
  <div>
    <b-modal :id ="'add'" hide-footer >
      <template v-slot:modal-title v-if="isEdit">
         Izmijeni
      </template>
     <template v-slot:modal-title v-else>
         Dodaj
      </template>
    <form @submit.prevent="handleSubmit" v-if="!isEdit">
      <div class="form-group">
        <label for="StudentIdCard">Broj indeksa:</label>
        <input type="text" class="form-control" name="StudentIdCard" id="StudentIdCard" v-model="student.StudentIdCard" v-validate="'required'" :class="{ 'is-invalid': submitted && errors.has('StudentIdCard') }" >
      <div v-if="submitted && errors.has('StudentIdCard')" class="invalid-feedback">Unesite broj indeksa</div>
      </div>
      <div class="form-group">
        <label>Ime:</label>
        <input type="text" class="form-control" name="FirstName" id="FirstName" v-model="student.FirstName">
      </div>
      <div class="form-group">
        <label>Prezime:</label>
        <input type="text" class="form-control" name="LastName" id="LastName" v-model="student.LastName">
      </div>
      <div class="form-group">
        <label>Godina:</label>
        <input type="number" class="form-control" name="Year" id="Year" min="1" max="6" v-model="student.Year" onKeyDown="return false">
      </div>
      <div class="form-group">
        <label>Status:</label>
          <select class="form-control" v-model="student.StudentStatus">
            <option v-for="status in studentStatusList" v-bind:key="status.Id" v-bind:value="status.Name"  >
                  {{status.Name}}
              </option>
          </select>
      </div>
        <div class="form-group">
        <label>Kursevi:</label>
          <select class="form-control selectpicker" v-model="student.CoursesList" multiple>
            <option v-for="course in courses" v-bind:key="course.Name" v-bind:value="course.Name" >
                  {{course.Name}}
              </option>
          </select> 
      </div> 
    <div class="form-group">
      <div class="row d-flex justify-content-center my-3">
          <div class="col-5">
            <b-button class="my-3 w-100 border-danger bg-white text-danger font-weight-bold" type="submit">Da</b-button>
          </div>
          <div class="col-5">
            <b-button class="my-3 bg-white border-success text-success font-weight-bold" block @click="$bvModal.hide('add');resetFields();">Ne</b-button>
          </div>
      </div> 
    </div>
  </form>
  <form @submit.prevent="handleSubmit" v-else>
      <div class="form-group">
        <label for="StudentIdCard">Broj indeksa:</label>
        <input type="text" class="form-control" name="StudentIdCard" id="StudentIdCard" v-model="editItem.StudentIdCard" v-validate="'required'" :class="{ 'is-invalid': submitted && errors.has('StudentIdCard') }" >
      <div v-if="submitted && errors.has('StudentIdCard')" class="invalid-feedback">Unesite broj indeksa</div>
      </div>
      <div class="form-group">
        <label>Ime:</label>
        <input type="text" class="form-control" name="FirstName" id="FirstName" v-model="editItem.FirstName">
      </div>
      <div class="form-group">
        <label>Prezime:</label>
        <input type="text" class="form-control" name="LastName" id="LastName" v-model="editItem.LastName">
      </div>
      <div class="form-group">
        <label>Godina:</label>
        <input type="number" class="form-control" name="Year" id="Year" min="1" max="6" v-model="editItem.Year" onKeyDown="return false">
      </div>
      <div class="form-group">
        <label>Status:</label>
          <select class="form-control" v-model="editItem.StudentStatus">
            <option v-for="status in studentStatusList" v-bind:key="status.Id" v-bind:value="status.Name"  >
                  {{status.Name}}
              </option>
          </select>
      </div>
        <div class="form-group">
        <label>Kursevi:</label>
          <select class="form-control selectpicker" v-model="editItem.CoursesList" multiple>
            <option  v-for="course in courses" v-bind:key="course.Name" v-bind:value="course.Name" >
                  {{course.Name}}
              </option>
          </select> 
      </div> 
    <div class="form-group">
      <div class="row d-flex justify-content-center my-3">
          <div class="col-5">
            <b-button class="my-3 w-100 border-danger bg-white text-danger font-weight-bold" type="submit">Da</b-button>
          </div>
          <div class="col-5">
            <b-button class="my-3 bg-white border-success text-success font-weight-bold" block @click="$bvModal.hide('add');resetFields();">Ne</b-button>
          </div>
      </div> 
    </div>
  </form>


  </b-modal>  
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name:'StudentCreate',
  data()
  {
    return {
      student:{
      StudentIdCard : null,
      FirstName : null,
      LastName : null,
      Year : null,
      StudentStatus: 'Redovan',
      CoursesList : []
      },
      studentStatusList:null,
      courses : null,
      submitted: false         
    }
  },
  props:[
    'studentList','isEdit','editItem'
  ],
  mounted () {
    this.getAllStatus(),
    this.getAllCourses() 
  },
  methods:{
    resetFields(){
      this.student.StudentIdCard = '';
      this.student.FirstName = '';
      this.student.LastName = '';
      this.student.Year = '';
      this.student.StudentStatus = 'Redovan';
      this.student.CoursesList = [];
    },
    addStudentRow(){
      this.studentList.push({
          StudentIdCard : this.student.StudentIdCard,
          FirstName : this.student.FirstName,
          LastName : this.student.LastName,
          Year : this.student.Year,
          StudentStatus: this.student.StudentStatus,
          CoursesList : this.student.CoursesList
      });
    },
    getAllStatus(){
      axios.get('https://localhost:44358/api/studentStatus')
      .then((resp) => {
        this.studentStatusList = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    getAllCourses(){
      axios.get('https://localhost:44358/api/courses')
      .then((resp) => {
        this.courses = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      }) 
    },
    updateStudent(){
      axios.put('https://localhost:44358/api/students/' + this.editItem.Id,this.editItem)
              .then((result)=>{
                console.log(result);
                this.$emit('submit');
              })
              .catch(function (error) {
                console.log(error);
              })
    },
    addStudent(){
      axios.post('https://localhost:44358/api/students', this.student)
      .then((result)=>{
        console.log(result);
        this.addStudentRow();
        this.$emit('submit');
        this.resetFields();

        axios.get('https://localhost:44358/api/students')
        .then((result)=>{
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        })

      })
      .catch(function (error) {
        console.log(error);
      }) 
    },
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          if(this.isEdit==false ){
          this.addStudent();
          }else
          this.updateStudent();

        }
      });
    }
  }
}
</script>