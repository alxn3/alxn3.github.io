(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1063),o=n(4651),s=n(7426);var i={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),f=l.default.useMemo((function(){var t=c.resolveHref(a,e.href,!0),n=r(t,2),l=n[0],o=n[1];return{href:l,as:e.as?c.resolveHref(a,e.as):o||l}}),[a,e.href,e.as]),d=f.href,m=f.as,x=e.children,h=e.replace,p=e.shallow,v=e.scroll,j=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var y=(t=l.default.Children.only(x))&&"object"===typeof t&&t.ref,g=s.useIntersection({rootMargin:"200px"}),b=r(g,2),k=b[0],w=b[1],N=l.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);l.default.useEffect((function(){var e=w&&n&&c.isLocalURL(d),t="undefined"!==typeof j?j:a&&a.locale,r=i[d+"%"+m+(t?"%"+t:"")];e&&!r&&u(a,d,m,{locale:t})}),[m,d,w,j,n,a]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,l,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:l,locale:s,scroll:o}))}(e,a,d,m,h,p,v,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof j?j:a&&a.locale,L=a&&a.isLocaleDomain&&c.getDomainLocale(m,C,a&&a.locales,a&&a.domainLocales);E.href=L||c.addBasePath(c.addLocale(m,C,a&&a.defaultLocale))}return l.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=a.useRef(),i=a.useState(!1),u=r(i,2),f=u[0],d=u[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,l=r.observer,c=r.elements;return c.set(e,t),l.observe(e),function(){c.delete(e),l.unobserve(e),0===c.size&&(l.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!c&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=n(7294),l=n(3447),c="undefined"!==typeof IntersectionObserver;var o=new Map},2394:function(e,t,n){"use strict";var r=n(7735),a=n(5893),l=[{name:"React",icon:(0,a.jsx)(r.pNp,{}),url:"https://reactjs.org/"},{name:"Next.js",icon:(0,a.jsx)(r.Xou,{}),url:"https://nextjs.org/"},{name:"TailwindCSS",icon:(0,a.jsx)(r.YnA,{}),url:"https://tailwindcss.com/"}],c="opacity-80 hover:opacity-100 transition-opacity",o=[{name:"GitHub",icon:(0,a.jsx)(r.pZu,{className:c}),url:"https://github.com/alxn3"},{name:"LinkedIn",icon:(0,a.jsx)(r.n7M,{className:c}),url:"https://www.linkedin.com/in/alexlin03/"},{name:"Mail",icon:(0,a.jsx)(r.IeF,{className:c}),url:"mailto:contact@alexlin.me"}];t.Z=function(e){var t=e.className;return(0,a.jsxs)("footer",{className:"flex p-4 flex-col items-center space-y-1 ".concat(t||""),children:[(0,a.jsx)("div",{className:"flex mb-1 space-x-3 text-2xl",children:o.map((function(e,t){return(0,a.jsx)("span",{className:"inline-block ml-2",children:(0,a.jsx)("a",{href:e.url,title:e.name,rel:"noreferrer",target:"_blank",children:e.icon})},t)}))}),(0,a.jsxs)("p",{className:"text-sm",children:["Copyright \xa9 ",(new Date).getFullYear()," Alex Lin. All rights reserved."]}),(0,a.jsxs)("p",{className:"text-sm font-regular",children:["Powered by",l.map((function(e,t){return(0,a.jsxs)("span",{children:[t>0&&",",t==l.length-1&&" and",(0,a.jsx)("span",{className:"inline-block ml-2",children:(0,a.jsx)("a",{href:e.url,title:e.name,rel:"noreferrer",target:"_blank",children:e.icon})})]},e.name)})),"."]})]})}},243:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9008),a=n(1664),l=n(7294),c=n(9583),o=n(425),s=n(5893),i=function(){var e=(0,o.F)(),t=e.theme,n=e.resolvedTheme,r=e.setTheme;return(0,l.useEffect)((function(){var e=function(){return r("system")},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",e),function(){return t.removeEventListener("change",e)}}),[]),(0,s.jsx)("button",{onClick:function(){return r("dark"===t||"system"===t&&"dark"===n?"light":"dark")},className:"text-xl",children:(0,s.jsxs)("div",{className:"opacity-80 hover:opacity-100",children:[(0,s.jsx)(c.Mei,{className:"block dark:hidden"}),(0,s.jsx)(c.TLr,{className:"hidden dark:block"})]})})},u=[{name:"Home",link:"/"},{name:"Contact",link:"/contact"}],f=function(){return(0,s.jsxs)("nav",{className:"flex flex-col flex-wrap items-center justify-between p-3 sm:flex-row",children:[(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{className:"p-2",children:(0,s.jsx)("span",{className:"font-mono text-2xl font-bold tracking-wide text-black dark:text-white",children:"Alex Lin"})})}),(0,s.jsxs)("div",{className:"flex flex-row items-center space-x-4 text-lg",children:[u.map((function(e){return(0,s.jsx)(a.default,{href:e.link,children:(0,s.jsx)("a",{className:"font-bold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",children:e.name})},e.link)})),(0,s.jsx)(i,{})]})]})},d=function(e){var t=e.headerContent,n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Alex Lin"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:"h-full w-[min(90%,78rem)] mx-auto",children:[t?(0,s.jsxs)("div",{className:"grid grid-rows-[auto,1fr] h-auto min-h-full",children:[(0,s.jsx)(f,{}),(0,s.jsx)("div",{children:t})]}):(0,s.jsx)(f,{}),n]})]})}},4690:function(e,t,n){"use strict";n.r(t);var r=n(2394),a=n(243),l=n(5893);t.default=function(){return(0,l.jsx)(a.Z,{headerContent:(0,l.jsxs)("div",{className:"flex flex-col justify-center h-full",children:[(0,l.jsx)("div",{className:"flex items-center justify-center flex-1",children:(0,l.jsx)("h1",{className:"text-4xl font-black text-center text-transparent xs:text-5xl sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600",children:"Under Construction..."})}),(0,l.jsx)(r.Z,{})]})})}},603:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(4690)}])},1664:function(e,t,n){e.exports=n(2167)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,s=e.title,i=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[415,445,774,888,179],(function(){return t=603,e(e.s=t);var t}));var t=e.O();_N_E=t}]);