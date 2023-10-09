<template>
	<div class="wrap" v-show="visible">
		<div class="bar">
			<div class="ball"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLoading } from "./modus";

export default defineComponent({
	name: "Loading4",
	props: {
		ball: {
			type: String,
			default: "#212121",
		},
		dot: {
			type: String,
			default: "#fff",
		},
		bar: {
			type: String,
			default: "#ffdaaf",
		},
	},
	setup(props) {
		const { visible, showLoading, hideLoading } = useLoading();
		return {
			visible,
			showLoading,
			hideLoading,
			ball: props.ball,
			dot: props.dot,
			bar: props.bar,
		};
	},
});
</script>

<style scoped>
.wrap {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100vw;
	height: 100vh;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
}

.ball {
	position: relative;
	bottom: 50px;
	left: calc(100% - 20px);
	width: 50px;
	height: 50px;
	background: v-bind(ball);
	border-radius: 50%;
	animation: ball-move8234 2s ease-in-out infinite alternate;
}

.ball::after {
	position: absolute;
	content: "";
	top: 25px;
	right: 5px;
	width: 5px;
	height: 5px;
	background: v-bind(dot);
	border-radius: 50%;
}

.bar {
	width: 200px;
	height: 12.5px;
	background: v-bind(bar);
	border-radius: 30px;
	transform: rotate(-15deg);
	animation: up-down6123 2s ease-in-out infinite alternate;
}

@keyframes up-down6123 {
	from {
		transform: rotate(-15deg);
	}

	to {
		transform: rotate(15deg);
	}
}

@keyframes ball-move8234 {
	from {
		left: calc(100% - 40px);
		transform: rotate(360deg);
	}

	to {
		left: calc(0% - 20px);
		transform: rotate(0deg);
	}
}
</style>
