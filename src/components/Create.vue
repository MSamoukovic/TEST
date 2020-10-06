<template>
<div>
    <form @submit=submitData method="post">
        <input type="text" name="StudentIdCard" id="StudentIdCard" placeholder="Broj indeksa" v-model="student.StudentIdCard"><br><br>
        <input type="text" name="FirstName" id="FirstName" placeholder="Ime" v-model="student.FirstName" ><br><br>
        <input type="text" name="LastName" id="LastName" placeholder="Prezime" v-model="student.LastName"><br><br>
        <input type="number" name="Year" id="Year" min="1" max="6" placeholder="Godina" v-model="student.Year"><br><br>
        <input  type="text" name="StudentStatus" id="StudentStatus" placeholder="Status" v-model="student.StudentStatus"><br><br>
        
        <div id="dropdownlist">
        <ejs-dropdownlist  :dataSource='localData' :fields='localFields' placeholder='select game'></ejs-dropdownlist>
     <ejs-dropdownlist  :dataSource='studentStatusData' fields='studentStatusFields' placeholder='Status' ></ejs-dropdownlist>
    </div>
        <button type="submit">Post</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios,axios)

import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
 import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
 Vue.use(DropDownListPlugin);

var remoteDataSource = new DataManager({
    url:'https://localhost:44358/api/studentStatus',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
console.log('rem');
console.log(remoteDataSource)

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
            },
            studentStatusData: remoteDataSource,
            studentStatusFields:  {value:'Id', text:'Name'},
            localData:[
                { Id:'game12',Game:'footbal2'},
                {Id:'game1',Game:'footbal'},
                {Id:'game1ss',Game:'footbal'}
                ],
             localFields:{value:'Id', text:'Game'}
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


<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>