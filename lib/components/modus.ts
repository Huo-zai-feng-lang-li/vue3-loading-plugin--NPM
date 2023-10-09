import { ref } from "vue";

export function useLoading() {
	const visible = ref(false);

	const showLoading = () => {
		visible.value = true;
	};

	let hideLoading = (clone = 300) => {
		setTimeout(() => {
			visible.value = false;
		}, clone);
	};

	return { visible, showLoading, hideLoading };
}
