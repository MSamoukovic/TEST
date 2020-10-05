<template>
<div>
    <form @submit=submitData method="post">
        <input type="text" name="StudentIdCard" id="StudentIdCard" placeholder="Broj indeksa" v-model="student.StudentIdCard"><br><br>
        <input type="text" name="FirstName" id="FirstName" placeholder="Ime" v-model="student.FirstName" ><br><br>
        <input type="text" name="LastName" id="LastName" placeholder="Prezime" v-model="student.LastName"><br><br>
        <input type="number" name="Year" id="Year" placeholder="Godina" v-model="student.Year"><br><br>
        <input  type="number" name="StudentStatus" id="StudentStatus" placeholder="Status" v-model="student.StudentStatus"><br><br>
        <button type="submit">Post</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios,axios)

export default {
    name:'Create',
    data()
    {
        return {
            student:{
            StudentIdCard: null,
            FirstName:null,
            LastName : null,
            Year:null,
            StudentStatus: null
            }
        }
    },
    methods:{
        submitData(e){
            axios.post('https://localhost:44358/api/students', this.student)
            .then((result)=>{
                console.log(result);

            })
            e.preventDefault();
            console.log(this.student);
        }
    }
}
</script>