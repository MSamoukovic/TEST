<template>
  <div>     

    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">Broj indeksa</p>
        </div>
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">{{item.StudentIdCard}}</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-5 border border-secondary d-flex">
          <p class="m-0">Ime:</p>
        </div>
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">{{item.FirstName}}</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center d-flex">
        <div class="col-5 border border-secondary">
          <p class="my-auto">Prezime:</p>
        </div>
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">{{item.LastName}}</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center d-flex">
        <div class="col-5 border border-secondary">
          <p class="my-auto">Godina:</p>
        </div>
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">{{item.Year}}</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center d-flex">
        <div class="col-5 border border-secondary">
          <p class="my-auto">Status:</p>
        </div>
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">{{item.StudentStatus}}</p>
        </div>
      </div>
       <div class="row d-flex justify-content-center ">
        <div class="col-5 border border-secondary d-flex">
          <p class="my-auto">Kursevi:</p>
        </div>
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