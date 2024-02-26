// write your code here
var e,s={cssClass:"message",text:"Promise was resolved!"},t={cssClass:"message error-message",text:"Promise was rejected!"};function n(e){var s=e.cssClass,t=e.text,n=document.createElement("DIV");n.className=s,n.innerHTML=t,document.body.append(n)}(e=document.querySelector(".logo"),new Promise(function(t){e.addEventListener("click",function(){t(s)})})).then(n).catch(n),new Promise(function(e,s){setTimeout(function(){s(t)},3e3)}).then(n).catch(n);//# sourceMappingURL=index.5b910fc9.js.map

//# sourceMappingURL=index.5b910fc9.js.map
