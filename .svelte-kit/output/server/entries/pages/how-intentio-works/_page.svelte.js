import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, B as Banner, F as Footer } from "../../../chunks/Footer.js";
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.backdrop.svelte-jt2iys.svelte-jt2iys{width:100%;height:100%;position:fixed;background:rgba(0, 0, 0, 0.5);z-index:11}.modal.svelte-jt2iys.svelte-jt2iys{padding-inline:40px;padding-top:8px;padding-bottom:32px;border-radius:16px;max-width:800px;min-width:600px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#DAD3C2}.modal.svelte-jt2iys .inline-icon-text.svelte-jt2iys{display:flex;justify-content:space-between;align-items:center;width:100%;margin-top:-8px;margin-bottom:-8px}.modal.svelte-jt2iys .inline-icon-text .help-circle.svelte-jt2iys{width:32px;height:32px;margin-right:8px;margin-top:-5px}.modal.svelte-jt2iys .inline-icon-text h4.svelte-jt2iys{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:700;font-size:1.8rem;margin-right:auto}.modal.svelte-jt2iys .inline-icon-text .close.svelte-jt2iys{width:32px;height:32px;cursor:pointer}.modal.svelte-jt2iys p.svelte-jt2iys{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:20px;font-weight:500;margin-block:0;line-height:2rem;line-break:normal}@media screen and (max-width: 820px){.modal.svelte-jt2iys.svelte-jt2iys{width:60vw;max-width:600px;min-width:200px;padding-inline:1.5rem;padding-top:0.5rem}.modal.svelte-jt2iys .inline-icon-text .help-circle.svelte-jt2iys{width:1.5rem;height:1.5rem;display:none}.modal.svelte-jt2iys .inline-icon-text .close.svelte-jt2iys{width:1.5rem;height:1.5rem;margin-right:0px}.modal.svelte-jt2iys .inline-icon-text h4.svelte-jt2iys{font-size:1.3rem;line-height:1.6rem}.modal.svelte-jt2iys p.svelte-jt2iys{font-size:1rem;line-height:1.5rem}}',
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "default value" } = $$props;
  let { title = "default value" } = $$props;
  let { showModal = false } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css$1);
  return `${showModal ? `
    <div class="${"backdrop svelte-jt2iys"}"><div class="${"modal svelte-jt2iys"}"><div class="${"inline-icon-text svelte-jt2iys"}"><img class="${"help-circle svelte-jt2iys"}" src="${"./icons/help-circle.svg"}" alt="${"help icon"}">
                <h4 class="${"svelte-jt2iys"}">${escape(title)}</h4>
                <img class="${"close svelte-jt2iys"}" src="${"./icons/close.svg"}" alt="${"close icon"}"></div>
            <p class="${"svelte-jt2iys"}">${escape(message)}</p></div></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.lines-1.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;max-width:22%;left:0;top:20%}.lines-2.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;max-width:22%;right:0;top:50rem}.lines-3.svelte-1xyw3yx.svelte-1xyw3yx{position:absolute;transform:translate(0%, -68%);max-width:23rem;left:0;z-index:-1}.center.svelte-1xyw3yx.svelte-1xyw3yx{margin-top:5rem;text-align:center;align-items:center;margin-bottom:3rem}.center.svelte-1xyw3yx .shapes.svelte-1xyw3yx{width:2rem;height:2rem;margin:auto}.center.svelte-1xyw3yx h1.svelte-1xyw3yx{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-size:2rem;font-weight:700}a.svelte-1xyw3yx.svelte-1xyw3yx{color:#0f0e17}.inline-icon-text.svelte-1xyw3yx.svelte-1xyw3yx{display:flex;align-items:center;gap:8px}.inline-icon-text.svelte-1xyw3yx h3.svelte-1xyw3yx{font-family:"SofiaProSemiBold", "Satoshi", sans-serif;font-weight:900;font-size:1.5rem;font-weight:normal;padding-top:4px}.caret-down.svelte-1xyw3yx.svelte-1xyw3yx{width:1.5rem;height:1.5rem;background-size:cover;cursor:pointer}p.svelte-1xyw3yx.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;line-height:1.6rem;font-size:1.125rem;line-break:normal;margin-bottom:1.12rem;text-align:justify}.small-title.svelte-1xyw3yx.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-size:1.25rem;font-weight:900}.references.svelte-1xyw3yx.svelte-1xyw3yx{margin-bottom:5rem;padding-left:1.5rem}.references.svelte-1xyw3yx li.svelte-1xyw3yx{font-family:"Sofia Pro", "Satoshi", sans-serif;font-weight:500;text-decoration:dotted;line-height:1.68rem;font-size:1.125rem;margin-bottom:1.125rem;text-align:justify}.references.svelte-1xyw3yx li a.svelte-1xyw3yx{overflow-wrap:break-word}body{background:#DAD3C2;margin:0;padding:0;overflow-x:hidden}.spacer.svelte-1xyw3yx.svelte-1xyw3yx{height:6.305rem}main.svelte-1xyw3yx.svelte-1xyw3yx{max-width:948px;margin:32px auto;padding-inline:40px}@media screen and (max-width: 570px){main.svelte-1xyw3yx.svelte-1xyw3yx{padding-inline:24px}.center.svelte-1xyw3yx.svelte-1xyw3yx{margin-top:2rem;margin-bottom:2rem}.center.svelte-1xyw3yx h1.svelte-1xyw3yx{margin-top:0.8rem;font-size:1.5rem}p.svelte-1xyw3yx.svelte-1xyw3yx{font-size:0.95rem;line-height:1.3rem}.references.svelte-1xyw3yx.svelte-1xyw3yx{padding-left:1.5rem}.references.svelte-1xyw3yx li.svelte-1xyw3yx{padding-left:0;font-size:0.95rem;line-height:1.4rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-tfmquu_START --><link href="${"https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-tfmquu_END -->`, ""}

${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "Bottom-up Processing",
      message: "Bottom-up processing is the process of \u2018sensation\u2019, whereby the input of sensory information from the external environment is received by our sensory receptors.",
      showModal
    },
    {},
    {}
  )}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"spacer svelte-1xyw3yx"}"></div>
<main class="${"svelte-1xyw3yx"}"><div class="${"center svelte-1xyw3yx"}"><img class="${"shapes svelte-1xyw3yx"}" src="${"./icons/shapes.svg"}" alt="${"shapes icon"}">
        <h1 class="${"svelte-1xyw3yx"}">How Intentio Works?</h1></div>

    <p class="${"svelte-1xyw3yx"}">We used to be able to read books or watch 30-minutes or hour-long TV shows, and it\u2019s easier to actually focus on studying, but technology is changing our attention span. As our digital consumption becomes more bite-sized\u2014we no longer need to pay attention like we used to.</p>

    <p class="${"svelte-1xyw3yx"}">The payoff from technology is becoming sweeter, faster, and more immediate.</p>

    <p class="${"svelte-1xyw3yx"}">As technology becomes more sophisticated, it gets better at hijacking our attention. As technology companies are at war for our attention\u2014and as they get better and better in claiming our attention\u2014essentially we lose out on everything else (studying for that exam, working towards that personal project, side hustles, or the things that you actually want to do) because our attention is being grabbed by all of these platforms.</p>

    <p class="${"svelte-1xyw3yx"}">The mechanism they use to pull our attention away from our goals is through the sensory stimuli that take advantage of <span><a href="${"#"}" class="${"svelte-1xyw3yx"}">bottom-up processing</a></span>.</p>

    <p class="${"svelte-1xyw3yx"}">And as technology improves and gets better at claiming our attention\u2014more effort is needed for us to give into controlling our minds and focus on the things we want to do. </p>

    <p class="${"svelte-1xyw3yx"}">One solution that was found to be useful in increasing mindfulness of social media consumption is by implementing an intervention design by automating digital nudges (Purohit &amp; Holzer, 2021). For instance, researchers at Cornell Tech leveraged nudging and negative reinforcement concepts with their vibration intervention (Okeke et al. 2018) does decrease social media usage; however, most participants felt irritated and annoyed by the digital nudge and returned to their old habits when the intervention was removed. The intervention gave a chance for self-reflection, but it was frequently ignored (Kim, Jung, et al. 2019). </p>

    <p class="${"svelte-1xyw3yx"}">To avoid making users feel irritated and annoyed by the digital nudge is not to prevent users from scrolling through their newsfeeds, but to reduce it by making it more mindful. The challenge is that the interventions need to be simultaneously strong to allow users to change their behavior\u2014as well as soft enough to avoid backfiring\u2014which may eventually lead to users forsaking the intervention altogether (Purohit &amp; Holzer, 2021).</p>

    <p class="${"svelte-1xyw3yx"}">Intentio is designed with that approach which was proven to have a 20.58% reduction in weekly digital consumption, and how it made the participants more mindful of their media consumption. However, the research only shows a decrease in the time of the social media platform, but not a reduced number of times the social media platform is opened (Purohit &amp; Holzer, 2021).</p>

    <p class="${"svelte-1xyw3yx"}">That\u2019s why Intentio takes it a step further in uncovering your intention as you mindlessly visit those digital platforms. </p>

    <p class="${"svelte-1xyw3yx"}">In addition to helping you become more mindful of your digital consumption\u2014which simultaneously reduces the time you spend on those platforms but also understanding your intention with Intent Questions\u2014snapping you out from the passive and mindless state to active and aware. </p>

    <p class="${"svelte-1xyw3yx"}">Intentio also doesn\u2019t collect users\u2019 data as it is designed with privacy and ethical concerns in mind, giving you peace of mind in using Intentio as a part of your daily lives.</p>
    <br>
    <p class="${"svelte-1xyw3yx"}"><span class="${"small-title svelte-1xyw3yx"}">TL;DR</span></p>
    <p class="${"svelte-1xyw3yx"}">With Intentio, you can always access your blocked sites. The point is not to force you to stop cold turkey but to understand why you go there in the first place.
    </p>

    <p class="${"svelte-1xyw3yx"}">Because the internet is undeniably a part of our lives now (and you can always find a way to get your cravings met), it\u2019s a good idea to understand what makes you want to do those things and shift your actions mindfully towards the things you want to do.</p>

    <div class="${"inline-icon-text svelte-1xyw3yx"}">
            ${``}
                
            ${`
                <img class="${"caret-down svelte-1xyw3yx"}" src="${"./icons/caret-forward.svg"}" alt="${"caret forward icon"}">`}

        <h3 style="${"font-family: 'Satoshi', sans-serif; font-weight: 700"}" class="${"svelte-1xyw3yx"}">References</h3></div>

    
    <ul class="${"references svelte-1xyw3yx"}">${``}
        <ul></ul>
        

    <img class="${"lines-3 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-3.svg"}" alt="${"lines background illustration"}"></ul></main>
    <img class="${"lines-1 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-1.svg"}" alt="${"lines background illustration"}">
    <img class="${"lines-2 svelte-1xyw3yx"}" src="${"./img/lines-onwhite-2.svg"}" alt="${"lines background illustration"}">

${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
