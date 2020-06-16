<template>
  <v-data-table
    :headers="headers"
    :items="tableData"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import VueTypes from 'vue-types';
export default {
  name: 'DataTable',
  props: {
    tableData: VueTypes.array
  },
  computed: {
    headers() {
      return [
        {
          text: 'Teams',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Total Matches',
          align: 'start',
          sortable: true,
          value: 'totalMatches'
        },
        {
          text: 'Won',
          align: 'start',
          sortable: true,
          value: 'won'
        },
        {
          text: 'Lost',
          align: 'start',
          sortable: true,
          value: 'lost'
        },
        {
          text: 'Ties',
          align: 'start',
          sortable: true,
          value: 'ties'
        },
        {
          text: 'Total Goals Scored For',
          align: 'start',
          sortable: true,
          value: 'totalGoalsScored'
        },
        {
          text: 'Total Goals Scored Against',
          align: 'start',
          sortable: true,
          value: 'totalGoalsConceded'
        }
      ];
    }
  }
};
</script>

<style></style>
