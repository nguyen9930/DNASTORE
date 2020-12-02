if (self.CavalryLogger) { CavalryLogger.start_js(["JXLs8"]); }

__d("csx",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){throw new Error("csx: Unexpected class selector transformation.")}}),null);
__d("BlueBar",["csx","CSS","DOMQuery","Style","ge"],(function(a,b,c,d,e,f,g){f.hasFixedBlueBar=c;f.getBar=l;f.getNavRoot=d;f.getMaybeFixedRoot=e;f.getLoggedOutRoot=g;f.getNewLoggedOutRoot=m;var h=document,i={};function j(a){return b("DOMQuery").scry(h,a)[0]}function k(a,b){return i[a]?i[a]:i[a]=j(b)}function a(){h=b("ge")("blueBarDOMInspector")||document,i={}}function c(){var a=this.getMaybeFixedRoot();return!a?!1:b("CSS").matchesSelector(a,"._5rmj")||b("Style").isFixed(a)}function l(){return k("bar","div._1s4v")}function d(){return k("navRoot","div._cx4")||l()}function e(){return k("maybeFixedRoot","div._26aw")}function g(){return k("maybeFixedRootLoggedOut","div._1pmx")}function m(){return k("maybeFixedRootLogin","div._53jh")}a()}),null);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){e.exports=a;var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}}),null);
__d("BootloadedReact",["Bootloader","isValidReactElement"],(function(a,b,c,d,e,f){var g=function(a){b("Bootloader").loadModules(["ReactDOM"],a,"BootloadedReact")};a={isValidElement:function(a){return b("isValidReactElement")(a)},render:function(a,b,c){g(function(d){d.render(a,b,function(){c&&c(this)})})},unmountComponentAtNode:function(a,b){g(function(c){c.unmountComponentAtNode(a),b&&b()})}};e.exports=a}),null);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){f.register=a;f.containsIncludingLayers=c;f.getContext=g;f.parentByClass=d;function a(a,c){a.setAttribute("data-ownerid",b("getOrCreateDOMID")(c))}function c(a,c){c=c;while(c){if(b("containsNode")(a,c))return!0;c=g(c)}return!1}function g(a){a=a;var c;while(a){if(a.getAttribute&&(c=a.getAttribute("data-ownerid")))return b("ge")(c);a=a.parentNode}return null}function d(a,c){a=a;var d;while(a&&!b("CSS").hasClass(a,c))a.getAttribute&&(d=a.getAttribute("data-ownerid"))?a=b("ge")(d):a=a.parentNode;return a}}),null);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";f.getElementDimensions=a;f.getDocumentDimensions=c;f.measureElementBox=d;function a(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}}function c(a){a=b("getDocumentScrollElement")(a);var c=a.scrollWidth||0;a=a.scrollHeight||0;return{width:c,height:a}}function d(a,c,d,e,f){var g;switch(c){case"left":case"right":case"top":case"bottom":g=[c];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+c)}c=function(c,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(b("Style").get(a,c+"-"+g[f]+d))||0;return e};return(d?c("padding",""):0)+(e?c("border","-width"):0)+(f?c("margin",""):0)}}),null);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f){e.exports=a;var g=null;function a(a){if(b("isTextNode")(a))return a.data;else if(b("isElementNode")(a)){if(g===null){var c=document.createElement("div");g=c.textContent!=null?"textContent":"innerText"}return a[g]}else return""}}),null);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}}),null);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),h=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var c=b("isContentEditable")(a),d=g.has(a.nodeName);a=a instanceof HTMLInputElement&&h.has(a.type);return(c||d)&&!a}}),null);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f){var g,h=null,i={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},j=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);c=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var c=a.prototype;c.mapKey=function(a){if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=i[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};c.onkeyevent=function(a,c){c=b("Event").$E(c);var d=this.handlers[c.keyCode]||this.handlers[c.which];if(d)for(var e=0;e<d.length;e++){var f=d[e].callback,g=d[e].filter;try{if(!g||g(c,a)){g=function(){var d=f(c,a),e=c.which||c.keyCode;b("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(c.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",c.isTrusted).log()},"KeyEventController");if(d===!1)return{v:b("Event").kill(c)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};c.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return h||(h=new a())};a.defaultFilter=function(c,d){c=b("Event").$E(c);return a.filterEventTypes(c,d)&&a.filterEventTargets(c,d)&&a.filterEventModifiers(c,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,c){c=a.getTarget();return!b("isElementInteractive")(c)||a.keyCode in j&&(b("DOMQuery").isNodeOfType(c,["input","textarea"])&&c.value.length===0||b("isContentEditable")(c)&&b("getElementText")(c).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(c,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(c,d,e,f,b("emptyFunction").thatReturnsTrue)};a.registerKey=function(c,d,e,f,h){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);h===void 0&&(h=b("emptyFunction").thatReturnsFalse);var i=a.getInstance(),j=c==null?[]:i.mapKey(c);(g||(g=b("isEmpty")))(i.handlers)&&b("Run").onLeave(i.resetHandlers.bind(i));var k={};for(var l=0;l<j.length;l++){c=""+j[l];(!i.handlers[c]||f)&&(i.handlers[c]=[]);var m={callback:d,filter:e,preserve:h};k[c]=m;i.handlers[c].push(m)}return{remove:function(){for(var a in k){if(i.handlers[a]&&i.handlers[a].length){var b=i.handlers[a].indexOf(k[a]);b>=0&&i.handlers[a].splice(b,1)}delete k[a]}}}};return a}();e.exports=c}),null);
__d("KeyStatus",["Event","ExecutionEnvironment"],(function(a,b,c,d,e,f){f.isKeyDown=d;f.getKeyDownCode=e;var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=b("Event").getKeyCode(a),i()}function c(){g=null,j()}if(b("ExecutionEnvironment").canUseDOM){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}function d(){return!!g}function e(){return g}}),null);
__d("BasicVector",[],(function(a,b,c,d,e,f){a=function(){function a(a,b){this.x=a,this.y=b}var b=a.prototype;b.derive=function(b,c){return new a(b,c)};b.toString=function(){return"("+this.x+", "+this.y+")"};b.add=function(a,b){b===void 0&&(b=a.y,a=a.x);a=parseFloat(a);b=parseFloat(b);return this.derive(this.x+a,this.y+b)};b.mul=function(a,b){b===void 0&&(b=a);return this.derive(this.x*a,this.y*b)};b.div=function(a,b){b===void 0&&(b=a);return this.derive(this.x*1/a,this.y*1/b)};b.sub=function(a,b){if(arguments.length===1)return this.add(a.mul(-1));else return this.add(-a,-b)};b.distanceTo=function(a){return this.sub(a).magnitude()};b.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};b.rotate=function(a){return this.derive(this.x*Math.cos(a)-this.y*Math.sin(a),this.x*Math.sin(a)+this.y*Math.cos(a))};return a}();e.exports=a}),null);
__d("DOMVector",["BasicVector","getDocumentScrollElement","getElementPosition","getUnboundedScrollPosition","getViewportDimensions"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c,d){b=a.call(this,b,c)||this;b.domain=d||"pure";return b}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.add=function(b,d){b instanceof c&&b.getDomain()!=="pure"&&(b=b.convertTo(this.domain));return a.prototype.add.call(this,b,d)};d.convertTo=function(a){if(a!="pure"&&a!="viewport"&&a!="document")return this.derive(0,0);if(a==this.domain)return this.derive(this.x,this.y,this.domain);if(a=="pure")return this.derive(this.x,this.y);if(this.domain=="pure")return this.derive(0,0);var b=c.getScrollPosition("document"),d=this.x,e=this.y;this.domain=="document"?(d-=b.x,e-=b.y):(d+=b.x,e+=b.y);return this.derive(d,e,a)};d.getDomain=function(){return this.domain};c.from=function(a,b,d){return new c(a,b,d)};c.getScrollPosition=function(a){a=a||"document";var c=b("getUnboundedScrollPosition")(window);return this.from(c.x,c.y,"document").convertTo(a)};c.getElementPosition=function(a,c){c=c||"document";a=b("getElementPosition")(a);return this.from(a.x,a.y,"viewport").convertTo(c)};c.getElementDimensions=function(a){return this.from(a.offsetWidth||0,a.offsetHeight||0)};c.getViewportDimensions=function(){var a=b("getViewportDimensions")();return this.from(a.width,a.height,"viewport")};c.getLayoutViewportDimensions=function(){var a=b("getViewportDimensions").layout();return this.from(a.width,a.height,"viewport")};c.getViewportWithoutScrollbarDimensions=function(){var a=b("getViewportDimensions").withoutScrollbars();return this.from(a.width,a.height,"viewport")};c.getDocumentDimensions=function(a){a=b("getDocumentScrollElement")(a);return this.from(a.scrollWidth,a.scrollHeight,"document")};return c}(b("BasicVector"));e.exports=a}),null);
__d("Vector",["DOMVector","Event","Scroll"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c,d){return a.call(this,parseFloat(b),parseFloat(c),d)||this}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.setElementPosition=function(a){var b=this.convertTo("document");a.style.left=parseInt(b.x,10)+"px";a.style.top=parseInt(b.y,10)+"px";return this};d.setElementDimensions=function(a){return this.setElementWidth(a).setElementHeight(a)};d.setElementWidth=function(a){a.style.width=parseInt(this.x,10)+"px";return this};d.setElementHeight=function(a){a.style.height=parseInt(this.y,10)+"px";return this};d.scrollElementBy=function(a){if(a==document.body)window.scrollBy(this.x,this.y);else{var c;(c=b("Scroll")).setLeft(a,c.getLeft(a)+this.x);c.setTop(a,c.getTop(a)+this.y)}return this};c.from=function(a,b,d){return new c(a,b,d)};c.getEventPosition=function(a,c){c===void 0&&(c="document");a=b("Event").getPosition(a);a=this.from(a.x,a.y,"document");return a.convertTo(c)};c.getTouchEventPosition=function(a,b){b===void 0&&(b="document");a=a.touches[0];a=this.from(a.pageX,a.pageY,"document");return a.convertTo(b)};c.deserialize=function(a){a=a.split(",");return this.from(a[0],a[1])};return c}(b("DOMVector"));e.exports=a}),null);
__d("Rect",["invariant","Vector","$"],(function(a,b,c,d,e,f,g){a=function(){function a(c,d,e,f,h){if(arguments.length===1){if(c instanceof a)return c;if(c instanceof b("Vector"))return new a(c.y,c.x,c.y,c.x,c.domain);typeof c==="string"&&(c=b("$")(c));return a.getElementBounds(c)}typeof c==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!h||typeof h==="string")||g(0,1087);Object.assign(this,{t:c,r:d,b:e,l:f,domain:h||"pure"});return this}var c=a.prototype;c.w=function(){return this.r-this.l};c.h=function(){return this.b-this.t};c.getWidth=function(){return this.w()};c.getHeight=function(){return this.h()};c.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};c.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};c.intersection=function(b){b=b.convertTo(this.domain);var c=Math.min(this.b,b.getBottom()),d=Math.max(this.l,b.getLeft()),e=Math.min(this.r,b.getRight());b=Math.max(this.t,b.getTop());return c>b&&e>d?new a(b,e,c,d):null};c.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};c.add=function(c,d){if(arguments.length==1){c instanceof a&&c.domain!="pure"&&(c=c.convertTo(this.domain));return c instanceof b("Vector")?this.add(c.x,c.y):this}var e=parseFloat(c),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};c.sub=function(a,c){if(arguments.length==1&&a instanceof b("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof c==="number")return this.add(-a,-c);return this};c.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};c.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};c.getCenter=function(){return new(b("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};c.getTop=function(){return this.t};c.getRight=function(){return this.r};c.getBottom=function(){return this.b};c.getLeft=function(){return this.l};c.getArea=function(){return(this.b-this.t)*(this.r-this.l)};c.getPositionVector=function(){return new(b("Vector"))(this.l,this.t,this.domain)};c.getDimensionVector=function(){return new(b("Vector"))(this.w(),this.h(),"pure")};c.convertTo=function(c){if(this.domain==c)return this;if(c=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(b("Vector"))(this.l,this.t,this.domain).convertTo(c);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,c)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(c){return a.newFromVectors(b("Vector").getElementPosition(c),b("Vector").getElementDimensions(c))};a.getViewportBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();e.exports=a}),null);
__d("tooltipPropsFor",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b,c){if(!a)return{};a={"data-tooltip-content":a,"data-hover":"tooltip"};b&&(a["data-tooltip-position"]=b);c&&(a["data-tooltip-alignh"]=c);return a}}),null);
__d("TooltipData",["DataStore","DOM","FBLogger","URI","getElementText","ifRequired","isStringNullOrEmpty","isTextNode","killswitch","tooltipPropsFor"],(function(a,b,c,d,e,f){var g;function h(a){var c=a.getAttribute("data-tooltip-delay");c=c?parseInt(c,10)||1e3:0;if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),content:a.getAttribute("data-tooltip-content"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction")},b("DataStore").get(a,"tooltip"));else{var d;d=(d=b("DataStore").get(a,"tooltip"))!=null?d:{};var e=d.content;d=babelHelpers.objectWithoutPropertiesLoose(d,["content"]);var f=a.getAttribute("data-tooltip-content");!b("isStringNullOrEmpty")(e)&&!b("isStringNullOrEmpty")(f)&&b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',a.getAttribute("data-tooltip-content"));return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction"),content:(a=(c=f)!=null?c:e)!=null?a:null},d)}}function i(a,c){var d=h(a);if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))b("DataStore").set(a,"tooltip",{content:c.content||d.content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick});else{!b("isStringNullOrEmpty")(c.content)&&!b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content"))&&b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',a.getAttribute("data-tooltip-content"));b("DataStore").set(a,"tooltip",{content:c.content||((a=b("DataStore").get(a,"tooltip"))!=null?a:{}).content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick})}}function j(a,b){i(a,b),a.setAttribute("data-hover","tooltip")}function k(a,b){}var l={remove:function(a,c){c=c===void 0?{}:c;c=c.onlyCleanupDataStore;c=c===void 0?!1:c;b("DataStore").remove(a,"tooltip");c||(a.removeAttribute("data-hover"),a.removeAttribute("data-tooltip-position"),a.removeAttribute("data-tooltip-alignh"),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.hide()}))},set:function(a,c,d,e){k(a,c);if(c instanceof(g||(g=b("URI"))))a.setAttribute("data-tooltip-uri",c),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.fetchIfNecessary(a)});else if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")){var f=l._store({context:a,content:c,position:d,alignH:e});typeof f.content!=="string"?a.setAttribute("data-tooltip-content",b("getElementText")(f.content)):a.setAttribute("data-tooltip-content",f.content);l.refreshIfActive(a)}else a.removeAttribute("data-tooltip-content"),l._store({context:a,content:c,position:d,alignH:e}),l.refreshIfActive(a)},refreshIfActive:function(a){b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.show(a)})},_store:function(a){var c=a.context,d=a.content,e=a.position;a=a.alignH;k(c,d);b("isTextNode")(d)&&(d=b("getElementText")(d));var f=!1;typeof d!=="string"?d=b("DOM").create("div",{},d):f=d==="";a={alignH:a,content:d,position:e,suppress:f};j(c,a);return a},propsFor:b("tooltipPropsFor"),enableDisplayOnOverflow:function(a){a.removeAttribute("data-tooltip-display"),j(a,{overflowDisplay:!0})},enablePersistOnClick:function(a){a.removeAttribute("data-pitloot-persistOnClick"),j(a,{persistOnClick:!0})},suppress:function(a,b){i(a,{suppress:b})},_get:h};e.exports=l}),null);
__d("ViewportBounds",["Arbiter","ArbiterMixin","BlueBar","ExecutionEnvironment","PageEvents","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){var g={top:[],right:[],bottom:[],left:[]};function a(a){return function(){return g[a].reduce(function(a,b){return Math.max(a,b.getSize())},0)}}function c(a,b){return function(c){return new h(a,c,b)}}var h=function(){"use strict";function a(a,c,d){d===void 0&&(d=!1),this.getSide=b("emptyFunction").thatReturns(a),this.getSize=function(){return typeof c==="function"?c():c},this.isPersistent=b("emptyFunction").thatReturns(d),g[a].push(this),i.inform("change")}var c=a.prototype;c.remove=function(){b("removeFromArray")(g[this.getSide()],this),i.inform("change")};return a}();b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,function(){["top","right","bottom","left"].forEach(function(a){a=g[a];for(var b=a.length-1;b>=0;b--){var c=a[b];c.isPersistent()||c.remove()}})});var i=babelHelpers["extends"]({},b("ArbiterMixin"),{getTop:a("top"),getRight:a("right"),getBottom:a("bottom"),getLeft:a("left"),getElementPosition:function(a){a=b("Vector").getElementPosition(a);a.y-=i.getTop();return a},addTop:c("top"),addRight:c("right"),addBottom:c("bottom"),addLeft:c("left"),addPersistentTop:c("top",!0),addPersistentRight:c("right",!0),addPersistentBottom:c("bottom",!0),addPersistentLeft:c("left",!0)});i.addPersistentTop(function(){if(b("ExecutionEnvironment").canUseDOM&&b("BlueBar").hasFixedBlueBar()){var a=b("BlueBar").getMaybeFixedRoot();return a?a.offsetHeight:0}return 0});e.exports=i}),null);
__d("getOverlayZIndex",["Style"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c){c=c;a=a;c=c||document.body;var d=[];while(a&&a!==c)d.push(a),a=a.parentNode;if(a!==c)return 0;for(var a=d.length-1;a>=0;a--){c=d[a];if(b("Style").get(c,"position")!="static"){c=parseInt(b("Style").get(c,"z-index"),10);if(!isNaN(c))return c}}return 0}}),null);
__d("Layer",["invariant","KeyStatus","ArbiterMixin","BehaviorsMixin","BootloadedReact","ContextualThing","CSS","DataStore","DOM","Event","FBLogger","HTML","KeyEventController","Parent","Style","ge","isNode","mixin","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g){b("KeyStatus");var h=[],i=function(c){babelHelpers.inheritsLoose(a,c);function a(a,d){var e;e=c.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else b("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var d=a.prototype;d.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};d._configure=function(a,c){var d=this;if(c){var e=b("isNode")(c),f=typeof c==="string"||b("HTML").isHTML(c);this.containsReactComponent=b("BootloadedReact").isValidElement(c);!e&&!f&&!this.containsReactComponent&&b("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(f)c=b("HTML")(c).getRootNode();else if(this.containsReactComponent){e=document.createElement("div");var g=!0;b("BootloadedReact").render(c,e,function(){d.inform("reactshow"),g||d.updatePosition()});g=!1;c=this._reactContainer=e}}this._root=this._buildWrapper(a,c);a.attributes&&b("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(b("CSS").addClass.bind(null,this._root));b("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=b("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);b("DataStore").set(this._root,"layer",this)};d._getDefaultBehaviors=function(){return[]};d.getCausalElement=function(){return this._causalElement};d.setCausalElement=function(a){this._causalElement=a;return this};d.getInsertParent=function(){return this._insertParent||document.body};d.getRoot=function(){this._root||(this._destroyed?b("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):b("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};d.getContentRoot=function(){return this.getRoot()};d._buildWrapper=function(a,b){return b};d.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(b("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};d.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};d.show=function(){var c=this;if(this._shown)return this;var d=this.getRoot();d!=null||g(0,5142);this.inform("beforeshow");b("Style").set(d,"visibility","hidden");b("Style").set(d,"overflow","hidden");b("CSS").show(d);b("DOM").appendContent(this.getInsertParent(),d);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){c._shown&&h.push(c)},0)):b("CSS").hide(d);b("Style").set(d,"visibility","");b("Style").set(d,"overflow","");b("Style").set(d,"opacity","1");this.inform("aftershow");return this};d.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};d._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};d.conditionShow=function(a){return a?this.show():this._hide()};d.finishHide=function(){if(this._shown){this._permanent||b("removeFromArray")(h,this);this._hiding=!1;this._shown=!1;var c=this.getRoot();c!=null||g(0,5143);b("CSS").hide(c);this.inform("hide");a.inform("hide",this)}};d.isShown=function(){return this._shown};d.updatePosition=function(){return!0};d.destroy=function(){this.containsReactComponent&&b("BootloadedReact").unmountComponentAtNode(this._reactContainer);this.finishHide();var c=this.getRoot();b("DOM").remove(c);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);b("DataStore").remove(c,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return h[h.length-1]};a.informBlur=function(a){j=null;k=null;var c=h.length;if(!c)return;while(c--){var d=h[c],e=d.getContentRoot();e!=null||g(0,5144);if(b("ContextualThing").containsIncludingLayers(e,a))return;if(d.inform("blur",{target:a})===!1||d.isShown())return}};return a}(b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));e.exports=i;Object.assign(i,b("ArbiterMixin"));Object.assign(i.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});b("Event").listen(document.documentElement,"keydown",function(a){if(b("KeyEventController").filterEventTargets(a,"keydown"))for(var c=h.length-1;c>=0;c--)if(h[c].inform("key",a)===!1)return!1;return!0},b("Event").Priority.URGENT);var j;b("Event").listen(document.documentElement,"mousedown",function(a){j=a.getTarget()});var k;b("Event").listen(document.documentElement,"mouseup",function(a){k=a.getTarget(),b("setImmediate")(function(){j=null,k=null})});b("Event").listen(document.documentElement,"click",function(a){var c=j,d=k;j=null;k=null;var e=h.length;if(!e)return;e=a.getTarget();if(e!==d||e!==c)return;if(!b("DOM").contains(document.documentElement,e))return;if(e.offsetWidth!=null&&!e.offsetWidth)return;if(b("Parent").byClass(e,"generic_dialog"))return;i.informBlur(e)})}),null);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/shallowEqual",["shallowEqual"],(function(a,b,c,d,e,f){"use strict";e.exports=b("shallowEqual")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("prop-types/prop-types",["prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret","fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["prop-types/prop-types","ReactFbPropTypes"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);
__d("ReactDOM",["requireCond","cr:1108857","cr:1294246"],(function(a,b,c,d,e,f){e.exports=b("cr:1294246")}),null);
__d("shallowCompare",["fbjs/lib/shallowEqual"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){return!b("fbjs/lib/shallowEqual")(a.props,c)||!b("fbjs/lib/shallowEqual")(a.state,d)}}),null);