var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequirefde0;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var i=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},e.parcelRequirefde0=i);var t=i("h36xl");const o=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];function d(e,n){let r=e;const i=o.indexOf(n[0]);if(r.children[i]||(r.children[i]={isEndOfWord:!1,children:new Array(26)}),r=r.children[i],1===n.length)return void(r.isEndOfWord=!0);const t=o.indexOf(n[1]);r.children[t]||(r.children[t]={isEndOfWord:!1,children:new Array(26)}),r=r.children[t],2!==n.length?r.children.push(n):r.isEndOfWord=!0}var l={insert:d,parse:function(e){const n=e.split("\n").filter((e=>e.length>0)),r={children:new Array(26)};return n.forEach((e=>{d(r,e)})),r}}.parse,a=i("dURhu"),f=a.getToD3Tree,s=a.updateTree;const c=f(2),u={x:15,y:100},p="fruit\ndrain\ntrip\nanthem\nelbow\nsolid\nin\nappliance\ndock\ntribute\nsort\nso\nsquare\neloquent\na\nthrive\n";t.select("#input").property("value",p).on("input",(e=>{s(c(l(e.target.value)),u)})),s(c(l(p)),u);
//# sourceMappingURL=group-2.e3637fe4.js.map