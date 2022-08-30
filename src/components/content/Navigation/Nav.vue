<!--  -->
<template>
  <div class="nav">
  
    <slot name="box"></slot>
  </div>
</template>

<script>
// import 
export default {
    name:'Nav',
  data () {
    return {
    };
  },


  methods: {}
}

</script>
<style scoped>
.nav {
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height: 100px;
    width: 100%;

    background-color: red;
}
</style>