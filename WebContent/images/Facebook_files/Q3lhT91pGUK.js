if (self.CavalryLogger) { CavalryLogger.start_js(["LJJQv"]); }

__d("LiveVideoCometBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometBadge_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreen_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreen_video",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"live_end_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeProgressPreviewThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration_in_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_last_play_position_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["React","getComputedStyle","mergeRefs","useCometAriaID","useCometUniqueID","useLayoutEffect_SAFE_FOR_SSR","useSetAttributeRef"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.alt,d=a.blur,e=a.height,f=a.previewData,h=a.width,i=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var j=a.height,k=a.width;d=(a=d)!=null?a:1.2;a=b("useCometUniqueID")();var l=b("useSetAttributeRef")("id",a),m="url(#"+a+")",n=b("useSetAttributeRef")("filter",m),o=b("useCometAriaID")("aria-labelledby"),p=o[0],q=p[0];p=p[1];o=o[1];var r=o[0],s=o[1],t=g.useRef(null);o=g.useMemo(function(){return c!=null?b("mergeRefs")(s,t):t},[c,s,t]);var u=g.useState(e!==void 0||j!==void 0||h!==void 0||k!==void 0),v=u[0],w=u[1];b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=t.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||j!==void 0||h!==void 0||k!==void 0){w(!0);return}var c=a.style.display,d=b("getComputedStyle")(a);a.style.display="none";w(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=c},[e,f.height,f.width,j,k,h]);return g.jsxs("svg",babelHelpers["extends"]({},i,c!=null?r:null,{height:(u=e)!=null?u:v?void 0:f.height,preserveAspectRatio:"none",ref:o,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(i=h)!=null?i:v?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[c!=null&&g.jsx("title",babelHelpers["extends"]({},q,{ref:p,children:c})),g.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:l,suppressHydrationWarning:!0,children:[g.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),g.jsx("feComponentTransfer",{children:g.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),g.jsx("image",{filter:m,height:f.height,ref:n,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}}),null);
__d("getGamingCaller",["qex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a;a=(a=b("qex")._("1605343"))!=null?a:!1;return a?"games_comet_chaining":"tahoe"}}),null);
__d("LiveVideoCometBadge.react",["fbt","BaseRow.react","BaseRowItem.react","CometRelay","React","TetraText.react","stylex","LiveVideoCometBadge_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=function(a,b,c){if(a)return g._("LIVE BREAKING");return c?g._("PREMIERE"):b?g._("LIVE"):null};function a(a){var c=a.pulse;c=c===void 0?!1:c;var d=a.size;d=d===void 0?"small":d;a=a.video;a=b("CometRelay").useFragment(h!==void 0?h:h=b("LiveVideoCometBadge_video.graphql"),a);var e=!!a.breaking_status,f=!!a.is_live_streaming;a=!!a.is_premiere;return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"background-color-1":"l44iypv3","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","margin-top-1":"rs0gx3tq","margin-end-1":"kady6ibp","margin-bottom-1":"dicw6rsg","margin-start-1":"dwxx2s2f"},d==="large"?{"padding-top-1":"l29c1vbm","padding-end-1":"dflh9lhu","padding-bottom-1":"j7796vcc","padding-start-1":"scb9dxdr"}:null,d==="small"?{"padding-top-1":"ipjc6fyt","padding-end-1":"ph5uu5jm","padding-bottom-1":"iuny7tx3","padding-start-1":"b3onmgus"}:null,c?{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"}:null),children:j.jsx(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:j.jsx(b("BaseRowItem.react"),{children:j.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:d==="large"?"bodyLink3":"bodyLink4",children:k(e,f,a)})})})})}}),null);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="data:image/jpeg;base64,",h=160,i=162,j=42;function k(a,c){c===void 0&&(c=0);a=atob(a);if(a.length<=3)throw b("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+c);for(var e=0;e<a.length;e++)d[c+e]=a.charCodeAt(e);return d}var l;function m(){l==null&&(l=k("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return l}function a(a){var c=m();try{a=k(a,c.length-3);var d=a[c.length-1],e=a[c.length-3],f=a[c.length-2];if(d>j)throw b("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+j+"."),"comet_infra");if(f>j)throw b("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+j+"."),"comet_infra");a.set(c,0);a[h]=d;a[i]=f;c=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+g+c,height:d,width:f,version:e}}catch(c){a=b("FBLogger")("images_infra");c instanceof Error&&a.catching(c);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}}),null);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometImage.react","CometRelay","React","getPreviewDataFromImagePreviewPayload","stylex","VideoBlurBackgroundContainer_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("React"),j={blurryImage:{filter:"nq2o82sz",transform:"cyijgrg9"},image:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",height:"datstx6m",opacity:"l8rlqa9s",width:"k4urcfbm",zIndex:"du4w35lb"},root:{backgroundColor:"tqsryivl",height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}};function a(a,c){var d,e=a.children,f=a.video;a=a.xstyle;d=(d=f.preferred_thumbnail)==null?void 0:d.image_preview_payload;var g;if(d!=null){d=b("getPreviewDataFromImagePreviewPayload")(d);d!=null&&(g=i.jsx(b("CometBlurryImagePreview.react"),{className:(h||(h=b("stylex")))(j.image),previewData:d}))}d=(d=f.preferred_thumbnail)==null?void 0:(f=d.image)==null?void 0:f.uri;g==null&&d!=null&&(g=i.jsx(b("CometImage.react"),{src:d,xstyle:[j.blurryImage,j.image]}));return i.jsxs("div",{className:(h||(h=b("stylex")))(j.root,a),ref:c,children:[g,e]})}c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED(i.forwardRef(a),{video:g!==void 0?g:g=b("VideoBlurBackgroundContainer_video.graphql")});e.exports=c}),null);
__d("VideoLocationContextUtils",[],(function(a,b,c,d,e,f){"use strict";f.getVideoChainingCallerFromFeedLocation=a;f.getVideoChannelEntryPointFromFeedLocation=b;f.getChannelIDFromFeedLocation=c;var g="387437888106301";function a(a){switch(a){case"PAGE_TIMELINE":return"CHANNEL_VIEW_FROM_PAGE_TIMELINE";case"TIMELINE":return"CHANNEL_VIEW_FROM_USER_TIMELINE";case"GROUP":case"GROUP_HOISTED":return"CHANNEL_VIEW_FROM_GROUP_TIMELINE";case"SEARCH":return"CHANNEL_VIEW_FROM_SEARCH";case"NEWSFEED":return"CHANNEL_VIEW_FROM_NEWSFEED";case"VIDEO_HOME_FEED":return"CHANNEL_VIEW_FROM_VIDEO_HOME";default:return"CHANNEL_VIEW_FROM_UNKNOWN"}}function b(a){switch(a){case"PAGE_TIMELINE":case"PAGE_TIMELINE_PERMALINK":return"PAGE";case"TIMELINE":return"PROFILE";case"GROUP":case"GROUP_HOISTED":case"GROUP_PERMALINK":return"GROUP";case"SEARCH":return"SEARCH";case"NEWSFEED":return"NEWSFEED";case"GAMEROOM_FEED":return"GAMES_VIDEO_HOME";default:return"UNKNOWN"}}function c(a,b,c){switch(a){case"PAGE_TIMELINE":return(a=b)!=null?a:"";case"NEWSFEED":case"VIDEO_HOME_FEED":return c!=null&&c!==""?g+":"+c:""+g;default:return""}}}),null);
__d("VideoPlayerWithLiveVideoEndscreen.react",["fbt","CometRelay","React","TetraTextPairing.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","stylex","VideoPlayerWithLiveVideoEndscreen_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=b("VideoPlayerHooks").useEnded(),d=b("VideoPlayerHooks").useIsLive(),e=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreen_video.graphql"),a.video);if(!c||!d)return null;c=g._("This live video has ended.");return i.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:i.jsx("div",{className:"taijpn5t cbu4d94t j83agx80 tqsryivl bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:i.jsxs("div",{className:"d46ut3hm",children:[i.jsx(b("TetraTextPairing.react"),{body:e==null?void 0:(d=e.live_end_text)==null?void 0:d.text,bodyColor:"white",headline:c,headlineColor:"white",level:2,textAlign:"center"}),a.children]})})})}}),null);
__d("CometVideoHomeProgressPreviewBar.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.percentageFilled;if(a<=0)return null;a=Math.max(5,a);a=Math.min(100,a);return g.jsx("div",{className:"tkr6xdv7 k4urcfbm pmk7jnqg hzruof5a mw227v9j i09qtzwb m8invena",children:g.jsx("div",{className:"mw227v9j is6700om",style:{width:a+"%"}})})}}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay.react",["CometRelay","CometVideoHomeProgressPreviewBar.react","React","CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"),a);var d=a.viewer_last_play_position_ms,e=a.playable_duration_in_ms;c=(c=a.has_viewer_watched_show_video)!=null?c:!1;if(d==null||e==null||c||a.broadcast_status==="LIVE")return null;c=100*d/e;return h.jsx(b("CometVideoHomeProgressPreviewBar.react"),{percentageFilled:c})}}),null);
__d("CometWatchAndScrollTriggerContextProvider",["CometWatchAndScrollTriggerContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.children;var c=g.useState(!1),d=c[0],e=c[1];c=g.useMemo(function(){return{isControlShown:d,setIsControlShown:e}},[d,e]);return g.jsx(b("CometWatchAndScrollTriggerContext").Provider,{value:c,children:a})}}),null);