<template>
    <div>
        <b-button @click="$bvModal.show('courses')" class="my-3">Kurs</b-button>
        <b-modal :id ="'courses'" hide-footer > 
            <table class="table text-center border">
                <thead>
                    <tr>
                        <th scope="col">Kurs</th>
                        <th scope="col">Studenti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="course in coursesList" v-bind:key="course.Id">
                        <td>{{course.Name}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </b-modal>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data(){
        return{
        coursesList : null
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