export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["icon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Ceh8rwrr.js",app:"_app/immutable/entry/app.BWMogF44.js",imports:["_app/immutable/entry/start.Ceh8rwrr.js","_app/immutable/chunks/B_fih-Hb.js","_app/immutable/chunks/CyKuShM8.js","_app/immutable/chunks/DSedc9SB.js","_app/immutable/chunks/BkE2BSnv.js","_app/immutable/entry/app.BWMogF44.js","_app/immutable/chunks/CyKuShM8.js","_app/immutable/chunks/DSedc9SB.js","_app/immutable/chunks/BkE2BSnv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
