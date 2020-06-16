<template>
  <div>
    <DataTable :tableData="tableData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DataTable from '../components/DataTable';
import { getMatchStats } from '../match/matchGettersTypes';
export default {
  name: 'MatchTable',
  components: {
    DataTable
  },
  computed: {
    ...mapGetters({
      getMatchStats
    }),
    tableData() {
      return this.getMatchStats;
    }
  }
};
</script>

<style></style>
