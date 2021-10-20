(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2394:function(e,n,t){"use strict";var s=t(7735),a=t(5893),r=[{name:"React",icon:(0,a.jsx)(s.pNp,{}),url:"https://reactjs.org/"},{name:"Next.js",icon:(0,a.jsx)(s.Xou,{}),url:"https://nextjs.org/"},{name:"TailwindCSS",icon:(0,a.jsx)(s.YnA,{}),url:"https://tailwindcss.com/"}],l="opacity-80 hover:opacity-100 transition-opacity",c=[{name:"GitHub",icon:(0,a.jsx)(s.pZu,{className:l}),url:"https://github.com/alxn3"},{name:"LinkedIn",icon:(0,a.jsx)(s.n7M,{className:l}),url:"https://www.linkedin.com/in/alexlin03/"},{name:"Mail",icon:(0,a.jsx)(s.IeF,{className:l}),url:"mailto:contact@alexlin.me"}];n.Z=function(e){var n=e.className;return(0,a.jsxs)("footer",{className:"flex p-4 flex-col items-center space-y-1 ".concat(n||""),children:[(0,a.jsx)("div",{className:"flex mb-1 space-x-3 text-2xl",children:c.map((function(e,n){return(0,a.jsx)("span",{className:"inline-block ml-2",children:(0,a.jsx)("a",{href:e.url,title:e.name,rel:"noreferrer",target:"_blank",children:e.icon})},n)}))}),(0,a.jsxs)("p",{className:"text-sm",children:["Copyright \xa9 ",(new Date).getFullYear()," Alex Lin. All rights reserved."]}),(0,a.jsxs)("p",{className:"text-sm font-regular",children:["Powered by",r.map((function(e,n){return(0,a.jsxs)("span",{children:[n>0&&",",n==r.length-1&&" and",(0,a.jsx)("span",{className:"inline-block ml-2",children:(0,a.jsx)("a",{href:e.url,title:e.name,rel:"noreferrer",target:"_blank",children:e.icon})})]},e.name)})),"."]})]})}},243:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var s=t(9008),a=t(1664),r=t(7294),l=t(9583),c=t(425),i=t(5893),o=function(){var e=(0,c.F)(),n=e.theme,t=e.resolvedTheme,s=e.setTheme;return(0,r.useEffect)((function(){var e=function(){return s("system")},n=window.matchMedia("(prefers-color-scheme: dark)");return n.addEventListener("change",e),function(){return n.removeEventListener("change",e)}}),[]),(0,i.jsx)("button",{onClick:function(){return s("dark"===n||"system"===n&&"dark"===t?"light":"dark")},className:"text-xl",children:(0,i.jsxs)("div",{className:"opacity-80 hover:opacity-100",children:[(0,i.jsx)(l.Mei,{className:"block dark:hidden"}),(0,i.jsx)(l.TLr,{className:"hidden dark:block"})]})})},m=[{name:"Home",link:"/"},{name:"Contact",link:"/contact"}],x=function(){return(0,i.jsxs)("nav",{className:"flex flex-col flex-wrap items-center justify-between p-3 sm:flex-row",children:[(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"p-2",children:(0,i.jsx)("span",{className:"font-mono text-2xl font-bold tracking-wide text-black dark:text-white",children:"Alex Lin"})})}),(0,i.jsxs)("div",{className:"flex flex-row items-center space-x-4 text-lg",children:[m.map((function(e){return(0,i.jsx)(a.default,{href:e.link,children:(0,i.jsx)("a",{className:"font-bold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white",children:e.name})},e.link)})),(0,i.jsx)(o,{})]})]})},d=function(e){var n=e.headerContent,t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:"Alex Lin"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"h-full w-[min(90%,78rem)] mx-auto",children:[n?(0,i.jsxs)("div",{className:"flex flex-col h-full",children:[(0,i.jsx)(x,{}),(0,i.jsx)("div",{className:"flex-1",children:n})]}):(0,i.jsx)(x,{}),t]})]})}},333:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(243),a=t(3750),r=t(2394),l=t(5172),c=t(7294),i=t(9872),o=t(5893),m=function(e){var n=e.word,t=e.maxLength,s=e.animate,a=e.onAnimationComplete,r=e.callbackOnIndex,l=e.className;return(0,o.jsx)(i.E.span,{className:"absolute ".concat(l||""),children:Array.from(Array(t)).map((function(e,t){return(0,o.jsx)(i.E.span,{custom:t,initial:{opacity:0},animate:s,onAnimationComplete:function(e){t==(r||0)&&a(e)},children:n[t]},t)}))})},x=function(e){var n=e.words,t=void 0===n?["This","Is","Sample","Text"]:n,s=e.className,a=e.colors,r=(0,c.useState)(0),i=r[0],x=r[1],d=(0,c.useState)(-1),u=d[0],h=d[1],f=t.reduce((function(e,n){return e.length>n.length?e:n})),p=f.length,j=(0,l._)(),N=(0,l._)(),v=function(e){return{opacity:[0,1],transition:{repeat:1,repeatType:"mirror",delay:.125*e,duration:2.5}}};return(0,c.useEffect)((function(){return j.start(v),function(){return j.stop()}}),[]),(0,o.jsxs)("span",{className:"relative ".concat(s),children:[(0,o.jsx)(m,{word:t[i],maxLength:p,animate:j,callbackOnIndex:0,onAnimationComplete:function(){h((u+2)%t.length),N.start(v)},className:a&&a[i]||""}),(0,o.jsx)(m,{word:t[u]||"",maxLength:p,animate:N,callbackOnIndex:0,onAnimationComplete:function(){x((i+2)%t.length),j.start(v)},className:a&&a[u]||""}),(0,o.jsx)("span",{className:"pr-2 opacity-0 select-none",children:f})]})},d=function(){return(0,o.jsxs)(s.Z,{headerContent:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-around h-full md:justify-center md:py-10",children:[(0,o.jsxs)("div",{className:"flex flex-col-reverse items-center justify-center md:flex-row-reverse md:flex-1 md:space-x-10 md:pb-40",children:[(0,o.jsx)("div",{className:"w-[16rem] rounded-[min(20rem,50%)] md:w-[min(30%,16rem)] mt-8 md:mt-0 hover:rounded-[2rem] hover:scale-105 md:hover:scale-110 md:hover:rotate-3 transition-all duration-1000 overflow-hidden peer",children:(0,o.jsx)("img",{src:"/panda.jpg",className:"object-cover h-auto width-full",alt:"me"})}),(0,o.jsxs)("div",{className:"text-3xl sm:text-4xl peer-hover:scale-[1.03] md:peer-hover:scale-105 md:peer-hover:-translate-x-10 transition-transform duration-1000",children:[(0,o.jsxs)("h1",{className:"font-semibold ",children:["Hello! I'm Alex Lin",(0,o.jsx)("br",{}),"and I like to code."]}),(0,o.jsxs)("div",{className:"sm:px-4 sm:py-6",children:[(0,o.jsx)("p",{className:"font-light",children:"I'm a..."}),(0,o.jsx)(x,{className:"ml-0 text-5xl font-black md:ml-8",words:["Programmer","UX Designer","SW Engineer","Student"],colors:["text-red-500","text-purple-500","text-yellow-500","text-pink-600"]})]})]})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,o.jsx)("p",{className:"font-mono text-gray-500",children:"Scroll down to learn more..."}),(0,o.jsx)(a.t3p,{className:"animate-bounce"})]})]}),children:[(0,o.jsx)("div",{className:"flex flex-col items-center justify-center h-2/3",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-4xl font-black text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600",children:"Under Construction..."}),(0,o.jsx)("p",{className:"text-4xl font-semibold text-right opacity-80",children:"Coming soon!"})]})}),(0,o.jsx)(r.Z,{})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(333)}])}},function(e){e.O(0,[415,445,13,645,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);