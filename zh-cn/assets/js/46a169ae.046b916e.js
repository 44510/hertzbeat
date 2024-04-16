"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[39418],{15680:(e,a,r)=>{r.d(a,{xA:()=>o,yg:()=>h});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function m(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),i=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},o=function(e){var a=i(e.components);return t.createElement(c.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),u=i(r),h=n,l=u["".concat(c,".").concat(h)]||u[h]||g[h]||s;return r?t.createElement(l,p(p({ref:a},o),{},{components:r})):t.createElement(l,p({ref:a},o))}));function h(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=u;var m={};for(var c in a)hasOwnProperty.call(a,c)&&(m[c]=a[c]);m.originalType=e,m.mdxType="string"==typeof e?e:n,p[1]=m;for(var i=2;i<s;i++)p[i]=r[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89738:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var t=r(58168),n=(r(96540),r(15680));const s={id:"template",title:"\u76d1\u63a7\u6a21\u7248\u4e2d\u5fc3",sidebar_label:"\u76d1\u63a7\u6a21\u7248"},p=void 0,m={unversionedId:"template",id:"template",title:"\u76d1\u63a7\u6a21\u7248\u4e2d\u5fc3",description:"Hertzbeat \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/template.md",sourceDirName:".",slug:"/template",permalink:"/zh-cn/docs/template",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/template.md",tags:[],version:"current",frontMatter:{id:"template",title:"\u76d1\u63a7\u6a21\u7248\u4e2d\u5fc3",sidebar_label:"\u76d1\u63a7\u6a21\u7248"},sidebar:"docs",previous:{title:"Push Style Custom Monitoring",permalink:"/zh-cn/docs/advanced/extend-push"},next:{title:"\u4ea4\u6d41\u8054\u7cfb",permalink:"/zh-cn/docs/community/contact"}},c={},i=[{value:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7\u6a21\u7248",id:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7\u6a21\u7248",level:3},{value:"\u6570\u636e\u5e93\u76d1\u63a7\u6a21\u7248",id:"\u6570\u636e\u5e93\u76d1\u63a7\u6a21\u7248",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u6a21\u7248",id:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u6a21\u7248",level:3},{value:"\u4e2d\u95f4\u4ef6\u76d1\u63a7\u6a21\u7248",id:"\u4e2d\u95f4\u4ef6\u76d1\u63a7\u6a21\u7248",level:3},{value:"\u4e91\u539f\u751f\u76d1\u63a7\u6a21\u7248",id:"\u4e91\u539f\u751f\u76d1\u63a7\u6a21\u7248",level:3},{value:"\u7f51\u7edc\u76d1\u63a7\u6a21\u7248",id:"\u7f51\u7edc\u76d1\u63a7\u6a21\u7248",level:3}],o={toc:i};function g(e){let{components:a,...s}=e;return(0,n.yg)("wrapper",(0,t.A)({},o,s,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Hertzbeat \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002  ")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06",(0,n.yg)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus"),"\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u60a8\u53ea\u9700\u5728\u6d4f\u89c8\u5668\u914d\u7f6e",(0,n.yg)("inlineCode",{parentName:"p"},"YML"),"\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u7684\u6307\u6807\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6e\u4e0b\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u6b3e",(0,n.yg)("inlineCode",{parentName:"p"},"K8s"),"\u6216",(0,n.yg)("inlineCode",{parentName:"p"},"Docker"),"\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f")),(0,n.yg)("p",null,"\u8fd9\u662f\u5b83\u7684\u67b6\u6784\u539f\u7406:   "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzBeat",src:r(72428).A,width:"2814",height:"1772"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6211\u4eec\u5c06\u6240\u6709\u76d1\u63a7\u91c7\u96c6\u7c7b\u578b(mysql,website,jvm,k8s)\u90fd\u5b9a\u4e49\u4e3ayml\u6a21\u7248\uff0c\u7528\u6237\u53ef\u4ee5\u5bfc\u5165\u8fd9\u4e9b\u6a21\u7248\u5230hertzbeat\u7cfb\u7edf\u4e2d\uff0c\u4f7f\u5176\u652f\u6301\u5bf9\u5e94\u7c7b\u578b\u7684\u76d1\u63a7\uff0c\u975e\u5e38\u65b9\u4fbf\uff01")," "),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(35008).A,width:"4064",height:"2166"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6b22\u8fce\u5927\u5bb6\u4e00\u8d77\u8d21\u732e\u4f60\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u7684\u901a\u7528\u76d1\u63a7\u7c7b\u578bYML\u6a21\u7248\uff0c\u53ef\u7528\u7684\u6a21\u677f\u5982\u4e0b:")),(0,n.yg)("h3",{id:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7\u6a21\u7248"},"\u5e94\u7528\u670d\u52a1\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-website.yml"},"Website monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-api.yml"},"HTTP API")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-ping.yml"},"PING Connectivity")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-port.yml"},"Port Telnet")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-fullsite.yml"},"Full site monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-ssl_cert.yml"},"SSL Cert monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-jvm.yml"},"JVM monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-springboot2.yml"},"SpringBoot2.0")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-springboot3.yml"},"SpringBoot3.0")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-ftp.yml"},"FTP Server")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"\u6570\u636e\u5e93\u76d1\u63a7\u6a21\u7248"},"\u6570\u636e\u5e93\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-mysql.yml"},"MYSQL database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-mariadb.yml"},"MariaDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-postgresql.yml"},"PostgreSQL database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-sqlserver.yml"},"SqlServer database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-oracle.yml"},"Oracle database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-dm.yml"},"DM database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-opengauss.yml"},"OpenGauss database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-iotdb.yml"},"IoTDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-elasticsearch.yml"},"ElasticSearch database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-mongodb.yml"},"MongoDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-clickhouse.yml"},"ClickHouse database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-redis.yml"},"Redis database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-redis_sentinel.yml"},"Redis Sentinel database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-redis_cluster.yml"},"Redis Cluster database monitoring")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u6a21\u7248"},"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-linux.yml"},"Linux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-windows.yml"},"Windows operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-ubuntu.yml"},"Ubuntu operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-centos.yml"},"Centos operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-euleros.yml"},"EulerOS operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-coreos.yml"},"Fedora CoreOS operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-opensuse.yml"},"OpenSUSE operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-rockylinux.yml"},"Rocky Linux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-redhat.yml"},"Red Hat operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-freebsd.yml"},"FreeBSD operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-almalinux.yml"},"AlmaLinux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-debian.yml"},"Debian operating system monitoring")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"\u4e2d\u95f4\u4ef6\u76d1\u63a7\u6a21\u7248"},"\u4e2d\u95f4\u4ef6\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-zookeeper.yml"},"Zookeeper")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-kafka.yml"},"Kafka")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-tomcat.yml"},"Tomcat")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-shenyu.yml"},"ShenYu")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-dynamic_tp.yml"},"DynamicTp")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-rabbitmq.yml"},"RabbitMQ")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-activemq.yml"},"ActiveMQ")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-jetty.yml"},"Jetty")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-flink.yml"},"Flink")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-nacos.yml"},"Nacos")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"\u4e91\u539f\u751f\u76d1\u63a7\u6a21\u7248"},"\u4e91\u539f\u751f\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-docker.yml"},"Docker")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-kubernetes.yml"},"Kubernetes")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"\u7f51\u7edc\u76d1\u63a7\u6a21\u7248"},"\u7f51\u7edc\u76d1\u63a7\u6a21\u7248"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-cisco_switch.yml"},"CiscoSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-hpe_switch.yml"},"HpeSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-huawei_switch.yml"},"HuaweiSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-tplink_switch.yml"},"TpLinkSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/hertzbeat/master/manager/src/main/resources/define/app-h3c_switch.yml"},"H3CSwitch")," ",(0,n.yg)("br",null)),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Have Fun!")))}g.isMDXComponent=!0},35008:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"},72428:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"}}]);