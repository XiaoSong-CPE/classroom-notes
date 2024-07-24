# Classroom Checklists <badge>Day {{$params.day}}</badge>

**① Beginner (9:00)**

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
<td>{{ item.name_en }}{{ item.name_zh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ item.homework?'✔️':''}}</td>
<td></td>
</tr>
</tbody>
</table>

**② Advanced (10:45)**

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
<td>{{ item.name_en }}{{ item.name_zh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ item.homework?'✔️':''}}</td>
<td></td>
</tr>
</tbody>
</table>

**④ Beginner (16:15)**

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
<td>{{ item.name_en }}{{ item.name_zh }}</td>
<td>{{ item.attendance?'✔️':''}}</td>
<td>{{ item.homework?'✔️':''}}</td>
<td></td>
</tr>
</tbody>
</table>

<style lang="less">
    p {
        margin-bottom: 0!important;
    }
table.name-list-table:last-child {
    margin-bottom: 0!important;
}
    table.name-list-table {
        margin-top: 0!important;
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
  @page {
    margin: 0;
  }

  .VPNav,
  .VPLocalNav {
    display: none;
  }


}
  .VPDoc.has-aside  {
    padding-bottom:0!important;
  }
</style>
