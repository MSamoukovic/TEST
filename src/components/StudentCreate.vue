<template>
  <div>
    <b-button @click="$bvModal.show('add')">Dodaj novog studenta</b-button>
    <b-modal :id ="'add'" hide-footer >
    <form>
      <div class="form-group">
        <label>Broj indeksa:</label>
        <input type="text" class="form-control" name="StudentIdCard" id="StudentIdCard" v-model="student.StudentIdCard">
        <span></span>
      </div>
      <div class="form-group">
        <label>Ime:</label>
        <input type="text" class="form-control" name="FirstName" id="FirstName" v-model="student.FirstName" >
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
          <select class="form-control" v-model="student.CoursesList" >
            <option v-for="course in courses" v-bind:key="course.Name" v-bind:value="course.Name" >
                  {{course.Name}}
              </option>
          </select>
      </div>  

  </form>
     <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-5 ">
          <b-button class="my-3 w-100 border-danger bg-white text-danger font-weight-bold" type="submit" @click="submitData">Da</b-button>
        </div>
        <div class="col-5">
          <b-button class="my-3 bg-white border-success text-success font-weight-bold" block @click="$bvModal.hide('add')">Ne</b-button>
        </div>
      </div>
    </div> 
    </b-modal>  
  </div>
</template>

<script>
import axios from 'axios'

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
            StudentStatus: null,
            CoursesList : []
            },
            studentStatusList:null,
            courses : null
            
        }
    },
    methods:{
        submitData(e){
          console.log("majaa");
          console.log(this.student);
            axios.post('https://localhost:44358/api/students', this.student)
            .then((result)=>{
                console.log(result);

                this.$emit('submit');
            })
            e.preventDefault();
        },
        
    },
     mounted () {
    axios
      .get('https://localhost:44358/api/studentStatus')
      .then((resp) => {
        this.studentStatusList = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      }),
       axios
      .get('https://localhost:44358/api/courses')
      .then((resp) => {
        this.courses = resp.data;
      })
      .catch(function (error) {
        console.log(error);
      })      
  }
}
</script>