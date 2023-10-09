<template>
	<div class="loading" v-show="visible">
		<div class="loading-spinner">
			<div class="spinner-rotation"></div>
			<div class="loading-progress">{{ progress }}%</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "smallLoading",
	setup() {
		let visible = ref<boolean>(false);
		let progress = ref<number>(0);
		let showLoading = () => {
			visible.value = true;
		};

		let hideLoading = (timerHidden: boolean) => {
			// 解决loading200ms后关闭，如果多次快速调用接口，其接口设置loading不可见，但是loading还是会显示的问题
			// 原因：接口发起会触发加载loading，200ms没到第二个接口又发起了，导致loading设置关闭还是会显示
			// 200ms关闭loading是为了显示 100% 的进度条
			if (timerHidden) {
				visible.value = false;
				progress.value = 0;
			} else {
				setTimeout(() => {
					visible.value = false;
					progress.value = 0;
				}, 200);
			}
		};

		const onProgress = (p: number) => {
			progress.value = p;
		};
		return { visible, showLoading, hideLoading, onProgress, progress };
	},
});
</script>

<style scoped>
.loading {
	position: absolute;
	z-index: 9998;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 100%;
	height: 100%;
	background-color: rgb(255 255 255 / 50%);
	inset: 0;
}

.loading-spinner {
	width: 40px;
	height: 40px;
	position: relative;
}

.spinner-rotation {
	width: 100%;
	height: 100%;
	border: 2px solid #eee;
	border-top-color: var(--el-color-primary);
	border-radius: 50%;
	animation: spin 0.5s ease-in-out infinite;
}

.loading-progress {
	position: absolute;
	top: 53%;
	left: 52%;
	transform: translate(-50%, -50%);
	font-size: 12px;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
