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
		client: {start:"_app/immutable/entry/start.3ZJbRJrJ.js",app:"_app/immutable/entry/app.Jo1xu_Pq.js",imports:["_app/immutable/entry/start.3ZJbRJrJ.js","_app/immutable/chunks/CMoGMHaY.js","_app/immutable/chunks/BBfL9I33.js","_app/immutable/chunks/DZc3-1OK.js","_app/immutable/chunks/CwRsxE-P.js","_app/immutable/entry/app.Jo1xu_Pq.js","_app/immutable/chunks/BBfL9I33.js","_app/immutable/chunks/DZc3-1OK.js","_app/immutable/chunks/CwRsxE-P.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
