<template>
  <div class="container-fluid">
    <table class="table table-striped border">
      <tr>
        <td class="w-50 text-right border-right">Broj indeksa :</td>
        <td class="w-50">{{item.StudentIdCard}}</td>
      </tr>
      <tr>
        <td class="text-right border-right">Ime :</td>
        <td>{{item.FirstName}}</td>
      </tr>
      <tr>
        <td class="text-right border-right">Prezime :</td>
        <td>{{item.LastName}}</td>
      </tr>
      <tr>
        <td class="text-right border-right">Godina :</td>
        <td>{{item.Year}}</td>
      </tr>
      <tr>
        <td class="text-right border-right">Status :</td>
        <td>{{item.StudentStatus}}</td>
      </tr>
      <tr>
        <td class="text-right border-right">Kursevi :</td>
        <td>
          <div class="row">
            <div class="col-12" v-for="course in item.CoursesList" :key="course">{{course}}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
        props:[
            'item'
        ]
    }
</script>

<style scoped>
    .table th, .table td {
        vertical-align: middle;
    }
</style>