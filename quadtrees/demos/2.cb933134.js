var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequirefde0;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequirefde0=r);var a=r("a9clF"),c=r("cNEHL");const o=Math.min(window.innerWidth,750),l=a.range(300*o/600).map((function(){return[Math.random()*o,300*Math.random()]})),i=c.select("body").append("svg").attr("width",o).attr("height",300).on("click",(function(t){const[e,n]=c.pointer(t,c.selectAll("svg").node());x.attr("cx",e).attr("cy",n),f()})),d=o/2,s=i.selectAll(".node").data([{x1:0,x2:d,y1:0,y2:150},{x1:d,x2:o,y1:0,y2:150},{x1:0,x2:d,y1:150,y2:300},{x1:d,x2:o,y1:150,y2:300}]).enter().append("rect").attr("class","node").attr("x",(function(t){return t.x1})).attr("y",(function(t){return t.y1})).attr("width",(function(t){return t.x2-t.x1})).attr("height",(function(t){return t.y2-t.y1}));let y=i.selectAll(".rect").data([{}]).enter().append("rect").attr("class","rect").attr("width",100).attr("height",100);const u=i.selectAll(".point").data(l).enter().append("circle").attr("class","point").attr("cx",(function(t){return t[0]})).attr("cy",(function(t){return t[1]})).attr("r",3);let x=i.append("circle").attr("id","pt").attr("r",3).attr("cx",o/2).attr("cy",150).style("fill","yellow");function f(){const t=+x.attr("cx"),e=+x.attr("cy");y.attr("x",t-50).attr("y",e-50);const n=+y.attr("x"),r=+y.attr("y"),a=+y.attr("width"),c=+y.attr("height");u.each((t=>{const[e,o]=t;t.selected=e>=n&&e<=n+a&&o>=r&&o<=r+c})),u.classed("selected",(t=>t.selected));const o=[];s.each((t=>{var e,a;a={x1:n,x2:n+100,y1:r,y2:r+100},(e=t).x1<=a.x2&&e.x2>=a.x1&&e.y1<=a.y2&&e.y2>=a.y1&&o.push(t)})),u.each((t=>{t.scanned=!1,o.forEach((e=>{(function(t,e){const[n,r]=t,{x1:a,x2:c,y1:o,y2:l}=e;return n>=a&&n<=c&&r>=o&&r<=l})(t,e)&&(t.scanned=!0)}))})),u.classed("scanned",(t=>t.scanned))}f();
//# sourceMappingURL=2.cb933134.js.map
