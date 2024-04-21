"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[40267],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},i=void 0,l={unversionedId:"others/contributing",id:"others/contributing",title:"Contributing Guide",description:"We are committed to maintaining a happy community that helps each other, welcome every contributor to join us!",source:"@site/docs/others/contributing.md",sourceDirName:"others",slug:"/others/contributing",permalink:"/docs/others/contributing",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/others/contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},sidebar:"docs",previous:{title:"Common issues",permalink:"/docs/help/issue"},next:{title:"Related resources",permalink:"/docs/others/resource"}},s={},c=[{value:"Kinds of Contributions",id:"kinds-of-contributions",level:3},{value:"Getting HertzBeat up and running",id:"getting-hertzbeat-up-and-running",level:3},{value:"Find tasks",id:"find-tasks",level:3},{value:"Submit Pull Request",id:"submit-pull-request",level:3},{value:"Wait for the code to be merged",id:"wait-for-the-code-to-be-merged",level:3},{value:"After the code is merged",id:"after-the-code-is-merged",level:3},{value:"How to become a Committer?",id:"how-to-become-a-committer",level:3},{value:"Join Discussion",id:"join-discussion",level:3},{value:"\ud83e\udd50 Architecture",id:"-architecture",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We are committed to maintaining a happy community that helps each other, welcome every contributor to join us!")),(0,r.yg)("h3",{id:"kinds-of-contributions"},"Kinds of Contributions"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In the HertzBeat community, there are many ways to contribute:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83d\udcbb",(0,r.yg)("strong",{parentName:"p"},"Code"),": Can help the community complete some tasks, write new features or fix some bugs;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u26a0\ufe0f",(0,r.yg)("strong",{parentName:"p"},"Test"),": Can come to participate in the writing of test code, including unit testing, integration testing, e2e testing;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83d\udcd6",(0,r.yg)("strong",{parentName:"p"},"Docs"),": Can write or Documentation improved to help users better understand and use HertzBeat;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83d\udcdd",(0,r.yg)("strong",{parentName:"p"},"Blog"),": You can write articles about HertzBeat to help the community better promote;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83e\udd14",(0,r.yg)("strong",{parentName:"p"},"Discussion"),": You can participate in the discussion of new features of HertzBeat and integrate your ideas with HertzBeat;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83d\udca1",(0,r.yg)("strong",{parentName:"p"},"Preach"),": Can help publicize or promote the HertzBeat community, speak in meetup or summit;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\ud83d\udcac",(0,r.yg)("strong",{parentName:"p"},"Suggestion"),": You can also make some suggestions to the project or community to promote the healthy development of the community;"))),(0,r.yg)("p",null,"More see ",(0,r.yg)("a",{parentName:"p",href:"https://allcontributors.org/docs/en/emoji-key"},"Contribution Types")),(0,r.yg)("p",null,"Even small corrections to typos are very welcome :)"),(0,r.yg)("h3",{id:"getting-hertzbeat-up-and-running"},"Getting HertzBeat up and running"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To get HertzBeat code running on your development tools, and able to debug with breakpoints.\nThis is a front-end and back-end separation project. To start the local code, the back-end ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/manager"},"manager")," and the front-end ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/web-app"},"web-app")," must be started separately.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Backend start")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Requires ",(0,r.yg)("inlineCode",{parentName:"li"},"maven3+"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"java17")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"lombok")," environments"),(0,r.yg)("li",{parentName:"ol"},"(Optional) Modify the configuration file-",(0,r.yg)("inlineCode",{parentName:"li"},"manager/src/main/resources/application.yml")),(0,r.yg)("li",{parentName:"ol"},"Start ",(0,r.yg)("inlineCode",{parentName:"li"},"springboot manager")," service ",(0,r.yg)("inlineCode",{parentName:"li"},"manager/src/main/java/org/apache/hertzbeat/manager/Manager.java"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Front-web start")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Need ",(0,r.yg)("inlineCode",{parentName:"li"},"nodejs npm angular-cli")," environment"),(0,r.yg)("li",{parentName:"ol"},"Install yarn: ",(0,r.yg)("inlineCode",{parentName:"li"},"npm install -g yarn")),(0,r.yg)("li",{parentName:"ol"},"Execute under the front-end project directory web-app: ",(0,r.yg)("inlineCode",{parentName:"li"},"yarn install")),(0,r.yg)("li",{parentName:"ol"},"Install angular-cli globally: ",(0,r.yg)("inlineCode",{parentName:"li"},"npm install -g @angular/cli@14 --registry=https://registry.npm.taobao.org")),(0,r.yg)("li",{parentName:"ol"},"After the local backend is started, start the local frontend in the web-app directory: ",(0,r.yg)("inlineCode",{parentName:"li"},"ng serve --open")),(0,r.yg)("li",{parentName:"ol"},"Browser access to localhost:4200 to start, default account/password is ",(0,r.yg)("em",{parentName:"li"},"admin/hertzbeat"))),(0,r.yg)("h3",{id:"find-tasks"},"Find tasks"),(0,r.yg)("p",null,"Find the issue you are interested in! On our GitHub repo issue list, we often publish some issues with the label good first issue or status: volunteer wanted.\nThese issues welcome the help of contributors. Among them, good first issues tend to have low thresholds and are suitable for novices."),(0,r.yg)("p",null,"Of course, if you have a good idea, you can also propose it directly on GitHub Discussion or contact with community."),(0,r.yg)("h3",{id:"submit-pull-request"},"Submit Pull Request"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"First you need to fork your target ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat"},"hertzbeat repository"),"."),(0,r.yg)("li",{parentName:"ol"},"Then download the code locally with git command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/hertzbeat.git #Recommended  \n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"After the download is complete, please refer to the getting started guide or README file of the target repository to initialize the project."),(0,r.yg)("li",{parentName:"ol"},"Then, you can refer to the following command to submit the code:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git checkout -b a-feature-branch #Recommended  \n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Submit the coed as a commit, the commit message format specification required: ","[module name or type name]"," feature or bugfix or doc: custom message.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git add <modified file/path> \ngit commit -m '[docs]feature: necessary instructions' #Recommended \n")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Push to the remote repository")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git push origin a-feature-branch   \n")),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Then you can initiate a new PR (Pull Request) on GitHub.")),(0,r.yg)("p",null,"Please note that the title of the PR needs to conform to our spec, and write the necessary description in the PR to facilitate code review by Committers and other contributors."),(0,r.yg)("h3",{id:"wait-for-the-code-to-be-merged"},"Wait for the code to be merged"),(0,r.yg)("p",null,"After submitting the PR, the Committee or the community's friends will review the code you submitted (Code Review), and will propose some modification suggestions or conduct some discussions. Please pay attention to your PR in time."),(0,r.yg)("p",null,"If subsequent changes are required, there is no need to initiate a new PR. After submitting a commit on the original branch and pushing it to the remote repository, the PR will be automatically updated."),(0,r.yg)("p",null,"In addition, our project has a relatively standardized and strict CI inspection process. After submitting PR, CI will be triggered. Please pay attention to whether it passes the CI inspection."),(0,r.yg)("p",null,"Finally, the Committers can merge the PR into the master branch."),(0,r.yg)("h3",{id:"after-the-code-is-merged"},"After the code is merged"),(0,r.yg)("p",null,"After the code has been merged, you can delete the development branch on both the local and remote repositories:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git branch -d a-dev-branch\ngit push origin --delete a-dev-branch\n")),(0,r.yg)("p",null,"On the master/main branch, you can do the following to sync the upstream repository:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/hertzbeat.git #Bind the remote warehouse, if it has been executed, it does not need to be executed again\ngit checkout master \ngit pull upstream master\n")),(0,r.yg)("h3",{id:"how-to-become-a-committer"},"How to become a Committer?"),(0,r.yg)("p",null,"With the above steps, you are a contributor to HertzBeat. Repeat the previous steps to stay active in the community, keep at, you can become a Committer!"),(0,r.yg)("h3",{id:"join-discussion"},"Join Discussion"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/discussions"},"Github Discussion")),(0,r.yg)("p",null,"Add WeChat account ",(0,r.yg)("inlineCode",{parentName:"p"},"tan-cloud")," to pull you into the WeChat group."),(0,r.yg)("h2",{id:"-architecture"},"\ud83e\udd50 Architecture"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat/tree/master/manager"},"manager"))," Provide monitoring management, system management basic services.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Provides monitoring management, monitoring configuration management, system user management, etc."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat/tree/master/collector"},"collector"))," Provide metrics data collection services.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Use common protocols to remotely collect and obtain peer-to-peer metrics data."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat/tree/master/warehouse"},"warehouse"))," Provide monitoring data warehousing services.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Metrics data management, data query, calculation and statistics."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat/tree/master/alerter"},"alerter"))," Provide alert service.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Alarm calculation trigger, monitoring status linkage, alarm configuration, and alarm notification."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat/tree/master/web-app"},"web-app"))," Provide web ui.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Angular Web UI.")))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/hertzbeat/home/static/img/docs/hertzbeat-arch.svg",alt:"hertzBeat"})))}u.isMDXComponent=!0}}]);