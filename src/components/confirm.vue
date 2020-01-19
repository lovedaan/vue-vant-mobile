<template>
  <div class="my-confirm" v-if="show">
    <van-dialog
      title="标题"
      show-cancel-button
      v-model="lock"
      :before-close="beforeClose"
    >
      <div class="d-flex">
        <span class="text">1234</span>
        <button class="copy-btn">复制</button>
      </div>
    </van-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    name: '',
    data() {
      return {
        lock: true
      }
    },
    mounted() {
      
    },
    methods: {
      beforeClose(action, done) {
        this.$emit('close');
        done();
      }
    }
  }
</script>
<style>
.d-flex {
  display: flex;
}
</style>
