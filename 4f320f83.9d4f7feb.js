(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,h=u["".concat(a,".").concat(m)]||u[m]||d[m]||c;return o?n.a.createElement(h,s(s({ref:t},l),{},{components:o})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=o[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},83:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return a})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return l}));var r=o(3),n=(o(0),o(113));const c={title:"Projects",description:"Yacht Project Documentation",id:"Projects"},a={unversionedId:"Projects/Projects",id:"Projects/Projects",isDocsHomePage:!1,title:"Projects",description:"Yacht Project Documentation",source:"@site/docs/Projects/explained.md",slug:"/Projects/Projects",permalink:"/docs/Projects/Projects",editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Projects/explained.md",version:"current",sidebar:"documentation",previous:{title:"User Settings",permalink:"/docs/Pages/User_Settings"},next:{title:"Advanced Projects",permalink:"/docs/Projects/Advanced"}},s=[],i={toc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Docker-compose projects are a container orchestration tool to help manage containers that need to talk to each other. Yacht provides an in browser docker-compose editor as well as a way to manage them easily via the projects tab in the yacht UI."),Object(n.b)("p",null,"The easiest way to get started is to find a project that you want to launch, then click on the ",Object(n.b)("inlineCode",{parentName:"p"},"+")," button in the projects tab to create a new project. This will create a new folder with your project name and write whatever you've put into the editor into the docker-compose.yml inside of that folder."),Object(n.b)("p",null,"By default, these are mapped in the container to ",Object(n.b)("inlineCode",{parentName:"p"},"/config/compose"),". You'll want to have a separate folder inside of ",Object(n.b)("inlineCode",{parentName:"p"},"/config/compose")," with the project name as the name of the folder (if you create your project via yacht this is taken care of for you)."),Object(n.b)("p",null,"Yacht uses docker-compose via the sh submodule for python so it supports the latest versions that are available and you wont need to worry about mismatches."),Object(n.b)("h1",{id:"docker-compose-folder-structure"},"Docker Compose Folder Structure:"),Object(n.b)("p",null,"The following is an example folder structure:"),Object(n.b)("p",null,'!!! code "Folder Structure"'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"``` bash\ncompose\n\u251c\u2500\u2500 docker-pulls                ### Project Folder###\n\u2502\xa0\xa0 \u251c\u2500\u2500 Docker_Hub_Stats.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.monitoring\n\u2502\xa0\xa0 \u251c\u2500\u2500 docker-compose.yml      ### docker-compose.yml ###\n\u2502\xa0\xa0 \u251c\u2500\u2500 prometheus\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 alert.rules\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 prometheus.yml\n\u2502\xa0\xa0 \u2514\u2500\u2500 prometheus.yml\n\u251c\u2500\u2500 opendistro                  ### Project Folder\n \xa0\xa0 \u2514\u2500\u2500 docker-compose.yml      ### docker-compose.yml ###\n```\n")),Object(n.b)("p",null,"The way this works is the Project will be named the same as the project folder. Inside of the project folder you can put the docker-compose.yml file as well as any other files you need to pass through."),Object(n.b)("p",null,"These will be seen by Yacht and you'll be able to control the projects, as well as the services within them. When you view a project, the docker-compose file is parsed and you'll see all of the details of the project."))}l.isMDXComponent=!0}}]);