<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import {a} from 'params';
  export default {
    mounted() {
      console.log(a)
    }
  }
</script>
<style lang="less">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body, #app {
	width: 100%;
	height: 100%;
}
</style>
