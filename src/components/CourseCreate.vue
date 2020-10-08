<template>
    <div>
     
        <div class="d-flex justify-content-end">
        <b-button size="sm" class="mb-3 bg-white border-danger text-danger"  @click="$bvModal.show('addCourse')">Dodaj</b-button>
        </div>
        <b-modal :id ="'addCourse'" hide-footer >
            <form>
                <div class="form-group mb-4">
                    <label>Naziv kursa:</label>
                    <input type="text" class="form-control" name="Name" id="Name" v-model="course.Name">
                </div>
            </form>
            <div class="row d-flex justify-content-center my-3">
                <div class="col-5">
                    <b-button class="w-100 bg-white border-danger text-danger font-weight-bold" type="submit" @click="addNewCourse">Da</b-button>
                </div>
                <div class="col-5">
                    <b-button class="w-100 bg-white border-success text-success font-weight-bold"  @click="$bvModal.hide('addCourse')">Ne</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            course:{
                Name: null
            }
        }
    },
    methods:{
        addNewCourse(){
            axios.post('https://localhost:44358/api/courses', this.course)
                .then((result)=>{
                    console.log(result);
                    this.$emit('submit');
                })
               .catch(function (error) {
                console.log(error);
                })   
        }
    }
}
</script>

<style scoped>
    .table th, .table td {
        vertical-align: middle;
    }
</style>