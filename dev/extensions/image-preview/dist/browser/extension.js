(()=>{"use strict";var e={189:function(e,t,i){var s=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var s,r=0,o=t.length;r<o;r++)!s&&r in t||(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.BundleFormat=t.MessageFormat=void 0;var r,o=i(926),n=i(800),a=i(800);Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return a.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return a.BundleFormat}});try{r=i(870)}catch(e){console.error("Loading vscode-nls-web-data failed. Are you running this outside of VS Code? If so, you may need to intercept the import call with your bundled NLS data."),r={}}function c(e){return e?((e.endsWith(".js")||e.endsWith(".ts"))&&(e=e.substring(0,e.length-3)),e.startsWith("/")&&(e=e.substring(1)),r&&r[e]?(t=r[e],function(e,i){for(var s=[],r=2;r<arguments.length;r++)s[r-2]=arguments[r];return(0,n.isNumber)(e)?e>=t.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error("").stack)):(0,n.format)(t[e],s):(0,n.isString)(i)?(console.warn("Message ".concat(i," didn't get externalized correctly.")),(0,n.format)(i,s)):void console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error("").stack))}):function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if("number"==typeof e)throw new Error("Externalized strings were not present in the environment.");return n.localize.apply(void 0,s([e,t],i,!1))}):n.localize;var t}function u(e){return(0,n.setPseudo)("pseudo"===(void 0,void 0)),c}t.loadMessageBundle=c,t.config=u,o.default.install(Object.freeze({loadMessageBundle:c,config:u}))},800:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isString=t.isNumber=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var s,r,o,n=i(926);function a(e){return void 0!==e}(o=t.MessageFormat||(t.MessageFormat={})).file="file",o.bundle="bundle",o.both="both",(r=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",r.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&a(t.key)&&a(t.comment)}}(s||(s={})),t.isDefined=a;var c=Object.prototype.toString;function u(e,i){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===i.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var s=t[0],r=i[s],o=e;return"string"==typeof r?o=r:"number"!=typeof r&&"boolean"!=typeof r&&null!=r||(o=String(r)),o}))}t.isNumber=function(e){return"[object Number]"===c.call(e)},t.isString=function(e){return"[object String]"===c.call(e)},t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=u,t.localize=function(e,t){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];return u(t,i)},t.loadMessageBundle=function(e){return(0,n.default)().loadMessageBundle(e)},t.config=function(e){return(0,n.default)().config(e)}},926:(e,t)=>{var i;function s(){if(void 0===i)throw new Error("No runtime abstraction layer installed");return i}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");i=e}}(s||(s={})),t.default=s},87:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BinarySizeStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),n=r.loadMessageBundle();class a{static formatSize(e){return e<a.KB?n("sizeB","{0}B",e):e<a.MB?n("sizeKB","{0}KB",(e/a.KB).toFixed(2)):e<a.GB?n("sizeMB","{0}MB",(e/a.MB).toFixed(2)):e<a.TB?n("sizeGB","{0}GB",(e/a.GB).toFixed(2)):n("sizeTB","{0}TB",(e/a.TB).toFixed(2))}}a.KB=1024,a.MB=a.KB*a.KB,a.GB=a.MB*a.KB,a.TB=a.GB*a.KB;class c extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.binarySize",n("sizeStatusBar.name","Image Binary Size"),s.StatusBarAlignment.Right,100)}show(e,t){"number"==typeof t?super.showItem(e,a.formatSize(t)):this.hide(e)}}t.BinarySizeStatusBarEntry=c},102:(e,t)=>{function i(e){for(;e.length;){const t=e.pop();t&&t.dispose()}}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=i,t.Disposable=class{constructor(){this._isDisposed=!1,this._disposables=[]}dispose(){this._isDisposed||(this._isDisposed=!0,i(this._disposables))}_register(e){return this._isDisposed?e.dispose():this._disposables.push(e),e}get isDisposed(){return this._isDisposed}}},577:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewStatusBarEntry=void 0;const s=i(549),r=i(102);class o extends r.Disposable{constructor(e,t,i,r){super(),this.entry=this._register(s.window.createStatusBarItem(e,i,r)),this.entry.name=t}showItem(e,t){this._showOwner=e,this.entry.text=t,this.entry.show()}hide(e){e===this._showOwner&&(this.entry.hide(),this._showOwner=void 0)}}t.PreviewStatusBarEntry=o},664:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewManager=void 0;const s=i(549),r=i(189),o=i(102),n=r.loadMessageBundle();class a{constructor(e,t,i,s){this.extensionRoot=e,this.sizeStatusBarEntry=t,this.binarySizeStatusBarEntry=i,this.zoomStatusBarEntry=s,this._previews=new Set}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){const i=new c(this.extensionRoot,e.uri,t,this.sizeStatusBarEntry,this.binarySizeStatusBarEntry,this.zoomStatusBarEntry);this._previews.add(i),this.setActivePreview(i),t.onDidDispose((()=>{this._previews.delete(i)})),t.onDidChangeViewState((()=>{t.active?this.setActivePreview(i):this._activePreview!==i||t.active||this.setActivePreview(void 0)}))}get activePreview(){return this._activePreview}setActivePreview(e){this._activePreview=e,this.setPreviewActiveContext(!!e)}setPreviewActiveContext(e){s.commands.executeCommand("setContext","imagePreviewFocus",e)}}t.PreviewManager=a,a.viewType="imagePreview.previewEditor";class c extends o.Disposable{constructor(e,t,i,r,o,n){super(),this.extensionRoot=e,this.resource=t,this.webviewEditor=i,this.sizeStatusBarEntry=r,this.binarySizeStatusBarEntry=o,this.zoomStatusBarEntry=n,this.id=`${Date.now()}-${Math.random().toString()}`,this._previewState=1,this.emptyPngDataUri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==";const a=t.with({path:t.path.replace(/\/[^\/]+?\.\w+$/,"/")});i.webview.options={enableScripts:!0,enableForms:!1,localResourceRoots:[a,e]},this._register(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"size":this._imageSize=e.value,this.update();break;case"zoom":this._imageZoom=e.value,this.update();break;case"reopen-as-text":s.commands.executeCommand("vscode.openWith",t,"default",i.viewColumn)}}))),this._register(n.onDidChangeScale((e=>{2===this._previewState&&this.webviewEditor.webview.postMessage({type:"setScale",scale:e.scale})}))),this._register(i.onDidChangeViewState((()=>{this.update(),this.webviewEditor.webview.postMessage({type:"setActive",value:this.webviewEditor.active})}))),this._register(i.onDidDispose((()=>{2===this._previewState&&(this.sizeStatusBarEntry.hide(this.id),this.binarySizeStatusBarEntry.hide(this.id),this.zoomStatusBarEntry.hide(this.id)),this._previewState=0})));const c=this._register(s.workspace.createFileSystemWatcher(new s.RelativePattern(t,"*")));this._register(c.onDidChange((e=>{e.toString()===this.resource.toString()&&this.render()}))),this._register(c.onDidDelete((e=>{e.toString()===this.resource.toString()&&this.webviewEditor.dispose()}))),s.workspace.fs.stat(t).then((({size:e})=>{this._imageBinarySize=e,this.update()})),this.render(),this.update(),this.webviewEditor.webview.postMessage({type:"setActive",value:this.webviewEditor.active})}zoomIn(){2===this._previewState&&this.webviewEditor.webview.postMessage({type:"zoomIn"})}zoomOut(){2===this._previewState&&this.webviewEditor.webview.postMessage({type:"zoomOut"})}async render(){0!==this._previewState&&(this.webviewEditor.webview.html=await this.getWebviewContents())}update(){0!==this._previewState&&(this.webviewEditor.active?(this._previewState=2,this.sizeStatusBarEntry.show(this.id,this._imageSize||""),this.binarySizeStatusBarEntry.show(this.id,this._imageBinarySize),this.zoomStatusBarEntry.show(this.id,this._imageZoom||"fit")):(2===this._previewState&&(this.sizeStatusBarEntry.hide(this.id),this.binarySizeStatusBarEntry.hide(this.id),this.zoomStatusBarEntry.hide(this.id)),this._previewState=1))}async getWebviewContents(){const e=Date.now().toString(),t={src:await this.getResourcePath(this.webviewEditor,this.resource,e)},i=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}(),s=this.webviewEditor.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${u(this.extensionResource("/media/main.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="image-preview-settings" data-settings="${u(JSON.stringify(t))}">\n</head>\n<body class="container image scale-to-fit loading">\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${n("preview.imageLoadError","An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${n("preview.imageLoadErrorLink","Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${u(this.extensionResource("/media/main.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async getResourcePath(e,t,i){return"git"===t.scheme&&0===(await s.workspace.fs.stat(t)).size?this.emptyPngDataUri:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}extensionResource(e){return this.webviewEditor.webview.asWebviewUri(this.extensionRoot.with({path:this.extensionRoot.path+e}))}}function u(e){return e.toString().replace(/"/g,"&quot;")}},367:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SizeStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),n=r.loadMessageBundle();class a extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.size",n("sizeStatusBar.name","Image Size"),s.StatusBarAlignment.Right,101)}show(e,t){this.showItem(e,t)}}t.SizeStatusBarEntry=a},316:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomStatusBarEntry=void 0;const s=i(549),r=i(189),o=i(577),n=r.loadMessageBundle(),a="_imagePreview.selectZoomLevel";class c extends o.PreviewStatusBarEntry{constructor(){super("status.imagePreview.zoom",n("zoomStatusBar.name","Image Zoom"),s.StatusBarAlignment.Right,102),this._onDidChangeScale=this._register(new s.EventEmitter),this.onDidChangeScale=this._onDidChangeScale.event,this._register(s.commands.registerCommand(a,(async()=>{const e=[10,5,2,1,.5,.2,"fit"].map((e=>({label:this.zoomLabel(e),scale:e}))),t=await s.window.showQuickPick(e,{placeHolder:n("zoomStatusBar.placeholder","Select zoom level")});t&&this._onDidChangeScale.fire({scale:t.scale})}))),this.entry.command=a}show(e,t){this.showItem(e,this.zoomLabel(t))}zoomLabel(e){return"fit"===e?n("zoomStatusBar.wholeImageLabel","Whole Image"):`${Math.round(100*e)}%`}}t.ZoomStatusBarEntry=c},549:e=>{e.exports=require("vscode")},870:e=>{e.exports=require("vscode-nls-web-data")}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,i),o.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(549),r=i(87),o=i(664),n=i(367),a=i(316);e.activate=function(e){const i=new n.SizeStatusBarEntry;e.subscriptions.push(i);const s=new r.BinarySizeStatusBarEntry;e.subscriptions.push(s);const c=new a.ZoomStatusBarEntry;e.subscriptions.push(c);const u=new o.PreviewManager(e.extensionUri,i,s,c);e.subscriptions.push(t.window.registerCustomEditorProvider(o.PreviewManager.viewType,u,{supportsMultipleEditorsPerDocument:!0})),e.subscriptions.push(t.commands.registerCommand("imagePreview.zoomIn",(()=>{u.activePreview?.zoomIn()}))),e.subscriptions.push(t.commands.registerCommand("imagePreview.zoomOut",(()=>{u.activePreview?.zoomOut()})))}})();var r=exports;for(var o in s)r[o]=s[o];s.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e7f30e38c5a4efafeec8ad52861eb772a9ee4dfb/extensions/image-preview/dist/browser/extension.js.map