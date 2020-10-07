<template>
    <div>
        <div class="container-fluid py-2">
            <h4 class="text-center">Da li ste sigurni ?</h4>
            <div class="row d-flex justify-content-center">
                <div class="col-5">
                    <b-button class="my-3" block @click="confirm()">Da</b-button>
                </div>
                <div class="col-5">
                    <b-button class="my-3" block @click="cancel()">Ne</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:[
        'item'
    ],
    methods:{
        confirm : function(){
                axios.delete('https://localhost:44358/api/students/' + this.item.Id)
                .then((resp) => {
                    this.$emit('submit');
                    console.log(resp.data);
                    axios
                    .get('https://localhost:44358/api/students')
                    .then((resp) => {
                        this.list = resp.data;
                        console.log(resp.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })   
                })
                .catch(function (error) {
                    console.log(error);
                })   
        },
        cancel : function(){
        this.$emit('cancel') 
    }
}
}
</script>