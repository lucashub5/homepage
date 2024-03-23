(()=>{"use strict";var n={909:(n,e,t)=>{t.d(e,{A:()=>x});var o=t(601),i=t.n(o),a=t(314),r=t.n(a),s=t(417),c=t.n(s),l=new URL(t(31),t.b),p=new URL(t(423),t.b),d=new URL(t(176),t.b),f=new URL(t(400),t.b),u=r()(i()),h=c()(l),m=c()(p),g=c()(d),v=c()(f);u.push([n.id,`@font-face {\n    font-family: 'roboto';\n    src: url(${h});\n    font-weight: 300;\n}\n\n@font-face {\n    font-family: 'roboto';\n    src: url(${m});\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: 'roboto';\n    src: url(${g});\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: 'roboto';\n    src: url(${v});\n    font-weight: 700;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    font-family: 'roboto';\n    width: 100%;\n    height: 100vh;\n    background: rgb(245, 245, 245);\n    line-height: 1.5;\n    overflow-x: hidden;\n}\n\n.cont-main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: 2%;\n    margin-right: 2%;\n}\n\n.nav-main {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 15px;\n    position: fixed;\n    top: 0px;\n    background: rgb(245, 245, 245);\n    z-index: 1;\n}\n\n.nav-items {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    font-size: 15px;\n    margin-right: 2%\n}\n\nh1 {\n    font-size: 17px;\n    font-weight: 700;\n    margin-left: 2%\n}\n\n.nav-items li a {\n    text-decoration: none;\n    color: inherit;\n    font-weight: 700;\n}\n\n.nav-items li {\n    padding-left: 5px;\n    padding-right: 5px;\n    position: relative;\n    overflow: hidden;\n}\n\n.nav-items li::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 2px;\n    background-color: rgb(89, 88, 88);\n    transition: width 0.3s ease-out;\n}\n\n.nav-items li:hover::after {\n    width: 100%;\n}\n\nmain {\n    display: grid;\n    grid-template-rows: 100vh auto auto auto auto auto;\n}\n\nheader, #about, #projects, #skills, footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n    overflow: hidden;\n}\n\nsection {\n    opacity: 0;\n    transform: translateX(100%);\n    transition: transform 0.5s ease, opacity 0.5s ease;\n}\n\n.visible {\n    opacity: 1 !important;\n    transform: translateX(0) !important;\n}\n\nheader {\n    justify-content: center;\n    width: 100%;\n    font-size: 17px;\n    font-weight: 500;\n\n}\n\n.text-header {\n    display: flex;\n    flex-direction: column;\n    width: 610px;\n    height: 101px;\n    transition: transform 0.1s linear;\n}\n\n.cont-desc-header {\n    display: flex;\n    font-size: 40px;\n    font-weight: 700;\n    margin-top: 15px;\n}\n\n.expand img {\n    width: 150%;\n}\n\n.expand {\n    animation: 1s slide infinite alternate;\n    position: relative;\n    top: 38%;\n}\n\n@keyframes slide {\n    from {\n        top: 36%;\n    }\n  \n    to {\n      top: 40%;\n    }\n}\n\n#about {\n    height: 50vh;\n    justify-content: center;\n}\n\nh2 {\n    margin: 50px;\n}\n\n#about p {\n    width: 700px;\n    display: flex;\n    text-align: center;\n}\n\n.cont-projs {\n    display: grid;\n    width: 1000px;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    gap: 30px;\n}\n\nh3 {\n    margin-bottom: 5px;\n    font-weight: 500;\n}\n\n.cont-projs p {\n    width: 460px;\n    font-weight: 300;\n}\n\n.img-proj {\n    margin-bottom: 5px;\n    max-width: 460px;\n    height: 200px;\n    background: rgb(196, 196, 196);\n    overflow: hidden;\n}\n\n#skills span {\n    font-weight: 700;\n}\n\n.skills-desc {\n    font-size: 18px;\n    margin-bottom: 20px;\n}\n\n.skills-objective {\n    font-size: 18px;\n    font-weight: 700;\n}\n\n.skills-desc-two {\n    font-size: 18px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\nfooter {\n    width: 100%;\n    margin-bottom: 0px;\n}\n\nfooter ul li {\n    display: flex;\n    gap: 5px;\n}\n\n.cont-footer {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 40px;\n}\n\n.footer-desc {\n    width: 300px;\n}\n\n.cont-footer ul {\n    gap: 5px;\n}\n\n@media only screen and (max-width: 600px) {\n    h1 {\n        font-size: 30px;\n        margin: 0px;\n    }\n\n    h2 {\n        font-size: 30px;\n    }\n\n    .cont-main {\n        margin: 0px;\n    }\n    .nav-main {\n        justify-content: center;\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .nav-items {\n        font-size: 22px;\n        gap: 5px;\n        margin: 0px;\n        flex-wrap: wrap;\n        justify-content: end;\n    }\n    header {\n        justify-content: center;\n        width: 100%;\n        font-size: 25px;\n        font-weight: 500;\n    \n    }\n    .text-header {\n        display: flex;\n        flex-direction: column;\n        width: 80%;\n        height: 173px;\n        transition: transform 0.1s linear;\n    }\n    .cont-desc-header {\n        font-size: 50px;\n    }\n    #about p, .skill-cont, #contact {\n        width: 80%;\n        font-size: 22px;\n        text-align: justify;\n    }\n    .cont-projs {\n        width: 80%;\n        grid-template-rows: repeat(4, 1fr);\n        grid-template-columns: repeat(1, 1fr);\n        font-size: 22px;\n    }\n    .cont-footer ul li p {\n        display: none;\n    }\n    .cont-footer ul {\n        display: flex;\n        flex-direction: row;\n    }\n    .skills-desc, .skills-desc-two, .skills-objective {\n        font-size: 26px;\n    }\n    section {\n        opacity: 0;\n        transform: translateX(0);\n        transition: transform 1s ease, opacity 1s ease;\n    }\n}`,""]);const x=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&r[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var f=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=i(u,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}r.push(d)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=o(n,i),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},400:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},31:(n,e,t)=>{n.exports=t.p+"333da16a3f3cc391d087.ttf"},176:(n,e,t)=>{n.exports=t.p+"7c8d04cd831df3033c8a.ttf"},423:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),i=t.n(o),a=t(659),r=t.n(a),s=t(56),c=t.n(s),l=t(540),p=t.n(l),d=t(113),f=t.n(d),u=t(909),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),e()(u.A,h),u.A&&u.A.locals&&u.A.locals;const m=t.p+"730839144c126385607b.svg",g=t.p+"e40e7d7477c8cb13da56.png",v=t.p+"089dffe053a20edff291.png",x=t.p+"1a9b83c6588b9b460ae6.png",b=t.p+"ad707f620ceaabfbf5cd.png",y=t.p+"3854b546910e7a50caa7.svg",w=t.p+"4f674acb5ae5e321b0a5.svg",j=t.p+"a6b0de9eb87f9ae99313.svg",k=t.p+"3762c4a82d03b962aca9.svg",S=t.p+"81b8d7b48cfbc7aa2834.svg";let I;function C(n=!1){let e=document.querySelector(".desc-header"),t=e.textContent;if(n)return"|"!==t.charAt(t.length-1)&&(t+="|"),clearInterval(I),void(e.textContent=t);I=setInterval((()=>{"|"!==t.charAt(t.length-1)?t+="|":t=t.slice(0,-1),e.textContent=t}),500)}document.body.innerHTML=`<div class="cont-main">\n<nav class="nav-main">\n    <h1>LCA</h1>\n    <ul class="nav-items">\n        <li><a href="#home">Home</a></li>\n        <li><a href="#about">About</a></li>\n        <li><a href="#skills">Skills</a></li>\n        <li><a href="#projects">Projects</a></li>\n        <li><a href="#contact">Contact</a></li>\n    </ul>\n</nav>\n<main>\n    <header id="home">\n        <div class="text-header">\n            <p>Hey!</p>\n            <div class="cont-desc-header">\n                <p class="desc-header"></p>\n            </div>\n        </div>\n        <div class="expand">\n            <img src="${m}" alt="expand">\n        </div>\n    </header>\n    <section id="about">\n        <h2>#ABOUT</h2>\n        <p>I live in Buenos Aires, Argentina. Since I was a child, I have had an interest in computing, logic, design, and video games. From the age of 20 until today, I have dedicated myself to the exciting world of trading, where finance, decision-making, risk management, and behavioral economics intersect. In mid-2023, I sought a way to enhance my skills and merge my interests, and that's when I found software development.</p> \n    </section>\n    <section id="skills">\n        <h2>#SKILLS</h2>\n        <div class="skill-cont">\n            <p class="skills-desc">Aspiring to be Fullstack, studying at <span>The Odin Project</span>.</p>\n            <p><span>Core:</span> HTML, CSS, JavaScript</p>\n            <p><span>Frameworks:</span> React.js (current)</p>\n            <p><span>Tools:</span> VS Code, Git, Webpack, Jest, Linux</p>\n            <p class="skills-desc-two">Objective upon completing the course:</p>\n            <p class="skills-objective">Full-stack JavaScript</p>\n            <p> > Front-end (React framework)</p>\n            <p> > Back-end Node.js (Express framework / MongoDB DBMS)"</p>\n\n\n        </div>\n    </section>\n    <section id="projects">\n        <h2>#PROJECTS</h2>\n        <div class="cont-projs">\n            <div clas="proj-module">\n                <h3>Binary-Search-Trees</h3>\n                <div class="img-proj">\n                    <img src="${g}">\n                </div>\n                <p>Data structures. Implementation of a binary tree with binary search methods, insertion, deletion, rebalancing.</p>\n            </div>\n            <div clas="proj-module">\n                <h3>Knights-Travails</h3>\n                <div class="img-proj">\n                    <img src="${v}">\n                </div>\n                <p>Data structure. Implementation of graphs to search for potential shortest paths for a knight on a chessboard.</p>\n            </div>\n            <div clas="proj-module">\n                <h3>Battleship</h3>\n                <div class="img-proj">\n                    <img src="${x}">\n                </div>\n                <p>Abstraction and encapsulation. Implementation of classes to develop the logic of a naval battle game.</p>\n            </div>\n            <div clas="proj-module">\n                <h3>Todo-list</h3>\n                <div class="img-proj">\n                    <img src="${b}">\n                </div>\n                <p>DOM manipulation and JSON data loading into LocalStorage.</p>\n            </div>\n        </div>\n    </section>\n</main>\n<footer id="contact">\n    <h2>#CONTACT</h2>\n    <div class="cont-footer">\n        <p class="footer-desc">If you are interested in my profile, feel free to ask me a question through the following means.</p>\n        <ul>\n            <li>\n                <img src="${y}">\n                <p>lucascarovano@gmail.com</p>\n            </li>\n            <li>\n                <img src="${w}">\n                <p>+54 9 11 5317-3806</p>\n            </li>\n            <li>\n                <img src="${j}">\n                <p>github.com/lucashub5</p>\n            </li>\n            <li>\n                <img src="${k}">\n                <p>linkedin.com/in/lucas-carovano</p>\n\n            </li>\n            <li>\n                <img src="${S}">\n                <p>x.com/lucascarovano</p>\n            </li>\n        </ul>\n    </div>\n    <p>By Lucas Carovano</p>\n</footer>\n</div>`,function n(e,t,o=!1){C(!0);let i=0;const a=setInterval((()=>{if(document.querySelector(".desc-header").textContent=e.substring(0,i+1)+"|",i++,i>e.length){if(clearInterval(a),C(!1),o)return;setTimeout((()=>{!function(e){C(!0);let t=document.querySelector(".desc-header").textContent,o=t.length;const i=setInterval((()=>{document.querySelector(".desc-header").textContent=t.substring(0,o-1)+"|",o--,0===o&&(clearInterval(i),C(),setTimeout((()=>{n("I'm Lucas Carovano, a developer.",50,!0)}),500))}),e)}(t)}),500)}}),t)}("Welcome!",50),window.addEventListener("scroll",(function(){const n=document.querySelector(".text-header"),e=n.getBoundingClientRect(),t=window.innerHeight,o=e.top/t;let i=1;o>.3?i=1:o<.99&&(i=1+1*(.5-o)),n.style.transform=`scale(${i})`,document.querySelectorAll("section").forEach((function(n){n.getBoundingClientRect().top<t?n.classList.add("visible"):n.classList.remove("visible")}))})),document.querySelectorAll(".nav-items a").forEach((n=>{n.addEventListener("click",(function(n){n.preventDefault();const e=this.getAttribute("href").substring(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}))}))})()})();