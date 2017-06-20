/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
    void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2339baa1619df9a3fc21554b26352969)
 * Config saved to config.json and https://gist.github.com/2339baa1619df9a3fc21554b26352969
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

;(function (window) {
    /***************
     Setup
     ***************/

    /* If jQuery is already loaded, there's no point in loading this shim. */
    if (window.jQuery) {
        return;
    }

    /* jQuery base. */
    var $ = function (selector, context) {
        return new $.fn.init(selector, context);
    };

    /********************
     Private Methods
     ********************/

    /* jQuery */
    $.isWindow = function (obj) {
        /* jshint eqeqeq: false */
        return obj != null && obj == obj.window;
    };

    /* jQuery */
    $.type = function (obj) {
        if (obj == null) {
            return obj + "";
        }

        return typeof obj === "object" || typeof obj === "function" ?
        class2type[toString.call(obj)] || "object" :
            typeof obj;
    };

    /* jQuery */
    $.isArray = Array.isArray || function (obj) {
            return $.type(obj) === "array";
        };

    /* jQuery */
    function isArraylike (obj) {
        var length = obj.length,
            type = $.type(obj);

        if (type === "function" || $.isWindow(obj)) {
            return false;
        }

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    /***************
     $ Methods
     ***************/

    /* jQuery: Support removed for IE<9. */
    $.isPlainObject = function (obj) {
        var key;

        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
            return false;
        }

        try {
            if (obj.constructor &&
                !hasOwn.call(obj, "constructor") &&
                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            return false;
        }

        for (key in obj) {}

        return key === undefined || hasOwn.call(obj, key);
    };

    /* jQuery */
    $.each = function(obj, callback, args) {
        var value,
            i = 0,
            length = obj.length,
            isArray = isArraylike(obj);

        if (args) {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            }

        } else {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            }
        }

        return obj;
    };

    /* Custom */
    $.data = function (node, key, value) {
        /* $.getData() */
        if (value === undefined) {
            var id = node[$.expando],
                store = id && cache[id];

            if (key === undefined) {
                return store;
            } else if (store) {
                if (key in store) {
                    return store[key];
                }
            }
            /* $.setData() */
        } else if (key !== undefined) {
            var id = node[$.expando] || (node[$.expando] = ++$.uuid);

            cache[id] = cache[id] || {};
            cache[id][key] = value;

            return value;
        }
    };

    /* Custom */
    $.removeData = function (node, keys) {
        var id = node[$.expando],
            store = id && cache[id];

        if (store) {
            $.each(keys, function(_, key) {
                delete store[key];
            });
        }
    };

    /* jQuery */
    $.extend = function () {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== "object" && $.type(target) !== "function") {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && $.isArray(src) ? src : [];

                        } else {
                            clone = src && $.isPlainObject(src) ? src : {};
                        }

                        target[name] = $.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };

    /* jQuery 1.4.3 */
    $.queue = function (elem, type, data) {
        function $makeArray (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    /* $.merge */
                    (function(first, second) {
                        var len = +second.length,
                            j = 0,
                            i = first.length;

                        while (j < len) {
                            first[i++] = second[j++];
                        }

                        if (len !== len) {
                            while (second[j] !== undefined) {
                                first[i++] = second[j++];
                            }
                        }

                        first.length = i;

                        return first;
                    })(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    [].push.call(ret, arr);
                }
            }

            return ret;
        }

        if (!elem) {
            return;
        }

        type = (type || "fx") + "queue";

        var q = $.data(elem, type);

        if (!data) {
            return q || [];
        }

        if (!q || $.isArray(data)) {
            q = $.data(elem, type, $makeArray(data));
        } else {
            q.push(data);
        }

        return q;
    };

    /* jQuery 1.4.3 */
    $.dequeue = function (elems, type) {
        /* Custom: Embed element iteration. */
        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
            type = type || "fx";

            var queue = $.queue(elem, type),
                fn = queue.shift();

            if (fn === "inprogress") {
                fn = queue.shift();
            }

            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                fn.call(elem, function() {
                    $.dequeue(elem, type);
                });
            }
        });
    };

    /******************
     $.fn Methods
     ******************/

    /* jQuery */
    $.fn = $.prototype = {
        init: function (selector) {
            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
            if (selector.nodeType) {
                this[0] = selector;

                return this;
            } else {
                throw new Error("Not a DOM node.");
            }
        },

        offset: function () {
            /* jQuery altered code: Dropped disconnected DOM node checking. */
            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

            return {
                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
            };
        },

        position: function () {
            /* jQuery */
            function offsetParent() {
                var offsetParent = this.offsetParent || document;

                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || document;
            }

            /* Zepto */
            var elem = this[0],
                offsetParent = offsetParent.apply(elem),
                offset = this.offset(),
                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()

            offset.top -= parseFloat(elem.style.marginTop) || 0;
            offset.left -= parseFloat(elem.style.marginLeft) || 0;

            if (offsetParent.style) {
                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
            }

            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        }
    };

    /**********************
     Private Variables
     **********************/

    /* For $.data() */
    var cache = {};
    $.expando = "velocity" + (new Date().getTime());
    $.uuid = 0;

    /* For $.queue() */
    var class2type = {},
        hasOwn = class2type.hasOwnProperty,
        toString = class2type.toString;

    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
    for (var i = 0; i < types.length; i++) {
        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
    }

    /* Makes $(node) possible, without having to call init. */
    $.fn.init.prototype = $.fn;

    /* Globalize Velocity onto the window, and assign its Utilities property. */
    window.Velocity = { Utilities: $ };
})(window);

/******************
 Velocity.js
 ******************/

;(function (factory) {
    /* CommonJS module. */
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
        /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define(factory);
        /* Browser globals. */
    } else {
        factory();
    }
}(function() {
    return function (global, window, document, undefined) {

        /***************
         Summary
         ***************/

        /*
         - CSS: CSS stack that works independently from the rest of Velocity.
         - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
         - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
         - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
         Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
         - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
         - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
         - completeCall(): Handles the cleanup process for each Velocity call.
         */

        /*********************
         Helper Functions
         *********************/

        /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
        var IE = (function() {
            if (document.documentMode) {
                return document.documentMode;
            } else {
                for (var i = 7; i > 4; i--) {
                    var div = document.createElement("div");

                    div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

                    if (div.getElementsByTagName("span").length) {
                        div = null;

                        return i;
                    }
                }
            }

            return undefined;
        })();

        /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
        var rAFShim = (function() {
            var timeLast = 0;

            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                    var timeCurrent = (new Date()).getTime(),
                        timeDelta;

                    /* Dynamically set delay on a per-tick basis to match 60fps. */
                    /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
                    timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
                    timeLast = timeCurrent + timeDelta;

                    return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
                };
        })();

        /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
        function compactSparseArray (array) {
            var index = -1,
                length = array ? array.length : 0,
                result = [];

            while (++index < length) {
                var value = array[index];

                if (value) {
                    result.push(value);
                }
            }

            return result;
        }

        function sanitizeElements (elements) {
            /* Unwrap jQuery/Zepto objects. */
            if (Type.isWrapped(elements)) {
                elements = [].slice.call(elements);
                /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
            } else if (Type.isNode(elements)) {
                elements = [ elements ];
            }

            return elements;
        }

        var Type = {
            isString: function (variable) {
                return (typeof variable === "string");
            },
            isArray: Array.isArray || function (variable) {
                return Object.prototype.toString.call(variable) === "[object Array]";
            },
            isFunction: function (variable) {
                return Object.prototype.toString.call(variable) === "[object Function]";
            },
            isNode: function (variable) {
                return variable && variable.nodeType;
            },
            /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
            isNodeList: function (variable) {
                return typeof variable === "object" &&
                    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
                    variable.length !== undefined &&
                    (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
            },
            /* Determine if variable is a wrapped jQuery or Zepto element. */
            isWrapped: function (variable) {
                return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
            },
            isSVG: function (variable) {
                return window.SVGElement && (variable instanceof window.SVGElement);
            },
            isEmptyObject: function (variable) {
                for (var name in variable) {
                    return false;
                }

                return true;
            }
        };

        /*****************
         Dependencies
         *****************/

        var $,
            isJQuery = false;

        if (global.fn && global.fn.jquery) {
            $ = global;
            isJQuery = true;
        } else {
            $ = window.Velocity.Utilities;
        }

        if (IE <= 8 && !isJQuery) {
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        } else if (IE <= 7) {
            /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
            jQuery.fn.velocity = jQuery.fn.animate;

            /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
            return;
        }

        /*****************
         Constants
         *****************/

        var DURATION_DEFAULT = 400,
            EASING_DEFAULT = "swing";

        /*************
         State
         *************/

        var Velocity = {
            /* Container for page-wide Velocity state data. */
            State: {
                /* Detect mobile devices to determine if mobileHA should be turned on. */
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: window.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                /* Create a cached element for re-use when checking for CSS property prefixes. */
                prefixElement: document.createElement("div"),
                /* Cache every prefix match to avoid repeating lookups. */
                prefixMatches: {},
                /* Cache the anchor used for animating window scrolling. */
                scrollAnchor: null,
                /* Cache the browser-specific property names associated with the scroll anchor. */
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                /* Keep track of whether our RAF tick is running. */
                isTicking: false,
                /* Container for every in-progress call to Velocity. */
                calls: []
            },
            /* Velocity's custom CSS stack. Made global for unit testing. */
            CSS: { /* Defined below. */ },
            /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
            Utilities: $,
            /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
            Redirects: { /* Manually registered by the user. */ },
            Easings: { /* Defined below. */ },
            /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
            Promise: window.Promise,
            /* Velocity option defaults, which can be overriden by the user. */
            defaults: {
                queue: "",
                duration: DURATION_DEFAULT,
                easing: EASING_DEFAULT,
                begin: undefined,
                complete: undefined,
                progress: undefined,
                display: undefined,
                visibility: undefined,
                loop: false,
                delay: false,
                mobileHA: true,
                /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
                _cacheValues: true
            },
            /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
            init: function (element) {
                $.data(element, "velocity", {
                    /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
                    isSVG: Type.isSVG(element),
                    /* Keep track of whether the element is currently being animated by Velocity.
                     This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
                    isAnimating: false,
                    /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
                    computedStyle: null,
                    /* Tween data is cached for each animation on the element so that data can be passed across calls --
                     in particular, end values are used as subsequent start values in consecutive Velocity calls. */
                    tweensContainer: null,
                    /* The full root property values of each CSS hook being animated on this element are cached so that:
                     1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
                     2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
                    rootPropertyValueCache: {},
                    /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
                    transformCache: {}
                });
            },
            /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
            hook: null, /* Defined below. */
            /* Velocity-wide animation time remapping for testing purposes. */
            mock: false,
            version: { major: 1, minor: 2, patch: 2 },
            /* Set to 1 or 2 (most verbose) to output debug info to console. */
            debug: false
        };

        /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
        if (window.pageYOffset !== undefined) {
            Velocity.State.scrollAnchor = window;
            Velocity.State.scrollPropertyLeft = "pageXOffset";
            Velocity.State.scrollPropertyTop = "pageYOffset";
        } else {
            Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
            Velocity.State.scrollPropertyLeft = "scrollLeft";
            Velocity.State.scrollPropertyTop = "scrollTop";
        }

        /* Shorthand alias for jQuery's $.data() utility. */
        function Data (element) {
            /* Hardcode a reference to the plugin name. */
            var response = $.data(element, "velocity");

            /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
            return response === null ? undefined : response;
        };

        /**************
         Easing
         **************/

        /* Step easing generator. */
        function generateStep (steps) {
            return function (p) {
                return Math.round(p * steps) * (1 / steps);
            };
        }

        /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
        function generateBezier (mX1, mY1, mX2, mY2) {
            var NEWTON_ITERATIONS = 4,
                NEWTON_MIN_SLOPE = 0.001,
                SUBDIVISION_PRECISION = 0.0000001,
                SUBDIVISION_MAX_ITERATIONS = 10,
                kSplineTableSize = 11,
                kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
                float32ArraySupported = "Float32Array" in window;

            /* Must contain four arguments. */
            if (arguments.length !== 4) {
                return false;
            }

            /* Arguments must be numbers. */
            for (var i = 0; i < 4; ++i) {
                if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
                    return false;
                }
            }

            /* X values must be in the [0, 1] range. */
            mX1 = Math.min(mX1, 1);
            mX2 = Math.min(mX2, 1);
            mX1 = Math.max(mX1, 0);
            mX2 = Math.max(mX2, 0);

            var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

            function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
            function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
            function C (aA1)      { return 3.0 * aA1; }

            function calcBezier (aT, aA1, aA2) {
                return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
            }

            function getSlope (aT, aA1, aA2) {
                return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
            }

            function newtonRaphsonIterate (aX, aGuessT) {
                for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
                    var currentSlope = getSlope(aGuessT, mX1, mX2);

                    if (currentSlope === 0.0) return aGuessT;

                    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                    aGuessT -= currentX / currentSlope;
                }

                return aGuessT;
            }

            function calcSampleValues () {
                for (var i = 0; i < kSplineTableSize; ++i) {
                    mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
                }
            }

            function binarySubdivide (aX, aA, aB) {
                var currentX, currentT, i = 0;

                do {
                    currentT = aA + (aB - aA) / 2.0;
                    currentX = calcBezier(currentT, mX1, mX2) - aX;
                    if (currentX > 0.0) {
                        aB = currentT;
                    } else {
                        aA = currentT;
                    }
                } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

                return currentT;
            }

            function getTForX (aX) {
                var intervalStart = 0.0,
                    currentSample = 1,
                    lastSample = kSplineTableSize - 1;

                for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                    intervalStart += kSampleStepSize;
                }

                --currentSample;

                var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
                    guessForT = intervalStart + dist * kSampleStepSize,
                    initialSlope = getSlope(guessForT, mX1, mX2);

                if (initialSlope >= NEWTON_MIN_SLOPE) {
                    return newtonRaphsonIterate(aX, guessForT);
                } else if (initialSlope == 0.0) {
                    return guessForT;
                } else {
                    return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
                }
            }

            var _precomputed = false;

            function precompute() {
                _precomputed = true;
                if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
            }

            var f = function (aX) {
                if (!_precomputed) precompute();
                if (mX1 === mY1 && mX2 === mY2) return aX;
                if (aX === 0) return 0;
                if (aX === 1) return 1;

                return calcBezier(getTForX(aX), mY1, mY2);
            };

            f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };

            var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
            f.toString = function () { return str; };

            return f;
        }

        /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
        /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
         then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
        var generateSpringRK4 = (function () {
            function springAccelerationForState (state) {
                return (-state.tension * state.x) - (state.friction * state.v);
            }

            function springEvaluateStateWithDerivative (initialState, dt, derivative) {
                var state = {
                    x: initialState.x + derivative.dx * dt,
                    v: initialState.v + derivative.dv * dt,
                    tension: initialState.tension,
                    friction: initialState.friction
                };

                return { dx: state.v, dv: springAccelerationForState(state) };
            }

            function springIntegrateState (state, dt) {
                var a = {
                        dx: state.v,
                        dv: springAccelerationForState(state)
                    },
                    b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
                    c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
                    d = springEvaluateStateWithDerivative(state, dt, c),
                    dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
                    dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

                state.x = state.x + dxdt * dt;
                state.v = state.v + dvdt * dt;

                return state;
            }

            return function springRK4Factory (tension, friction, duration) {

                var initState = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    path = [0],
                    time_lapsed = 0,
                    tolerance = 1 / 10000,
                    DT = 16 / 1000,
                    have_duration, dt, last_state;

                tension = parseFloat(tension) || 500;
                friction = parseFloat(friction) || 20;
                duration = duration || null;

                initState.tension = tension;
                initState.friction = friction;

                have_duration = duration !== null;

                /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
                if (have_duration) {
                    /* Run the simulation without a duration. */
                    time_lapsed = springRK4Factory(tension, friction);
                    /* Compute the adjusted time delta. */
                    dt = time_lapsed / duration * DT;
                } else {
                    dt = DT;
                }

                while (true) {
                    /* Next/step function .*/
                    last_state = springIntegrateState(last_state || initState, dt);
                    /* Store the position. */
                    path.push(1 + last_state.x);
                    time_lapsed += 16;
                    /* If the change threshold is reached, break. */
                    if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
                        break;
                    }
                }

                /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
                 computed path and returns a snapshot of the position according to a given percentComplete. */
                return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
            };
        }());

        /* jQuery easings. */
        Velocity.Easings = {
            linear: function(p) { return p; },
            swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
            /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
            spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
        };

        /* CSS3 and Robert Penner easings. */
        $.each(
            [
                [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
                [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
                [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
                [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
                [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
                [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
                [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
                [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
                [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
                [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
                [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
                [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
                [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
                [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
                [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
                [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
                [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
                [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
                [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
                [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
                [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
                [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
                [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
                [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
                [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
            ], function(i, easingArray) {
                Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
            });

        /* Determine the appropriate easing type given an easing input. */
        function getEasing(value, duration) {
            var easing = value;

            /* The easing option can either be a string that references a pre-registered easing,
             or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
            if (Type.isString(value)) {
                /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
                if (!Velocity.Easings[value]) {
                    easing = false;
                }
            } else if (Type.isArray(value) && value.length === 1) {
                easing = generateStep.apply(null, value);
            } else if (Type.isArray(value) && value.length === 2) {
                /* springRK4 must be passed the animation's duration. */
                /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
                 function generated with default tension and friction values. */
                easing = generateSpringRK4.apply(null, value.concat([ duration ]));
            } else if (Type.isArray(value) && value.length === 4) {
                /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
                easing = generateBezier.apply(null, value);
            } else {
                easing = false;
            }

            /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
             if the Velocity-wide default has been incorrectly modified. */
            if (easing === false) {
                if (Velocity.Easings[Velocity.defaults.easing]) {
                    easing = Velocity.defaults.easing;
                } else {
                    easing = EASING_DEFAULT;
                }
            }

            return easing;
        }

        /*****************
         CSS Stack
         *****************/

        /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
         It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
        /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
        var CSS = Velocity.CSS = {

            /*************
             RegEx
             *************/

            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
            },

            /************
             Lists
             ************/

            Lists: {
                colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
                transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
                transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
            },

            /************
             Hooks
             ************/

            /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
             (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
            /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
             tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
            Hooks: {
                /********************
                 Registration
                 ********************/

                /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
                /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
                templates: {
                    "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
                    "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                    "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                    "backgroundPosition": [ "X Y", "0% 0%" ],
                    "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
                    "perspectiveOrigin": [ "X Y", "50% 50%" ]
                },

                /* A "registered" hook is one that has been converted from its template form into a live,
                 tweenable property. It contains data to associate it with its root property. */
                registered: {
                    /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
                     which consists of the subproperty's name, the associated root property's name,
                     and the subproperty's position in the root's value. */
                },
                /* Convert the templates into individual hooks then append them to the registered object above. */
                register: function () {
                    /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
                     currently set to "transparent" default to their respective template below when color-animated,
                     and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
                     which is almost always set closer to black than white. */
                    for (var i = 0; i < CSS.Lists.colors.length; i++) {
                        var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
                        CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
                    }

                    var rootProperty,
                        hookTemplate,
                        hookNames;

                    /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
                     Thus, we re-arrange the templates accordingly. */
                    if (IE) {
                        for (rootProperty in CSS.Hooks.templates) {
                            hookTemplate = CSS.Hooks.templates[rootProperty];
                            hookNames = hookTemplate[0].split(" ");

                            var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

                            if (hookNames[0] === "Color") {
                                /* Reposition both the hook's name and its default value to the end of their respective strings. */
                                hookNames.push(hookNames.shift());
                                defaultValues.push(defaultValues.shift());

                                /* Replace the existing template for the hook's root property. */
                                CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
                            }
                        }
                    }

                    /* Hook registration. */
                    for (rootProperty in CSS.Hooks.templates) {
                        hookTemplate = CSS.Hooks.templates[rootProperty];
                        hookNames = hookTemplate[0].split(" ");

                        for (var i in hookNames) {
                            var fullHookName = rootProperty + hookNames[i],
                                hookPosition = i;

                            /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
                             and the hook's position in its template's default value string. */
                            CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
                        }
                    }
                },

                /*****************************
                 Injection and Extraction
                 *****************************/

                /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
                /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
                getRoot: function (property) {
                    var hookData = CSS.Hooks.registered[property];

                    if (hookData) {
                        return hookData[0];
                    } else {
                        /* If there was no hook match, return the property name untouched. */
                        return property;
                    }
                },
                /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
                 the targeted hook can be injected or extracted at its standard position. */
                cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
                    /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
                    if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
                        rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
                    }

                    /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
                     default to the root's default value as defined in CSS.Hooks.templates. */
                    /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
                     zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
                    if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
                        rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                    }

                    return rootPropertyValue;
                },
                /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
                extractValue: function (fullHookName, rootPropertyValue) {
                    var hookData = CSS.Hooks.registered[fullHookName];

                    if (hookData) {
                        var hookRoot = hookData[0],
                            hookPosition = hookData[1];

                        rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

                        /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
                        return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
                    } else {
                        /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                        return rootPropertyValue;
                    }
                },
                /* Inject the hook's value into its root property's value. This is used to piece back together the root property
                 once Velocity has updated one of its individually hooked values through tweening. */
                injectValue: function (fullHookName, hookValue, rootPropertyValue) {
                    var hookData = CSS.Hooks.registered[fullHookName];

                    if (hookData) {
                        var hookRoot = hookData[0],
                            hookPosition = hookData[1],
                            rootPropertyValueParts,
                            rootPropertyValueUpdated;

                        rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

                        /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
                         then reconstruct the rootPropertyValue string. */
                        rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
                        rootPropertyValueParts[hookPosition] = hookValue;
                        rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

                        return rootPropertyValueUpdated;
                    } else {
                        /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                        return rootPropertyValue;
                    }
                }
            },

            /*******************
             Normalizations
             *******************/

            /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
             and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
            Normalizations: {
                /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
                 the targeted element (which may need to be queried), and the targeted property value. */
                registered: {
                    clip: function (type, element, propertyValue) {
                        switch (type) {
                            case "name":
                                return "clip";
                            /* Clip needs to be unwrapped and stripped of its commas during extraction. */
                            case "extract":
                                var extracted;

                                /* If Velocity also extracted this value, skip extraction. */
                                if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                    extracted = propertyValue;
                                } else {
                                    /* Remove the "rect()" wrapper. */
                                    extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

                                    /* Strip off commas. */
                                    extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                                }

                                return extracted;
                            /* Clip needs to be re-wrapped during injection. */
                            case "inject":
                                return "rect(" + propertyValue + ")";
                        }
                    },

                    blur: function(type, element, propertyValue) {
                        switch (type) {
                            case "name":
                                return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var extracted = parseFloat(propertyValue);

                                /* If extracted is NaN, meaning the value isn't already extracted. */
                                if (!(extracted || extracted === 0)) {
                                    var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

                                    /* If the filter string had a blur component, return just the blur value and unit type. */
                                    if (blurComponent) {
                                        extracted = blurComponent[1];
                                        /* If the component doesn't exist, default blur to 0. */
                                    } else {
                                        extracted = 0;
                                    }
                                }

                                return extracted;
                            /* Blur needs to be re-wrapped during injection. */
                            case "inject":
                                /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
                                if (!parseFloat(propertyValue)) {
                                    return "none";
                                } else {
                                    return "blur(" + propertyValue + ")";
                                }
                        }
                    },

                    /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
                    opacity: function (type, element, propertyValue) {
                        if (IE <= 8) {
                            switch (type) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
                                     Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
                                    var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

                                    if (extracted) {
                                        /* Convert to decimal value. */
                                        propertyValue = extracted[1] / 100;
                                    } else {
                                        /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
                                        propertyValue = 1;
                                    }

                                    return propertyValue;
                                case "inject":
                                    /* Opacified elements are required to have their zoom property set to a non-zero value. */
                                    element.style.zoom = 1;

                                    /* Setting the filter property on elements with certain font property combinations can result in a
                                     highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
                                     value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
                                    if (parseFloat(propertyValue) >= 1) {
                                        return "";
                                    } else {
                                        /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
                                        return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                                    }
                            }
                            /* With all other browsers, normalization is not required; return the same values that were passed in. */
                        } else {
                            switch (type) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return propertyValue;
                                case "inject":
                                    return propertyValue;
                            }
                        }
                    }
                },

                /*****************************
                 Batched Registrations
                 *****************************/

                /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
                register: function () {

                    /*****************
                     Transforms
                     *****************/

                    /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
                     so that they can be referenced in a properties map by their individual names. */
                    /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
                     setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
                     Transform setting is batched in this way to improve performance: the transform style only needs to be updated
                     once when multiple transform subproperties are being animated simultaneously. */
                    /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
                     transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
                     from being normalized for these browsers so that tweening skips these properties altogether
                     (since it will ignore them as being unsupported by the browser.) */
                    if (!(IE <= 9) && !Velocity.State.isGingerbread) {
                        /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
                         share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
                        CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
                    }

                    for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
                        /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
                         paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
                        (function() {
                            var transformName = CSS.Lists.transformsBase[i];

                            CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
                                switch (type) {
                                    /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
                                    case "name":
                                        return "transform";
                                    /* Transform values are cached onto a per-element transformCache object. */
                                    case "extract":
                                        /* If this transform has yet to be assigned a value, return its null value. */
                                        if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                                            /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
                                            return /^scale/i.test(transformName) ? 1 : 0;
                                            /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
                                             Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
                                        } else {
                                            return Data(element).transformCache[transformName].replace(/[()]/g, "");
                                        }
                                    case "inject":
                                        var invalid = false;

                                        /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
                                         Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
                                        /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
                                        switch (transformName.substr(0, transformName.length - 1)) {
                                            /* Whitelist unit types for each transform. */
                                            case "translate":
                                                invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                                                break;
                                            /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
                                            case "scal":
                                            case "scale":
                                                /* Chrome on Android has a bug in which scaled elements blur if their initial scale
                                                 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
                                                 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
                                                if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                                                    propertyValue = 1;
                                                }

                                                invalid = !/(\d)$/i.test(propertyValue);
                                                break;
                                            case "skew":
                                                invalid = !/(deg|\d)$/i.test(propertyValue);
                                                break;
                                            case "rotate":
                                                invalid = !/(deg|\d)$/i.test(propertyValue);
                                                break;
                                        }

                                        if (!invalid) {
                                            /* As per the CSS spec, wrap the value in parentheses. */
                                            Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                                        }

                                        /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
                                        return Data(element).transformCache[transformName];
                                }
                            };
                        })();
                    }

                    /*************
                     Colors
                     *************/

                    /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
                     Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
                    for (var i = 0; i < CSS.Lists.colors.length; i++) {
                        /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
                         (Otherwise, all functions would take the final for loop's colorName.) */
                        (function () {
                            var colorName = CSS.Lists.colors[i];

                            /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
                            CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                                switch (type) {
                                    case "name":
                                        return colorName;
                                    /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
                                    case "extract":
                                        var extracted;

                                        /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
                                        if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                            extracted = propertyValue;
                                        } else {
                                            var converted,
                                                colorNames = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };

                                            /* Convert color names to rgb. */
                                            if (/^[A-z]+$/i.test(propertyValue)) {
                                                if (colorNames[propertyValue] !== undefined) {
                                                    converted = colorNames[propertyValue]
                                                } else {
                                                    /* If an unmatched color name is provided, default to black. */
                                                    converted = colorNames.black;
                                                }
                                                /* Convert hex values to rgb. */
                                            } else if (CSS.RegEx.isHex.test(propertyValue)) {
                                                converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                                                /* If the provided color doesn't match any of the accepted color formats, default to black. */
                                            } else if (!(/^rgba?\(/i.test(propertyValue))) {
                                                converted = colorNames.black;
                                            }

                                            /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
                                             repeated spaces (in case the value included spaces to begin with). */
                                            extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                        }

                                        /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                        if (!(IE <= 8) && extracted.split(" ").length === 3) {
                                            extracted += " 1";
                                        }

                                        return extracted;
                                    case "inject":
                                        /* If this is IE<=8 and an alpha component exists, strip it off. */
                                        if (IE <= 8) {
                                            if (propertyValue.split(" ").length === 4) {
                                                propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                                            }
                                            /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                        } else if (propertyValue.split(" ").length === 3) {
                                            propertyValue += " 1";
                                        }

                                        /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
                                         on all values but the fourth (R, G, and B only accept whole numbers). */
                                        return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                                }
                            };
                        })();
                    }
                }
            },

            /************************
             CSS Property Names
             ************************/

            Names: {
                /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
                 Camelcasing is used to normalize property names between and across calls. */
                camelCase: function (property) {
                    return property.replace(/-(\w)/g, function (match, subMatch) {
                        return subMatch.toUpperCase();
                    });
                },

                /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
                SVGAttribute: function (property) {
                    var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

                    /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
                    if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
                        SVGAttributes += "|transform";
                    }

                    return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
                },

                /* Determine whether a property should be set with a vendor prefix. */
                /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
                 If the property is not at all supported by the browser, return a false flag. */
                prefixCheck: function (property) {
                    /* If this property has already been checked, return the cached value. */
                    if (Velocity.State.prefixMatches[property]) {
                        return [ Velocity.State.prefixMatches[property], true ];
                    } else {
                        var vendors = [ "", "Webkit", "Moz", "ms", "O" ];

                        for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
                            var propertyPrefixed;

                            if (i === 0) {
                                propertyPrefixed = property;
                            } else {
                                /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
                                propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
                            }

                            /* Check if the browser supports this property as prefixed. */
                            if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                                /* Cache the match. */
                                Velocity.State.prefixMatches[property] = propertyPrefixed;

                                return [ propertyPrefixed, true ];
                            }
                        }

                        /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
                        return [ property, false ];
                    }
                }
            },

            /************************
             CSS Property Values
             ************************/

            Values: {
                /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
                hexToRgb: function (hex) {
                    var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        rgbParts;

                    hex = hex.replace(shortformRegex, function (m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    rgbParts = longformRegex.exec(hex);

                    return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
                },

                isCSSNullValue: function (value) {
                    /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
                     Thus, we check for both falsiness and these special strings. */
                    /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
                     templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
                    /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
                    return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
                },

                /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
                getUnitType: function (property) {
                    if (/^(rotate|skew)/i.test(property)) {
                        return "deg";
                    } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
                        /* The above properties are unitless. */
                        return "";
                    } else {
                        /* Default to px for all other properties. */
                        return "px";
                    }
                },

                /* HTML elements default to an associated display type when they're not set to display:none. */
                /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
                getDisplayType: function (element) {
                    var tagName = element && element.tagName.toString().toLowerCase();

                    if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
                        return "inline";
                    } else if (/^(li)$/i.test(tagName)) {
                        return "list-item";
                    } else if (/^(tr)$/i.test(tagName)) {
                        return "table-row";
                    } else if (/^(table)$/i.test(tagName)) {
                        return "table";
                    } else if (/^(tbody)$/i.test(tagName)) {
                        return "table-row-group";
                        /* Default to "block" when no match is found. */
                    } else {
                        return "block";
                    }
                },

                /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
                addClass: function (element, className) {
                    if (element.classList) {
                        element.classList.add(className);
                    } else {
                        element.className += (element.className.length ? " " : "") + className;
                    }
                },

                removeClass: function (element, className) {
                    if (element.classList) {
                        element.classList.remove(className);
                    } else {
                        element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    }
                }
            },

            /****************************
             Style Getting & Setting
             ****************************/

            /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
            getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
                /* Get an element's computed property value. */
                /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
                 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
                 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
                function computePropertyValue (element, property) {
                    /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
                     element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
                     offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
                     We subtract border and padding to get the sum of interior + scrollbar. */
                    var computedValue = 0;

                    /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
                     of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
                     codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
                     Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
                    if (IE <= 8) {
                        computedValue = $.css(element, property); /* GET */
                        /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
                         associated element so that it does not need to be refetched upon every GET. */
                    } else {
                        /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
                         toggle display to the element type's default value. */
                        var toggleDisplay = false;

                        if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
                            toggleDisplay = true;
                            CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
                        }

                        function revertDisplay () {
                            if (toggleDisplay) {
                                CSS.setPropertyValue(element, "display", "none");
                            }
                        }

                        if (!forceStyleLookup) {
                            if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                                revertDisplay();

                                return contentBoxHeight;
                            } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                                revertDisplay();

                                return contentBoxWidth;
                            }
                        }

                        var computedStyle;

                        /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
                         of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
                        if (Data(element) === undefined) {
                            computedStyle = window.getComputedStyle(element, null); /* GET */
                            /* If the computedStyle object has yet to be cached, do so now. */
                        } else if (!Data(element).computedStyle) {
                            computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
                            /* If computedStyle is cached, use it. */
                        } else {
                            computedStyle = Data(element).computedStyle;
                        }

                        /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
                         Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
                         So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
                        if (property === "borderColor") {
                            property = "borderTopColor";
                        }

                        /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
                         instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
                        if (IE === 9 && property === "filter") {
                            computedValue = computedStyle.getPropertyValue(property); /* GET */
                        } else {
                            computedValue = computedStyle[property];
                        }

                        /* Fall back to the property's style value (if defined) when computedValue returns nothing,
                         which can happen when the element hasn't been painted. */
                        if (computedValue === "" || computedValue === null) {
                            computedValue = element.style[property];
                        }

                        revertDisplay();
                    }

                    /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
                     defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
                     effect as being set to 0, so no conversion is necessary.) */
                    /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
                     property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
                     to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
                    if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
                        var position = computePropertyValue(element, "position"); /* GET */

                        /* For absolute positioning, jQuery's $.position() only returns values for top and left;
                         right and bottom will have their "auto" value reverted to 0. */
                        /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
                         Not a big deal since we're currently in a GET batch anyway. */
                        if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
                            /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                            computedValue = $(element).position()[property] + "px"; /* GET */
                        }
                    }

                    return computedValue;
                }

                var propertyValue;

                /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
                 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
                if (CSS.Hooks.registered[property]) {
                    var hook = property,
                        hookRoot = CSS.Hooks.getRoot(hook);

                    /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
                     query the DOM for the root property's value. */
                    if (rootPropertyValue === undefined) {
                        /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
                        rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
                    }

                    /* If this root has a normalization registered, peform the associated normalization extraction. */
                    if (CSS.Normalizations.registered[hookRoot]) {
                        rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
                    }

                    /* Extract the hook's value. */
                    propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

                    /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
                     normalize the property's name and value, and handle the special case of transforms. */
                    /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
                     numerical and therefore do not require normalization extraction. */
                } else if (CSS.Normalizations.registered[property]) {
                    var normalizedPropertyName,
                        normalizedPropertyValue;

                    normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

                    /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
                     At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
                     This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
                     thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
                    if (normalizedPropertyName !== "transform") {
                        normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

                        /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
                        if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
                            normalizedPropertyValue = CSS.Hooks.templates[property][1];
                        }
                    }

                    propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
                }

                /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
                if (!/^[\d-]/.test(propertyValue)) {
                    /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
                     their HTML attribute values instead of their CSS style values. */
                    if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
                        /* Since the height/width attribute values must be set manually, they don't reflect computed values.
                         Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
                        if (/^(height|width)$/i.test(property)) {
                            /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
                            try {
                                propertyValue = element.getBBox()[property];
                            } catch (error) {
                                propertyValue = 0;
                            }
                            /* Otherwise, access the attribute value directly. */
                        } else {
                            propertyValue = element.getAttribute(property);
                        }
                    } else {
                        propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
                    }
                }

                /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
                 convert CSS null-values to an integer of value 0. */
                if (CSS.Values.isCSSNullValue(propertyValue)) {
                    propertyValue = 0;
                }

                if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);

                return propertyValue;
            },

            /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
            setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
                var propertyName = property;

                /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
                if (property === "scroll") {
                    /* If a container option is present, scroll the container instead of the browser window. */
                    if (scrollData.container) {
                        scrollData.container["scroll" + scrollData.direction] = propertyValue;
                        /* Otherwise, Velocity defaults to scrolling the browser window. */
                    } else {
                        if (scrollData.direction === "Left") {
                            window.scrollTo(propertyValue, scrollData.alternateValue);
                        } else {
                            window.scrollTo(scrollData.alternateValue, propertyValue);
                        }
                    }
                } else {
                    /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
                     Thus, for now, we merely cache transforms being SET. */
                    if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
                        /* Perform a normalization injection. */
                        /* Note: The normalization logic handles the transformCache updating. */
                        CSS.Normalizations.registered[property]("inject", element, propertyValue);

                        propertyName = "transform";
                        propertyValue = Data(element).transformCache[property];
                    } else {
                        /* Inject hooks. */
                        if (CSS.Hooks.registered[property]) {
                            var hookName = property,
                                hookRoot = CSS.Hooks.getRoot(property);

                            /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
                            rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

                            propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
                            property = hookRoot;
                        }

                        /* Normalize names and values. */
                        if (CSS.Normalizations.registered[property]) {
                            propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
                            property = CSS.Normalizations.registered[property]("name", element);
                        }

                        /* Assign the appropriate vendor prefix before performing an official style update. */
                        propertyName = CSS.Names.prefixCheck(property)[0];

                        /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
                         Try/catch is avoided for other browsers since it incurs a performance overhead. */
                        if (IE <= 8) {
                            try {
                                element.style[propertyName] = propertyValue;
                            } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
                            /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
                            /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
                        } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
                            /* Note: For SVG attributes, vendor-prefixed property names are never used. */
                            /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
                            element.setAttribute(property, propertyValue);
                        } else {
                            element.style[propertyName] = propertyValue;
                        }

                        if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
                    }
                }

                /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
                return [ propertyName, propertyValue ];
            },

            /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
            /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
            flushTransformCache: function(element) {
                var transformString = "";

                /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
                 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
                if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
                    /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
                     Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
                    function getTransformFloat (transformProperty) {
                        return parseFloat(CSS.getPropertyValue(element, transformProperty));
                    }

                    /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
                     we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
                    var SVGTransforms = {
                        translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
                        skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
                        /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
                         (this behavior mimics the result of animating all these properties at once on HTML elements). */
                        scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
                        /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
                         defining the rotation's origin point. We ignore the origin values (default them to 0). */
                        rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
                    };

                    /* Iterate through the transform properties in the user-defined property map order.
                     (This mimics the behavior of non-SVG transform animation.) */
                    $.each(Data(element).transformCache, function(transformName) {
                        /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
                         properties so that they match up with SVG's accepted transform properties. */
                        if (/^translate/i.test(transformName)) {
                            transformName = "translate";
                        } else if (/^scale/i.test(transformName)) {
                            transformName = "scale";
                        } else if (/^rotate/i.test(transformName)) {
                            transformName = "rotate";
                        }

                        /* Check that we haven't yet deleted the property from the SVGTransforms container. */
                        if (SVGTransforms[transformName]) {
                            /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
                            transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

                            /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
                             re-insert the same master property if we encounter another one of its axis-specific properties. */
                            delete SVGTransforms[transformName];
                        }
                    });
                } else {
                    var transformValue,
                        perspective;

                    /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
                    $.each(Data(element).transformCache, function(transformName) {
                        transformValue = Data(element).transformCache[transformName];

                        /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
                        if (transformName === "transformPerspective") {
                            perspective = transformValue;
                            return true;
                        }

                        /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
                        if (IE === 9 && transformName === "rotateZ") {
                            transformName = "rotate";
                        }

                        transformString += transformName + transformValue + " ";
                    });

                    /* If present, set the perspective subproperty first. */
                    if (perspective) {
                        transformString = "perspective" + perspective + " " + transformString;
                    }
                }

                CSS.setPropertyValue(element, "transform", transformString);
            }
        };

        /* Register hooks and normalizations. */
        CSS.Hooks.register();
        CSS.Normalizations.register();

        /* Allow hook setting in the same fashion as jQuery's $.css(). */
        Velocity.hook = function (elements, arg2, arg3) {
            var value = undefined;

            elements = sanitizeElements(elements);

            $.each(elements, function(i, element) {
                /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
                if (Data(element) === undefined) {
                    Velocity.init(element);
                }

                /* Get property value. If an element set was passed in, only return the value for the first element. */
                if (arg3 === undefined) {
                    if (value === undefined) {
                        value = Velocity.CSS.getPropertyValue(element, arg2);
                    }
                    /* Set property value. */
                } else {
                    /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
                    var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);

                    /* Transform properties don't automatically set. They have to be flushed to the DOM. */
                    if (adjustedSet[0] === "transform") {
                        Velocity.CSS.flushTransformCache(element);
                    }

                    value = adjustedSet;
                }
            });

            return value;
        };

        /*****************
         Animation
         *****************/

        var animate = function() {

            /******************
             Call Chain
             ******************/

            /* Logic for determining what to return to the call stack when exiting out of Velocity. */
            function getChain () {
                /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
                 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
                if (isUtility) {
                    return promiseData.promise || null;
                    /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
                } else {
                    return elementsWrapped;
                }
            }

            /*************************
             Arguments Assignment
             *************************/

            /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
             objects are defined on a container object that's passed in as Velocity's sole argument. */
            /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
            var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
                isUtility,
            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
             passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
                elementsWrapped,
                argumentIndex;

            var elements,
                propertiesMap,
                options;

            /* Detect jQuery/Zepto elements being animated via the $.fn method. */
            if (Type.isWrapped(this)) {
                isUtility = false;

                argumentIndex = 0;
                elements = this;
                elementsWrapped = this;
                /* Otherwise, raw elements are being animated via the utility function. */
            } else {
                isUtility = true;

                argumentIndex = 1;
                elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
            }

            elements = sanitizeElements(elements);

            if (!elements) {
                return;
            }

            if (syntacticSugar) {
                propertiesMap = arguments[0].properties || arguments[0].p;
                options = arguments[0].options || arguments[0].o;
            } else {
                propertiesMap = arguments[argumentIndex];
                options = arguments[argumentIndex + 1];
            }

            /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
             single raw DOM element is passed in (which doesn't contain a length property). */
            var elementsLength = elements.length,
                elementsIndex = 0;

            /***************************
             Argument Overloading
             ***************************/

            /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
             Overloading is detected by checking for the absence of an object being passed into options. */
            /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
            if (!/^(stop|finish)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
                /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
                var startingArgumentPosition = argumentIndex + 1;

                options = {};

                /* Iterate through all options arguments */
                for (var i = startingArgumentPosition; i < arguments.length; i++) {
                    /* Treat a number as a duration. Parse it out. */
                    /* Note: The following RegEx will return true if passed an array with a number as its first item.
                     Thus, arrays are skipped from this check. */
                    if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
                        options.duration = arguments[i];
                        /* Treat strings and arrays as easings. */
                    } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
                        options.easing = arguments[i];
                        /* Treat a function as a complete callback. */
                    } else if (Type.isFunction(arguments[i])) {
                        options.complete = arguments[i];
                    }
                }
            }

            /***************
             Promises
             ***************/

            var promiseData = {
                promise: null,
                resolver: null,
                rejecter: null
            };

            /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
             promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
             method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
             call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
            /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
             triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
             grouped together for the purposes of resolving and rejecting a promise. */
            if (isUtility && Velocity.Promise) {
                promiseData.promise = new Velocity.Promise(function (resolve, reject) {
                    promiseData.resolver = resolve;
                    promiseData.rejecter = reject;
                });
            }

            /*********************
             Action Detection
             *********************/

            /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
             or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
             first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
            var action;

            switch (propertiesMap) {
                case "scroll":
                    action = "scroll";
                    break;

                case "reverse":
                    action = "reverse";
                    break;

                case "finish":
                case "stop":
                    /*******************
                     Action: Stop
                     *******************/

                    /* Clear the currently-active delay on each targeted element. */
                    $.each(elements, function(i, element) {
                        if (Data(element) && Data(element).delayTimer) {
                            /* Stop the timer from triggering its cached next() function. */
                            clearTimeout(Data(element).delayTimer.setTimeout);

                            /* Manually call the next() function so that the subsequent queue items can progress. */
                            if (Data(element).delayTimer.next) {
                                Data(element).delayTimer.next();
                            }

                            delete Data(element).delayTimer;
                        }
                    });

                    var callsToStop = [];

                    /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
                     been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
                     is stopped, the next item in its animation queue is immediately triggered. */
                    /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
                     or a custom queue string can be passed in. */
                    /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
                     regardless of the element's current queue state. */

                    /* Iterate through every active call. */
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
                        if (activeCall) {
                            /* Iterate through the active call's targeted elements. */
                            $.each(activeCall[1], function(k, activeElement) {
                                /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
                                 clear calls associated with the relevant queue. */
                                /* Call stopping logic works as follows:
                                 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
                                 - options === undefined --> stop current queue:"" call and all queue:false calls.
                                 - options === false --> stop only queue:false calls.
                                 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
                                var queueName = (options === undefined) ? "" : options;

                                if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
                                    return true;
                                }

                                /* Iterate through the calls targeted by the stop command. */
                                $.each(elements, function(l, element) {
                                    /* Check that this call was applied to the target element. */
                                    if (element === activeElement) {
                                        /* Optionally clear the remaining queued calls. */
                                        if (options === true || Type.isString(options)) {
                                            /* Iterate through the items in the element's queue. */
                                            $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                                /* The queue array can contain an "inprogress" string, which we skip. */
                                                if (Type.isFunction(item)) {
                                                    /* Pass the item's callback a flag indicating that we want to abort from the queue call.
                                                     (Specifically, the queue will resolve the call's associated promise then abort.)  */
                                                    item(null, true);
                                                }
                                            });

                                            /* Clearing the $.queue() array is achieved by resetting it to []. */
                                            $.queue(element, Type.isString(options) ? options : "", []);
                                        }

                                        if (propertiesMap === "stop") {
                                            /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
                                             changed to reflect the final value that the elements were actually tweened to. */
                                            /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
                                             object. Also, queue:false animations can't be reversed. */
                                            if (Data(element) && Data(element).tweensContainer && queueName !== false) {
                                                $.each(Data(element).tweensContainer, function(m, activeTween) {
                                                    activeTween.endValue = activeTween.currentValue;
                                                });
                                            }

                                            callsToStop.push(i);
                                        } else if (propertiesMap === "finish") {
                                            /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
                                             they finish upon the next rAf tick then proceed with normal call completion logic. */
                                            activeCall[2].duration = 1;
                                        }
                                    }
                                });
                            });
                        }
                    });

                    /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
                     that the complete callback and display:none setting should be skipped since we're completing prematurely. */
                    if (propertiesMap === "stop") {
                        $.each(callsToStop, function(i, j) {
                            completeCall(j, true);
                        });

                        if (promiseData.promise) {
                            /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
                            promiseData.resolver(elements);
                        }
                    }

                    /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
                    return getChain();

                default:
                    /* Treat a non-empty plain object as a literal properties map. */
                    if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
                        action = "start";

                        /****************
                         Redirects
                         ****************/

                        /* Check if a string matches a registered redirect (see Redirects above). */
                    } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
                        var opts = $.extend({}, options),
                            durationOriginal = opts.duration,
                            delayOriginal = opts.delay || 0;

                        /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
                        if (opts.backwards === true) {
                            elements = $.extend(true, [], elements).reverse();
                        }

                        /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
                        $.each(elements, function(elementIndex, element) {
                            /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
                            if (parseFloat(opts.stagger)) {
                                opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
                            } else if (Type.isFunction(opts.stagger)) {
                                opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
                            }

                            /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
                             the duration of each element's animation, using floors to prevent producing very short durations. */
                            if (opts.drag) {
                                /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
                                opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

                                /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
                                 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
                                 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
                                opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
                            }

                            /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
                             reduce the opts checking logic required inside the redirect. */
                            Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
                        });

                        /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
                         (The performance overhead up to this point is virtually non-existant.) */
                        /* Note: The jQuery call chain is kept intact by returning the complete element set. */
                        return getChain();
                    } else {
                        var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

                        if (promiseData.promise) {
                            promiseData.rejecter(new Error(abortError));
                        } else {
                            console.log(abortError);
                        }

                        return getChain();
                    }
            }

            /**************************
             Call-Wide Variables
             **************************/

            /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
             being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
             avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
             conversion metrics across Velocity animations that are not immediately consecutively chained. */
            var callUnitConversionData = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
            };

            /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
             Velocity.State.calls array that is processed during animation ticking. */
            var call = [];

            /************************
             Element Processing
             ************************/

            /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
             1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
             2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
             3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
             */

            function processElement () {

                /*************************
                 Part I: Pre-Queueing
                 *************************/

                /***************************
                 Element-Wide Variables
                 ***************************/

                var element = this,
                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
                    opts = $.extend({}, Velocity.defaults, options),
                /* A container for the processed data associated with each property in the propertyMap.
                 (Each property in the map produces its own "tween".) */
                    tweensContainer = {},
                    elementUnitConversionData;

                /******************
                 Element Init
                 ******************/

                if (Data(element) === undefined) {
                    Velocity.init(element);
                }

                /******************
                 Option: Delay
                 ******************/

                /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
                /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
                 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
                if (parseFloat(opts.delay) && opts.queue !== false) {
                    $.queue(element, opts.queue, function(next) {
                        /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
                        Velocity.velocityQueueEntryFlag = true;

                        /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
                         The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
                        Data(element).delayTimer = {
                            setTimeout: setTimeout(next, parseFloat(opts.delay)),
                            next: next
                        };
                    });
                }

                /*********************
                 Option: Duration
                 *********************/

                /* Support for jQuery's named durations. */
                switch (opts.duration.toString().toLowerCase()) {
                    case "fast":
                        opts.duration = 200;
                        break;

                    case "normal":
                        opts.duration = DURATION_DEFAULT;
                        break;

                    case "slow":
                        opts.duration = 600;
                        break;

                    default:
                        /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
                        opts.duration = parseFloat(opts.duration) || 1;
                }

                /************************
                 Global Option: Mock
                 ************************/

                if (Velocity.mock !== false) {
                    /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
                     Alternatively, a multiplier can be passed in to time remap all delays and durations. */
                    if (Velocity.mock === true) {
                        opts.duration = opts.delay = 1;
                    } else {
                        opts.duration *= parseFloat(Velocity.mock) || 1;
                        opts.delay *= parseFloat(Velocity.mock) || 1;
                    }
                }

                /*******************
                 Option: Easing
                 *******************/

                opts.easing = getEasing(opts.easing, opts.duration);

                /**********************
                 Option: Callbacks
                 **********************/

                /* Callbacks must functions. Otherwise, default to null. */
                if (opts.begin && !Type.isFunction(opts.begin)) {
                    opts.begin = null;
                }

                if (opts.progress && !Type.isFunction(opts.progress)) {
                    opts.progress = null;
                }

                if (opts.complete && !Type.isFunction(opts.complete)) {
                    opts.complete = null;
                }

                /*********************************
                 Option: Display & Visibility
                 *********************************/

                /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
                /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
                if (opts.display !== undefined && opts.display !== null) {
                    opts.display = opts.display.toString().toLowerCase();

                    /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
                    if (opts.display === "auto") {
                        opts.display = Velocity.CSS.Values.getDisplayType(element);
                    }
                }

                if (opts.visibility !== undefined && opts.visibility !== null) {
                    opts.visibility = opts.visibility.toString().toLowerCase();
                }

                /**********************
                 Option: mobileHA
                 **********************/

                /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
                 on animating elements. HA is removed from the element at the completion of its animation. */
                /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
                /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
                opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

                /***********************
                 Part II: Queueing
                 ***********************/

                /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
                 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
                /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
                 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
                function buildQueue (next) {

                    /*******************
                     Option: Begin
                     *******************/

                    /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
                    if (opts.begin && elementsIndex === 0) {
                        /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                        try {
                            opts.begin.call(elements, elements);
                        } catch (error) {
                            setTimeout(function() { throw error; }, 1);
                        }
                    }

                    /*****************************************
                     Tween Data Construction (for Scroll)
                     *****************************************/

                    /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
                    if (action === "scroll") {
                        /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
                        var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
                            scrollOffset = parseFloat(opts.offset) || 0,
                            scrollPositionCurrent,
                            scrollPositionCurrentAlternate,
                            scrollPositionEnd;

                        /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
                         as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
                        if (opts.container) {
                            /* Ensure that either a jQuery object or a raw DOM element was passed in. */
                            if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                                /* Extract the raw DOM element from the jQuery wrapper. */
                                opts.container = opts.container[0] || opts.container;
                                /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
                                 (due to the user's natural interaction with the page). */
                                scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

                                /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
                                 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
                                 the scroll container's current scroll position. */
                                scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
                                /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
                            } else {
                                opts.container = null;
                            }
                        } else {
                            /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
                             the appropriate cached property names (which differ based on browser type). */
                            scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
                            /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
                            scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

                            /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
                             and therefore end values do not need to be compounded onto current values. */
                            scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
                        }

                        /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
                        tweensContainer = {
                            scroll: {
                                rootPropertyValue: false,
                                startValue: scrollPositionCurrent,
                                currentValue: scrollPositionCurrent,
                                endValue: scrollPositionEnd,
                                unitType: "",
                                easing: opts.easing,
                                scrollData: {
                                    container: opts.container,
                                    direction: scrollDirection,
                                    alternateValue: scrollPositionCurrentAlternate
                                }
                            },
                            element: element
                        };

                        if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);

                        /******************************************
                         Tween Data Construction (for Reverse)
                         ******************************************/

                        /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
                         that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
                         the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
                        /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
                        /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
                         there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
                         as reverting to the element's values as they were prior to the previous *Velocity* call. */
                    } else if (action === "reverse") {
                        /* Abort if there is no prior animation data to reverse to. */
                        if (!Data(element).tweensContainer) {
                            /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
                            $.dequeue(element, opts.queue);

                            return;
                        } else {
                            /*********************
                             Options Parsing
                             *********************/

                            /* If the element was hidden via the display option in the previous call,
                             revert display to "auto" prior to reversal so that the element is visible again. */
                            if (Data(element).opts.display === "none") {
                                Data(element).opts.display = "auto";
                            }

                            if (Data(element).opts.visibility === "hidden") {
                                Data(element).opts.visibility = "visible";
                            }

                            /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
                             Further, remove the previous call's callback options; typically, users do not want these to be refired. */
                            Data(element).opts.loop = false;
                            Data(element).opts.begin = null;
                            Data(element).opts.complete = null;

                            /* Since we're extending an opts object that has already been extended with the defaults options object,
                             we remove non-explicitly-defined properties that are auto-assigned values. */
                            if (!options.easing) {
                                delete opts.easing;
                            }

                            if (!options.duration) {
                                delete opts.duration;
                            }

                            /* The opts object used for reversal is an extension of the options object optionally passed into this
                             reverse call plus the options used in the previous Velocity call. */
                            opts = $.extend({}, Data(element).opts, opts);

                            /*************************************
                             Tweens Container Reconstruction
                             *************************************/

                            /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
                            var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);

                            /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
                            for (var lastTween in lastTweensContainer) {
                                /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
                                if (lastTween !== "element") {
                                    var lastStartValue = lastTweensContainer[lastTween].startValue;

                                    lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                                    lastTweensContainer[lastTween].endValue = lastStartValue;

                                    /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
                                     Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
                                     The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
                                    if (!Type.isEmptyObject(options)) {
                                        lastTweensContainer[lastTween].easing = opts.easing;
                                    }

                                    if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                                }
                            }

                            tweensContainer = lastTweensContainer;
                        }

                        /*****************************************
                         Tween Data Construction (for Start)
                         *****************************************/

                    } else if (action === "start") {

                        /*************************
                         Value Transferring
                         *************************/

                        /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
                         while the element was in the process of being animated by Velocity, then this current call is safe to use
                         the end values from the prior call as its start values. Velocity attempts to perform this value transfer
                         process whenever possible in order to avoid requerying the DOM. */
                        /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
                         then the DOM is queried for the element's current values as a last resort. */
                        /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
                        var lastTweensContainer;

                        /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
                         to transfer over end values to use as start values. If it's set to true and there is a previous
                         Velocity call to pull values from, do so. */
                        if (Data(element).tweensContainer && Data(element).isAnimating === true) {
                            lastTweensContainer = Data(element).tweensContainer;
                        }

                        /***************************
                         Tween Data Calculation
                         ***************************/

                        /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
                        /* Property map values can either take the form of 1) a single value representing the end value,
                         or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
                         The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
                         the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
                        function parsePropertyValue (valueData, skipResolvingEasing) {
                            var endValue = undefined,
                                easing = undefined,
                                startValue = undefined;

                            /* Handle the array format, which can be structured as one of three potential overloads:
                             A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
                            if (Type.isArray(valueData)) {
                                /* endValue is always the first item in the array. Don't bother validating endValue's value now
                                 since the ensuing property cycling logic does that. */
                                endValue = valueData[0];

                                /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
                                 start value since easings can only be non-hex strings or arrays. */
                                if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                                    startValue = valueData[1];
                                    /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
                                } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
                                    easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

                                    /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
                                    if (valueData[2] !== undefined) {
                                        startValue = valueData[2];
                                    }
                                }
                                /* Handle the single-value format. */
                            } else {
                                endValue = valueData;
                            }

                            /* Default to the call's easing if a per-property easing type was not defined. */
                            if (!skipResolvingEasing) {
                                easing = easing || opts.easing;
                            }

                            /* If functions were passed in as values, pass the function the current element as its context,
                             plus the element's index and the element set's size as arguments. Then, assign the returned value. */
                            if (Type.isFunction(endValue)) {
                                endValue = endValue.call(element, elementsIndex, elementsLength);
                            }

                            if (Type.isFunction(startValue)) {
                                startValue = startValue.call(element, elementsIndex, elementsLength);
                            }

                            /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
                            return [ endValue || 0, easing, startValue ];
                        }

                        /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
                         colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
                        $.each(propertiesMap, function(property, value) {
                            /* Find shorthand color properties that have been passed a hex string. */
                            if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
                                /* Parse the value data for each shorthand. */
                                var valueData = parsePropertyValue(value, true),
                                    endValue = valueData[0],
                                    easing = valueData[1],
                                    startValue = valueData[2];

                                if (CSS.RegEx.isHex.test(endValue)) {
                                    /* Convert the hex strings into their RGB component arrays. */
                                    var colorComponents = [ "Red", "Green", "Blue" ],
                                        endValueRGB = CSS.Values.hexToRgb(endValue),
                                        startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

                                    /* Inject the RGB component tweens into propertiesMap. */
                                    for (var i = 0; i < colorComponents.length; i++) {
                                        var dataArray = [ endValueRGB[i] ];

                                        if (easing) {
                                            dataArray.push(easing);
                                        }

                                        if (startValueRGB !== undefined) {
                                            dataArray.push(startValueRGB[i]);
                                        }

                                        propertiesMap[property + colorComponents[i]] = dataArray;
                                    }

                                    /* Remove the intermediary shorthand property entry now that we've processed it. */
                                    delete propertiesMap[property];
                                }
                            }
                        });

                        /* Create a tween out of each property, and append its associated data to tweensContainer. */
                        for (var property in propertiesMap) {

                            /**************************
                             Start Value Sourcing
                             **************************/

                            /* Parse out endValue, easing, and startValue from the property's data. */
                            var valueData = parsePropertyValue(propertiesMap[property]),
                                endValue = valueData[0],
                                easing = valueData[1],
                                startValue = valueData[2];

                            /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
                             we force the property to its camelCase styling to normalize it for manipulation. */
                            property = CSS.Names.camelCase(property);

                            /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
                            var rootProperty = CSS.Hooks.getRoot(property),
                                rootPropertyValue = false;

                            /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
                             inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
                             Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
                            /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
                             there is no way to check for their explicit browser support, and so we skip skip this check for them. */
                            if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                                if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");

                                continue;
                            }

                            /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
                             animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
                             a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
                            if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                                startValue = 0;
                            }

                            /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
                             for all of the current call's properties that were *also* animated in the previous call. */
                            /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
                            if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                                if (startValue === undefined) {
                                    startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                                }

                                /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
                                 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
                                 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
                                rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
                                /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
                            } else {
                                /* Handle hooked properties. */
                                if (CSS.Hooks.registered[property]) {
                                    if (startValue === undefined) {
                                        rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
                                        /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
                                         getPropertyValue() will extract the hook from rootPropertyValue. */
                                        startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                                        /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
                                         just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
                                         root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
                                         to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
                                    } else {
                                        /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
                                        rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                                    }
                                    /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
                                } else if (startValue === undefined) {
                                    startValue = CSS.getPropertyValue(element, property); /* GET */
                                }
                            }

                            /**************************
                             Value Data Extraction
                             **************************/

                            var separatedValue,
                                endValueUnitType,
                                startValueUnitType,
                                operator = false;

                            /* Separates a property value into its numeric value and its unit type. */
                            function separateValue (property, value) {
                                var unitType,
                                    numericValue;

                                numericValue = (value || "0")
                                    .toString()
                                    .toLowerCase()
                                    /* Match the unit type at the end of the value. */
                                    .replace(/[%A-z]+$/, function(match) {
                                        /* Grab the unit type. */
                                        unitType = match;

                                        /* Strip the unit type off of value. */
                                        return "";
                                    });

                                /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
                                if (!unitType) {
                                    unitType = CSS.Values.getUnitType(property);
                                }

                                return [ numericValue, unitType ];
                            }

                            /* Separate startValue. */
                            separatedValue = separateValue(property, startValue);
                            startValue = separatedValue[0];
                            startValueUnitType = separatedValue[1];

                            /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
                            separatedValue = separateValue(property, endValue);
                            endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                                operator = subMatch;

                                /* Strip the operator off of the value. */
                                return "";
                            });
                            endValueUnitType = separatedValue[1];

                            /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
                            startValue = parseFloat(startValue) || 0;
                            endValue = parseFloat(endValue) || 0;

                            /***************************************
                             Property-Specific Value Conversion
                             ***************************************/

                            /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
                            if (endValueUnitType === "%") {
                                /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
                                 which is identical to the em unit's behavior, so we piggyback off of that. */
                                if (/^(fontSize|lineHeight)$/.test(property)) {
                                    /* Convert % into an em decimal value. */
                                    endValue = endValue / 100;
                                    endValueUnitType = "em";
                                    /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
                                } else if (/^scale/.test(property)) {
                                    endValue = endValue / 100;
                                    endValueUnitType = "";
                                    /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
                                } else if (/(Red|Green|Blue)$/i.test(property)) {
                                    endValue = (endValue / 100) * 255;
                                    endValueUnitType = "";
                                }
                            }

                            /***************************
                             Unit Ratio Calculation
                             ***************************/

                            /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
                             %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
                             for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
                             from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
                             1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
                             2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
                            /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
                             setting values with the target unit type then comparing the returned pixel value. */
                            /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
                             of batching the SETs and GETs together upfront outweights the potential overhead
                             of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
                            /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
                            function calculateUnitRatios () {

                                /************************
                                 Same Ratio Checks
                                 ************************/

                                /* The properties below are used to determine whether the element differs sufficiently from this call's
                                 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
                                 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
                                 this is done to minimize DOM querying. */
                                var sameRatioIndicators = {
                                        myParent: element.parentNode || document.body, /* GET */
                                        position: CSS.getPropertyValue(element, "position"), /* GET */
                                        fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
                                    },
                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
                                    samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
                                    sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

                                /* Store these ratio indicators call-wide for the next element to compare against. */
                                callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                                callUnitConversionData.lastPosition = sameRatioIndicators.position;
                                callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

                                /***************************
                                 Element-Specific Units
                                 ***************************/

                                /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
                                 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
                                var measurement = 100,
                                    unitRatios = {};

                                if (!sameEmRatio || !samePercentRatio) {
                                    var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

                                    Velocity.init(dummy);
                                    sameRatioIndicators.myParent.appendChild(dummy);

                                    /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
                                     Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
                                    /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
                                    $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
                                        Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                                    });
                                    Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                                    Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                                    Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

                                    /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
                                    $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
                                        Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                                    });
                                    /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
                                    Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

                                    /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
                                    unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
                                    unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
                                    unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

                                    sameRatioIndicators.myParent.removeChild(dummy);
                                } else {
                                    unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                                    unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                                    unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                                }

                                /***************************
                                 Element-Agnostic Units
                                 ***************************/

                                /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
                                 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
                                 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
                                 so we calculate it now. */
                                if (callUnitConversionData.remToPx === null) {
                                    /* Default to browsers' default fontSize of 16px in the case of 0. */
                                    callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
                                }

                                /* Similarly, viewport units are %-relative to the window's inner dimensions. */
                                if (callUnitConversionData.vwToPx === null) {
                                    callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
                                    callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
                                }

                                unitRatios.remToPx = callUnitConversionData.remToPx;
                                unitRatios.vwToPx = callUnitConversionData.vwToPx;
                                unitRatios.vhToPx = callUnitConversionData.vhToPx;

                                if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);

                                return unitRatios;
                            }

                            /********************
                             Unit Conversion
                             ********************/

                            /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
                            if (/[\/*]/.test(operator)) {
                                endValueUnitType = startValueUnitType;
                                /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
                                 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
                                 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
                                 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
                                /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
                            } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
                                /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
                                /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
                                 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
                                 which remains past the point of the animation's completion. */
                                if (endValue === 0) {
                                    endValueUnitType = startValueUnitType;
                                } else {
                                    /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
                                     If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
                                    elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

                                    /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
                                    /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
                                    var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

                                    /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
                                     1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
                                    switch (startValueUnitType) {
                                        case "%":
                                            /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
                                             Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
                                             to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
                                            startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                            break;

                                        case "px":
                                            /* px acts as our midpoint in the unit conversion process; do nothing. */
                                            break;

                                        default:
                                            startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                                    }

                                    /* Invert the px ratios to convert into to the target unit. */
                                    switch (endValueUnitType) {
                                        case "%":
                                            startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                            break;

                                        case "px":
                                            /* startValue is already in px, do nothing; we're done. */
                                            break;

                                        default:
                                            startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                                    }
                                }
                            }

                            /*********************
                             Relative Values
                             *********************/

                            /* Operator logic must be performed last since it requires unit-normalized start and end values. */
                            /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
                             to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
                             50 points is added on top of the current % value. */
                            switch (operator) {
                                case "+":
                                    endValue = startValue + endValue;
                                    break;

                                case "-":
                                    endValue = startValue - endValue;
                                    break;

                                case "*":
                                    endValue = startValue * endValue;
                                    break;

                                case "/":
                                    endValue = startValue / endValue;
                                    break;
                            }

                            /**************************
                             tweensContainer Push
                             **************************/

                            /* Construct the per-property tween object, and push it to the element's tweensContainer. */
                            tweensContainer[property] = {
                                rootPropertyValue: rootPropertyValue,
                                startValue: startValue,
                                currentValue: startValue,
                                endValue: endValue,
                                unitType: endValueUnitType,
                                easing: easing
                            };

                            if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
                        }

                        /* Along with its property data, store a reference to the element itself onto tweensContainer. */
                        tweensContainer.element = element;
                    }

                    /*****************
                     Call Push
                     *****************/

                    /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
                     being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
                    if (tweensContainer.element) {
                        /* Apply the "velocity-animating" indicator class. */
                        CSS.Values.addClass(element, "velocity-animating");

                        /* The call array houses the tweensContainers for each element being animated in the current call. */
                        call.push(tweensContainer);

                        /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
                        if (opts.queue === "") {
                            Data(element).tweensContainer = tweensContainer;
                            Data(element).opts = opts;
                        }

                        /* Switch on the element's animating flag. */
                        Data(element).isAnimating = true;

                        /* Once the final element in this call's element set has been processed, push the call array onto
                         Velocity.State.calls for the animation tick to immediately begin processing. */
                        if (elementsIndex === elementsLength - 1) {
                            /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
                             Anything on this call container is subjected to tick() processing. */
                            Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);

                            /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
                            if (Velocity.State.isTicking === false) {
                                Velocity.State.isTicking = true;

                                /* Start the tick loop. */
                                tick();
                            }
                        } else {
                            elementsIndex++;
                        }
                    }
                }

                /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
                if (opts.queue === false) {
                    /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
                     we manually inject the delay property here with an explicit setTimeout. */
                    if (opts.delay) {
                        setTimeout(buildQueue, opts.delay);
                    } else {
                        buildQueue();
                    }
                    /* Otherwise, the call undergoes element queueing as normal. */
                    /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
                } else {
                    $.queue(element, opts.queue, function(next, clearQueue) {
                        /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
                         so it's fine if this is repeatedly triggered for each element in the associated call.) */
                        if (clearQueue === true) {
                            if (promiseData.promise) {
                                promiseData.resolver(elements);
                            }

                            /* Do not continue with animation queueing. */
                            return true;
                        }

                        /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
                         See completeCall() for further details. */
                        Velocity.velocityQueueEntryFlag = true;

                        buildQueue(next);
                    });
                }

                /*********************
                 Auto-Dequeuing
                 *********************/

                /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
                 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
                 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
                 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
                 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
                /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
                 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
                /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
                 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
                if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
                    $.dequeue(element);
                }
            }

            /**************************
             Element Set Iteration
             **************************/

            /* If the "nodeType" property exists on the elements variable, we're animating a single element.
             Place it in an array so that $.each() can iterate over it. */
            $.each(elements, function(i, element) {
                /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
                if (Type.isNode(element)) {
                    processElement.call(element);
                }
            });

            /******************
             Option: Loop
             ******************/

            /* The loop option accepts an integer indicating how many times the element should loop between the values in the
             current call's properties map and the element's property values prior to this call. */
            /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
             to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
             which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
            var opts = $.extend({}, Velocity.defaults, options),
                reverseCallsCount;

            opts.loop = parseInt(opts.loop);
            reverseCallsCount = (opts.loop * 2) - 1;

            if (opts.loop) {
                /* Double the loop count to convert it into its appropriate number of "reverse" calls.
                 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
                for (var x = 0; x < reverseCallsCount; x++) {
                    /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
                     isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
                     call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
                    var reverseOptions = {
                        delay: opts.delay,
                        progress: opts.progress
                    };

                    /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
                     so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
                    if (x === reverseCallsCount - 1) {
                        reverseOptions.display = opts.display;
                        reverseOptions.visibility = opts.visibility;
                        reverseOptions.complete = opts.complete;
                    }

                    animate(elements, "reverse", reverseOptions);
                }
            }

            /***************
             Chaining
             ***************/

            /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
            return getChain();
        };

        /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
        Velocity = $.extend(animate, Velocity);
        /* For legacy support, also expose the literal animate method. */
        Velocity.animate = animate;

        /**************
         Timing
         **************/

        /* Ticker function. */
        var ticker = window.requestAnimationFrame || rAFShim;

        /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
         To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
         devices to avoid wasting battery power on inactive tabs. */
        /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
        if (!Velocity.State.isMobile && document.hidden !== undefined) {
            document.addEventListener("visibilitychange", function() {
                /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
                if (document.hidden) {
                    ticker = function(callback) {
                        /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
                        return setTimeout(function() { callback(true) }, 16);
                    };

                    /* The rAF loop has been paused by the browser, so we manually restart the tick. */
                    tick();
                } else {
                    ticker = window.requestAnimationFrame || rAFShim;
                }
            });
        }

        /************
         Tick
         ************/

        /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
        function tick (timestamp) {
            /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
             We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
             the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
             calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
             the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
             by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
            if (timestamp) {
                /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
                 under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
                var timeCurrent = (new Date).getTime();

                /********************
                 Call Iteration
                 ********************/

                var callsLength = Velocity.State.calls.length;

                /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
                 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
                 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
                if (callsLength > 10000) {
                    Velocity.State.calls = compactSparseArray(Velocity.State.calls);
                }

                /* Iterate through each active call. */
                for (var i = 0; i < callsLength; i++) {
                    /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
                    if (!Velocity.State.calls[i]) {
                        continue;
                    }

                    /************************
                     Call-Wide Variables
                     ************************/

                    var callContainer = Velocity.State.calls[i],
                        call = callContainer[0],
                        opts = callContainer[2],
                        timeStart = callContainer[3],
                        firstTick = !!timeStart,
                        tweenDummyValue = null;

                    /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
                     We assign timeStart now so that its value is as close to the real animation start time as possible.
                     (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
                     between that time and now would cause the first few frames of the tween to be skipped since
                     percentComplete is calculated relative to timeStart.) */
                    /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
                     first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
                     same style value as the element's current value. */
                    if (!timeStart) {
                        timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
                    }

                    /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
                     (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
                     Accordingly, we ensure that percentComplete does not exceed 1. */
                    var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);

                    /**********************
                     Element Iteration
                     **********************/

                    /* For every call, iterate through each of the elements in its set. */
                    for (var j = 0, callLength = call.length; j < callLength; j++) {
                        var tweensContainer = call[j],
                            element = tweensContainer.element;

                        /* Check to see if this element has been deleted midway through the animation by checking for the
                         continued existence of its data cache. If it's gone, skip animating this element. */
                        if (!Data(element)) {
                            continue;
                        }

                        var transformPropertyExists = false;

                        /**********************************
                         Display & Visibility Toggling
                         **********************************/

                        /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
                         (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
                        if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
                            if (opts.display === "flex") {
                                var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];

                                $.each(flexValues, function(i, flexValue) {
                                    CSS.setPropertyValue(element, "display", flexValue);
                                });
                            }

                            CSS.setPropertyValue(element, "display", opts.display);
                        }

                        /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
                        if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                            CSS.setPropertyValue(element, "visibility", opts.visibility);
                        }

                        /************************
                         Property Iteration
                         ************************/

                        /* For every element, iterate through each property. */
                        for (var property in tweensContainer) {
                            /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
                            if (property !== "element") {
                                var tween = tweensContainer[property],
                                    currentValue,
                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
                                 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
                                    easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

                                /******************************
                                 Current Value Calculation
                                 ******************************/

                                /* If this is the last tick pass (if we've reached 100% completion for this tween),
                                 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
                                if (percentComplete === 1) {
                                    currentValue = tween.endValue;
                                    /* Otherwise, calculate currentValue based on the current delta from startValue. */
                                } else {
                                    var tweenDelta = tween.endValue - tween.startValue;
                                    currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

                                    /* If no value change is occurring, don't proceed with DOM updating. */
                                    if (!firstTick && (currentValue === tween.currentValue)) {
                                        continue;
                                    }
                                }

                                tween.currentValue = currentValue;

                                /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
                                 it can be passed into the progress callback. */
                                if (property === "tween") {
                                    tweenDummyValue = currentValue;
                                } else {
                                    /******************
                                     Hooks: Part I
                                     ******************/

                                    /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
                                     for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
                                     rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
                                     updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
                                     subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
                                    if (CSS.Hooks.registered[property]) {
                                        var hookRoot = CSS.Hooks.getRoot(property),
                                            rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

                                        if (rootPropertyValueCache) {
                                            tween.rootPropertyValue = rootPropertyValueCache;
                                        }
                                    }

                                    /*****************
                                     DOM Update
                                     *****************/

                                    /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
                                    /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
                                    var adjustedSetData = CSS.setPropertyValue(element, /* SET */
                                        property,
                                        tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
                                        tween.rootPropertyValue,
                                        tween.scrollData);

                                    /*******************
                                     Hooks: Part II
                                     *******************/

                                    /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
                                    if (CSS.Hooks.registered[property]) {
                                        /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
                                        if (CSS.Normalizations.registered[hookRoot]) {
                                            Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                                        } else {
                                            Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                                        }
                                    }

                                    /***************
                                     Transforms
                                     ***************/

                                    /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
                                    if (adjustedSetData[0] === "transform") {
                                        transformPropertyExists = true;
                                    }

                                }
                            }
                        }

                        /****************
                         mobileHA
                         ****************/

                        /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
                         It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
                        if (opts.mobileHA) {
                            /* Don't set the null transform hack if we've already done so. */
                            if (Data(element).transformCache.translate3d === undefined) {
                                /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
                                Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

                                transformPropertyExists = true;
                            }
                        }

                        if (transformPropertyExists) {
                            CSS.flushTransformCache(element);
                        }
                    }

                    /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
                     Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
                    if (opts.display !== undefined && opts.display !== "none") {
                        Velocity.State.calls[i][2].display = false;
                    }
                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                        Velocity.State.calls[i][2].visibility = false;
                    }

                    /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
                    if (opts.progress) {
                        opts.progress.call(callContainer[1],
                            callContainer[1],
                            percentComplete,
                            Math.max(0, (timeStart + opts.duration) - timeCurrent),
                            timeStart,
                            tweenDummyValue);
                    }

                    /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
                    if (percentComplete === 1) {
                        completeCall(i);
                    }
                }
            }

            /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
            if (Velocity.State.isTicking) {
                ticker(tick);
            }
        }

        /**********************
         Call Completion
         **********************/

        /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
        function completeCall (callIndex, isStopped) {
            /* Ensure the call exists. */
            if (!Velocity.State.calls[callIndex]) {
                return false;
            }

            /* Pull the metadata from the call. */
            var call = Velocity.State.calls[callIndex][0],
                elements = Velocity.State.calls[callIndex][1],
                opts = Velocity.State.calls[callIndex][2],
                resolver = Velocity.State.calls[callIndex][4];

            var remainingCallsExist = false;

            /*************************
             Element Finalization
             *************************/

            for (var i = 0, callLength = call.length; i < callLength; i++) {
                var element = call[i].element;

                /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
                /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
                /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
                if (!isStopped && !opts.loop) {
                    if (opts.display === "none") {
                        CSS.setPropertyValue(element, "display", opts.display);
                    }

                    if (opts.visibility === "hidden") {
                        CSS.setPropertyValue(element, "visibility", opts.visibility);
                    }
                }

                /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
                 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
                 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
                 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
                 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
                if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
                    /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
                    if (Data(element)) {
                        Data(element).isAnimating = false;
                        /* Clear the element's rootPropertyValueCache, which will become stale. */
                        Data(element).rootPropertyValueCache = {};

                        var transformHAPropertyExists = false;
                        /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
                        $.each(CSS.Lists.transforms3D, function(i, transformName) {
                            var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                                currentValue = Data(element).transformCache[transformName];

                            if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                                transformHAPropertyExists = true;

                                delete Data(element).transformCache[transformName];
                            }
                        });

                        /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
                        if (opts.mobileHA) {
                            transformHAPropertyExists = true;
                            delete Data(element).transformCache.translate3d;
                        }

                        /* Flush the subproperty removals to the DOM. */
                        if (transformHAPropertyExists) {
                            CSS.flushTransformCache(element);
                        }

                        /* Remove the "velocity-animating" indicator class. */
                        CSS.Values.removeClass(element, "velocity-animating");
                    }
                }

                /*********************
                 Option: Complete
                 *********************/

                /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
                /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
                if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                    try {
                        opts.complete.call(elements, elements);
                    } catch (error) {
                        setTimeout(function() { throw error; }, 1);
                    }
                }

                /**********************
                 Promise Resolving
                 **********************/

                /* Note: Infinite loops don't return promises. */
                if (resolver && opts.loop !== true) {
                    resolver(elements);
                }

                /****************************
                 Option: Loop (Infinite)
                 ****************************/

                if (Data(element) && opts.loop === true && !isStopped) {
                    /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
                     continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
                    $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
                        if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
                            tweenContainer.endValue = 0;
                            tweenContainer.startValue = 360;
                        }

                        if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
                            tweenContainer.endValue = 0;
                            tweenContainer.startValue = 100;
                        }
                    });

                    Velocity(element, "reverse", { loop: true, delay: opts.delay });
                }

                /***************
                 Dequeueing
                 ***************/

                /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
                 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
                 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
                if (opts.queue !== false) {
                    $.dequeue(element, opts.queue);
                }
            }

            /************************
             Calls Array Cleanup
             ************************/

            /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
             (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
            Velocity.State.calls[callIndex] = false;

            /* Iterate through the calls array to determine if this was the final in-progress animation.
             If so, set a flag to end ticking and clear the calls array. */
            for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
                if (Velocity.State.calls[j] !== false) {
                    remainingCallsExist = true;

                    break;
                }
            }

            if (remainingCallsExist === false) {
                /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
                Velocity.State.isTicking = false;

                /* Clear the calls array so that its length is reset. */
                delete Velocity.State.calls;
                Velocity.State.calls = [];
            }
        }

        /******************
         Frameworks
         ******************/

        /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
         If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
         also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
         accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
         (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
        global.Velocity = Velocity;

        if (global !== window) {
            /* Assign the element function to Velocity's core animate() method. */
            global.fn.velocity = animate;
            /* Assign the object function's defaults to Velocity's global defaults object. */
            global.fn.velocity.defaults = Velocity.defaults;
        }

        /***********************
         Packaged Redirects
         ***********************/

        /* slideUp, slideDown */
        $.each([ "Down", "Up" ], function(i, direction) {
            Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
                var opts = $.extend({}, options),
                    begin = opts.begin,
                    complete = opts.complete,
                    computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                    inlineValues = {};

                if (opts.display === undefined) {
                    /* Show the element before slideDown begins and hide the element after slideUp completes. */
                    /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
                    opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
                }

                opts.begin = function() {
                    /* If the user passed in a begin callback, fire it now. */
                    begin && begin.call(elements, elements);

                    /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
                    for (var property in computedValues) {
                        inlineValues[property] = element.style[property];

                        /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
                         use forcefeeding to start from computed values and animate down to 0. */
                        var propertyValue = Velocity.CSS.getPropertyValue(element, property);
                        computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
                    }

                    /* Force vertical overflow content to clip so that sliding works as expected. */
                    inlineValues.overflow = element.style.overflow;
                    element.style.overflow = "hidden";
                }

                opts.complete = function() {
                    /* Reset element to its pre-slide inline values once its slide animation is complete. */
                    for (var property in inlineValues) {
                        element.style[property] = inlineValues[property];
                    }

                    /* If the user passed in a complete callback, fire it now. */
                    complete && complete.call(elements, elements);
                    promiseData && promiseData.resolver(elements);
                };

                Velocity(element, computedValues, opts);
            };
        });

        /* fadeIn, fadeOut */
        $.each([ "In", "Out" ], function(i, direction) {
            Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
                var opts = $.extend({}, options),
                    propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
                    originalComplete = opts.complete;

                /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
                 callbacks by firing them only when the final element has been reached. */
                if (elementsIndex !== elementsSize - 1) {
                    opts.complete = opts.begin = null;
                } else {
                    opts.complete = function() {
                        if (originalComplete) {
                            originalComplete.call(elements, elements);
                        }

                        promiseData && promiseData.resolver(elements);
                    }
                }

                /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
                /* Note: We allow users to pass in "null" to skip display setting altogether. */
                if (opts.display === undefined) {
                    opts.display = (direction === "In" ? "auto" : "none");
                }

                Velocity(this, propertiesMap, opts);
            };
        });

        return Velocity;
    }((window.jQuery || window.Zepto || window), window, document);
}));

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 =
        (function () {
            // Restore the Select2 AMD loader so it can be used
            // Needed mostly in the language files, where the loader is not inserted
            if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
                var S2 = jQuery.fn.select2.amd;
            }
            var S2;(function () { if (!S2 || !S2.requirejs) {
                if (!S2) { S2 = {}; } else { require = S2; }
                /**
                 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
                 * Available via the MIT or new BSD license.
                 * see: http://github.com/jrburke/almond for details
                 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
                /*jslint sloppy: true */
                /*global setTimeout: false */

                var requirejs, require, define;
                (function (undef) {
                    var main, req, makeMap, handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;

                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }

                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
                            foundI, foundStarMap, starI, i, j, part,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map['*']) || {};

                        //Adjust any relative paths.
                        if (name && name.charAt(0) === ".") {
                            //If have a base name, try to normalize against it,
                            //otherwise, assume it is a top-level require that will
                            //be relative to baseUrl in the end.
                            if (baseName) {
                                name = name.split('/');
                                lastIndex = name.length - 1;

                                // Node .js allowance:
                                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                                }

                                //Lop off the last part of baseParts, so that . matches the
                                //"directory" and not name of the baseName's module. For instance,
                                //baseName of "one/two/three", maps to "one/two/three.js", but we
                                //want the directory, "one/two" for this normalization.
                                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                                //start trimDots
                                for (i = 0; i < name.length; i += 1) {
                                    part = name[i];
                                    if (part === ".") {
                                        name.splice(i, 1);
                                        i -= 1;
                                    } else if (part === "..") {
                                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                                            //End of the line. Keep at least one non-dot
                                            //path segment at the front so it can be mapped
                                            //correctly to disk. Otherwise, there is likely
                                            //no path mapping for a path starting with '..'.
                                            //This can still fail, but catches the most reasonable
                                            //uses of ..
                                            break;
                                        } else if (i > 0) {
                                            name.splice(i - 1, 2);
                                            i -= 2;
                                        }
                                    }
                                }
                                //end trimDots

                                name = name.join("/");
                            } else if (name.indexOf('./') === 0) {
                                // No baseName, so this is ID is resolved relative
                                // to baseUrl, pull off the leading dot.
                                name = name.substring(2);
                            }
                        }

                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split('/');

                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");

                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue = map[baseParts.slice(0, j).join('/')];

                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }

                                if (foundMap) {
                                    break;
                                }

                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (!foundStarMap && starMap && starMap[nameSegment]) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }

                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }

                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join('/');
                            }
                        }

                        return name;
                    }

                    function makeRequire(relName, forceSync) {
                        return function () {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            var args = aps.call(arguments, 0);

                            //If first arg is not require('string'), and there is only
                            //one arg, it is the array form without a callback. Insert
                            //a null so that the following concat is correct.
                            if (typeof args[0] !== 'string' && args.length === 1) {
                                args.push(null);
                            }
                            return req.apply(undef, args.concat([relName, forceSync]));
                        };
                    }

                    function makeNormalize(relName) {
                        return function (name) {
                            return normalize(name, relName);
                        };
                    }

                    function makeLoad(depName) {
                        return function (value) {
                            defined[depName] = value;
                        };
                    }

                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }

                        if (!hasProp(defined, name) && !hasProp(defining, name)) {
                            throw new Error('No ' + name);
                        }
                        return defined[name];
                    }

                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf('!') : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }

                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function (name, relName) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0];

                        name = parts[1];

                        if (prefix) {
                            prefix = normalize(prefix, relName);
                            plugin = callDep(prefix);
                        }

                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(name, makeNormalize(relName));
                            } else {
                                name = normalize(name, relName);
                            }
                        } else {
                            name = normalize(name, relName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }

                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + '!' + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };

                    function makeConfig(name) {
                        return function () {
                            return (config && config.config && config.config[name]) || {};
                        };
                    }

                    handlers = {
                        require: function (name) {
                            return makeRequire(name);
                        },
                        exports: function (name) {
                            var e = defined[name];
                            if (typeof e !== 'undefined') {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function (name) {
                            return {
                                id: name,
                                uri: '',
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };

                    main = function (name, deps, callback, relName) {
                        var cjsModule, depName, ret, map, i,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;

                        //Use name if no relName
                        relName = relName || name;

                        //Call the callback to define the module, if necessary.
                        if (callbackType === 'undefined' || callbackType === 'function') {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relName);
                                depName = map.f;

                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (hasProp(defined, depName) ||
                                    hasProp(waiting, depName) ||
                                    hasProp(defining, depName)) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(name + ' missing ' + depName);
                                }
                            }

                            ret = callback ? callback.apply(defined[name], args) : undefined;

                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (cjsModule && cjsModule.exports !== undef &&
                                    cjsModule.exports !== defined[name]) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };

                    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(makeMap(deps, callback).f);
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }

                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }

                        //Support require(['a'])
                        callback = callback || function () {};

                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === 'function') {
                            relName = forceSync;
                            forceSync = alt;
                        }

                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function () {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }

                        return req;
                    };

                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function (cfg) {
                        return req(cfg);
                    };

                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;

                    define = function (name, deps, callback) {
                        if (typeof name !== 'string') {
                            throw new Error('See almond README: incorrect module build, no module name');
                        }

                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }

                        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                            waiting[name] = [name, deps, callback];
                        }
                    };

                    define.amd = {
                        jQuery: true
                    };
                }());

                S2.requirejs = requirejs;S2.require = require;S2.define = define;
            }
            }());
            S2.define("almond", function(){});

            /* global jQuery:false, $:false */
            S2.define('jquery',[],function () {
                var _$ = jQuery || $;

                if (_$ == null && console && console.error) {
                    console.error(
                        'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
                        'found. Make sure that you are including jQuery before Select2 on your ' +
                        'web page.'
                    );
                }

                return _$;
            });

            S2.define('select2/utils',[
                'jquery'
            ], function ($) {
                var Utils = {};

                Utils.Extend = function (ChildClass, SuperClass) {
                    var __hasProp = {}.hasOwnProperty;

                    function BaseConstructor () {
                        this.constructor = ChildClass;
                    }

                    for (var key in SuperClass) {
                        if (__hasProp.call(SuperClass, key)) {
                            ChildClass[key] = SuperClass[key];
                        }
                    }

                    BaseConstructor.prototype = SuperClass.prototype;
                    ChildClass.prototype = new BaseConstructor();
                    ChildClass.__super__ = SuperClass.prototype;

                    return ChildClass;
                };

                function getMethods (theClass) {
                    var proto = theClass.prototype;

                    var methods = [];

                    for (var methodName in proto) {
                        var m = proto[methodName];

                        if (typeof m !== 'function') {
                            continue;
                        }

                        if (methodName === 'constructor') {
                            continue;
                        }

                        methods.push(methodName);
                    }

                    return methods;
                }

                Utils.Decorate = function (SuperClass, DecoratorClass) {
                    var decoratedMethods = getMethods(DecoratorClass);
                    var superMethods = getMethods(SuperClass);

                    function DecoratedClass () {
                        var unshift = Array.prototype.unshift;

                        var argCount = DecoratorClass.prototype.constructor.length;

                        var calledConstructor = SuperClass.prototype.constructor;

                        if (argCount > 0) {
                            unshift.call(arguments, SuperClass.prototype.constructor);

                            calledConstructor = DecoratorClass.prototype.constructor;
                        }

                        calledConstructor.apply(this, arguments);
                    }

                    DecoratorClass.displayName = SuperClass.displayName;

                    function ctr () {
                        this.constructor = DecoratedClass;
                    }

                    DecoratedClass.prototype = new ctr();

                    for (var m = 0; m < superMethods.length; m++) {
                        var superMethod = superMethods[m];

                        DecoratedClass.prototype[superMethod] =
                            SuperClass.prototype[superMethod];
                    }

                    var calledMethod = function (methodName) {
                        // Stub out the original method if it's not decorating an actual method
                        var originalMethod = function () {};

                        if (methodName in DecoratedClass.prototype) {
                            originalMethod = DecoratedClass.prototype[methodName];
                        }

                        var decoratedMethod = DecoratorClass.prototype[methodName];

                        return function () {
                            var unshift = Array.prototype.unshift;

                            unshift.call(arguments, originalMethod);

                            return decoratedMethod.apply(this, arguments);
                        };
                    };

                    for (var d = 0; d < decoratedMethods.length; d++) {
                        var decoratedMethod = decoratedMethods[d];

                        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                    }

                    return DecoratedClass;
                };

                var Observable = function () {
                    this.listeners = {};
                };

                Observable.prototype.on = function (event, callback) {
                    this.listeners = this.listeners || {};

                    if (event in this.listeners) {
                        this.listeners[event].push(callback);
                    } else {
                        this.listeners[event] = [callback];
                    }
                };

                Observable.prototype.trigger = function (event) {
                    var slice = Array.prototype.slice;
                    var params = slice.call(arguments, 1);

                    this.listeners = this.listeners || {};

                    // Params should always come in as an array
                    if (params == null) {
                        params = [];
                    }

                    // If there are no arguments to the event, use a temporary object
                    if (params.length === 0) {
                        params.push({});
                    }

                    // Set the `_type` of the first object to the event
                    params[0]._type = event;

                    if (event in this.listeners) {
                        this.invoke(this.listeners[event], slice.call(arguments, 1));
                    }

                    if ('*' in this.listeners) {
                        this.invoke(this.listeners['*'], arguments);
                    }
                };

                Observable.prototype.invoke = function (listeners, params) {
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].apply(this, params);
                    }
                };

                Utils.Observable = Observable;

                Utils.generateChars = function (length) {
                    var chars = '';

                    for (var i = 0; i < length; i++) {
                        var randomChar = Math.floor(Math.random() * 36);
                        chars += randomChar.toString(36);
                    }

                    return chars;
                };

                Utils.bind = function (func, context) {
                    return function () {
                        func.apply(context, arguments);
                    };
                };

                Utils._convertData = function (data) {
                    for (var originalKey in data) {
                        var keys = originalKey.split('-');

                        var dataLevel = data;

                        if (keys.length === 1) {
                            continue;
                        }

                        for (var k = 0; k < keys.length; k++) {
                            var key = keys[k];

                            // Lowercase the first letter
                            // By default, dash-separated becomes camelCase
                            key = key.substring(0, 1).toLowerCase() + key.substring(1);

                            if (!(key in dataLevel)) {
                                dataLevel[key] = {};
                            }

                            if (k == keys.length - 1) {
                                dataLevel[key] = data[originalKey];
                            }

                            dataLevel = dataLevel[key];
                        }

                        delete data[originalKey];
                    }

                    return data;
                };

                Utils.hasScroll = function (index, el) {
                    // Adapted from the function created by @ShadowScripter
                    // and adapted by @BillBarry on the Stack Exchange Code Review website.
                    // The original code can be found at
                    // http://codereview.stackexchange.com/q/13338
                    // and was designed to be used with the Sizzle selector engine.

                    var $el = $(el);
                    var overflowX = el.style.overflowX;
                    var overflowY = el.style.overflowY;

                    //Check both x and y declarations
                    if (overflowX === overflowY &&
                        (overflowY === 'hidden' || overflowY === 'visible')) {
                        return false;
                    }

                    if (overflowX === 'scroll' || overflowY === 'scroll') {
                        return true;
                    }

                    return ($el.innerHeight() < el.scrollHeight ||
                    $el.innerWidth() < el.scrollWidth);
                };

                Utils.escapeMarkup = function (markup) {
                    var replaceMap = {
                        '\\': '&#92;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        '\'': '&#39;',
                        '/': '&#47;'
                    };

                    // Do not try to escape the markup if it's not a string
                    if (typeof markup !== 'string') {
                        return markup;
                    }

                    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                        return replaceMap[match];
                    });
                };

                // Append an array of jQuery nodes to a given element.
                Utils.appendMany = function ($element, $nodes) {
                    // jQuery 1.7.x does not support $.fn.append() with an array
                    // Fall back to a jQuery object collection using $.fn.add()
                    if ($.fn.jquery.substr(0, 3) === '1.7') {
                        var $jqNodes = $();

                        $.map($nodes, function (node) {
                            $jqNodes = $jqNodes.add(node);
                        });

                        $nodes = $jqNodes;
                    }

                    $element.append($nodes);
                };

                return Utils;
            });

            S2.define('select2/results',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Results ($element, options, dataAdapter) {
                    this.$element = $element;
                    this.data = dataAdapter;
                    this.options = options;

                    Results.__super__.constructor.call(this);
                }

                Utils.Extend(Results, Utils.Observable);

                Results.prototype.render = function () {
                    var $results = $(
                        '<ul class="select2-results__options" role="tree"></ul>'
                    );

                    if (this.options.get('multiple')) {
                        $results.attr('aria-multiselectable', 'true');
                    }

                    this.$results = $results;

                    return $results;
                };

                Results.prototype.clear = function () {
                    this.$results.empty();
                };

                Results.prototype.displayMessage = function (params) {
                    var escapeMarkup = this.options.get('escapeMarkup');

                    this.clear();
                    this.hideLoading();

                    var $message = $(
                        '<li role="treeitem" aria-live="assertive"' +
                        ' class="select2-results__option"></li>'
                    );

                    var message = this.options.get('translations').get(params.message);

                    $message.append(
                        escapeMarkup(
                            message(params.args)
                        )
                    );

                    $message[0].className += ' select2-results__message';

                    this.$results.append($message);
                };

                Results.prototype.hideMessages = function () {
                    this.$results.find('.select2-results__message').remove();
                };

                Results.prototype.append = function (data) {
                    this.hideLoading();

                    var $options = [];

                    if (data.results == null || data.results.length === 0) {
                        if (this.$results.children().length === 0) {
                            this.trigger('results:message', {
                                message: 'noResults'
                            });
                        }

                        return;
                    }

                    data.results = this.sort(data.results);

                    for (var d = 0; d < data.results.length; d++) {
                        var item = data.results[d];

                        var $option = this.option(item);

                        $options.push($option);
                    }

                    this.$results.append($options);
                };

                Results.prototype.position = function ($results, $dropdown) {
                    var $resultsContainer = $dropdown.find('.select2-results');
                    $resultsContainer.append($results);
                };

                Results.prototype.sort = function (data) {
                    var sorter = this.options.get('sorter');

                    return sorter(data);
                };

                Results.prototype.highlightFirstItem = function () {
                    var $options = this.$results
                        .find('.select2-results__option[aria-selected]');

                    var $selected = $options.filter('[aria-selected=true]');

                    // Check if there are any selected options
                    if ($selected.length > 0) {
                        // If there are selected options, highlight the first
                        $selected.first().trigger('mouseenter');
                    } else {
                        // If there are no selected options, highlight the first option
                        // in the dropdown
                        $options.first().trigger('mouseenter');
                    }

                    this.ensureHighlightVisible();
                };

                Results.prototype.setClasses = function () {
                    var self = this;

                    this.data.current(function (selected) {
                        var selectedIds = $.map(selected, function (s) {
                            return s.id.toString();
                        });

                        var $options = self.$results
                            .find('.select2-results__option[aria-selected]');

                        $options.each(function () {
                            var $option = $(this);

                            var item = $.data(this, 'data');

                            // id needs to be converted to a string when comparing
                            var id = '' + item.id;

                            if ((item.element != null && item.element.selected) ||
                                (item.element == null && $.inArray(id, selectedIds) > -1)) {
                                $option.attr('aria-selected', 'true');
                            } else {
                                $option.attr('aria-selected', 'false');
                            }
                        });

                    });
                };

                Results.prototype.showLoading = function (params) {
                    this.hideLoading();

                    var loadingMore = this.options.get('translations').get('searching');

                    var loading = {
                        disabled: true,
                        loading: true,
                        text: loadingMore(params)
                    };
                    var $loading = this.option(loading);
                    $loading.className += ' loading-results';

                    this.$results.prepend($loading);
                };

                Results.prototype.hideLoading = function () {
                    this.$results.find('.loading-results').remove();
                };

                Results.prototype.option = function (data) {
                    var option = document.createElement('li');
                    option.className = 'select2-results__option';

                    var attrs = {
                        'role': 'treeitem',
                        'aria-selected': 'false'
                    };

                    if (data.disabled) {
                        delete attrs['aria-selected'];
                        attrs['aria-disabled'] = 'true';
                    }

                    if (data.id == null) {
                        delete attrs['aria-selected'];
                    }

                    if (data._resultId != null) {
                        option.id = data._resultId;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    if (data.children) {
                        attrs.role = 'group';
                        attrs['aria-label'] = data.text;
                        delete attrs['aria-selected'];
                    }

                    for (var attr in attrs) {
                        var val = attrs[attr];

                        option.setAttribute(attr, val);
                    }

                    if (data.children) {
                        var $option = $(option);

                        var label = document.createElement('strong');
                        label.className = 'select2-results__group';

                        var $label = $(label);
                        this.template(data, label);

                        var $children = [];

                        for (var c = 0; c < data.children.length; c++) {
                            var child = data.children[c];

                            var $child = this.option(child);

                            $children.push($child);
                        }

                        var $childrenContainer = $('<ul></ul>', {
                            'class': 'select2-results__options select2-results__options--nested'
                        });

                        $childrenContainer.append($children);

                        $option.append(label);
                        $option.append($childrenContainer);
                    } else {
                        this.template(data, option);
                    }

                    $.data(option, 'data', data);

                    return option;
                };

                Results.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-results';

                    this.$results.attr('id', id);

                    container.on('results:all', function (params) {
                        self.clear();
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                            self.highlightFirstItem();
                        }
                    });

                    container.on('results:append', function (params) {
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                        }
                    });

                    container.on('query', function (params) {
                        self.hideMessages();
                        self.showLoading(params);
                    });

                    container.on('select', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                        self.highlightFirstItem();
                    });

                    container.on('unselect', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                        self.highlightFirstItem();
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expended="true"
                        self.$results.attr('aria-expanded', 'true');
                        self.$results.attr('aria-hidden', 'false');

                        self.setClasses();
                        self.ensureHighlightVisible();
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expended="false"
                        self.$results.attr('aria-expanded', 'false');
                        self.$results.attr('aria-hidden', 'true');
                        self.$results.removeAttr('aria-activedescendant');
                    });

                    container.on('results:toggle', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        $highlighted.trigger('mouseup');
                    });

                    container.on('results:select', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        var data = $highlighted.data('data');

                        if ($highlighted.attr('aria-selected') == 'true') {
                            self.trigger('close', {});
                        } else {
                            self.trigger('select', {
                                data: data
                            });
                        }
                    });

                    container.on('results:previous', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        // If we are already at te top, don't move further
                        if (currentIndex === 0) {
                            return;
                        }

                        var nextIndex = currentIndex - 1;

                        // If none are highlighted, highlight the first
                        if ($highlighted.length === 0) {
                            nextIndex = 0;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top;
                        var nextTop = $next.offset().top;
                        var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextTop - currentOffset < 0) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:next', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        var nextIndex = currentIndex + 1;

                        // If we are at the last option, stay there
                        if (nextIndex >= $options.length) {
                            return;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var nextBottom = $next.offset().top + $next.outerHeight(false);
                        var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextBottom > currentOffset) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:focus', function (params) {
                        params.element.addClass('select2-results__option--highlighted');
                    });

                    container.on('results:message', function (params) {
                        self.displayMessage(params);
                    });

                    if ($.fn.mousewheel) {
                        this.$results.on('mousewheel', function (e) {
                            var top = self.$results.scrollTop();

                            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

                            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

                            if (isAtTop) {
                                self.$results.scrollTop(0);

                                e.preventDefault();
                                e.stopPropagation();
                            } else if (isAtBottom) {
                                self.$results.scrollTop(
                                    self.$results.get(0).scrollHeight - self.$results.height()
                                );

                                e.preventDefault();
                                e.stopPropagation();
                            }
                        });
                    }

                    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var $this = $(this);

                            var data = $this.data('data');

                            if ($this.attr('aria-selected') === 'true') {
                                if (self.options.get('multiple')) {
                                    self.trigger('unselect', {
                                        originalEvent: evt,
                                        data: data
                                    });
                                } else {
                                    self.trigger('close', {});
                                }

                                return;
                            }

                            self.trigger('select', {
                                originalEvent: evt,
                                data: data
                            });
                        });

                    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var data = $(this).data('data');

                            self.getHighlightedResults()
                                .removeClass('select2-results__option--highlighted');

                            self.trigger('results:focus', {
                                data: data,
                                element: $(this)
                            });
                        });
                };

                Results.prototype.getHighlightedResults = function () {
                    var $highlighted = this.$results
                        .find('.select2-results__option--highlighted');

                    return $highlighted;
                };

                Results.prototype.destroy = function () {
                    this.$results.remove();
                };

                Results.prototype.ensureHighlightVisible = function () {
                    var $highlighted = this.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    var $options = this.$results.find('[aria-selected]');

                    var currentIndex = $options.index($highlighted);

                    var currentOffset = this.$results.offset().top;
                    var nextTop = $highlighted.offset().top;
                    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

                    var offsetDelta = nextTop - currentOffset;
                    nextOffset -= $highlighted.outerHeight(false) * 2;

                    if (currentIndex <= 2) {
                        this.$results.scrollTop(0);
                    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
                        this.$results.scrollTop(nextOffset);
                    }
                };

                Results.prototype.template = function (result, container) {
                    var template = this.options.get('templateResult');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    var content = template(result, container);

                    if (content == null) {
                        container.style.display = 'none';
                    } else if (typeof content === 'string') {
                        container.innerHTML = escapeMarkup(content);
                    } else {
                        $(container).append(content);
                    }
                };

                return Results;
            });

            S2.define('select2/keys',[

            ], function () {
                var KEYS = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };

                return KEYS;
            });

            S2.define('select2/selection/base',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function BaseSelection ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    BaseSelection.__super__.constructor.call(this);
                }

                Utils.Extend(BaseSelection, Utils.Observable);

                BaseSelection.prototype.render = function () {
                    var $selection = $(
                        '<span class="select2-selection" role="combobox" ' +
                        ' aria-haspopup="true" aria-expanded="false">' +
                        '</span>'
                    );

                    this._tabindex = 0;

                    if (this.$element.data('old-tabindex') != null) {
                        this._tabindex = this.$element.data('old-tabindex');
                    } else if (this.$element.attr('tabindex') != null) {
                        this._tabindex = this.$element.attr('tabindex');
                    }

                    $selection.attr('title', this.$element.attr('title'));
                    $selection.attr('tabindex', this._tabindex);

                    this.$selection = $selection;

                    return $selection;
                };

                BaseSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-container';
                    var resultsId = container.id + '-results';

                    this.container = container;

                    this.$selection.on('focus', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('blur', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        if (evt.which === KEYS.SPACE) {
                            evt.preventDefault();
                        }
                    });

                    container.on('results:focus', function (params) {
                        self.$selection.attr('aria-activedescendant', params.data._resultId);
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expanded="true"
                        self.$selection.attr('aria-expanded', 'true');
                        self.$selection.attr('aria-owns', resultsId);

                        self._attachCloseHandler(container);
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expanded="false"
                        self.$selection.attr('aria-expanded', 'false');
                        self.$selection.removeAttr('aria-activedescendant');
                        self.$selection.removeAttr('aria-owns');

                        self.$selection.focus();

                        self._detachCloseHandler(container);
                    });

                    container.on('enable', function () {
                        self.$selection.attr('tabindex', self._tabindex);
                    });

                    container.on('disable', function () {
                        self.$selection.attr('tabindex', '-1');
                    });
                };

                BaseSelection.prototype._handleBlur = function (evt) {
                    var self = this;

                    // This needs to be delayed as the active element is the body when the tab
                    // key is pressed, possibly along with others.
                    window.setTimeout(function () {
                        // Don't trigger `blur` if the focus is still in the selection
                        if (
                            (document.activeElement == self.$selection[0]) ||
                            ($.contains(self.$selection[0], document.activeElement))
                        ) {
                            return;
                        }

                        self.trigger('blur', evt);
                    }, 1);
                };

                BaseSelection.prototype._attachCloseHandler = function (container) {
                    var self = this;

                    $(document.body).on('mousedown.select2.' + container.id, function (e) {
                        var $target = $(e.target);

                        var $select = $target.closest('.select2');

                        var $all = $('.select2.select2-container--open');

                        $all.each(function () {
                            var $this = $(this);

                            if (this == $select[0]) {
                                return;
                            }

                            var $element = $this.data('element');

                            $element.select2('close');
                        });
                    });
                };

                BaseSelection.prototype._detachCloseHandler = function (container) {
                    $(document.body).off('mousedown.select2.' + container.id);
                };

                BaseSelection.prototype.position = function ($selection, $container) {
                    var $selectionContainer = $container.find('.selection');
                    $selectionContainer.append($selection);
                };

                BaseSelection.prototype.destroy = function () {
                    this._detachCloseHandler(this.container);
                };

                BaseSelection.prototype.update = function (data) {
                    throw new Error('The `update` method must be defined in child classes.');
                };

                return BaseSelection;
            });

            S2.define('select2/selection/single',[
                'jquery',
                './base',
                '../utils',
                '../keys'
            ], function ($, BaseSelection, Utils, KEYS) {
                function SingleSelection () {
                    SingleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(SingleSelection, BaseSelection);

                SingleSelection.prototype.render = function () {
                    var $selection = SingleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--single');

                    $selection.html(
                        '<span class="select2-selection__rendered"></span>' +
                        '<span class="select2-selection__arrow" role="presentation">' +
                        '<b role="presentation"></b>' +
                        '</span>'
                    );

                    return $selection;
                };

                SingleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    SingleSelection.__super__.bind.apply(this, arguments);

                    var id = container.id + '-container';

                    this.$selection.find('.select2-selection__rendered').attr('id', id);
                    this.$selection.attr('aria-labelledby', id);

                    this.$selection.on('mousedown', function (evt) {
                        // Only respond to left clicks
                        if (evt.which !== 1) {
                            return;
                        }

                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on('focus', function (evt) {
                        // User focuses on the container
                    });

                    this.$selection.on('blur', function (evt) {
                        // User exits the container
                    });

                    container.on('focus', function (evt) {
                        if (!container.isOpen()) {
                            self.$selection.focus();
                        }
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });
                };

                SingleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                SingleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                SingleSelection.prototype.selectionContainer = function () {
                    return $('<span></span>');
                };

                SingleSelection.prototype.update = function (data) {
                    if (data.length === 0) {
                        this.clear();
                        return;
                    }

                    var selection = data[0];

                    var $rendered = this.$selection.find('.select2-selection__rendered');
                    var formatted = this.display(selection, $rendered);

                    $rendered.empty().append(formatted);
                    $rendered.prop('title', selection.title || selection.text);
                };

                return SingleSelection;
            });

            S2.define('select2/selection/multiple',[
                'jquery',
                './base',
                '../utils'
            ], function ($, BaseSelection, Utils) {
                function MultipleSelection ($element, options) {
                    MultipleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(MultipleSelection, BaseSelection);

                MultipleSelection.prototype.render = function () {
                    var $selection = MultipleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--multiple');

                    $selection.html(
                        '<ul class="select2-selection__rendered"></ul>'
                    );

                    return $selection;
                };

                MultipleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    MultipleSelection.__super__.bind.apply(this, arguments);

                    this.$selection.on('click', function (evt) {
                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on(
                        'click',
                        '.select2-selection__choice__remove',
                        function (evt) {
                            // Ignore the event if it is disabled
                            if (self.options.get('disabled')) {
                                return;
                            }

                            var $remove = $(this);
                            var $selection = $remove.parent();

                            var data = $selection.data('data');

                            self.trigger('unselect', {
                                originalEvent: evt,
                                data: data
                            });
                        }
                    );
                };

                MultipleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                MultipleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                MultipleSelection.prototype.selectionContainer = function () {
                    var $container = $(
                        '<li class="select2-selection__choice">' +
                        '<span class="select2-selection__choice__remove" role="presentation">' +
                        '&times;' +
                        '</span>' +
                        '</li>'
                    );

                    return $container;
                };

                MultipleSelection.prototype.update = function (data) {
                    this.clear();

                    if (data.length === 0) {
                        return;
                    }

                    var $selections = [];

                    for (var d = 0; d < data.length; d++) {
                        var selection = data[d];

                        var $selection = this.selectionContainer();
                        var formatted = this.display(selection, $selection);

                        $selection.append(formatted);
                        $selection.prop('title', selection.title || selection.text);

                        $selection.data('data', selection);

                        $selections.push($selection);
                    }

                    var $rendered = this.$selection.find('.select2-selection__rendered');

                    Utils.appendMany($rendered, $selections);
                };

                return MultipleSelection;
            });

            S2.define('select2/selection/placeholder',[
                '../utils'
            ], function (Utils) {
                function Placeholder (decorated, $element, options) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options);
                }

                Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
                    var $placeholder = this.selectionContainer();

                    $placeholder.html(this.display(placeholder));
                    $placeholder.addClass('select2-selection__placeholder')
                        .removeClass('select2-selection__choice');

                    return $placeholder;
                };

                Placeholder.prototype.update = function (decorated, data) {
                    var singlePlaceholder = (
                        data.length == 1 && data[0].id != this.placeholder.id
                    );
                    var multipleSelections = data.length > 1;

                    if (multipleSelections || singlePlaceholder) {
                        return decorated.call(this, data);
                    }

                    this.clear();

                    var $placeholder = this.createPlaceholder(this.placeholder);

                    this.$selection.find('.select2-selection__rendered').append($placeholder);
                };

                return Placeholder;
            });

            S2.define('select2/selection/allowClear',[
                'jquery',
                '../keys'
            ], function ($, KEYS) {
                function AllowClear () { }

                AllowClear.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    if (this.placeholder == null) {
                        if (this.options.get('debug') && window.console && console.error) {
                            console.error(
                                'Select2: The `allowClear` option should be used in combination ' +
                                'with the `placeholder` option.'
                            );
                        }
                    }

                    this.$selection.on('mousedown', '.select2-selection__clear',
                        function (evt) {
                            self._handleClear(evt);
                        });

                    container.on('keypress', function (evt) {
                        self._handleKeyboardClear(evt, container);
                    });
                };

                AllowClear.prototype._handleClear = function (_, evt) {
                    // Ignore the event if it is disabled
                    if (this.options.get('disabled')) {
                        return;
                    }

                    var $clear = this.$selection.find('.select2-selection__clear');

                    // Ignore the event if nothing has been selected
                    if ($clear.length === 0) {
                        return;
                    }

                    evt.stopPropagation();

                    var data = $clear.data('data');

                    for (var d = 0; d < data.length; d++) {
                        var unselectData = {
                            data: data[d]
                        };

                        // Trigger the `unselect` event, so people can prevent it from being
                        // cleared.
                        this.trigger('unselect', unselectData);

                        // If the event was prevented, don't clear it out.
                        if (unselectData.prevented) {
                            return;
                        }
                    }

                    this.$element.val(this.placeholder.id).trigger('change');

                    this.trigger('toggle', {});
                };

                AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
                    if (container.isOpen()) {
                        return;
                    }

                    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
                        this._handleClear(evt);
                    }
                };

                AllowClear.prototype.update = function (decorated, data) {
                    decorated.call(this, data);

                    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
                        data.length === 0) {
                        return;
                    }

                    var $remove = $(
                        '<span class="select2-selection__clear">' +
                        '&times;' +
                        '</span>'
                    );
                    $remove.data('data', data);

                    this.$selection.find('.select2-selection__rendered').prepend($remove);
                };

                return AllowClear;
            });

            S2.define('select2/selection/search',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function Search (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                Search.prototype.render = function (decorated) {
                    var $search = $(
                        '<li class="select2-search select2-search--inline">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
                        '</li>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    var $rendered = decorated.call(this);

                    this._transferTabIndex();

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self.$search.trigger('focus');
                    });

                    container.on('close', function () {
                        self.$search.val('');
                        self.$search.removeAttr('aria-activedescendant');
                        self.$search.trigger('focus');
                    });

                    container.on('enable', function () {
                        self.$search.prop('disabled', false);

                        self._transferTabIndex();
                    });

                    container.on('disable', function () {
                        self.$search.prop('disabled', true);
                    });

                    container.on('focus', function (evt) {
                        self.$search.trigger('focus');
                    });

                    container.on('results:focus', function (params) {
                        self.$search.attr('aria-activedescendant', params.id);
                    });

                    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
                        evt.stopPropagation();

                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();

                        var key = evt.which;

                        if (key === KEYS.BACKSPACE && self.$search.val() === '') {
                            var $previousChoice = self.$searchContainer
                                .prev('.select2-selection__choice');

                            if ($previousChoice.length > 0) {
                                var item = $previousChoice.data('data');

                                self.searchRemoveChoice(item);

                                evt.preventDefault();
                            }
                        }
                    });

                    // Try to detect the IE version should the `documentMode` property that
                    // is stored on the document. This is only implemented in IE and is
                    // slightly cleaner than doing a user agent check.
                    // This property is not available in Edge, but Edge also doesn't have
                    // this bug.
                    var msie = document.documentMode;
                    var disableInputEvents = msie && msie <= 11;

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$selection.on(
                        'input.searchcheck',
                        '.select2-search--inline',
                        function (evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents) {
                                self.$selection.off('input.search input.searchcheck');
                                return;
                            }

                            // Unbind the duplicated `keyup` event
                            self.$selection.off('keyup.search');
                        }
                    );

                    this.$selection.on(
                        'keyup.search input.search',
                        '.select2-search--inline',
                        function (evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents && evt.type === 'input') {
                                self.$selection.off('input.search input.searchcheck');
                                return;
                            }

                            var key = evt.which;

                            // We can freely ignore events from modifier keys
                            if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
                                return;
                            }

                            // Tabbing will be handled during the `keydown` phase
                            if (key == KEYS.TAB) {
                                return;
                            }

                            self.handleSearch(evt);
                        }
                    );
                };

                /**
                 * This method will transfer the tabindex attribute from the rendered
                 * selection to the search box. This allows for the search box to be used as
                 * the primary focus instead of the selection container.
                 *
                 * @private
                 */
                Search.prototype._transferTabIndex = function (decorated) {
                    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
                    this.$selection.attr('tabindex', '-1');
                };

                Search.prototype.createPlaceholder = function (decorated, placeholder) {
                    this.$search.attr('placeholder', placeholder.text);
                };

                Search.prototype.update = function (decorated, data) {
                    var searchHadFocus = this.$search[0] == document.activeElement;

                    this.$search.attr('placeholder', '');

                    decorated.call(this, data);

                    this.$selection.find('.select2-selection__rendered')
                        .append(this.$searchContainer);

                    this.resizeSearch();
                    if (searchHadFocus) {
                        this.$search.focus();
                    }
                };

                Search.prototype.handleSearch = function () {
                    this.resizeSearch();

                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.searchRemoveChoice = function (decorated, item) {
                    this.trigger('unselect', {
                        data: item
                    });

                    this.$search.val(item.text);
                    this.handleSearch();
                };

                Search.prototype.resizeSearch = function () {
                    this.$search.css('width', '25px');

                    var width = '';

                    if (this.$search.attr('placeholder') !== '') {
                        width = this.$selection.find('.select2-selection__rendered').innerWidth();
                    } else {
                        var minimumWidth = this.$search.val().length + 1;

                        width = (minimumWidth * 0.75) + 'em';
                    }

                    this.$search.css('width', width);
                };

                return Search;
            });

            S2.define('select2/selection/eventRelay',[
                'jquery'
            ], function ($) {
                function EventRelay () { }

                EventRelay.prototype.bind = function (decorated, container, $container) {
                    var self = this;
                    var relayEvents = [
                        'open', 'opening',
                        'close', 'closing',
                        'select', 'selecting',
                        'unselect', 'unselecting'
                    ];

                    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

                    decorated.call(this, container, $container);

                    container.on('*', function (name, params) {
                        // Ignore events that should not be relayed
                        if ($.inArray(name, relayEvents) === -1) {
                            return;
                        }

                        // The parameters should always be an object
                        params = params || {};

                        // Generate the jQuery event for the Select2 event
                        var evt = $.Event('select2:' + name, {
                            params: params
                        });

                        self.$element.trigger(evt);

                        // Only handle preventable events if it was one
                        if ($.inArray(name, preventableEvents) === -1) {
                            return;
                        }

                        params.prevented = evt.isDefaultPrevented();
                    });
                };

                return EventRelay;
            });

            S2.define('select2/translation',[
                'jquery',
                'require'
            ], function ($, require) {
                function Translation (dict) {
                    this.dict = dict || {};
                }

                Translation.prototype.all = function () {
                    return this.dict;
                };

                Translation.prototype.get = function (key) {
                    return this.dict[key];
                };

                Translation.prototype.extend = function (translation) {
                    this.dict = $.extend({}, translation.all(), this.dict);
                };

                // Static functions

                Translation._cache = {};

                Translation.loadPath = function (path) {
                    if (!(path in Translation._cache)) {
                        var translations = require(path);

                        Translation._cache[path] = translations;
                    }

                    return new Translation(Translation._cache[path]);
                };

                return Translation;
            });

            S2.define('select2/diacritics',[

            ], function () {
                var diacritics = {
                    '\u24B6': 'A',
                    '\uFF21': 'A',
                    '\u00C0': 'A',
                    '\u00C1': 'A',
                    '\u00C2': 'A',
                    '\u1EA6': 'A',
                    '\u1EA4': 'A',
                    '\u1EAA': 'A',
                    '\u1EA8': 'A',
                    '\u00C3': 'A',
                    '\u0100': 'A',
                    '\u0102': 'A',
                    '\u1EB0': 'A',
                    '\u1EAE': 'A',
                    '\u1EB4': 'A',
                    '\u1EB2': 'A',
                    '\u0226': 'A',
                    '\u01E0': 'A',
                    '\u00C4': 'A',
                    '\u01DE': 'A',
                    '\u1EA2': 'A',
                    '\u00C5': 'A',
                    '\u01FA': 'A',
                    '\u01CD': 'A',
                    '\u0200': 'A',
                    '\u0202': 'A',
                    '\u1EA0': 'A',
                    '\u1EAC': 'A',
                    '\u1EB6': 'A',
                    '\u1E00': 'A',
                    '\u0104': 'A',
                    '\u023A': 'A',
                    '\u2C6F': 'A',
                    '\uA732': 'AA',
                    '\u00C6': 'AE',
                    '\u01FC': 'AE',
                    '\u01E2': 'AE',
                    '\uA734': 'AO',
                    '\uA736': 'AU',
                    '\uA738': 'AV',
                    '\uA73A': 'AV',
                    '\uA73C': 'AY',
                    '\u24B7': 'B',
                    '\uFF22': 'B',
                    '\u1E02': 'B',
                    '\u1E04': 'B',
                    '\u1E06': 'B',
                    '\u0243': 'B',
                    '\u0182': 'B',
                    '\u0181': 'B',
                    '\u24B8': 'C',
                    '\uFF23': 'C',
                    '\u0106': 'C',
                    '\u0108': 'C',
                    '\u010A': 'C',
                    '\u010C': 'C',
                    '\u00C7': 'C',
                    '\u1E08': 'C',
                    '\u0187': 'C',
                    '\u023B': 'C',
                    '\uA73E': 'C',
                    '\u24B9': 'D',
                    '\uFF24': 'D',
                    '\u1E0A': 'D',
                    '\u010E': 'D',
                    '\u1E0C': 'D',
                    '\u1E10': 'D',
                    '\u1E12': 'D',
                    '\u1E0E': 'D',
                    '\u0110': 'D',
                    '\u018B': 'D',
                    '\u018A': 'D',
                    '\u0189': 'D',
                    '\uA779': 'D',
                    '\u01F1': 'DZ',
                    '\u01C4': 'DZ',
                    '\u01F2': 'Dz',
                    '\u01C5': 'Dz',
                    '\u24BA': 'E',
                    '\uFF25': 'E',
                    '\u00C8': 'E',
                    '\u00C9': 'E',
                    '\u00CA': 'E',
                    '\u1EC0': 'E',
                    '\u1EBE': 'E',
                    '\u1EC4': 'E',
                    '\u1EC2': 'E',
                    '\u1EBC': 'E',
                    '\u0112': 'E',
                    '\u1E14': 'E',
                    '\u1E16': 'E',
                    '\u0114': 'E',
                    '\u0116': 'E',
                    '\u00CB': 'E',
                    '\u1EBA': 'E',
                    '\u011A': 'E',
                    '\u0204': 'E',
                    '\u0206': 'E',
                    '\u1EB8': 'E',
                    '\u1EC6': 'E',
                    '\u0228': 'E',
                    '\u1E1C': 'E',
                    '\u0118': 'E',
                    '\u1E18': 'E',
                    '\u1E1A': 'E',
                    '\u0190': 'E',
                    '\u018E': 'E',
                    '\u24BB': 'F',
                    '\uFF26': 'F',
                    '\u1E1E': 'F',
                    '\u0191': 'F',
                    '\uA77B': 'F',
                    '\u24BC': 'G',
                    '\uFF27': 'G',
                    '\u01F4': 'G',
                    '\u011C': 'G',
                    '\u1E20': 'G',
                    '\u011E': 'G',
                    '\u0120': 'G',
                    '\u01E6': 'G',
                    '\u0122': 'G',
                    '\u01E4': 'G',
                    '\u0193': 'G',
                    '\uA7A0': 'G',
                    '\uA77D': 'G',
                    '\uA77E': 'G',
                    '\u24BD': 'H',
                    '\uFF28': 'H',
                    '\u0124': 'H',
                    '\u1E22': 'H',
                    '\u1E26': 'H',
                    '\u021E': 'H',
                    '\u1E24': 'H',
                    '\u1E28': 'H',
                    '\u1E2A': 'H',
                    '\u0126': 'H',
                    '\u2C67': 'H',
                    '\u2C75': 'H',
                    '\uA78D': 'H',
                    '\u24BE': 'I',
                    '\uFF29': 'I',
                    '\u00CC': 'I',
                    '\u00CD': 'I',
                    '\u00CE': 'I',
                    '\u0128': 'I',
                    '\u012A': 'I',
                    '\u012C': 'I',
                    '\u0130': 'I',
                    '\u00CF': 'I',
                    '\u1E2E': 'I',
                    '\u1EC8': 'I',
                    '\u01CF': 'I',
                    '\u0208': 'I',
                    '\u020A': 'I',
                    '\u1ECA': 'I',
                    '\u012E': 'I',
                    '\u1E2C': 'I',
                    '\u0197': 'I',
                    '\u24BF': 'J',
                    '\uFF2A': 'J',
                    '\u0134': 'J',
                    '\u0248': 'J',
                    '\u24C0': 'K',
                    '\uFF2B': 'K',
                    '\u1E30': 'K',
                    '\u01E8': 'K',
                    '\u1E32': 'K',
                    '\u0136': 'K',
                    '\u1E34': 'K',
                    '\u0198': 'K',
                    '\u2C69': 'K',
                    '\uA740': 'K',
                    '\uA742': 'K',
                    '\uA744': 'K',
                    '\uA7A2': 'K',
                    '\u24C1': 'L',
                    '\uFF2C': 'L',
                    '\u013F': 'L',
                    '\u0139': 'L',
                    '\u013D': 'L',
                    '\u1E36': 'L',
                    '\u1E38': 'L',
                    '\u013B': 'L',
                    '\u1E3C': 'L',
                    '\u1E3A': 'L',
                    '\u0141': 'L',
                    '\u023D': 'L',
                    '\u2C62': 'L',
                    '\u2C60': 'L',
                    '\uA748': 'L',
                    '\uA746': 'L',
                    '\uA780': 'L',
                    '\u01C7': 'LJ',
                    '\u01C8': 'Lj',
                    '\u24C2': 'M',
                    '\uFF2D': 'M',
                    '\u1E3E': 'M',
                    '\u1E40': 'M',
                    '\u1E42': 'M',
                    '\u2C6E': 'M',
                    '\u019C': 'M',
                    '\u24C3': 'N',
                    '\uFF2E': 'N',
                    '\u01F8': 'N',
                    '\u0143': 'N',
                    '\u00D1': 'N',
                    '\u1E44': 'N',
                    '\u0147': 'N',
                    '\u1E46': 'N',
                    '\u0145': 'N',
                    '\u1E4A': 'N',
                    '\u1E48': 'N',
                    '\u0220': 'N',
                    '\u019D': 'N',
                    '\uA790': 'N',
                    '\uA7A4': 'N',
                    '\u01CA': 'NJ',
                    '\u01CB': 'Nj',
                    '\u24C4': 'O',
                    '\uFF2F': 'O',
                    '\u00D2': 'O',
                    '\u00D3': 'O',
                    '\u00D4': 'O',
                    '\u1ED2': 'O',
                    '\u1ED0': 'O',
                    '\u1ED6': 'O',
                    '\u1ED4': 'O',
                    '\u00D5': 'O',
                    '\u1E4C': 'O',
                    '\u022C': 'O',
                    '\u1E4E': 'O',
                    '\u014C': 'O',
                    '\u1E50': 'O',
                    '\u1E52': 'O',
                    '\u014E': 'O',
                    '\u022E': 'O',
                    '\u0230': 'O',
                    '\u00D6': 'O',
                    '\u022A': 'O',
                    '\u1ECE': 'O',
                    '\u0150': 'O',
                    '\u01D1': 'O',
                    '\u020C': 'O',
                    '\u020E': 'O',
                    '\u01A0': 'O',
                    '\u1EDC': 'O',
                    '\u1EDA': 'O',
                    '\u1EE0': 'O',
                    '\u1EDE': 'O',
                    '\u1EE2': 'O',
                    '\u1ECC': 'O',
                    '\u1ED8': 'O',
                    '\u01EA': 'O',
                    '\u01EC': 'O',
                    '\u00D8': 'O',
                    '\u01FE': 'O',
                    '\u0186': 'O',
                    '\u019F': 'O',
                    '\uA74A': 'O',
                    '\uA74C': 'O',
                    '\u01A2': 'OI',
                    '\uA74E': 'OO',
                    '\u0222': 'OU',
                    '\u24C5': 'P',
                    '\uFF30': 'P',
                    '\u1E54': 'P',
                    '\u1E56': 'P',
                    '\u01A4': 'P',
                    '\u2C63': 'P',
                    '\uA750': 'P',
                    '\uA752': 'P',
                    '\uA754': 'P',
                    '\u24C6': 'Q',
                    '\uFF31': 'Q',
                    '\uA756': 'Q',
                    '\uA758': 'Q',
                    '\u024A': 'Q',
                    '\u24C7': 'R',
                    '\uFF32': 'R',
                    '\u0154': 'R',
                    '\u1E58': 'R',
                    '\u0158': 'R',
                    '\u0210': 'R',
                    '\u0212': 'R',
                    '\u1E5A': 'R',
                    '\u1E5C': 'R',
                    '\u0156': 'R',
                    '\u1E5E': 'R',
                    '\u024C': 'R',
                    '\u2C64': 'R',
                    '\uA75A': 'R',
                    '\uA7A6': 'R',
                    '\uA782': 'R',
                    '\u24C8': 'S',
                    '\uFF33': 'S',
                    '\u1E9E': 'S',
                    '\u015A': 'S',
                    '\u1E64': 'S',
                    '\u015C': 'S',
                    '\u1E60': 'S',
                    '\u0160': 'S',
                    '\u1E66': 'S',
                    '\u1E62': 'S',
                    '\u1E68': 'S',
                    '\u0218': 'S',
                    '\u015E': 'S',
                    '\u2C7E': 'S',
                    '\uA7A8': 'S',
                    '\uA784': 'S',
                    '\u24C9': 'T',
                    '\uFF34': 'T',
                    '\u1E6A': 'T',
                    '\u0164': 'T',
                    '\u1E6C': 'T',
                    '\u021A': 'T',
                    '\u0162': 'T',
                    '\u1E70': 'T',
                    '\u1E6E': 'T',
                    '\u0166': 'T',
                    '\u01AC': 'T',
                    '\u01AE': 'T',
                    '\u023E': 'T',
                    '\uA786': 'T',
                    '\uA728': 'TZ',
                    '\u24CA': 'U',
                    '\uFF35': 'U',
                    '\u00D9': 'U',
                    '\u00DA': 'U',
                    '\u00DB': 'U',
                    '\u0168': 'U',
                    '\u1E78': 'U',
                    '\u016A': 'U',
                    '\u1E7A': 'U',
                    '\u016C': 'U',
                    '\u00DC': 'U',
                    '\u01DB': 'U',
                    '\u01D7': 'U',
                    '\u01D5': 'U',
                    '\u01D9': 'U',
                    '\u1EE6': 'U',
                    '\u016E': 'U',
                    '\u0170': 'U',
                    '\u01D3': 'U',
                    '\u0214': 'U',
                    '\u0216': 'U',
                    '\u01AF': 'U',
                    '\u1EEA': 'U',
                    '\u1EE8': 'U',
                    '\u1EEE': 'U',
                    '\u1EEC': 'U',
                    '\u1EF0': 'U',
                    '\u1EE4': 'U',
                    '\u1E72': 'U',
                    '\u0172': 'U',
                    '\u1E76': 'U',
                    '\u1E74': 'U',
                    '\u0244': 'U',
                    '\u24CB': 'V',
                    '\uFF36': 'V',
                    '\u1E7C': 'V',
                    '\u1E7E': 'V',
                    '\u01B2': 'V',
                    '\uA75E': 'V',
                    '\u0245': 'V',
                    '\uA760': 'VY',
                    '\u24CC': 'W',
                    '\uFF37': 'W',
                    '\u1E80': 'W',
                    '\u1E82': 'W',
                    '\u0174': 'W',
                    '\u1E86': 'W',
                    '\u1E84': 'W',
                    '\u1E88': 'W',
                    '\u2C72': 'W',
                    '\u24CD': 'X',
                    '\uFF38': 'X',
                    '\u1E8A': 'X',
                    '\u1E8C': 'X',
                    '\u24CE': 'Y',
                    '\uFF39': 'Y',
                    '\u1EF2': 'Y',
                    '\u00DD': 'Y',
                    '\u0176': 'Y',
                    '\u1EF8': 'Y',
                    '\u0232': 'Y',
                    '\u1E8E': 'Y',
                    '\u0178': 'Y',
                    '\u1EF6': 'Y',
                    '\u1EF4': 'Y',
                    '\u01B3': 'Y',
                    '\u024E': 'Y',
                    '\u1EFE': 'Y',
                    '\u24CF': 'Z',
                    '\uFF3A': 'Z',
                    '\u0179': 'Z',
                    '\u1E90': 'Z',
                    '\u017B': 'Z',
                    '\u017D': 'Z',
                    '\u1E92': 'Z',
                    '\u1E94': 'Z',
                    '\u01B5': 'Z',
                    '\u0224': 'Z',
                    '\u2C7F': 'Z',
                    '\u2C6B': 'Z',
                    '\uA762': 'Z',
                    '\u24D0': 'a',
                    '\uFF41': 'a',
                    '\u1E9A': 'a',
                    '\u00E0': 'a',
                    '\u00E1': 'a',
                    '\u00E2': 'a',
                    '\u1EA7': 'a',
                    '\u1EA5': 'a',
                    '\u1EAB': 'a',
                    '\u1EA9': 'a',
                    '\u00E3': 'a',
                    '\u0101': 'a',
                    '\u0103': 'a',
                    '\u1EB1': 'a',
                    '\u1EAF': 'a',
                    '\u1EB5': 'a',
                    '\u1EB3': 'a',
                    '\u0227': 'a',
                    '\u01E1': 'a',
                    '\u00E4': 'a',
                    '\u01DF': 'a',
                    '\u1EA3': 'a',
                    '\u00E5': 'a',
                    '\u01FB': 'a',
                    '\u01CE': 'a',
                    '\u0201': 'a',
                    '\u0203': 'a',
                    '\u1EA1': 'a',
                    '\u1EAD': 'a',
                    '\u1EB7': 'a',
                    '\u1E01': 'a',
                    '\u0105': 'a',
                    '\u2C65': 'a',
                    '\u0250': 'a',
                    '\uA733': 'aa',
                    '\u00E6': 'ae',
                    '\u01FD': 'ae',
                    '\u01E3': 'ae',
                    '\uA735': 'ao',
                    '\uA737': 'au',
                    '\uA739': 'av',
                    '\uA73B': 'av',
                    '\uA73D': 'ay',
                    '\u24D1': 'b',
                    '\uFF42': 'b',
                    '\u1E03': 'b',
                    '\u1E05': 'b',
                    '\u1E07': 'b',
                    '\u0180': 'b',
                    '\u0183': 'b',
                    '\u0253': 'b',
                    '\u24D2': 'c',
                    '\uFF43': 'c',
                    '\u0107': 'c',
                    '\u0109': 'c',
                    '\u010B': 'c',
                    '\u010D': 'c',
                    '\u00E7': 'c',
                    '\u1E09': 'c',
                    '\u0188': 'c',
                    '\u023C': 'c',
                    '\uA73F': 'c',
                    '\u2184': 'c',
                    '\u24D3': 'd',
                    '\uFF44': 'd',
                    '\u1E0B': 'd',
                    '\u010F': 'd',
                    '\u1E0D': 'd',
                    '\u1E11': 'd',
                    '\u1E13': 'd',
                    '\u1E0F': 'd',
                    '\u0111': 'd',
                    '\u018C': 'd',
                    '\u0256': 'd',
                    '\u0257': 'd',
                    '\uA77A': 'd',
                    '\u01F3': 'dz',
                    '\u01C6': 'dz',
                    '\u24D4': 'e',
                    '\uFF45': 'e',
                    '\u00E8': 'e',
                    '\u00E9': 'e',
                    '\u00EA': 'e',
                    '\u1EC1': 'e',
                    '\u1EBF': 'e',
                    '\u1EC5': 'e',
                    '\u1EC3': 'e',
                    '\u1EBD': 'e',
                    '\u0113': 'e',
                    '\u1E15': 'e',
                    '\u1E17': 'e',
                    '\u0115': 'e',
                    '\u0117': 'e',
                    '\u00EB': 'e',
                    '\u1EBB': 'e',
                    '\u011B': 'e',
                    '\u0205': 'e',
                    '\u0207': 'e',
                    '\u1EB9': 'e',
                    '\u1EC7': 'e',
                    '\u0229': 'e',
                    '\u1E1D': 'e',
                    '\u0119': 'e',
                    '\u1E19': 'e',
                    '\u1E1B': 'e',
                    '\u0247': 'e',
                    '\u025B': 'e',
                    '\u01DD': 'e',
                    '\u24D5': 'f',
                    '\uFF46': 'f',
                    '\u1E1F': 'f',
                    '\u0192': 'f',
                    '\uA77C': 'f',
                    '\u24D6': 'g',
                    '\uFF47': 'g',
                    '\u01F5': 'g',
                    '\u011D': 'g',
                    '\u1E21': 'g',
                    '\u011F': 'g',
                    '\u0121': 'g',
                    '\u01E7': 'g',
                    '\u0123': 'g',
                    '\u01E5': 'g',
                    '\u0260': 'g',
                    '\uA7A1': 'g',
                    '\u1D79': 'g',
                    '\uA77F': 'g',
                    '\u24D7': 'h',
                    '\uFF48': 'h',
                    '\u0125': 'h',
                    '\u1E23': 'h',
                    '\u1E27': 'h',
                    '\u021F': 'h',
                    '\u1E25': 'h',
                    '\u1E29': 'h',
                    '\u1E2B': 'h',
                    '\u1E96': 'h',
                    '\u0127': 'h',
                    '\u2C68': 'h',
                    '\u2C76': 'h',
                    '\u0265': 'h',
                    '\u0195': 'hv',
                    '\u24D8': 'i',
                    '\uFF49': 'i',
                    '\u00EC': 'i',
                    '\u00ED': 'i',
                    '\u00EE': 'i',
                    '\u0129': 'i',
                    '\u012B': 'i',
                    '\u012D': 'i',
                    '\u00EF': 'i',
                    '\u1E2F': 'i',
                    '\u1EC9': 'i',
                    '\u01D0': 'i',
                    '\u0209': 'i',
                    '\u020B': 'i',
                    '\u1ECB': 'i',
                    '\u012F': 'i',
                    '\u1E2D': 'i',
                    '\u0268': 'i',
                    '\u0131': 'i',
                    '\u24D9': 'j',
                    '\uFF4A': 'j',
                    '\u0135': 'j',
                    '\u01F0': 'j',
                    '\u0249': 'j',
                    '\u24DA': 'k',
                    '\uFF4B': 'k',
                    '\u1E31': 'k',
                    '\u01E9': 'k',
                    '\u1E33': 'k',
                    '\u0137': 'k',
                    '\u1E35': 'k',
                    '\u0199': 'k',
                    '\u2C6A': 'k',
                    '\uA741': 'k',
                    '\uA743': 'k',
                    '\uA745': 'k',
                    '\uA7A3': 'k',
                    '\u24DB': 'l',
                    '\uFF4C': 'l',
                    '\u0140': 'l',
                    '\u013A': 'l',
                    '\u013E': 'l',
                    '\u1E37': 'l',
                    '\u1E39': 'l',
                    '\u013C': 'l',
                    '\u1E3D': 'l',
                    '\u1E3B': 'l',
                    '\u017F': 'l',
                    '\u0142': 'l',
                    '\u019A': 'l',
                    '\u026B': 'l',
                    '\u2C61': 'l',
                    '\uA749': 'l',
                    '\uA781': 'l',
                    '\uA747': 'l',
                    '\u01C9': 'lj',
                    '\u24DC': 'm',
                    '\uFF4D': 'm',
                    '\u1E3F': 'm',
                    '\u1E41': 'm',
                    '\u1E43': 'm',
                    '\u0271': 'm',
                    '\u026F': 'm',
                    '\u24DD': 'n',
                    '\uFF4E': 'n',
                    '\u01F9': 'n',
                    '\u0144': 'n',
                    '\u00F1': 'n',
                    '\u1E45': 'n',
                    '\u0148': 'n',
                    '\u1E47': 'n',
                    '\u0146': 'n',
                    '\u1E4B': 'n',
                    '\u1E49': 'n',
                    '\u019E': 'n',
                    '\u0272': 'n',
                    '\u0149': 'n',
                    '\uA791': 'n',
                    '\uA7A5': 'n',
                    '\u01CC': 'nj',
                    '\u24DE': 'o',
                    '\uFF4F': 'o',
                    '\u00F2': 'o',
                    '\u00F3': 'o',
                    '\u00F4': 'o',
                    '\u1ED3': 'o',
                    '\u1ED1': 'o',
                    '\u1ED7': 'o',
                    '\u1ED5': 'o',
                    '\u00F5': 'o',
                    '\u1E4D': 'o',
                    '\u022D': 'o',
                    '\u1E4F': 'o',
                    '\u014D': 'o',
                    '\u1E51': 'o',
                    '\u1E53': 'o',
                    '\u014F': 'o',
                    '\u022F': 'o',
                    '\u0231': 'o',
                    '\u00F6': 'o',
                    '\u022B': 'o',
                    '\u1ECF': 'o',
                    '\u0151': 'o',
                    '\u01D2': 'o',
                    '\u020D': 'o',
                    '\u020F': 'o',
                    '\u01A1': 'o',
                    '\u1EDD': 'o',
                    '\u1EDB': 'o',
                    '\u1EE1': 'o',
                    '\u1EDF': 'o',
                    '\u1EE3': 'o',
                    '\u1ECD': 'o',
                    '\u1ED9': 'o',
                    '\u01EB': 'o',
                    '\u01ED': 'o',
                    '\u00F8': 'o',
                    '\u01FF': 'o',
                    '\u0254': 'o',
                    '\uA74B': 'o',
                    '\uA74D': 'o',
                    '\u0275': 'o',
                    '\u01A3': 'oi',
                    '\u0223': 'ou',
                    '\uA74F': 'oo',
                    '\u24DF': 'p',
                    '\uFF50': 'p',
                    '\u1E55': 'p',
                    '\u1E57': 'p',
                    '\u01A5': 'p',
                    '\u1D7D': 'p',
                    '\uA751': 'p',
                    '\uA753': 'p',
                    '\uA755': 'p',
                    '\u24E0': 'q',
                    '\uFF51': 'q',
                    '\u024B': 'q',
                    '\uA757': 'q',
                    '\uA759': 'q',
                    '\u24E1': 'r',
                    '\uFF52': 'r',
                    '\u0155': 'r',
                    '\u1E59': 'r',
                    '\u0159': 'r',
                    '\u0211': 'r',
                    '\u0213': 'r',
                    '\u1E5B': 'r',
                    '\u1E5D': 'r',
                    '\u0157': 'r',
                    '\u1E5F': 'r',
                    '\u024D': 'r',
                    '\u027D': 'r',
                    '\uA75B': 'r',
                    '\uA7A7': 'r',
                    '\uA783': 'r',
                    '\u24E2': 's',
                    '\uFF53': 's',
                    '\u00DF': 's',
                    '\u015B': 's',
                    '\u1E65': 's',
                    '\u015D': 's',
                    '\u1E61': 's',
                    '\u0161': 's',
                    '\u1E67': 's',
                    '\u1E63': 's',
                    '\u1E69': 's',
                    '\u0219': 's',
                    '\u015F': 's',
                    '\u023F': 's',
                    '\uA7A9': 's',
                    '\uA785': 's',
                    '\u1E9B': 's',
                    '\u24E3': 't',
                    '\uFF54': 't',
                    '\u1E6B': 't',
                    '\u1E97': 't',
                    '\u0165': 't',
                    '\u1E6D': 't',
                    '\u021B': 't',
                    '\u0163': 't',
                    '\u1E71': 't',
                    '\u1E6F': 't',
                    '\u0167': 't',
                    '\u01AD': 't',
                    '\u0288': 't',
                    '\u2C66': 't',
                    '\uA787': 't',
                    '\uA729': 'tz',
                    '\u24E4': 'u',
                    '\uFF55': 'u',
                    '\u00F9': 'u',
                    '\u00FA': 'u',
                    '\u00FB': 'u',
                    '\u0169': 'u',
                    '\u1E79': 'u',
                    '\u016B': 'u',
                    '\u1E7B': 'u',
                    '\u016D': 'u',
                    '\u00FC': 'u',
                    '\u01DC': 'u',
                    '\u01D8': 'u',
                    '\u01D6': 'u',
                    '\u01DA': 'u',
                    '\u1EE7': 'u',
                    '\u016F': 'u',
                    '\u0171': 'u',
                    '\u01D4': 'u',
                    '\u0215': 'u',
                    '\u0217': 'u',
                    '\u01B0': 'u',
                    '\u1EEB': 'u',
                    '\u1EE9': 'u',
                    '\u1EEF': 'u',
                    '\u1EED': 'u',
                    '\u1EF1': 'u',
                    '\u1EE5': 'u',
                    '\u1E73': 'u',
                    '\u0173': 'u',
                    '\u1E77': 'u',
                    '\u1E75': 'u',
                    '\u0289': 'u',
                    '\u24E5': 'v',
                    '\uFF56': 'v',
                    '\u1E7D': 'v',
                    '\u1E7F': 'v',
                    '\u028B': 'v',
                    '\uA75F': 'v',
                    '\u028C': 'v',
                    '\uA761': 'vy',
                    '\u24E6': 'w',
                    '\uFF57': 'w',
                    '\u1E81': 'w',
                    '\u1E83': 'w',
                    '\u0175': 'w',
                    '\u1E87': 'w',
                    '\u1E85': 'w',
                    '\u1E98': 'w',
                    '\u1E89': 'w',
                    '\u2C73': 'w',
                    '\u24E7': 'x',
                    '\uFF58': 'x',
                    '\u1E8B': 'x',
                    '\u1E8D': 'x',
                    '\u24E8': 'y',
                    '\uFF59': 'y',
                    '\u1EF3': 'y',
                    '\u00FD': 'y',
                    '\u0177': 'y',
                    '\u1EF9': 'y',
                    '\u0233': 'y',
                    '\u1E8F': 'y',
                    '\u00FF': 'y',
                    '\u1EF7': 'y',
                    '\u1E99': 'y',
                    '\u1EF5': 'y',
                    '\u01B4': 'y',
                    '\u024F': 'y',
                    '\u1EFF': 'y',
                    '\u24E9': 'z',
                    '\uFF5A': 'z',
                    '\u017A': 'z',
                    '\u1E91': 'z',
                    '\u017C': 'z',
                    '\u017E': 'z',
                    '\u1E93': 'z',
                    '\u1E95': 'z',
                    '\u01B6': 'z',
                    '\u0225': 'z',
                    '\u0240': 'z',
                    '\u2C6C': 'z',
                    '\uA763': 'z',
                    '\u0386': '\u0391',
                    '\u0388': '\u0395',
                    '\u0389': '\u0397',
                    '\u038A': '\u0399',
                    '\u03AA': '\u0399',
                    '\u038C': '\u039F',
                    '\u038E': '\u03A5',
                    '\u03AB': '\u03A5',
                    '\u038F': '\u03A9',
                    '\u03AC': '\u03B1',
                    '\u03AD': '\u03B5',
                    '\u03AE': '\u03B7',
                    '\u03AF': '\u03B9',
                    '\u03CA': '\u03B9',
                    '\u0390': '\u03B9',
                    '\u03CC': '\u03BF',
                    '\u03CD': '\u03C5',
                    '\u03CB': '\u03C5',
                    '\u03B0': '\u03C5',
                    '\u03C9': '\u03C9',
                    '\u03C2': '\u03C3'
                };

                return diacritics;
            });

            S2.define('select2/data/base',[
                '../utils'
            ], function (Utils) {
                function BaseAdapter ($element, options) {
                    BaseAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(BaseAdapter, Utils.Observable);

                BaseAdapter.prototype.current = function (callback) {
                    throw new Error('The `current` method must be defined in child classes.');
                };

                BaseAdapter.prototype.query = function (params, callback) {
                    throw new Error('The `query` method must be defined in child classes.');
                };

                BaseAdapter.prototype.bind = function (container, $container) {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.destroy = function () {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.generateResultId = function (container, data) {
                    var id = container.id + '-result-';

                    id += Utils.generateChars(4);

                    if (data.id != null) {
                        id += '-' + data.id.toString();
                    } else {
                        id += '-' + Utils.generateChars(4);
                    }
                    return id;
                };

                return BaseAdapter;
            });

            S2.define('select2/data/select',[
                './base',
                '../utils',
                'jquery'
            ], function (BaseAdapter, Utils, $) {
                function SelectAdapter ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    SelectAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(SelectAdapter, BaseAdapter);

                SelectAdapter.prototype.current = function (callback) {
                    var data = [];
                    var self = this;

                    this.$element.find(':selected').each(function () {
                        var $option = $(this);

                        var option = self.item($option);

                        data.push(option);
                    });

                    callback(data);
                };

                SelectAdapter.prototype.select = function (data) {
                    var self = this;

                    data.selected = true;

                    // If data.element is a DOM node, use it instead
                    if ($(data.element).is('option')) {
                        data.element.selected = true;

                        this.$element.trigger('change');

                        return;
                    }

                    if (this.$element.prop('multiple')) {
                        this.current(function (currentData) {
                            var val = [];

                            data = [data];
                            data.push.apply(data, currentData);

                            for (var d = 0; d < data.length; d++) {
                                var id = data[d].id;

                                if ($.inArray(id, val) === -1) {
                                    val.push(id);
                                }
                            }

                            self.$element.val(val);
                            self.$element.trigger('change');
                        });
                    } else {
                        var val = data.id;

                        this.$element.val(val);
                        this.$element.trigger('change');
                    }
                };

                SelectAdapter.prototype.unselect = function (data) {
                    var self = this;

                    if (!this.$element.prop('multiple')) {
                        return;
                    }

                    data.selected = false;

                    if ($(data.element).is('option')) {
                        data.element.selected = false;

                        this.$element.trigger('change');

                        return;
                    }

                    this.current(function (currentData) {
                        var val = [];

                        for (var d = 0; d < currentData.length; d++) {
                            var id = currentData[d].id;

                            if (id !== data.id && $.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }

                        self.$element.val(val);

                        self.$element.trigger('change');
                    });
                };

                SelectAdapter.prototype.bind = function (container, $container) {
                    var self = this;

                    this.container = container;

                    container.on('select', function (params) {
                        self.select(params.data);
                    });

                    container.on('unselect', function (params) {
                        self.unselect(params.data);
                    });
                };

                SelectAdapter.prototype.destroy = function () {
                    // Remove anything added to child elements
                    this.$element.find('*').each(function () {
                        // Remove any custom data set by Select2
                        $.removeData(this, 'data');
                    });
                };

                SelectAdapter.prototype.query = function (params, callback) {
                    var data = [];
                    var self = this;

                    var $options = this.$element.children();

                    $options.each(function () {
                        var $option = $(this);

                        if (!$option.is('option') && !$option.is('optgroup')) {
                            return;
                        }

                        var option = self.item($option);

                        var matches = self.matches(params, option);

                        if (matches !== null) {
                            data.push(matches);
                        }
                    });

                    callback({
                        results: data
                    });
                };

                SelectAdapter.prototype.addOptions = function ($options) {
                    Utils.appendMany(this.$element, $options);
                };

                SelectAdapter.prototype.option = function (data) {
                    var option;

                    if (data.children) {
                        option = document.createElement('optgroup');
                        option.label = data.text;
                    } else {
                        option = document.createElement('option');

                        if (option.textContent !== undefined) {
                            option.textContent = data.text;
                        } else {
                            option.innerText = data.text;
                        }
                    }

                    if (data.id) {
                        option.value = data.id;
                    }

                    if (data.disabled) {
                        option.disabled = true;
                    }

                    if (data.selected) {
                        option.selected = true;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    var $option = $(option);

                    var normalizedData = this._normalizeItem(data);
                    normalizedData.element = option;

                    // Override the option's data with the combined data
                    $.data(option, 'data', normalizedData);

                    return $option;
                };

                SelectAdapter.prototype.item = function ($option) {
                    var data = {};

                    data = $.data($option[0], 'data');

                    if (data != null) {
                        return data;
                    }

                    if ($option.is('option')) {
                        data = {
                            id: $option.val(),
                            text: $option.text(),
                            disabled: $option.prop('disabled'),
                            selected: $option.prop('selected'),
                            title: $option.prop('title')
                        };
                    } else if ($option.is('optgroup')) {
                        data = {
                            text: $option.prop('label'),
                            children: [],
                            title: $option.prop('title')
                        };

                        var $children = $option.children('option');
                        var children = [];

                        for (var c = 0; c < $children.length; c++) {
                            var $child = $($children[c]);

                            var child = this.item($child);

                            children.push(child);
                        }

                        data.children = children;
                    }

                    data = this._normalizeItem(data);
                    data.element = $option[0];

                    $.data($option[0], 'data', data);

                    return data;
                };

                SelectAdapter.prototype._normalizeItem = function (item) {
                    if (!$.isPlainObject(item)) {
                        item = {
                            id: item,
                            text: item
                        };
                    }

                    item = $.extend({}, {
                        text: ''
                    }, item);

                    var defaults = {
                        selected: false,
                        disabled: false
                    };

                    if (item.id != null) {
                        item.id = item.id.toString();
                    }

                    if (item.text != null) {
                        item.text = item.text.toString();
                    }

                    if (item._resultId == null && item.id && this.container != null) {
                        item._resultId = this.generateResultId(this.container, item);
                    }

                    return $.extend({}, defaults, item);
                };

                SelectAdapter.prototype.matches = function (params, data) {
                    var matcher = this.options.get('matcher');

                    return matcher(params, data);
                };

                return SelectAdapter;
            });

            S2.define('select2/data/array',[
                './select',
                '../utils',
                'jquery'
            ], function (SelectAdapter, Utils, $) {
                function ArrayAdapter ($element, options) {
                    var data = options.get('data') || [];

                    ArrayAdapter.__super__.constructor.call(this, $element, options);

                    this.addOptions(this.convertToOptions(data));
                }

                Utils.Extend(ArrayAdapter, SelectAdapter);

                ArrayAdapter.prototype.select = function (data) {
                    var $option = this.$element.find('option').filter(function (i, elm) {
                        return elm.value == data.id.toString();
                    });

                    if ($option.length === 0) {
                        $option = this.option(data);

                        this.addOptions($option);
                    }

                    ArrayAdapter.__super__.select.call(this, data);
                };

                ArrayAdapter.prototype.convertToOptions = function (data) {
                    var self = this;

                    var $existing = this.$element.find('option');
                    var existingIds = $existing.map(function () {
                        return self.item($(this)).id;
                    }).get();

                    var $options = [];

                    // Filter out all items except for the one passed in the argument
                    function onlyItem (item) {
                        return function () {
                            return $(this).val() == item.id;
                        };
                    }

                    for (var d = 0; d < data.length; d++) {
                        var item = this._normalizeItem(data[d]);

                        // Skip items which were pre-loaded, only merge the data
                        if ($.inArray(item.id, existingIds) >= 0) {
                            var $existingOption = $existing.filter(onlyItem(item));

                            var existingData = this.item($existingOption);
                            var newData = $.extend(true, {}, item, existingData);

                            var $newOption = this.option(newData);

                            $existingOption.replaceWith($newOption);

                            continue;
                        }

                        var $option = this.option(item);

                        if (item.children) {
                            var $children = this.convertToOptions(item.children);

                            Utils.appendMany($option, $children);
                        }

                        $options.push($option);
                    }

                    return $options;
                };

                return ArrayAdapter;
            });

            S2.define('select2/data/ajax',[
                './array',
                '../utils',
                'jquery'
            ], function (ArrayAdapter, Utils, $) {
                function AjaxAdapter ($element, options) {
                    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

                    if (this.ajaxOptions.processResults != null) {
                        this.processResults = this.ajaxOptions.processResults;
                    }

                    AjaxAdapter.__super__.constructor.call(this, $element, options);
                }

                Utils.Extend(AjaxAdapter, ArrayAdapter);

                AjaxAdapter.prototype._applyDefaults = function (options) {
                    var defaults = {
                        data: function (params) {
                            return $.extend({}, params, {
                                q: params.term
                            });
                        },
                        transport: function (params, success, failure) {
                            var $request = $.ajax(params);

                            $request.then(success);
                            $request.fail(failure);

                            return $request;
                        }
                    };

                    return $.extend({}, defaults, options, true);
                };

                AjaxAdapter.prototype.processResults = function (results) {
                    return results;
                };

                AjaxAdapter.prototype.query = function (params, callback) {
                    var matches = [];
                    var self = this;

                    if (this._request != null) {
                        // JSONP requests cannot always be aborted
                        if ($.isFunction(this._request.abort)) {
                            this._request.abort();
                        }

                        this._request = null;
                    }

                    var options = $.extend({
                        type: 'GET'
                    }, this.ajaxOptions);

                    if (typeof options.url === 'function') {
                        options.url = options.url.call(this.$element, params);
                    }

                    if (typeof options.data === 'function') {
                        options.data = options.data.call(this.$element, params);
                    }

                    function request () {
                        var $request = options.transport(options, function (data) {
                            var results = self.processResults(data, params);

                            if (self.options.get('debug') && window.console && console.error) {
                                // Check to make sure that the response included a `results` key.
                                if (!results || !results.results || !$.isArray(results.results)) {
                                    console.error(
                                        'Select2: The AJAX results did not return an array in the ' +
                                        '`results` key of the response.'
                                    );
                                }
                            }

                            callback(results);
                        }, function () {
                            // Attempt to detect if a request was aborted
                            // Only works if the transport exposes a status property
                            if ($request.status && $request.status === '0') {
                                return;
                            }

                            self.trigger('results:message', {
                                message: 'errorLoading'
                            });
                        });

                        self._request = $request;
                    }

                    if (this.ajaxOptions.delay && params.term != null) {
                        if (this._queryTimeout) {
                            window.clearTimeout(this._queryTimeout);
                        }

                        this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
                    } else {
                        request();
                    }
                };

                return AjaxAdapter;
            });

            S2.define('select2/data/tags',[
                'jquery'
            ], function ($) {
                function Tags (decorated, $element, options) {
                    var tags = options.get('tags');

                    var createTag = options.get('createTag');

                    if (createTag !== undefined) {
                        this.createTag = createTag;
                    }

                    var insertTag = options.get('insertTag');

                    if (insertTag !== undefined) {
                        this.insertTag = insertTag;
                    }

                    decorated.call(this, $element, options);

                    if ($.isArray(tags)) {
                        for (var t = 0; t < tags.length; t++) {
                            var tag = tags[t];
                            var item = this._normalizeItem(tag);

                            var $option = this.option(item);

                            this.$element.append($option);
                        }
                    }
                }

                Tags.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    this._removeOldTags();

                    if (params.term == null || params.page != null) {
                        decorated.call(this, params, callback);
                        return;
                    }

                    function wrapper (obj, child) {
                        var data = obj.results;

                        for (var i = 0; i < data.length; i++) {
                            var option = data[i];

                            var checkChildren = (
                                option.children != null &&
                                !wrapper({
                                    results: option.children
                                }, true)
                            );

                            var checkText = option.text === params.term;

                            if (checkText || checkChildren) {
                                if (child) {
                                    return false;
                                }

                                obj.data = data;
                                callback(obj);

                                return;
                            }
                        }

                        if (child) {
                            return true;
                        }

                        var tag = self.createTag(params);

                        if (tag != null) {
                            var $option = self.option(tag);
                            $option.attr('data-select2-tag', true);

                            self.addOptions([$option]);

                            self.insertTag(data, tag);
                        }

                        obj.results = data;

                        callback(obj);
                    }

                    decorated.call(this, params, wrapper);
                };

                Tags.prototype.createTag = function (decorated, params) {
                    var term = $.trim(params.term);

                    if (term === '') {
                        return null;
                    }

                    return {
                        id: term,
                        text: term
                    };
                };

                Tags.prototype.insertTag = function (_, data, tag) {
                    data.unshift(tag);
                };

                Tags.prototype._removeOldTags = function (_) {
                    var tag = this._lastTag;

                    var $options = this.$element.find('option[data-select2-tag]');

                    $options.each(function () {
                        if (this.selected) {
                            return;
                        }

                        $(this).remove();
                    });
                };

                return Tags;
            });

            S2.define('select2/data/tokenizer',[
                'jquery'
            ], function ($) {
                function Tokenizer (decorated, $element, options) {
                    var tokenizer = options.get('tokenizer');

                    if (tokenizer !== undefined) {
                        this.tokenizer = tokenizer;
                    }

                    decorated.call(this, $element, options);
                }

                Tokenizer.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    this.$search =  container.dropdown.$search || container.selection.$search ||
                        $container.find('.select2-search__field');
                };

                Tokenizer.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    function createAndSelect (data) {
                        // Normalize the data object so we can use it for checks
                        var item = self._normalizeItem(data);

                        // Check if the data object already exists as a tag
                        // Select it if it doesn't
                        var $existingOptions = self.$element.find('option').filter(function () {
                            return $(this).val() === item.id;
                        });

                        // If an existing option wasn't found for it, create the option
                        if (!$existingOptions.length) {
                            var $option = self.option(item);
                            $option.attr('data-select2-tag', true);

                            self._removeOldTags();
                            self.addOptions([$option]);
                        }

                        // Select the item, now that we know there is an option for it
                        select(item);
                    }

                    function select (data) {
                        self.trigger('select', {
                            data: data
                        });
                    }

                    params.term = params.term || '';

                    var tokenData = this.tokenizer(params, this.options, createAndSelect);

                    if (tokenData.term !== params.term) {
                        // Replace the search term if we have the search box
                        if (this.$search.length) {
                            this.$search.val(tokenData.term);
                            this.$search.focus();
                        }

                        params.term = tokenData.term;
                    }

                    decorated.call(this, params, callback);
                };

                Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
                    var separators = options.get('tokenSeparators') || [];
                    var term = params.term;
                    var i = 0;

                    var createTag = this.createTag || function (params) {
                            return {
                                id: params.term,
                                text: params.term
                            };
                        };

                    while (i < term.length) {
                        var termChar = term[i];

                        if ($.inArray(termChar, separators) === -1) {
                            i++;

                            continue;
                        }

                        var part = term.substr(0, i);
                        var partParams = $.extend({}, params, {
                            term: part
                        });

                        var data = createTag(partParams);

                        if (data == null) {
                            i++;
                            continue;
                        }

                        callback(data);

                        // Reset the term to not include the tokenized portion
                        term = term.substr(i + 1) || '';
                        i = 0;
                    }

                    return {
                        term: term
                    };
                };

                return Tokenizer;
            });

            S2.define('select2/data/minimumInputLength',[

            ], function () {
                function MinimumInputLength (decorated, $e, options) {
                    this.minimumInputLength = options.get('minimumInputLength');

                    decorated.call(this, $e, options);
                }

                MinimumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (params.term.length < this.minimumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooShort',
                            args: {
                                minimum: this.minimumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MinimumInputLength;
            });

            S2.define('select2/data/maximumInputLength',[

            ], function () {
                function MaximumInputLength (decorated, $e, options) {
                    this.maximumInputLength = options.get('maximumInputLength');

                    decorated.call(this, $e, options);
                }

                MaximumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (this.maximumInputLength > 0 &&
                        params.term.length > this.maximumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooLong',
                            args: {
                                maximum: this.maximumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MaximumInputLength;
            });

            S2.define('select2/data/maximumSelectionLength',[

            ], function (){
                function MaximumSelectionLength (decorated, $e, options) {
                    this.maximumSelectionLength = options.get('maximumSelectionLength');

                    decorated.call(this, $e, options);
                }

                MaximumSelectionLength.prototype.query =
                    function (decorated, params, callback) {
                        var self = this;

                        this.current(function (currentData) {
                            var count = currentData != null ? currentData.length : 0;
                            if (self.maximumSelectionLength > 0 &&
                                count >= self.maximumSelectionLength) {
                                self.trigger('results:message', {
                                    message: 'maximumSelected',
                                    args: {
                                        maximum: self.maximumSelectionLength
                                    }
                                });
                                return;
                            }
                            decorated.call(self, params, callback);
                        });
                    };

                return MaximumSelectionLength;
            });

            S2.define('select2/dropdown',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Dropdown ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    Dropdown.__super__.constructor.call(this);
                }

                Utils.Extend(Dropdown, Utils.Observable);

                Dropdown.prototype.render = function () {
                    var $dropdown = $(
                        '<span class="select2-dropdown">' +
                        '<span class="select2-results"></span>' +
                        '</span>'
                    );

                    $dropdown.attr('dir', this.options.get('dir'));

                    this.$dropdown = $dropdown;

                    return $dropdown;
                };

                Dropdown.prototype.bind = function () {
                    // Should be implemented in subclasses
                };

                Dropdown.prototype.position = function ($dropdown, $container) {
                    // Should be implmented in subclasses
                };

                Dropdown.prototype.destroy = function () {
                    // Remove the dropdown from the DOM
                    this.$dropdown.remove();
                };

                return Dropdown;
            });

            S2.define('select2/dropdown/search',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function Search () { }

                Search.prototype.render = function (decorated) {
                    var $rendered = decorated.call(this);

                    var $search = $(
                        '<span class="select2-search select2-search--dropdown">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" />' +
                        '</span>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    $rendered.prepend($search);

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    this.$search.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();
                    });

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$search.on('input', function (evt) {
                        // Unbind the duplicated `keyup` event
                        $(this).off('keyup');
                    });

                    this.$search.on('keyup input', function (evt) {
                        self.handleSearch(evt);
                    });

                    container.on('open', function () {
                        self.$search.attr('tabindex', 0);

                        self.$search.focus();

                        window.setTimeout(function () {
                            self.$search.focus();
                        }, 0);
                    });

                    container.on('close', function () {
                        self.$search.attr('tabindex', -1);

                        self.$search.val('');
                    });

                    container.on('focus', function () {
                        if (container.isOpen()) {
                            self.$search.focus();
                        }
                    });

                    container.on('results:all', function (params) {
                        if (params.query.term == null || params.query.term === '') {
                            var showSearch = self.showSearch(params);

                            if (showSearch) {
                                self.$searchContainer.removeClass('select2-search--hide');
                            } else {
                                self.$searchContainer.addClass('select2-search--hide');
                            }
                        }
                    });
                };

                Search.prototype.handleSearch = function (evt) {
                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.showSearch = function (_, params) {
                    return true;
                };

                return Search;
            });

            S2.define('select2/dropdown/hidePlaceholder',[

            ], function () {
                function HidePlaceholder (decorated, $element, options, dataAdapter) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options, dataAdapter);
                }

                HidePlaceholder.prototype.append = function (decorated, data) {
                    data.results = this.removePlaceholder(data.results);

                    decorated.call(this, data);
                };

                HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                HidePlaceholder.prototype.removePlaceholder = function (_, data) {
                    var modifiedData = data.slice(0);

                    for (var d = data.length - 1; d >= 0; d--) {
                        var item = data[d];

                        if (this.placeholder.id === item.id) {
                            modifiedData.splice(d, 1);
                        }
                    }

                    return modifiedData;
                };

                return HidePlaceholder;
            });

            S2.define('select2/dropdown/infiniteScroll',[
                'jquery'
            ], function ($) {
                function InfiniteScroll (decorated, $element, options, dataAdapter) {
                    this.lastParams = {};

                    decorated.call(this, $element, options, dataAdapter);

                    this.$loadingMore = this.createLoadingMore();
                    this.loading = false;
                }

                InfiniteScroll.prototype.append = function (decorated, data) {
                    this.$loadingMore.remove();
                    this.loading = false;

                    decorated.call(this, data);

                    if (this.showLoadingMore(data)) {
                        this.$results.append(this.$loadingMore);
                    }
                };

                InfiniteScroll.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('query', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    container.on('query:append', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    this.$results.on('scroll', function () {
                        var isLoadMoreVisible = $.contains(
                            document.documentElement,
                            self.$loadingMore[0]
                        );

                        if (self.loading || !isLoadMoreVisible) {
                            return;
                        }

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var loadingMoreOffset = self.$loadingMore.offset().top +
                            self.$loadingMore.outerHeight(false);

                        if (currentOffset + 50 >= loadingMoreOffset) {
                            self.loadMore();
                        }
                    });
                };

                InfiniteScroll.prototype.loadMore = function () {
                    this.loading = true;

                    var params = $.extend({}, {page: 1}, this.lastParams);

                    params.page++;

                    this.trigger('query:append', params);
                };

                InfiniteScroll.prototype.showLoadingMore = function (_, data) {
                    return data.pagination && data.pagination.more;
                };

                InfiniteScroll.prototype.createLoadingMore = function () {
                    var $option = $(
                        '<li ' +
                        'class="select2-results__option select2-results__option--load-more"' +
                        'role="treeitem" aria-disabled="true"></li>'
                    );

                    var message = this.options.get('translations').get('loadingMore');

                    $option.html(message(this.lastParams));

                    return $option;
                };

                return InfiniteScroll;
            });

            S2.define('select2/dropdown/attachBody',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function AttachBody (decorated, $element, options) {
                    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

                    decorated.call(this, $element, options);
                }

                AttachBody.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    var setupResultsEvents = false;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self._showDropdown();
                        self._attachPositioningHandler(container);

                        if (!setupResultsEvents) {
                            setupResultsEvents = true;

                            container.on('results:all', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });

                            container.on('results:append', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                        }
                    });

                    container.on('close', function () {
                        self._hideDropdown();
                        self._detachPositioningHandler(container);
                    });

                    this.$dropdownContainer.on('mousedown', function (evt) {
                        evt.stopPropagation();
                    });
                };

                AttachBody.prototype.destroy = function (decorated) {
                    decorated.call(this);

                    this.$dropdownContainer.remove();
                };

                AttachBody.prototype.position = function (decorated, $dropdown, $container) {
                    // Clone all of the container classes
                    $dropdown.attr('class', $container.attr('class'));

                    $dropdown.removeClass('select2');
                    $dropdown.addClass('select2-container--open');

                    $dropdown.css({
                        position: 'absolute',
                        top: -999999
                    });

                    this.$container = $container;
                };

                AttachBody.prototype.render = function (decorated) {
                    var $container = $('<span></span>');

                    var $dropdown = decorated.call(this);
                    $container.append($dropdown);

                    this.$dropdownContainer = $container;

                    return $container;
                };

                AttachBody.prototype._hideDropdown = function (decorated) {
                    this.$dropdownContainer.detach();
                };

                AttachBody.prototype._attachPositioningHandler =
                    function (decorated, container) {
                        var self = this;

                        var scrollEvent = 'scroll.select2.' + container.id;
                        var resizeEvent = 'resize.select2.' + container.id;
                        var orientationEvent = 'orientationchange.select2.' + container.id;

                        var $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.each(function () {
                            $(this).data('select2-scroll-position', {
                                x: $(this).scrollLeft(),
                                y: $(this).scrollTop()
                            });
                        });

                        $watchers.on(scrollEvent, function (ev) {
                            var position = $(this).data('select2-scroll-position');
                            $(this).scrollTop(position.y);
                        });

                        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
                            function (e) {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                    };

                AttachBody.prototype._detachPositioningHandler =
                    function (decorated, container) {
                        var scrollEvent = 'scroll.select2.' + container.id;
                        var resizeEvent = 'resize.select2.' + container.id;
                        var orientationEvent = 'orientationchange.select2.' + container.id;

                        var $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.off(scrollEvent);

                        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
                    };

                AttachBody.prototype._positionDropdown = function () {
                    var $window = $(window);

                    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
                    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

                    var newDirection = null;

                    var offset = this.$container.offset();

                    offset.bottom = offset.top + this.$container.outerHeight(false);

                    var container = {
                        height: this.$container.outerHeight(false)
                    };

                    container.top = offset.top;
                    container.bottom = offset.top + container.height;

                    var dropdown = {
                        height: this.$dropdown.outerHeight(false)
                    };

                    var viewport = {
                        top: $window.scrollTop(),
                        bottom: $window.scrollTop() + $window.height()
                    };

                    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
                    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

                    var css = {
                        left: offset.left,
                        top: container.bottom
                    };

                    // Determine what the parent element is to use for calciulating the offset
                    var $offsetParent = this.$dropdownParent;

                    // For statically positoned elements, we need to get the element
                    // that is determining the offset
                    if ($offsetParent.css('position') === 'static') {
                        $offsetParent = $offsetParent.offsetParent();
                    }

                    var parentOffset = $offsetParent.offset();

                    css.top -= parentOffset.top;
                    css.left -= parentOffset.left;

                    if (!isCurrentlyAbove && !isCurrentlyBelow) {
                        newDirection = 'below';
                    }

                    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                        newDirection = 'above';
                    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                        newDirection = 'below';
                    }

                    if (newDirection == 'above' ||
                        (isCurrentlyAbove && newDirection !== 'below')) {
                        css.top = container.top - parentOffset.top - dropdown.height;
                    }

                    if (newDirection != null) {
                        this.$dropdown
                            .removeClass('select2-dropdown--below select2-dropdown--above')
                            .addClass('select2-dropdown--' + newDirection);
                        this.$container
                            .removeClass('select2-container--below select2-container--above')
                            .addClass('select2-container--' + newDirection);
                    }

                    this.$dropdownContainer.css(css);
                };

                AttachBody.prototype._resizeDropdown = function () {
                    var css = {
                        width: this.$container.outerWidth(false) + 'px'
                    };

                    if (this.options.get('dropdownAutoWidth')) {
                        css.minWidth = css.width;
                        css.position = 'relative';
                        css.width = 'auto';
                    }

                    this.$dropdown.css(css);
                };

                AttachBody.prototype._showDropdown = function (decorated) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);

                    this._positionDropdown();
                    this._resizeDropdown();
                };

                return AttachBody;
            });

            S2.define('select2/dropdown/minimumResultsForSearch',[

            ], function () {
                function countResults (data) {
                    var count = 0;

                    for (var d = 0; d < data.length; d++) {
                        var item = data[d];

                        if (item.children) {
                            count += countResults(item.children);
                        } else {
                            count++;
                        }
                    }

                    return count;
                }

                function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
                    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

                    if (this.minimumResultsForSearch < 0) {
                        this.minimumResultsForSearch = Infinity;
                    }

                    decorated.call(this, $element, options, dataAdapter);
                }

                MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
                    if (countResults(params.data.results) < this.minimumResultsForSearch) {
                        return false;
                    }

                    return decorated.call(this, params);
                };

                return MinimumResultsForSearch;
            });

            S2.define('select2/dropdown/selectOnClose',[

            ], function () {
                function SelectOnClose () { }

                SelectOnClose.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('close', function (params) {
                        self._handleSelectOnClose(params);
                    });
                };

                SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
                    if (params && params.originalSelect2Event != null) {
                        var event = params.originalSelect2Event;

                        // Don't select an item if the close event was triggered from a select or
                        // unselect event
                        if (event._type === 'select' || event._type === 'unselect') {
                            return;
                        }
                    }

                    var $highlightedResults = this.getHighlightedResults();

                    // Only select highlighted results
                    if ($highlightedResults.length < 1) {
                        return;
                    }

                    var data = $highlightedResults.data('data');

                    // Don't re-select already selected resulte
                    if (
                        (data.element != null && data.element.selected) ||
                        (data.element == null && data.selected)
                    ) {
                        return;
                    }

                    this.trigger('select', {
                        data: data
                    });
                };

                return SelectOnClose;
            });

            S2.define('select2/dropdown/closeOnSelect',[

            ], function () {
                function CloseOnSelect () { }

                CloseOnSelect.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('select', function (evt) {
                        self._selectTriggered(evt);
                    });

                    container.on('unselect', function (evt) {
                        self._selectTriggered(evt);
                    });
                };

                CloseOnSelect.prototype._selectTriggered = function (_, evt) {
                    var originalEvent = evt.originalEvent;

                    // Don't close if the control key is being held
                    if (originalEvent && originalEvent.ctrlKey) {
                        return;
                    }

                    this.trigger('close', {
                        originalEvent: originalEvent,
                        originalSelect2Event: evt
                    });
                };

                return CloseOnSelect;
            });

            S2.define('select2/i18n/en',[],function () {
                // English
                return {
                    errorLoading: function () {
                        return 'The results could not be loaded.';
                    },
                    inputTooLong: function (args) {
                        var overChars = args.input.length - args.maximum;

                        var message = 'Please delete ' + overChars + ' character';

                        if (overChars != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    inputTooShort: function (args) {
                        var remainingChars = args.minimum - args.input.length;

                        var message = 'Please enter ' + remainingChars + ' or more characters';

                        return message;
                    },
                    loadingMore: function () {
                        return 'Loading more results�';
                    },
                    maximumSelected: function (args) {
                        var message = 'You can only select ' + args.maximum + ' item';

                        if (args.maximum != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    noResults: function () {
                        return 'No results found';
                    },
                    searching: function () {
                        return 'Searching�';
                    }
                };
            });

            S2.define('select2/defaults',[
                'jquery',
                'require',

                './results',

                './selection/single',
                './selection/multiple',
                './selection/placeholder',
                './selection/allowClear',
                './selection/search',
                './selection/eventRelay',

                './utils',
                './translation',
                './diacritics',

                './data/select',
                './data/array',
                './data/ajax',
                './data/tags',
                './data/tokenizer',
                './data/minimumInputLength',
                './data/maximumInputLength',
                './data/maximumSelectionLength',

                './dropdown',
                './dropdown/search',
                './dropdown/hidePlaceholder',
                './dropdown/infiniteScroll',
                './dropdown/attachBody',
                './dropdown/minimumResultsForSearch',
                './dropdown/selectOnClose',
                './dropdown/closeOnSelect',

                './i18n/en'
            ], function ($, require,

                         ResultsList,

                         SingleSelection, MultipleSelection, Placeholder, AllowClear,
                         SelectionSearch, EventRelay,

                         Utils, Translation, DIACRITICS,

                         SelectData, ArrayData, AjaxData, Tags, Tokenizer,
                         MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

                         Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
                         AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

                         EnglishTranslation) {
                function Defaults () {
                    this.reset();
                }

                Defaults.prototype.apply = function (options) {
                    options = $.extend(true, {}, this.defaults, options);

                    if (options.dataAdapter == null) {
                        if (options.ajax != null) {
                            options.dataAdapter = AjaxData;
                        } else if (options.data != null) {
                            options.dataAdapter = ArrayData;
                        } else {
                            options.dataAdapter = SelectData;
                        }

                        if (options.minimumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MinimumInputLength
                            );
                        }

                        if (options.maximumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumInputLength
                            );
                        }

                        if (options.maximumSelectionLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumSelectionLength
                            );
                        }

                        if (options.tags) {
                            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
                        }

                        if (options.tokenSeparators != null || options.tokenizer != null) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Tokenizer
                            );
                        }

                        if (options.query != null) {
                            var Query = require(options.amdBase + 'compat/query');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Query
                            );
                        }

                        if (options.initSelection != null) {
                            var InitSelection = require(options.amdBase + 'compat/initSelection');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                InitSelection
                            );
                        }
                    }

                    if (options.resultsAdapter == null) {
                        options.resultsAdapter = ResultsList;

                        if (options.ajax != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                InfiniteScroll
                            );
                        }

                        if (options.placeholder != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                HidePlaceholder
                            );
                        }

                        if (options.selectOnClose) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                SelectOnClose
                            );
                        }
                    }

                    if (options.dropdownAdapter == null) {
                        if (options.multiple) {
                            options.dropdownAdapter = Dropdown;
                        } else {
                            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

                            options.dropdownAdapter = SearchableDropdown;
                        }

                        if (options.minimumResultsForSearch !== 0) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                MinimumResultsForSearch
                            );
                        }

                        if (options.closeOnSelect) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                CloseOnSelect
                            );
                        }

                        if (
                            options.dropdownCssClass != null ||
                            options.dropdownCss != null ||
                            options.adaptDropdownCssClass != null
                        ) {
                            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                DropdownCSS
                            );
                        }

                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            AttachBody
                        );
                    }

                    if (options.selectionAdapter == null) {
                        if (options.multiple) {
                            options.selectionAdapter = MultipleSelection;
                        } else {
                            options.selectionAdapter = SingleSelection;
                        }

                        // Add the placeholder mixin if a placeholder was specified
                        if (options.placeholder != null) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                Placeholder
                            );
                        }

                        if (options.allowClear) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                AllowClear
                            );
                        }

                        if (options.multiple) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                SelectionSearch
                            );
                        }

                        if (
                            options.containerCssClass != null ||
                            options.containerCss != null ||
                            options.adaptContainerCssClass != null
                        ) {
                            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                ContainerCSS
                            );
                        }

                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            EventRelay
                        );
                    }

                    if (typeof options.language === 'string') {
                        // Check if the language is specified with a region
                        if (options.language.indexOf('-') > 0) {
                            // Extract the region information if it is included
                            var languageParts = options.language.split('-');
                            var baseLanguage = languageParts[0];

                            options.language = [options.language, baseLanguage];
                        } else {
                            options.language = [options.language];
                        }
                    }

                    if ($.isArray(options.language)) {
                        var languages = new Translation();
                        options.language.push('en');

                        var languageNames = options.language;

                        for (var l = 0; l < languageNames.length; l++) {
                            var name = languageNames[l];
                            var language = {};

                            try {
                                // Try to load it with the original name
                                language = Translation.loadPath(name);
                            } catch (e) {
                                try {
                                    // If we couldn't load it, check if it wasn't the full path
                                    name = this.defaults.amdLanguageBase + name;
                                    language = Translation.loadPath(name);
                                } catch (ex) {
                                    // The translation could not be loaded at all. Sometimes this is
                                    // because of a configuration problem, other times this can be
                                    // because of how Select2 helps load all possible translation files.
                                    if (options.debug && window.console && console.warn) {
                                        console.warn(
                                            'Select2: The language file for "' + name + '" could not be ' +
                                            'automatically loaded. A fallback will be used instead.'
                                        );
                                    }

                                    continue;
                                }
                            }

                            languages.extend(language);
                        }

                        options.translations = languages;
                    } else {
                        var baseTranslation = Translation.loadPath(
                            this.defaults.amdLanguageBase + 'en'
                        );
                        var customTranslation = new Translation(options.language);

                        customTranslation.extend(baseTranslation);

                        options.translations = customTranslation;
                    }

                    return options;
                };

                Defaults.prototype.reset = function () {
                    function stripDiacritics (text) {
                        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                        function match(a) {
                            return DIACRITICS[a] || a;
                        }

                        return text.replace(/[^\u0000-\u007E]/g, match);
                    }

                    function matcher (params, data) {
                        // Always return the object if there is nothing to compare
                        if ($.trim(params.term) === '') {
                            return data;
                        }

                        // Do a recursive check for options with children
                        if (data.children && data.children.length > 0) {
                            // Clone the data object if there are children
                            // This is required as we modify the object to remove any non-matches
                            var match = $.extend(true, {}, data);

                            // Check each child of the option
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                var matches = matcher(params, child);

                                // If there wasn't a match, remove the object in the array
                                if (matches == null) {
                                    match.children.splice(c, 1);
                                }
                            }

                            // If any children matched, return the new object
                            if (match.children.length > 0) {
                                return match;
                            }

                            // If there were no matching children, check just the plain object
                            return matcher(params, match);
                        }

                        var original = stripDiacritics(data.text).toUpperCase();
                        var term = stripDiacritics(params.term).toUpperCase();

                        // Check if the text contains the term
                        if (original.indexOf(term) > -1) {
                            return data;
                        }

                        // If it doesn't contain the term, don't return anything
                        return null;
                    }

                    this.defaults = {
                        amdBase: './',
                        amdLanguageBase: './i18n/',
                        closeOnSelect: true,
                        debug: false,
                        dropdownAutoWidth: false,
                        escapeMarkup: Utils.escapeMarkup,
                        language: EnglishTranslation,
                        matcher: matcher,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: false,
                        sorter: function (data) {
                            return data;
                        },
                        templateResult: function (result) {
                            return result.text;
                        },
                        templateSelection: function (selection) {
                            return selection.text;
                        },
                        theme: 'default',
                        width: 'resolve'
                    };
                };

                Defaults.prototype.set = function (key, value) {
                    var camelKey = $.camelCase(key);

                    var data = {};
                    data[camelKey] = value;

                    var convertedData = Utils._convertData(data);

                    $.extend(this.defaults, convertedData);
                };

                var defaults = new Defaults();

                return defaults;
            });

            S2.define('select2/options',[
                'require',
                'jquery',
                './defaults',
                './utils'
            ], function (require, $, Defaults, Utils) {
                function Options (options, $element) {
                    this.options = options;

                    if ($element != null) {
                        this.fromElement($element);
                    }

                    this.options = Defaults.apply(this.options);

                    if ($element && $element.is('input')) {
                        var InputCompat = require(this.get('amdBase') + 'compat/inputData');

                        this.options.dataAdapter = Utils.Decorate(
                            this.options.dataAdapter,
                            InputCompat
                        );
                    }
                }

                Options.prototype.fromElement = function ($e) {
                    var excludedData = ['select2'];

                    if (this.options.multiple == null) {
                        this.options.multiple = $e.prop('multiple');
                    }

                    if (this.options.disabled == null) {
                        this.options.disabled = $e.prop('disabled');
                    }

                    if (this.options.language == null) {
                        if ($e.prop('lang')) {
                            this.options.language = $e.prop('lang').toLowerCase();
                        } else if ($e.closest('[lang]').prop('lang')) {
                            this.options.language = $e.closest('[lang]').prop('lang');
                        }
                    }

                    if (this.options.dir == null) {
                        if ($e.prop('dir')) {
                            this.options.dir = $e.prop('dir');
                        } else if ($e.closest('[dir]').prop('dir')) {
                            this.options.dir = $e.closest('[dir]').prop('dir');
                        } else {
                            this.options.dir = 'ltr';
                        }
                    }

                    $e.prop('disabled', this.options.disabled);
                    $e.prop('multiple', this.options.multiple);

                    if ($e.data('select2Tags')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-select2-tags` attribute has been changed to ' +
                                'use the `data-data` and `data-tags="true"` attributes and will be ' +
                                'removed in future versions of Select2.'
                            );
                        }

                        $e.data('data', $e.data('select2Tags'));
                        $e.data('tags', true);
                    }

                    if ($e.data('ajaxUrl')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-ajax-url` attribute has been changed to ' +
                                '`data-ajax--url` and support for the old attribute will be removed' +
                                ' in future versions of Select2.'
                            );
                        }

                        $e.attr('ajax--url', $e.data('ajaxUrl'));
                        $e.data('ajax--url', $e.data('ajaxUrl'));
                    }

                    var dataset = {};

                    // Prefer the element's `dataset` attribute if it exists
                    // jQuery 1.x does not correctly handle data attributes with multiple dashes
                    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
                        dataset = $.extend(true, {}, $e[0].dataset, $e.data());
                    } else {
                        dataset = $e.data();
                    }

                    var data = $.extend(true, {}, dataset);

                    data = Utils._convertData(data);

                    for (var key in data) {
                        if ($.inArray(key, excludedData) > -1) {
                            continue;
                        }

                        if ($.isPlainObject(this.options[key])) {
                            $.extend(this.options[key], data[key]);
                        } else {
                            this.options[key] = data[key];
                        }
                    }

                    return this;
                };

                Options.prototype.get = function (key) {
                    return this.options[key];
                };

                Options.prototype.set = function (key, val) {
                    this.options[key] = val;
                };

                return Options;
            });

            S2.define('select2/core',[
                'jquery',
                './options',
                './utils',
                './keys'
            ], function ($, Options, Utils, KEYS) {
                var Select2 = function ($element, options) {
                    if ($element.data('select2') != null) {
                        $element.data('select2').destroy();
                    }

                    this.$element = $element;

                    this.id = this._generateId($element);

                    options = options || {};

                    this.options = new Options(options, $element);

                    Select2.__super__.constructor.call(this);

                    // Set up the tabindex

                    var tabindex = $element.attr('tabindex') || 0;
                    $element.data('old-tabindex', tabindex);
                    $element.attr('tabindex', '-1');

                    // Set up containers and adapters

                    var DataAdapter = this.options.get('dataAdapter');
                    this.dataAdapter = new DataAdapter($element, this.options);

                    var $container = this.render();

                    this._placeContainer($container);

                    var SelectionAdapter = this.options.get('selectionAdapter');
                    this.selection = new SelectionAdapter($element, this.options);
                    this.$selection = this.selection.render();

                    this.selection.position(this.$selection, $container);

                    var DropdownAdapter = this.options.get('dropdownAdapter');
                    this.dropdown = new DropdownAdapter($element, this.options);
                    this.$dropdown = this.dropdown.render();

                    this.dropdown.position(this.$dropdown, $container);

                    var ResultsAdapter = this.options.get('resultsAdapter');
                    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
                    this.$results = this.results.render();

                    this.results.position(this.$results, this.$dropdown);

                    // Bind events

                    var self = this;

                    // Bind the container to all of the adapters
                    this._bindAdapters();

                    // Register any DOM event handlers
                    this._registerDomEvents();

                    // Register any internal event handlers
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();

                    // Set the initial state
                    this.dataAdapter.current(function (initialData) {
                        self.trigger('selection:update', {
                            data: initialData
                        });
                    });

                    // Hide the original select
                    $element.addClass('select2-hidden-accessible');
                    $element.attr('aria-hidden', 'true');

                    // Synchronize any monitored attributes
                    this._syncAttributes();

                    $element.data('select2', this);
                };

                Utils.Extend(Select2, Utils.Observable);

                Select2.prototype._generateId = function ($element) {
                    var id = '';

                    if ($element.attr('id') != null) {
                        id = $element.attr('id');
                    } else if ($element.attr('name') != null) {
                        id = $element.attr('name') + '-' + Utils.generateChars(2);
                    } else {
                        id = Utils.generateChars(4);
                    }

                    id = id.replace(/(:|\.|\[|\]|,)/g, '');
                    id = 'select2-' + id;

                    return id;
                };

                Select2.prototype._placeContainer = function ($container) {
                    $container.insertAfter(this.$element);

                    var width = this._resolveWidth(this.$element, this.options.get('width'));

                    if (width != null) {
                        $container.css('width', width);
                    }
                };

                Select2.prototype._resolveWidth = function ($element, method) {
                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

                    if (method == 'resolve') {
                        var styleWidth = this._resolveWidth($element, 'style');

                        if (styleWidth != null) {
                            return styleWidth;
                        }

                        return this._resolveWidth($element, 'element');
                    }

                    if (method == 'element') {
                        var elementWidth = $element.outerWidth(false);

                        if (elementWidth <= 0) {
                            return 'auto';
                        }

                        return elementWidth + 'px';
                    }

                    if (method == 'style') {
                        var style = $element.attr('style');

                        if (typeof(style) !== 'string') {
                            return null;
                        }

                        var attrs = style.split(';');

                        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                            var attr = attrs[i].replace(/\s/g, '');
                            var matches = attr.match(WIDTH);

                            if (matches !== null && matches.length >= 1) {
                                return matches[1];
                            }
                        }

                        return null;
                    }

                    return method;
                };

                Select2.prototype._bindAdapters = function () {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);

                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container);
                };

                Select2.prototype._registerDomEvents = function () {
                    var self = this;

                    this.$element.on('change.select2', function () {
                        self.dataAdapter.current(function (data) {
                            self.trigger('selection:update', {
                                data: data
                            });
                        });
                    });

                    this.$element.on('focus.select2', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this._syncA = Utils.bind(this._syncAttributes, this);
                    this._syncS = Utils.bind(this._syncSubtree, this);

                    if (this.$element[0].attachEvent) {
                        this.$element[0].attachEvent('onpropertychange', this._syncA);
                    }

                    var observer = window.MutationObserver ||
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver
                    ;

                    if (observer != null) {
                        this._observer = new observer(function (mutations) {
                            $.each(mutations, self._syncA);
                            $.each(mutations, self._syncS);
                        });
                        this._observer.observe(this.$element[0], {
                            attributes: true,
                            childList: true,
                            subtree: false
                        });
                    } else if (this.$element[0].addEventListener) {
                        this.$element[0].addEventListener(
                            'DOMAttrModified',
                            self._syncA,
                            false
                        );
                        this.$element[0].addEventListener(
                            'DOMNodeInserted',
                            self._syncS,
                            false
                        );
                        this.$element[0].addEventListener(
                            'DOMNodeRemoved',
                            self._syncS,
                            false
                        );
                    }
                };

                Select2.prototype._registerDataEvents = function () {
                    var self = this;

                    this.dataAdapter.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerSelectionEvents = function () {
                    var self = this;
                    var nonRelayEvents = ['toggle', 'focus'];

                    this.selection.on('toggle', function () {
                        self.toggleDropdown();
                    });

                    this.selection.on('focus', function (params) {
                        self.focus(params);
                    });

                    this.selection.on('*', function (name, params) {
                        if ($.inArray(name, nonRelayEvents) !== -1) {
                            return;
                        }

                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerDropdownEvents = function () {
                    var self = this;

                    this.dropdown.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerResultsEvents = function () {
                    var self = this;

                    this.results.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerEvents = function () {
                    var self = this;

                    this.on('open', function () {
                        self.$container.addClass('select2-container--open');
                    });

                    this.on('close', function () {
                        self.$container.removeClass('select2-container--open');
                    });

                    this.on('enable', function () {
                        self.$container.removeClass('select2-container--disabled');
                    });

                    this.on('disable', function () {
                        self.$container.addClass('select2-container--disabled');
                    });

                    this.on('blur', function () {
                        self.$container.removeClass('select2-container--focus');
                    });

                    this.on('query', function (params) {
                        if (!self.isOpen()) {
                            self.trigger('open', {});
                        }

                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:all', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('query:append', function (params) {
                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:append', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('keypress', function (evt) {
                        var key = evt.which;

                        if (self.isOpen()) {
                            if (key === KEYS.ESC || key === KEYS.TAB ||
                                (key === KEYS.UP && evt.altKey)) {
                                self.close();

                                evt.preventDefault();
                            } else if (key === KEYS.ENTER) {
                                self.trigger('results:select', {});

                                evt.preventDefault();
                            } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
                                self.trigger('results:toggle', {});

                                evt.preventDefault();
                            } else if (key === KEYS.UP) {
                                self.trigger('results:previous', {});

                                evt.preventDefault();
                            } else if (key === KEYS.DOWN) {
                                self.trigger('results:next', {});

                                evt.preventDefault();
                            }
                        } else {
                            if (key === KEYS.ENTER || key === KEYS.SPACE ||
                                (key === KEYS.DOWN && evt.altKey)) {
                                self.open();

                                evt.preventDefault();
                            }
                        }
                    });
                };

                Select2.prototype._syncAttributes = function () {
                    this.options.set('disabled', this.$element.prop('disabled'));

                    if (this.options.get('disabled')) {
                        if (this.isOpen()) {
                            this.close();
                        }

                        this.trigger('disable', {});
                    } else {
                        this.trigger('enable', {});
                    }
                };

                Select2.prototype._syncSubtree = function (evt, mutations) {
                    var changed = false;
                    var self = this;

                    // Ignore any mutation events raised for elements that aren't options or
                    // optgroups. This handles the case when the select element is destroyed
                    if (
                        evt && evt.target && (
                            evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
                        )
                    ) {
                        return;
                    }

                    if (!mutations) {
                        // If mutation events aren't supported, then we can only assume that the
                        // change affected the selections
                        changed = true;
                    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
                        for (var n = 0; n < mutations.addedNodes.length; n++) {
                            var node = mutations.addedNodes[n];

                            if (node.selected) {
                                changed = true;
                            }
                        }
                    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
                        changed = true;
                    }

                    // Only re-pull the data if we think there is a change
                    if (changed) {
                        this.dataAdapter.current(function (currentData) {
                            self.trigger('selection:update', {
                                data: currentData
                            });
                        });
                    }
                };

                /**
                 * Override the trigger method to automatically trigger pre-events when
                 * there are events that can be prevented.
                 */
                Select2.prototype.trigger = function (name, args) {
                    var actualTrigger = Select2.__super__.trigger;
                    var preTriggerMap = {
                        'open': 'opening',
                        'close': 'closing',
                        'select': 'selecting',
                        'unselect': 'unselecting'
                    };

                    if (args === undefined) {
                        args = {};
                    }

                    if (name in preTriggerMap) {
                        var preTriggerName = preTriggerMap[name];
                        var preTriggerArgs = {
                            prevented: false,
                            name: name,
                            args: args
                        };

                        actualTrigger.call(this, preTriggerName, preTriggerArgs);

                        if (preTriggerArgs.prevented) {
                            args.prevented = true;

                            return;
                        }
                    }

                    actualTrigger.call(this, name, args);
                };

                Select2.prototype.toggleDropdown = function () {
                    if (this.options.get('disabled')) {
                        return;
                    }

                    if (this.isOpen()) {
                        this.close();
                    } else {
                        this.open();
                    }
                };

                Select2.prototype.open = function () {
                    if (this.isOpen()) {
                        return;
                    }

                    this.trigger('query', {});
                };

                Select2.prototype.close = function () {
                    if (!this.isOpen()) {
                        return;
                    }

                    this.trigger('close', {});
                };

                Select2.prototype.isOpen = function () {
                    return this.$container.hasClass('select2-container--open');
                };

                Select2.prototype.hasFocus = function () {
                    return this.$container.hasClass('select2-container--focus');
                };

                Select2.prototype.focus = function (data) {
                    // No need to re-trigger focus events if we are already focused
                    if (this.hasFocus()) {
                        return;
                    }

                    this.$container.addClass('select2-container--focus');
                    this.trigger('focus', {});
                };

                Select2.prototype.enable = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("enable")` method has been deprecated and will' +
                            ' be removed in later Select2 versions. Use $element.prop("disabled")' +
                            ' instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        args = [true];
                    }

                    var disabled = !args[0];

                    this.$element.prop('disabled', disabled);
                };

                Select2.prototype.data = function () {
                    if (this.options.get('debug') &&
                        arguments.length > 0 && window.console && console.warn) {
                        console.warn(
                            'Select2: Data can no longer be set using `select2("data")`. You ' +
                            'should consider setting the value instead using `$element.val()`.'
                        );
                    }

                    var data = [];

                    this.dataAdapter.current(function (currentData) {
                        data = currentData;
                    });

                    return data;
                };

                Select2.prototype.val = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("val")` method has been deprecated and will be' +
                            ' removed in later Select2 versions. Use $element.val() instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        return this.$element.val();
                    }

                    var newVal = args[0];

                    if ($.isArray(newVal)) {
                        newVal = $.map(newVal, function (obj) {
                            return obj.toString();
                        });
                    }

                    this.$element.val(newVal).trigger('change');
                };

                Select2.prototype.destroy = function () {
                    this.$container.remove();

                    if (this.$element[0].detachEvent) {
                        this.$element[0].detachEvent('onpropertychange', this._syncA);
                    }

                    if (this._observer != null) {
                        this._observer.disconnect();
                        this._observer = null;
                    } else if (this.$element[0].removeEventListener) {
                        this.$element[0]
                            .removeEventListener('DOMAttrModified', this._syncA, false);
                        this.$element[0]
                            .removeEventListener('DOMNodeInserted', this._syncS, false);
                        this.$element[0]
                            .removeEventListener('DOMNodeRemoved', this._syncS, false);
                    }

                    this._syncA = null;
                    this._syncS = null;

                    this.$element.off('.select2');
                    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

                    this.$element.removeClass('select2-hidden-accessible');
                    this.$element.attr('aria-hidden', 'false');
                    this.$element.removeData('select2');

                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();

                    this.dataAdapter = null;
                    this.selection = null;
                    this.dropdown = null;
                    this.results = null;
                };

                Select2.prototype.render = function () {
                    var $container = $(
                        '<span class="select2 select2-container">' +
                        '<span class="selection"></span>' +
                        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
                        '</span>'
                    );

                    $container.attr('dir', this.options.get('dir'));

                    this.$container = $container;

                    this.$container.addClass('select2-container--' + this.options.get('theme'));

                    $container.data('element', this.$element);

                    return $container;
                };

                return Select2;
            });

            S2.define('select2/compat/utils',[
                'jquery'
            ], function ($) {
                function syncCssClasses ($dest, $src, adapter) {
                    var classes, replacements = [], adapted;

                    classes = $.trim($dest.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Save all Select2 classes
                            if (this.indexOf('select2-') === 0) {
                                replacements.push(this);
                            }
                        });
                    }

                    classes = $.trim($src.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Only adapt non-Select2 classes
                            if (this.indexOf('select2-') !== 0) {
                                adapted = adapter(this);

                                if (adapted != null) {
                                    replacements.push(adapted);
                                }
                            }
                        });
                    }

                    $dest.attr('class', replacements.join(' '));
                }

                return {
                    syncCssClasses: syncCssClasses
                };
            });

            S2.define('select2/compat/containerCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _containerAdapter (clazz) {
                    return null;
                }

                function ContainerCSS () { }

                ContainerCSS.prototype.render = function (decorated) {
                    var $container = decorated.call(this);

                    var containerCssClass = this.options.get('containerCssClass') || '';

                    if ($.isFunction(containerCssClass)) {
                        containerCssClass = containerCssClass(this.$element);
                    }

                    var containerCssAdapter = this.options.get('adaptContainerCssClass');
                    containerCssAdapter = containerCssAdapter || _containerAdapter;

                    if (containerCssClass.indexOf(':all:') !== -1) {
                        containerCssClass = containerCssClass.replace(':all:', '');

                        var _cssAdapter = containerCssAdapter;

                        containerCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var containerCss = this.options.get('containerCss') || {};

                    if ($.isFunction(containerCss)) {
                        containerCss = containerCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

                    $container.css(containerCss);
                    $container.addClass(containerCssClass);

                    return $container;
                };

                return ContainerCSS;
            });

            S2.define('select2/compat/dropdownCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _dropdownAdapter (clazz) {
                    return null;
                }

                function DropdownCSS () { }

                DropdownCSS.prototype.render = function (decorated) {
                    var $dropdown = decorated.call(this);

                    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

                    if ($.isFunction(dropdownCssClass)) {
                        dropdownCssClass = dropdownCssClass(this.$element);
                    }

                    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
                    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

                    if (dropdownCssClass.indexOf(':all:') !== -1) {
                        dropdownCssClass = dropdownCssClass.replace(':all:', '');

                        var _cssAdapter = dropdownCssAdapter;

                        dropdownCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var dropdownCss = this.options.get('dropdownCss') || {};

                    if ($.isFunction(dropdownCss)) {
                        dropdownCss = dropdownCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

                    $dropdown.css(dropdownCss);
                    $dropdown.addClass(dropdownCssClass);

                    return $dropdown;
                };

                return DropdownCSS;
            });

            S2.define('select2/compat/initSelection',[
                'jquery'
            ], function ($) {
                function InitSelection (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `initSelection` option has been deprecated in favor' +
                            ' of a custom data adapter that overrides the `current` method. ' +
                            'This method is now called multiple times instead of a single ' +
                            'time when the instance is initialized. Support will be removed ' +
                            'for the `initSelection` option in future versions of Select2'
                        );
                    }

                    this.initSelection = options.get('initSelection');
                    this._isInitialized = false;

                    decorated.call(this, $element, options);
                }

                InitSelection.prototype.current = function (decorated, callback) {
                    var self = this;

                    if (this._isInitialized) {
                        decorated.call(this, callback);

                        return;
                    }

                    this.initSelection.call(null, this.$element, function (data) {
                        self._isInitialized = true;

                        if (!$.isArray(data)) {
                            data = [data];
                        }

                        callback(data);
                    });
                };

                return InitSelection;
            });

            S2.define('select2/compat/inputData',[
                'jquery'
            ], function ($) {
                function InputData (decorated, $element, options) {
                    this._currentData = [];
                    this._valueSeparator = options.get('valueSeparator') || ',';

                    if ($element.prop('type') === 'hidden') {
                        if (options.get('debug') && console && console.warn) {
                            console.warn(
                                'Select2: Using a hidden input with Select2 is no longer ' +
                                'supported and may stop working in the future. It is recommended ' +
                                'to use a `<select>` element instead.'
                            );
                        }
                    }

                    decorated.call(this, $element, options);
                }

                InputData.prototype.current = function (_, callback) {
                    function getSelected (data, selectedIds) {
                        var selected = [];

                        if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
                            data.selected = true;
                            selected.push(data);
                        } else {
                            data.selected = false;
                        }

                        if (data.children) {
                            selected.push.apply(selected, getSelected(data.children, selectedIds));
                        }

                        return selected;
                    }

                    var selected = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        selected.push.apply(
                            selected,
                            getSelected(
                                data,
                                this.$element.val().split(
                                    this._valueSeparator
                                )
                            )
                        );
                    }

                    callback(selected);
                };

                InputData.prototype.select = function (_, data) {
                    if (!this.options.get('multiple')) {
                        this.current(function (allData) {
                            $.map(allData, function (data) {
                                data.selected = false;
                            });
                        });

                        this.$element.val(data.id);
                        this.$element.trigger('change');
                    } else {
                        var value = this.$element.val();
                        value += this._valueSeparator + data.id;

                        this.$element.val(value);
                        this.$element.trigger('change');
                    }
                };

                InputData.prototype.unselect = function (_, data) {
                    var self = this;

                    data.selected = false;

                    this.current(function (allData) {
                        var values = [];

                        for (var d = 0; d < allData.length; d++) {
                            var item = allData[d];

                            if (data.id == item.id) {
                                continue;
                            }

                            values.push(item.id);
                        }

                        self.$element.val(values.join(self._valueSeparator));
                        self.$element.trigger('change');
                    });
                };

                InputData.prototype.query = function (_, params, callback) {
                    var results = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        var matches = this.matches(params, data);

                        if (matches !== null) {
                            results.push(matches);
                        }
                    }

                    callback({
                        results: results
                    });
                };

                InputData.prototype.addOptions = function (_, $options) {
                    var options = $.map($options, function ($option) {
                        return $.data($option[0], 'data');
                    });

                    this._currentData.push.apply(this._currentData, options);
                };

                return InputData;
            });

            S2.define('select2/compat/matcher',[
                'jquery'
            ], function ($) {
                function oldMatcher (matcher) {
                    function wrappedMatcher (params, data) {
                        var match = $.extend(true, {}, data);

                        if (params.term == null || $.trim(params.term) === '') {
                            return match;
                        }

                        if (data.children) {
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                // Check if the child object matches
                                // The old matcher returned a boolean true or false
                                var doesMatch = matcher(params.term, child.text, child);

                                // If the child didn't match, pop it off
                                if (!doesMatch) {
                                    match.children.splice(c, 1);
                                }
                            }

                            if (match.children.length > 0) {
                                return match;
                            }
                        }

                        if (matcher(params.term, data.text, data)) {
                            return match;
                        }

                        return null;
                    }

                    return wrappedMatcher;
                }

                return oldMatcher;
            });

            S2.define('select2/compat/query',[

            ], function () {
                function Query (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `query` option has been deprecated in favor of a ' +
                            'custom data adapter that overrides the `query` method. Support ' +
                            'will be removed for the `query` option in future versions of ' +
                            'Select2.'
                        );
                    }

                    decorated.call(this, $element, options);
                }

                Query.prototype.query = function (_, params, callback) {
                    params.callback = callback;

                    var query = this.options.get('query');

                    query.call(null, params);
                };

                return Query;
            });

            S2.define('select2/dropdown/attachContainer',[

            ], function () {
                function AttachContainer (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                AttachContainer.prototype.position =
                    function (decorated, $dropdown, $container) {
                        var $dropdownContainer = $container.find('.dropdown-wrapper');
                        $dropdownContainer.append($dropdown);

                        $dropdown.addClass('select2-dropdown--below');
                        $container.addClass('select2-container--below');
                    };

                return AttachContainer;
            });

            S2.define('select2/dropdown/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            S2.define('select2/selection/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$selection.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            /*!
             * jQuery Mousewheel 3.1.13
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             */

            (function (factory) {
                if ( typeof S2.define === 'function' && S2.define.amd ) {
                    // AMD. Register as an anonymous module.
                    S2.define('jquery-mousewheel',['jquery'], factory);
                } else if (typeof exports === 'object') {
                    // Node/CommonJS style for Browserify
                    module.exports = factory;
                } else {
                    // Browser globals
                    factory(jQuery);
                }
            }(function ($) {

                var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
                    toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                        ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                    slice  = Array.prototype.slice,
                    nullLowestDeltaTimeout, lowestDelta;

                if ( $.event.fixHooks ) {
                    for ( var i = toFix.length; i; ) {
                        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
                    }
                }

                var special = $.event.special.mousewheel = {
                    version: '3.1.12',

                    setup: function() {
                        if ( this.addEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.addEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = handler;
                        }
                        // Store the line height and page height for this particular element
                        $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
                        $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
                    },

                    teardown: function() {
                        if ( this.removeEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.removeEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = null;
                        }
                        // Clean up the data we added to the element
                        $.removeData(this, 'mousewheel-line-height');
                        $.removeData(this, 'mousewheel-page-height');
                    },

                    getLineHeight: function(elem) {
                        var $elem = $(elem),
                            $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
                        if (!$parent.length) {
                            $parent = $('body');
                        }
                        return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
                    },

                    getPageHeight: function(elem) {
                        return $(elem).height();
                    },

                    settings: {
                        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
                        normalizeOffset: true  // calls getBoundingClientRect for each event
                    }
                };

                $.fn.extend({
                    mousewheel: function(fn) {
                        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
                    },

                    unmousewheel: function(fn) {
                        return this.unbind('mousewheel', fn);
                    }
                });


                function handler(event) {
                    var orgEvent   = event || window.event,
                        args       = slice.call(arguments, 1),
                        delta      = 0,
                        deltaX     = 0,
                        deltaY     = 0,
                        absDelta   = 0,
                        offsetX    = 0,
                        offsetY    = 0;
                    event = $.event.fix(orgEvent);
                    event.type = 'mousewheel';

                    // Old school scrollwheel delta
                    if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
                    if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
                    if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
                    if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

                    // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
                    if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
                        deltaX = deltaY * -1;
                        deltaY = 0;
                    }

                    // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
                    delta = deltaY === 0 ? deltaX : deltaY;

                    // New school wheel delta (wheel event)
                    if ( 'deltaY' in orgEvent ) {
                        deltaY = orgEvent.deltaY * -1;
                        delta  = deltaY;
                    }
                    if ( 'deltaX' in orgEvent ) {
                        deltaX = orgEvent.deltaX;
                        if ( deltaY === 0 ) { delta  = deltaX * -1; }
                    }

                    // No change actually happened, no reason to go any further
                    if ( deltaY === 0 && deltaX === 0 ) { return; }

                    // Need to convert lines and pages to pixels if we aren't already in pixels
                    // There are three delta modes:
                    //   * deltaMode 0 is by pixels, nothing to do
                    //   * deltaMode 1 is by lines
                    //   * deltaMode 2 is by pages
                    if ( orgEvent.deltaMode === 1 ) {
                        var lineHeight = $.data(this, 'mousewheel-line-height');
                        delta  *= lineHeight;
                        deltaY *= lineHeight;
                        deltaX *= lineHeight;
                    } else if ( orgEvent.deltaMode === 2 ) {
                        var pageHeight = $.data(this, 'mousewheel-page-height');
                        delta  *= pageHeight;
                        deltaY *= pageHeight;
                        deltaX *= pageHeight;
                    }

                    // Store lowest absolute delta to normalize the delta values
                    absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

                    if ( !lowestDelta || absDelta < lowestDelta ) {
                        lowestDelta = absDelta;

                        // Adjust older deltas if necessary
                        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                            lowestDelta /= 40;
                        }
                    }

                    // Adjust older deltas if necessary
                    if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                        // Divide all the things by 40!
                        delta  /= 40;
                        deltaX /= 40;
                        deltaY /= 40;
                    }

                    // Get a whole, normalized value for the deltas
                    delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
                    deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
                    deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

                    // Normalise offsetX and offsetY properties
                    if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
                        var boundingRect = this.getBoundingClientRect();
                        offsetX = event.clientX - boundingRect.left;
                        offsetY = event.clientY - boundingRect.top;
                    }

                    // Add information to the event object
                    event.deltaX = deltaX;
                    event.deltaY = deltaY;
                    event.deltaFactor = lowestDelta;
                    event.offsetX = offsetX;
                    event.offsetY = offsetY;
                    // Go ahead and set deltaMode to 0 since we converted to pixels
                    // Although this is a little odd since we overwrite the deltaX/Y
                    // properties with normalized deltas.
                    event.deltaMode = 0;

                    // Add event and delta to the front of the arguments
                    args.unshift(event, delta, deltaX, deltaY);

                    // Clearout lowestDelta after sometime to better
                    // handle multiple device types that give different
                    // a different lowestDelta
                    // Ex: trackpad = 3 and mouse wheel = 120
                    if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
                    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

                    return ($.event.dispatch || $.event.handle).apply(this, args);
                }

                function nullLowestDelta() {
                    lowestDelta = null;
                }

                function shouldAdjustOldDeltas(orgEvent, absDelta) {
                    // If this is an older event and the delta is divisable by 120,
                    // then we are assuming that the browser is treating this as an
                    // older mouse wheel event and that we should divide the deltas
                    // by 40 to try and get a more usable deltaFactor.
                    // Side note, this actually impacts the reported scroll distance
                    // in older browsers and can cause scrolling to be slower than native.
                    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
                    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
                }

            }));

            S2.define('jquery.select2',[
                'jquery',
                'jquery-mousewheel',

                './select2/core',
                './select2/defaults'
            ], function ($, _, Select2, Defaults) {
                if ($.fn.select2 == null) {
                    // All methods that should return the element
                    var thisMethods = ['open', 'close', 'destroy'];

                    $.fn.select2 = function (options) {
                        options = options || {};

                        if (typeof options === 'object') {
                            this.each(function () {
                                var instanceOptions = $.extend(true, {}, options);

                                var instance = new Select2($(this), instanceOptions);
                            });

                            return this;
                        } else if (typeof options === 'string') {
                            var ret;
                            var args = Array.prototype.slice.call(arguments, 1);

                            this.each(function () {
                                var instance = $(this).data('select2');

                                if (instance == null && window.console && console.error) {
                                    console.error(
                                        'The select2(\'' + options + '\') method was called on an ' +
                                        'element that is not using Select2.'
                                    );
                                }

                                ret = instance[options].apply(instance, args);
                            });

                            // Check if we should be returning `this`
                            if ($.inArray(options, thisMethods) > -1) {
                                return this;
                            }

                            return ret;
                        } else {
                            throw new Error('Invalid arguments for Select2: ' + options);
                        }
                    };
                }

                if ($.fn.select2.defaults == null) {
                    $.fn.select2.defaults = Defaults;
                }

                return Select2;
            });

            // Return the AMD loader configuration so it can be used outside of this file
            return {
                define: S2.define,
                require: S2.require
            };
        }());

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
}));
/**********************
 Velocity UI Pack
 **********************/

/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

;(function (factory) {
    /* CommonJS module. */
    if (typeof require === "function" && typeof exports === "object" ) {
        module.exports = factory();
        /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define([ "velocity" ], factory);
        /* Browser globals. */
    } else {
        factory();
    }
}(function() {
    return function (global, window, document, undefined) {

        /*************
         Checks
         *************/

        if (!global.Velocity || !global.Velocity.Utilities) {
            window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
            return;
        } else {
            var Velocity = global.Velocity,
                $ = Velocity.Utilities;
        }

        var velocityVersion = Velocity.version,
            requiredVersion = { major: 1, minor: 1, patch: 0 };

        function greaterSemver (primary, secondary) {
            var versionInts = [];

            if (!primary || !secondary) { return false; }

            $.each([ primary, secondary ], function(i, versionObject) {
                var versionIntsComponents = [];

                $.each(versionObject, function(component, value) {
                    while (value.toString().length < 5) {
                        value = "0" + value;
                    }
                    versionIntsComponents.push(value);
                });

                versionInts.push(versionIntsComponents.join(""))
            });

            return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
        }

        if (greaterSemver(requiredVersion, velocityVersion)){
            var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            alert(abortError);
            throw new Error(abortError);
        }

        /************************
         Effect Registration
         ************************/

        /* Note: RegisterUI is a legacy name. */
        Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
            /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
            function animateParentHeight (elements, direction, totalDuration, stagger) {
                var totalHeightDelta = 0,
                    parentNode;

                /* Sum the total height (including padding and margin) of all targeted elements. */
                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                    if (stagger) {
                        /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
                        totalDuration += i * stagger;
                    }

                    parentNode = element.parentNode;

                    $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                        totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
                    });
                });

                /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
                Velocity.animate(
                    parentNode,
                    { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
                    { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
                );
            }

            /* Register a custom redirect for each effect. */
            Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
                var finalElement = (elementsIndex === elementsSize - 1);

                if (typeof properties.defaultDuration === "function") {
                    properties.defaultDuration = properties.defaultDuration.call(elements, elements);
                } else {
                    properties.defaultDuration = parseFloat(properties.defaultDuration);
                }

                /* Iterate through each effect's call array. */
                for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
                    var call = properties.calls[callIndex],
                        propertyMap = call[0],
                        redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),
                        durationPercentage = call[1],
                        callOptions = call[2] || {},
                        opts = {};

                    /* Assign the whitelisted per-call options. */
                    opts.duration = redirectDuration * (durationPercentage || 1);
                    opts.queue = redirectOptions.queue || "";
                    opts.easing = callOptions.easing || "ease";
                    opts.delay = parseFloat(callOptions.delay) || 0;
                    opts._cacheValues = callOptions._cacheValues || true;

                    /* Special processing for the first effect call. */
                    if (callIndex === 0) {
                        /* If a delay was passed into the redirect, combine it with the first call's delay. */
                        opts.delay += (parseFloat(redirectOptions.delay) || 0);

                        if (elementsIndex === 0) {
                            opts.begin = function() {
                                /* Only trigger a begin callback on the first effect call with the first element in the set. */
                                redirectOptions.begin && redirectOptions.begin.call(elements, elements);

                                var direction = effectName.match(/(In|Out)$/);

                                /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                                 and the first RAF tick. */
                                if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
                                    $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                        Velocity.CSS.setPropertyValue(element, "opacity", 0);
                                    });
                                }

                                /* Only trigger animateParentHeight() if we're using an In/Out transition. */
                                if (redirectOptions.animateParentHeight && direction) {
                                    animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
                                }
                            }
                        }

                        /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                        if (redirectOptions.display !== null) {
                            if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
                                opts.display = redirectOptions.display;
                            } else if (/In$/.test(effectName)) {
                                /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                                var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
                                opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
                            }
                        }

                        if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
                            opts.visibility = redirectOptions.visibility;
                        }
                    }

                    /* Special processing for the last effect call. */
                    if (callIndex === properties.calls.length - 1) {
                        /* Append promise resolving onto the user's redirect callback. */
                        function injectFinalCallbacks () {
                            if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                    Velocity.CSS.setPropertyValue(element, "display", "none");
                                });
                            }

                            redirectOptions.complete && redirectOptions.complete.call(elements, elements);

                            if (promiseData) {
                                promiseData.resolver(elements || element);
                            }
                        }

                        opts.complete = function() {
                            if (properties.reset) {
                                for (var resetProperty in properties.reset) {
                                    var resetValue = properties.reset[resetProperty];

                                    /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                     immediately and DOM querying is avoided (via forcefeeding). */
                                    /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
                                    if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
                                        properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                    }
                                }

                                /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                                var resetOptions = { duration: 0, queue: false };

                                /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                                if (finalElement) {
                                    resetOptions.complete = injectFinalCallbacks;
                                }

                                Velocity.animate(element, properties.reset, resetOptions);
                                /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                            } else if (finalElement) {
                                injectFinalCallbacks();
                            }
                        };

                        if (redirectOptions.visibility === "hidden") {
                            opts.visibility = redirectOptions.visibility;
                        }
                    }

                    Velocity.animate(element, propertyMap, opts);
                }
            };

            /* Return the Velocity object so that RegisterUI calls can be chained. */
            return Velocity;
        };

        /*********************
         Packaged Effects
         *********************/

        /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
        /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
        Velocity.RegisterEffect.packagedEffects =
        {
            /* Animate.css */
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [ { translateY: -30 }, 0.25 ],
                    [ { translateY: 0 }, 0.125 ],
                    [ { translateY: -15 }, 0.125 ],
                    [ { translateY: 0 }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 0 }, 0.125 ]
                ]
            },
            /* Animate.css */
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [ { rotateZ: 15 }, 0.20 ],
                    [ { rotateZ: -10 }, 0.20 ],
                    [ { rotateZ: 5 }, 0.20 ],
                    [ { rotateZ: -5 }, 0.20 ],
                    [ { rotateZ: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "callout.tada": {
                defaultDuration: 1000,
                calls: [
                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 1, 0 ] } ]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 0, 1 ] } ]
                ]
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
                    [ { opacity: 1, rotateY: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
                    [ { opacity: 0, rotateY: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
                    [ { opacity: 1, rotateX: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
                    [ { opacity: 0, rotateX: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Magic.css */
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: 10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceUpOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: 20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: -10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceDownOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: -20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceLeftIn": {
                defaultDuration: 350,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceLeftOut": {
                defaultDuration: 350,
                calls: [
                    [ { translateX: 30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            /* Animate.css */
            "transition.bounceRightIn": {
                defaultDuration: 350,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceRightOut": {
                defaultDuration: 350,
                calls: [
                    [ { translateX: -30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            /* Magic.css */
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            }
        };

        /* Register the packaged effects. */
        for (var effectName in Velocity.RegisterEffect.packagedEffects) {
            Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
        }

        /*********************
         Sequence Running
         **********************/

        /* Note: Sequence calls must use Velocity's single-object arguments syntax. */
        Velocity.RunSequence = function (originalSequence) {
            var sequence = $.extend(true, [], originalSequence);

            if (sequence.length > 1) {
                $.each(sequence.reverse(), function(i, currentCall) {
                    var nextCall = sequence[i + 1];

                    if (nextCall) {
                        /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
                         in the previous call's begin callback. Otherwise, chained calls are normally triggered
                         in the previous call's complete callback. */
                        var currentCallOptions = currentCall.o || currentCall.options,
                            nextCallOptions = nextCall.o || nextCall.options;

                        var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
                            callbackOriginal = nextCallOptions && nextCallOptions[timing],
                            options = {};

                        options[timing] = function() {
                            var nextCallElements = nextCall.e || nextCall.elements;
                            var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;

                            callbackOriginal && callbackOriginal.call(elements, elements);
                            Velocity(currentCall);
                        }

                        if (nextCall.o) {
                            nextCall.o = $.extend({}, nextCallOptions, options);
                        } else {
                            nextCall.options = $.extend({}, nextCallOptions, options);
                        }
                    }
                });

                sequence.reverse();
            }

            Velocity(sequence[0]);
        };
    }((window.jQuery || window.Zepto || window), window, document);
}));
/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto)
/*jshint undef: true, unused:true, browser:true */
/*global jQuery: true, tinycolor: false */

/*!=========================================================================
 *  jQuery Color Picker Sliders
 *  v4.1.7
 *
 *  An advanced responsive color selector with color swatches and support for
 *  human perceived lightness. Works in all modern browsers and on touch devices.
 *
 *      https://github.com/istvan-ujjmeszaros/jquery-colorpickersliders
 *      http://virtuosoft.eu/code/jquery-colorpickersliders/
 *
 *  Copyright 2013 István Ujj-Mészáros
 *
 *  Thanks for the contributors:
 *      imaguiraga - https://github.com/imaguiraga
 *      balmasich - https://github.com/balmasich
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  Requirements:
 *
 *      TinyColor: https://github.com/bgrins/TinyColor
 *
 *  Using color math algorithms from EasyRGB Web site:
 *      http://www.easyrgb.com/index.php?X=MATH
 * ====================================================================== */

;(function($) {
    "use strict";

    $.fn.ColorPickerSliders = function(options) {

        return this.each(function() {

            var alreadyinitialized = false,
                    settings,
                    triggerelement = $(this),
                    triggerelementisinput = triggerelement.is("input"),
                    container,
                    elements,
                    swatches,
                    rendermode = false,
                    MAXLIGHT = 101, // 101 needed for bright colors (maybe due to rounding errors)
                    dragTarget = false,
                    lastUpdateTime = 0,
                    color = {
                        tiny: null,
                        hsla: null,
                        rgba: null,
                        cielch: null
                    },
            MAXVALIDCHROMA = 144;   // maximum valid chroma value found convertible to rgb (blue)

            init();

            function init() {
                if (alreadyinitialized) {
                    return;
                }

                alreadyinitialized = true;

                rendermode = $.fn.ColorPickerSliders.detectWhichGradientIsSupported();

                if (rendermode === "filter") {
                    rendermode = false;
                }

                if (!rendermode && $.fn.ColorPickerSliders.svgSupported()) {
                    rendermode = "svg";
                }

                _initSettings();

                // force preview when browser doesn't support css gradients
                if ((!settings.order.hasOwnProperty('preview') || settings.order.preview === false) && !rendermode) {
                    settings.order.preview = 10;
                }

                _buildHtml();
                _initElements();

                if (triggerelementisinput) {
                    color.tiny = tinycolor(triggerelement.val());

                    if (!color.tiny.format) {
                        color.tiny = tinycolor(settings.color);
                    }
                }
                else {
                    color.tiny = tinycolor(settings.color);
                }

                color.hsla = color.tiny.toHsl();
                color.rgba = color.tiny.toRgb();
                color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                _renderSwatches();
                _bindEvents();

                _updateAllElements();
            }

            function updateColor(newcolor, disableinputupdate) {
                var updatedcolor = tinycolor(newcolor);

                if (updatedcolor.format) {
                    container.removeClass("cp-unconvertible-cie-color");

                    color.tiny = updatedcolor;
                    color.hsla = updatedcolor.toHsl();
                    color.rgba = updatedcolor.toRgb();
                    color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                    _updateAllElements(disableinputupdate);

                    return true;
                }
                else {
                    return false;
                }
            }

            function showPopup() {
                container.data("justshown", true);

                $('.cp-container.cp-popup').hide();

                var viewportwidth = $(window).width(),
                        offset = triggerelement.offset(),
                        popuporiginalwidth;

                popuporiginalwidth = container.data('popup-original-width');

                if (typeof popuporiginalwidth === "undefined") {
                    popuporiginalwidth = container.outerWidth();
                    container.data('popup-original-width', popuporiginalwidth);
                }

                if (offset.left + popuporiginalwidth + 12 <= viewportwidth) {
                    container.css('left', offset.left).width(popuporiginalwidth);
                }
                else if (popuporiginalwidth <= viewportwidth) {
                    container.css('left', viewportwidth - popuporiginalwidth - 12).width(popuporiginalwidth);
                }
                else {
                    container.css('left', 0).width(viewportwidth - 12);
                }

                container.css('top', offset.top + triggerelement.outerHeight()).show();
            }

            function hidePopup() {
                container.hide();
            }

            function _initSettings() {
                settings = $.extend({
                    color: 'hsl(342, 52%, 70%)',
                    preventtouchkeyboardonshow: true,
                    swatches: ['FFFFFF', 'C0C0C0', '808080', '000000', 'FF0000', '800000', 'FFFF00', '808000', '00FF00', '008000', '00FFFF', '008080', '0000FF', '000080', 'FF00FF', '800080'],
                    customswatches: 'colorpickkersliders', // false or a grop name
                    connectedinput: false, // can be a jquery object or a selector
                    flat: false,
                    disableautopopup: false,
                    updateinterval: 30, // update interval of the sliders while in drag (ms)
                    previewontriggerelement: true,
                    previewcontrasttreshold: 15,
                    previewformat: 'rgb', // rgb/hsl/hex
                    erroneousciecolormarkers: true,
                    invalidcolorsopacity: 1, // everything below 1 causes slightly slower responses
                    finercierangeedges: true, // can be disabled for faster responses
                    titleswatchesadd: "Add color to swatches",
                    titleswatchesremove: "Remove color from swatches",
                    titleswatchesreset: "Reset to default swatches",
                    order: {},
                    labels: {},
                    onchange: function() {
                    }
                }, options);

                if (options.hasOwnProperty('order')) {
                    settings.order = $.extend({
                        opacity: false,
                        hsl: false,
                        rgb: false,
                        cie: false,
                        preview: false
                    }, options.order);
                }
                else {
                    settings.order = {
                        opacity: 0,
                        hsl: 1,
                        rgb: 2,
                        cie: 3, // cie sliders can increase response time of all sliders!
                        preview: 4
                    };
                }

                if (!options.hasOwnProperty('labels')) {
                    options.labels = {};
                }

                settings.labels = $.extend({
                    hslhue: 'HSL-Hue',
                    hslsaturation: 'HSL-Saturation',
                    hsllightness: 'HSL-Lightness',
                    rgbred: 'RGB-Red',
                    rgbgreen: 'RGB-Green',
                    rgbblue: 'RGB-Blue',
                    cielightness: 'CIE-Lightness',
                    ciechroma: 'CIE-Chroma',
                    ciehue: 'CIE-hue',
                    opacity: 'Opacity',
                    preview: 'Preview'
                }, options.labels);
            }

            function _buildHtml() {
                var sliders = [],
                        color_picker_html = '';

                if (settings.order.opacity !== false) {
                    sliders[settings.order.opacity] = '<div class="cp-slider cp-opacity cp-transparency"><span>' + settings.labels.opacity + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.hsl !== false) {
                    sliders[settings.order.hsl] = '<div class="cp-slider cp-hslhue cp-transparency"><span>' + settings.labels.hslhue + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hslsaturation cp-transparency"><span>' + settings.labels.hslsaturation + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hsllightness cp-transparency"><span>' + settings.labels.hsllightness + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.rgb !== false) {
                    sliders[settings.order.rgb] = '<div class="cp-slider cp-rgbred cp-transparency"><span>' + settings.labels.rgbred + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbgreen cp-transparency"><span>' + settings.labels.rgbgreen + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbblue cp-transparency"><span>' + settings.labels.rgbblue + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.cie !== false) {
                    sliders[settings.order.cie] = '<div class="cp-slider cp-cielightness cp-transparency"><span>' + settings.labels.cielightness + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciechroma cp-transparency"><span>' + settings.labels.ciechroma + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciehue cp-transparency"><span>' + settings.labels.ciehue + '</span><div class="cp-marker"></div></div>';
                }

                if (settings.order.preview !== false) {
                    sliders[settings.order.preview] = '<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>';
                }

                color_picker_html += '<div class="cp-sliders">';

                for (var i = 0; i < sliders.length; i++) {
                    if (typeof sliders[i] === "undefined") {
                        continue;
                    }

                    color_picker_html += sliders[i];
                }

                color_picker_html += '</div>';

                if (settings.swatches) {
                    color_picker_html += '<div class="cp-swatches"><button type="button" class="add" title="' + settings.titleswatchesadd + '"></button><button type="button" class="remove" title="' + settings.titleswatchesremove + '"></button><button type="button" class="reset" title="' + settings.titleswatchesreset + '"></button><ul></ul><div style="clear:both"></div></div>';
                }

                if (settings.flat) {
                    if (triggerelementisinput) {
                        container = $('<div class="cp-container"></div>').insertAfter(triggerelement);
                    }
                    else {
                        container = $('<div class="cp-container"></div>');
                        triggerelement.append(container);
                    }
                }
                else {
                    container = $('<div class="cp-container"></div>').appendTo('body');
                }

                container.append(color_picker_html);

                if (settings.connectedinput instanceof jQuery) {
                    settings.connectedinput.add(triggerelement);
                }
                else if (settings.connectedinput === false) {
                    settings.connectedinput = triggerelement;
                }
                else {
                    settings.connectedinput = $(settings.connectedinput).add(triggerelement);
                }

                if (!settings.flat) {
                    container.addClass('cp-popup');
                }
            }

            function _initElements() {
                elements = {
                    connectedinput: false,
                    actualswatch: false,
                    swatchescontainer: $(".cp-swatches", container),
                    swatches: $(".cp-swatches ul", container),
                    swatches_add: $(".cp-swatches button.add", container),
                    swatches_remove: $(".cp-swatches button.remove", container),
                    swatches_reset: $(".cp-swatches button.reset", container),
                    all_sliders: $(".cp-sliders, .cp-preview input", container),
                    sliders: {
                        hue: $(".cp-hslhue span", container),
                        hue_marker: $(".cp-hslhue .cp-marker", container),
                        saturation: $(".cp-hslsaturation span", container),
                        saturation_marker: $(".cp-hslsaturation .cp-marker", container),
                        lightness: $(".cp-hsllightness span", container),
                        lightness_marker: $(".cp-hsllightness .cp-marker", container),
                        opacity: $(".cp-opacity span", container),
                        opacity_marker: $(".cp-opacity .cp-marker", container),
                        red: $(".cp-rgbred span", container),
                        red_marker: $(".cp-rgbred .cp-marker", container),
                        green: $(".cp-rgbgreen span", container),
                        green_marker: $(".cp-rgbgreen .cp-marker", container),
                        blue: $(".cp-rgbblue span", container),
                        blue_marker: $(".cp-rgbblue .cp-marker", container),
                        cielightness: $(".cp-cielightness span", container),
                        cielightness_marker: $(".cp-cielightness .cp-marker", container),
                        ciechroma: $(".cp-ciechroma span", container),
                        ciechroma_marker: $(".cp-ciechroma .cp-marker", container),
                        ciehue: $(".cp-ciehue span", container),
                        ciehue_marker: $(".cp-ciehue .cp-marker", container),
                        preview: $(".cp-preview input", container)
                    }
                };

                if (settings.connectedinput) {
                    if (settings.connectedinput instanceof jQuery) {
                        elements.connectedinput = settings.connectedinput;
                    }
                    else {
                        elements.connectedinput = $(settings.connectedinput);
                    }
                }

                if (!settings.customswatches) {
                    elements.swatches_add.hide();
                    elements.swatches_remove.hide();
                    elements.swatches_reset.hide();
                }
            }

            function  destroyColorPicker() {
                if (container  instanceof jQuery) {
                    hidePopup();
                    container.remove();
                    alreadyinitialized = false;
                }
            }

            function  resetColorPicker() {
                init();
            }

            function _bindEvents() {
                triggerelement.on('colorpickersliders.destroy', function() {
                    destroyColorPicker();
                });

                triggerelement.on('colorpickersliders.reset', function() {
                    resetColorPicker();
                });

                triggerelement.on('colorpickersliders.updateColor', function(e, newcolor) {
                    updateColor(newcolor);
                });

                triggerelement.on('colorpickersliders.showPopup', function() {
                    showPopup();
                });

                triggerelement.on('colorpickersliders.hidePopup', function() {
                    hidePopup();
                });

                $(document).on("colorpickersliders.changeswatches", function() {
                    _renderSwatches();
                });

                if (!settings.flat && !settings.disableautopopup) {
                    // we need tabindex defined to be focusable
                    if (typeof triggerelement.attr("tabindex") === "undefined") {
                        triggerelement.attr("tabindex", -1);
                    }

                    if (settings.preventtouchkeyboardonshow) {
                        $(triggerelement).prop("readonly", true);

                        $(triggerelement).on("click", function(ev) {
                            if (container.data("justshown")) {
                                container.data("justshown", false);
                            }
                            else {
                                $(triggerelement).prop("readonly", false);
                                ev.stopPropagation();
                            }
                        });
                    }

                    // buttons doesn't get focus in webkit browsers
                    // https://bugs.webkit.org/show_bug.cgi?id=22261
                    // and only input and button are focusable on iPad
                    // so it is safer to register click on any other than inputs
                    if (!triggerelementisinput) {
                        $(triggerelement).on("click", function(ev) {
                            showPopup();

                            ev.stopPropagation();
                        });

                        $(document).on("click", function() {
                            hidePopup();
                        });
                    }

                    $(triggerelement).on("focus", function(ev) {
                        showPopup();

                        ev.stopPropagation();
                    });

                    $(triggerelement).on("blur", function(ev) {
                        hidePopup();

                        if (settings.preventtouchkeyboardonshow) {
                            $(triggerelement).prop("readonly", true);
                        }

                        ev.stopPropagation();
                    });

                    container.on("touchstart mousedown", function(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();

                        return false;
                    });
                }

                container.on("contextmenu", function(ev) {
                    ev.preventDefault();
                    return false;
                });

                elements.swatches.on("click", "li span", function(ev) {
                    var color = $(this).css("background-color");
                    updateColor(color);
                    ev.preventDefault();
                });

                elements.swatches_add.on("click", function(ev) {
                    _addCurrentColorToSwatches();
                    ev.preventDefault();
                });

                elements.swatches_remove.on("click", function(ev) {
                    _removeActualColorFromSwatches();
                    ev.preventDefault();
                });

                elements.swatches_reset.on("click", function(ev) {
                    _resetSwatches();
                    ev.preventDefault();
                });

                elements.sliders.hue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "hue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'h', 3.6 * percent);

                    _updateAllElements();
                });

                elements.sliders.saturation.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "saturation";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 's', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.lightness.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "lightness";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'l', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.opacity.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "opacity";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('hsla', 'a', percent / 100);

                    _updateAllElements();
                });

                elements.sliders.red.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "red";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'r', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.green.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "green";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'g', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.blue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "blue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('rgba', 'b', 2.55 * percent);

                    _updateAllElements();
                });

                elements.sliders.cielightness.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "cielightness";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);

                    _updateAllElements();
                });

                elements.sliders.ciechroma.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "ciechroma";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);

                    _updateAllElements();
                });

                elements.sliders.ciehue.parent().on("touchstart mousedown", function(ev) {
                    ev.preventDefault();

                    if (ev.which > 1) {
                        return;
                    }

                    dragTarget = "ciehue";

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    _updateColorsProperty('cielch', 'h', 3.6 * percent);

                    _updateAllElements();
                });

                elements.sliders.preview.on("click", function() {
                    this.select();
                });

                $(document).on("touchmove mousemove", function(ev) {
                    if (!dragTarget) {
                        return;
                    }

                    var percent = _updateMarkerPosition(dragTarget, ev);

                    switch (dragTarget) {
                        case "hue":
                            _updateColorsProperty('hsla', 'h', 3.6 * percent);
                            break;
                        case "saturation":
                            _updateColorsProperty('hsla', 's', percent / 100);
                            break;
                        case "lightness":
                            _updateColorsProperty('hsla', 'l', percent / 100);
                            break;
                        case "opacity":
                            _updateColorsProperty('hsla', 'a', percent / 100);
                            break;
                        case "red":
                            _updateColorsProperty('rgba', 'r', 2.55 * percent);
                            break;
                        case "green":
                            _updateColorsProperty('rgba', 'g', 2.55 * percent);
                            break;
                        case "blue":
                            _updateColorsProperty('rgba', 'b', 2.55 * percent);
                            break;
                        case "cielightness":
                            _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);
                            break;
                        case "ciechroma":
                            _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);
                            break;
                        case "ciehue":
                            _updateColorsProperty('cielch', 'h', 3.6 * percent);
                            break;
                    }

                    _updateAllElements();

                    ev.preventDefault();
                });

                $(document).on("touchend mouseup", function(ev) {
                    if (ev.which > 1) {
                        return;
                    }

                    if (dragTarget) {
                        dragTarget = false;
                        ev.preventDefault();
                    }
                });

                if (elements.connectedinput) {
                    elements.connectedinput.on('keyup change', function() {
                        var $input = $(this);

                        updateColor($input.val(), true);
                    });
                }

            }

            function _parseCustomSwatches() {
                swatches = [];

                for (var i = 0; i < settings.swatches.length; i++) {
                    var color = tinycolor(settings.swatches[i]);

                    if (color.format) {
                        swatches.push(color.toRgbString());
                    }
                }
            }

            function _renderSwatches() {
                if (!settings.swatches) {
                    return;
                }

                if (settings.customswatches) {
                    var customswatches = false;

                    try {
                        customswatches = JSON.parse(localStorage.getItem("swatches-" + settings.customswatches));
                    }
                    catch (err) {
                    }

                    if (customswatches) {
                        swatches = customswatches;
                    }
                    else {
                        _parseCustomSwatches();
                    }
                }
                else {
                    _parseCustomSwatches();
                }

                if (swatches instanceof Array) {
                    elements.swatches.html("");
                    for (var i = 0; i < swatches.length; i++) {
                        var color = tinycolor(swatches[i]);

                        if (color.format) {
                            elements.swatches.append($("<li></li>").append($("<span></span>").css("background-color", color.toRgbString())));
                        }
                    }
                }

                _findActualColorsSwatch();
            }

            function _findActualColorsSwatch() {
                var found = false;

                $("span", elements.swatches).filter(function() {
                    var swatchcolor = $(this).css('background-color');

                    swatchcolor = tinycolor(swatchcolor);
                    swatchcolor.alpha = Math.round(swatchcolor.alpha * 100) / 100;

                    if (swatchcolor.toRgbString() === color.tiny.toRgbString()) {
                        found = true;

                        var currentswatch = $(this).parent();

                        if (!currentswatch.is(elements.actualswatch)) {
                            if (elements.actualswatch) {
                                elements.actualswatch.removeClass("actual");
                            }
                            elements.actualswatch = currentswatch;
                            currentswatch.addClass("actual");
                        }
                    }
                });

                if (!found) {
                    if (elements.actualswatch) {
                        elements.actualswatch.removeClass("actual");
                        elements.actualswatch = false;
                    }
                }

                if (elements.actualswatch) {
                    elements.swatches_add.prop("disabled", true);
                    elements.swatches_remove.prop("disabled", false);
                }
                else {
                    elements.swatches_add.prop("disabled", false);
                    elements.swatches_remove.prop("disabled", true);
                }
            }

            function _storeSwatches() {
                localStorage.setItem("swatches-" + settings.customswatches, JSON.stringify(swatches));
            }

            function _addCurrentColorToSwatches() {
                swatches.unshift(color.tiny.toRgbString());
                _storeSwatches();

                $(document).trigger("colorpickersliders.changeswatches");
            }

            function _removeActualColorFromSwatches() {
                var index = swatches.indexOf(color.tiny.toRgbString());

                if (index !== -1) {
                    swatches.splice(index, 1);

                    _storeSwatches();
                    $(document).trigger("colorpickersliders.changeswatches");
                }
            }

            function _resetSwatches() {
                if (confirm("Do you really want to reset the swatches? All customizations will be lost!")) {
                    _parseCustomSwatches();

                    _storeSwatches();

                    $(document).trigger("colorpickersliders.changeswatches");
                }
            }

            function _updateColorsProperty(format, property, value) {
                switch (format) {
                    case 'hsla':

                        color.hsla[property] = value;
                        color.tiny = tinycolor({h: color.hsla.h, s: color.hsla.s, l: color.hsla.l, a: color.hsla.a});
                        color.rgba = color.tiny.toRgb();
                        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                        container.removeClass("cp-unconvertible-cie-color");

                        break;

                    case 'rgba':

                        color.rgba[property] = value;
                        color.tiny = tinycolor({r: color.rgba.r, g: color.rgba.g, b: color.rgba.b, a: color.hsla.a});
                        color.hsla = color.tiny.toHsl();
                        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

                        container.removeClass("cp-unconvertible-cie-color");

                        break;

                    case 'cielch':

                        color.cielch[property] = value;
                        color.rgba = $.fn.ColorPickerSliders.lch2rgb(color.cielch);
                        color.tiny = tinycolor(color.rgba);
                        color.hsla = color.tiny.toHsl();

                        if (settings.erroneousciecolormarkers) {
                            if (color.rgba.isok) {
                                container.removeClass("cp-unconvertible-cie-color");
                            }
                            else {
                                container.addClass("cp-unconvertible-cie-color");
                            }
                        }

                        break;
                }
            }

            function _updateMarkerPosition(slidername, ev) {
                var percent = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.sliders[slidername]);

                elements.sliders[slidername + '_marker'].data("position", percent);

                return percent;
            }

            var updateAllElementsTimeout;

            function _updateAllElementsTimer(disableinputupdate) {
                updateAllElementsTimeout = setTimeout(function() {
                    _updateAllElements(disableinputupdate);
                }, settings.updateinterval);
            }

            function _updateAllElements(disableinputupdate) {
                clearTimeout(updateAllElementsTimeout);

                Date.now = Date.now || function() { return +new Date; };

                if (Date.now() - lastUpdateTime < settings.updateinterval) {
                    _updateAllElementsTimer(disableinputupdate);
                    return;
                }

                if (typeof disableinputupdate === "undefined") {
                    disableinputupdate = false;
                }

                lastUpdateTime = Date.now();

                if (settings.order.opacity !== false) {
                    _renderOpacity();
                }

                if (settings.order.hsl !== false) {
                    _renderHue();
                    _renderSaturation();
                    _renderLightness();
                }

                if (settings.order.rgb !== false) {
                    _renderRed();
                    _renderGreen();
                    _renderBlue();
                }

                if (settings.order.cie !== false) {
                    _renderCieLightness();
                    _renderCieChroma();
                    _renderCieHue();
                }

                if (settings.order.preview !== false) {
                    _renderPreview();
                }

                if (!disableinputupdate) {
                    _updateConnectedInput();
                }

                if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
                    elements.all_sliders.css('color', '#000');
                    if (triggerelementisinput && settings.previewontriggerelement) {
                        triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
                    }
                }
                else {
                    elements.all_sliders.css('color', '#fff');
                    if (triggerelementisinput && settings.previewontriggerelement) {
                        triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
                    }
                }

                _findActualColorsSwatch();

                settings.onchange(container, color);

                triggerelement.data("color", color);
            }

            function _updateConnectedInput() {
                if (elements.connectedinput) {
                    elements.connectedinput.each(function(index, element) {
                        var $element = $(element),
                            format = $element.data('color-format') || settings.previewformat;

                        switch (format) {
                            case 'hex':
                                $element.val(color.tiny.toHexString());
                                break;
                            case 'hsl':
                                $element.val(color.tiny.toHslString());
                                break;
                            case 'rgb':
                                /* falls through */
                            default:
                                $element.val(color.tiny.toRgbString());
                                break;
                        }
                    });
                }
            }

            function _renderHue() {
                setGradient(elements.sliders.hue, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "h", 0, 360, 7));

                elements.sliders.hue_marker.css("left", color.hsla.h / 360 * 100 + "%");
            }

            function _renderSaturation() {
                setGradient(elements.sliders.saturation, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "s", 0, 1, 2));

                elements.sliders.saturation_marker.css("left", color.hsla.s * 100 + "%");
            }

            function _renderLightness() {
                setGradient(elements.sliders.lightness, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "l", 0, 1, 3));

                elements.sliders.lightness_marker.css("left", color.hsla.l * 100 + "%");
            }

            function _renderOpacity() {
                setGradient(elements.sliders.opacity, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, "a", 0, 1, 2));

                elements.sliders.opacity_marker.css("left", color.hsla.a * 100 + "%");
            }

            function _renderRed() {
                setGradient(elements.sliders.red, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "r", 0, 255, 2));

                elements.sliders.red_marker.css("left", color.rgba.r / 255 * 100 + "%");
            }

            function _renderGreen() {
                setGradient(elements.sliders.green, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "g", 0, 255, 2));

                elements.sliders.green_marker.css("left", color.rgba.g / 255 * 100 + "%");
            }

            function _renderBlue() {
                setGradient(elements.sliders.blue, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, "b", 0, 255, 2));

                elements.sliders.blue_marker.css("left", color.rgba.b / 255 * 100 + "%");
            }

            function _extendCieGradientStops(gradientstops, property) {
                if (settings.invalidcolorsopacity === 1 || !settings.finercierangeedges) {
                    return gradientstops;
                }

                gradientstops.sort(function(a, b) {
                    return a.position - b.position;
                });

                var tmparray = [];

                for (var i = 1; i < gradientstops.length; i++) {
                    if (gradientstops[i].isok !== gradientstops[i - 1].isok) {
                        var steps = Math.round(gradientstops[i].position) - Math.round(gradientstops[i - 1].position),
                                extendedgradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(gradientstops[i].rawcolor, property, gradientstops[i - 1].rawcolor[property], gradientstops[i].rawcolor[property], steps, settings.invalidcolorsopacity, gradientstops[i - 1].position, gradientstops[i].position);

                        for (var j = 0; j < extendedgradientstops.length; j++) {
                            if (extendedgradientstops[j].isok !== gradientstops[i - 1].isok) {
                                tmparray.push(extendedgradientstops[j]);

                                if (j > 0) {
                                    tmparray.push(extendedgradientstops[j - 1]);
                                }

                                break;
                            }
                        }
                    }
                }

                return $.merge(tmparray, gradientstops);
            }

            function _renderCieLightness() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "l", 0, 100, 10, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "l");

                setGradient(elements.sliders.cielightness, gradientstops);

                elements.sliders.cielightness_marker.css("left", color.cielch.l / MAXLIGHT * 100 + "%");
            }

            function _renderCieChroma() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "c", 0, MAXVALIDCHROMA, 5, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "c");

                setGradient(elements.sliders.ciechroma, gradientstops);

                elements.sliders.ciechroma_marker.css("left", color.cielch.c / MAXVALIDCHROMA * 100 + "%");
            }

            function _renderCieHue() {
                var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, "h", 0, 360, 28, settings.invalidcolorsopacity);

                gradientstops = _extendCieGradientStops(gradientstops, "h");

                setGradient(elements.sliders.ciehue, gradientstops);

                elements.sliders.ciehue_marker.css("left", color.cielch.h / 360 * 100 + "%");
            }

            function _renderPreview() {
                elements.sliders.preview.css("background", $.fn.ColorPickerSliders.csscolor(color.rgba));

                var colorstring;

                switch (settings.previewformat) {
                    case 'hex':
                        colorstring = color.tiny.toHexString();
                        break;
                    case 'hsl':
                        colorstring = color.tiny.toHslString();
                        break;
                    case 'rgb':
                        /* falls through */
                    default:
                        colorstring = color.tiny.toRgbString();
                        break;
                }

                elements.sliders.preview.val(colorstring);
            }

            function setGradient(element, gradientstops) {
                gradientstops.sort(function(a, b) {
                    return a.position - b.position;
                });

                switch(rendermode) {
                    case "noprefix":
                        $.fn.ColorPickerSliders.renderNoprefix(element, gradientstops);
                        break;
                    case "webkit":
                        $.fn.ColorPickerSliders.renderWebkit(element, gradientstops);
                        break;
                    case "ms":
                        $.fn.ColorPickerSliders.renderMs(element, gradientstops);
                        break;
                    case "svg": // can not repeat, radial can be only a covering ellipse (maybe there is a workaround, need more investigation)
                        $.fn.ColorPickerSliders.renderSVG(element, gradientstops);
                        break;
                    case "oldwebkit":   // can not repeat, no percent size with radial gradient (and no ellipse)
                        $.fn.ColorPickerSliders.renderOldwebkit(element, gradientstops);
                        break;
                }
            };

        });

    };

    $.fn.ColorPickerSliders.getEventCoordinates = function(ev) {
        if (typeof ev.pageX !== "undefined") {
            return {
                pageX: ev.originalEvent.pageX,
                pageY: ev.originalEvent.pageY
            };
        }
        else if (typeof ev.originalEvent.touches !== "undefined") {
            return {
                pageX: ev.originalEvent.touches[0].pageX,
                pageY: ev.originalEvent.touches[0].pageY
            };
        }
    };

    $.fn.ColorPickerSliders.calculateEventPositionPercentage = function(ev, containerElement) {
        var c = $.fn.ColorPickerSliders.getEventCoordinates(ev);

        var xsize = containerElement.width(),
                offsetX = c.pageX - containerElement.offset().left;

        var percent = offsetX / xsize * 100;

        if (percent < 0) {
            percent = 0;
        }

        if (percent > 100) {
            percent = 100;
        }

        return percent;
    };

    $.fn.ColorPickerSliders.getScaledGradientStops = function(color, scalableproperty, minvalue, maxvalue, steps, invalidcolorsopacity, minposition, maxposition) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        if (typeof minposition === "undefined") {
            minposition = 0;
        }

        if (typeof maxposition === "undefined") {
            maxposition = 100;
        }

        var gradientStops = [],
                diff = maxvalue - minvalue,
                isok = true;

        for (var i = 0; i < steps; ++i) {
            var currentstage = i / (steps - 1),
                    modifiedcolor = $.fn.ColorPickerSliders.modifyColor(color, scalableproperty, currentstage * diff + minvalue),
                    csscolor;

            if (invalidcolorsopacity < 1) {
                var stagergb = $.fn.ColorPickerSliders.lch2rgb(modifiedcolor, invalidcolorsopacity);

                isok = stagergb.isok;
                csscolor = $.fn.ColorPickerSliders.csscolor(stagergb, invalidcolorsopacity);
            }
            else {
                csscolor = $.fn.ColorPickerSliders.csscolor(modifiedcolor, invalidcolorsopacity);
            }

            gradientStops[i] = {
                color: tinycolor(csscolor).toRgbString(),
                position: Math.round((currentstage * (maxposition - minposition) + minposition) * 100) / 100,
                isok: isok,
                rawcolor: modifiedcolor
            };
        }

        return gradientStops;
    };

    $.fn.ColorPickerSliders.getGradientStopsCSSString = function(gradientstops) {
        var gradientstring = "",
            oldwebkit = "",
            svgstoppoints = "";

        for (var i = 0; i < gradientstops.length; i++) {
            var el = gradientstops[i];

            gradientstring += "," + el.color + " " + el.position + "%";
            oldwebkit += ",color-stop(" + el.position + "%," + el.color + ")";

            var svgcolor = tinycolor(el.color);

            svgstoppoints += '<stop ' + 'stop-color="' + svgcolor.toHexString() + '" stop-opacity="' + svgcolor.toRgb().a + '"' + ' offset="' + el.position/100 + '"/>';
        }

        return {
            noprefix: gradientstring,
            oldwebkit: oldwebkit,
            svg: svgstoppoints
        };
    };

    $.fn.ColorPickerSliders.renderNoprefix = function(element, gradientstops) {
        var css = "linear-gradient(to right",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderWebkit = function(element, gradientstops) {
        var css = "-webkit-linear-gradient(left",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderOldwebkit = function(element, gradientstops) {
        var css = "-webkit-gradient(linear, 0% 0%, 100% 0%",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).oldwebkit;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderMs = function(element, gradientstops) {
        var css = "-ms-linear-gradient(to right",
            stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

        css += stoppoints + ")";

        element.css("background-image", css);
    };

    $.fn.ColorPickerSliders.renderSVG = function(element, gradientstops) {
        var svg = "",
            svgstoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).svg;

        svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">';
        svg += svgstoppoints;
        svg += '</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>';
        svg = "url(data:image/svg+xml;base64," + $.fn.ColorPickerSliders.base64encode(svg) + ")";

        element.css("background-image", svg);
    };

    /* source: http://phpjs.org/functions/base64_encode/ */
    $.fn.ColorPickerSliders.base64encode = function(data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];

        if (!data) {
            return data;
        }

        do {
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    };

    $.fn.ColorPickerSliders.isGoodRgb = function(rgb) {
        // the default acceptable values are out of 0..255 due to
        // rounding errors with yellow and blue colors (258, -1)
        var maxacceptable = 258;
        var minacceptable = -1;

        if (rgb.r > maxacceptable || rgb.g > maxacceptable || rgb.b > maxacceptable || rgb.r < minacceptable || rgb.g < minacceptable || rgb.b < minacceptable) {
            return false;
        }
        else {
            rgb.r = Math.min(255, rgb.r);
            rgb.g = Math.min(255, rgb.g);
            rgb.b = Math.min(255, rgb.b);
            rgb.r = Math.max(0, rgb.r);
            rgb.g = Math.max(0, rgb.g);
            rgb.b = Math.max(0, rgb.b);

            return true;
        }
    };

    $.fn.ColorPickerSliders.rgb2lch = function(rgb) {
        var lch = $.fn.ColorPickerSliders.CIELab2CIELCH($.fn.ColorPickerSliders.XYZ2CIELab($.fn.ColorPickerSliders.rgb2XYZ(rgb)));

        if (rgb.hasOwnProperty('a')) {
            lch.a = rgb.a;
        }

        return lch;
    };

    $.fn.ColorPickerSliders.lch2rgb = function(lch, invalidcolorsopacity) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        var rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(lch)));

        if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
            if (lch.hasOwnProperty('a')) {
                rgb.a = lch.a;
            }

            rgb.isok = true;

            return rgb;
        }

        var tmp = $.extend({}, lch),
                lastbadchroma = tmp.c,
                lastgoodchroma = -1,
                loops = 0;

        do {
            ++loops;

            tmp.c = lastgoodchroma + ((lastbadchroma - lastgoodchroma) / 2);

            rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(tmp)));

            if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
                lastgoodchroma = tmp.c;
            }
            else {
                lastbadchroma = tmp.c;
            }
        } while (Math.abs(lastbadchroma - lastgoodchroma) > 0.9 && loops < 100);

        if (lch.hasOwnProperty('a')) {
            rgb.a = lch.a;
        }

        rgb.r = Math.max(0, rgb.r);
        rgb.g = Math.max(0, rgb.g);
        rgb.b = Math.max(0, rgb.b);

        rgb.r = Math.min(255, rgb.r);
        rgb.g = Math.min(255, rgb.g);
        rgb.b = Math.min(255, rgb.b);

        if (invalidcolorsopacity < 1) {
            if (rgb.hasOwnProperty('a')) {
                rgb.a = rgb.a * invalidcolorsopacity;
            }
            else {
                rgb.a = invalidcolorsopacity;
            }
        }

        rgb.isok = false;

        return rgb;
    };

    $.fn.ColorPickerSliders.modifyColor = function(color, property, value) {
        var modifiedcolor = $.extend({}, color);

        if (!color.hasOwnProperty(property)) {
            throw("Missing color property: " + property);
        }

        modifiedcolor[property] = value;

        return modifiedcolor;
    };

    $.fn.ColorPickerSliders.csscolor = function(color, invalidcolorsopacity) {
        if (typeof invalidcolorsopacity === "undefined") {
            invalidcolorsopacity = 1;
        }

        var $return = false,
                tmpcolor = $.extend({}, color);

        if (tmpcolor.hasOwnProperty('c')) {
            // CIE-LCh
            tmpcolor = $.fn.ColorPickerSliders.lch2rgb(tmpcolor, invalidcolorsopacity);
        }

        if (tmpcolor.hasOwnProperty('h')) {
            // HSL
            $return = "hsla(" + tmpcolor.h + "," + tmpcolor.s * 100 + "%," + tmpcolor.l * 100 + "%," + tmpcolor.a + ")";
        }

        if (tmpcolor.hasOwnProperty('r')) {
            // RGB
            if (tmpcolor.a < 1) {
                $return = "rgba(" + Math.round(tmpcolor.r) + "," + Math.round(tmpcolor.g) + "," + Math.round(tmpcolor.b) + "," + tmpcolor.a + ")";
            }
            else {
                $return = "rgb(" + Math.round(tmpcolor.r) + "," + Math.round(tmpcolor.g) + "," + Math.round(tmpcolor.b) + ")";
            }
        }

        return $return;
    };

    $.fn.ColorPickerSliders.rgb2XYZ = function(rgb) {
        var XYZ = {};

        var r = (rgb.r / 255);
        var g = (rgb.g / 255);
        var b = (rgb.b / 255);

        if (r > 0.04045) {
            r = Math.pow(((r + 0.055) / 1.055), 2.4);
        }
        else {
            r = r / 12.92;
        }

        if (g > 0.04045) {
            g = Math.pow(((g + 0.055) / 1.055), 2.4);
        }
        else {
            g = g / 12.92;
        }

        if (b > 0.04045) {
            b = Math.pow(((b + 0.055) / 1.055), 2.4);
        }
        else {
            b = b / 12.92;
        }

        r = r * 100;
        g = g * 100;
        b = b * 100;

        // Observer = 2°, Illuminant = D65
        XYZ.x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        XYZ.y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        XYZ.z = r * 0.0193 + g * 0.1192 + b * 0.9505;

        return XYZ;
    };

    $.fn.ColorPickerSliders.XYZ2CIELab = function(XYZ) {
        var CIELab = {};

        // Observer = 2°, Illuminant = D65
        var X = XYZ.x / 95.047;
        var Y = XYZ.y / 100.000;
        var Z = XYZ.z / 108.883;

        if (X > 0.008856) {
            X = Math.pow(X, 0.333333333);
        }
        else {
            X = 7.787 * X + 0.137931034;
        }

        if (Y > 0.008856) {
            Y = Math.pow(Y, 0.333333333);
        }
        else {
            Y = 7.787 * Y + 0.137931034;
        }

        if (Z > 0.008856) {
            Z = Math.pow(Z, 0.333333333);
        }
        else {
            Z = 7.787 * Z + 0.137931034;
        }

        CIELab.l = (116 * Y) - 16;
        CIELab.a = 500 * (X - Y);
        CIELab.b = 200 * (Y - Z);

        return CIELab;
    };

    $.fn.ColorPickerSliders.CIELab2CIELCH = function(CIELab) {
        var CIELCH = {};

        CIELCH.l = CIELab.l;
        CIELCH.c = Math.sqrt(Math.pow(CIELab.a, 2) + Math.pow(CIELab.b, 2));

        CIELCH.h = Math.atan2(CIELab.b, CIELab.a);  //Quadrant by signs

        if (CIELCH.h > 0) {
            CIELCH.h = (CIELCH.h / Math.PI) * 180;
        }
        else {
            CIELCH.h = 360 - (Math.abs(CIELCH.h) / Math.PI) * 180;
        }

        return CIELCH;
    };

    $.fn.ColorPickerSliders.CIELCH2CIELab = function(CIELCH) {
        var CIELab = {};

        CIELab.l = CIELCH.l;
        CIELab.a = Math.cos(CIELCH.h * 0.01745329251) * CIELCH.c;
        CIELab.b = Math.sin(CIELCH.h * 0.01745329251) * CIELCH.c;

        return CIELab;
    };

    $.fn.ColorPickerSliders.CIELab2XYZ = function(CIELab) {
        var XYZ = {};

        XYZ.y = (CIELab.l + 16) / 116;
        XYZ.x = CIELab.a / 500 + XYZ.y;
        XYZ.z = XYZ.y - CIELab.b / 200;

        if (Math.pow(XYZ.y, 3) > 0.008856) {
            XYZ.y = Math.pow(XYZ.y, 3);
        }
        else {
            XYZ.y = (XYZ.y - 0.137931034) / 7.787;
        }

        if (Math.pow(XYZ.x, 3) > 0.008856) {
            XYZ.x = Math.pow(XYZ.x, 3);
        }
        else {
            XYZ.x = (XYZ.x - 0.137931034) / 7.787;
        }

        if (Math.pow(XYZ.z, 3) > 0.008856) {
            XYZ.z = Math.pow(XYZ.z, 3);
        }
        else {
            XYZ.z = (XYZ.z - 0.137931034) / 7.787;
        }

        // Observer = 2°, Illuminant = D65
        XYZ.x = 95.047 * XYZ.x;
        XYZ.y = 100.000 * XYZ.y;
        XYZ.z = 108.883 * XYZ.z;

        return XYZ;
    };

    $.fn.ColorPickerSliders.XYZ2rgb = function(XYZ) {
        var rgb = {};

        // Observer = 2°, Illuminant = D65
        XYZ.x = XYZ.x / 100;        // X from 0 to 95.047
        XYZ.y = XYZ.y / 100;        // Y from 0 to 100.000
        XYZ.z = XYZ.z / 100;        // Z from 0 to 108.883

        rgb.r = XYZ.x * 3.2406 + XYZ.y * -1.5372 + XYZ.z * -0.4986;
        rgb.g = XYZ.x * -0.9689 + XYZ.y * 1.8758 + XYZ.z * 0.0415;
        rgb.b = XYZ.x * 0.0557 + XYZ.y * -0.2040 + XYZ.z * 1.0570;

        if (rgb.r > 0.0031308) {
            rgb.r = 1.055 * (Math.pow(rgb.r, 0.41666667)) - 0.055;
        }
        else {
            rgb.r = 12.92 * rgb.r;
        }

        if (rgb.g > 0.0031308) {
            rgb.g = 1.055 * (Math.pow(rgb.g, 0.41666667)) - 0.055;
        }
        else {
            rgb.g = 12.92 * rgb.g;
        }

        if (rgb.b > 0.0031308) {
            rgb.b = 1.055 * (Math.pow(rgb.b, 0.41666667)) - 0.055;
        }
        else {
            rgb.b = 12.92 * rgb.b;
        }

        rgb.r = Math.round(rgb.r * 255);
        rgb.g = Math.round(rgb.g * 255);
        rgb.b = Math.round(rgb.b * 255);

        return rgb;
    };

    $.fn.ColorPickerSliders.detectWhichGradientIsSupported = function() {
        var testelement = document.createElement('detectGradientSupport').style;

        try {
            testelement.backgroundImage = "linear-gradient(to top left, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "noprefix";
            }

            testelement.backgroundImage = "-webkit-linear-gradient(left top, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "webkit";
            }

            testelement.backgroundImage = "-ms-linear-gradient(left top, #9f9, white)";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "ms";
            }

            testelement.backgroundImage = "-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))";
            if (testelement.backgroundImage.indexOf("gradient") !== -1) {
                return "oldwebkit";
            }
        }
        catch(err) {
            try {
                testelement.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#000000',GradientType=0)";
                if (testelement.filter.indexOf("DXImageTransform") !== -1) {
                    return "filter";
                }
            }
            catch(err) {}
        }

        return false;
    };

    $.fn.ColorPickerSliders.svgSupported = function() {
        return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
    };

})(jQuery);

// TinyColor v0.9.16
// https://github.com/bgrins/TinyColor
// 2013-08-10, Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathRandom = math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
       return color;
    }

    var rgb = inputToRGB(color);
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b,
        a = rgb.a,
        roundA = mathRound(100*a) / 100,
        format = opts.format || rgb.format;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (r < 1) { r = mathRound(r); }
    if (g < 1) { g = mathRound(g); }
    if (b < 1) { b = mathRound(b); }

    return {
        ok: rgb.ok,
        format: format,
        _tc_id: tinyCounter++,
        alpha: a,
        getAlpha: function() {
            return a;
        },
        setAlpha: function(value) {
            a = boundAlpha(value);
            roundA = mathRound(100*a) / 100;
        },
        toHsv: function() {
            var hsv = rgbToHsv(r, g, b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: a };
        },
        toHsvString: function() {
            var hsv = rgbToHsv(r, g, b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (a == 1) ?
              "hsv("  + h + ", " + s + "%, " + v + "%)" :
              "hsva(" + h + ", " + s + "%, " + v + "%, "+ roundA + ")";
        },
        toHsl: function() {
            var hsl = rgbToHsl(r, g, b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: a };
        },
        toHslString: function() {
            var hsl = rgbToHsl(r, g, b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (a == 1) ?
              "hsl("  + h + ", " + s + "%, " + l + "%)" :
              "hsla(" + h + ", " + s + "%, " + l + "%, "+ roundA + ")";
        },
        toHex: function(allow3Char) {
            return rgbToHex(r, g, b, allow3Char);
        },
        toHexString: function(allow3Char) {
            return '#' + rgbToHex(r, g, b, allow3Char);
        },
        toRgb: function() {
            return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
        },
        toRgbString: function() {
            return (a == 1) ?
              "rgb("  + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
              "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + roundA + ")";
        },
        toPercentageRgb: function() {
            return { r: mathRound(bound01(r, 255) * 100) + "%", g: mathRound(bound01(g, 255) * 100) + "%", b: mathRound(bound01(b, 255) * 100) + "%", a: a };
        },
        toPercentageRgbString: function() {
            return (a == 1) ?
              "rgb("  + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%)" :
              "rgba(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%, " + roundA + ")";
        },
        toName: function() {
            if (a === 0) {
                return "transparent";
            }

            return hexNames[rgbToHex(r, g, b, true)] || false;
        },
        toFilter: function(secondColor) {
            var hex = rgbToHex(r, g, b);
            var secondHex = hex;
            var alphaHex = Math.round(parseFloat(a) * 255).toString(16);
            var secondAlphaHex = alphaHex;
            var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex = s.toHex();
                secondAlphaHex = Math.round(parseFloat(s.alpha) * 255).toString(16);
            }

            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#" + pad2(alphaHex) + hex + ",endColorstr=#" + pad2(secondAlphaHex) + secondHex + ")";
        },
        toString: function(format) {
            var formatSet = !!format;
            format = format || this.format;

            var formattedString = false;
            var hasAlphaAndFormatNotSet = !formatSet && a < 1 && a > 0;
            var formatWithAlpha = hasAlphaAndFormatNotSet && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            if (formatWithAlpha) {
                return this.toRgbString();
            }

            return formattedString || this.toHexString();
        }
    };
}

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
            color.s = convertToPercentage(color.s);
            color.v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, color.s, color.v);
            ok = true;
            format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            color.s = convertToPercentage(color.s);
            color.l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, color.s, color.l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

tinycolor.desaturate = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
};
tinycolor.saturate = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
};
tinycolor.greyscale = function(color) {
    return tinycolor.desaturate(color, 100);
};
tinycolor.lighten = function(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
};
tinycolor.darken = function (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
};
tinycolor.complement = function(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
};


// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

tinycolor.triad = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
};
tinycolor.tetrad = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
};
tinycolor.splitcomplement = function(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
};
tinycolor.analogous = function(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
};
tinycolor.monochromatic = function(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/AERT#color-contrast>

// `readability`
// Analyze the 2 colors and returns an object with the following properties:
//    `brightness`: difference in brightness between the two colors
//    `color`: difference in color/hue between the two colors
tinycolor.readability = function(color1, color2) {
    var a = tinycolor(color1).toRgb();
    var b = tinycolor(color2).toRgb();
    var brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000;
    var brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000;
    var colorDiff = (
        Math.max(a.r, b.r) - Math.min(a.r, b.r) +
        Math.max(a.g, b.g) - Math.min(a.g, b.g) +
        Math.max(a.b, b.b) - Math.min(a.b, b.b)
    );

    return {
        brightness: Math.abs(brightnessA - brightnessB),
        color: colorDiff
    };
};

// `readable`
// http://www.w3.org/TR/AERT#color-contrast
// Ensure that foreground and background color combinations provide sufficient contrast.
// *Example*
//    tinycolor.readable("#000", "#111") => false
tinycolor.readable = function(color1, color2) {
    var readability = tinycolor.readability(color1, color2);
    return readability.brightness > 125 && readability.color > 500;
};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// *Example*
//    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
tinycolor.mostReadable = function(baseColor, colorList) {
    var bestColor = null;
    var bestScore = 0;
    var bestIsReadable = false;
    for (var i=0; i < colorList.length; i++) {

        // We normalize both around the "acceptable" breaking point,
        // but rank brightness constrast higher than hue.

        var readability = tinycolor.readability(baseColor, colorList[i]);
        var readable = readability.brightness > 125 && readability.color > 500;
        var score = 3 * (readability.brightness / 125) + (readability.color / 500);

        if ((readable && ! bestIsReadable) ||
            (readable && bestIsReadable && score > bestScore) ||
            ((! readable) && (! bestIsReadable) && score > bestScore)) {
            bestIsReadable = readable;
            bestScore = score;
            bestColor = tinycolor(colorList[i]);
        }
    }
    return bestColor;
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse an integer into hex
function parseHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseHex(match[1]),
            g: parseHex(match[2]),
            b: parseHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseHex(match[1] + '' + match[1]),
            g: parseHex(match[2] + '' + match[2]),
            b: parseHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define !== "undefined") {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})();
/*!
 * Cropper.js v0.8.1
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-09-03T04:55:16.458Z
 */

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var i in a)("object"==typeof exports?exports:e)[i]=a[i]}}(this,function(){return function(e){function t(i){if(a[i])return a[i].exports;var o=a[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),s=a(1),d=o(s),l=a(2),c=o(l),h=a(3),p=o(h),u=a(5),m=o(u),f=a(6),v=o(f),g=a(7),w=o(g),b=a(8),y=o(b),x=a(9),C=o(x),M=a(4),D=i(M),L="cropper",B=L+"-hidden",O="error",T="load",E="ready",N="crop",k=/^data:/,X=/^data:image\/jpeg.*;base64,/,W=void 0,Y=function(){function e(t,a){r(this,e);var i=this;i.element=t,i.options=D.extend({},d.default,D.isPlainObject(a)&&a),i.loaded=!1,i.ready=!1,i.complete=!1,i.rotated=!1,i.cropped=!1,i.disabled=!1,i.replaced=!1,i.limited=!1,i.wheeling=!1,i.isImg=!1,i.originalUrl="",i.canvasData=null,i.cropBoxData=null,i.previews=null,i.init()}return n(e,[{key:"init",value:function(){var e=this,t=e.element,a=t.tagName.toLowerCase(),i=void 0;if(!D.getData(t,L)){if(D.setData(t,L,e),"img"===a){if(e.isImg=!0,e.originalUrl=i=t.getAttribute("src"),!i)return;i=t.src}else"canvas"===a&&window.HTMLCanvasElement&&(i=t.toDataURL());e.load(i)}}},{key:"load",value:function(e){var t=this,a=t.options,i=t.element;if(e){if(t.url=e,t.imageData={},!a.checkOrientation||!window.ArrayBuffer)return void t.clone();if(k.test(e))return void(X?t.read(D.dataURLToArrayBuffer(e)):t.clone());var o=new XMLHttpRequest;o.onerror=o.onabort=function(){t.clone()},o.onload=function(){t.read(o.response)},a.checkCrossOrigin&&D.isCrossOriginURL(e)&&i.crossOrigin&&(e=D.addTimestamp(e)),o.open("get",e),o.responseType="arraybuffer",o.send()}}},{key:"read",value:function(e){var t=this,a=t.options,i=D.getOrientation(e),o=t.imageData,r=0,n=1,s=1;if(i>1)switch(t.url=D.arrayBufferToDataURL(e),i){case 2:n=-1;break;case 3:r=-180;break;case 4:s=-1;break;case 5:r=90,s=-1;break;case 6:r=90;break;case 7:r=90,n=-1;break;case 8:r=-90}a.rotatable&&(o.rotate=r),a.scalable&&(o.scaleX=n,o.scaleY=s),t.clone()}},{key:"clone",value:function(){var e=this,t=e.element,a=e.url,i=void 0,o=void 0,r=void 0,n=void 0;e.options.checkCrossOrigin&&D.isCrossOriginURL(a)&&(i=t.crossOrigin,i?o=a:(i="anonymous",o=D.addTimestamp(a))),e.crossOrigin=i,e.crossOriginUrl=o;var s=D.createElement("img");i&&(s.crossOrigin=i),s.src=o||a,e.image=s,e.onStart=r=D.proxy(e.start,e),e.onStop=n=D.proxy(e.stop,e),e.isImg?t.complete?e.start():D.addListener(t,T,r):(D.addListener(s,T,r),D.addListener(s,O,n),D.addClass(s,"cropper-hide"),t.parentNode.insertBefore(s,t.nextSibling))}},{key:"start",value:function(e){var t=this,a=t.isImg?t.element:t.image;e&&(D.removeListener(a,T,t.onStart),D.removeListener(a,O,t.onStop)),D.getImageSize(a,function(e,a){D.extend(t.imageData,{naturalWidth:e,naturalHeight:a,aspectRatio:e/a}),t.loaded=!0,t.build()})}},{key:"stop",value:function(){var e=this,t=e.image;D.removeListener(t,T,e.onStart),D.removeListener(t,O,e.onStop),D.removeChild(t),e.image=null}},{key:"build",value:function(){var e=this,t=e.options,a=e.element,i=e.image,o=void 0,r=void 0,n=void 0,s=void 0,d=void 0,l=void 0;if(e.loaded){e.ready&&e.unbuild();var h=D.createElement("div");h.innerHTML=c.default,e.container=o=a.parentNode,e.cropper=r=D.getByClass(h,"cropper-container")[0],e.canvas=n=D.getByClass(r,"cropper-canvas")[0],e.dragBox=s=D.getByClass(r,"cropper-drag-box")[0],e.cropBox=d=D.getByClass(r,"cropper-crop-box")[0],e.viewBox=D.getByClass(r,"cropper-view-box")[0],e.face=l=D.getByClass(d,"cropper-face")[0],D.appendChild(n,i),D.addClass(a,B),o.insertBefore(r,a.nextSibling),e.isImg||D.removeClass(i,"cropper-hide"),e.initPreview(),e.bind(),t.aspectRatio=Math.max(0,t.aspectRatio)||NaN,t.viewMode=Math.max(0,Math.min(3,Math.round(t.viewMode)))||0,t.autoCrop?(e.cropped=!0,t.modal&&D.addClass(s,"cropper-modal")):D.addClass(d,B),t.guides||D.addClass(D.getByClass(d,"cropper-dashed"),B),t.center||D.addClass(D.getByClass(d,"cropper-center"),B),t.background&&D.addClass(r,"cropper-bg"),t.highlight||D.addClass(l,"cropper-invisible"),t.cropBoxMovable&&(D.addClass(l,"cropper-move"),D.setData(l,"action","all")),t.cropBoxResizable||(D.addClass(D.getByClass(d,"cropper-line"),B),D.addClass(D.getByClass(d,"cropper-point"),B)),e.setDragMode(t.dragMode),e.render(),e.ready=!0,e.setData(t.data),e.completing=setTimeout(function(){D.isFunction(t.ready)&&D.addListener(a,E,t.ready,!0),D.dispatchEvent(a,E),D.dispatchEvent(a,N,e.getData()),e.complete=!0},0)}}},{key:"unbuild",value:function(){var e=this;e.ready&&(e.complete||clearTimeout(e.completing),e.ready=!1,e.complete=!1,e.initialImageData=null,e.initialCanvasData=null,e.initialCropBoxData=null,e.containerData=null,e.canvasData=null,e.cropBoxData=null,e.unbind(),e.resetPreview(),e.previews=null,e.viewBox=null,e.cropBox=null,e.dragBox=null,e.canvas=null,e.container=null,D.removeChild(e.cropper),e.cropper=null)}}],[{key:"noConflict",value:function(){return window.Cropper=W,e}},{key:"setDefaults",value:function(e){D.extend(d.default,D.isPlainObject(e)&&e)}}]),e}();D.extend(Y.prototype,p.default),D.extend(Y.prototype,m.default),D.extend(Y.prototype,v.default),D.extend(Y.prototype,w.default),D.extend(Y.prototype,y.default),D.extend(Y.prototype,C.default),"undefined"!=typeof window&&(W=window.Cropper,window.Cropper=Y),t.default=Y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>'},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),r=i(o);t.default={render:function(){var e=this;e.initContainer(),e.initCanvas(),e.initCropBox(),e.renderCanvas(),e.cropped&&e.renderCropBox()},initContainer:function(){var e=this,t=e.options,a=e.element,i=e.container,o=e.cropper,n=void 0;r.addClass(o,"cropper-hidden"),r.removeClass(a,"cropper-hidden"),e.containerData=n={width:Math.max(i.offsetWidth,Number(t.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(t.minContainerHeight)||100)},r.setStyle(o,{width:n.width,height:n.height}),r.addClass(a,"cropper-hidden"),r.removeClass(o,"cropper-hidden")},initCanvas:function(){var e=this,t=e.options.viewMode,a=e.containerData,i=e.imageData,o=90===Math.abs(i.rotate),n=o?i.naturalHeight:i.naturalWidth,s=o?i.naturalWidth:i.naturalHeight,d=n/s,l=a.width,c=a.height;a.height*d>a.width?3===t?l=a.height*d:c=a.width/d:3===t?c=a.width/d:l=a.height*d;var h={naturalWidth:n,naturalHeight:s,aspectRatio:d,width:l,height:c};h.oldLeft=h.left=(a.width-l)/2,h.oldTop=h.top=(a.height-c)/2,e.canvasData=h,e.limited=1===t||2===t,e.limitCanvas(!0,!0),e.initialImageData=r.extend({},i),e.initialCanvasData=r.extend({},h)},limitCanvas:function(e,t){var a=this,i=a.options,o=i.viewMode,r=a.containerData,n=a.canvasData,s=n.aspectRatio,d=a.cropBoxData,l=a.cropped&&d,c=void 0,h=void 0,p=void 0,u=void 0;e&&(c=Number(i.minCanvasWidth)||0,h=Number(i.minCanvasHeight)||0,o>1?(c=Math.max(c,r.width),h=Math.max(h,r.height),3===o&&(h*s>c?c=h*s:h=c/s)):o>0&&(c?c=Math.max(c,l?d.width:0):h?h=Math.max(h,l?d.height:0):l&&(c=d.width,h=d.height,h*s>c?c=h*s:h=c/s)),c&&h?h*s>c?h=c/s:c=h*s:c?h=c/s:h&&(c=h*s),n.minWidth=c,n.minHeight=h,n.maxWidth=1/0,n.maxHeight=1/0),t&&(o?(p=r.width-n.width,u=r.height-n.height,n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),l&&a.limited&&(n.minLeft=Math.min(d.left,d.left+(d.width-n.width)),n.minTop=Math.min(d.top,d.top+(d.height-n.height)),n.maxLeft=d.left,n.maxTop=d.top,2===o&&(n.width>=r.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=r.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))):(n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=r.width,n.maxTop=r.height))},renderCanvas:function(e){var t=this,a=t.canvasData,i=t.imageData,o=i.rotate,n=void 0,s=void 0;t.rotated&&(t.rotated=!1,s=r.getRotatedSizes({width:i.width,height:i.height,degree:o}),n=s.width/s.height,n!==a.aspectRatio&&(a.left-=(s.width-a.width)/2,a.top-=(s.height-a.height)/2,a.width=s.width,a.height=s.height,a.aspectRatio=n,a.naturalWidth=i.naturalWidth,a.naturalHeight=i.naturalHeight,o%180&&(s=r.getRotatedSizes({width:i.naturalWidth,height:i.naturalHeight,degree:o}),a.naturalWidth=s.width,a.naturalHeight=s.height),t.limitCanvas(!0,!1))),(a.width>a.maxWidth||a.width<a.minWidth)&&(a.left=a.oldLeft),(a.height>a.maxHeight||a.height<a.minHeight)&&(a.top=a.oldTop),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),t.limitCanvas(!1,!0),a.oldLeft=a.left=Math.min(Math.max(a.left,a.minLeft),a.maxLeft),a.oldTop=a.top=Math.min(Math.max(a.top,a.minTop),a.maxTop),r.setStyle(t.canvas,{width:a.width,height:a.height,left:a.left,top:a.top}),t.renderImage(),t.cropped&&t.limited&&t.limitCropBox(!0,!0),e&&t.output()},renderImage:function(e){var t=this,a=t.canvasData,i=t.imageData,o=void 0,n=void 0,s=void 0,d=void 0;i.rotate&&(n=r.getRotatedSizes({width:a.width,height:a.height,degree:i.rotate,aspectRatio:i.aspectRatio},!0),s=n.width,d=n.height,o={width:s,height:d,left:(a.width-s)/2,top:(a.height-d)/2}),r.extend(i,o||{width:a.width,height:a.height,left:0,top:0});var l=r.getTransform(i);r.setStyle(t.image,{width:i.width,height:i.height,marginLeft:i.left,marginTop:i.top,WebkitTransform:l,msTransform:l,transform:l}),e&&t.output()},initCropBox:function(){var e=this,t=e.options,a=t.aspectRatio,i=Number(t.autoCropArea)||.8,o=e.canvasData,n={width:o.width,height:o.height};a&&(o.height*a>o.width?n.height=n.width/a:n.width=n.height*a),e.cropBoxData=n,e.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*i),n.height=Math.max(n.minHeight,n.height*i),n.oldLeft=n.left=o.left+(o.width-n.width)/2,n.oldTop=n.top=o.top+(o.height-n.height)/2,e.initialCropBoxData=r.extend({},n)},limitCropBox:function(e,t){var a=this,i=a.options,o=i.aspectRatio,r=a.containerData,n=a.canvasData,s=a.cropBoxData,d=a.limited,l=void 0,c=void 0,h=void 0,p=void 0;e&&(l=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=Math.min(l,r.width),c=Math.min(c,r.height),h=Math.min(r.width,d?n.width:r.width),p=Math.min(r.height,d?n.height:r.height),o&&(l&&c?c*o>l?c=l/o:l=c*o:l?c=l/o:c&&(l=c*o),p*o>h?p=h/o:h=p*o),s.minWidth=Math.min(l,h),s.minHeight=Math.min(c,p),s.maxWidth=h,s.maxHeight=p),t&&(d?(s.minLeft=Math.max(0,n.left),s.minTop=Math.max(0,n.top),s.maxLeft=Math.min(r.width,n.left+n.width)-s.width,s.maxTop=Math.min(r.height,n.top+n.height)-s.height):(s.minLeft=0,s.minTop=0,s.maxLeft=r.width-s.width,s.maxTop=r.height-s.height))},renderCropBox:function(){var e=this,t=e.options,a=e.containerData,i=e.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),e.limitCropBox(!1,!0),i.oldLeft=i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.oldTop=i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),t.movable&&t.cropBoxMovable&&r.setData(e.face,"action",i.width===a.width&&i.height===a.height?"move":"all"),r.setStyle(e.cropBox,{width:i.width,height:i.height,left:i.left,top:i.top}),e.cropped&&e.limited&&e.limitCanvas(!0,!0),e.disabled||e.output()},output:function(){var e=this;e.preview(),e.complete&&r.dispatchEvent(e.element,"crop",e.getData())}}},function(e,t){"use strict";function a(e){return ae.call(e).slice(8,-1).toLowerCase()}function i(e){return"number"==typeof e&&!isNaN(e)}function o(e){return"undefined"==typeof e}function r(e){return"object"===("undefined"==typeof e?"undefined":F(e))&&null!==e}function n(e){if(!r(e))return!1;try{var t=e.constructor,a=t.prototype;return t&&a&&ie.call(a,"isPrototypeOf")}catch(e){return!1}}function s(e){return"function"===a(e)}function d(e){return Array.isArray?Array.isArray(e):"array"===a(e)}function l(e,t){return t=t>=0?t:0,Array.from?Array.from(e).slice(t):oe.call(e,t)}function c(e){return"string"==typeof e&&(e=e.trim?e.trim():e.replace(V,"$1")),e}function h(e,t){if(e&&s(t)){var a=void 0;if(d(e)||i(e.length)){var o=e.length;for(a=0;a<o&&t.call(e,e[a],a,e)!==!1;a++);}else r(e)&&Object.keys(e).forEach(function(a){t.call(e,e[a],a,e)})}return e}function p(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0]===!0,o=i?t[1]:t[0];return t.length>1&&(t.shift(),t.forEach(function(e){r(e)&&Object.keys(e).forEach(function(t){i&&r(o[t])?p(!0,o[t],e[t]):o[t]=e[t]})})),o}function u(e,t){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return function(){for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return e.apply(t,i.concat(o))}}function m(e,t){var a=e.style;h(t,function(e,t){K.test(t)&&i(e)&&(e+="px"),a[t]=e})}function f(e,t){return e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function v(e,t){if(i(e.length))return void h(e,function(e){v(e,t)});if(e.classList)return void e.classList.add(t);var a=c(e.className);a?a.indexOf(t)<0&&(e.className=a+" "+t):e.className=t}function g(e,t){return i(e.length)?void h(e,function(e){g(e,t)}):e.classList?void e.classList.remove(t):void(e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}function w(e,t,a){return i(e.length)?void h(e,function(e){w(e,t,a)}):void(a?v(e,t):g(e,t))}function b(e){return e.replace(q,"$1-$2").toLowerCase()}function y(e,t){return r(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-"+b(t))}function x(e,t,a){r(a)?e[t]=a:e.dataset?e.dataset[t]=a:e.setAttribute("data-"+b(t),a)}function C(e,t){r(e[t])?delete e[t]:e.dataset?delete e.dataset[t]:e.removeAttribute("data-"+b(t))}function M(e,t,a){var i=c(t).split(G);return i.length>1?void h(i,function(t){M(e,t,a)}):void(e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent&&e.detachEvent("on"+t,a))}function D(e,t,a,i){var o=c(t).split(G),r=a;return o.length>1?void h(o,function(t){D(e,t,a)}):(i&&(a=function(){for(var i=arguments.length,o=Array(i),n=0;n<i;n++)o[n]=arguments[n];return M(e,t,a),r.apply(e,o)}),void(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on${type}",a)))}function L(e,t,a){if(e.dispatchEvent){var i=void 0;return s(Event)&&s(CustomEvent)?i=o(a)?new Event(t,{bubbles:!0,cancelable:!0}):new CustomEvent(t,{detail:a,bubbles:!0,cancelable:!0}):o(a)?(i=document.createEvent("Event"),i.initEvent(t,!0,!0)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,!0,!0,a)),e.dispatchEvent(i)}return!e.fireEvent||e.fireEvent("on"+t)}function B(e){var t=e||window.event;if(t.target||(t.target=t.srcElement||document),!i(t.pageX)&&i(t.clientX)){var a=e.target.ownerDocument||document,o=a.documentElement,r=a.body;t.pageX=t.clientX+((o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0)),t.pageY=t.clientY+((o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0))}return t}function O(e){var t=document.documentElement,a=e.getBoundingClientRect();return{left:a.left+((window.scrollX||t&&t.scrollLeft||0)-(t&&t.clientLeft||0)),top:a.top+((window.scrollY||t&&t.scrollTop||0)-(t&&t.clientTop||0))}}function T(e){var t=e.length,a=0,i=0;return t&&(h(e,function(e){a+=e.pageX,i+=e.pageY}),a/=t,i/=t),{pageX:a,pageY:i}}function E(e,t){return e.getElementsByTagName(t)}function N(e,t){return e.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t)}function k(e){return document.createElement(e)}function X(e,t){e.appendChild(t)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function S(e){var t=e.match(Z);return t&&(t[1]!==location.protocol||t[2]!==location.hostname||t[3]!==location.port)}function H(e){var t="timestamp="+(new Date).getTime();return e+(e.indexOf("?")===-1?"?":"&")+t}function P(e,t){if(e.naturalWidth&&!ee)return void t(e.naturalWidth,e.naturalHeight);var a=k("img");a.onload=function(){t(this.width,this.height)},a.src=e.src}function z(e){var t=[],a=e.rotate,o=e.scaleX,r=e.scaleY;return i(a)&&0!==a&&t.push("rotate("+a+"deg)"),i(o)&&1!==o&&t.push("scaleX("+o+")"),i(r)&&1!==r&&t.push("scaleY("+r+")"),t.length?t.join(" "):"none"}function R(e,t){var a=Math.abs(e.degree)%180,i=(a>90?180-a:a)*Math.PI/180,o=Math.sin(i),r=Math.cos(i),n=e.width,s=e.height,d=e.aspectRatio,l=void 0,c=void 0;return t?(l=n/(r+o/d),c=l/d):(l=n*r+s*o,c=n*o+s*r),{width:l,height:c}}function A(e,t){var a=k("canvas"),o=a.getContext("2d"),r=0,n=0,s=t.naturalWidth,d=t.naturalHeight,l=t.rotate,c=t.scaleX,h=t.scaleY,p=i(c)&&i(h)&&(1!==c||1!==h),u=i(l)&&0!==l,m=u||p,f=s*Math.abs(c||1),v=d*Math.abs(h||1),g=void 0,w=void 0,b=void 0;return p&&(g=f/2,w=v/2),u&&(b=R({width:f,height:v,degree:l}),f=b.width,v=b.height,g=f/2,w=v/2),a.width=f,a.height=v,m&&(r=-s/2,n=-d/2,o.save(),o.translate(g,w)),u&&o.rotate(l*Math.PI/180),p&&o.scale(c,h),o.drawImage(e,Math.floor(r),Math.floor(n),Math.floor(s),Math.floor(d)),m&&o.restore(),a}function _(e,t,a){var i="",o=t;for(a+=t;o<a;o++)i+=re(e.getUint8(o));return i}function j(e){var t=new DataView(e),a=t.byteLength,i=void 0,o=void 0,r=void 0,n=void 0,s=void 0,d=void 0,l=void 0,c=void 0,h=void 0,p=void 0;if(255===t.getUint8(0)&&216===t.getUint8(1))for(h=2;h<a;){if(255===t.getUint8(h)&&225===t.getUint8(h+1)){l=h;break}h++}if(l&&(o=l+4,r=l+10,"Exif"===_(t,o,4)&&(d=t.getUint16(r),s=18761===d,(s||19789===d)&&42===t.getUint16(r+2,s)&&(n=t.getUint32(r+4,s),n>=8&&(c=r+n)))),c)for(a=t.getUint16(c,s),p=0;p<a;p++)if(h=c+12*p+2,274===t.getUint16(h,s)){h+=8,i=t.getUint16(h,s),ee&&t.setUint16(h,1,s);break}return i}function U(e){var t=e.replace($,""),a=atob(t),i=a.length,o=new ArrayBuffer(i),r=new Uint8Array(o),n=void 0;for(n=0;n<i;n++)r[n]=a.charCodeAt(n);return o}function I(e){var t=new Uint8Array(e),a=t.length,i="",o=void 0;for(o=0;o<a;o++)i+=re(t[o]);return"data:image/jpeg;base64,"+btoa(i)}Object.defineProperty(t,"__esModule",{value:!0});var F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.typeOf=a,t.isNumber=i,t.isUndefined=o,t.isObject=r,t.isPlainObject=n,t.isFunction=s,t.isArray=d,t.toArray=l,t.trim=c,t.each=h,t.extend=p,t.proxy=u,t.setStyle=m,t.hasClass=f,t.addClass=v,t.removeClass=g,t.toggleClass=w,t.hyphenate=b,t.getData=y,t.setData=x,t.removeData=C,t.removeListener=M,t.dispatchEvent=L,t.getEvent=B,t.getOffset=O,t.getTouchesCenter=T,t.getByTag=E,t.getByClass=N,t.createElement=k,t.appendChild=X,t.removeChild=W,t.empty=Y,t.isCrossOriginURL=S,t.addTimestamp=H,t.getImageSize=P,t.getTransform=z,t.getRotatedSizes=R,t.getSourceCanvas=A,t.getStringFromCharCode=_,t.getOrientation=j,t.dataURLToArrayBuffer=U,t.arrayBufferToDataURL=I;var $=/^data:([^;]+);base64,/,q=/([a-z\d])([A-Z])/g,Z=/^(https?:)\/\/([^:\/\?#]+):?(\d*)/i,G=/\s+/,K=/^(width|height|left|top|marginLeft|marginTop)$/,V=/^\s+(.*)\s+$/,J=/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i,Q=window.navigator,ee=Q&&J.test(Q.userAgent),te=Object.prototype,ae=te.toString,ie=te.hasOwnProperty,oe=Array.prototype.slice,re=String.fromCharCode;t.addListener=D},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),r=i(o),n="preview";t.default={initPreview:function(){var e=this,t=e.options.preview,a=r.createElement("img"),i=e.crossOrigin,o=i?e.crossOriginUrl:e.url;if(i&&(a.crossOrigin=i),a.src=o,r.appendChild(e.viewBox,a),e.image2=a,t){var s=document.querySelectorAll(t);e.previews=s,r.each(s,function(e){var t=r.createElement("img");r.setData(e,n,{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),i&&(t.crossOrigin=i),t.src=o,t.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',r.empty(e),r.appendChild(e,t)})}},resetPreview:function(){r.each(this.previews,function(e){var t=r.getData(e,n);r.setStyle(e,{width:t.width,height:t.height}),e.innerHTML=t.html,r.removeData(e,n)})},preview:function(){var e=this,t=e.imageData,a=e.canvasData,i=e.cropBoxData,o=i.width,s=i.height,d=t.width,l=t.height,c=i.left-a.left-t.left,h=i.top-a.top-t.top,p=r.getTransform(t),u={WebkitTransform:p,msTransform:p,transform:p};e.cropped&&!e.disabled&&(r.setStyle(e.image2,r.extend({width:d,height:l,marginLeft:-c,marginTop:-h},u)),r.each(e.previews,function(e){var t=r.getData(e,n),a=t.width,i=t.height,p=a,m=i,f=1;o&&(f=a/o,m=s*f),s&&m>i&&(f=i/s,p=o*f,m=i),r.setStyle(e,{width:p,height:m}),r.setStyle(r.getByTag(e,"img")[0],r.extend({width:d*f,height:l*f,marginLeft:-c*f,marginTop:-h*f},u))}))}}},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),r=i(o),n="mousedown touchstart pointerdown MSPointerDown",s="mousemove touchmove pointermove MSPointerMove",d="mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",l="wheel mousewheel DOMMouseScroll",c="dblclick",h="resize",p="cropstart",u="cropmove",m="cropend",f="crop",v="zoom";t.default={bind:function(){var e=this,t=e.options,a=e.element,i=e.cropper;r.isFunction(t.cropstart)&&r.addListener(a,p,t.cropstart),r.isFunction(t.cropmove)&&r.addListener(a,u,t.cropmove),r.isFunction(t.cropend)&&r.addListener(a,m,t.cropend),r.isFunction(t.crop)&&r.addListener(a,f,t.crop),r.isFunction(t.zoom)&&r.addListener(a,v,t.zoom),r.addListener(i,n,e.onCropStart=r.proxy(e.cropStart,e)),t.zoomable&&t.zoomOnWheel&&r.addListener(i,l,e.onWheel=r.proxy(e.wheel,e)),t.toggleDragModeOnDblclick&&r.addListener(i,c,e.onDblclick=r.proxy(e.dblclick,e)),r.addListener(document,s,e.onCropMove=r.proxy(e.cropMove,e)),r.addListener(document,d,e.onCropEnd=r.proxy(e.cropEnd,e)),t.responsive&&r.addListener(window,h,e.onResize=r.proxy(e.resize,e))},unbind:function(){var e=this,t=e.options,a=e.element,i=e.cropper;r.isFunction(t.cropstart)&&r.removeListener(a,p,t.cropstart),r.isFunction(t.cropmove)&&r.removeListener(a,u,t.cropmove),r.isFunction(t.cropend)&&r.removeListener(a,m,t.cropend),r.isFunction(t.crop)&&r.removeListener(a,f,t.crop),r.isFunction(t.zoom)&&r.removeListener(a,v,t.zoom),r.removeListener(i,n,e.onCropStart),t.zoomable&&t.zoomOnWheel&&r.removeListener(i,l,e.onWheel),t.toggleDragModeOnDblclick&&r.removeListener(i,c,e.onDblclick),r.removeListener(document,s,e.onCropMove),r.removeListener(document,d,e.onCropEnd),t.responsive&&r.removeListener(window,h,e.onResize)}}},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.REGEXP_ACTIONS=void 0;var o=a(4),r=i(o),n=t.REGEXP_ACTIONS=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;t.default={resize:function(){var e=this,t=e.options.restore,a=e.container,i=e.containerData;if(!e.disabled&&i){var o=a.offsetWidth/i.width,n=void 0,s=void 0;1===o&&a.offsetHeight===i.height||(t&&(n=e.getCanvasData(),s=e.getCropBoxData()),e.render(),t&&(e.setCanvasData(r.each(n,function(e,t){n[t]=e*o})),e.setCropBoxData(r.each(s,function(e,t){s[t]=e*o}))))}},dblclick:function(){var e=this;e.disabled||e.setDragMode(r.hasClass(e.dragBox,"cropper-crop")?"move":"crop")},wheel:function(e){var t=this,a=r.getEvent(e),i=Number(t.options.wheelZoomRatio)||.1,o=1;t.disabled||(a.preventDefault(),t.wheeling||(t.wheeling=!0,setTimeout(function(){t.wheeling=!1},50),a.deltaY?o=a.deltaY>0?1:-1:a.wheelDelta?o=-a.wheelDelta/120:a.detail&&(o=a.detail>0?1:-1),t.zoom(-o*i,a)))},cropStart:function(e){var t=this,a=t.options,i=r.getEvent(e),o=i.touches,s=void 0,d=void 0,l=void 0;if(!t.disabled){if(o){if(s=o.length,s>1){if(!a.zoomable||!a.zoomOnTouch||2!==s)return;d=o[1],t.startX2=d.pageX,t.startY2=d.pageY,l="zoom"}d=o[0]}if(l=l||r.getData(i.target,"action"),n.test(l)){if(r.dispatchEvent(t.element,"cropstart",{originalEvent:i,action:l})===!1)return;i.preventDefault(),t.action=l,t.cropping=!1,t.startX=d?d.pageX:i.pageX,t.startY=d?d.pageY:i.pageY,"crop"===l&&(t.cropping=!0,r.addClass(t.dragBox,"cropper-modal"))}}},cropMove:function(e){var t=this,a=t.options,i=r.getEvent(e),o=i.touches,n=t.action,s=void 0,d=void 0;if(!t.disabled){if(o){if(s=o.length,s>1){if(!a.zoomable||!a.zoomOnTouch||2!==s)return;d=o[1],t.endX2=d.pageX,t.endY2=d.pageY}d=o[0]}if(n){if(r.dispatchEvent(t.element,"cropmove",{originalEvent:i,action:n})===!1)return;i.preventDefault(),t.endX=d?d.pageX:i.pageX,t.endY=d?d.pageY:i.pageY,t.change(i.shiftKey,"zoom"===n?i:null)}}},cropEnd:function(e){var t=this,a=t.options,i=r.getEvent(e),o=t.action;t.disabled||o&&(i.preventDefault(),t.cropping&&(t.cropping=!1,r.toggleClass(t.dragBox,"cropper-modal",t.cropped&&a.modal)),t.action="",r.dispatchEvent(t.element,"cropend",{originalEvent:i,action:o}))}}},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),r=i(o),n="e",s="w",d="s",l="n",c="se",h="sw",p="ne",u="nw";t.default={change:function(e,t){var a=this,i=a.options,o=a.containerData,m=a.canvasData,f=a.cropBoxData,v=i.aspectRatio,g=a.action,w=f.width,b=f.height,y=f.left,x=f.top,C=y+w,M=x+b,D=0,L=0,B=o.width,O=o.height,T=!0,E=void 0;!v&&e&&(v=w&&b?w/b:1),a.limited&&(D=f.minLeft,L=f.minTop,B=D+Math.min(o.width,m.width,m.left+m.width),O=L+Math.min(o.height,m.height,m.top+m.height));var N={x:a.endX-a.startX,y:a.endY-a.startY};switch(v&&(N.X=N.y*v,N.Y=N.x/v),g){case"all":y+=N.x,x+=N.y;break;case n:if(N.x>=0&&(C>=B||v&&(x<=L||M>=O))){T=!1;break}w+=N.x,v&&(b=w/v,x-=N.Y/2),w<0&&(g=s,w=0);break;case l:if(N.y<=0&&(x<=L||v&&(y<=D||C>=B))){T=!1;break}b-=N.y,x+=N.y,v&&(w=b*v,y+=N.X/2),b<0&&(g=d,b=0);break;case s:if(N.x<=0&&(y<=D||v&&(x<=L||M>=O))){T=!1;break}w-=N.x,y+=N.x,v&&(b=w/v,x+=N.Y/2),w<0&&(g=n,w=0);break;case d:if(N.y>=0&&(M>=O||v&&(y<=D||C>=B))){T=!1;break}b+=N.y,v&&(w=b*v,y-=N.X/2),b<0&&(g=l,b=0);break;case p:if(v){if(N.y<=0&&(x<=L||C>=B)){T=!1;break}b-=N.y,x+=N.y,w=b*v}else N.x>=0?C<B?w+=N.x:N.y<=0&&x<=L&&(T=!1):w+=N.x,N.y<=0?x>L&&(b-=N.y,x+=N.y):(b-=N.y,x+=N.y);w<0&&b<0?(g=h,b=0,w=0):w<0?(g=u,w=0):b<0&&(g=c,b=0);break;case u:if(v){if(N.y<=0&&(x<=L||y<=D)){T=!1;break}b-=N.y,x+=N.y,w=b*v,y+=N.X}else N.x<=0?y>D?(w-=N.x,y+=N.x):N.y<=0&&x<=L&&(T=!1):(w-=N.x,y+=N.x),N.y<=0?x>L&&(b-=N.y,x+=N.y):(b-=N.y,x+=N.y);w<0&&b<0?(g=c,b=0,w=0):w<0?(g=p,w=0):b<0&&(g=h,b=0);break;case h:if(v){if(N.x<=0&&(y<=D||M>=O)){T=!1;break}w-=N.x,y+=N.x,b=w/v}else N.x<=0?y>D?(w-=N.x,y+=N.x):N.y>=0&&M>=O&&(T=!1):(w-=N.x,y+=N.x),N.y>=0?M<O&&(b+=N.y):b+=N.y;w<0&&b<0?(g=p,b=0,w=0):w<0?(g=c,w=0):b<0&&(g=u,b=0);break;case c:if(v){if(N.x>=0&&(C>=B||M>=O)){T=!1;break}w+=N.x,b=w/v}else N.x>=0?C<B?w+=N.x:N.y>=0&&M>=O&&(T=!1):w+=N.x,N.y>=0?M<O&&(b+=N.y):b+=N.y;w<0&&b<0?(g=u,b=0,w=0):w<0?(g=h,w=0):b<0&&(g=p,b=0);break;case"move":a.move(N.x,N.y),T=!1;break;case"zoom":a.zoom(function(e,t,a,i){var o=Math.sqrt(e*e+t*t),r=Math.sqrt(a*a+i*i);return(r-o)/o}(Math.abs(a.startX-a.startX2),Math.abs(a.startY-a.startY2),Math.abs(a.endX-a.endX2),Math.abs(a.endY-a.endY2)),t),a.startX2=a.endX2,a.startY2=a.endY2,T=!1;break;case"crop":if(!N.x||!N.y){T=!1;break}E=r.getOffset(a.cropper),y=a.startX-E.left,x=a.startY-E.top,w=f.minWidth,b=f.minHeight,N.x>0?g=N.y>0?c:p:N.x<0&&(y-=w,g=N.y>0?h:u),N.y<0&&(x-=b),a.cropped||(r.removeClass(a.cropBox,"cropper-hidden"),a.cropped=!0,a.limited&&a.limitCropBox(!0,!0))}T&&(f.width=w,f.height=b,f.left=y,f.top=x,a.action=g,a.renderCropBox()),a.startX=a.endX,a.startY=a.endY}}},function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(4),n=i(r);t.default={crop:function(){var e=this;return e.ready&&!e.disabled&&(e.cropped||(e.cropped=!0,e.limitCropBox(!0,!0),e.options.modal&&n.addClass(e.dragBox,"cropper-modal"),n.removeClass(e.cropBox,"cropper-hidden")),e.setCropBoxData(e.initialCropBoxData)),e},reset:function(){var e=this;return e.ready&&!e.disabled&&(e.imageData=n.extend({},e.initialImageData),e.canvasData=n.extend({},e.initialCanvasData),e.cropBoxData=n.extend({},e.initialCropBoxData),e.renderCanvas(),e.cropped&&e.renderCropBox()),e},clear:function(){var e=this;return e.cropped&&!e.disabled&&(n.extend(e.cropBoxData,{left:0,top:0,width:0,height:0}),e.cropped=!1,e.renderCropBox(),e.limitCanvas(),e.renderCanvas(),n.removeClass(e.dragBox,"cropper-modal"),n.addClass(e.cropBox,"cropper-hidden")),e},replace:function(e,t){var a=this;return!a.disabled&&e&&(a.isImg&&(a.element.src=e),t?(a.url=e,a.image.src=e,a.ready&&(a.image2.src=e,n.each(a.previews,function(t){n.getByTag(t,"img")[0].src=e}))):(a.isImg&&(a.replaced=!0),a.options.data=null,a.load(e))),a},enable:function(){var e=this;return e.ready&&(e.disabled=!1,n.removeClass(e.cropper,"cropper-disabled")),e},disable:function(){var e=this;return e.ready&&(e.disabled=!0,n.addClass(e.cropper,"cropper-disabled")),
e},destroy:function(){var e=this,t=e.element,a=e.image;return e.loaded?(e.isImg&&e.replaced&&(t.src=e.originalUrl),e.unbuild(),n.removeClass(t,"cropper-hidden")):e.isImg?n.removeListener(t,"load",e.start):a&&n.removeChild(a),n.removeData(t,"cropper"),e},move:function(e,t){var a=this,i=a.canvasData;return a.moveTo(n.isUndefined(e)?e:i.left+Number(e),n.isUndefined(t)?t:i.top+Number(t))},moveTo:function(e,t){var a=this,i=a.canvasData,o=!1;return n.isUndefined(t)&&(t=e),e=Number(e),t=Number(t),a.ready&&!a.disabled&&a.options.movable&&(n.isNumber(e)&&(i.left=e,o=!0),n.isNumber(t)&&(i.top=t,o=!0),o&&a.renderCanvas(!0)),a},zoom:function(e,t){var a=this,i=a.canvasData;return e=Number(e),e=e<0?1/(1-e):1+e,a.zoomTo(i.width*e/i.naturalWidth,t)},zoomTo:function(e,t){var a=this,i=a.options,o=a.canvasData,r=o.width,s=o.height,d=o.naturalWidth,l=o.naturalHeight,c=void 0,h=void 0,p=void 0,u=void 0;if(e=Number(e),e>=0&&a.ready&&!a.disabled&&i.zoomable){if(c=d*e,h=l*e,n.dispatchEvent(a.element,"zoom",{originalEvent:t,oldRatio:r/d,ratio:c/d})===!1)return a;t?(p=n.getOffset(a.cropper),u=t.touches?n.getTouchesCenter(t.touches):{pageX:t.pageX,pageY:t.pageY},o.left-=(c-r)*((u.pageX-p.left-o.left)/r),o.top-=(h-s)*((u.pageY-p.top-o.top)/s)):(o.left-=(c-r)/2,o.top-=(h-s)/2),o.width=c,o.height=h,a.renderCanvas(!0)}return a},rotate:function(e){var t=this;return t.rotateTo((t.imageData.rotate||0)+Number(e))},rotateTo:function(e){var t=this;return e=Number(e),n.isNumber(e)&&t.ready&&!t.disabled&&t.options.rotatable&&(t.imageData.rotate=e%360,t.rotated=!0,t.renderCanvas(!0)),t},scale:function(e,t){var a=this,i=a.imageData,o=!1;return n.isUndefined(t)&&(t=e),e=Number(e),t=Number(t),a.ready&&!a.disabled&&a.options.scalable&&(n.isNumber(e)&&(i.scaleX=e,o=!0),n.isNumber(t)&&(i.scaleY=t,o=!0),o&&a.renderImage(!0)),a},scaleX:function(e){var t=this,a=t.imageData.scaleY;return t.scale(e,n.isNumber(a)?a:1)},scaleY:function(e){var t=this,a=t.imageData.scaleX;return t.scale(n.isNumber(a)?a:1,e)},getData:function(e){var t=this,a=t.options,i=t.imageData,o=t.canvasData,r=t.cropBoxData,s=void 0,d=void 0;return t.ready&&t.cropped?(d={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height},s=i.width/i.naturalWidth,n.each(d,function(t,a){t/=s,d[a]=e?Math.round(t):t})):d={x:0,y:0,width:0,height:0},a.rotatable&&(d.rotate=i.rotate||0),a.scalable&&(d.scaleX=i.scaleX||1,d.scaleY=i.scaleY||1),d},setData:function(e){var t=this,a=t.options,i=t.imageData,o=t.canvasData,r={},s=void 0,d=void 0,l=void 0;return n.isFunction(e)&&(e=e.call(t.element)),t.ready&&!t.disabled&&n.isPlainObject(e)&&(a.rotatable&&n.isNumber(e.rotate)&&e.rotate!==i.rotate&&(i.rotate=e.rotate,t.rotated=s=!0),a.scalable&&(n.isNumber(e.scaleX)&&e.scaleX!==i.scaleX&&(i.scaleX=e.scaleX,d=!0),n.isNumber(e.scaleY)&&e.scaleY!==i.scaleY&&(i.scaleY=e.scaleY,d=!0)),s?t.renderCanvas():d&&t.renderImage(),l=i.width/i.naturalWidth,n.isNumber(e.x)&&(r.left=e.x*l+o.left),n.isNumber(e.y)&&(r.top=e.y*l+o.top),n.isNumber(e.width)&&(r.width=e.width*l),n.isNumber(e.height)&&(r.height=e.height*l),t.setCropBoxData(r)),t},getContainerData:function(){var e=this;return e.ready?e.containerData:{}},getImageData:function(){var e=this;return e.loaded?e.imageData:{}},getCanvasData:function(){var e=this,t=e.canvasData,a={};return e.ready&&n.each(["left","top","width","height","naturalWidth","naturalHeight"],function(e){a[e]=t[e]}),a},setCanvasData:function(e){var t=this,a=t.canvasData,i=a.aspectRatio;return n.isFunction(e)&&(e=e.call(t.element)),t.ready&&!t.disabled&&n.isPlainObject(e)&&(n.isNumber(e.left)&&(a.left=e.left),n.isNumber(e.top)&&(a.top=e.top),n.isNumber(e.width)?(a.width=e.width,a.height=e.width/i):n.isNumber(e.height)&&(a.height=e.height,a.width=e.height*i),t.renderCanvas(!0)),t},getCropBoxData:function(){var e=this,t=e.cropBoxData,a=void 0;return e.ready&&e.cropped&&(a={left:t.left,top:t.top,width:t.width,height:t.height}),a||{}},setCropBoxData:function(e){var t=this,a=t.cropBoxData,i=t.options.aspectRatio,o=void 0,r=void 0;return n.isFunction(e)&&(e=e.call(t.element)),t.ready&&t.cropped&&!t.disabled&&n.isPlainObject(e)&&(n.isNumber(e.left)&&(a.left=e.left),n.isNumber(e.top)&&(a.top=e.top),n.isNumber(e.width)&&(o=!0,a.width=e.width),n.isNumber(e.height)&&(r=!0,a.height=e.height),i&&(o?a.height=a.width/i:r&&(a.width=a.height*i)),t.renderCropBox()),t},getCroppedCanvas:function(e){var t=this;if(!t.ready||!window.HTMLCanvasElement)return null;if(!t.cropped)return n.getSourceCanvas(t.image,t.imageData);n.isPlainObject(e)||(e={});var a=t.getData(),i=a.width,r=a.height,s=i/r,d=void 0,l=void 0,c=void 0;n.isPlainObject(e)&&(d=e.width,l=e.height,d?(l=d/s,c=d/i):l&&(d=l*s,c=l/r));var h=Math.floor(d||i),p=Math.floor(l||r),u=n.createElement("canvas"),m=u.getContext("2d");u.width=h,u.height=p,e.fillColor&&(m.fillStyle=e.fillColor,m.fillRect(0,0,h,p));var f=function(){var e=n.getSourceCanvas(t.image,t.imageData),o=e.width,s=e.height,d=t.canvasData,l=[e],h=a.x+d.naturalWidth*(Math.abs(a.scaleX||1)-1)/2,p=a.y+d.naturalHeight*(Math.abs(a.scaleY||1)-1)/2,u=void 0,m=void 0,f=void 0,v=void 0,g=void 0,w=void 0;return h<=-i||h>o?h=u=f=g=0:h<=0?(f=-h,h=0,u=g=Math.min(o,i+h)):h<=o&&(f=0,u=g=Math.min(i,o-h)),u<=0||p<=-r||p>s?p=m=v=w=0:p<=0?(v=-p,p=0,m=w=Math.min(s,r+p)):p<=s&&(v=0,m=w=Math.min(r,s-p)),l.push(Math.floor(h),Math.floor(p),Math.floor(u),Math.floor(m)),c&&(f*=c,v*=c,g*=c,w*=c),g>0&&w>0&&l.push(Math.floor(f),Math.floor(v),Math.floor(g),Math.floor(w)),l}();return m.drawImage.apply(m,o(f)),u},setAspectRatio:function(e){var t=this,a=t.options;return t.disabled||n.isUndefined(e)||(a.aspectRatio=Math.max(0,e)||NaN,t.ready&&(t.initCropBox(),t.cropped&&t.renderCropBox())),t},setDragMode:function(e){var t=this,a=t.options,i=t.dragBox,o=t.face,r=void 0,s=void 0;return t.loaded&&!t.disabled&&(r="crop"===e,s=a.movable&&"move"===e,e=r||s?e:"none",n.setData(i,"action",e),n.toggleClass(i,"cropper-crop",r),n.toggleClass(i,"cropper-move",s),a.cropBoxMovable||(n.setData(o,"action",e),n.toggleClass(o,"cropper-crop",r),n.toggleClass(o,"cropper-move",s))),t}}}])});
/**
 * Created by Creo on 19.05.2017.
 */

$artdiller = $('body');

$.fn.extend({
    animateShow: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).css("opacity", "1");
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.extend({
    animateHide: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).css("opacity", "0");
            $(this).removeClass('visible animated ' + animationName);
        });
    }
});

$.fn.extend({
    animateToggle: function (animationNameIn, animationNameOut) {
        console.log($(this));
        if ($(this).hasClass('hidden')) {
            $(this).animateShow(animationNameIn);
        }
        else {
            $(this).animateHide(animationNameOut);
        }
    }
});


$('.stylish input').click(function () {
    $(this).closest('div').find('select').slideToggle(110);
});

$('.stylish select').click(function () {
    $(this).hide().closest('div').find('input').val($(this).find('option:selected').text());
});

var optionsSelect2 = {
    dropdownCssClass: 'no-search',
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true,
    width: 'auto'
};

$('select').select2(optionsSelect2);


$('.product-overview').click(function () {
    var $id = $(this).data('target');
    $artdiller.trigger({ type: "product-overview", action: 'show', uid : $id});
});

$('.close-product-overview').click(function() {
    $artdiller.trigger({ type: "product-overview", action: 'hide'});
});

$('.menu-sandwich').click(function(){
    $artdiller.trigger({ type: "menu-sandwich"});
});

/*
    Product section functionality
 */
$(document).ready(function () {

    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');

    /* PRODUCT section */

    var $productNavigation = $('#card-menu');
    var $productMainFrame = $('#card-view');
    var $imageContainer = $('#product-image');
    
    $artdiller.on('product-overview', function (event) {
          if(event.action == 'show') {
              displayProductSection(event.uid);
          }

        if(event.action == 'hide') {
             hideProductSection()
        }
    });
    
    function hideProductSection() {
        $productNavigation.velocity('transition.bounceLeftOut');
        $productMainFrame.velocity('transition.bounceRightOut');
    }
    
    function displayProductSection(uid) {
        console.log(uid);
        $productCard = $('#product-'+uid);
        $imageUrl = $productCard.find('.pic-image').attr('src');
        $imageContainer.attr('src',$imageUrl);
        $productNavigation.velocity('transition.bounceLeftIn');
        $productMainFrame.velocity('transition.bounceRightIn');
    }

    /* end PRODUCT section */

    /* MENU section */

    var $menuSection = $('.menu-section');
    var $menuSandwich = $('.menu-sandwich');
    $artdiller.on('menu-sandwich', function () {
        $('.slide-burger-menu').toggleClass('active');
        $('.burger-menu').toggleClass('active');

        var opened = $menuSandwich.data('opened');
        if(opened){
            closeMenuSection();
        }else{
            openMenuSection();
        }
        $menuSandwich.find('.menu-trigger').toggleClass('active');

    });

    $(document).click(function(event) {
        bindCloseMenuSection();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27){ //click ESC key
            if($('.menu-trigger').hasClass('active'))
                bindCloseMenuSection();
            else
                $('.close-product-overview').click();
        }
    });

    function bindCloseMenuSection(){
        if(!$(event.target).closest('.menu-section').length&&!$(event.target).closest('.menu-sandwich').length&&$('.menu-trigger').hasClass('active')) {
            $('.slide-burger-menu').toggleClass('active');
            $('.burger-menu').toggleClass('active');
            closeMenuSection();
            $menuSandwich.find('.menu-trigger').toggleClass('active');
        }
    }

    function openMenuSection(){
        $menuSection.velocity('transition.bounceRightIn');
        $menuSandwich.data('opened',1);
        if(!$('.settings-block').length){
            $('.wrapper').addClass('tint-overlay');
        }
        $('#home-page').addClass('tint-overlay');
        $('#sub-nav-section').addClass('tint-overlay');
        $('.sub-menu-navigation').animateShow('fadeInRight');
    }

    function closeMenuSection(){
        $menuSection.velocity('transition.bounceRightOut');
        $menuSandwich.data('opened',0);
        if ($menuSandwich.find('.menu-trigger').hasClass('active')) {
            $('.wrapper').removeClass('tint-overlay');
            $('#home-page').removeClass('tint-overlay');
            $('#sub-nav-section').removeClass('tint-overlay');
            $('.sub-menu-navigation').animateHide('fadeOutRight');
        }
    }

    /* end MENU section */

    /* Color Filter */
    if($('.color-palette-li').length){
        $(document).click(function(event) {
            if(!$(event.target).closest('.color-palette-li').length) {
                $('.color-palette-li').removeClass('m-filter-change');
            }
        });

        $('.color-palette-li').on('click',function(e){
            if (e.target !== this&&(!$(e.target).hasClass('mf-name')&&!$(e.target).hasClass('mf-dot')))
                return;
            if (!$(this).hasClass('m-filter-change')) {
                $('.m-filter-item').removeClass('m-filter-change');
            }
            $(this).toggleClass('m-filter-change');
        });

        $('.mf-color-box').on('click',function(){
            $('.mf-color-box').removeClass('mf-color-change');
            $(this).addClass('mf-color-change');
            $(".cielch-demo").trigger("colorpickersliders.updateColor", $(this).css('background-color'));
        })
    }

    if($(".cielch-demo").length){
        $(".cielch-demo").ColorPickerSliders({
            flat: true,
            color: "#fff",
            connectedinput: '.full-color-input',
            order: {
                hsl: 1
            },onchange: function(container, color) {
                if($('.mf-color-item').hasClass('m-filter-change'))
                    $('.mf-color-item').addClass('mf-active');
                $(".cp-marker").css("background-color", color.tiny.toRgbString());
                //console.log($('.hsl-color').val());
                //update_filter_params();
            }
        });
        $('.cp-hsllightness span').text('');
    }

    /* end Color Filter */


    /* CROPPER */

    var cropper;
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                if(cropper)
                    cropper.destroy();

                $(input).val(null); // clear input val for change same file

                $('#cropp').attr('src', e.target.result);
                $('.image-cropper').show();
                var image = document.getElementById('cropp');
                cropper = new Cropper(image, {
                    aspectRatio: 1 / 1,
                    viewMode: 2,
                    /*preview: '.avatar-preview',
                    crop: function(e) {
                        //start_img_cropp(cropper);
                    },*/
                    cropend: function(){
                        startCroppingImage(cropper);
                    }
                });
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function startCroppingImage(cropper){
        var myimg = cropper.getCroppedCanvas({width:960,height:960});
        var b64data = myimg.toDataURL('image/jpeg');
        $('.img-res').val(b64data);
    }

    if($('#avatar-preview').length){
        $("#img-change-file").change(function(){
            readURL(this);
        });

        $('.add-avatar').on('click',function(){
            $("#img-change-file").click();
        });

        $('.btn-cancel-crop').on('click',function(){
            $('.img-res').val('');
            $('.image-cropper').hide();
        });

        $('.btn-save-crop').on('click',function(){
            startCroppingImage(cropper);
            $('#avatar-preview').attr('src',$('.img-res').val());
            $('.image-cropper').hide();
            saveCroppedImage();
        });
    }

    function saveCroppedImage(){
        var imageBase64 = $('.img-res').val();
        $.ajax({
            url: '/settings/profile/avatar',
            type: 'POST',
            data: {_token: CSRF_TOKEN, avatar_base64: imageBase64},
            dataType: 'JSON',
            success: function (data) {
                $('.img-res').val('');
                console.log($('.img-res').val());
            },
            error:function(){

            }
        });
    }


    /* end CROPPER */

    /* SETTINGS page*/

    $('.change-password').on('click', function () {
        $(this).parent().parent().hide();
        $('.password-block').show();
    });

    /* end SETTINGS page*/

    /* REGISTER page */
    $('.form-user-info input').on('input',function(){
        if($(this).attr('name')=='name'||$(this).attr('name')=='surname'||$(this).attr('name')=='pseudonym')
            generateUserNicknames();
    });

    if($('.nicknames ').length){
        generateUserNicknames();
    }

    function generateUserNicknames(){
        var params = [];
        var options = '<option value=""></option>';
        $('.form-user-info input').each(function(){
            if($(this).attr('name')=='name'||$(this).attr('name')=='surname'||$(this).attr('name')=='pseudonym')
                params.push($(this).val());
        });
        var cases = allPossibleCases(params,1);
        var issetOptions = [];
        var changedText = '';
        if($('.nicknames').data('changed')){
            changedText = $('.nicknames').data('changed');
        }
        $.each(cases,function(i,v){
            optionName = '';
            $.each(v,function(i,v){
                if(v!==''){
                    optionName += v + ' ';
                }
            });
            if(optionName!=''&&issetOptions[optionName]==undefined){
                issetOptions[optionName] = 1;
                changeString = '';
                if(changedText==optionName.trim()){
                    changeString = 'selected';
                }
                options += '<option value="'+optionName+'" '+ changeString +'>'+optionName+'</option>';
            }

        });
        $('.nicknames').html(options).select2("destroy").select2(optionsSelect2);


    }

    /**
     * Sort out possible combinations of array
     *
     * @param a - array
     * @param min - min combination count
     * @returns {Array}
     */
    function allPossibleCases(a,min) {
        var fn = function(n, src, got, all) {
            if (n == 0) {
                if (got.length > 0) {
                    all[all.length] = got;
                }
                return;
            }
            for (var j = 0; j < src.length; j++) {
                fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
            }
            return;
        }
        var all = [];
        for (var i = min; i < a.length; i++) {
            fn(i, a, [], all);
        }
        all.push(a);
        return all;

    }

    /* emd REGISTER page */


    /*
     Ajax Functionality for all forms with modal class
     */
    $(document).ready(function () {
        $('.modal-form').on('submit', function (e) {
            e.preventDefault(e);
            var $form = $(this).closest('form');
            var $modal = $(this).closest('.modal');
            var $formActionURL = $form.attr('action');
            var $errorBlock = $form.find('.error-block');
            var $token = $(this).closest('input[name="_token"]').val();
            var $successAction = $(this).attr('data-success-modal');
            var $successModal = $('#'+$(this).attr('data-success-modal'));
            $form.find('.form-error-message').hide().html('');
            $.ajax({
                type: "POST",
                url: $formActionURL,
                headers: {'X-CSRF-Token': $token},
                data: $form.serialize(),
                cache: false,
                success: function (resp) {
                    if (resp.status == 'error') {
                        $errorBlock.html(resp.responseJSON.message);
                        $modal.velocity("callout.shake");
                    }
                    else if (resp.status == 'success') {
                        if(resp.redirect!=undefined&&resp.redirect!=0){
                            window.location.href = resp.redirect;
                            return;
                        }

                        if($form.hasClass('simple-registration')) {
                            analyticsTrigger('signup','registration success','simple-signup')
                        }

                        if($successAction == 'redirectToDashboard') {
                            //console.log('redirect');
                            //window.location.href = '/dashboard';
                            return;
                        }

                        window.location.reload();
                        $errorBlock.html('');
                        closeAndOpenModal($modal,$successModal);
                    }
                    if($successAction == 'redirectHome'){
                        window.location.href = '/';
                        return;
                    }
                    $modal.modal('hide');
                },
                error: function (resp) {
                    $.each(resp.responseJSON,function(i,v){
                        console.log(i);
                        console.log(v);
                        messageText = '';
                        if($.isArray(v))
                            messageText = v[0];
                        else
                            messageText = v;

                        $form.find('.form-error-message[data-field="'+i+'"]').html(messageText).show();
                    });
                    console.log(resp.responseJSON);
                    if($form.hasClass('simple-registration')) {
                        analyticsTrigger('signup','validation error','simple-signup')
                    }


                    if($successAction == 'redirectHome'){
                        window.location.href = '/';
                        return;
                    }

                    //$errorBlock.html(resp.responseJSON.message);
                    //console.log($errorBlock);
                    $modal.velocity("callout.shake");


                }
            });


            function closeAndOpenModal($closeModal,$openModal) {
                $closeModal.on('hidden.bs.modal', function (e) {
                    //console.log('hideTrigger');
                    $openModal.modal('show');
                    $(this).off('hidden.bs.modal');
                });
                $closeModal.modal('hide');
            }
        });
    });

    /*
     END Ajax Functionality for all forms with modal class
     */


    if(window.location.href.indexOf('#login-modal') != -1) {
        $('#login-modal').modal('show');
    }
    if(window.location.href.indexOf('#reset-modal') != -1) {
        $('#reset-modal').modal('show');
    }

    $('.checked-btn').on('click',function(){
        $('.checked-btn[data-type="'+$(this).data('type')+'"]').removeClass('active');
        $(this).addClass('active');
        $('input[name="'+$(this).data('type')+'"]').val($(this).data('val'));

    });

    $('.multi-checked-btn').on('click',function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('form').find('input[data-name="materials"]')
        }
    });



    $('.add-preview').on('click',function(){
        $("#img-change-preview").click();
    });

    $("#img-change-preview").change(function(){
        readURLlive(this);
    });

    function readURLlive(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                $('#avatar-preview').attr('src', e.target.result);
                $('#avatar-preview').parent().removeClass('hidden');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }



    $('.add-original').on('click',function(){
        $("#img-change-original-file").click();
    });

    $("#img-change-original-file").change(function(){
        readURLFileOriginal(this);
    });

    var fileOriginalTypes = ['jpg', 'png', 'pdf', 'ai', 'eps'];

    function readURLFileOriginal(input) {
        if (input.files && input.files[0]) {

            var extension = input.files[0].name.split('.').pop().toLowerCase(),  //file extension from input file
                isSuccess = fileOriginalTypes.indexOf(extension) > -1;  //is extension in acceptable types

            if (isSuccess) { //yes
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.original-files').html('<div>.'+extension+'</div>');
                    bindRemoveOriginalFiles();
                }

                reader.readAsDataURL(input.files[0]);
            }
            else { //no
                alert('Файл выбранного типа не поддерживается');
            }



        }
    }

    bindRemoveOriginalFiles();


    function bindRemoveOriginalFiles(){
        $('.original-files>div').unbind('click').on('click',function(){
           if(confirm('Удалить этот файл?')){
               $(this).remove();
               $("#img-change-original-file").val(null);
           }
        });
    }

    var data = [{ id: 'Природа', text: 'Природа' }, { id: 'Человек', text: 'Человек' }, { id: 'Транспорт', text: 'Транспорт' }];


    $('.tags-select').select2('destroy').select2({
        tags: true,
        tokenSeparators: [','],
        data: data
    });


    /**
     * Add checked materials to form inputs
     */
    $('.form-item-create').on('submit',function(){
        var form = $(this);
        $('.multi-checked-btn[data-type="materials"]').each(function(){
            if($(this).hasClass('active')){
                $(form).append($("<input>")
                    .attr("type", "hidden")
                    .attr("name", "material[]").val($(this).text()));
            }
        });
    });




});