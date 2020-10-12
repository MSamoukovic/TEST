<template>
<div>
<div class="row d-flex justify-content-center">
      <div class="col-12 col-lg-8 d-flex">        
          <b-button @click="$bvModal.show('courses');getAllCourses();" class="my-3">Kurs</b-button>
        <b-modal :id ="'courses'" hide-footer > 
            <CourseCreate @submit="$bvModal.hide('addCourse');getAllCourses()" :coursesList="coursesList"/>
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
    </div>
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
    mounted () {
    this.getAllCourses();
    },
    methods:{
        getAllCourses(){
        axios
            .get('https://localhost:44358/api/courses')
            .then((resp) => {
                this.coursesList = resp.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        getStudents(courseId){
            axios
                .get('https://localhost:44358/api/courses/' + courseId )
                .then((resp) => {
                    this.studentsList = resp.data;
                })
                .catch(function (error) {
                    console.log(error);
                })  
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/tableStyle.css';
</style>