

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DNy5kl24.js","_app/immutable/chunks/DSedc9SB.js","_app/immutable/chunks/DcJ_V0cX.js"];
export const stylesheets = ["_app/immutable/assets/0.Dj1UPMxW.css"];
export const fonts = [];
