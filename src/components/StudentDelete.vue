<template>
    <div>
        <div class="container-fluid py-2">
            <h4 class="text-center">Da li ste sigurni ?</h4>
            <div class="row d-flex justify-content-center">
                <div class="col-5">
                    <b-button class="my-3 font-weight-bold border-danger bg-white text-danger" block @click="confirm()">Da</b-button>
                </div>
                <div class="col-5">
                    <b-button class="my-3 font-weight-bold border-success bg-white text-success" block @click="cancel()">Ne</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:[
        'item','index','list'
    ],
    methods:{
        confirm : function(){
                axios.delete('https://localhost:44358/api/students/' + this.item.Id)
                .then((resp) => {
                    console.log(resp.data);
                    this.$emit('submit');
                    this.list.splice(this.index,1);
                })
                .catch(function (error) {
                    console.log(this.item);
                    console.log(error);
                })   
        },
        cancel : function(){
        this.$emit('cancel') 
        }
    }
}
</script>