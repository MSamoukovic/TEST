<template>
  <div id="app" class="container">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-8 py-4">
          <h2>Lista studenata :</h2>
      </div>
    </div>
        <StudentList />
        <Courses class="ml-auto"/>
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