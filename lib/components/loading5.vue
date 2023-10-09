<template>
	<div class="loader-overlay" v-show="visible"></div>
	<div class="wrap" v-show="visible">
		<div class="bar">
			<div class="ball"></div>
		</div>
	</div>
	<div class="wrap" v-show="visible">
		<div class="loader">
			<div class="box1"></div>
			<div class="box2"></div>
			<div class="box3"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLoading } from "./modus";

export default defineComponent({
	name: "Loading5",
	props: {
		color: {
			type: String,
			default: "#212121",
		},
		mask: {
			type: String,
			default: "rgb(255 255 255 / 67%)",
		},
	},

	setup(props) {
		const { visible, showLoading, hideLoading } = useLoading();
		return {
			visible,
			showLoading,
			hideLoading,
			color: props.color,
			mask: props.mask,
		};
	},
});
</script>

<style scoped>
.loader-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: v-bind(mask);
	z-index: 9998;
}
.wrap {
	position: fixed;
	z-index: 9999;
	top: 50%;
	left: 50%;
	width: 100vw;
	height: 100vh;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
}

.loader {
	width: 112px;
	height: 112px;
}

.box1,
.box2,
.box3 {
	border: 16px solid v-bind(color);
	box-sizing: border-box;
	position: absolute;
	display: block;
}

.box1 {
	width: 112px;
	height: 48px;
	margin-top: 64px;
	margin-left: 0px;
	animation: abox1 4s 0.1s forwards ease-in-out infinite;
}

.box2 {
	width: 48px;
	height: 48px;
	margin-top: 0px;
	margin-left: 0px;
	animation: abox2 4s 0.1s forwards ease-in-out infinite;
}

.box3 {
	width: 48px;
	height: 48px;
	margin-top: 0px;
	margin-left: 64px;
	animation: abox3 4s 0.1s forwards ease-in-out infinite;
}

@keyframes abox1 {
	0% {
		width: 112px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	12.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	25% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	37.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	50% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	62.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}

	75% {
		width: 48px;
		height: 112px;
		margin-top: 0px;
		margin-left: 0px;
	}

	87.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	100% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}
}

@keyframes abox2 {
	0% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	12.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	25% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	37.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	50% {
		width: 112px;
		height: 48px;
		margin-top: 0px;
		margin-left: 0px;
	}

	62.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}

	75% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}

	87.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}

	100% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}
}

@keyframes abox3 {
	0% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}

	12.5% {
		width: 48px;
		height: 48px;
		margin-top: 0px;
		margin-left: 64px;
	}

	25% {
		width: 48px;
		height: 112px;
		margin-top: 0px;
		margin-left: 64px;
	}

	37.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 64px;
	}

	50% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 64px;
	}

	62.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 64px;
	}

	75% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 64px;
	}

	87.5% {
		width: 48px;
		height: 48px;
		margin-top: 64px;
		margin-left: 64px;
	}

	100% {
		width: 112px;
		height: 48px;
		margin-top: 64px;
		margin-left: 0px;
	}
}
</style>
