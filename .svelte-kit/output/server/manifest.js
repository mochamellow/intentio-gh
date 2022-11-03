export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Sofia Pro Bold Az.otf","fonts/Sofia Pro Medium Az.otf","fonts/Sofia Pro Regular Az.otf","fonts/Sofia Pro Semi Bold Az.otf","fonts/sofia_pro_bold_az-webfont.woff","fonts/sofia_pro_bold_az-webfont.woff2","fonts/sofia_pro_medium_az-webfont.woff","fonts/sofia_pro_medium_az-webfont.woff2","fonts/sofia_pro_regular_az-webfont.woff","fonts/sofia_pro_regular_az-webfont.woff2","fonts/sofia_pro_semi_bold_az-webfont.woff","fonts/sofia_pro_semi_bold_az-webfont.woff2","icons/accessibility.svg","icons/arrow-forward.svg","icons/book.svg","icons/cafe.svg","icons/caret-down.svg","icons/caret-forward.svg","icons/chatbox-ellipses.svg","icons/close.svg","icons/eye-black.svg","icons/eye.svg","icons/happy.svg","icons/help-circle.svg","icons/logo-behance.svg","icons/logo-chrome.svg","icons/logo-linkedin.svg","icons/mail.svg","icons/menu.svg","icons/puzzle-filled.svg","icons/puzzle.svg","icons/shapes-filled.svg","icons/shapes.svg","icons/sparkles-filled.svg","icons/sparkles.svg","icons/stopwatch.svg","icons/trail-sign.svg","img/feature-content-bg-1-bottomleft.svg","img/feature-content-bg-1-topright.svg","img/feature-content-bg-2-bottomright.svg","img/feature-content-bg-2-topleft.svg","img/feature-content-bg-3-bottomleft.svg","img/feature-content-bg-3-topright.svg","img/feature-content1.png","img/feature-content2.png","img/feature-content3.png","img/feature-content4.png","img/feature-content5.png","img/homepage-ui.png","img/intentio-questions.svg","img/intentio_questions.png","img/lines-1.svg","img/lines-2.svg","img/lines-onwhite-1.svg","img/lines-onwhite-2.svg","img/lines-onwhite-3.svg","img/lp-lines-1.svg","img/lp-lines-2.svg","intentio-logo.svg","intentio-mark-white.svg"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-ec3f09c7.js","imports":["_app/immutable/start-ec3f09c7.js","_app/immutable/chunks/index-0808d0cc.js","_app/immutable/chunks/singletons-91e5a31a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/how-intentio-works",
				pattern: /^\/how-intentio-works\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/intent-questions",
				pattern: /^\/intent-questions\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
