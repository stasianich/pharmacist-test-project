(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a142c6b4"],{"1be2":function(t,e,n){t.exports=n.p+"img/Stepan.1989ff5f.jpg"},"2d16":function(t,e,n){"use strict";n("9d7f")},"34ea":function(t,e,n){t.exports=n.p+"img/Maria.22603e0c.jpg"},4556:function(t,e,n){t.exports=n.p+"img/Irina.3ee3f53a.jpg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("1d80"),c=n("577e"),i=n("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),l=function(t){return function(e){var n=c(s(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"58e2":function(t,e,n){},"59fc":function(t,e,n){t.exports=n.p+"img/Lubov.31bf6164.jpg"},"6dc3":function(t,e,n){t.exports=n.p+"img/unhappy_icon.8dbc59a7.svg"},7156:function(t,e,n){var s=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,a;return c&&"function"==typeof(i=e.constructor)&&i!==n&&s(a=i.prototype)&&a!==n.prototype&&c(t,a),t}},"7d36":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var s=n("7a23"),c={key:1,class:"game-page"},i={class:"main-board"},a=["src"],o={class:"patient-card__text"},r={class:"patient-card__title"},l={class:"patient-card__description"},u={class:"game-buttons"};function p(t,e,n,p,b,d){var g=Object(s["z"])("Results"),f=Object(s["z"])("SideBar");return this.count<0?(Object(s["u"])(),Object(s["d"])(g,{key:0,pills:this.pills,totalAmount:this.patients.length,onResetGame:d.resetGame},null,8,["pills","totalAmount","onResetGame"])):(Object(s["u"])(),Object(s["f"])("div",c,[Object(s["j"])(f,{pills:b.pills,count:b.count,patientsAmount:this.patients.length,onResetGame:d.resetGame},null,8,["pills","count","patientsAmount","onResetGame"]),Object(s["g"])("section",i,[Object(s["g"])("div",{class:Object(s["p"])(["patient-card",{"card-success-first-pill":"Препарат 1"===this.showMark,"card-success-second-pill":"Препарат 2"===this.showMark,"card-success-third-pill":"Препарат 3"===this.showMark}]),onTouchstart:e[0]||(e[0]=function(){return d.handleSwipe&&d.handleSwipe.apply(d,arguments)})},[this.patients[this.count].photo?(Object(s["u"])(),Object(s["f"])("img",{key:0,src:this.patients[this.count].photo,alt:"Patient`s photo",class:"patient-card__photo"},null,8,a)):Object(s["e"])("",!0),Object(s["g"])("div",o,[Object(s["g"])("h3",r,Object(s["B"])(b.patients[b.count].name),1),Object(s["g"])("article",l,Object(s["B"])(b.patients[b.count].description),1)]),this.showMark?(Object(s["u"])(),Object(s["f"])("div",{key:1,class:Object(s["p"])(["mark-success",{"first-pill-success":"Препарат 1"===this.showMark,"second-pill-success":"Препарат 2"===this.showMark,"third-pill-success":"Препарат 3"===this.showMark}])},Object(s["B"])(this.showMark),3)):Object(s["e"])("",!0)],34),Object(s["g"])("section",u,[Object(s["g"])("button",{type:"button",class:"game-buttons__button-1",onClick:e[1]||(e[1]=function(t){return d.updateBoard(1)})}," Препарат 1 "),Object(s["g"])("button",{type:"button",class:"game-buttons__button-2",onClick:e[2]||(e[2]=function(t){return d.updateBoard(2)})}," Препарат 2 "),Object(s["g"])("button",{type:"button",class:"game-buttons__button-3",onClick:e[3]||(e[3]=function(t){return d.updateBoard(3)})}," Препарат 3 ")])])]))}var b=n("6dc3"),d=n.n(b),g=n("a9d6"),f=n.n(g),h=n("8f56"),j=n.n(h),m={class:"sidebar"},O={class:"sidebar__nav nav"},_={class:"status"},v=Object(s["g"])("h2",{class:"status__title"}," Параметри: ",-1),k={class:"status__rating-board"},w={class:"rating"},y=Object(s["g"])("img",{src:d.a,alt:"Unhappy emoji",class:"rating__emoji"},null,-1),M={class:"rating__count"},P={class:"rating"},A=Object(s["g"])("img",{src:f.a,alt:"Happy emoji",class:"rating__emoji"},null,-1),B={class:"rating__count"},I={class:"rating"},N=Object(s["g"])("img",{src:j.a,alt:"Heart emoji",class:"rating__emoji"},null,-1),T={class:"rating__count"},x={class:"queue"},E=Object(s["g"])("span",{class:"queue__title"}," Залишилось в черзі: ",-1),S={class:"queue__count count"},C={class:"count__current-count"},G={class:"count__max"};function R(t,e,n,c,i,a){var o=Object(s["z"])("router-link");return Object(s["u"])(),Object(s["f"])("section",m,[Object(s["g"])("nav",O,[Object(s["j"])(o,{to:"/",class:"nav__home"}),Object(s["g"])("button",{type:"button",onClick:e[0]||(e[0]=function(e){return t.$emit("reset-game")}),class:"nav__retry"})]),Object(s["g"])("section",_,[v,Object(s["g"])("div",k,[Object(s["g"])("div",w,[y,Object(s["g"])("span",M,Object(s["B"])(n.pills.firstPill),1)]),Object(s["g"])("div",P,[A,Object(s["g"])("span",B,Object(s["B"])(n.pills.secondPill),1)]),Object(s["g"])("div",I,[N,Object(s["g"])("span",T,Object(s["B"])(n.pills.thirdPill),1)])])]),Object(s["g"])("section",x,[E,Object(s["g"])("span",S,[Object(s["g"])("span",C,Object(s["B"])(n.count),1),Object(s["g"])("span",G,Object(s["B"])(" / ".concat(n.patientsAmount)),1)])])])}var F={props:["pills","count","patientsAmount"]};n("faf9");F.render=R;var L=F,q=n("e5f5"),z=n.n(q),V={class:"results-page"},X={class:"left-section"},Y={class:"results"},U={class:"score-board"},$={class:"score-board__pill pill"},H={class:"pill__score"},J=Object(s["g"])("span",{class:"pill__title"}," Препарат 1 ",-1),D={class:"score-board__pill pill"},K={class:"pill__score"},Q=Object(s["g"])("span",{class:"pill__title"}," Препарат 2 ",-1),W={class:"score-board__pill pill"},Z={class:"pill__score"},tt=Object(s["g"])("span",{class:"pill__title"}," Препарат 3 ",-1),et=Object(s["h"])('<div class="line"></div><article class="common-info"><h2 class="common-info__signature-title"> Ваш результат: </h2><h1 class="common-info__result-title"><strong>«Хто такий фармацевт?»</strong></h1><p class="common-info__description"> Фармацевт (Фармаколог) — молодший спеціаліст з середньою фармацевтичною освітою, працюючий в аптеках, аптечних складах, контрольно-аналітичних лабораторіях, фармацевтичних фабриках і виробництвах, на підприємствах хіміко-фармацевтичної промисловості, в органах управління фармацевтичної служби, фармацевтичних фірмах, підрозділах державної служби України лікарських засобів, науково-дослідницьких інститутах й навчальних закладах. </p></article>',2),nt=Object(s["g"])("section",{class:"rigth-section"},[Object(s["g"])("img",{src:z.a,alt:"Stupid doctor and patient",class:"rigth-section__image"})],-1);function st(t,e,n,c,i,a){var o=Object(s["z"])("router-link");return Object(s["u"])(),Object(s["f"])("div",V,[Object(s["g"])("section",X,[Object(s["j"])(o,{to:"/",class:"go-to-main-page"}),Object(s["g"])("div",Y,[Object(s["g"])("section",U,[Object(s["g"])("div",$,[Object(s["g"])("span",H,Object(s["B"])(a.getPercentage(this.pills.firstPill/this.totalAmount)),1),J]),Object(s["g"])("div",D,[Object(s["g"])("span",K,Object(s["B"])(a.getPercentage(this.pills.secondPill/this.totalAmount)),1),Q]),Object(s["g"])("div",W,[Object(s["g"])("span",Z,Object(s["B"])(a.getPercentage(this.pills.thirdPill/this.totalAmount)),1),tt])]),et]),Object(s["g"])("div",{onClick:e[0]||(e[0]=function(e){return t.$emit("reset-game")}),class:"try-again-button"}," Спробувати ще ")]),nt])}n("a9e3");var ct={props:{pills:{type:Object,required:!0},totalAmount:Number},methods:{getPercentage:function(t){return"".concat(Math.round(100*t),"%")}}};n("2d16");ct.render=st;var it=ct,at=(n("d3b7"),function(t){return new Promise((function(e){e(ot(t))})).then((function(t){return new Promise((function(e){addEventListener("touchend",(function(n){e(rt(n,t[0],t[1]))}),{once:!0})}))}))}),ot=function(t){if(1===t.changedTouches.length){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY;return[e,n]}},rt=function(t,e,n){if(1===t.changedTouches.length){var s=t.changedTouches[0].clientX,c=t.changedTouches[0].clientY,i=s-e,a=c-n;if(Math.abs(i)>Math.abs(a)){if(i>0)return"right";if(i<0)return"left"}else if(Math.abs(i)<Math.abs(a))return a<0?"up":"down"}},lt={data:function(){return{patients:[{id:1,name:"Марія, 19 років",photo:n("34ea"),description:"Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд."},{id:2,name:"Степан, 61 рік",photo:n("1be2"),description:"Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?"},{id:3,name:"Любов, 58 років",photo:n("59fc"),description:"Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною."},{id:4,name:"Олександр, 20 років",photo:n("fa95"),description:"Порекомендуйте ефективний препарат від болю в горлі за розумну ціну."},{id:5,name:"Ірина, 55 років",photo:n("4556"),description:"У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною."}],pills:{firstPill:0,secondPill:0,thirdPill:0},count:4,showMark:""}},components:{SideBar:L,Results:it},methods:{resetGame:function(){this.pills={firstPill:0,secondPill:0,thirdPill:0},this.count=4},updateBoard:function(t){var e=this,n=600;switch(t){case 1:this.showMark="Препарат 1",this.pills["firstPill"]+=1,setTimeout((function(){e.showMark="",e.count--}),n);break;case 2:this.showMark="Препарат 2",this.pills["secondPill"]+=1,setTimeout((function(){e.showMark="",e.count--}),n);break;case 3:this.showMark="Препарат 3",this.pills["thirdPill"]+=1,setTimeout((function(){e.showMark="",e.count--}),n);break}clearTimeout()},handleSwipe:function(t){var e=this;at(t).then((function(t){switch(t){case"right":e.updateBoard(3);break;case"left":e.updateBoard(1);break;case"up":e.updateBoard(2);break}}))}}};n("913e");lt.render=p;e["default"]=lt},"8f56":function(t,e,n){t.exports=n.p+"img/heart_icon.ec0f5ae5.svg"},"913e":function(t,e,n){"use strict";n("db9a")},"9d7f":function(t,e,n){},a9d6:function(t,e,n){t.exports=n.p+"img/happy_icon.dd54dcba.svg"},a9e3:function(t,e,n){"use strict";var s=n("83ab"),c=n("da84"),i=n("94ca"),a=n("6eeb"),o=n("5135"),r=n("c6b6"),l=n("7156"),u=n("d9b5"),p=n("c04e"),b=n("d039"),d=n("7c73"),g=n("241c").f,f=n("06cf").f,h=n("9bf2").f,j=n("58a8").trim,m="Number",O=c[m],_=O.prototype,v=r(d(_))==m,k=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,s,c,i,a,o,r,l=p(t,"number");if("string"==typeof l&&l.length>2)if(l=j(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,c=49;break;case 79:case 111:s=8,c=55;break;default:return+l}for(i=l.slice(2),a=i.length,o=0;o<a;o++)if(r=i.charCodeAt(o),r<48||r>c)return NaN;return parseInt(i,s)}return+l};if(i(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(v?b((function(){_.valueOf.call(n)})):r(n)!=m)?l(new O(k(e)),n,y):k(e)},M=s?g(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;M.length>P;P++)o(O,w=M[P])&&!o(y,w)&&h(y,w,f(O,w));y.prototype=_,_.constructor=y,a(c,m,y)}},b0c0:function(t,e,n){var s=n("83ab"),c=n("9bf2").f,i=Function.prototype,a=i.toString,o=/^\s*function ([^ (]*)/,r="name";s&&!(r in i)&&c(i,r,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},db9a:function(t,e,n){},e5f5:function(t,e,n){t.exports=n.p+"img/image-result-page.870d6177.png"},fa95:function(t,e,n){t.exports=n.p+"img/Oleksandr.75700e56.jpg"},faf9:function(t,e,n){"use strict";n("58e2")}}]);
//# sourceMappingURL=chunk-a142c6b4.b8ed8cfd.js.map