(()=>{"use strict";var e={189:function(e,t,i){var s=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var s,n=0,o=t.length;n<o;n++)!s&&n in t||(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.BundleFormat=t.MessageFormat=void 0;var n=i(926),o=i(800),r=i(800);function a(e){return function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];if("number"==typeof e)throw new Error("Browser implementation does currently not support externalized strings.");return o.localize.apply(void 0,s([e,t],i,!1))}}function l(e){var t;return(0,o.setPseudo)("pseudo"===(null===(t=null==e?void 0:e.locale)||void 0===t?void 0:t.toLowerCase())),a}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return r.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return r.BundleFormat}}),t.loadMessageBundle=a,t.config=l,n.default.install(Object.freeze({loadMessageBundle:a,config:l}))},800:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var s,n,o,r=i(926);function a(e){return void 0!==e}function l(e,i){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===i.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var s=t[0],n=i[s],o=e;return"string"==typeof n?o=n:"number"!=typeof n&&"boolean"!=typeof n&&null!=n||(o=String(n)),o}))}(o=t.MessageFormat||(t.MessageFormat={})).file="file",o.bundle="bundle",o.both="both",(n=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",n.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&a(t.key)&&a(t.comment)}}(s||(s={})),t.isDefined=a,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=l,t.localize=function(e,t){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];return l(t,i)},t.loadMessageBundle=function(e){return(0,r.default)().loadMessageBundle(e)},t.config=function(e){return(0,r.default)().config(e)}},926:(e,t)=>{var i;function s(){if(void 0===i)throw new Error("No runtime abstraction layer installed");return i}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");i=e}}(s||(s={})),t.default=s},102:(e,t)=>{function i(e){for(;e.length;)e.pop()?.dispose()}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=i,t.Disposable=class{constructor(){this._isDisposed=!1,this._disposables=[]}dispose(){this._isDisposed||(this._isDisposed=!0,i(this._disposables))}_register(e){return this._isDisposed?e.dispose():this._disposables.push(e),e}get isDisposed(){return this._isDisposed}}},899:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleBrowserManager=void 0;const s=i(618);t.SimpleBrowserManager=class{constructor(e){this.extensionUri=e}dispose(){this._activeView?.dispose(),this._activeView=void 0}show(e,t){const i="string"==typeof e?e:e.toString(!0);if(this._activeView)this._activeView.show(i,t);else{const e=s.SimpleBrowserView.create(this.extensionUri,i,t);this.registerWebviewListeners(e),this._activeView=e}}restore(e,t){const i=t?.url??"",n=s.SimpleBrowserView.restore(this.extensionUri,i,e);this.registerWebviewListeners(n),this._activeView??(this._activeView=n)}registerWebviewListeners(e){e.onDispose((()=>{this._activeView===e&&(this._activeView=void 0)}))}}},618:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleBrowserView=void 0;const s=i(549),n=i(189),o=i(102),r=n.loadMessageBundle();class a extends o.Disposable{static create(e,t,i){const n=s.window.createWebviewPanel(a.viewType,a.title,{viewColumn:i?.viewColumn??s.ViewColumn.Active,preserveFocus:i?.preserveFocus},{enableScripts:!0,enableForms:!0,retainContextWhenHidden:!0,localResourceRoots:[s.Uri.joinPath(e,"media")]});return new a(e,t,n)}static restore(e,t,i){return new a(e,t,i)}constructor(e,t,i){super(),this.extensionUri=e,this._onDidDispose=this._register(new s.EventEmitter),this.onDispose=this._onDidDispose.event,this._webviewPanel=this._register(i),this._register(this._webviewPanel.webview.onDidReceiveMessage((e=>{switch(e.type){case"openExternal":try{const t=s.Uri.parse(e.url);s.env.openExternal(t)}catch{}}}))),this._register(this._webviewPanel.onDidDispose((()=>{this.dispose()}))),this._register(s.workspace.onDidChangeConfiguration((e=>{if(e.affectsConfiguration("simpleBrowser.focusLockIndicator.enabled")){const e=s.workspace.getConfiguration("simpleBrowser");this._webviewPanel.webview.postMessage({type:"didChangeFocusLockIndicatorEnabled",focusLockEnabled:e.get("focusLockIndicator.enabled",!0)})}}))),this.show(t)}dispose(){this._onDidDispose.fire(),super.dispose()}show(e,t){this._webviewPanel.webview.html=this.getHtml(e),this._webviewPanel.reveal(t?.viewColumn,t?.preserveFocus)}getHtml(e){const t=s.workspace.getConfiguration("simpleBrowser"),i=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),n=this.extensionResourceUrl("media","index.js"),o=this.extensionResourceUrl("media","main.css"),a=this.extensionResourceUrl("media","codicon.css");return`<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta http-equiv="Content-type" content="text/html;charset=UTF-8">\n\n\t\t\t\t<meta http-equiv="Content-Security-Policy" content="\n\t\t\t\t\tdefault-src 'none';\n\t\t\t\t\tfont-src ${this._webviewPanel.webview.cspSource};\n\t\t\t\t\tstyle-src ${this._webviewPanel.webview.cspSource};\n\t\t\t\t\tscript-src 'nonce-${i}';\n\t\t\t\t\tframe-src *;\n\t\t\t\t\t">\n\n\t\t\t\t<meta id="simple-browser-settings" data-settings="${l=JSON.stringify({url:e,focusLockEnabled:t.get("focusLockIndicator.enabled",!0)}),l.toString().replace(/"/g,"&quot;")}">\n\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${o}">\n\t\t\t\t<link rel="stylesheet" type="text/css" href="${a}">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<header class="header">\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${r("control.back.title","Back")}"\n\t\t\t\t\t\t\tclass="back-button icon"><i class="codicon codicon-arrow-left"></i></button>\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${r("control.forward.title","Forward")}"\n\t\t\t\t\t\t\tclass="forward-button icon"><i class="codicon codicon-arrow-right"></i></button>\n\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${r("control.reload.title","Reload")}"\n\t\t\t\t\t\t\tclass="reload-button icon"><i class="codicon codicon-refresh"></i></button>\n\t\t\t\t\t</nav>\n\n\t\t\t\t\t<input class="url-input" type="text">\n\n\t\t\t\t\t<nav class="controls">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle="${r("control.openExternal.title","Open in browser")}"\n\t\t\t\t\t\t\tclass="open-external-button icon"><i class="codicon codicon-link-external"></i></button>\n\t\t\t\t\t</nav>\n\t\t\t\t</header>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="iframe-focused-alert">${r("view.iframe-focused","Focus Lock")}</div>\n\t\t\t\t\t<iframe sandbox="allow-scripts allow-forms allow-same-origin"></iframe>\n\t\t\t\t</div>\n\n\t\t\t\t<script src="${n}" nonce="${i}"><\/script>\n\t\t\t</body>\n\t\t\t</html>`;var l}extensionResourceUrl(...e){return this._webviewPanel.webview.asWebviewUri(s.Uri.joinPath(this.extensionUri,...e))}}t.SimpleBrowserView=a,a.viewType="simpleBrowser.view",a.title=r("view.title","Simple Browser")},549:e=>{e.exports=require("vscode")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,i),o.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(549),n=i(189),o=i(899),r=i(618),a=n.loadMessageBundle(),l=new Set(["localhost","127.0.0.1","[0:0:0:0:0:0:0:1]","[::1]","0.0.0.0","[0:0:0:0:0:0:0:0]","[::]"]);e.activate=function(e){const i=new o.SimpleBrowserManager(e.extensionUri);e.subscriptions.push(i),e.subscriptions.push(t.window.registerWebviewPanelSerializer(r.SimpleBrowserView.viewType,{deserializeWebviewPanel:async(e,t)=>{i.restore(e,t)}})),e.subscriptions.push(t.commands.registerCommand("simpleBrowser.show",(async e=>{e||(e=await t.window.showInputBox({placeHolder:a("simpleBrowser.show.placeholder","https://example.com"),prompt:a("simpleBrowser.show.prompt","Enter url to visit")})),e&&i.show(e)}))),e.subscriptions.push(t.commands.registerCommand("simpleBrowser.api.open",((e,t)=>{i.show(e,t)}))),e.subscriptions.push(t.window.registerExternalUriOpener("simpleBrowser.open",{canOpenExternalUri(e){const i=new URL(e.toString(!0));return l.has(i.hostname)?"undefined"!=typeof navigator&&t.env.uiKind===t.UIKind.Web?t.ExternalUriOpenerPriority.Default:t.ExternalUriOpenerPriority.Option:t.ExternalUriOpenerPriority.None},openExternalUri:e=>i.show(e,{viewColumn:t.window.activeTextEditor?t.ViewColumn.Beside:t.ViewColumn.Active})},{schemes:["http","https"],label:a("openTitle","Open in simple browser")}))}})();var n=exports;for(var o in s)n[o]=s[o];s.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6261075646f055b99068d3688932416f2346dd3b/extensions/simple-browser/dist/browser/extension.js.map