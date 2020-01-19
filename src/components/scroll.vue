<template>
	<div class="scroll-wrap" ref=scrollWrap"">
		<div class="scroll-content">
			<solt></solt>
			<!-- 底部加载更多的提示 -->
			<div class="more-load"></div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props: {
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			
		},
		methods: {
			initScroll() {
				let config = {
					scrollX: false,
					scrollY: true,
					momentum: true,
					click: true,
					eventPassthrough: 'vertical'
				};
				if(this.pullUpLoad) {
					this.config.pullUpLoad = {
						threshold: 50
					};
				}
				this.scroll = new BSscroll(this.$refs.scrollWrap, config)
				
				if(this.pullUpLoad) {
					this.scroll.on('pullingUp', () => {
						this.$emit('load');
					})
				}
				
			},
			finishPullDown() {
				this.scroll && this.scroll.finishPullDown();
			},
			refresh() {
				this.scroll && this.scroll.refresh();
			}
		}
	}
</script>

<style>
</style>
