<template>
	<div class="loader-overlay" v-show="visible"></div>
	<div class="wrap" v-show="visible">
		<div class="bar">
			<div class="ball"></div>
		</div>
	</div>
	<div class="wrap" v-show="visible">
		<div class="loader">
			<div data-glitch="Loading..." class="glitch">Loading...</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLoading } from "./modus";

export default defineComponent({
	name: "Loading7",
	props: {
		color: {
			type: String,
			default: "#150ba2",
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

.ball {
	position: relative;
	bottom: 50px;
	left: calc(100% - 20px);
	width: 50px;
	height: 50px;
	background: #000;
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
	background: #fff;
	border-radius: 50%;
}

.bar {
	width: 200px;
	height: 12.5px;
	background: #ffdaaf;
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

.glitch {
	position: relative;
	font-size: 25px;
	font-weight: 700;
	line-height: 1.2;
	color: v-bind(color);
	letter-spacing: 5px;
	z-index: 1;
	animation: shift 1s ease-in-out infinite alternate;
}

.glitch:before,
.glitch:after {
	display: block;
	content: attr(data-glitch);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.8;
}

.glitch:before {
	animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
	color: #8b00ff;
	z-index: -1;
}

.glitch:after {
	animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
		infinite;
	color: #00e571;
	z-index: -2;
}

@keyframes glitch {
	0% {
		transform: translate(0);
	}

	20% {
		transform: translate(-3px, 3px);
	}

	40% {
		transform: translate(-3px, -3px);
	}

	60% {
		transform: translate(3px, 3px);
	}

	80% {
		transform: translate(3px, -3px);
	}

	to {
		transform: translate(0);
	}
}

@keyframes shift {
	0%,
	40%,
	44%,
	58%,
	61%,
	65%,
	69%,
	73%,
	100% {
		transform: skewX(0deg);
	}

	41% {
		transform: skewX(10deg);
	}

	42% {
		transform: skewX(-10deg);
	}

	59% {
		transform: skewX(40deg) skewY(10deg);
	}

	60% {
		transform: skewX(-40deg) skewY(-10deg);
	}

	63% {
		transform: skewX(10deg) skewY(-5deg);
	}

	70% {
		transform: skewX(-50deg) skewY(-20deg);
	}

	71% {
		transform: skewX(10deg) skewY(-10deg);
	}
}
</style>
