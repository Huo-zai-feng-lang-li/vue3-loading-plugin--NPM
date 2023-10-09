import { createApp } from "vue";

export default {
	loadingMap: new Map(),
	smallLoading: null,
	async install(app, options) {
		const loadingType = options
			? options.loadingType
			: Math.floor(Math.random() * 6) + 1;
		const loadingComponents = {
			1: () => import("./components/loading1.vue"),
			2: () => import("./components/loading2.vue"),
			3: () => import("./components/loading3.vue"),
			4: () => import("./components/loading4.vue"),
			5: () => import("./components/loading5.vue"),
			6: () => import("./components/loading6.vue"),
			7: () => import("./components/loading7.vue"),
		};

		if (!this.loadingMap.has(loadingType)) {
			const LoadingCom = await loadingComponents[loadingType]().catch(() =>
				import("./components/loading1.vue")
			);
			const customized = options ? options.customized : ""; // 定制颜色
			const instance = createApp(LoadingCom.default, customized);

			const div = document.createElement("div");
			document.body.appendChild(div);
			const Loading = instance.mount(div);
			this.loadingMap.set(loadingType, Loading);
		}

		app.config.globalProperties.$Loading = this.loadingMap.get(loadingType);

		if (!this.smallLoading) {
			const SmallLoadingCom = await import("./smallLoading.vue");
			const smallInstance = createApp(SmallLoadingCom.default);
			const div = document.createElement("div");
			document.body.appendChild(div);
			this.smallLoading = smallInstance.mount(div);
		}

		app.config.globalProperties.$smallLoading = this.smallLoading;
		app.config.globalProperties.$onProgress = this.onProgress;
	},
};
