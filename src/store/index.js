import Vue from 'vue';
import Vuex from 'vuex';
import { LOADING_STORE_KEY } from '../loading/loadingEnum';
import loadingStore from '../loading/loadingStore';
import { TEAM_STORE_KEY } from '../team/teamEnum';
import teamStore from '../team/teamStore';
import { MATCH_STORE_KEY } from '../match/matchEnum';
import matchStore from '../match/matchStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [LOADING_STORE_KEY]: loadingStore,
    [TEAM_STORE_KEY]: teamStore,
    [MATCH_STORE_KEY]: matchStore
  }
});
