$&&$(function(){!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=window.localStorage,r=function(){try{return a.setItem("test","test"),a.removeItem("test"),!0}catch(e){return!1}}();t.localStorage=a,t.isLocalStorageAvailable=r},function(e,t,n){"use strict";function a(e,t){var n=e.find("animateTransform")[0];t?(n.setAttribute("repeatCount","indefinite"),n.beginElement()):n.setAttribute("repeatCount","1")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mac:/Macintosh/.test(navigator.userAgent),iosdevice:/(iPad)|(iPhone)/.test(navigator.userAgent)}},function(e,t,n){"use strict";function a(e,t,n){var a=void 0,r={event:"keydown",target:document,prevent:!1};n=u(n,r),Array.isArray(e)?(a=[],c.default.mac||(e=e.map(function(e){return e.replace("Cmd","Ctrl")})),e.forEach(function(e){return a.push(o(e,t,n))})):(c.default.mac||(e=e.replace("Cmd","Ctrl")),a=o(e,t,n));var i="string"==typeof n.target?document.querySelector(n.target):n.target;Array.isArray(a)?a.forEach(function(a,r){f[e[r]]||(f[e[r]]=[]),i.addEventListener(n.event,a,!1),f[e[r]].push({event:n.event,elem:i,fn:t,realFn:a})}):(f[e]||(f[e]=[]),i.addEventListener(n.event,a,!1),f[e].push({event:n.event,elem:i,fn:t,realFn:a}))}function r(e,t,n){function a(e){f[e]&&f[e].slice().reverse().forEach(function(e,a,r){e.fn!==t||n.target&&e.elem!==n.target||(e.elem.removeEventListener(e.event,e.realFn,!1),r.splice(r.length-1-a,1))})}n=n||{},Array.isArray(e)?e.forEach(a):a(e)}function o(e,t,n){return e=l(e).split("+"),function(a){i(a,e)&&(t(a),n.prevent&&(a.preventDefault(),a.stopPropagation()))}}function i(e,t){var n=s(e.keyCode),a={enter:13},r={},o=["shift","ctrl","alt","cmd"],i=0;o.forEach(function(e){r[e]={wanted:!1,pressed:!1}}),e.shiftKey&&(r.shift.pressed=!0),e.ctrlKey&&(r.ctrl.pressed=!0),e.altKey&&(r.alt.pressed=!0),e.metaKey&&(r.cmd.pressed=!0);for(var l=0;l<t.length;l++){var u=t[l];o.indexOf(u)>-1?(i++,r[u].wanted=!0):(u.length>1&&a[u]===e.keyCode||n===u)&&i++}return t.length===i&&Object.keys(r).reduce(function(e,t){return e&&r[t].wanted===r[t].pressed},!0)}function s(e){switch(e){case 91:case 93:return"MetaKey";case 188:return",";case 190:return".";case 219:return"[";case 221:return"]";default:return String.fromCharCode(e).toLowerCase()}}function l(e){return e.toLowerCase().replace(/\s/g,"")}function u(e,t){if(e){for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.unbindKeys=t.bindKeys=void 0;var d=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(d),f={};t.bindKeys=a,t.unbindKeys=r},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode("::selection { background: transparent; }")),y.forEach(function(a){function r(){function a(){function o(){e.selectionStart=r,e.selectionEnd=i,t.removeChild(n)}t.appendChild(n),setTimeout(o,10),(0,x.unbindKeys)(m,a,{target:e})}var r=e.selectionStart,i=e.selectionEnd,m=["Cmd+Z","Ctrl+Z"];if("inline"!==s||-1===e.value.substring(r,i).indexOf("\n")){var g=u({name:o,pattern:l,text:e.value,start:r,end:i,isConsequent:!0});console.log(g),g.isWrapped?v({name:o,pattern:l,elem:e,start:r,end:i,parsed:g,prefix:d,nextPrefix:c,suffix:f}):p({name:o,pattern:l,elem:e,start:r,end:i,parsed:g,prefix:d,nextPrefix:c,suffix:f}),(0,x.bindKeys)(m,a,{target:e}),$(e).on("input",function(){(0,x.unbindKeys)(m,a,{target:e})})}}var o=a.name,i=a.keys,s=a.type,l=a.regexp,u=a.parse,d=a.prefix,c=a.nextPrefix,f=a.suffix,p=a.wrap,v=a.unwrap;(0,x.bindKeys)(i,r,{target:e,prevent:!0})})}function o(e){var t=e.elem,n=e.text,a=e.start,r=e.end,o=e.nextStart,i=e.nextEnd;t.selectionStart=a,t.selectionEnd=r,document.execCommand("insertText",!1,n),$(t).trigger("input"),t.selectionStart=o,t.selectionEnd=i}function i(e){var t=e.pattern,n=e.text,a=e.start,r=e.end,o=e.isConsequent,i=m({text:n,start:a,end:r}),s=i.value,l=i.start,u=v({text:s,start:a-l,end:r-l,pattern:t,isConsequent:o});if(!u)return{isWrapped:!1};var d=u.value.split(u.unwrappedValue);return h({},u,{isWrapped:!0,realStart:u.start+l,realEnd:u.end+l,prefixLength:d[0].length,suffixLength:d[1].length})}function s(e){var t=e.elem,n=e.start,a=e.end,r=e.prefix,i=e.suffix,s=g({elem:t,start:n,end:a});o({elem:t,text:""+r+s.value+i,start:s.start,end:s.end,nextStart:n+r.length,nextEnd:a+r.length})}function l(e){var t=e.elem,n=e.start,a=e.end,r=e.parsed,i=r.realStart,s=r.realEnd,l=r.unwrappedValue,u=r.prefixLength,d=r.suffixLength;if(!l.length)return void o({elem:t,text:l,start:i,end:s,nextStart:i,nextEnd:i});var c=i+u,f=s-d,p=n-c,v=a-f;p<0&&(v-=p,p=0),v>0&&(v=0),o({elem:t,text:l,start:i,end:s,nextStart:i+p,nextEnd:i+l.length+v})}function u(e){var t=e.elem,n=e.start,a=e.end,r=e.prefix,i=e.suffix,s=g({elem:t,start:n,end:a}),l=s.value,u=void 0;s.value?C.test(s.value)?(l=""+r+s.value+" "+i,u=s.end+r.length+1):(l=r+" "+s.value+i,u=s.start+r.length):(l=r+" "+i,u=n+r.length),o({elem:t,text:l,start:s.start,end:s.end,nextStart:u,nextEnd:u})}function d(e){var t=e.elem,n=e.start,a=e.end,r=e.parsed,o=r.realStart,i=r.unwrappedValue,s=r.prefixLength,u=i.split(" "),d=o+s;u.length>1&&C.test(u[0])?(t.selectionStart=d,t.selectionEnd=d+u[0].length):l({elem:t,start:n,end:a,parsed:r})}function c(e){var t=e.text,n=e.start,r=e.end,o=e.pattern,i=y.filter(function(e){return"block"===e.type}),s=t.split("\n").reduce(function(e,t){var s=e.lastIndex,l=s+t.length;if(!(s<=n&&l>=n||s>=n&&l<=r||s<=r&&l>=r))return h({},e,{lastIndex:l+1});var u=i.reduce(function(e,n){if(e)return e;n.regexp.lastIndex=0;var a=n.regexp.exec(t);if(a){var r=a[0],o=a[1],i=a.index,l=a.index+r.length;return{value:r,wrappedBy:n.name,unwrappedValue:o,prefixLength:r.length-o.length,start:i+s,end:l+s}}},null),d=u||{value:t,start:s,end:l};return o.lastIndex=0,{lines:[].concat(a(e.lines),[d]),lastIndex:l+1,isWrapped:e.isWrapped&&o.test(d.value)}},{lines:[],lastIndex:0,isWrapped:!0});return delete s.lastIndex,s}function f(e){var t=e.elem,n=e.start,r=e.end,i=e.prefix,s=e.pattern,l=e.nextPrefix,u=e.parsed.lines,d=u.reduce(function(e,t){var n=""+i+t.value;return s.lastIndex=0,s.test(t.value)&&l?n=""+l+t.value:t.unwrappedValue&&(n=""+i+t.unwrappedValue),[].concat(a(e),[n])},[]).join("\n"),c=u[0].start,f=u[u.length-1].end,p=n-c,v=r-f;v<c-f&&(v+=c-f-v);var m=c,g=c+d.length;o({elem:t,text:d,start:c,end:f,nextStart:m+p+i.length,nextEnd:g+v})}function p(e){var t=e.elem,n=e.start,r=e.end,i=e.pattern,s=e.parsed.lines,l=s.reduce(function(e,t){return i.lastIndex=0,[].concat(a(e),[i.test(t.value)?t.unwrappedValue:t.value])},[]).join("\n"),u=s[0].start,d=s[s.length-1].end,c=u+s[0].prefixLength,f=d,p=n-c,v=r-f;p<0&&(p=0),v<c-f&&(v+=c-f-v),o({elem:t,text:l,start:u,end:d,nextStart:u+p,nextEnd:u+l.length+v})}function v(e){var t=e.text,n=e.start,a=e.end,r=e.pattern,o=e.isConsequent,i=void 0,s=[];for(console.log(t,n,a),r.lastIndex=0;null!==(i=r.exec(t));){console.log(i);var l=i[0],u=i[1],d=i.index,c=i.index+l.length;d<=n&&c>=a&&s.push({value:l,unwrappedValue:u,start:d,end:c}),o&&(r.lastIndex=i.index+1)}return s.length?(s.sort(function(e,t){return e.value.length-t.value.length}),s[0]):null}function m(e){var t=e.text,n=e.start,a=e.end;for(n-=1;"\n"!==t[n]&&n>0;)n--;for(0!==n&&n++;"\n"!==t[a]&&a<t.length;)a++;return{value:t.substring(n,a),start:n,end:a}}function g(e){var t=e.elem,n=e.start,a=e.end,r=n,o=a,i=t.value.substr(n,a-n);if(n===a){var s=m({text:t.value,start:n,end:a}),l=s.value,u=s.start,d=v({text:l,start:n-u,end:a-u,pattern:/[^\s]+/g});d&&(r=d.start+u,o=d.end+u,i=d.value)}return{start:r,end:o,value:i}}Object.defineProperty(t,"__esModule",{value:!0});var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x=n(3),b={type:"inline",parse:i,wrap:s,unwrap:l},w={type:"block",parse:c,wrap:f,unwrap:p},y=[h({},b,{name:"bold",keys:"Cmd+B",regexp:/\*\*([^\s]{0,2}|[^\s].*?[^\s])\*\*/g,prefix:"**",suffix:"**"}),h({},b,{name:"italic",keys:"Cmd+I",regexp:/\/\/([^\s]{0,2}|[^\s].*?[^\s])\/\//g,prefix:"//",suffix:"//"}),h({},b,{name:"link",keys:"Cmd+K",regexp:/\(\(\s*(.*?)\s*\)\)/g,prefix:"((",suffix:"))",wrap:u,unwrap:d}),h({},w,{name:"header",keys:"Cmd+Alt+1",regexp:/^[^\S\n]*#[^\S\n]*([^#].*)$/g,prefix:"# "}),h({},w,{name:"subheader",keys:"Cmd+Alt+2",regexp:/^[^\S\n]*##[^\S\n]*([^#].*)$/g,prefix:"## "}),h({},w,{name:"remove headers",keys:"Cmd+Alt+0",regexp:/^[^\S\n]*#{1,2}[^\S\n]*([^#].*)$/g,wrap:p}),h({},w,{name:"increase quote level",keys:"Cmd+]",regexp:/^[^\S\n]*>[^\S\n]*(.*)$/g,prefix:"> ",nextPrefix:">",unwrap:f}),h({},w,{name:"decrease quote level",keys:"Cmd+[",regexp:/^[^\S\n]*>[^\S\n]*(.*)$/g,prefix:"> ",wrap:function(){}})],C=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!\/\\\w]*))?)/;t.default=r},,,,,,,function(e,t,n){"use strict";function a(e){var t=e.file,n=e.url,a=e.progressCallback,r=e.doneCallback,o=e.errorCallback;if(window.FormData){var i=new window.FormData;i.append("file",t),$.ajax({type:"POST",timeout:0,url:n,data:i,cache:!1,contentType:!1,processData:!1,xhr:function(){var e=$.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",a,!1),e},success:r,error:o})}}function r(e,t,n){return e.removeClass("e2-toggle-on"),e.addClass("e2-toggle-thinking"),(0,c.default)(e,1),$.ajax({type:"post",timeout:1e4,url:e.attr("href"),data:"result=ajaxresult",success:function(a){"on-rehref|"===a.substr(0,10)&&(e.addClass("e2-toggle-on"),t(a.substr(10))),"off-rehref|"===a.substr(0,11)&&(e.removeClass("e2-toggle-on"),n(a.substr(11)))},error:function(){window.location.href=e.attr("href")},complete:function(){e.removeClass("e2-toggle-thinking"),(0,c.default)(e,0)}}),!1}function o(e){var t=e.originalEvent.dataTransfer;if(t&&(!t.types.contains||t.types.contains("Files"))&&(!t.types.indexOf||-1!==t.types.indexOf("Files"))){t.dropEffect&&(t.dropEffect="copy");var n=$(this);return n.addClass("e2-external-drop-target-dragover"),n.hasClass("e2-external-drop-target-altable")&&e.altKey?n.addClass("e2-external-drop-target-dragover-alt"):n.removeClass("e2-external-drop-target-dragover-alt"),!1}}function i(){var e=$(this);return e.removeClass("e2-external-drop-target-dragover"),e.removeClass("e2-external-drop-target-dragover-alt"),!1}function s(e,t){var n=.1+.8*Math.min(t,1);e.style.strokeDashoffset=Math.floor(245-245*n)}function l(e){var t=$(this),n=t.find("img"),r=e.originalEvent.dataTransfer;if(r||r.files){if(1===r.files.length){var o=r.files[0],i=$("#e2-user-picture-uploading #e2-progress")[0],l="e2-user-picture-container-uploading";(0,c.default)(t,1),t.addClass(l),a({file:o,url:$("#e2-userpic-upload-action").attr("href"),progressCallback:function(e){s(i,e.loaded/e.total)},doneCallback:function(e){if(s(i,0),(0,c.default)(t,0),"image|"===e.substr(0,6)){var a=e.substr(6).split("|")[0];n.attr("src",a+"?"+encodeURIComponent(new Date)),n.bind("load",function(){return t.removeClass(l)}),$(".e2-set-userpic-by-dragging").slideUp(333)}else t.removeClass(l)},errorCallback:function(){s(i,0)}})}return!1}}var u=n(0),d=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(d);n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),$(".e2-favourite-toggle").click(function(){var e=$(this),t=function(t){return function(n){e.attr("href",n).closest(".e2-note")[t]("e2-note-favourite")}};return r(e,t("addClass"),t("removeClass"))}),$(".e2-pinned-toggle").click(function(){var e=$(this),t=function(t){return e.attr("href",t)};return r(e,t,t)}),$(".e2-important-toggle").click(function(){var e=$(this),t=function(t){return function(n){e.attr("href",n).closest(".e2-comment, .e2-comment-form-meta-area").find(".e2-comment-piece-markable")[t]("e2-comment-piece-marked")}};return r(e,t("addClass"),t("removeClass"))}),$(".e2-removed-toggle").click(function(){var e=$(this),t=e.closest(".e2-comment");return t.find(".e2-comment-actions, .e2-comment-actions-removed").addClass("e2-comment-actions-disabled"),r(e,function(e){t.find(".e2-comment-actions").removeClass("e2-comment-actions-disabled").end().find(".e2-comment-actions-removed").hide().end().find(".e2-comment-content, .e2-comment-meta").slideDown(333).end().find(".e2-comment-author").removeClass("e2-comment-author-removed").end().find(".e2-removed-toggle").attr("href",e),t.is(".e2-reply")||t.siblings(".e2-reply").slideDown(333)},function(e){t.find(".e2-comment-actions-removed").removeClass("e2-comment-actions-disabled").end().find(".e2-comment-author").addClass("e2-comment-author-removed").end().find(".e2-comment-meta, .e2-comment-content").slideUp(333,function(){return t.find(".e2-comment-actions-removed").show()}).end().find(".e2-removed-toggle").attr("href",e),t.is(".e2-reply")||t.siblings(".e2-reply").slideUp(333)})}),$(".e2-external-drop-target").bind("dragover dragenter",o).bind("dragleave drop",i),$(".e2-user-picture-container").bind("drop",l),function(){if(u.isLocalStorageAvailable){var e=$("#e2-drafts-item"),t=e.find(".e2-unsaved-led"),n=$("#e2-new-note-item .e2-unsaved-led"),a=$("#e2-notes-unsaved"),r=$("#e2-nothing-message"),o=$("#form-note"),i=document.e2.localCopies.getList(),s=document.e2.localCopies.doesCopyExist("new"),l=o?$("#note-id").val():null,d="new"!==l&&document.e2.localCopies.doesCopyExist(l),c=Object.keys(i).length;if(s&&c--,d&&c--,t&&c>0&&(e.show(),t.show()),n&&s&&n.show(),a&&r){var f=document.e2.localCopies.getName("new");i.hasOwnProperty(f)&&delete i[f];for(var p in i)"false"===i[p].isPublished&&($("#e2-draft-"+p+" .e2-unsaved-led").show(),delete i[p]);if(Object.keys(i).length){for(var v in i){var m=document.e2.localCopies.get(v);if(m){var g=$("#e2-unsaved-note-prototype").clone(!0);g.attr("id",null),$(".e2-admin-link",g).attr("href",m.link),$("u",g).html(m.title),g.attr("style",""),a.append(g)}}a.show(),r.hide()}}}}()},function(e,t,n){"use strict";var a=n(0);document.e2=document.e2||{},a.isLocalStorageAvailable&&(document.e2.localCopies={_lsKey:"copies-info",_lsPrefix:"copy-",_cookieName:document.e2.cookiePrefix+"local_copies",getListName:function(){return this._lsKey},getPrefix:function(){return this._lsPrefix},getName:function(e){return this._lsPrefix+e},save:function(e,t){a.localStorage.setItem(this.getName(e),JSON.stringify(t)),this.addToList(e,t)},remove:function(e){a.localStorage.removeItem(this.getName(e)),this.removeFromList(e)},get:function(e,t,n){var r=!1;try{if(!(r=JSON.parse(a.localStorage.getItem(this.getName(e)))))return!1}catch(e){return!1}return n&&t&&this.isCopyOutdated(r,t,n)?(this.remove(e),!1):r},getList:function(){try{return JSON.parse(a.localStorage.getItem(this._lsKey))||{}}catch(e){return{}}},addToList:function(e,t){var n=this.getList();n.hasOwnProperty(e)||(n[e]={isPublished:t.isPublished,timestamp:t.timestamp},a.localStorage.setItem(this._lsKey,JSON.stringify(n)),this.updateCookie(n))},removeFromList:function(e){var t=this.getList();t.hasOwnProperty(e)&&(delete t[e],a.localStorage.setItem(this._lsKey,JSON.stringify(t)),this.updateCookie(t))},doesCopyExist:function(e){return a.localStorage.hasOwnProperty(this.getName(e))},isCopyOutdated:function(e,t,n){if(!t||!n)return!1;var a=+e.timestamp,r=(new Date).getTime(),o=n-r;return Math.abs(o)>216e6&&(t-=o),a<=t},checkOutdatedCopies:function(){var e=document.e2.noteLastModifiedsById||{},t=this.getList();for(var n in t)"new"!==n&&(e.hasOwnProperty(n)?this.isCopyOutdated(t[n],1e3*e[n],1e3*document.e2.serverTime)&&this.remove(n):this.remove(n))},generateCookie:function(){document.cookie.match(new RegExp("(?:^|; )"+this._cookieName.replace(/([.$?*|{}()[]\\\/\+^])/g,"\\$1")+"=([^;]*)"))||this.updateCookie()},updateCookie:function(e){e=e||this.getList();var t=[];for(var n in e)"new"!==n&&t.push(n);if(t.length)document.cookie=this._cookieName+"="+t.join(",")+";path=/";else{var a=new Date;a.setTime(a.getTime()-1),document.cookie=this._cookieName+'="";path=/;expires='+a.toUTCString()}}},document.e2.localCopies.checkOutdatedCopies(),document.e2.localCopies.generateCookie())},function(e,t,n){"use strict";var a=n(0);$(function(){function e(){k||(l.off("ajaxError",e),E=setInterval(i,3e3),window.addEventListener("beforeunload",i),window.addEventListener("pagehide",n),l.on("submit",t).on("ajaxError",e),v.on("input",r),k=!0)}function t(){clearInterval(E),n(),window.removeEventListener("pagehide",n),l.off("submit",t),v.off("input",r),k=!1}function n(){window.removeEventListener("beforeunload",i)}function r(){v[0].selectionEnd&&(S=v[0].selectionEnd)}function o(){var e=document.e2.localCopies.get(u.val(),b,w);if(e){e.caretPosition&&v.one("autosized",function(){var t=window.getCaretCoordinates(v[0],e.caretPosition);window.scrollTo(0,v.position().top+t.top-15)}),document.queryCommandSupported("insertText")?(p.focus().select(),document.execCommand("insertText",!1,e.title),p.trigger("input"),v.focus().select(),document.execCommand("insertText",!1,e.text),v.trigger("input")):(p.val(e.title).trigger("input"),v.val(e.text).trigger("input"));var t=e.tags?e.tags.slice():[];if(t.length&&m.find("option").each(function(e,n){var a=t.indexOf(n.text);a>-1&&t.splice(a,1)}),t.length){var n=void 0,a=function e(){if(!m.hasClass("chzn-done"))return void(n=setTimeout(e,500));clearTimeout(n);var a=$("#tags_chzn .search-field input");t.forEach(function(e){a.val(e+","),a.trigger({type:"keyup",which:191})})};n=setTimeout(a,500)}m.val(e.tags).trigger("input"),x.empty().html(e.images.reduce(function(e,t){return e+'<div class="e2-uploaded-image"><span class="e2-uploaded-image-preview">'+t+"</span></div>"},"")),(e.alias&&g.val()!==e.alias||h.val()!==e.stamp)&&(g.val(e.alias),h.val(e.stamp),$(".e2-note-time-and-url").slideToggle()),c.show(),f.show(),e.caretPosition&&(v.focus(),v[0].selectionStart=v[0].selectionEnd=S=e.caretPosition)}}function i(){var e=c.is(":visible");if(e||C){C=e;var t=s();if(!t.images.length&&!t.title.trim()&&!t.text.trim())return void document.e2.localCopies.remove(t.id);document.e2.localCopies.save(t.id,t)}}function s(){for(var e=x.find(".e2-uploaded-image-preview"),t=u.val(),n=p.val(),a=v.val(),r=[],o=0;o<e.length;o++)r.push(e[o].innerHTML);return{id:t,title:n,text:a,tags:m.val(),images:r,alias:"new"!==y&&g.val(),stamp:h.val(),timestamp:(new Date).getTime(),link:window.location.pathname,isPublished:d.val(),caretPosition:S}}var l=$("#form-note");if(a.isLocalStorageAvailable&&l){var u=$("#note-id"),d=$("#is-note-published"),c=$("#livesave-button"),f=$("#livesave-button + .e2-unsaved-led"),p=$("#title"),v=$("#text"),m=$("#tags"),g=$("#alias"),h=$("#stamp"),x=$("#e2-uploaded-images"),b=1e3*+$("#note-timestamp").val(),w=1e3*+$("#server-time").val(),y=u.val(),C=c.is(":visible"),S=null,k=!1,E=null;document.e2.localCopies.loadLocalCopy=o,document.e2.localCopies.initLocalSaver=e,document.e2.localCopies.destroyLocalSaver=t}})},function(e,t,n){"use strict";var a=n(0),r=$(".e2-note");r.length&&a.isLocalStorageAvailable&&function(e){for(var t=0;t<e.length;t++){var n=e[t].id.replace("e2-note-","");document.e2.localCopies.doesCopyExist(n)&&$("#e2-note-"+n+" .e2-unsaved-led").show()}}(r)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=a(r),i=n(0),s=n(3),l=n(2),u=a(l);$(function(){function e(e){e=e||{},$.ajax({data:$("form").serialize(),url:$("#e2-note-livesave-action").attr("href"),success:function(t){e.onAjaxSuccess&&e.onAjaxSuccess();var n;try{n=JSON.parse(t)}catch(t){return void(e.onError&&e.onError(t.message))}if("created"===n.status){var a=n.id;window.history.replaceState&&(window.history.replaceState(null,"",n["note-edit-url"]),$(".e2-admin-menu-new-selected").hide(),$(".e2-admin-menu-new").show()),$("#note-id").val(a),r(),e.onCreated&&e.onCreated(n),c=null}else"saved"===n.status?($("#alias").val(n["new-alias"]),window.history.replaceState&&window.history.replaceState(null,"",n["note-edit-url"]),r(),e.onSaved&&e.onSaved(n),c=null):"error"===n.status&&e.onError&&e.onError(n.message)},error:function(t){e.onAjaxError&&e.onAjaxError(t.responseText)},complete:function(t){e.onAjaxComplete&&e.onAjaxComplete()}})}function t(){$("#stamp").val()&&h.test($("#stamp").val()),/^ *$/.test($("#title").val())||/^ *$/.test($("#text").val())||g?$("#submit-button").attr("disabled","disabled"):$("#submit-button").removeAttr("disabled")}function n(e){$("#e2-console").html(e),(0,o.default)($("#livesaving"),0),$("#livesaving").hide(),$("#livesave-button, #livesave-button + .e2-unsaved-led").show(),$("#livesave-error").show(),$("#livesave-error").attr("title",e)}function a(){if(!g){var a=l();if(""!==a.text){if(g=!0,t(),""===a.title){var r,i=a.text;(r=i.indexOf("."))>=0&&(i=i.substr(0,r)),(r=i.indexOf(";"))>=0&&(i=i.substr(0,r)),(r=i.indexOf(","))>=0&&(i=i.substr(0,r)),(r=i.indexOf(")"))>=0&&(i=i.substr(0,r)),0===i.indexOf("((")&&(i=i.substr(2)),i=i.substr(0,1).toUpperCase()+i.substr(1),$("#title").val(i).change()}$("#livesave-button, #livesave-button + .e2-unsaved-led, #livesave-error").hide(),$("#livesaving").fadeIn(333),(0,o.default)($("#livesaving"),1),e({onCreated:function(){f=a,$("#e2-drafts")&&$("#e2-drafts-item")&&($("#e2-drafts-item").fadeIn(333),$('<div class="e2-admin-menu-item-frame"></div>').css({position:"absolute",left:$("#e2-note-form-wrapper").offset().left,top:$("#e2-note-form-wrapper").offset().top,width:$("#e2-note-form-wrapper").width(),height:$("#e2-note-form-wrapper").height()}).appendTo("body").animate({left:$("#e2-drafts").offset().left-10,top:$("#e2-drafts").offset().top-5,width:$("#e2-drafts").width()+20,height:$("#e2-drafts").height()+10},667).fadeTo(333,.667).fadeOut(333),$("#e2-drafts-count").html(1*$("#e2-drafts-count").html()+1))},onSaved:function(){f=a},onError:n,onAjaxSuccess:function(){(0,o.default)($("#livesaving"),0),$("#livesaving").fadeOut(333)},onAjaxError:n,onAjaxComplete:function(){g=!1,t()}})}}}function r(){i.isLocalStorageAvailable&&(c?document.e2.localCopies.remove(c):document.e2.localCopies.remove($("#note-id").val()),document.e2.localCopies.destroyLocalSaver())}function l(){return{title:$("#title").val(),tags:($("#tags").val()||[]).join(),text:$("#text").val(),alias:$("#alias").val(),stamp:$("#stamp").val()}}function d(e,t){return JSON.stringify(e)===JSON.stringify(t)}if($("#form-note").length){var c=$("#note-id").val(),f=l(),p=f?Object.assign({},f):l(),v=!1,m=!1,g=!1,h=/^ *(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/;$(window).bind("pageshow",function(e){e.originalEvent.persisted&&window.location.reload()}),document.e2.localCopies.initLocalSaver&&document.e2.localCopies.loadLocalCopy&&(document.e2.localCopies.loadLocalCopy(),document.e2.localCopies.initLocalSaver()),$.ajaxSetup({type:"post",timeout:1e4}),$("#form-note").on("submit",function(n){function a(e){f=i,(0,o.default)($("#note-saving"),0),$("#note-saving").hide(),$("#note-saved").fadeIn(333),window.location.href=e["note-url"]}function r(e){$("#form-note").trigger("ajaxError"),(0,o.default)($("#note-saving"),0),$("#note-saving").hide(),$("#submit-keyboard-shortcut").show(),$("#note-save-error").show(),$("#note-save-error").attr("title",e)}n.preventDefault();var i=l();g=!0,t(),$("#submit-keyboard-shortcut, #note-save-error").hide(),(0,o.default)($("#note-saving"),1),$("#note-saving").show(),e({onCreated:a,onSaved:a,onError:r,onAjaxError:r,onAjaxComplete:function(){g=!1,t()}})}),$("#title").bind("input",function(){$("#alias").attr("placeholder","")});var x="change input keyup keydown keypress mouseup mousedown cut copy paste blur",b=function(){$("#stamp").val()&&$("#stamp").toggleClass("input-error",null===$("#stamp").val().match(h)),t();var e=l();v=!d(p,e),m=!f||!d(f,e);var n=$("#livesave-button, #livesave-button + .e2-unsaved-led");v&&m&&""!==e.text?(v=!1,$("#livesaving").hide(),document.e2.localCopies.initLocalSaver(),n.fadeIn(333),p=Object.assign({},e)):m||(m=!1,r(),n.fadeOut(333),p=Object.assign({},e));var a=e.title.trim(),o=e.text.trim();$("#e2-uploaded-images .e2-uploaded-image-preview").length||a||o||!n.is(":visible")||n.fadeOut(333)};$("#title").add("#tags").add("#text").add("#alias").add("#stamp").bind(x,b),$("#tags").on("liszt:ready",function(){$("#tags_chzn .search-field").bind(x,b)}),$("#title").bind("keydown",function(e){13===e.keyCode&&$("#text").focus()}),$("#livesave-button").click(function(){return a(),!1}),u.default.mac?(0,s.bindKeys)("Cmd+S",a,{prevent:!0}):(0,s.bindKeys)("Ctrl+S",a,{prevent:!0}),$("#text").is(":focus")||$("#title").attr("autofocus",!0).focus().val($("#title").val()),t()}})},function(e,t,n){"use strict";var a=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(a);$(function(){function e(e,t,n,a,r){if(window.FormData){var o=new window.FormData;o.append("file",e),$.ajax({type:"POST",timeout:0,url:t,data:o,cache:!1,contentType:!1,processData:!1,xhr:function(){var e=$.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",n,!1),e},success:a,error:r})}}function t(e){var t="";if("calliope"===$("#formatter-id").val()&&(t="(("+e+"))"),"neasden"===$("#formatter-id").val()&&(t=e+""),t){var n=document.getElementById("text");if(n.focus(),n.selectionStart||"0"===n.selectionStart){var a=n.selectionStart,r=n.selectionEnd,o=t;if(a===r){for(;"\r"!==n.value.charAt(a)&&"\n"!==n.value.charAt(a)&&a>0;)a-=1;for(;"\r"===n.value.charAt(a)||"\n"===n.value.charAt(a);)a+=1;o+="\n\n",r=a}n.value=n.value.substring(0,a)+o+n.value.substring(r,n.value.length),n.selectionStart=n.selectionEnd=a+o.length-2}else n.value+="\r\n\r\n"+t;if("createEvent"in document){var i=document.createEvent("HTMLEvents");i.initEvent("change",!1,!0),n.dispatchEvent(i)}else n.fireEvent("onchange");n.focus()}}function n(e,t,n,a){var r=$("#e2-uploaded-image-prototype").clone(!0);return r.attr("style",""),r.css("width",""),r.find(".e2-uploaded-image-preview img").attr("src",e+"?"+(new Date).getTime()).attr("alt",t).attr("width",n).attr("height",a),r.find(".e2-uploaded-image-remover").data("file",t),c.push(t),r}function a(e,t){var n=$("#e2-file-remove-action").attr("href")+"?";$("#form-note")?n+="entity=note&entity-id="+$("#note-id").val():$("#form-tag")?n+="entity=tag&entity-id="+$("#tag-id").val():n=null,$.ajax({type:"POST",data:e,timeout:6e4,url:n,contentType:"application/x-www-form-urlencoded",success:function(n){"error|"===n.substr(0,6)?t.fadeTo(333,1):(c.splice($.inArray(e.file,c),1),t.hide(333,function(){$(this).remove()}))},error:function(e){t.fadeTo(333,1)}})}function o(e){var t="",n=e.lastIndexOf(".");return-1!==n&&(t=e.substr(n+1)),$(".e2-upload-error").slideUp(333),/^gif|jpe?g|png|svg|mp3$/i.test(t)?((0,r.default)($("#e2-uploading"),1),$("#e2-uploading").show().css("opacity",1),$("#e2-upload-button").hide(),!0):($("#e2-upload-error-unsupported-file").slideDown(333),!1)}function i(e,a,o){if(a=JSON.parse(a),a.success)if(f+=e.size,a.overwrite){(0,r.default)($("#e2-uploading"),0),$("#e2-uploading").hide(),$("#e2-upload-button").show();var i=$('#e2-uploaded-images img[src="'+a.thumb+'"], #e2-uploaded-images img[src^="'+a.thumb+'?"]')[0];i&&(i.src=a.thumb+"?"+(new Date).getTime())}else{o&&t(a["new-name"]);var s=-1!==$.inArray(a["new-name"],c);s?((0,r.default)($("#e2-uploading"),0),$("#e2-uploading").hide(),$("#e2-upload-button").show()):n(a.thumb,a["new-name"],a.width,a.height).appendTo($("#e2-uploaded-images")).show(333,function(){(0,r.default)($("#e2-uploading"),0),$("#e2-uploading").hide(),$("#e2-upload-button").show()})}else(0,r.default)($("#e2-uploading"),0),$("#e2-uploading").hide(),$("#e2-upload-button").show(),"could-not-create-thumbnail"===a.error?$("#e2-upload-error-cannot-create-thumbnail").slideDown(333):$("#e2-upload-error-cannot-upload").slideDown(333);l()}function s(e,t){t=Math.min(t,1);var n=.1+.8*t,a=Math.floor(245-245*n);e.style.strokeDashoffset=a}function l(){if(d.length){var t=d.shift(),n=t.name,a=$("#e2-file-upload-action").attr("href")+"?";return void 0!==$("#note-id").val()?a+="entity=note&entity-id="+$("#note-id").val():void 0!==$("#tag-id").val()?a+="entity=tag&entity-id="+$("#tag-id").val():a=null,a&&t.e2AltKeyPressed&&(a+="&overwrite"),o(n)&&e(t,a,function(e){s($("#e2-uploading #e2-progress")[0],(f+e.loaded)/p)},function(e,n,a){s($("#e2-uploading #e2-progress")[0],0),i(t,e,t.e2DroppedIntoTextarea)},function(e,n,a){s($("#e2-uploading #e2-progress")[0],0),i(null,'{"success": false}',t.e2DroppedIntoTextarea)}),!1}return p=0,f=0,!0}function u(e){var t=e.originalEvent.dataTransfer;if(t&&t.files){for(var n=0;n<t.files.length;n++)t.files[n].e2AltKeyPressed=e.altKey,t.files[n].e2DroppedIntoTextarea=e.target===document.getElementById("text"),d.push(t.files[n]),f=0,p+=t.files[n].size;return l(),!1}}if($("#form-tag").length||$("#form-note").length){var d=[],c=[],f=0,p=0;$("#e2-uploaded-image-prototype").click(function(){t($(this).find(".e2-uploaded-image-preview img").attr("alt"))}),$(".e2-uploaded-image-remover").click(function(){var e=$(this).parent().parent();return e.fadeTo(333,.5),a({file:$(this).data("file")},e),!1}),$("#e2-uploaded-images").children().each(function(){var e=$(this).find(".e2-uploaded-image-preview img"),t=e.attr("src"),a=e.attr("alt"),r=e.attr("width"),o=e.attr("height");$(this).remove(),n(t,a,r,o).appendTo($("#e2-uploaded-images")).show()}),new AjaxUpload("e2-upload-button",{action:$("#e2-file-upload-action").attr("href"),autoSubmit:!0,onSubmit:o,onComplete:i}),$("#e2-upload-controls").show(),$(".e2-external-drop-target-body").bind("drop",u),$(".e2-external-drop-target-textarea").bind("drop",u)}})},function(e,t,n){"use strict";$(function(){$("#form-note-publish").length&&($(".e2-schedule-contols-revealer").click(function(){$(".e2-publish-now-contols").hide(),$(".e2-schedule-contols").show(),$(".e2-post-time-control").slideDown(333),setTimeout(function(){$(".e2-schedule-contols button").removeAttr("disabled")},333);var e=new Date,t=e.getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getFullYear(),r=e.getHours(),o=e.getMinutes();return r+=1,59===o&&(r+=1),r<10&&(r="0"+r),$("#stamp").val(t+"."+n+"."+a+" "+r+":00:00"),$("#stamp").trigger("change"),!1}),$(".e2-schedule-contols-unrevealer").click(function(){return $(".e2-schedule-contols").hide(),$(".e2-schedule-contols button").attr("disabled","disabled"),$(".e2-post-time-control").slideUp(333),$(".e2-publish-now-contols").show(),!1}))})},function(e,t,n){"use strict";var a=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(a);$("#form-preferences").length&&function(){(0,r.default)(document.getElementById("blog-description")),$("#e2-template-selector").show(),$("#blog-title").bind("input blur cut copy paste keypress",function(){var e=$("#e2-blog-title");e&&e.text(this.value?this.value:$("#e2-blog-title-default").val())}),$("#blog-author").bind("input blur cut copy paste keypress",function(){var e=$("#e2-blog-author");e&&e.text(this.value?this.value:$("#e2-blog-author-default").val())}),$("#notes-per-page").bind("change blur",function(){parseInt(this.value)!==parseInt(this.value)&&(this.value=10),this.value=Math.min(Math.max(this.value,3),100)}),$("#email-notify").bind("change",function(){$("#email").focus()}),$("#email").bind("input change blur",function(){this.value||$("#email-notify").removeAttr("checked")}),$(".e2-template-preview").click(function(){var e=$(this);$(".e2-template-preview").attr("class","e2-template-preview"),e.addClass("e2-current-template-preview"),$("#template").val(e.attr("value")),$(".e2-template-preview-link").attr("href",e.data("preview-url"))})}()},function(e,t,n){"use strict";function a(){/^ *$/.test($("#tag").val())||/^ *$/.test($("#urlname").val())?$("#submit-button").attr("disabled","disabled"):$("#submit-button").removeAttr("disabled")}$("#form-tag").length&&($.ajaxSetup({type:"post",timeout:1e4}),$(".required").bind("input blur cut copy paste keypress",a),a())}])});