<template>

  <div id="app" class="container">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-8 py-4">
          <h3>Studenti:</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-8 d-flex">
        <Courses class="ml-auto"/>
      </div>
    </div>
    
        <StudentList />
     
    

</div>
</template>

<script>
import StudentList from './components/StudentList.vue'
import Courses from './components/Courses.vue'

export default {
  name: 'App',
  components: {
    StudentList,
    
    Courses
  }
}
</script>