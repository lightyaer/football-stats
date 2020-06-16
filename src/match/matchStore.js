import Vue from 'vue';
import { each, orderBy, reduce, includes, filter } from 'lodash';
import { setMatches } from './matchMutationTypes';
import { getAllMatches, getMatchStats } from './matchGettersTypes';
import { getAllTeams } from '../team/teamGetterTypes';
export default {
  getters: {
    [getAllMatches]: state => (sortBy = ['name'], sortOrder = ['asc']) =>
      orderBy(state, sortBy, sortOrder),
    [getMatchStats]: (state, getters, rootState, rootGetters) => {
      const allTeams = rootGetters[getAllTeams]();
      const allMatches = getters[getAllMatches]();
      return reduce(
        allTeams,
        (result, team) => {
          const matchesByTeam = filter(allMatches, ({ team1, team2 }) =>
            includes([team1.key, team2.key], team.key)
          );

          const totalMatches = matchesByTeam.length || 0;
          let won = 0;
          let ties = 0;
          let lost = 0;
          let totalGoalsScored = 0;
          let totalGoalsConceded = 0;
          each(matchesByTeam, ({ score1, score2, team1, team2 }) => {
            if (score1 === score2) {
              ties += 1;
              if (includes([team1.key, team2.key], team.key))
                totalGoalsScored += score1;
            } else if (score1 > score2 && team1.key === team.key) {
              won += 1;
              totalGoalsScored += score1;
            } else if (score1 < score2 && team2.key === team.key) {
              won += 1;
              totalGoalsScored += score2;
            } else {
              lost += 1;
              if (team1.key === team.key) totalGoalsConceded += score1;
              if (team2.key === team.key) totalGoalsConceded += score2;
            }
          });

          result.push({
            name: team.code || team.name,
            totalMatches,
            won,
            lost,
            ties,
            totalGoalsScored,
            totalGoalsConceded
          });
          return result;
        },
        []
      );
    }
  },
  mutations: {
    [setMatches](state, matches) {
      each(matches, (match, key) => Vue.set(state, key, match));
    }
  }
};
