function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{R9wR:function(t,e,n){"use strict";n.r(e),n.d(e,"WhatsappPageModule",(function(){return X}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),r=n("mrSG"),s=n("fXoL"),l=["IonContent"],g=function(t){return{clubbed:t}},d=function(t,e,n){return{sharper:t,"sharper-top":e,"sharper-bottom":n}};function m(t,e){if(1&t&&(s.Wb(0,"ion-row"),s.Wb(1,"ion-col",14),s.Wb(2,"div",15),s.Wb(3,"ion-label",16),s.Wb(4,"div",17),s.Wb(5,"p",18),s.Mc(6),s.Vb(),s.Wb(7,"div",19),s.Rb(8,"div",20),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t){var n=s.ic(),o=n.index,i=n.$implicit,a=s.ic();s.Cb(1),s.oc("ngClass",s.tc(3,g,a.msgList[o+1]&&a.msgList[o+1].userId!=i.userId||!a.msgList[o+1])),s.Cb(3),s.oc("ngClass",s.vc(5,d,a.msgList[o+1]&&a.msgList[o+1].userId==i.userId&&a.msgList[o-1]&&a.msgList[o-1].userId==i.userId,a.msgList[o-1]&&a.msgList[o-1].userId==i.userId,a.msgList[o+1]&&a.msgList[o+1].userId==i.userId)),s.Cb(2),s.Oc("",i.message," ")}}function p(t,e){if(1&t&&(s.Wb(0,"p",18),s.Mc(1),s.Vb()),2&t){var n=s.ic(2).$implicit;s.Cb(1),s.Nc(n.message)}}function b(t,e){if(1&t&&(s.Wb(0,"div",30),s.Rb(1,"ion-img",31),s.Vb()),2&t){var n=s.ic(2).$implicit;s.Cb(1),s.oc("src",n.image)}}function u(t,e){if(1&t&&(s.Wb(0,"div",32),s.Wb(1,"video",33),s.Rb(2,"source",34),s.Vb(),s.Vb()),2&t){var n=s.ic(2).$implicit;s.Cb(2),s.oc("src",n.video,s.Ec)}}function h(t,e){1&t&&s.Rb(0,"div",35)}function f(t,e){1&t&&(s.Wb(0,"div",36),s.Rb(1,"div",37),s.Vb())}function C(t,e){1&t&&s.Rb(0,"div",38)}function v(t,e){1&t&&(s.Wb(0,"div",39),s.Rb(1,"div",40),s.Vb())}var x=function(t,e,n,o){return{sharper:t,"sharper-top":e,"sharper-bottom":n,"transparent-bg":o}};function _(t,e){if(1&t&&(s.Wb(0,"ion-row"),s.Wb(1,"ion-col",21),s.Wb(2,"div",22),s.Wb(3,"ion-label",16),s.Wb(4,"div",17),s.Kc(5,p,2,1,"p",23),s.Kc(6,b,2,1,"div",24),s.Kc(7,u,3,1,"div",25),s.Kc(8,h,1,0,"div",26),s.Kc(9,f,2,0,"div",27),s.Kc(10,C,1,0,"div",28),s.Kc(11,v,2,0,"div",29),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t){var n=s.ic(),o=n.index,i=n.$implicit,a=s.ic();s.Cb(1),s.oc("ngClass",s.tc(9,g,a.msgList[o+1]&&a.msgList[o+1].userId!=i.userId||!a.msgList[o+1])),s.Cb(3),s.oc("ngClass",s.wc(11,x,a.msgList[o+1]&&a.msgList[o+1].userId==i.userId&&a.msgList[o-1]&&a.msgList[o-1].userId==i.userId,a.msgList[o-1]&&a.msgList[o-1].userId==i.userId,a.msgList[o+1]&&a.msgList[o+1].userId==i.userId,i.image||i.map||i.video)),s.Cb(1),s.oc("ngIf",!i.image&&!i.video&&!i.map),s.Cb(1),s.oc("ngIf",i.image),s.Cb(1),s.oc("ngIf",i.video),s.Cb(1),s.oc("ngIf",i.map),s.Cb(1),s.oc("ngIf",!(i.image||i.map||i.video)),s.Cb(1),s.oc("ngIf",i.image||i.map||i.video),s.Cb(1),s.oc("ngIf",i.image||i.map||i.video)}}function M(t,e){if(1&t&&(s.Wb(0,"ion-row"),s.Wb(1,"ion-col"),s.Wb(2,"ion-text",41),s.Mc(3),s.Vb(),s.Vb(),s.Vb()),2&t){var n=s.ic().$implicit;s.Cb(3),s.Nc(n.time)}}function O(t,e){if(1&t&&(s.Wb(0,"div"),s.Kc(1,m,9,9,"ion-row",8),s.Kc(2,_,12,16,"ion-row",8),s.Kc(3,M,4,1,"ion-row",8),s.Vb()),2&t){var n=e.$implicit,o=e.index,i=s.ic();s.Cb(1),s.oc("ngIf",n.userId==i.User),s.Cb(1),s.oc("ngIf",n.userId==i.toUser),s.Cb(1),s.oc("ngIf",i.msgList[o+1]&&i.msgList[o+1].userId!=n.userId||!i.msgList[o+1])}}function P(t,e){1&t&&(s.Wb(0,"ion-row"),s.Wb(1,"ion-col",42),s.Wb(2,"div",15),s.Wb(3,"ion-label",16),s.Wb(4,"div",43),s.Wb(5,"p",44),s.Rb(6,"ion-spinner",45),s.Vb(),s.Wb(7,"div",19),s.Rb(8,"div",20),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb())}function w(t,e){if(1&t&&s.Rb(0,"ion-icon",52),2&t){var n=s.ic().$implicit;s.pc("name",n.icon)}}function y(t,e){if(1&t&&(s.Wb(0,"ion-thumbnail"),s.Rb(1,"ion-img",53),s.Vb()),2&t){var n=s.ic().$implicit;s.Cb(1),s.oc("src",n.image)}}function W(t,e){if(1&t){var n=s.Xb();s.Wb(0,"ion-col",49),s.Wb(1,"ion-label",50),s.ec("click",(function(){s.Cc(n);var t=e.$implicit;return s.ic(2).typeSelected(t)})),s.Kc(2,w,1,1,"ion-icon",51),s.Kc(3,y,2,1,"ion-thumbnail",8),s.Wb(4,"p"),s.Mc(5),s.Vb(),s.Vb(),s.Vb()}if(2&t){var o=e.$implicit;s.Cb(2),s.oc("ngIf",o.icon),s.Cb(1),s.oc("ngIf",o.image),s.Cb(2),s.Nc(o.label)}}function V(t,e){if(1&t&&(s.Wb(0,"ion-list",46),s.Wb(1,"ion-row",47),s.Kc(2,W,6,3,"ion-col",48),s.Vb(),s.Vb()),2&t){var n=s.ic();s.Cb(2),s.oc("ngForOf",n.footerJson)("ngForOf",n.index)}}var I,k=((I=function(){function t(e,n){var o=this;_classCallCheck(this,t),this.activRoute=e,this.modal=n,this.user_input="",this.User="Me",this.toUser="HealthBot",this.show=!1,this.show=!1,this.activRoute.params.subscribe((function(t){o.paramData=t,o.userName=t.name})),this.msgList=[{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:00",message:"Hello, have you seen this great chat UI",id:0},{userId:"Me",userName:"Me",userAvatar:this.paramData.image?this.paramData.image:"../../../../assets/clones/chat/chat/chat5.jpg",time:"12:03",message:"Yeah, I see this. This looks great. ",id:1},{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:05",message:"... and this is absolutely free, anyone can use",id:3},{userId:"Me",userName:"Me",userAvatar:"../../../../assets/clones/chat/chat/chat5.jpg",time:"12:06",message:"wow ! that's great. Love to see more of such chat themes",id:4},{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",message:"Oh there are several other designs. Check all their designs on their website enappd.com",id:5}],this.footerJson=[{icon:"images",label:"Image"},{icon:"call",label:"Phone"},{icon:"mail-unread",label:"Red"},{label:"Document",icon:"radio-button-on"},{icon:"pin",label:"Position"},{icon:"videocam",label:"Video"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"typeSelected",value:function(t){var e=this;console.log(t),""===this.user_input&&"images"===t.icon?(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",image:"../../../../assets/clones/chat/chat/chat3.jpg",id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout((function(){e.senderSends()}),500)):""===this.user_input&&"videocam"===t.icon?(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",video:"../../../../assets/clones/chat/chat/video.mp4",id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout((function(){e.senderSends()}),500)):""===this.user_input&&"pin"===t.icon&&(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",map:{lat:52.678418,lng:7.809007},id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout((function(){e.senderSends()}),500))}},{key:"toggleList",value:function(){this.show=!this.show,console.log(this.show),this.scrollDown()}},{key:"sendMsg",value:function(){var t=this;""!==this.user_input&&(this.msgList.push({userId:this.toUser,userName:this.toUser,userAvatar:this.paramData.image?this.paramData.image:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:01",message:this.user_input,id:this.msgList.length+1}),this.user_input="",this.scrollDown(),setTimeout((function(){t.senderSends()}),500),this.show=!1)}},{key:"senderSends",value:function(){var t=this;this.loader=!0,setTimeout((function(){t.msgList.push({userId:t.User,userName:t.User,userAvatar:"../../../../assets/clones/chat/chat/chat5.jpg",message:"Sorry, didn't get what you said. Can you repeat that please"}),t.loader=!1,t.scrollDown()}),2e3),this.scrollDown()}},{key:"scrollDown",value:function(){var t=this;setTimeout((function(){t.content.scrollToBottom(50)}),200)}},{key:"userTyping",value:function(t){this.show=!1,console.log(t),this.start_typing=t.target.value,this.scrollDown()}},{key:"focusFunction",value:function(t){this.show=!1,console.log(t)}},{key:"something",value:function(t){t.preventDefault(),console.log(t)}}]),t}()).\u0275fac=function(t){return new(t||I)(s.Qb(c.a),s.Qb(a.rb))},I.\u0275cmp=s.Kb({type:I,selectors:[["app-classic"]],viewQuery:function(t,e){var n;1&t&&s.Hc(l,!0),2&t&&s.yc(n=s.fc())&&(e.content=n.first)},decls:19,vars:4,consts:[["translucent",""],[1,"padding_toolbar"],["slot","start"],["slot","icon-only","fill","clear",3,"click"],["name","arrow-back"],["color","medium","text-center",""],["IonContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"footer_item"],["slot","end","name","send","expand","icon-only",1,"footerIconSend",3,"click","mousedown"],["type","text","placeholder","Write a message...",1,"input-box",3,"ngModel","ngModelChange","keypress","ionFocus"],["slot","end","name","add","expand","icon-only",1,"footerIcon",3,"click"],["class","footer-options",4,"ngIf"],["no-padding","",1,"right",3,"ngClass"],[1,"imageAvatarRight"],["color","light"],[1,"chatDiv",3,"ngClass"],["text-wrap","","padding",""],[1,"corner-parent-right"],[1,"corner-child-right"],["no-padding","",1,"left",3,"ngClass"],[1,"imageAvatarLeft"],["text-wrap","","padding","",4,"ngIf"],["class","imageFrom_footer",4,"ngIf"],["class","imageFrom_footer video",4,"ngIf"],["class","imageFrom_footerMap",4,"ngIf"],["class","corner-parent-left",4,"ngIf"],["class","corner-parent-left-image",4,"ngIf"],["class","corner-child-left-image",4,"ngIf"],[1,"imageFrom_footer"],[1,"imageFrom_footer",3,"src"],[1,"imageFrom_footer","video"],["controls","",1,"videoFrom_footer"],["type","video/mp4",3,"src"],[1,"imageFrom_footerMap"],[1,"corner-parent-left"],[1,"corner-child-left"],[1,"corner-parent-left-image"],[1,"corner-child-left-image"],[1,"child"],[1,"chat-time"],["no-padding","",1,"loading-col"],[1,"chatDivLoader"],["text-wrap","","padding","",1,"loader-text"],["name","dots","color","dark"],[1,"footer-options"],[1,"footer_row"],["size","4","class","footer_col",4,"ngFor","ngForOf"],["size","4",1,"footer_col"],[1,"footer_label",3,"click"],["expand","icon-only","class","footerIcon",3,"name",4,"ngIf"],["expand","icon-only",1,"footerIcon",3,"name"],[3,"src"]],template:function(t,e){1&t&&(s.Wb(0,"ion-header",0),s.Wb(1,"ion-toolbar",1),s.Wb(2,"ion-buttons",2),s.Wb(3,"ion-button",3),s.ec("click",(function(){return e.modal.dismiss()})),s.Rb(4,"ion-icon",4),s.Vb(),s.Vb(),s.Wb(5,"ion-title",5),s.Mc(6,"Classic"),s.Vb(),s.Vb(),s.Vb(),s.Wb(7,"ion-content",null,6),s.Wb(9,"ion-list"),s.Kc(10,O,4,3,"div",7),s.Kc(11,P,9,0,"ion-row",8),s.Vb(),s.Vb(),s.Wb(12,"ion-footer"),s.Wb(13,"ion-toolbar"),s.Wb(14,"ion-item",9),s.Wb(15,"ion-icon",10),s.ec("click",(function(){return e.sendMsg()}))("mousedown",(function(t){return e.something(t)})),s.Vb(),s.Wb(16,"ion-input",11),s.ec("ngModelChange",(function(t){return e.user_input=t}))("keypress",(function(t){return e.userTyping(t)}))("ionFocus",(function(t){return e.focusFunction(t)})),s.Vb(),s.Wb(17,"ion-icon",12),s.ec("click",(function(){return e.toggleList()})),s.Vb(),s.Vb(),s.Kc(18,V,3,2,"ion-list",13),s.Vb(),s.Vb()),2&t&&(s.Cb(10),s.oc("ngForOf",e.msgList),s.Cb(1),s.oc("ngIf",e.loader),s.Cb(5),s.oc("ngModel",e.user_input),s.Cb(2),s.oc("ngIf",e.show))},directives:[a.z,a.mb,a.l,a.k,a.A,a.kb,a.u,a.K,o.n,o.o,a.x,a.D,a.C,a.yb,i.k,i.n,a.V,a.t,o.m,a.J,a.B,a.hb,a.db,a.jb],styles:["ion-title[_ngcontent-%COMP%]{font-size:26px}ion-content[_ngcontent-%COMP%]{--background:#e8e8f8}ion-header[_ngcontent-%COMP%]{--background:#5b2573}ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:transparent}ion-list[_ngcontent-%COMP%]{background:transparent;margin-bottom:0;padding:20px 10px 0}.imageAvatarRight[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarRight[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:justify;position:relative;background:#fff;border-radius:6px;border-bottom-left-radius:0;max-width:72vw;color:#444}.imageAvatarRight[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarRight[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarLeft[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:left;position:relative;background:#b9a3e8;border-radius:6px;border-bottom-right-radius:0;max-width:72vw;color:#fff;font-weight:500;padding:8px}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv.transparent-bg[_ngcontent-%COMP%]{background:transparent}.imageAvatarLeft[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarLeft[_ngcontent-%COMP%]   ion-img.imageFrom_footer[_ngcontent-%COMP%]{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer[_ngcontent-%COMP%]{width:calc(72vw + 20px)}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer.video[_ngcontent-%COMP%]{background:#000}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footerMap[_ngcontent-%COMP%]{width:calc(72vw + 20px)}.imageAvatarLeft[_ngcontent-%COMP%]   .videoFrom_footer[_ngcontent-%COMP%]{width:calc(72vw + 20px);-o-object-fit:fill;object-fit:fill;height:auto;border-radius:5px;display:block}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px}ion-title[_ngcontent-%COMP%]{font-size:22px}ion-fab-button[_ngcontent-%COMP%]{width:47px!important;height:47px!important}ion-fab[_ngcontent-%COMP%]{bottom:-22px!important}.footerIcon[_ngcontent-%COMP%]{color:#b39ddb;font-size:2.5em}.footerIconSend[_ngcontent-%COMP%]{color:rgba(161,169,187,.92)}ion-input[_ngcontent-%COMP%]{--placeholder-color:var(--ion-color-medium-tint)}.chatDivLoader[_ngcontent-%COMP%]{position:relative;background:#fff;border-radius:6px;min-width:80px;max-width:80px;align-items:center;color:#fff;padding:2px;display:flex;justify-content:center;border-bottom-left-radius:0;margin-bottom:15px}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;left:-16px;bottom:0;overflow:hidden;border-radius:0}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:0;height:0;border-top:14px solid transparent;border-right:19px solid #fff;border-bottom:2px solid #fff}ion-text[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium)}ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.imageAvatarBottomLoader[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:8px;z-index:11}.hidden[_ngcontent-%COMP%]{visibility:hidden}.loading-col[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{justify-content:flex-start;padding-left:20px}.left[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:20px}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{padding:8px}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;left:-16px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:0;height:0;border-top:14px solid transparent;border-right:19px solid #fff;border-bottom:2px solid #fff}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;right:-16px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]   .corner-child-left[_ngcontent-%COMP%]{width:0;height:0;border-color:transparent transparent #b9a3e8 #b9a3e8;border-style:solid;border-width:14px 10px 2px 17px}.input-box[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade)}ion-item.footer_item[_ngcontent-%COMP%]{--inner-border-width:0px 0px 0px 0px;--highlight-color-valid:var(--ion-color-tertiary-contrast)!important}.footer-options[_ngcontent-%COMP%]{background:#e8e8f8}.footer_row[_ngcontent-%COMP%]{padding:16px 0 0;background:transparent}.footer_row[_ngcontent-%COMP%]   .footer_label[_ngcontent-%COMP%]{padding-bottom:15px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-top:10px}agm-map[_ngcontent-%COMP%]{height:calc(72vw + 20px);width:calc(72vw + 20px)}.chat-time[_ngcontent-%COMP%]{padding:10px;font-weight:700;font-size:11px;color:#888}.corner-parent-left-image[_ngcontent-%COMP%]{position:absolute;right:-20px;width:20px;height:calc(100% - 20px);top:0;background:#e8e8f8}.corner-child-left-image[_ngcontent-%COMP%]{position:absolute;top:calc(100% - 20px);width:20px;height:20px;right:-20px}.corner-child-left-image[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%]{border-right:21px solid #e8e8f8;border-bottom:15px solid transparent}.transparent-bg[_ngcontent-%COMP%]{background:transparent}.loader-text[_ngcontent-%COMP%]{padding:0 20px 0 10px!important}"]}),I);function L(t,e){1&t&&(s.Wb(0,"ion-title",15),s.Mc(1," Classic"),s.Vb())}function j(t,e){1&t&&s.Rb(0,"ion-searchbar",16)}function D(t,e){if(1&t&&(s.Wb(0,"ion-text",31),s.Mc(1),s.Vb()),2&t){var n=s.ic().$implicit;s.Cb(1),s.Nc(n.time)}}function A(t,e){if(1&t&&(s.Wb(0,"ion-text",32),s.Mc(1),s.Vb()),2&t){var n=s.ic().$implicit;s.Cb(1),s.Nc(n.past)}}function R(t,e){if(1&t&&(s.Wb(0,"ion-avatar",33),s.Mc(1),s.Vb()),2&t){var n=s.ic().$implicit;s.Cb(1),s.Nc(n.count)}}function F(t,e){if(1&t){var n=s.Xb();s.Wb(0,"ion-item",19),s.ec("click",(function(){s.Cc(n);var t=e.$implicit;return s.ic(2).goforChat(t)})),s.Wb(1,"ion-avatar",20),s.Rb(2,"ion-img",21),s.Vb(),s.Wb(3,"ion-label"),s.Wb(4,"div",22),s.Wb(5,"div",23),s.Wb(6,"h2",24),s.Mc(7),s.Vb(),s.Vb(),s.Vb(),s.Wb(8,"p",25),s.Mc(9),s.Vb(),s.Vb(),s.Wb(10,"div",26),s.Wb(11,"div",27),s.Kc(12,D,2,1,"ion-text",28),s.Kc(13,A,2,1,"ion-text",29),s.Vb(),s.Kc(14,R,2,1,"ion-avatar",30),s.Vb(),s.Vb()}if(2&t){var o=e.$implicit;s.Cb(2),s.oc("src",o.image),s.Cb(5),s.Oc("",o.name," "),s.Cb(2),s.Nc(o.description),s.Cb(3),s.oc("ngIf",o.time),s.Cb(1),s.oc("ngIf",o.past),s.Cb(1),s.oc("ngIf",o.count)}}function N(t,e){if(1&t&&(s.Wb(0,"ion-list",17),s.Kc(1,F,15,6,"ion-item",18),s.Vb()),2&t){var n=s.ic();s.Cb(1),s.oc("ngForOf",n.chatData)}}function K(t,e){if(1&t&&(s.Wb(0,"ion-icon",36),s.Mc(1),s.Vb()),2&t){var n=s.ic().$implicit;s.pc("name",n.video),s.Cb(1),s.Oc("",n.count," ")}}function z(t,e){if(1&t&&(s.Wb(0,"ion-icon",36),s.Mc(1),s.Vb()),2&t){var n=s.ic().$implicit;s.pc("name",n.phone),s.Cb(1),s.Oc("",n.count," ")}}function T(t,e){if(1&t&&(s.Wb(0,"ion-item"),s.Wb(1,"ion-avatar",20),s.Rb(2,"ion-img",21),s.Vb(),s.Wb(3,"ion-label"),s.Wb(4,"div",22),s.Wb(5,"div",23),s.Wb(6,"h2",24),s.Mc(7),s.Vb(),s.Vb(),s.Vb(),s.Wb(8,"p",25),s.Mc(9),s.Vb(),s.Vb(),s.Wb(10,"div",26),s.Wb(11,"div",27),s.Kc(12,K,2,2,"ion-icon",35),s.Kc(13,z,2,2,"ion-icon",35),s.Vb(),s.Vb(),s.Vb()),2&t){var n=e.$implicit;s.Cb(2),s.oc("src",n.image),s.Cb(5),s.Oc("",n.name," "),s.Cb(2),s.Nc(n.call),s.Cb(3),s.oc("ngIf",n.video),s.Cb(1),s.oc("ngIf",n.phone)}}function q(t,e){if(1&t&&(s.Wb(0,"ion-list",17),s.Kc(1,T,14,5,"ion-item",34),s.Vb()),2&t){var n=s.ic();s.Cb(1),s.oc("ngForOf",n.chatData)}}var S,$,E,B,U=[{path:"",component:(S=function(){function t(e){_classCallCheck(this,t),this.modalCtrl=e,this.segmentTab="Chats",this.title=!0,this.chatData=[{name:"Jovenica Alba",image:"../../../../assets/clones/chat/chat/chat1.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"2",time:"12:17",call:"(3) January 09/27/2019",video:"videocam"},{name:"Oliver",image:" ../../../../assets/clones/chat/chat/chat2.jpg",description:"Rahim: thanks!",time:"12:17",call:"(3) January 09/26/2019",video:"videocam"},{name:"George",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:"Kajor P: share your contact please!",count:"2",time:"Yesterday",call:"(1) January 09/26/2018",video:"videocam"},{name:"Harry",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",time:"Sunday",call:"(5) February 08/20/2018",video:"videocam"},{name:"Jack",image:" ../../../../assets/clones/chat/chat/chat5.jpg",description:"Yes! that's right call him right now.",past:"09/27/2015",call:"(4) February 28/20/2018",phone:"call"},{name:"Jacob",image:" ../../../../assets/clones/chat/chat/chat6.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"1",past:"09/27/2015",call:"(4) February 28/20/2015",phone:"call"},{name:"Noah",image:" ../../../../assets/clones/chat/chat/chat7.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"(3) February 28/20/2016",phone:"call"},{name:"Charlie",image:" ../../../../assets/clones/chat/chat/chat8.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"6",past:"09/27/2015",call:"(3) December 28/20/2017",phone:"call"},{name:"Logan",image:" ../../../../assets/clones/chat/chat/chat1.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"09/27/2015",phone:"call"},{name:"Harrison",image:" ../../../../assets/clones/chat/chat/chat2.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"09/27/2015",video:"videocam"},{name:"Sebastian",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/17/2016",call:"(3) December 28/20/2017",video:"videocam"},{name:"Zachary",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/07/2017",call:"09/27/2015",video:"videocam"},{name:"Elijah",image:" ../../../../assets/clones/chat/chat/chat5.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/09/2018",call:"09/27/2015",phone:"call"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"segmentChanged",value:function(t){this.segmentTab=t.detail.value,console.log(this.segmentTab)}},{key:"goforChat",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.title=!0,t.next=3,this.modalCtrl.create({component:k});case 3:return e=t.sent,t.next=6,e.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"toggleSearchTitl",value:function(){this.title=!this.title}}]),t}(),S.\u0275fac=function(t){return new(t||S)(s.Qb(a.rb))},S.\u0275cmp=s.Kb({type:S,selectors:[["app-whatsapp"]],decls:28,vars:4,consts:[["slot","start"],["defaultHref","/clones-ui"],["name","search","expand","icon-only","color","light","mode","ios","slot","end",3,"click"],["src","assets/clones/chat/chat/chat.png","slot","end",1,"header_image"],["name","ellipsis-vertical","expand","icon-only","color","light","mode","md","slot","end"],["mode","md","color","light","text-start","",4,"ngIf"],["mode","ios","placeholder","Search your friend",4,"ngIf"],["mode","md",3,"ionChange"],["mode","md","value","Calls"],[1,"contentCenter"],["slot","end",1,"segment_Text"],["mode","md","value","Chats","checked",""],[1,"segmentCount"],["mode","md","value","group"],["no-padding","",4,"ngIf"],["mode","md","color","light","text-start",""],["mode","ios","placeholder","Search your friend"],["no-padding",""],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",1,"chatImage"],[3,"src"],[1,"withcount"],[1,"nameAvatar"],["color","light"],[1,"widthHalf"],["slot","end",1,"timeSlot"],[1,"timeEnd"],["slot","end","color","success","text-uppercase","",4,"ngIf"],["slot","end","color","medium",4,"ngIf"],["class","chatCount",4,"ngIf"],["slot","end","color","success","text-uppercase",""],["slot","end","color","medium"],[1,"chatCount"],[4,"ngFor","ngForOf"],["class","videocam","expand","icon-only","mode","ios",3,"name",4,"ngIf"],["expand","icon-only","mode","ios",1,"videocam",3,"name"]],template:function(t,e){1&t&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button",1),s.Vb(),s.Wb(4,"ion-icon",2),s.ec("click",(function(){return e.toggleSearchTitl()})),s.Vb(),s.Rb(5,"ion-img",3),s.Rb(6,"ion-icon",4),s.Kc(7,L,2,0,"ion-title",5),s.Kc(8,j,1,0,"ion-searchbar",6),s.Vb(),s.Wb(9,"ion-toolbar"),s.Wb(10,"ion-segment",7),s.ec("ionChange",(function(t){return e.segmentChanged(t)})),s.Wb(11,"ion-segment-button",8),s.Wb(12,"div",9),s.Wb(13,"ion-text",10),s.Mc(14,"Calls"),s.Vb(),s.Vb(),s.Vb(),s.Wb(15,"ion-segment-button",11),s.Wb(16,"div",9),s.Wb(17,"ion-text",10),s.Mc(18,"Chats"),s.Wb(19,"ion-avatar",12),s.Mc(20,"17"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(21,"ion-segment-button",13),s.Wb(22,"div",9),s.Wb(23,"ion-text",10),s.Mc(24,"Contacts"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(25,"ion-content"),s.Kc(26,N,2,1,"ion-list",14),s.Kc(27,q,2,1,"ion-list",14),s.Vb()),2&t&&(s.Cb(7),s.oc("ngIf",e.title),s.Cb(1),s.oc("ngIf",!e.title),s.Cb(18),s.oc("ngIf","Chats"==e.segmentTab),s.Cb(1),s.oc("ngIf","Calls"==e.segmentTab))},directives:[a.z,a.mb,a.l,a.h,a.i,a.A,a.B,o.o,a.X,a.xb,a.Y,a.hb,a.g,a.u,a.kb,a.W,a.yb,a.K,o.n,a.D,a.J],styles:['.chatImage[_ngcontent-%COMP%]{width:50px;height:50px}.plusClass[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:25px;height:25px;background:#fff;border-radius:50%;right:15px;position:relative;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;box-shadow:0 .5px 0 5px rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}ion-header[_ngcontent-%COMP%]:after{box-shadow:0 0 20px rgba(0,0,0,.5);background-image:none;left:0;bottom:0;background-position:left 0 top 0;position:absolute;width:100%;height:8px;content:""}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:#006257}.contentCenter[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-segment-button[_ngcontent-%COMP%]{--color:#58938e!important;--color-checked:var(--ion-color-tertiary-contrast);border-bottom:0 solid hsla(0,0%,100%,.3)}.padding_right[_ngcontent-%COMP%]{padding-right:8px}.header_image[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%]{width:1.5em;height:1.5em}.header_image[_ngcontent-%COMP%]{margin:0 18px}.tab-icon[_ngcontent-%COMP%]{font-size:20px}.withcount[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.chatCount[_ngcontent-%COMP%]{background:var(--ion-color-success);color:var(--background)}.chatCount[_ngcontent-%COMP%], .videocam[_ngcontent-%COMP%]{width:17px!important;height:17px!important;justify-content:center;align-items:center;display:flex;font-size:10px;font-weight:700;margin-left:8px}.videocam[_ngcontent-%COMP%]{color:#006257}.segmentCount[_ngcontent-%COMP%]{background:var(--ion-color-tertiary-contrast);width:17px!important;height:17px!important;justify-content:center;align-items:center;display:flex;font-size:10px;font-weight:700;color:#006257;margin-left:8px;padding:3px;box-sizing:content-box}h2[_ngcontent-%COMP%]{font-size:.84em;font-weight:700;color:rgba(56,58,62,.89)}.timeEnd[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-bottom:8px}.widthHalf[_ngcontent-%COMP%]{color:rgba(34,36,40,.69);font-size:12px;font-weight:700}.nameAvatar[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%}.nameAvatar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.94em;font-weight:700}ion-text[_ngcontent-%COMP%]{font-size:10px}ion-text[_ngcontent-%COMP%], ion-text.segment_Text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-text.segment_Text[_ngcontent-%COMP%]{font-size:14px}.sc-ion-label-ios-h[_ngcontent-%COMP%]{height:44px;justify-content:center}.sc-ion-label-ios-h[_ngcontent-%COMP%], .timeSlot[_ngcontent-%COMP%]{display:flex;flex-direction:column}.timeSlot[_ngcontent-%COMP%]{align-items:flex-end}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#fff;--color:#fff;height:35px!important}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}.sc-ion-label-ios-s[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-top:5px}.title-ios[_ngcontent-%COMP%]{height:40px!important;padding-top:12px;padding-left:50px;padding-bottom:10px}']}),S)}],H=((B=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ob({type:B}),B.\u0275inj=s.Nb({factory:function(t){return new(t||B)},imports:[[c.j.forChild(U)],c.j]}),B),J=((E=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ob({type:E}),E.\u0275inj=s.Nb({factory:function(t){return new(t||E)},imports:[[o.c,i.g,a.nb]]}),E),X=(($=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ob({type:$}),$.\u0275inj=s.Nb({factory:function(t){return new(t||$)},imports:[[o.c,i.g,a.nb,H,J]]}),$)}}]);