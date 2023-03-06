(self.webpackChunkmellow_portfolio=self.webpackChunkmellow_portfolio||[]).push([[691],{9541:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=a,t.insertDocumentMeta=function(e){a(),(0,r.forEach)(e,i)};var r=n(9877);t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(e){e.parentNode.removeChild(e)}function a(){(0,r.forEach)(document.querySelectorAll("head [data-rdm]"),o)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]),r=document.createElement(t);for(var o in n)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}},8713:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var a=n(7294),i=s(a),l=s(n(5697)),c=s(n(293)),u=n(9877),f=n(9541);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r="link"===e?"href":"content";return Object.keys(t).forEach((function(o){var a=t[o];"string"!=typeof a?Object.keys(a).forEach((function(t){(Array.isArray(a[t])?a[t]:[a[t]]).forEach((function(a){var i;null!==a&&n.push((d(i={tagName:e},o,t),d(i,r,a),i))}))})):n.push(d({tagName:e},o,a))})),n}function m(e){return[].concat(p("meta",e.meta),p("link",e.link))}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function r(e){var n=e.tagName,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]);return"meta"===n?i.default.createElement("meta",o({},r,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",o({},r,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),m(e).reduce((function(e,t){return e.push(r(t)),e}),n)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(a.Component);y.propTypes={title:l.default.oneOfType([l.default.string,l.default.func]),description:l.default.oneOfType([l.default.string,l.default.func]),canonical:l.default.oneOfType([l.default.string,l.default.func]),base:l.default.string,meta:l.default.objectOf(l.default.oneOfType([l.default.string,l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))])),link:l.default.objectOf(l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))),auto:l.default.objectOf(l.default.bool)};var g=(0,c.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},r=!0,o=function(){r=e[a].hasOwnProperty("extend");var o=e[a],i=(0,u.clone)(e[a]);["title","description","canonical"].forEach((function(e){o.hasOwnProperty(e)&&("function"==typeof o[e]?n[e]=o[e](n[e]):void 0===n[e]&&(n[e]=o[e]))})),(0,u.defaults)(t,i)},a=e.length-1;r&&a>=0;a--)o();return"string"==typeof n.title&&(t.title=n.title),"string"==typeof n.description&&(0,u.defaults)(t,{meta:{name:{description:n.description}}}),"string"==typeof n.canonical&&(0,u.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){f.canUseDOM&&("string"==typeof e.title&&(document.title=e.title),(0,f.insertDocumentMeta)(m(e)))}))(y);g.renderAsReact=function(){return h(g.rewind())},t.ZP=g},9877:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,r=e.base,o=e.canonical,a=e.meta,i=e.link,l=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:r,canonical:o,meta:a,link:i,auto:l}))}catch(c){return{}}},t.defaults=function e(t,r){return Object.keys(r).reduce((function(o,a){return t.hasOwnProperty(a)?"object"===n(t[a])&&!Array.isArray(t[a])&&t[a]&&e(t[a],r[a]):t[a]=r[a],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},293:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(7294),a=r(o),i=r(n(6872));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,f=[];function s(){u=e(f.map((function(e){return e.props}))),d.canUseDOM?t(u):n&&(u=n(u))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,f=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){f.push(this),s()},l.componentDidUpdate=function(){s()},l.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),s()},l.render=function(){return a.createElement(r,this.props)},o}(o.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",c),d}}},6872:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var f=e[u],s=t[u];if(!1===(o=n?n.call(r,f,s,u):void 0)||void 0===o&&f!==s)return!1}return!0}},7851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(7294),o=n(9723),a=n(9174),i=n(8713),l=n(9532),c=n(7772),u=n(5811),f=n(50),s=function(){return r.createElement("div",{className:"block-center"},r.createElement("p",null,"© George Paton 2016 - ",(new Date).getFullYear()),r.createElement("div",{style:{margin:20}},r.createElement(f.Z,{style:{maxWidth:400,margin:"auto"},href:"https://github.com/MellowArpeggiation/MellowArpeggiation.github.io"},"Source")))},d=n(3366),p=n(4983),m=["components"],h={_frontmatter:{}},y="wrapper";function g(e){var t=e.components,n=(0,d.Z)(e,m);return(0,p.kt)(y,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",null,"About"),(0,p.kt)("p",null,"An experienced developer with a taste for the functional and minimal, with 15+ years of experience in programming and design. Has an eye for details, and an awareness of the whole. Will unrelentingly refactor your code, and reason changes with great verbosity."),(0,p.kt)("p",null,"Currently working as the Director of Mellow Pty Ltd, we're making games!"))}g.isMDXComponent=!0;var w=n(8264),b=n(7110),v=[{href:"https://mellowarpeggiation.itch.io",title:"itch.io",description:"Where I release all my games, and talk about games development"},{href:"http://rpg8.me/github",title:"GitHub",description:"My GitHub account, all the code I wish to share with the world is made available here"},{href:"http://rpg8.me/instagram",title:"Instagram",description:"Where I share weird art, fitness updates, and development videos"},{href:"http://rpg8.me/mastodon",title:"Mastodon",description:"I sometimes post here, and laugh at the demise of Twitter"},{href:"http://rpg8.me/soundcloud",title:"Soundcloud",description:"I make music, for games and for the love of it, have a listen here"},{href:"http://rpg8.me/linkedin",title:"LinkedIn",description:"Professional page, grab a copy of my resume here"}],E=function(e){return[e?350:500,e?500:300]},O=function(e){if(e){var t=e.content.current,n=2.6*window.innerHeight,r=.8*t.lastChild.scrollHeight,o=window.innerWidth<1280?-600:-1e3;t.style.height=n+r+o+"px"}},k=function(){var e,t=r.useRef(null),n="undefined"!=typeof window&&window.innerHeight>window.innerWidth,f=r.useState(E(n)),d=f[0],p=f[1];return e=setTimeout((function(){O(t.current),e=null}),98),r.useEffect((function(){window.addEventListener("resize",(function(){var n=window.innerHeight>window.innerWidth;p(E(n)),e&&clearTimeout(e),e=setTimeout((function(){O(t.current),e=null}),98)}))}),[]),r.createElement("main",null,r.createElement(i.ZP,{title:"Mᴇʟʟᴏᴡ Aʀᴘᴇɢɢɪᴀᴛɪᴏɴ",description:"Mellow Arpeggiation, also known as George William Paton. A Game Developer, Musician, and Director of Mellow Pty Ltd. Located in Melbourne, Victoria. George is developing indie games with a taste for the functional, minimal, and heartwarming."}),r.createElement(o.V,{ref:t,pages:8,className:"parallax-container",innerStyle:{backgroundColor:"black"}},r.createElement(o._,{className:"page",speed:1},r.createElement("div",{className:"load-spinner"}),r.createElement(u.Z,{title:"Mellow"}),r.createElement("div",{className:"scroll-indicator"})),r.createElement(o._,{className:"page",offset:.15,speed:1.1},r.createElement("div",{className:"anagram-container"},r.createElement("span",{className:"text-small"},"<by>"),r.createElement(l.ZP,{words:["mellow arpeggiation","george william paton"],animationOptions:{randomStartMin:0,randomStartMax:1e3,randomReverseMin:6e3,randomReverseMax:7e3,loopAnimation:12e3,waitToStart:7e3,transitionDuration:1600,timingFunction:"cubic-bezier(.5, 0, .2, 1.1)"}}))),r.createElement(o._,{className:"background-title",offset:.99,speed:.35},r.createElement("div",{className:"up-down","aria-hidden":"true"},"About")),r.createElement(o._,{offset:.9,speed:.3},r.createElement("div",{className:"background-parallelogram"})),r.createElement(o._,{className:"page",offset:.99,speed:.5},r.createElement("section",null,r.createElement(g,null)),r.createElement("section",null,r.createElement("h2",null,"Links"),r.createElement("ul",null,v.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.href},e.title),"   –   ",e.description)}))))),r.createElement(o._,{className:"background-title",offset:1.5,speed:.25},r.createElement("div",{className:"up-down text-right","aria-hidden":"true"},"Skills")),r.createElement(o._,{offset:1.4,speed:.5},r.createElement("div",{className:"background-parallelogram background-parallelogram-alt"})),r.createElement(o._,{offset:1.6,speed:.4},r.createElement("div",{style:{maxWidth:1200,margin:"auto"}},r.createElement(a.Z,{data:b.Z,width:d[0],height:d[1],font:"Milletun",fill:function(){return Math.random()>.5?"cyan":"magenta"},padding:4,rotate:function(){return 0}}))),r.createElement(o._,{offset:2.4},r.createElement("div",{className:"background-hatch"})),r.createElement(o._,{className:"background-title",offset:2.2,speed:.25},r.createElement("div",{className:"up-down","aria-hidden":"true"},"Projects")),r.createElement(o._,{offset:2.4,speed:.5},r.createElement(c.VerticalTimeline,{lineColor:"linear-gradient(180deg, transparent, cyan 64px, cyan 95%, transparent)"},w.Z.map((function(e,t){return r.createElement(c.VerticalTimelineElement,{key:t,contentStyle:{background:"#111"},contentArrowStyle:{borderRight:"8px solid #111"},date:e.date,iconStyle:{background:"cyan",boxShadow:"none"}},r.createElement(e.content,null))}))),r.createElement(s,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-40ffd9d401b7a0146207.js.map