var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequirefde0;function a(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function c(t){let e=t,n=t,r=t;function c(t,e,a=0,c=t.length){if(a<c){if(0!==n(e,e))return c;do{const n=a+c>>>1;r(t[n],e)<0?a=n+1:c=n}while(a<c)}return a}return 2!==t.length&&(e=(e,n)=>t(e)-n,n=a,r=(e,n)=>a(t(e),n)),{left:c,center:function(t,n,r=0,a=t.length){const o=c(t,n,r,a-1);return o>r&&e(t[o-1],n)>-e(t[o],n)?o-1:o},right:function(t,e,a=0,c=t.length){if(a<c){if(0!==n(e,e))return c;do{const n=a+c>>>1;r(t[n],e)<=0?a=n+1:c=n}while(a<c)}return a}}}null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequirefde0=r);const o=c(a);o.right,o.left,c((function(t){return null===t?NaN:+t})).center;Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=r("cNEHL");const i=Math.min(window.innerWidth,750),s=function(t,e,n){t=+t,e=+e,n=(a=arguments.length)<2?(e=t,t=0,1):a<3?1:+n;for(var r=-1,a=0|Math.max(0,Math.ceil((e-t)/n)),c=new Array(a);++r<a;)c[r]=t+r*n;return c}(300*i/600).map((function(){return[Math.random()*i,300*Math.random()]})),u=l.select("body").append("svg").attr("width",i).attr("height",300).on("click",(function(t){const[e,n]=l.pointer(t,l.selectAll("svg").node());x.attr("cx",e).attr("cy",n),p()})),d=i/2,f=u.selectAll(".node").data([{x1:0,x2:d,y1:0,y2:150},{x1:d,x2:i,y1:0,y2:150},{x1:0,x2:d,y1:150,y2:300},{x1:d,x2:i,y1:150,y2:300}]).enter().append("rect").attr("class","node").attr("x",(function(t){return t.x1})).attr("y",(function(t){return t.y1})).attr("width",(function(t){return t.x2-t.x1})).attr("height",(function(t){return t.y2-t.y1}));let h=u.selectAll(".rect").data([{}]).enter().append("rect").attr("class","rect").attr("width",100).attr("height",100);const y=u.selectAll(".point").data(s).enter().append("circle").attr("class","point").attr("cx",(function(t){return t[0]})).attr("cy",(function(t){return t[1]})).attr("r",3);let x=u.append("circle").attr("id","pt").attr("r",3).attr("cx",i/2).attr("cy",150).style("fill","yellow");function p(){const t=+x.attr("cx"),e=+x.attr("cy");h.attr("x",t-50).attr("y",e-50);const n=+h.attr("x"),r=+h.attr("y"),a=+h.attr("width"),c=+h.attr("height");y.each((t=>{const[e,o]=t;t.selected=e>=n&&e<=n+a&&o>=r&&o<=r+c})),y.classed("selected",(t=>t.selected));const o=[];f.each((t=>{var e,a;a={x1:n,x2:n+100,y1:r,y2:r+100},(e=t).x1<=a.x2&&e.x2>=a.x1&&e.y1<=a.y2&&e.y2>=a.y1&&o.push(t)})),y.each((t=>{t.scanned=!1,o.forEach((e=>{(function(t,e){const[n,r]=t,{x1:a,x2:c,y1:o,y2:l}=e;return n>=a&&n<=c&&r>=o&&r<=l})(t,e)&&(t.scanned=!0)}))})),y.classed("scanned",(t=>t.scanned))}p();
//# sourceMappingURL=2.d50045bc.js.map
