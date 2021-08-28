"use strict";(self.webpackChunkkatan_docs=self.webpackChunkkatan_docs||[]).push([[848],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9361:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return x},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return y}});var a=n(7462),r=n(3366),l=n(7294),o=n(3905),i=n(9443);var s=function(){var e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),c="tabItem_1uMI",d="tabItemActive_2DSg";var p=37,m=39;var f=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,o=e.groupId,i=e.className,f=s(),h=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,l.useState)(a),w=v[0],k=v[1],y=l.Children.toArray(e.children),g=[];if(null!=o){var x=h[o];null!=x&&x!==w&&r.some((function(e){return e.value===x}))&&k(x)}var C=function(e){var t=e.currentTarget,n=g.indexOf(t),a=r[n].value;k(a),null!=o&&(b(o,a),setTimeout((function(){var e,n,a,r,l,o,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,i=o.innerHeight,s=o.innerWidth,n>=0&&l<=s&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case m:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case p:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},i)},r.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:C,onClick:C},n)}))),t?(0,l.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},b=["components"],v={id:"install-windows",title:"Install Katan CLI on Windows",sidebar_position:3},w=void 0,k={unversionedId:"cli/install-and-run/install-windows",id:"cli/install-and-run/install-windows",isDocsHomePage:!1,title:"Install Katan CLI on Windows",description:"Katan CLI has an executable made exclusively to run on Windows, to use it just download it and run it.",source:"@site/docs/cli/install-and-run/install-windows.mdx",sourceDirName:"cli/install-and-run",slug:"/cli/install-and-run/install-windows",permalink:"/br/docs/cli/install-and-run/install-windows",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/cli/install-and-run/install-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1630127484,formattedLastUpdatedAt:"8/28/2021",sidebarPosition:3,frontMatter:{id:"install-windows",title:"Install Katan CLI on Windows",sidebar_position:3},sidebar:"docs",previous:{title:"Introduction",permalink:"/br/docs/cli/install-and-run/introduction"},next:{title:"Update",permalink:"/br/docs/cli/update"}},y=[{value:"Install with PowerShell",id:"install-with-powershell",children:[]},{value:"Run the Katan CLI",id:"run-the-katan-cli",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Next steps",id:"next-steps",children:[]}],g={toc:y};function x(e){var t=e.components,n=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Katan CLI has an executable made exclusively to run on Windows, to use it just download it and run it."),(0,o.kt)("p",null,"The Windows executable that we all know ",(0,o.kt)("inlineCode",{parentName:"p"},".exe")," is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KatanPanel/katan-cli/releases"},"Official Katan CLI repository")," for anyone to download. You can change the version by changing the installation address to your preferred version."),(0,o.kt)("h2",{id:"install-with-powershell"},"Install with PowerShell"),(0,o.kt)("p",null,"Let's download the executable via PowerShell's ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoke-WebRequest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," at the command prompt, choose whichever you prefer."),(0,o.kt)(f,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Windows Command Prompt",value:"command-prompt"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-WebRequest "https://github.com/KatanPanel/katan-cli/releases/download/latest/katan-cli-mingwX64.exe" -Outfile katan.exe\n')),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Outfile")," changes the name of the executable file."))),(0,o.kt)(h,{value:"command-prompt",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o katan.exe https://github.com/KatanPanel/katan-cli/releases/latest/main/katan-cli-mingwX64.exe\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-o")," changes the name of the executable file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-L")," follow URL redirections.")))),(0,o.kt)("h2",{id:"run-the-katan-cli"},"Run the Katan CLI"),(0,o.kt)("p",null,"Now that installation is complete, you can finally enjoy all that Katan CLI has to offer.\nRun the ",(0,o.kt)("inlineCode",{parentName:"p"},"katan version")," command to see what version has been installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"katan version\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you encounter a problem installing the CLI, report the issue in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KatanPanel/katan-cli/issues"},"Github issues")," and we will help you."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Installation ok, everything worked as expected!? Perfect, now it's nice that you learn to use Katan CLI commands to manage your servers effectively."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting started with Katan CLI")))}x.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);