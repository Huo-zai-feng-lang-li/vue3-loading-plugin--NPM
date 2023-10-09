<template>
	<div id="loading" v-show="visible">
		<div class="loader-overlay"></div>
		<div class="loader-cogs">
			<div class="loader-cogs-top">
				<div class="top-part"></div>
				<div class="top-part"></div>
				<div class="top-part"></div>
				<div class="top-hole"></div>
			</div>
			<div class="loader-cogs-left">
				<div class="left-part"></div>
				<div class="left-part"></div>
				<div class="left-part"></div>
				<div class="left-hole"></div>
			</div>
			<div class="loader-cogs-bottom">
				<div class="bottom-part"></div>
				<div class="bottom-part"></div>
				<div class="bottom-part"></div>
				<div class="bottom-hole"></div>
			</div>
			<p>Loading ...</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLoading } from "./modus";
export default defineComponent({
	name: "Loading1",
	props: {
		top: {
			type: String,
			default: "#409eff",
		},
		left: {
			type: String,
			default: "#97ddff",
		},
		right: {
			type: String,
			default: "darkorange",
		},
	},
	setup(props) {
		const { visible, showLoading, hideLoading } = useLoading();
		return {
			visible,
			showLoading,
			hideLoading,
			top: props.top,
			left: props.left,
			right: props.right,
		};
	},
});
</script>

<style lang="scss" scoped>
#loading {
	position: absolute;
	inset: 0;
	z-index: 9999;
	margin: auto;

	.loader-overlay {
		position: absolute;
		inset: 0;
		z-index: -1;
		margin: auto;
		width: 150px;
		height: 150px;
		background: transparent;
		border-radius: 100%;
		box-shadow: 0 0 0 100vw rgb(255 255 255 / 67%),
			0 0 19px 0 rgb(0 0 0 / 16%) inset;
	}

	.loader-cogs {
		position: absolute;
		top: -120px !important;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		margin: auto;
		width: 100px;
		height: 100px;
	}

	.loader-cogs-top {
		position: relative;
		width: 100px;
		height: 100px;
		transform-origin: 50px 50px;
		animation: rotate 10s infinite linear;
	}

	.loader-cogs-top div:nth-of-type(1) {
		transform: rotate(30deg);
	}

	.loader-cogs-top div:nth-of-type(2) {
		transform: rotate(60deg);
	}

	.loader-cogs-top div:nth-of-type(3) {
		transform: rotate(90deg);
	}

	.loader-cogs-top div.top-part {
		position: absolute;
		width: 100px;
		height: 100px;
		background: v-bind(top);
		border-radius: 10px;
	}

	.loader-cogs-top div.top-hole {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 50px;
		height: 50px;
		background: white;
		border-radius: 100%;
	}

	.loader-cogs-left {
		position: relative;
		top: 28px;
		left: -24px;
		width: 80px;
		height: 80px;
		transform: rotate(16deg);
		transform-origin: 40px 40px;
		animation: rotate-left 10s 0.1s infinite reverse linear;
	}

	.loader-cogs-left div:nth-of-type(1) {
		transform: rotate(30deg);
	}

	.loader-cogs-left div:nth-of-type(2) {
		transform: rotate(60deg);
	}

	.loader-cogs-left div:nth-of-type(3) {
		transform: rotate(90deg);
	}

	.loader-cogs-left div.left-part {
		position: absolute;
		width: 80px;
		height: 80px;
		background: v-bind(left);
		border-radius: 6px;
	}

	.loader-cogs-left div.left-hole {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 40px;
		height: 40px;
		background: white;
		border-radius: 100%;
	}

	.loader-cogs-bottom {
		position: relative;
		top: -65px;
		left: 79px;
		width: 60px;
		height: 60px;
		transform-origin: 30px 30px;
		animation: rotate-left 10.2s 0.4s infinite linear;
		transform: rotate(4deg);
	}

	.loader-cogs-bottom div:nth-of-type(1) {
		transform: rotate(30deg);
	}

	.loader-cogs-bottom div:nth-of-type(2) {
		transform: rotate(60deg);
	}

	.loader-cogs-bottom div:nth-of-type(3) {
		transform: rotate(90deg);
	}

	.loader-cogs-bottom div.bottom-part {
		position: absolute;
		width: 60px;
		height: 60px;
		background: v-bind(right);
		border-radius: 5px;
	}

	.loader-cogs-bottom div.bottom-hole {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 30px;
		height: 30px;
		background: white;
		border-radius: 100%;
	}

	/* Animations */
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes rotate-left {
		from {
			transform: rotate(16deg);
		}

		to {
			transform: rotate(376deg);
		}
	}

	@keyframes rotate-left {
		from {
			transform: rotate(16deg);
		}

		to {
			transform: rotate(376deg);
		}
	}

	@keyframes rotate-right {
		from {
			transform: rotate(4deg);
		}

		to {
			transform: rotate(364deg);
		}
	}

	@keyframes rotate-right {
		from {
			transform: rotate(4deg);
		}

		to {
			transform: rotate(364deg);
		}
	}
}
</style>
