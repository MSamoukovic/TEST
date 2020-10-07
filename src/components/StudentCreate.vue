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
  </form>

    <div class="container">
      <div class="row d-flex justify-content-end">
        <div class="col-3">
          <b-button class="my-3 w-100" type="submit" @click="submitData">Da</b-button>
        </div>
        <div class="col-2">
          <b-button class="my-3" block @click="$bvModal.hide('add')">Ne</b-button>
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
            StudentStatus: 'Redovan'
            },
            studentStatusList:null
        }
    },
    methods:{
        submitData(e){
            axios.post('https://localhost:44358/api/students', this.student)
            .then((result)=>{
                console.log(result);
                this.$emit('submit');
            })
            e.preventDefault();
            console.log(this.student);
        },
        
    },
     mounted () {
    axios
      .get('https://localhost:44358/api/studentStatus')
      .then((resp) => {
        this.studentStatusList = resp.data;
        console.log(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      })      
  }
}
</script>