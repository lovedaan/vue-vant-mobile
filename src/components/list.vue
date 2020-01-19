<template>
  <div class="list">
    <van-button type="primary" @click="showConfirm">显示弹窗</van-button>
    <ConfirmView :show="show" @close="handleClose" />
  </div>
</template>
<script>
  import ConfirmView from './confirm.vue';
  export default {
    name: '',
    components: {
      ConfirmView,
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      showConfirm() {
        this.show = true;
      },
      handleClose() {
        this.show = false;
      }
    }
  }
</script>
<style>

</style>