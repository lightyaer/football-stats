import Vue from 'vue';
import { each, castArray, orderBy } from 'lodash';
import { getAllTeams, getTeam } from './teamGetterTypes';
import { setTeams } from './teamMutationsTypes';

export default {
  getters: {
    [getAllTeams]: state => (sortBy = ['key'], sortOrder = 'asc') =>
      orderBy(state, sortBy, sortOrder),
    [getTeam]: state => key => state[key]
  },
  mutations: {
    [setTeams](state, teams) {
      each(castArray(teams), team => Vue.set(state, team.key, team));
    }
  }
};
