if (self.CavalryLogger) { CavalryLogger.start_js(["inUMQ"]); }

__d("CometGroupRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3777088612324145",metadata:{},name:"CometGroupRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupDiscussionRootSuccessQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4237718512914425",metadata:{},name:"CometGroupDiscussionRootSuccessQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupPermalinkRootFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3398654016927700",metadata:{},name:"CometGroupPermalinkRootFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometContextualProfileRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3531400440248731",metadata:{},name:"ProfileCometContextualProfileRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometImageMediaType",["gkx"],(function(a,b,c,d,e,f){"use strict";a=function(){return b("gkx")("1793884")?"image/webp":"image/x-auto"};c={get:a};e.exports=c}),null);
__d("buildGroupCometRoot.entrypoint",["CometImageMediaType","JSResource","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","qex","CometGroupRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometGroupRoot.react").__setRef("buildGroupCometRoot.entrypoint"),function(a){return{rootQueryReference:{parameters:b("CometGroupRootQuery$Parameters"),variables:{actorID:a.routeProps.actorID,groupID:a.routeProps.groupID,hasPersistentGroupJoinedStatus:(a=b("qex")._("1710311"))!=null?a:!1,imageMediaType:b("CometImageMediaType").get(),scale:b("WebPixelRatio").get()}}}});e.exports=a}),null);
__d("CometGroupDiscussionRoot.entrypoint",["CometGroupDiscussionRootSuccessQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildGroupCometRoot.entrypoint","gkx"],(function(a,b,c,d,e,f){"use strict";var g="DISCUSSION",h=new Map([[0,"DISCUSSION"],[1,"BUY_AND_SELL_DISCUSSION"],[2,"BUY_AND_SELL"]]);a=b("buildGroupCometRoot.entrypoint")(b("JSResourceForInteraction")("CometGroupDiscussionRoot.react").__setRef("CometGroupDiscussionRoot.entrypoint"),function(a){var c=a.routeProps,d=c.creative_provider_id,e=c.feedType,f=c.focusCommentID,i=c.groupID;c=c.hoistStories;a=a.routeParams.sorting_setting;return{queries:{queryReference:{parameters:b("CometGroupDiscussionRootSuccessQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometGroupDiscussionRootSuccessQuery",creative_provider_id:d,feedLocation:"GROUP",feedType:(d=h.get(e))!=null?d:g,feedbackSource:0,focusCommentID:f,groupID:i,hasHoistStories:c!=null&&c.length>0,hoistStories:c,hoistStoriesCount:Math.min((e=c==null?void 0:c.length)!=null?e:0,6),privacySelectorRenderLocation:"COMET_STREAM",regular_stories_count:b("gkx")("1484535")?2:3,regular_stories_stream_initial_count:2,renderLocation:"group",scale:b("WebPixelRatio").get(),shouldDeferMainFeed:b("gkx")("1645546")&&c!=null&&c.length>0,sortingSetting:a,useDefaultActor:!1}}}}});e.exports=a}),null);
__d("CometGroupPermalinkRoot.entrypoint",["JSResource","WebPixelRatio","buildGroupCometRoot.entrypoint","gkx","CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters","CometGroupPermalinkRootFeedQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g="CometGroupPermalinkRootFeedQuery";a=b("buildGroupCometRoot.entrypoint")(b("JSResource")("CometGroupPermalinkRoot.react").__setRef("CometGroupPermalinkRoot.entrypoint"),function(a){a=a.routeProps;var c=a.focusCommentID,d=a.groupID;a=a.storyID;c={UFI2CommentsProvider_commentsKey:g,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP_PERMALINK",feedbackSource:2,focusCommentID:c,groupID:d,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"group_permalink",scale:b("WebPixelRatio").get(),storyID:a,useDefaultActor:!1};a={pageID:d,scale:b("WebPixelRatio").get()};if(b("gkx")("1814751"))return{queries:{loggedOutFooterQueryReference:{parameters:b("CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:a},queryReference:{parameters:b("CometGroupPermalinkRootFeedQuery$Parameters"),variables:c}}};else return{queries:{queryReference:{parameters:b("CometGroupPermalinkRootFeedQuery$Parameters"),variables:c}}}});e.exports=a}),null);
__d("ProfileCometContextualProfileRoot.entrypoint",["JSResourceForInteraction","ProfileCometContextualProfileRootQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{contextualProfileQueryReference:{parameters:b("ProfileCometContextualProfileRootQuery$Parameters"),variables:{contextualProfileContext:{associated_context_id:a.routeProps.groupID,render_location:"GROUP"},feedLocation:"GROUP_MEMBER_BIO_FEED",groupID:a.routeProps.groupID,postsToLoad:1,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"group_bio",scale:b("WebPixelRatio").get(),useDefaultActor:!1,userID:a.routeProps.userID}}}}},root:b("JSResourceForInteraction")("ProfileCometContextualProfileRoot.react").__setRef("ProfileCometContextualProfileRoot.entrypoint")};e.exports=a}),null);