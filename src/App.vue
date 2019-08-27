<template>
  <div id="app">
      <MultiSelect @selectedRes="handleSelectedRes" :origin-data="dateList"></MultiSelect>
  </div>
</template>

<script>
import MultiSelect from '@/component/multi-select/index.vue'
import { getDateList } from '@/axios'


export default {
  name: 'app',
  created () {
    getDateList().then(res => {
      this.dateList = res;
    })
  },
  data () {
    return {
      dateList: []
    }
  },
  methods: {
    handleSelectedRes(arr) {
      // console.log('handleSelectedRes arr =>',arr)
    }
  },
  components: {
    MultiSelect,
  },
}
</script>

<style>

</style>
