function E(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(q)}function B(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function K(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(R(e,n))}function _t(t,e,n,i){if(t){const r=H(t,e,n,i);return t[0](r)}}function H(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,l){if(r){const c=H(e,n,i,l);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function Q(){v=!0}function U(){v=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:V(1,r,y=>e[n[y]].claim_order,o))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const l=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<l.length&&c[s].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(c[s],f)}}function Y(t,e){t.appendChild(e)}function Z(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function bt(){return C(" ")}function gt(){return C("")}function T(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t){return function(e){e.target===this&&t.call(this,e)}}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){et(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function nt(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function $t(t,e,n){return nt(t,e,n,O)}function it(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Et(t){return it(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let g;function rt(){if(g===void 0){g=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{g=!0}}return g}function Nt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=O("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=rt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=T(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=T(i.contentWindow,"resize",e)}),Y(t,i),()=>{(r||l&&i.contentWindow)&&l(),L(i)}}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ct(t,e){return new t(e)}let m;function h(t){m=t}function W(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){W().$$.on_mount.push(t)}function kt(t){W().$$.after_update.push(t)}function Mt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const _=[],z=[],w=[],D=[],F=Promise.resolve();let N=!1;function I(){N||(N=!0,F.then(G))}function Tt(){return I(),F}function S(t){w.push(t)}const A=new Set;let x=0;function G(){const t=m;do{for(;x<_.length;){const e=_[x];x++,h(e),ct(e.$$)}for(h(null),_.length=0,x=0;z.length;)z.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];A.has(n)||(A.add(n),n())}w.length=0}while(_.length);for(;D.length;)D.pop()();N=!1,A.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const $=new Set;let d;function zt(){d={r:0,c:[],p:d}}function Dt(){d.r||p(d.c),d=d.p}function st(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(S)}function lt(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(_.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,l,c,u=[-1]){const s=m;h(t);const o=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,y,...j)=>{const k=j.length?j[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=k)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](k),f&&ut(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){Q();const a=tt(e.target);o.fragment&&o.fragment.l(a),a.forEach(L)}else o.fragment&&o.fragment.c();e.intro&&st(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),U(),G()}h(s)}class Ot{$destroy(){lt(this,1),this.$destroy=E}$on(e,n){if(!B(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Tt as A,E as B,_t as C,mt as D,pt as E,ht as F,Z as G,dt as H,St as I,ft as J,S as K,Nt as L,T as M,xt as N,Mt as O,p as P,Ot as S,bt as a,yt as b,Et as c,Dt as d,gt as e,st as f,zt as g,L as h,Lt as i,kt as j,O as k,$t as l,tt as m,wt as n,jt as o,At as p,C as q,it as r,at as s,qt as t,vt as u,Ct as v,Bt as w,Ht as x,ot as y,lt as z};