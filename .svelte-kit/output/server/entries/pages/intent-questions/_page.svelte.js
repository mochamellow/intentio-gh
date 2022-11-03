import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, B as Banner, F as Footer } from "../../../chunks/Footer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"SofiaProSemiBold";font-style:normal;font-weight:normal;src:local("SofiaProSemiBold"), url(./fonts/SofiaProSemiBold.otf) format("otf")}.center.svelte-w1ksqq.svelte-w1ksqq{margin-top:5rem;text-align:center;align-items:center;margin-bottom:1.5rem}.center.svelte-w1ksqq .puzzle.svelte-w1ksqq{width:2rem;height:2rem;margin:auto}.center.svelte-w1ksqq h1.svelte-w1ksqq{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:700;font-size:32px}p.svelte-w1ksqq.svelte-w1ksqq{max-width:568px;font-size:1.125rem;font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:1.6rem;text-align:center;margin-inline:auto;margin-bottom:4rem}.question-diagram.svelte-w1ksqq.svelte-w1ksqq{display:flex;margin-inline:auto;margin-bottom:5rem;max-width:48.8rem;width:100%}body{background:#DAD3C2;margin:0;padding:0;overflow-x:hidden}.spacer.svelte-w1ksqq.svelte-w1ksqq{height:6.305rem}main.svelte-w1ksqq.svelte-w1ksqq{max-width:948px;margin:32px auto;padding-inline:40px}.lines-1.svelte-w1ksqq.svelte-w1ksqq{position:absolute;max-width:22%;left:0;top:20%}.lines-2.svelte-w1ksqq.svelte-w1ksqq{position:absolute;max-width:20vw;right:0;top:70%}.lines-3.svelte-w1ksqq.svelte-w1ksqq{position:absolute;transform:translate(0%, -100%);max-width:50%;left:0}@media screen and (max-width: 570px){main.svelte-w1ksqq.svelte-w1ksqq{padding-inline:24px}.center.svelte-w1ksqq.svelte-w1ksqq{margin-top:2rem;margin-bottom:2rem}.center.svelte-w1ksqq h1.svelte-w1ksqq{margin-top:0.8rem;font-size:1.5rem}p.svelte-w1ksqq.svelte-w1ksqq{font-size:0.95rem;line-height:1.3rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"spacer svelte-w1ksqq"}"></div>

<main class="${"svelte-w1ksqq"}"><div class="${"center svelte-w1ksqq"}"><img class="${"puzzle svelte-w1ksqq"}" src="${"./icons/puzzle.svg"}" alt="${"puzzle icon"}">
        <h1 class="${"svelte-w1ksqq"}">Intent Questions</h1></div>

    <p class="${"svelte-w1ksqq"}">When you visit a blocked site, you&#39;ll get asked a short series of question\u2014designed to snap you out of the mindless state.</p>

    <img class="${"question-diagram svelte-w1ksqq"}" src="${"./img/intentio-questions.svg"}" alt="${"intentio questions diagram"}">

    <img class="${"lines-3 svelte-w1ksqq"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}"></main>
    <img class="${"lines-1 svelte-w1ksqq"}" src="${"./img/lines-onwhite-1.svg"}" alt="${"lines background illustration"}">
    <img class="${"lines-2 svelte-w1ksqq"}" src="${"./img/lines-onwhite-2.svg"}" alt="${"lines background illustration"}">
${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
