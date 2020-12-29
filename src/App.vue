<template>
  <div id="app">
    <Sidebar />
    <Navbar />
    <FixedBottomBar />

    hello
    <button class="btn btn-primary" @click="changeDir"> Change Direction </button>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import FixedBottomBar from '@/components/fixedBottomBar'

export default {
  name: 'App',
  components:{
    FixedBottomBar,
    Sidebar,
    Navbar
  },
  data:() => ({
      active: 'guide'
    }),
  methods:{
    changeDir(){
      this.$store.commit('changeDirection');
    }
  }
}
</script>

<style>

</style>
