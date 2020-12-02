if (self.CavalryLogger) { CavalryLogger.start_js(["FBU96"]); }

__d("useVideoOriginalDimensionsRelay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVideoOriginalDimensionsRelay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_rotation",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerReshareButton_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerReshareButton_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_share",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"shareable",plural:!1,selections:[{alias:"wwwUrl",args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoIndicator_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoIndicator_video",selections:[{alias:"breakingStatus",args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:"videoId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"isPremiere",args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:"liveViewerCount",args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:"rehearsalInfo",args:null,concreteType:"LiveVideoRehearsalInfo",kind:"LinkedField",name:"rehearsal_info",plural:!1,selections:[{alias:"typeName",args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"publish_time",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoContextMenuContentsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3734308573328393",metadata:{},name:"CometVideoHomeVideoContextMenuContentsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useVideoOriginalDimensionsRelay",["CometRelay","computeAspectRatio","useVideoOriginalDimensionsRelay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useVideoOriginalDimensionsRelay_video.graphql"),a);var c=a==null?void 0:a.original_rotation;c=c==="ROTATE_LEFT"||c==="ROTATE_RIGHT";var d=c?a==null?void 0:a.original_height:a==null?void 0:a.original_width;c=c?a==null?void 0:a.original_width:a==null?void 0:a.original_height;a=b("computeAspectRatio")(d,c);return{originalAspectRatio:a,originalHeight:c,originalWidth:d}}}),null);
__d("GamingVideoBackLink.react",["ix","fbt","CometImage.react","CometPressable.react","React","XCometGamingControllerRouteBuilder","asset","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=g("370949"),l=b("XCometGamingControllerRouteBuilder").buildURL({});function a(){var a=h._("Go to Facebook Gaming");return j.jsx(b("CometPressable.react"),{linkProps:{url:l},children:function(c){c=c.hovered;return j.jsxs("div",{className:"btwxx1t3 j83agx80",children:[j.jsx("span",{className:c?"e4zzj2sf art1omkt dpja2al7 pedkr2u6 pq6dq46d":"e4zzj2sf art1omkt dpja2al7 qwwmc0zo awjy3rxs pq6dq46d",children:j.jsx(b("CometImage.react"),{alt:h._("Close"),src:k})}),j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(c?{"color-1":"r8mhfmj7","display-1":"a8c37x1j","padding-end-1":"dflh9lhu","position-1":"l9j0dhe7","text-decoration-0.1":"oo483o9r","top-1":"tmxdrx1h"}:{"display-1":"mkhogb32"}),children:a})]})}})}}),null);
__d("VideoPlayerReshareButton.react",["ix","fbt","CometRelay","CometTrackingNodeProvider.react","React","VideoPlayerActionButton.react","createEmptyCometComposerViewState","fbicon","useFeedComposerCometDialog","VideoPlayerReshareButton_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");function k(a){var c=a.renderActionButton,d=a.shouldJustifyContentCenter,e=a.url;a=a.useVerticalLayout;var f=b("useFeedComposerCometDialog")({composerType:"share",title:h._("Write Post"),tracePolicy:"comet.composer.shareVideo"}),i=f[0],k=b("createEmptyCometComposerViewState")({attachmentArea:{activeAttachmentType:"SHARE"},linkAttachment:{url:e},submitText:h._("Share")});f=j.useCallback(function(){i({beginningViewState:k})},[k,i]);e=j.jsx(b("VideoPlayerActionButton.react"),{icon:b("fbicon")._(g("484394"),16),label:h._("Share"),onPress:f,shouldJustifyContentCenter:d,useVerticalLayout:a});d=c!=null?c({onPress:f}):e;return j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:17,children:d})}function a(a){var c=a.renderActionButton,d=a.shouldJustifyContentCenter,e=a.useVerticalLayout;a=a.video;a=b("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerReshareButton_video.graphql"),a);var f=a==null?void 0:a.can_viewer_share;a=a==null?void 0:(a=a.creation_story)==null?void 0:(a=a.shareable)==null?void 0:a.wwwUrl;return f===!0&&a!=null?j.jsx(k,{renderActionButton:c,shouldJustifyContentCenter:d,url:a,useVerticalLayout:e}):null}}),null);
__d("VideoPlayerWithVideoHomeLogging.react",["React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.feedAggregationType,d=a.reactionVideoChannelType,e=b("VideoPlayerHooks").useController();g.useEffect(function(){d!=null&&e.setAdditionalLogData("reaction_video_channel_type",d),c!=null&&e.setAdditionalLogData("feed_aggregation_type",c)},[e,c,d]);return null}}),null);
__d("useIsVideoHomePlayerOriginFromTracePolicy",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var b=["comet.watch.catalog","comet.watch.explore","comet.watch.feed","comet.watch.injection","comet.watch.latest","comet.watch.notifications","comet.watch.playlist","comet.watch.saved","comet.watch.search","comet.watch.sports","comet.watch.live.injection","comet.watch.live","comet.watch.music","comet.watch.lancelet"];return b.includes(a)}}),null);
__d("useNavigateToTahoePassthroughProps",["CometProductTagFunnelIDContext","CometTrackingCodeContext","CometTrackingNodesContext","CometWarningScreenContext","React","VideoPlayerHooks","getAggregatedStoryTrackingNodeIndex","gkx","useIsVideoHomePlayerOriginFromTracePolicy","usePlayerOriginRouteTracePolicy","useVideoPlayerPortalingPassthroughProps"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("useVideoPlayerPortalingPassthroughProps")(),c=g.useContext(b("CometTrackingCodeContext")),d=g.useContext(b("CometTrackingNodesContext")),e=g.useContext(b("CometProductTagFunnelIDContext")),f=b("CometWarningScreenContext").useIsOverlayShown(),h=b("CometWarningScreenContext").useHasOverlay();d=b("getAggregatedStoryTrackingNodeIndex")(d);var i=b("VideoPlayerHooks").useVideoPlayerInitialTracePolicy(),j=b("usePlayerOriginRouteTracePolicy")(),k=b("useIsVideoHomePlayerOriginFromTracePolicy")(j);d=babelHelpers["extends"]({bypassAutoplaySettings:!0},a,{index:d,initialTracePolicy:(a=i)!=null?a:j,origOverlayShown:f,overlayExists:h,productTagFunnelID:e,trackingCode:c},k&&b("gkx")("1637651")?{caller:"CHANNEL_VIEW_FROM_VIDEO_HOME"}:{});return d}}),null);
__d("VideoPlayerCometNavigateToTahoeControl.react",["ix","fbt","React","VideoPlayerControlIcon.react","fbicon","useNavigateToTahoePassthroughProps"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){var c=a.onPress,d=a.reactionVideoChannelType,e=a.subOrigin;a=a.videoTahoeUrl;var f=b("useNavigateToTahoePassthroughProps")();f=babelHelpers["extends"]({},f,{playerSubOrigin:e,reactionVideoChannelType:d});e=h._("Enlarge");return i.jsx(b("VideoPlayerControlIcon.react"),{icon:b("fbicon")._(g("517763"),20),label:e,linkProps:{passthroughProps:f,url:a},onPress:c,tooltip:e})}}),null);
__d("VideoPlayerNavigateToTahoeOrFullScreenControl.react",["CometTrackingNodeProvider.react","React","VideoPlayerCometNavigateToTahoeControl.react","VideoPlayerFullscreenControl.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.isAdVideo,d=a.onPressFullscreenControl,e=a.onPressTahoeControl,f=a.onUserInteraction,h=a.reactionVideoChannelType,i=a.shouldUnmute,j=a.subOrigin;a=a.videoTahoeUrl;return g.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:144,children:Boolean(c)===!1&&j!=null&&a!=null&&a!==""?g.jsx(b("VideoPlayerCometNavigateToTahoeControl.react"),{onPress:e,reactionVideoChannelType:h,subOrigin:j,videoTahoeUrl:a}):g.jsx(b("VideoPlayerFullscreenControl.react"),{onPress:d,onUserInteraction:f,shouldUnmute:i})})}}),null);
__d("Duration.react",["React","ServerTime","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=500,i=1e3,j=60,k=60;a=function(a){babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={duration:0};return b}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$2()};d.componentWillUnmount=function(){b("clearTimeout")(this.$1)};d.$2=function(){var a=this,c;this.props.useLocalTime?c=Date.now():c=b("ServerTime").getMillis();this.setState({duration:Math.max(c-this.props.startTime,0)});this.$1=b("setTimeout")(function(){return a.$2()},h)};d.render=function(){var a=Math.floor(this.state.duration/i),b=a%j;a=Math.floor(a/j);var c=a%k;a=Math.floor(a/k);var d="";a>0&&(d=a+":");a=c+":";a.length<3&&d.length>0&&(a="0"+a);c=""+b;c.length<2&&(c="0"+c);return g.jsxs("span",{children:[d,a,c]})};return c}(g.Component);e.exports=a;a.defaultProps={useLocalTime:!1}}),null);
__d("VideoPlayerWithLiveVideoIndicator.react",["ix","fbt","CometImage.react","CometPlaceholder.react","CometRelay","CometRouteRenderType","Duration.react","GamingVideoBackLink.react","deferredLoadComponent","gkx","requireDeferred","React","TetraText.react","VideoBroadcastStatus","VideoPlayerHooks","asset","clearTimeout","intlSummarizeNumber","setTimeout","stylex","unrecoverableViolation","useVideoPlayerUnifiedCVCProvider","VideoPlayerWithLiveVideoIndicator_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=b("deferredLoadComponent")(b("requireDeferred")("LiveVideoCometNuxForCVC.react")),l=b("React"),m={cvcIndicator:{backgroundColor:"swu4x5w2",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",boxSizing:"rq0escxv",display:"pq6dq46d",height:"datstx6m",marginStart:"ggphbty4",paddingTop:"l60d2q6s",paddingEnd:"p8fzw8mz",paddingBottom:"qt6c0cv9",paddingStart:"pcp91wgn"},cvcIndicatorIcon:{bottom:"l2l2r6co",display:"pq6dq46d",marginEnd:"cgat1ltu",position:"l9j0dhe7"},liveIndicator:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",boxSizing:"rq0escxv",display:"pq6dq46d",height:"datstx6m",paddingTop:"l60d2q6s",paddingEnd:"p8fzw8mz",paddingBottom:"qt6c0cv9",paddingStart:"pcp91wgn"},liveIndicatorAnimation:{animationDirection:"afxn4irw",animationDuration:"m8weaby5",animationIterationCount:"ee40wjg4",animationName:"q1gqmpn5",animationTimingFunction:"jbu8tgem"},liveIndicatorBackground:{backgroundColor:"l44iypv3"},liveIndicatorExpanded:{display:"pq6dq46d",marginStart:"kkf49tns"},liveRewindIndicatorBackground:{backgroundColor:"jjbobbrh"},positionTop:{display:"j83agx80",height:"rgmg9uty",position:"pmk7jnqg",start:"rnx8an3s",top:"fcg2cn6m"},positionTopWithCometNavOverlay:{start:"b12hlsfb",top:"fgv6swy9"},positionTopWithCometNavOverlayWorkplace:{start:"jjtdzmgn",top:"fgv6swy9"},privacyNux:{position:"pmk7jnqg",start:"rnx8an3s",top:"t4zy2t7z"},rehearsalIndicator:{backgroundColor:"p2o8ms9n"}};function a(a){var c,d,e,f,g,h=(g=b("VideoPlayerHooks")).useIsLive(),r=g.useIsLiveRewindActive(),s=g.useIsFullscreen(),t=b("CometRouteRenderType").useIsMain(),u=g.usePlaying(),v=l.useRef(null),w=(g=a.isActiveLivingRoom)!=null?g:!1;g=b("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWithLiveVideoIndicator_video.graphql"),a.video);c=(c=g==null?void 0:g.videoId)!=null?c:"";if(g==null||typeof c!=="string"||c==="")throw b("unrecoverableViolation")("Null video or bad videoId","comet_live_video");var x=b("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCData();d=l.useState((d=g.liveViewerCount)!=null?d:0);var y=d[0],z=d[1];d=l.useState(!1);var A=d[0],B=d[1];d=l.useState(!1);var C=d[0],D=d[1];l.useEffect(function(){h&&x!=null&&(n(x.bs)?z(x.c):(z(0),B(!0)));if(w&&x!=null){var a;z((a=x.lvc)!=null?a:0)}},[x,h,w]);l.useEffect(function(){u?(D(!0),v.current=b("setTimeout")(function(){D(!1)},3e3)):v.current&&(D(!1),b("clearTimeout")(v.current));return function(){return b("clearTimeout")(v.current)}},[u]);d=((d=g.rehearsalInfo)==null?void 0:d.typeName)==="LiveVideoRehearsalInfo";e=(e=g.is_gaming_video)!=null?e:!1;f=(f=a.includeGamingBackLink)!=null?f:!1;f=f&&t&&e;t=!h||A;if(t&&!w)return null;e=b("gkx")("1443572");return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:(j||(j=b("stylex")))(m.positionTop,e?a.shouldExpand!==!0&&!s&&m.positionTopWithCometNavOverlayWorkplace:a.hasCometNavOverlay&&!s&&m.positionTopWithCometNavOverlay),children:[f?l.jsx(b("GamingVideoBackLink.react"),{}):null,l.jsx("div",{className:j(m.liveIndicator,r?null:m.liveIndicatorAnimation,r?null:m.liveIndicatorBackground,r?m.liveRewindIndicatorBackground:null,d?m.rehearsalIndicator:null),"data-testid":void 0,children:l.jsxs(b("TetraText.react"),{color:d?"primary":"white",type:"bodyLink4",children:[o(g,w),a.shouldExpand===!0&&C&&(g==null?void 0:g.publish_time)!=null&&!r&&q(g.publish_time)]})}),p(y)]}),a.shouldShowPrivacyNux===!0&&l.jsx(b("CometPlaceholder.react"),{fallback:null,children:l.jsx("div",{className:(j||(j=b("stylex")))(m.privacyNux),children:l.jsx(k,{videoID:c})})})]})}function n(a){if(a==null)return!1;switch(a){case b("VideoBroadcastStatus").LIVE:case b("VideoBroadcastStatus").LIVE_STOPPED:case b("VideoBroadcastStatus").SEAL_STARTED:return!0;default:return!1}}function o(a,b){if((a==null?void 0:a.isPremiere)===!0)return h._("PREMIERE");if((a==null?void 0:a.breakingStatus)===!0)return h._("LIVE BREAKING");return b?h._("WATCH PARTY"):h._("LIVE")}function p(a){if(a==null||a===0)return null;var c=l.jsx("span",{className:(j||(j=b("stylex")))(m.cvcIndicatorIcon),children:l.jsx(b("CometImage.react"),{alt:"",src:g("406916")})});return l.jsxs("div",{"aria-label":h._({"*":"{number} people currently watching this video.","_1":"1 person currently watching this video."},[h._plural(a,"number",b("intlSummarizeNumber")(a))]),className:j(m.cvcIndicator),"data-testid":void 0,role:"img",children:[c,l.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("intlSummarizeNumber")(a)})]})}function q(a){return l.jsx("div",{className:(j||(j=b("stylex")))(m.liveIndicatorExpanded),children:l.jsx(b("Duration.react"),{startTime:a*1e3,useLocalTime:!0})})}}),null);
__d("useVideoPlayerClickToPauseInteraction",["fbt","React","VideoPlayerHooks","gkx"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){var a=b("VideoPlayerHooks").usePlaying(),c=b("VideoPlayerHooks").useController(),d=b("VideoPlayerHooks").useIsLive(),e=h.useCallback(function(){c.pause("user_initiated")},[c]);a=a&&!(b("gkx")("1269128")&&d);return a?{ariaLabel:g._("Pause video"),handler:e,overlayLabel:""}:null}}),null);
__d("generateChainingSessionID",["Random"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return"f"+(b("Random").random()*(1<<30)).toString(16).replace(".","")}}),null);
__d("useCometTahoeChainingDepth",["React","generateChainingSessionID"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=g.createContext({chainingDepthDispatch:null,chainingDepthState:0,chainingSessionID:null});a=function(){var a=0,c=function(a,b){switch(b.type){case"INCREMENT":return a+1;default:return a}};c=g.useReducer(c,a);var d=c[0],e=c[1];a=g.useState(function(){return b("generateChainingSessionID")()});var f=a[0];a[1];return g.useMemo(function(){return{chainingDepthDispatch:e,chainingDepthState:d,chainingSessionID:f}},[e,d,f])};f.useChainingDepth=a;c=function(){return g.useContext(h)};f.useChainingDepthContext=c;d=function(a){var b=a.children;a=a.value;return g.jsx(h.Provider,{value:a,children:b})};f.CometTahoeChainingDepthContextProvider=d}),null);
__d("CometVideoHomeVideoContextMenuContents.entrypoint",["JSResource","CometVideoHomeVideoContextMenuContentsQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.storyDebugInfo,d=a.videoID;a=a.videoMenuLocation;return{queries:{menuContentsQuery:{parameters:b("CometVideoHomeVideoContextMenuContentsQuery$Parameters"),variables:{story_debug_info:c,videoID:d,videoMenuLocation:a}}}}},root:b("JSResource")("CometVideoHomeVideoContextMenuContents.react").__setRef("CometVideoHomeVideoContextMenuContents.entrypoint")};e.exports=a}),null);
__d("CometVideoHomeVideoContextMenu.react",["CometEntryPointPopoverTrigger.react","CometTrackingNodeProvider.react","CometVideoHomeVideoContextMenuContents.entrypoint","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.button,d=a.enableLogging;d=d===void 0?!0:d;var e=a.hideableToken,f=a.identifierToken,h=a.onHideVideo,i=a.onMenuVisibilityChange,j=a.onUnsaveVideo,k=a.position,l=a.storyDebugInfo,m=a.tracking,n=a.videoChannelType,o=a.videoID;a=a.videoMenuLocation;return o==null?null:g.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:55,children:g.jsx(b("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{storyDebugInfo:l,videoID:o,videoMenuLocation:a},onVisibilityChange:i,otherProps:{enableLogging:d,hideableToken:e,identifierToken:f,onHideVideo:h,onUnsaveVideo:j,tracking:m,videoChannelType:n},popoverEntryPoint:b("CometVideoHomeVideoContextMenuContents.entrypoint"),position:(l=k)!=null?l:"below",children:c})})}}),null);
__d("CometVideoHomeThreeDotContextMenu.react",["ix","fbt","CometPressable.react","CometVideoHomeVideoContextMenu.react","React","TetraIcon.react","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){var c=a.color,d=c===void 0?"primary":c,e=a.icon,f=a.onPress;c=a.position;var j=a.stopPropagation;j=j===void 0?!1:j;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","icon","onPress","position","stopPropagation"]);c=i.jsx(b("CometVideoHomeVideoContextMenu.react"),babelHelpers["extends"]({button:function(a,c){return i.jsx(b("CometPressable.react"),{display:"inline",label:h._("More"),onPress:f?function(a){f(),c(a)}:c,overlayDisabled:!0,ref:a,children:i.jsx(b("TetraIcon.react"),{color:d,icon:(a=e)!=null?a:b("fbicon")._(g("484390"),20)})})},position:c},a));return j?i.jsx("div",{onClick:function(a){a.stopPropagation()},children:c}):c}}),null);
__d("CometTahoeTracePolicyContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("VideoPlayerLoggingExternalLogContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({externalLogID:null,externalLogType:null});e.exports=c}),null);