<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            data: [40, 20, 12, 40, 20, 12, 40, 20, 12, 40, 20, 12],
            backgroundColor: ['rgba(256, 99, 132, 0.2)', 'rgba(35, 49, 35, 0.5)', 'rgba(221, 14, 14, 0.3)']
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>
