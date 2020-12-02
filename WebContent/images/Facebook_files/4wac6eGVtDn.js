if (self.CavalryLogger) { CavalryLogger.start_js(["TrS42"]); }

__d("LSMessagingThreadTypeUtil.bs",["bs_caml_int64","MessagingThreadType.bs","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a){if(b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").oneToOne)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").group)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").room)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").montage)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").marketplace)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").folder))return!1;else if(b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanOneToOne)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanOneToOneDisappearing)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanGroupDisappearing))return!0;else return b("unrecoverableViolation")("Unknown thread type","comet_messenger")}function c(a){if(b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").group)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanGroupDisappearing))return!0;else return!1}function d(a){if(b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").oneToOne)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanOneToOne)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").carrierMessagingOneToOne)||b("bs_caml_int64").eq(a,b("MessagingThreadType.bs").tincanOneToOneDisappearing))return!0;else return!1}function e(a){a=a.NAME;if(a==="Group")return b("MessagingThreadType.bs").group;else if(a==="User"||a==="Page")return b("MessagingThreadType.bs").oneToOne;else return b("MessagingThreadType.bs").tincanOneToOne}f.isSecure=a;f.isGroup=c;f.isOneToOne=d;f.ofThreadId=e}),null);
__d("LSContactTypeExact.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";c=(a=b("bs_caml_int64")).zero;d=a.one;e=a.mk(2,0);b=a.mk(3,0);var g=a.mk(4,0),h=a.mk(5,0),i=a.mk(6,0),j=a.mk(7,0),k=a.mk(8,0),l=a.mk(9,0),m=a.mk(10,0),n=a.mk(11,0);a=a.mk(12,0);f.unknown=c;f.fbUser=d;f.messengerOnly=e;f.deactivatedAllowedOnMessenger=b;f.messengerKid=g;f.fbPage=h;f.fbPagePersona=i;f.igUser=j;f.messengerCallGuest=k;f.whatsapp=l;f.guestUser=m;f.igBusinessUser=n;f.igCreatorUser=a}),null);
__d("MWLSContactTypeExactUtils.bs",["bs_caml_int64","LSContactTypeExact.bs"],(function(a,b,c,d,e,f){"use strict";function g(a){if(b("bs_caml_int64").eq(a,b("LSContactTypeExact.bs").igUser)||b("bs_caml_int64").eq(a,b("LSContactTypeExact.bs").igBusinessUser))return!0;else return b("bs_caml_int64").eq(a,b("LSContactTypeExact.bs").igCreatorUser)}function a(a){return g(a.r)}f.isIgContactTypeExact=g;f.isIgUser=a}),null);
__d("LSSuspense.bs",["Promise"],(function(a,b,c,d,e,f){"use strict";var g=function(a){throw a};function a(a){return{contents:0}}function c(a){a.contents=0}function d(a,c){var d=a.contents;if(typeof d!=="number")if(d.TAG)return d._0;else return g(d._0);d=c.then(function(c){a.contents={TAG:1,_0:c};return b("Promise").resolve(void 0)});a.contents={TAG:0,_0:d};return g(d)}f.$$throw=g;f.make=a;f.reset=c;f.getOrSuspend=d}),null);
__d("IndexedDbKeyComparer",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=m;function g(a){return typeof a==="number"}function h(a){return a instanceof Date}function i(a){return typeof a==="string"}function j(a){return a instanceof ArrayBuffer}function k(a){return Array.isArray(a)}function l(a){return typeof a==="object"&&!!a&&"hd"in a&&"tl"in a}function m(a,c){if(k(a)){if(k(c)){var d=Math.min(a.length,c.length);for(var e=0;e<d;e++){var f=m(a[e],c[e]);if(f!==0)return f}return a.length>c.length?1:a.length<c.length?-1:0}if(g(c)||h(c)||i(c)||j(c))return 1;if(l(c))return-1}if(g(a)){if(g(c))return a>c?1:a<c?-1:0;if(h(c)||i(c)||j(c)||k(c)||l(c))return-1}if(i(a)){if(i(c)){f=Math.min(a.length,c.length);for(var e=0;e<f;e++){d=a.codePointAt(e);var n=c.codePointAt(e);if(d>n)return 1;else if(d<n)return-1}return a.length>c.length?1:a.length<c.length?-1:0}if(g(c)||h(c))return 1;if(j(c)||k(c)||l(c))return-1}if(h(a)){if(h(c))return a>c?1:a<c?-1:0;if(g(c))return 1;if(i(c)||j(c)||k(c)||l(c))return-1}if(j(a)){if(j(c)){d=Math.min(a.byteLength,c.byteLength);n=new Uint8Array(a);e=new Uint8Array(c);for(var f=0;f<d;f++){var o=n[f],p=e[f];if(o>p)return 1;else if(o<p)return-1}return a.byteLength>c.byteLength?1:a.byteLength<c.byteLength?-1:0}if(g(c)||h(c)||i(c)||l(c))return 1;if(k(c)||l(c))return-1}if(l(a)){if(l(c)){o=m(a.hd,c.hd);return o!==0?o:m(a.tl,c.tl)}if(g(c)||h(c)||i(c)||j(c)||k(c))return 1}throw b("unrecoverableViolation")("unexpected type","messenger_comet")}}),null);
__d("LSVersion.bs",["gkx","LSVersion","LSSecureVersion","MessengerWebSyncScripts"],(function(a,b,c,d,e,f){"use strict";a=b("gkx")("1671170")?b("LSSecureVersion"):b("LSVersion");c=b("MessengerWebSyncScripts").schemaVersionV2;d=c==null?a:c;f.version=d}),null);
__d("LSSyncChannel.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").one;c=b("bs_caml_int64").mk(2,0);d=b("bs_caml_int64").mk(3,0);f.realtime=a;f.http=c;f.dgw=d}),null);
__d("LSMailboxInitialSyncCursor.bs",["CurrentLocale","LSSyncChannel.bs"],(function(a,b,c,d,e,f){"use strict";a=b("CurrentLocale").get();c={scale:1,preview_height:200,preview_width:150,full_height:200,snapshot_num_threads_per_page:15,locale:a};d={contents:b("LSSyncChannel.bs").realtime};e={contents:0};a={contents:c};f.defaultSyncParams=c;f.syncChannel=d;f.lastSyncTimestampMs=e;f.syncParams=a}),null);
__d("MqttState.bs",[],(function(a,b,c,d,e,f){"use strict";a="Connected";b="Disconnected";c="Connecting";f.connected=a;f.disconnected=b;f.connecting=c}),null);
__d("LSRequestType.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";c=(a=b("bs_caml_int64")).one;d=a.mk(2,0);e=a.mk(3,0);b=a.mk(4,0);f.initSync=c;f.resumeSync=d;f.taskBatch=e;f.fireForget=b}),null);
__d("JSMap.bs",["bs_curry","bs_belt_Option","bs_caml_option"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){d=d.has(a)?d:d.set(a,b("bs_curry")._1(c,void 0));return b("bs_belt_Option").getExn(b("bs_caml_option").nullable_to_opt(d.get(a)))}f.getOrMake=a}),null);
__d("MessengerWebQuickLogModule",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPOSER_INTERACTION:25296900,FETCH_MORE_THREAD_LIST:25296906,FETCH_THREAD_INFO:25296904,FETCH_THREAD_LIST:25296905,FIRSTCHATTABOPEN_WWW:25296897,GROUP_INPUT_INDIVIDUAL_TAB_OPEN_WWW:25296899,GROUP_INPUT_TAB_OPEN_WWW:25296898,LS_INIT:25305590,PAGE_LOAD_MDOTCOM_WWW:25296901,SEND_MESSAGE:25296903,THREAD_LOAD_MDOTCOM_WWW:25296902});e.exports=a}),null);
__d("bs_caml_int32",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(b===0)throw{RE_EXN_ID:"Division_by_zero",Error:new Error()};return a/b|0}function b(a,b){if(b===0)throw{RE_EXN_ID:"Division_by_zero",Error:new Error()};return a%b}f.div=a;f.mod_=b}),null);
__d("bs_js_exn",["bs_caml_js_exceptions"],(function(a,b,c,d,e,f){"use strict";function a(a){throw new Error(a)}function c(a){throw new EvalError(a)}function d(a){throw new RangeError(a)}function e(a){throw new ReferenceError(a)}function g(a){throw new SyntaxError(a)}function h(a){throw new TypeError(a)}function i(a){throw new URIError(a)}b=b("bs_caml_js_exceptions").$$Error;f.$$Error=b;f.raiseError=a;f.raiseEvalError=c;f.raiseRangeError=d;f.raiseReferenceError=e;f.raiseSyntaxError=g;f.raiseTypeError=h;f.raiseUriError=i}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("base64-js-1.3.0",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){g.byteLength=h;g.toByteArray=d;g.fromByteArray=e;var a=[],b=[],c=typeof Uint8Array!=="undefined"?Uint8Array:Array;h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var d=0,e=h.length;d<e;++d)a[d]=h[d],b[h.charCodeAt(d)]=d;b["-".charCodeAt(0)]=62;b["_".charCodeAt(0)]=63;function f(a){var b=a.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");a=a.indexOf("=");a===-1&&(a=b);b=a===b?0:4-a%4;return[a,b]}function h(a){a=f(a);var b=a[0];a=a[1];return(b+a)*3/4-a}function i(a,b,c){return(b+c)*3/4-c}function d(a){var d,e=f(a),g=e[0];e=e[1];var h=new c(i(a,g,e)),j=0;g=e>0?g-4:g;for(var k=0;k<g;k+=4)d=b[a.charCodeAt(k)]<<18|b[a.charCodeAt(k+1)]<<12|b[a.charCodeAt(k+2)]<<6|b[a.charCodeAt(k+3)],h[j++]=d>>16&255,h[j++]=d>>8&255,h[j++]=d&255;e===2&&(d=b[a.charCodeAt(k)]<<2|b[a.charCodeAt(k+1)]>>4,h[j++]=d&255);e===1&&(d=b[a.charCodeAt(k)]<<10|b[a.charCodeAt(k+1)]<<4|b[a.charCodeAt(k+2)]>>2,h[j++]=d>>8&255,h[j++]=d&255);return h}function j(b){return a[b>>18&63]+a[b>>12&63]+a[b>>6&63]+a[b&63]}function k(a,b,c){var d,e=[];for(var b=b;b<c;b+=3)d=(a[b]<<16&16711680)+(a[b+1]<<8&65280)+(a[b+2]&255),e.push(j(d));return e.join("")}function e(b){var c=b.length,d=c%3,e=[],f=16383;for(var g=0,h=c-d;g<h;g+=f)e.push(k(b,g,g+f>h?h:g+f));d===1?(g=b[c-1],e.push(a[g>>2]+a[g<<4&63]+"==")):d===2&&(g=(b[c-2]<<8)+b[c-1],e.push(a[g>>10]+a[g>>4&63]+a[g<<2&63]+"="));return e.join("")}}var j=!1;function k(){j||(j=!0,i());return h.exports}function a(a){switch(a){case void 0:return k()}}e.exports=a}),null);
__d("base64-js",["base64-js-1.3.0"],(function(a,b,c,d,e,f){e.exports=b("base64-js-1.3.0")()}),null);
__d("XLightSpeedWebRequestController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/lightspeedweb/request/",{device_id:{type:"String",required:!0},request_id:{type:"Int",required:!0},request_type:{type:"Int"},request_payload:{type:"String"}})}),null);