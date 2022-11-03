import { c as create_ssr_component, v as validate_component } from "./index.js";
const MobileNav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.backdrop.svelte-dv4t3j.svelte-dv4t3j{width:100%;height:100%;position:fixed;background:rgba(0, 0, 0, 0.5);z-index:9}@keyframes svelte-dv4t3j-slidedown{0%{transform:translate(0, -100%)}50%{transform:translate(0, 5%)}80%{transform:translate(0, -1%)}100%{transform:translate(0, 0%)}}.modal.svelte-dv4t3j.svelte-dv4t3j{padding-inline:40px;padding-top:7.6rem;padding-bottom:1.5rem;width:100%;position:absolute;background:#DAD3C2;text-align:center;justify-content:center;border-bottom:2px solid #0f0e17;animation:svelte-dv4t3j-slidedown 0.5s normal}.modal.svelte-dv4t3j img.svelte-dv4t3j{max-width:20px}.modal.svelte-dv4t3j a.svelte-dv4t3j{scroll-behavior:smooth;text-decoration:none;color:#0f0e17}.modal.svelte-dv4t3j .inline-icon-text.svelte-dv4t3j{margin-inline:auto;display:flex;align-items:center;gap:8px}.modal.svelte-dv4t3j .inline-icon-text h4.svelte-dv4t3j{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:1.2rem;font-weight:700;padding-top:4px;margin-block:1rem}@media screen and (max-width: 820px){.modal.svelte-dv4t3j.svelte-dv4t3j{padding-top:6.5rem;padding-bottom:1.6rem}}@media screen and (max-width: 570px){.modal.svelte-dv4t3j.svelte-dv4t3j{padding-top:6rem;padding-bottom:1.2rem}.modal.svelte-dv4t3j .inline-icon-text h4.svelte-dv4t3j{font-size:1rem}}',
  map: null
};
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showNav = false } = $$props;
  if ($$props.showNav === void 0 && $$bindings.showNav && showNav !== void 0)
    $$bindings.showNav(showNav);
  $$result.css.add(css$3);
  return `${showNav ? `
    <div class="${"backdrop svelte-dv4t3j"}"><div class="${"modal svelte-dv4t3j"}"><a href="${"/#feature-anchor"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/sparkles-filled.svg"}" alt="${"sparkles icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">Features</h4></div></a>
            <a href="${"/how-intentio-works"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/shapes-filled.svg"}" alt="${"shapes icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">How Intentio Works?</h4></div></a>
            <a href="${"/intent-questions"}" class="${"svelte-dv4t3j"}"><div class="${"inline-icon-text svelte-dv4t3j"}"><img src="${"./icons/puzzle-filled.svg"}" alt="${"puzzle icon"}" class="${"svelte-dv4t3j"}">
                    <h4 class="${"svelte-dv4t3j"}">Intent Questions</h4></div></a></div></div>` : ``}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@media screen and (max-width: 570px){header.svelte-19q522i .content.svelte-19q522i{padding-inline:24px}}@media screen and (max-width: 820px){h1.svelte-19q522i.svelte-19q522i{margin-block:0.8rem}.nav.svelte-19q522i a.svelte-19q522i{display:none}.nav.svelte-19q522i .menu.svelte-19q522i{display:flex;scale:1.5}}.menu.svelte-19q522i.svelte-19q522i{display:none}header.svelte-19q522i.svelte-19q522i{position:fixed;z-index:10;top:0;width:100%;border-bottom:2px solid #0f0e17;background-color:#DAD3C2}.content.svelte-19q522i.svelte-19q522i{background:#DAD3C2;max-width:948px;margin-inline:auto;padding-top:8px;padding-inline:40px;display:flex;justify-content:space-between;align-items:center}.logo.svelte-19q522i.svelte-19q522i{max-width:147px}.nav.svelte-19q522i.svelte-19q522i{display:flex;gap:24px;margin-top:-8px}.nav.svelte-19q522i img.svelte-19q522i{max-width:20px}.nav.svelte-19q522i a.svelte-19q522i{scroll-behavior:smooth}h4.svelte-19q522i.svelte-19q522i{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:17px;font-weight:700;padding-top:4px}a.svelte-19q522i.svelte-19q522i{color:#0f0e17;text-decoration:none}a.svelte-19q522i .svelte-19q522i:hover{text-decoration:underline}.inline-icon-text.svelte-19q522i.svelte-19q522i{padding-inline:1rem;display:flex;align-items:center;gap:8px}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showNav = false;
  $$result.css.add(css$2);
  return `${validate_component(MobileNav, "MobileNav").$$render($$result, { showNav }, {}, {})}

<header class="${"svelte-19q522i"}"><div class="${"content svelte-19q522i"}"><a href="${"/"}" class="${"svelte-19q522i"}"><h1 class="${"svelte-19q522i"}"><img class="${"logo svelte-19q522i"}" src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}"></h1></a>
        <div class="${"nav svelte-19q522i"}">
            <img class="${"menu svelte-19q522i"}" src="${"./icons/menu.svg"}" alt="${"menu icon"}">
            <a href="${"/#feature-anchor"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/sparkles-filled.svg"}" alt="${"sparkles icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">Features</h4></div></a>
            <a href="${"/how-intentio-works"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/shapes-filled.svg"}" alt="${"shapes icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">How Intentio Works?</h4></div></a>
            <a href="${"/intent-questions"}" class="${"svelte-19q522i"}"><div class="${"inline-icon-text svelte-19q522i"}"><img src="${"./icons/puzzle-filled.svg"}" alt="${"puzzle icon"}" class="${"svelte-19q522i"}">
                    <h4 class="${"svelte-19q522i"}">Intent Questions</h4></div></a></div></div>
</header>`;
});
const Banner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@media screen and (max-width: 570px){#title.svelte-1iwenvc.svelte-1iwenvc{font-size:1.5rem}}section.svelte-1iwenvc.svelte-1iwenvc{position:relative;height:344px;background-color:#0F0E17}section.svelte-1iwenvc .lines-1.svelte-1iwenvc{position:absolute;max-width:18rem;width:30vw;right:13%}section.svelte-1iwenvc .lines-2.svelte-1iwenvc{position:absolute;max-width:18rem;width:35vw;left:12%;bottom:0}.vertical-center.svelte-1iwenvc.svelte-1iwenvc{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.center.svelte-1iwenvc.svelte-1iwenvc{text-align:center;width:80vw;max-width:40rem}.center.svelte-1iwenvc .mark.svelte-1iwenvc{width:4.4rem;height:4rem}.center.svelte-1iwenvc h1.svelte-1iwenvc{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:900;font-size:2rem;color:#F9F4EF}.center.svelte-1iwenvc button.svelte-1iwenvc{font-family:"Bespoke Slab", sans-serif;font-weight:bold;padding-top:1rem;padding-bottom:0.8rem;padding-left:1.25rem;padding-right:1.4rem;margin-top:0.4rem;background-color:#F9F4EF;border:0px;border-radius:0.75rem;cursor:pointer;color:#0F0E17;font-size:16px}.center.svelte-1iwenvc button .logo-chrome.svelte-1iwenvc{width:1.5rem;height:1.5rem;vertical-align:middle;margin-right:0.75rem;margin-bottom:4px}',
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

<section class="${"svelte-1iwenvc"}"><div class="${"vertical-center svelte-1iwenvc"}"><div class="${"center svelte-1iwenvc"}"><img class="${"mark svelte-1iwenvc"}" src="${"./intentio-mark-white.svg"}" alt="${"intentio white logo"}">
            <h1 id="${"title"}" class="${"svelte-1iwenvc"}">It&#39;s Time to Be Intentional</h1>
            <button class="${"svelte-1iwenvc"}"><img class="${"logo-chrome svelte-1iwenvc"}" src="${"./icons/logo-chrome.svg"}" alt="${"chrome logo"}">Add to Chrome</button></div></div>

    <img class="${"lines-1 svelte-1iwenvc"}" src="${"./img/lines-1.svg"}" alt="${"lines illustration background"}">
    <img class="${"lines-2 svelte-1iwenvc"}" src="${"./img/lines-2.svg"}" alt="${"lines illustration background"}">

</section>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: 'footer.svelte-6eq6me.svelte-6eq6me{margin-inline:auto;padding-bottom:40px;padding-top:36px;padding-inline:40px;max-width:948px;display:flex;justify-content:space-between;align-items:center}.logo.svelte-6eq6me.svelte-6eq6me{margin-top:0;padding-top:0.2rem}img.svelte-6eq6me.svelte-6eq6me{max-width:147px}.copyright.svelte-6eq6me.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:0.9rem;font-weight:500;color:#8A826F;display:inline-block;margin-bottom:12px}.right-footer.svelte-6eq6me p.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:0.9rem;font-weight:500;margin:0;text-align:end}.right-footer.svelte-6eq6me .second-p.svelte-6eq6me{margin-top:0.5rem}.right-footer.svelte-6eq6me .information.svelte-6eq6me{line-height:1rem}.right-footer.svelte-6eq6me .information #one-liner.svelte-6eq6me{display:flex;align-items:center;gap:4px;justify-content:end}.right-footer.svelte-6eq6me .socials.svelte-6eq6me{display:flex;gap:16px;align-items:center;justify-content:end}.right-footer.svelte-6eq6me .socials img.svelte-6eq6me{width:24px;height:24px}.mobile-view.svelte-6eq6me.svelte-6eq6me{display:none}.rainbow.svelte-6eq6me.svelte-6eq6me{animation:svelte-6eq6me-color-change 5s infinite;font-weight:bold}@keyframes svelte-6eq6me-color-change{0%{color:#9A6547}25%{color:#30bd6f}50%{color:#8C64FF}75%{color:#BE4949}100%{color:#9A6547}}@media screen and (max-width: 730px){footer.svelte-6eq6me.svelte-6eq6me{display:block;margin-inline:auto;padding-bottom:40px;padding-top:3rem;padding-inline:40px;max-width:948px;justify-content:center;text-align:center}img.svelte-6eq6me.svelte-6eq6me{max-width:147px}.copyright.svelte-6eq6me.svelte-6eq6me{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:1rem;font-weight:500;color:#8A826F;display:inline-block;margin-top:auto}.desktop-view.svelte-6eq6me.svelte-6eq6me{display:none}.mobile-view.svelte-6eq6me.svelte-6eq6me{margin-top:3rem;display:block}.right-footer.svelte-6eq6me p.svelte-6eq6me{text-align:center;font-size:1rem}.right-footer.svelte-6eq6me .second-p.svelte-6eq6me{margin-top:0.8rem}.right-footer.svelte-6eq6me .information.svelte-6eq6me{line-height:1.7rem}.right-footer.svelte-6eq6me .information #one-liner.svelte-6eq6me{justify-content:center}.right-footer.svelte-6eq6me .socials.svelte-6eq6me{margin-top:0.5rem;gap:1.5rem;justify-content:center;align-items:center}.right-footer.svelte-6eq6me .socials img.svelte-6eq6me{width:2rem;height:2rem}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-6eq6me"}"><div class="${"left-footer desktop-view svelte-6eq6me"}"><h1 class="${"logo svelte-6eq6me"}"><img src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}" class="${"svelte-6eq6me"}"></h1>
        <div class="${"copyright svelte-6eq6me"}">\xA9 2022 Intentio. All Rights Reserved.</div></div>
    <div class="${"right-footer svelte-6eq6me"}"><div class="${"information svelte-6eq6me"}"><div id="${"one-liner"}" class="${"svelte-6eq6me"}">
                <p class="${"svelte-6eq6me"}">Made with \u2615 and a hint of procrastination by <span class="${"rainbow svelte-6eq6me"}">Gil</span></p></div>
            <p class="${"svelte-6eq6me"}"></p>
            <p class="${"second-p svelte-6eq6me"}">Have suggestions, comments, or questions? Reach out!</p></div>
        \xA0
        <div class="${"socials svelte-6eq6me"}"><img src="${"./icons/logo-linkedin.svg"}" alt="${"linkedin logo"}" class="${"svelte-6eq6me"}">
            
            <img src="${"./icons/mail.svg"}" alt="${"mail icon"}" class="${"svelte-6eq6me"}"></div></div> 
    <div class="${"left-footer mobile-view svelte-6eq6me"}"><h1 class="${"logo svelte-6eq6me"}"><img src="${"./intentio-logo.svg"}" alt="${"intentio-logo"}" class="${"svelte-6eq6me"}"></h1>
        <div class="${"copyright svelte-6eq6me"}">\xA9 2022 Intentio. All Rights Reserved.</div></div>
</footer>`;
});
export {
  Banner as B,
  Footer as F,
  Header as H
};
