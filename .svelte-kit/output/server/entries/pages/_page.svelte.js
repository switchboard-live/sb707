import "clsx";
import { a1 as attributes, a2 as clsx, a3 as ensure_array_like, a4 as element, a5 as spread_props, e as escape_html } from "../../chunks/index.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="bg-white"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10"><div class="hero-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 min-h-0 lg:min-h-[480px]"><a href="/" class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 flex flex-col items-center justify-center min-h-[100px] lg:min-h-0"><img src="/icon.png" alt="Switchboard Live" class="h-10 w-auto mb-2"/> <span class="text-[#1a1a1a] font-semibold text-base">Switchboard Live</span></a> <button class="rounded-2xl bg-[#2E8B4F] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-2 relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"><span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span> <h3 class="font-bold text-base pr-9 leading-snug">Why SB 707 Matters for City Managers</h3></button> <button class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors lg:row-span-2 relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"><span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">+</span> <h3 class="font-bold text-base pr-9 leading-snug">Suggested Tech Stack for Compliance</h3></button> <button class="rounded-2xl bg-[#7DD321] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"><span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span> <h3 class="font-bold text-base pr-9 leading-snug">What to Look for in a Tech Partner</h3></button> <button class="rounded-2xl bg-[#7DD321] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-3 flex flex-col justify-between relative lg:col-start-1 lg:row-start-2 min-h-[140px] sm:min-h-[160px] lg:min-h-0"><h2 class="text-lg sm:text-xl lg:text-2xl font-bold leading-tight pr-10 lg:pr-12">SB 707 COMPLIANCE: A LEADERSHIP IMPERATIVE FOR CITY MANAGERS</h2> <span class="self-end w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7DD321] text-xl font-bold">→</span></button> <button class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors lg:row-span-2 relative lg:col-start-2 lg:row-start-3 min-h-[100px] sm:min-h-[120px] lg:min-h-0"><span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold">+</span> <h3 class="font-bold text-base pr-9 leading-snug">The Seven Core Requirements for Compliance</h3></button> <button class="rounded-2xl bg-[#1D4D6B] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-2 relative lg:col-start-3 lg:row-start-3 min-h-[100px] sm:min-h-[120px] lg:min-h-0"><span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span> <h3 class="font-bold text-base pr-9 leading-snug">Common Pitfalls to Avoid</h3></button> <button class="rounded-2xl relative overflow-hidden lg:row-span-3 lg:col-start-4 lg:row-start-2 min-h-[140px] sm:min-h-[160px] lg:min-h-0"><img src="https://images.pexels.com/photos/7710141/pexels-photo-7710141.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="Business meeting" class="absolute inset-0 w-full h-full object-cover"/> <div class="absolute inset-x-0 bottom-0 top-1/2 bg-[#7DD321]/85"></div> <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold z-10">+</span> <div class="absolute bottom-0 left-0 right-0 p-6 z-10"><h3 class="font-bold text-base text-white leading-snug">Ready to lead your city into compliance?</h3></div></button></div></div> <div id="why" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"><div class="aspect-4/3 bg-neutral-200 rounded-2xl overflow-hidden"><img src="https://images.pexels.com/photos/6476577/pexels-photo-6476577.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="Professional presenting" class="w-full h-full object-cover"/></div> <div><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4 sm:mb-6">Why SB707 Matters for City Managers</h2> <p class="text-base sm:text-lg text-[#1a1a1a]/85 leading-relaxed mb-4 sm:mb-6"><strong class="text-[#1a1a1a]"><a href="https://legiscan.com/CA/text/SB707/2025" class="text-green-600 underline">SB 707</a> is the most significant modernization of California's Ralph M. Brown Act since 1953.</strong> Beginning July 1, 2026, cities with populations over 30,000 (and certain counties and special districts) must adopt new accessibility and participation standards.</p> <p class="text-base sm:text-lg text-[#1a1a1a]/85 leading-relaxed">For City Managers, more than the technology aspect, this is a challenge of <strong>governance, risk management, and public trust</strong>. Non-compliance can invalidate council actions, expose your city to lawsuits, and trigger ADA enforcement from the Department of Justice.</p></div></div></div></section>`);
  });
}
/**
 * @license @lucide/svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license @lucide/svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      name,
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth = false,
      iconNode = [],
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...!children && !hasA11yProp(props) && { "aria-hidden": "true" },
        ...props,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(["lucide-icon lucide", name && `lucide-${name}`, props.class])
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]-->`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></svg>`);
  });
}
function Closed_caption($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M10 9.17a3 3 0 1 0 0 5.66" }],
      ["path", { "d": "M17 9.17a3 3 0 1 0 0 5.66" }],
      [
        "rect",
        { "x": "2", "y": "5", "width": "20", "height": "14", "rx": "2" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "closed-caption" },
      /**
       * @component @name ClosedCaption
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgOS4xN2EzIDMgMCAxIDAgMCA1LjY2IiAvPgogIDxwYXRoIGQ9Ik0xNyA5LjE3YTMgMyAwIDEgMCAwIDUuNjYiIC8+CiAgPHJlY3QgeD0iMiIgeT0iNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/closed-caption
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Globe($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      [
        "path",
        { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }
      ],
      ["path", { "d": "M2 12h20" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "globe" },
      /**
       * @component @name Globe
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIgLz4KICA8cGF0aCBkPSJNMiAxMmgyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/globe
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Languages($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m5 8 6 6" }],
      ["path", { "d": "m4 14 6-6 2-3" }],
      ["path", { "d": "M2 5h12" }],
      ["path", { "d": "M7 2h1" }],
      ["path", { "d": "m22 22-5-10-5 10" }],
      ["path", { "d": "M14 18h6" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "languages" },
      /**
       * @component @name Languages
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSA4IDYgNiIgLz4KICA8cGF0aCBkPSJtNCAxNCA2LTYgMi0zIiAvPgogIDxwYXRoIGQ9Ik0yIDVoMTIiIC8+CiAgPHBhdGggZD0iTTcgMmgxIiAvPgogIDxwYXRoIGQ9Im0yMiAyMi01LTEwLTUgMTAiIC8+CiAgPHBhdGggZD0iTTE0IDE4aDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/languages
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Scale($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M12 3v18" }],
      ["path", { "d": "m19 8 3 8a5 5 0 0 1-6 0zV7" }],
      ["path", { "d": "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }],
      ["path", { "d": "m5 8 3 8a5 5 0 0 1-6 0zV7" }],
      ["path", { "d": "M7 21h10" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "scale" },
      /**
       * @component @name Scale
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3YxOCIgLz4KICA8cGF0aCBkPSJtMTkgOCAzIDhhNSA1IDAgMCAxLTYgMHpWNyIgLz4KICA8cGF0aCBkPSJNMyA3aDFhMTcgMTcgMCAwIDAgOC0yIDE3IDE3IDAgMCAwIDggMmgxIiAvPgogIDxwYXRoIGQ9Im01IDggMyA4YTUgNSAwIDAgMS02IDB6VjciIC8+CiAgPHBhdGggZD0iTTcgMjFoMTAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/scale
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Triangle_alert($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        }
      ],
      ["path", { "d": "M12 9v4" }],
      ["path", { "d": "M12 17h.01" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "triangle-alert" },
      /**
       * @component @name TriangleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEuNzMgMTgtOC0xNGEyIDIgMCAwIDAtMy40OCAwbC04IDE0QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjczLTMiIC8+CiAgPHBhdGggZD0iTTEyIDl2NCIgLz4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/triangle-alert
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Users_round($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M18 21a8 8 0 0 0-16 0" }],
      ["circle", { "cx": "10", "cy": "8", "r": "5" }],
      ["path", { "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "users-round" },
      /**
       * @component @name UsersRound
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMjFhOCA4IDAgMCAwLTE2IDAiIC8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSI1IiAvPgogIDxwYXRoIGQ9Ik0yMiAyMGMwLTMuMzctMi02LjUtNC04YTUgNSAwIDAgMC0uNDUtOC4zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/users-round
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Video($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
        }
      ],
      [
        "rect",
        { "x": "2", "y": "6", "width": "14", "height": "12", "rx": "2" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "video" },
      /**
       * @component @name Video
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTMgNS4yMjMgMy40ODJhLjUuNSAwIDAgMCAuNzc3LS40MTZWNy44N2EuNS41IDAgMCAwLS43NTItLjQzMkwxNiAxMC41IiAvPgogIDxyZWN0IHg9IjIiIHk9IjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMiIgcng9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/video
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function ComplianceChecklist($$renderer) {
  const icons = [
    Video,
    Scale,
    Closed_caption,
    Languages,
    Triangle_alert,
    Globe,
    Users_round
  ];
  const requirements = [
    {
      title: "Two-way remote participation",
      shortDesc: "Video & phone access",
      fullDesc: "Every meeting must allow residents to both observe and participate remotely. This means adopting a platform that supports video participation and a dedicated phone line for those without internet access. It ensures equity across digital divides and guarantees all voices can be heard."
    },
    {
      title: "Comment parity",
      shortDesc: "Equal treatment for all",
      fullDesc: "Remote speakers must be treated the same as in-person speakers. If in-person comments are three minutes, remote comments must also be three minutes. City Managers must ensure policies prevent pre-registration barriers that disadvantage remote participants."
    },
    {
      title: "Real-time captions",
      shortDesc: "WCAG 2.1 AA compliant",
      fullDesc: "Automated captions must be visible during live meetings. This is not optional—it's a direct ADA compliance requirement. Captions must meet accessibility standards (WCAG 2.1 AA) and be available across devices to serve residents who are deaf or hard of hearing."
    },
    {
      title: "Language access",
      shortDesc: "Translation for 20%+ LEP",
      fullDesc: "Agendas and participation instructions must be translated into applicable languages where 20%+ of residents have limited English proficiency. Managers must oversee workflows to ensure translations are timely, accurate, and accessible, leveraging digital translation tools where appropriate."
    },
    {
      title: "Service disruption protocol",
      shortDesc: "Written policy required",
      fullDesc: "If livestream or phone access fails, meetings must recess for up to one hour while restoration is attempted. A written, council-adopted policy is required before July 1, 2026. This ensures transparency and protects the integrity of council actions."
    },
    {
      title: "Public meeting webpage",
      shortDesc: "One-click from homepage",
      fullDesc: "Cities must maintain a dedicated, accessible webpage with agendas, instructions, and participation links. It must be one click from the homepage and translated into applicable languages. This page becomes the central hub for residents seeking to engage."
    },
    {
      title: "Outreach to underrepresented",
      shortDesc: "Build inclusive participation",
      fullDesc: "Managers must ensure reasonable efforts to notify civic groups, ethnic media, and community organizations about meetings. This builds trust, demonstrates inclusivity, and ensures broader participation from historically underrepresented voices."
    }
  ];
  $$renderer.push(`<section id="requirements" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#EAF8E2]"><div class="max-w-6xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Two</span> <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-4">The Seven Core Requirements</h2> <p class="text-[#141E22]/70 text-base sm:text-lg mb-8 sm:mb-12">From a Manager's Lens — Click each block to learn more</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"><!--[-->`);
  const each_array = ensure_array_like(requirements);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let req = each_array[i];
    $$renderer.push(`<button class="bg-white hover:shadow-lg rounded-xl p-6 text-left transition-all duration-300 border-2 border-transparent hover:border-[#66CC33]"><div class="w-12 h-12 rounded-lg bg-[#66CC33]/20 flex items-center justify-center mb-4">`);
    if (icons[i]) {
      $$renderer.push("<!--[-->");
      icons[i]($$renderer, { class: "w-6 h-6 text-[#66CC33]" });
      $$renderer.push("<!--]-->");
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push("<!--]-->");
    }
    $$renderer.push(`</div> <span class="text-[#66CC33] font-bold text-2xl">0${escape_html(i + 1)}</span> <h3 class="font-bold text-[#141E22] mt-3 mb-2">${escape_html(req.title)}</h3> <p class="text-sm text-[#141E22]/60">${escape_html(req.shortDesc)}</p> <span class="inline-block mt-4 text-[#66CC33] text-sm font-medium">Click for details →</span></button>`);
  }
  $$renderer.push(`<!--]--></div></div> `);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></section>`);
}
function SolutionPreview($$renderer) {
  $$renderer.push(`<section id="tech-stack" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"><div class="max-w-5xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Three</span> <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-8 sm:mb-12">Suggested Tech Stack for Compliance</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"><div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📡</span></div> <h3 class="font-bold text-[#141E22] mb-2">Multistreaming Platform</h3> <p class="text-sm text-[#141E22]/70">Enables two-way participation, captions, and redundancy across YouTube, Facebook, and municipal sites. Ensures accessibility and resilience.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">☎️</span></div> <h3 class="font-bold text-[#141E22] mb-2">Telephony Integration</h3> <p class="text-sm text-[#141E22]/70">Dedicated dial-in line with auto-connect to live meetings, ensuring residents without internet can still participate.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📋</span></div> <h3 class="font-bold text-[#141E22] mb-2">Agenda Management</h3> <p class="text-sm text-[#141E22]/70">Integrates with translation workflows and meeting webpages, streamlining clerk operations.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">♿</span></div> <h3 class="font-bold text-[#141E22] mb-2">Accessibility Tools</h3> <p class="text-sm text-[#141E22]/70">Automated captioning, WCAG-compliant webpage templates, and screen-reader compatibility to meet ADA standards.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">🗄️</span></div> <h3 class="font-bold text-[#141E22] mb-2">Archiving &amp; Records</h3> <p class="text-sm text-[#141E22]/70">Ensures livestreams and metadata are preserved for FOIA and public records compliance.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📊</span></div> <h3 class="font-bold text-[#141E22] mb-2">Analytics Dashboard</h3> <p class="text-sm text-[#141E22]/70">Tracks participation, language requests, and disruption incidents for reporting to council and continuous improvement.</p></div></div></div></section>`);
}
function FAQ($$renderer) {
  const pitfalls = [
    {
      title: "Assuming Zoom/Webex is sufficient",
      description: "These platforms lack integrated compliance features like captioning and phone backup."
    },
    {
      title: "Forgetting the phone backup requirement",
      description: "Even perfect video streaming does not meet SB 707 without a dial-in option."
    },
    {
      title: "Delaying service disruption policy adoption",
      description: "Without a written, adopted policy, compliance fails even if technology works."
    },
    {
      title: "Treating SB 707 as an IT project only",
      description: "Compliance requires cross-departmental leadership—clerks, attorneys, IT, and communications must all be involved."
    }
  ];
  $$renderer.push(`<section id="pitfalls" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#EAF8E2]"><div class="max-w-4xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Four</span> <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-8 sm:mb-12">Common Pitfalls to Avoid</h2> <div class="space-y-4 sm:space-y-6"><!--[-->`);
  const each_array = ensure_array_like(pitfalls);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let pitfall = each_array[i];
    $$renderer.push(`<div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border-l-4 border-red-500"><div class="flex items-start gap-4"><span class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</span> <div><h3 class="font-bold text-[#141E22] text-lg mb-2">${escape_html(pitfall.title)}</h3> <p class="text-[#141E22]/70">${escape_html(pitfall.description)}</p></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function DownloadSection($$renderer) {
  $$renderer.push(`<section id="partner" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#114B5F] to-[#141E22] text-white"><div class="max-w-4xl mx-auto text-center"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Five</span> <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">What to Look for In a Tech Partner</h2> <p class="text-[#EAF8E2] text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">Choosing the right technology is imperative to ensure your city has a system that is reliable, accessible, and future-proof. City Managers need partners who understand compliance requirements, accessibility standards, and the realities of running public meetings with diverse communities.</p> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 text-left max-w-3xl mx-auto"><p class="text-[#EAF8E2] mb-6">Our <strong class="text-white">SB 707 Tech Partner Evaluation Guide</strong> outlines the six qualities every City Manager should demand from a vendor:</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"><div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Compliance-first design</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Accessibility expertise</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Reliability and redundancy</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Ease of use for staff</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Audit and reporting tools</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Community engagement support</span></div></div></div> <button class="bg-[#66CC33] hover:bg-[#379D04] text-[#141E22] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition inline-flex items-center gap-2 w-full sm:w-auto justify-center">Download the SB 707 Tech Partner Evaluation Guide <span>→</span></button></div></section>`);
}
function ContactCTA($$renderer) {
  $$renderer.push(`<section id="contact" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"><div class="max-w-4xl mx-auto text-center"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Six</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-4">Ready to lead your city into compliance?</h2> <p class="text-[#141E22]/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">Switchboard Live is helping public sector organizations and City Managers navigate SB 707 technology preparedness. We provide integrated livestreaming systems designed to meet accessibility, language, and participation requirements—helping cities modernize their civic infrastructure while reducing risk.</p> <p class="text-[#141E22]/70 text-base sm:text-lg mb-6 sm:mb-8">Our platform makes it easy for government teams to connect with constituents across multiple channels and we're ready to assist City Managers in building connected, resilient systems that will be fully prepared by the <strong class="text-[#141E22]">July 1, 2026</strong> deadline.</p> <a href="https://switchboard.live/contact" class="inline-flex items-center justify-center gap-2 bg-[#66CC33] hover:bg-[#379D04] text-[#141E22] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition w-full sm:w-auto">GET IN TOUCH <span>→</span></a> <p class="text-sm text-[#141E22]/60 mt-4">Talk with our team about how we can help your city meet SB 707 requirements and strengthen public trust.</p></div></section>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="bg-[#141E22] text-[#EAF8E2]/70 py-8 sm:py-12 px-4 sm:px-6"><div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex items-center gap-4"><span class="text-[#EAF8E2] font-semibold">Powered by</span> <a href="https://switchboard.live" target="_blank" class="hover:opacity-80 transition"><img src="/logo.png" alt="Switchboard Live" class="h-8 w-auto"/></a></div> <div class="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm"><a href="https://switchboard.live/privacy" class="hover:text-[#66CC33] transition">Privacy</a> <a href="https://switchboard.live/terms" class="hover:text-[#66CC33] transition">Terms</a> <a href="https://switchboard.live/contact" class="hover:text-[#66CC33] transition">Contact</a></div> <p class="text-sm">© 2025 Switchboard Live. All rights reserved.</p></div></footer>`);
}
function _page($$renderer) {
  $$renderer.push(`<main class="min-h-screen bg-white overflow-x-hidden">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  ComplianceChecklist($$renderer);
  $$renderer.push(`<!----> `);
  SolutionPreview($$renderer);
  $$renderer.push(`<!----> `);
  FAQ($$renderer);
  $$renderer.push(`<!----> `);
  DownloadSection($$renderer);
  $$renderer.push(`<!----> `);
  ContactCTA($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
