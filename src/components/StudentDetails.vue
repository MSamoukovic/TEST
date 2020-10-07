<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary">Broj indeksa:</div>
        <div class="col-5 border border-secondary">{{item.StudentIdCard}}</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary">Ime:</div>
        <div class="col-5 border border-secondary">{{item.FirstName}}</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary">Prezime:</div>
        <div class="col-5 border border-secondary">{{item.LastName}}</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary">Godina:</div>
        <div class="col-5 border border-secondary">{{item.Year}}</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary">Status:</div>
        <div class="col-5 border border-secondary">{{item.StudentStatus}}</div>
      </div>
       <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary align-middle" >Kursevi:</div>
        <div class="col-5 border border-secondary">
          <div class="row">
            <div class="col-12" v-for="course in item.CoursesList" :key="course">
              {{course}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
        props:[
            'item'
        ]
    }
</script>