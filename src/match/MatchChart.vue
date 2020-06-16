<script>
import { Bubble } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import { map } from 'lodash';
import { getMatchStats } from '../match/matchGettersTypes';

export default {
  extends: Bubble,
  mounted() {
    this.renderChart(this.dataCollection, this.options);
  },
  computed: {
    ...mapGetters({
      getMatchStats
    }),
    matchStats() {
      return this.getMatchStats;
    },
    dataCollection() {
      const datasets = map(
        this.matchStats,
        ({ lost, won, totalGoalsScored, name }) => ({
          label: name,
          backgroundColor: this.getRandomColor(),
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: this.getRandomColor(),
          data: [
            {
              x: lost,
              y: won,
              r: totalGoalsScored
            }
          ]
        })
      );

      return {
        labels: ['Matches'],
        datasets
      };
    },
    options() {
      return {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      };
    }
  },
  methods: {
    getRandomColor() {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomHex}`;
    }
  }
};
</script>
