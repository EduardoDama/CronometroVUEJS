(function(){"use strict";var t={381:function(t,n,e){var o=e(5130),s=e(6768);function i(t,n,e,o,i,r){const a=(0,s.g2)("Cronometro");return(0,s.uX)(),(0,s.CE)(s.FK,null,[n[0]||(n[0]=(0,s.Lk)("h1",null,"Cronômetro",-1)),(0,s.bF)(a)],64)}const r={id:"botoes"};function a(t,n,e,i,a,u){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",null,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>a.horas=t),maxlength:"2",inputmode:"numeric",pattern:"[0-9]{2}"},null,512),[[o.Jo,a.horas]]),n[8]||(n[8]=(0,s.eW)()),n[9]||(n[9]=(0,s.Lk)("span",null,":",-1)),(0,s.bo)((0,s.Lk)("input",{type:"numeric","onUpdate:modelValue":n[1]||(n[1]=t=>a.minutos=t),maxlength:"2",inputmode:"numeric",pattern:"[0-9]{2}"},null,512),[[o.Jo,a.minutos]]),n[10]||(n[10]=(0,s.eW)()),n[11]||(n[11]=(0,s.Lk)("span",null,":",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=t=>a.segundos=t),maxlength:"2",inputmode:"numeric",pattern:"[0-9]{2}"},null,512),[[o.Jo,a.segundos]]),(0,s.bo)((0,s.Lk)("input",{type:"numeric",id:"mili","onUpdate:modelValue":n[3]||(n[3]=t=>a.milissegundos=t),maxlength:"3",inputmode:"numeric",pattern:"[0-9]{3}"},null,512),[[o.Jo,a.milissegundos]])]),(0,s.Lk)("div",r,[(0,s.Lk)("button",{id:"start",onClick:n[4]||(n[4]=(...t)=>u.start&&u.start(...t))},"start"),(0,s.Lk)("button",{id:"stop",onClick:n[5]||(n[5]=(...t)=>u.stop&&u.stop(...t))},"stop"),(0,s.Lk)("button",{id:"reset",onClick:n[6]||(n[6]=(...t)=>u.reset&&u.reset(...t))},"reset"),(0,s.Lk)("button",{id:"cheia",onClick:n[7]||(n[7]=(...t)=>u.cheia&&u.cheia(...t))},"cheia")])],64)}var u={name:"HelloWorld",data(){return{horas:String().padStart(2,"0"),minutos:String().padStart(2,"0"),segundos:String().padStart(2,"0"),milissegundos:String().padStart(3,"0"),totalsegundos:0,intervaloID:null}},created(){window.addEventListener("keydown",this.Botaopressionado)},methods:{start(){this.intervaloID||(this.horas=Number(this.horas),this.minutos=Number(this.minutos),this.segundos=Number(this.segundos),this.milissegundos=Number(this.milissegundos),this.totalMilissegundos=3600*this.horas*1e3+60*this.minutos*1e3+1e3*this.segundos+this.milissegundos,this.ultimoUpdate=Date.now(),this.intervaloID=setInterval((()=>{const t=Date.now(),n=t-this.ultimoUpdate;this.ultimoUpdate=t,this.totalMilissegundos-=n,this.totalMilissegundos<=0&&(this.totalMilissegundos=3e4),this.horas=String(Math.floor(this.totalMilissegundos/36e5)).padStart(2,"0"),this.minutos=String(Math.floor(this.totalMilissegundos%36e5/6e4)).padStart(2,"0"),this.segundos=String(Math.floor(this.totalMilissegundos%6e4/1e3)).padStart(2,"0"),this.milissegundos=String(this.totalMilissegundos%1e3).padStart(3,"0")}),10))},stop(){clearInterval(this.intervaloID),this.intervaloID=null},reset(){this.stop(),this.horas=String().padStart(2,"0"),this.minutos=String().padStart(2,"0"),this.segundos=String().padStart(2,"0"),this.milissegundos=String().padStart(3,"0"),this.totalsegundos=0},cheia(){document.documentElement.requestFullscreen(),document.fullscreenElement&&document.exitFullscreen()},Botaopressionado(t){switch(console.log(t.key),t.key){case"Enter":this.start();break;case" ":this.stop();break;case"r":this.reset();break;case"f":this.cheia();break}}}},l=e(1241);const d=(0,l.A)(u,[["render",a],["__scopeId","data-v-6cc33529"]]);var c=d,h={name:"App",components:{Cronometro:c}};const p=(0,l.A)(h,[["render",i]]);var m=p;(0,o.Ef)(m).mount("#app")}},n={};function e(o){var s=n[o];if(void 0!==s)return s.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,s,i){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],i=t[d][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<r&&(r=i));if(a){t.splice(d--,1);var l=s();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,s,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var s,i,r=o[0],a=o[1],u=o[2],l=0;if(r.some((function(n){return 0!==t[n]}))){for(s in a)e.o(a,s)&&(e.m[s]=a[s]);if(u)var d=u(e)}for(n&&n(o);l<r.length;l++)i=r[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},o=self["webpackChunkcronometro"]=self["webpackChunkcronometro"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(381)}));o=e.O(o)})();
//# sourceMappingURL=app.18173ced.js.map