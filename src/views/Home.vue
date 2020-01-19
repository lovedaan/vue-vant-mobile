<template>
  <div class="home">
    <van-button type="primary" @click="showPicker">主要按钮</van-button>
    <van-button type="primary" @click="showlist">34234234</van-button>
		<transition name="slide-fade">
			<div class="area-picker" v-if="isShow">
				<div class="picker">
					<van-area :area-list="areaList" @confirm="confirmPicker" @cancel="cancelPicker" />
				</div>
			</div>
		</transition>
		<img src="http://img3.doubanio.com/view/photo/l_ratio_poster/public/p2579512247.jpg" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import areaList from '@/utils/area.js'
import axios from 'axios'
export default {
  name: 'home',
  components: {},
	data() {
		return {
			areaList,
			areaCode: '',
			show: false,
			isList: false,
			isShow: false,
		}
	},
	mounted() {
		axios.get('/doubanApi/in_theaters', {
			params: {
			  apikey: '0b2bdeda43b5688921839c8ecb20399b',
			  start: 0,
			  count: 10
			}
		  }).then(res => {
			  console.log(res.data);
		  }).catch(err => {
			this.canShow = true;
			console.log(err)
		  })
	},
	methods: {
		animateShow() {
			this.show = !this.show;
		},
		showPicker() {
			this.isShow = true;
		},
		confirmPicker(res) {
			this.isShow = false;
			console.log(res);
		},
		showlist() {
			this.isList = true;
		},
		cancelPicker() {
			this.isShow = false;
		}
	}
}
</script>
<style lang="less">

	.home {
		.box {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 200px;
			height: 200px;
			background-color: red;
		}
	}
	.area-picker {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		&.slide-fade-enter-active,
		&.slide-fade-leave-active {
			transition: all 0.5s;
			.picker {
				transition: all 0.5s;
			}
		}
		&.slide-fade-enter,
		&.slide-fade-leave-to{
		    opacity:0;
				.picker {
					bottom: -300px;
				}
		}
		.picker {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			background-color: #fff;
		}
	}
</style>
