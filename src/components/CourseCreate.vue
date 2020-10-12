<template>
    <div>
        <div class="d-flex justify-content-end">
            <b-button size="sm" class="mb-3 bg-white border-danger text-danger"  @click="$bvModal.show('addCourse')">Dodaj</b-button>
        </div>
        <b-modal :id ="'addCourse'" hide-footer >
           <template v-slot:modal-title>
               Novi kurs:
            </template> 
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="Name">Naziv:</label>
                    <input type="text" v-model="course.Name" v-validate="'required'" id="Name" name="Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('Name') }" />
                    <div v-if="submitted && errors.has('Name')" class="invalid-feedback">Unesite naziv kursa</div>
                </div>
                <div class="form-group">
                    <div class="row d-flex justify-content-center my-3">
                        <div class="col-5">
                            <b-button class="w-100 bg-white border-danger text-danger font-weight-bold" type="submit">Da</b-button>
                        </div>
                        <div class="col-5">
                            <b-button class="w-100 bg-white border-success text-success font-weight-bold" @click="$bvModal.hide('addCourse');resetField();">Ne</b-button>
                        </div>
                    </div> 
                </div>
            </form>
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
            },        
            submitted: false,
            courses : null
        }
    },
    methods:{
        resetField(){
            this.course.Name = '';
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
        addNewCourse(){
            axios.post('https://localhost:44358/api/courses', this.course)
                .then((result)=>{
                    console.log(result);
                    this.$emit('submit');
                    this.getAllCourses();
                    this.resetField();
                })
               .catch(function (error) {
                console.log(error);
                })   
        },
        handleSubmit(){
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.addNewCourse();
                }
            });
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/tableStyle.css';
</style>