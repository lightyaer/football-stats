<template>
  <v-app>
    <v-app-bar app color="primary"> </v-app-bar>
    <v-content>
      <MatchChart class="mb-10" />
      <MatchTable />
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';
import { map, flatten } from 'lodash';
import { setTeams } from '../team/teamMutationsTypes';
import { setMatches } from '../match/matchMutationTypes';
import teams from '../data/teams.json';
import matches from '../data/matches.json';
import MatchTable from '../match/MatchTable';
import MatchChart from '../match/MatchChart';

export default {
  name: 'App',
  created() {
    this.setTeams(teams.clubs);
    this.setMatches(flatten(map(matches.rounds, round => round.matches)));
  },
  components: {
    MatchTable,
    MatchChart
  },
  methods: {
    ...mapMutations({
      setTeams,
      setMatches
    })
  }
};
</script>
