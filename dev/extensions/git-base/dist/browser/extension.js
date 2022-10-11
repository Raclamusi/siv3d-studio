(()=>{"use strict";var e={189:function(e,t,o){var r=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var r,i=0,n=t.length;i<n;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.BundleFormat=t.MessageFormat=void 0;var i=o(926),n=o(800),s=o(800);function u(e){return function(e,t){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];if("number"==typeof e)throw new Error("Browser implementation does currently not support externalized strings.");return n.localize.apply(void 0,r([e,t],o,!1))}}function a(e){var t;return(0,n.setPseudo)("pseudo"===(null===(t=null==e?void 0:e.locale)||void 0===t?void 0:t.toLowerCase())),u}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return s.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return s.BundleFormat}}),t.loadMessageBundle=u,t.config=a,i.default.install(Object.freeze({loadMessageBundle:u,config:a}))},800:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var r,i,n,s=o(926);function u(e){return void 0!==e}function a(e,o){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===o.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var r=t[0],i=o[r],n=e;return"string"==typeof i?n=i:"number"!=typeof i&&"boolean"!=typeof i&&null!=i||(n=String(i)),n}))}(n=t.MessageFormat||(t.MessageFormat={})).file="file",n.bundle="bundle",n.both="both",(i=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",i.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&u(t.key)&&u(t.comment)}}(r||(r={})),t.isDefined=u,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=a,t.localize=function(e,t){for(var o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return a(t,o)},t.loadMessageBundle=function(e){return(0,s.default)().loadMessageBundle(e)},t.config=function(e){return(0,s.default)().config(e)}},926:(e,t)=>{var o;function r(){if(void 0===o)throw new Error("No runtime abstraction layer installed");return o}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");o=e}}(r||(r={})),t.default=r},752:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerAPICommands=t.ApiImpl=void 0;const r=o(549),i=o(507);t.ApiImpl=class{constructor(e){this._model=e}pickRemoteSource(e){return(0,i.pickRemoteSource)(this._model,e)}registerRemoteSourceProvider(e){return this._model.registerRemoteSourceProvider(e)}},t.registerAPICommands=function(e){const t=[];return t.push(r.commands.registerCommand("git-base.api.getRemoteSources",(t=>{if(e.model)return(0,i.pickRemoteSource)(e.model,t)}))),r.Disposable.from(...t)}},627:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GitBaseExtensionImpl=void 0;const r=o(549),i=o(752);t.GitBaseExtensionImpl=class{set model(e){this._model=e;const t=!!e;this.enabled!==t&&(this.enabled=t,this._onDidChangeEnablement.fire(this.enabled))}get model(){return this._model}constructor(e){this.enabled=!1,this._onDidChangeEnablement=new r.EventEmitter,this.onDidChangeEnablement=this._onDidChangeEnablement.event,this._model=void 0,e&&(this.enabled=!0,this._model=e)}getAPI(e){if(!this._model)throw new Error("Git model not found");if(1!==e)throw new Error(`No API version ${e} found.`);return new i.ApiImpl(this._model)}}},381:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.debounce=void 0;const r=o(779);function i(e){return(t,o,r)=>{let i=null,n=null;if("function"==typeof r.value?(i="value",n=r.value):"function"==typeof r.get&&(i="get",n=r.get),!n||!i)throw new Error("not supported");r[i]=e(n,o)}}t.debounce=function(e){return i(((t,o)=>{const r=`$debounce$${o}`;return function(...o){clearTimeout(this[r]),this[r]=setTimeout((()=>t.apply(this,o)),e)}}))},t.throttle=i((function(e,t){const o=`$throttle$current$${t}`,i=`$throttle$next$${t}`,n=function(...t){if(this[i])return this[i];if(this[o])return this[i]=(0,r.done)(this[o]).then((()=>(this[i]=void 0,n.apply(this,t)))),this[i];this[o]=e.apply(this,t);const s=()=>this[o]=void 0;return(0,r.done)(this[o]).then(s,s),this[o]};return n}))},553:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Model=void 0;const r=o(549),i=o(779);t.Model=class{constructor(){this.remoteSourceProviders=new Set,this._onDidAddRemoteSourceProvider=new r.EventEmitter,this.onDidAddRemoteSourceProvider=this._onDidAddRemoteSourceProvider.event,this._onDidRemoveRemoteSourceProvider=new r.EventEmitter,this.onDidRemoveRemoteSourceProvider=this._onDidRemoveRemoteSourceProvider.event}registerRemoteSourceProvider(e){return this.remoteSourceProviders.add(e),this._onDidAddRemoteSourceProvider.fire(e),(0,i.toDisposable)((()=>{this.remoteSourceProviders.delete(e),this._onDidRemoveRemoteSourceProvider.fire(e)}))}getRemoteProviders(){return[...this.remoteSourceProviders.values()]}}},507:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.pickRemoteSource=void 0;const i=o(549),n=o(189),s=o(381),u=n.loadMessageBundle();async function a(e){const t=await new Promise((t=>{e.onDidAccept((()=>t(e.selectedItems[0]))),e.onDidHide((()=>t(void 0))),e.show()}));return e.hide(),t}class c{constructor(e){this.provider=e}ensureQuickPick(){this.quickpick||(this.quickpick=i.window.createQuickPick(),this.quickpick.ignoreFocusOut=!0,this.provider.supportsQuery?(this.quickpick.placeholder=this.provider.placeholder??u("type to search","Repository name (type to search)"),this.quickpick.onDidChangeValue(this.onDidChangeValue,this)):this.quickpick.placeholder=this.provider.placeholder??u("type to filter","Repository name"))}onDidChangeValue(){this.query()}async query(){try{this.ensureQuickPick(),this.quickpick.busy=!0,this.quickpick.show();const e=await this.provider.getRemoteSources(this.quickpick?.value)||[];0===e.length?this.quickpick.items=[{label:u("none found","No remote repositories found."),alwaysShow:!0}]:this.quickpick.items=e.map((e=>({label:e.icon?`$(${e.icon}) ${e.name}`:e.name,description:e.description||("string"==typeof e.url?e.url:e.url[0]),detail:e.detail,remoteSource:e,alwaysShow:!0})))}catch(e){this.quickpick.items=[{label:u("error","{0} Error: {1}","$(error)",e.message),alwaysShow:!0}],console.error(e)}finally{this.quickpick.busy=!1}}async pick(){return await this.query(),(await a(this.quickpick))?.remoteSource}}async function l(e,t={}){const o=new c(e),r=await o.pick();let n;if(r&&("string"==typeof r.url?n=r.url:r.url.length>0&&(n=await i.window.showQuickPick(r.url,{ignoreFocusOut:!0,placeHolder:u("pick url","Choose a URL to clone from.")}))),!n||!t.branch)return n;if(!e.getBranches)return{url:n};const s=await e.getBranches(n);if(!s)return{url:n};const a=await i.window.showQuickPick(s,{placeHolder:u("branch name","Branch name")});return a?{url:n,branch:a}:{url:n}}r([(0,s.debounce)(300)],c.prototype,"onDidChangeValue",null),r([s.throttle],c.prototype,"query",null),t.pickRemoteSource=async function(e,t={}){const o=i.window.createQuickPick();if(o.ignoreFocusOut=!0,o.title=t.title,t.providerName){const o=e.getRemoteProviders().filter((e=>e.name===t.providerName))[0];if(o)return await l(o,t)}const r=e.getRemoteProviders().map((e=>({label:(e.icon?`$(${e.icon}) `:"")+(t.providerLabel?t.providerLabel(e):e.name),alwaysShow:!0,provider:e}))),n=[];if(t.showRecentSources)for(const{provider:e}of r){const t=(await(e.getRecentRemoteSources?.())??[]).map((e=>({...e,label:(e.icon?`$(${e.icon}) `:"")+e.name,url:"string"==typeof e.url?e.url:e.url[0]})));n.push(...t)}const s=[{kind:i.QuickPickItemKind.Separator,label:u("remote sources","remote sources")},...r,{kind:i.QuickPickItemKind.Separator,label:u("recently opened","recently opened")},...n.sort(((e,t)=>t.timestamp-e.timestamp))];o.placeholder=t.placeholder??(0===r.length?u("provide url","Provide repository URL"):u("provide url or pick","Provide repository URL or pick a repository source."));const c=e=>{if(e){const r=("string"==typeof t.urlLabel?t.urlLabel:t.urlLabel?.(e))??u("url","URL");o.items=[{label:r,description:e,alwaysShow:!0,url:e},...s]}else o.items=s};o.onDidChangeValue(c),c();const d=await a(o);if(d){if(d.url)return d.url;if(d.provider)return await l(d.provider,t)}}},779:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Versions=t.done=t.toDisposable=void 0,t.toDisposable=function(e){return{dispose:e}},t.done=function(e){return e.then((()=>{}))},function(e){function t(e,t,o,r){return{major:"string"==typeof e?parseInt(e,10):e,minor:"string"==typeof t?parseInt(t,10):t,patch:null==o?0:"string"==typeof o?parseInt(o,10):o,pre:r}}function o(e){const[o,r]=e.split("-"),[i,n,s]=o.split(".");return t(i,n,s,r)}e.compare=function(e,t){return"string"==typeof e&&(e=o(e)),"string"==typeof t&&(t=o(t)),e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:e.patch>t.patch?1:e.patch<t.patch?-1:void 0===e.pre&&void 0!==t.pre?1:void 0!==e.pre&&void 0===t.pre?-1:void 0!==e.pre&&void 0!==t.pre?e.pre.localeCompare(t.pre):0},e.from=t,e.fromString=o}(t.Versions||(t.Versions={}))},549:e=>{e.exports=require("vscode")}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,o),n.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=o(752),i=o(627),n=o(553);e.activate=function(e){const o=new i.GitBaseExtensionImpl(new n.Model);return e.subscriptions.push((0,t.registerAPICommands)(o)),o}})();var i=exports;for(var n in r)i[n]=r[n];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/64bbfbf67ada9953918d72e1df2f4d8e537d340e/extensions/git-base/dist/browser/extension.js.map