<template>
  <div id="app">
      <span v-for="item in components" :key="item.id">
        {{item.name}}
      </span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      components: [
        {
          id: 1,
          name: '多选器'
        }
      ]
    }
  }
}
</script>

<style>

</style>
