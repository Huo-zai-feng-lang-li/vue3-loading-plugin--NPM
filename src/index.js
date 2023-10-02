import { createApp } from "vue";
import Loading from "./loading.vue";
import SmallLoading from "./smallLoading.vue";

export default {
	Loading: null,
	smallLoading: null,
	install(app) {
		if (this.Loading) {
			app.config.globalProperties.$Loading = this.Loading;
			return;
		}
		const instance = createApp(Loading);
		const div = document.createElement("div");
		const body = document.body;
		body.appendChild(div);
		this.Loading = instance.mount(div);

		if (this.smallLoading) {
			app.config.globalProperties.$smallLoading = this.smallLoading;
			return;
		}
		const smallInstance = createApp(SmallLoading);
		const smallDiv = document.createElement("div");
		body.appendChild(smallDiv);
		this.smallLoading = smallInstance.mount(smallDiv);

		app.config.globalProperties.$Loading = this.Loading;
		app.config.globalProperties.$smallLoading = this.smallLoading;
		app.config.globalProperties.$onProgress = this.onProgress;
	},
};
