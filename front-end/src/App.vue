<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('KKK')">change name</button>
    <button @click="changeAge(30)">change name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    data(){
      return{
        name:'Hank' as string,
        age: 22 as number | string,
      }
    },
    methods:{
      changeName(name: string) {
        this.name = name
      },
      changeAge(age: number | string){
        this.age = age
      }
    }
  })
</script>

<style>

</style>
