

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.WkLjHbV7.js","_app/immutable/chunks/DSedc9SB.js","_app/immutable/chunks/DcJ_V0cX.js","_app/immutable/chunks/BkE2BSnv.js"];
export const stylesheets = [];
export const fonts = [];
