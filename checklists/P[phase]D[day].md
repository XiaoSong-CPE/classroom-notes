# Classroom Checklists <badge>Day {{$params.day}}</badge>

<div  v-if="$params['9:00'].length !== 0">

## {{ $params.phase === 1 ? '①' : '⑤' }} Beginner (9:00)

<table class="name-list-table">
<thead>
<tr>
<th>Name</th>
<th>Attendance</th>
<th>Homework</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr v-for="item in $params['9:00']">
<td>{{ item.nameEn }} {{ item.nameZh }}</td>
<td>{{ item.attendance?'✔️':'' }}</td>
<td>{{ (item.homework?'✔️':'') + ` (${item.homeworkTimes})` }}</td>
<td></td>
</tr>
</tbody>
</table>

</div>

<div  v-if="$params['10:45'].length !== 0">

## {{ $params.phase === 1 ? '② Advanced' : '⑥ Beginner' }} (10:45)

<table class="name-list-table">
<thead>
<tr>
<th>Name</th>
<th>Attendance</th>
<th>Homework</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr v-for="item in $params['10:45']">
<td>{{ item.nameEn }} {{ item.nameZh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ (item.homework?'✔️':'') + ` (${item.homeworkTimes})` }}</td> 
<td></td>
</tr>
</tbody>
</table>

</div>

<div  v-if="$params['14:30'].length !== 0">

## {{ $params.phase === 1 ? '③' : '⑦' }} Advanced (14:30)

<table class="name-list-table">
<thead>
<tr>
<th>Name</th>
<th>Attendance</th>
<th>Homework</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr v-for="item in $params['14:30']">
<td>{{ item.nameEn }} {{ item.nameZh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ (item.homework?'✔️':'') + ` (${item.homeworkTimes})` }}</td>
<td></td>
</tr>
</tbody>
</table>

</div>

<div  v-if="$params['16:15'].length !== 0">

## {{ $params.phase === 1 ? '④' : '⑧' }} Beginner (16:15)

<table class="name-list-table">
<thead>
<tr>
<th>Name</th>
<th>Attendance</th>
<th>Homework</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr v-for="item in $params['16:15']">
<td>{{ item.nameEn }} {{ item.nameZh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ (item.homework?'✔️':'') + ` (${item.homeworkTimes})` }}</td>
<td></td>
</tr>
</tbody>
</table>

</div>

<style lang="less">
    table.name-list-table {
  width: 100%;
  table-layout: fixed;
  thead {
    tr {
      th {
        padding: 0.25rem 0.5rem;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 0.25rem 0.5rem;
      }
      td:first-child {
        white-space: nowrap;
      }
      td:last-child {
        width: 100%;
      }
    }
  }
}

/* printing */
@media print {

  .VPNav,
  .VPLocalNav {
    display: none;
  }


}
  .VPDoc.has-aside  {
    padding-bottom:0!important;
  }
</style>
