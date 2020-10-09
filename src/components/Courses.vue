<template>
    <div>
        <b-button @click="$bvModal.show('courses')" class="my-3">Kurs</b-button>
        <b-modal :id ="'courses'" hide-footer > 
            <CourseCreate @submit="$bvModal.hide('addCourse')" :coursesList="coursesList"/>
            <table class="table table-striped text-center border">
                <thead>
                    <tr>
                        <th scope="col">Kurs</th>
                        <th scope="col">Studenti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="course in coursesList" v-bind:key="course.Id">
                        <td>{{course.Name}}</td>
                        <td> 
                            <b-button class="bg-white border-primary" @click="$bvModal.show('students-'+course.Id );getStudents(course.Id)"><font-awesome-icon icon="users" class="text-primary"/></b-button>
                            <b-modal :id ="'students-'+course.Id" hide-footer >
                                <template v-slot:modal-title>
                                    {{course.Name}}
                                </template> 
                                <table class="table table-striped text-center border">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ime </th>
                                            <th scope="col">Prezime</th>
                                            <th scope="col">Broj indeksa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="student in studentsList" v-bind:key="student.Id">
                                            <td> {{student.FirstName}} </td> 
                                            <td> {{student.LastName}} </td>
                                            <td> {{student.StudentIdCard}} </td>  
                                        </tr>
                                    </tbody>
                                </table>
                            </b-modal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import CourseCreate from './CourseCreate'

export default {
    components:{
        CourseCreate
    },
    data(){
        return{
        coursesList : null,
        studentsList : null,
        course:{
            Name: null
        }
        }
    },
    methods:{
        getStudents(courseId){
            axios
                .get('https://localhost:44358/api/courses/' + courseId )
                .then((resp) => {
                    this.studentsList = resp.data;
                    console.log(resp.data);
                })
                .catch(function (error) {
                    console.log(error);
                })  
        }
    },
    mounted () {
    axios
      .get('https://localhost:44358/api/courses')
      .then((resp) => {
        this.coursesList = resp.data;
        console.log(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

    }
</script>
<style scoped>
    .table th, .table td {
        vertical-align: middle;
    } 
</style>