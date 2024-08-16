<template>
  <div class="app">
    <p>{{ jobs[0].id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job';

  export default defineComponent({
    setup(){
      const jobs = ref<Job[]>([
        {title:'Boss', location:'TW', salary:60000, id:'007'}
      ])
      return {jobs}
    },
    methods:{
      
    }
  })
</script>

<style>

</style>
