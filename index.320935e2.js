function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}document.addEventListener("DOMContentLoaded",function(){var t=function(r){p+=r,d.textContent=p,r>=2048&&m.classList.remove("hidden")},e=function(){var t;y=((function(t){if(Array.isArray(t))return r(t)})(t=Array(g))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return Array(g).fill(0)}),n(),n(),o()},n=function(){for(var r=[],t=0;t<g;t++)for(var e=0;e<g;e++)0===y[t][e]&&r.push({row:t,col:e});if(r.length>0){var n=r[Math.floor(Math.random()*r.length)];y[n.row][n.col]=.9>Math.random()?2:4,document.querySelector('[data-row="'.concat(n.row,'"][data-col="').concat(n.col,'"]')).classList.add("new-tile")}},o=function(){for(var r=0;r<g;r++)for(var t=0;t<g;t++){var e=y[r][t],n=document.querySelector("[data-row='".concat(r,"'][data-col='").concat(t,"']")),o=n.dataset.value;0!==e?(n.dataset.value=e,n.textContent=e,e===+o||n.classList.contains("new-tile")||n.classList.add("merged-tile")):(n.dataset.value=0,n.textContent="",n.classList.remove("merged-tile","new-tile"))}},a=function(r){var t=!1;if("ArrowLeft"===r){for(var e=0;e<y.length;e++){var a=c(y[e]);y[e]=a}t=!0}if("ArrowRight"===r){for(var f=0;f<y.length;f++){var d=i(y[f]);y[f]=d}t=!0}if("ArrowDown"===r||"ArrowUp"===r){for(var v=0;v<g;v++){for(var m=[],h=0;h<g;h++){var p=y[h][v];m.push(p)}for(var w="ArrowUp"===r?c(m):i(m),L=0;L<w.length;L++)y[L][v]=w[L]}t=!0}t&&(n(),o(),l()),"e"===r&&(console.log("emulate lose game case"),u(),l()),"w"===r&&(console.log("emulate win game case"),s(),l())},i=function(r){for(var e=r.filter(function(r){return 0!==r}),n=[],o=e.length-1;o>=0;o--){var a=e[o];a===e[o-1]?(n.push(2*a),t(2*a),o--):n.push(a)}for(n.reverse();n.length<4;)n.unshift(0);return n},c=function(r){for(var e=r.filter(function(r){return 0!==r}),n=[],o=0;o<e.length;o++){var a=e[o];a===e[o+1]?(n.push(2*a),t(2*a),o++):n.push(a)}for(;n.length<4;)n.push(0);return n},s=function(){y=[[2,4,8,16],[32,64,128,256],[512,1024,2048,0],[0,1024,1024,4096]],o()},u=function(){y=[[2,4,2,4],[4,2,4,2],[2,4,8,4],[4,8,2,0]],o()},l=function(){for(var r=0;r<g;r++)for(var t=0;t<g;t++)if(0===y[r][t])return;for(var e=0;e<g-1;e++)for(var n=0;n<g;n++)if(y[e][n]===y[e+1][n])return;for(var o=0;o<g;o++)for(var a=0;a<g-1;a++)if(y[o][a]===y[o][a+1])return;h.classList.remove("hidden")},f=document.querySelector(".button.start"),d=document.querySelector(".game-score"),v=document.querySelector(".message-start"),m=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),g=4,y=[],p=0;f.addEventListener("click",function(){e(),t(0),p=0,f.classList.remove("start"),f.classList.add("restart"),v.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden")}),document.addEventListener("keydown",function(r){return a(r.key)})});
//# sourceMappingURL=index.320935e2.js.map