(()=>{"use strict";var e={721:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MemFS=t.Directory=t.File=void 0;const r=i(496);class s{constructor(e,t){this.uri=e,this.type=r.FileType.File,this.ctime=Date.now(),this.mtime=Date.now(),this.size=0,this.name=t}}t.File=s;class o{constructor(e,t){this.uri=e,this.type=r.FileType.Directory,this.ctime=Date.now(),this.mtime=Date.now(),this.size=0,this.name=t,this.entries=new Map}}t.Directory=o,new TextEncoder;class a{constructor(){this.root=new o(r.Uri.parse("memfs:/"),""),this._emitter=new r.EventEmitter,this._bufferedEvents=[],this.onDidChangeFile=this._emitter.event,this._textDecoder=new TextDecoder,this.disposable=r.Disposable.from(r.workspace.registerFileSystemProvider(a.scheme,this,{isCaseSensitive:!0}),r.workspace.registerFileSearchProvider(a.scheme,this),r.workspace.registerTextSearchProvider(a.scheme,this))}dispose(){this.disposable?.dispose()}async readFileFromTemplate(e,t,i){const s=await r.workspace.fs.readFile(r.Uri.joinPath(e,"template",t)),o=i||t;this.writeFile(r.Uri.joinPath(r.Uri.parse("memfs:/siv3d-playground"),o),s,{create:!0,overwrite:!1})}async fetchFile(e,t,i){const s=await fetch(r.Uri.joinPath(r.Uri.parse(e),t).toString()),o=await s.arrayBuffer(),a=i||t;this.writeFile(r.Uri.joinPath(r.Uri.parse("memfs:/siv3d-playground"),a),new Uint8Array(o),{create:!0,overwrite:!1})}async loadInitialAssets(e){const t=[];this.createDirectory(r.Uri.parse("memfs:/siv3d-playground")),t.push(this.readFileFromTemplate(e,"main.html")),t.push(this.readFileFromTemplate(e,"README.md")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/.vscode")),t.push(this.readFileFromTemplate(e,".vscode/tasks.json")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/src")),t.push(this.readFileFromTemplate(e,"src/Main.cpp")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/include")),await Promise.all(t)}async loadAdditionalAssets(){const e=[],t=r.workspace.getConfiguration("siv3d-playground").get("siv3d-assets-download-url");e.push(this.fetchFile(t,"lib/Siv3D.wasm","Siv3D.wasm")),e.push(this.fetchFile(t,"lib/Siv3D.js","Siv3D.js")),e.push(this.fetchFile(t,"lib/Siv3D.data","Siv3D.data")),await Promise.all(e),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example")),e.push(this.fetchFile(t,"example/windmill.png")),e.push(this.fetchFile(t,"example/example/particle.png")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example/geojson")),e.push(this.fetchFile(t,"example/geojson/countries.geojson")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example/texture")),e.push(this.fetchFile(t,"example/texture/uv.png")),e.push(this.fetchFile(t,"example/texture/grass.jpg")),e.push(this.fetchFile(t,"example/texture/rock.jpg")),e.push(this.fetchFile(t,"example/texture/ground.jpg")),e.push(this.fetchFile(t,"example/texture/earth.jpg")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example/shader")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example/shader/essl")),e.push(this.fetchFile(t,"example/shader/essl/terrain_forward.vert")),e.push(this.fetchFile(t,"example/shader/essl/terrain_forward.frag")),e.push(this.fetchFile(t,"example/shader/essl/terrain_normal.frag")),this.createDirectory(r.Uri.parse("memfs:/siv3d-playground/example/obj")),e.push(this.fetchFile(t,"example/obj/blacksmith.obj")),e.push(this.fetchFile(t,"example/obj/mill.obj")),e.push(this.fetchFile(t,"example/obj/tree.obj")),e.push(this.fetchFile(t,"example/obj/pine.obj")),await Promise.all(e)}stat(e){return this._lookup(e,!1)}readDirectory(e){const t=this._lookupAsDirectory(e,!1);let i=[];for(const[e,r]of t.entries)i.push([e,r.type]);return i}readFile(e){const t=this._lookupAsFile(e,!1).data;if(t)return t;throw r.FileSystemError.FileNotFound()}writeFile(e,t,i){let a=this._basename(e.path),n=this._lookupParentDirectory(e),l=n.entries.get(a);if(l instanceof o)throw r.FileSystemError.FileIsADirectory(e);if(!l&&!i.create)throw r.FileSystemError.FileNotFound(e);if(l&&i.create&&!i.overwrite)throw r.FileSystemError.FileExists(e);l||(l=new s(e,a),n.entries.set(a,l),this._fireSoon({type:r.FileChangeType.Created,uri:e})),l.mtime=Date.now(),l.size=t.byteLength,l.data=t,this._fireSoon({type:r.FileChangeType.Changed,uri:e})}rename(e,t,i){if(!i.overwrite&&this._lookup(t,!0))throw r.FileSystemError.FileExists(t);let s=this._lookup(e,!1),o=this._lookupParentDirectory(e),a=this._lookupParentDirectory(t),n=this._basename(t.path);o.entries.delete(s.name),s.name=n,a.entries.set(n,s),this._fireSoon({type:r.FileChangeType.Deleted,uri:e},{type:r.FileChangeType.Created,uri:t})}delete(e){let t=e.with({path:this._dirname(e.path)}),i=this._basename(e.path),s=this._lookupAsDirectory(t,!1);if(!s.entries.has(i))throw r.FileSystemError.FileNotFound(e);s.entries.delete(i),s.mtime=Date.now(),s.size-=1,this._fireSoon({type:r.FileChangeType.Changed,uri:t},{uri:e,type:r.FileChangeType.Deleted})}createDirectory(e){let t=this._basename(e.path),i=e.with({path:this._dirname(e.path)}),s=this._lookupAsDirectory(i,!1),a=new o(e,t);s.entries.set(a.name,a),s.mtime=Date.now(),s.size+=1,this._fireSoon({type:r.FileChangeType.Changed,uri:i},{type:r.FileChangeType.Created,uri:e})}_lookup(e,t){let i=e.path.split("/"),s=this.root;for(const a of i){if(!a)continue;let i;if(s instanceof o&&(i=s.entries.get(a)),!i){if(t)return;throw r.FileSystemError.FileNotFound(e)}s=i}return s}_lookupAsDirectory(e,t){let i=this._lookup(e,t);if(i instanceof o)return i;throw r.FileSystemError.FileNotADirectory(e)}_lookupAsFile(e,t){let i=this._lookup(e,t);if(i instanceof s)return i;throw r.FileSystemError.FileIsADirectory(e)}_lookupParentDirectory(e){const t=e.with({path:this._dirname(e.path)});return this._lookupAsDirectory(t,!1)}watch(e){return new r.Disposable((()=>{}))}_fireSoon(...e){this._bufferedEvents.push(...e),this._fireSoonHandle&&clearTimeout(this._fireSoonHandle),this._fireSoonHandle=setTimeout((()=>{this._emitter.fire(this._bufferedEvents),this._bufferedEvents.length=0}),5)}_basename(e){return(e=this._rtrim(e,"/"))?e.substr(e.lastIndexOf("/")+1):""}_dirname(e){return(e=this._rtrim(e,"/"))?e.substr(0,e.lastIndexOf("/")):"/"}_rtrim(e,t){if(!e||!t)return e;const i=t.length,r=e.length;if(0===i||0===r)return e;let s=r,o=-1;for(;o=e.lastIndexOf(t,s-1),-1!==o&&o+i===s;){if(0===o)return"";s=o}return e.substring(0,s)}_getFiles(){const e=new Set;return this._doGetFiles(this.root,e),e}_doGetFiles(e,t){e.entries.forEach((e=>{e instanceof s?t.add(e):this._doGetFiles(e,t)}))}_convertSimple2RegExpPattern(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")}provideFileSearchResults(e,t,i){return this._findFiles(e.pattern)}_findFiles(e){const t=this._getFiles(),i=[],r=e?new RegExp(this._convertSimple2RegExpPattern(e)):null;for(const e of t)r&&!r.exec(e.name)||i.push(e.uri);return i}provideTextSearchResults(e,t,i,s){const o=this._findFiles(t.includes[0]);if(o)for(const t of o){const s=this._textDecoder.decode(this.readFile(t)).split("\n");for(let o=0;o<s.length;o++){const a=s[o],n=a.indexOf(e.pattern);-1!==n&&i.report({uri:t,ranges:new r.Range(new r.Position(o,n),new r.Position(o,n+e.pattern.length)),preview:{text:a,matches:new r.Range(new r.Position(0,n),new r.Position(0,n+e.pattern.length))}})}}return{limitHit:!1}}}t.MemFS=a,a.scheme="memfs"},496:e=>{e.exports=require("vscode")}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,i),o.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(496),s=i(721);e.activate=async function(e){if("object"==typeof navigator){let i;e.subscriptions.push(t.commands.registerCommand("siv3d-playground.compile.run",(async()=>{const e=new Promise(((e,t)=>{i=e}));t.commands.executeCommand("workbench.action.tasks.runTask","emcc build"),0===await e&&t.commands.executeCommand("emcc.preview.show",t.Uri.joinPath(o,"main.html"),"Siv3D Preview"),i=null}))),t.tasks.onDidEndTaskProcess((e=>{"emcc build"==e.execution.task.name&&i&&i(e.exitCode)}));const r={preview:!1},o=t.workspace.workspaceFolders&&t.workspace.workspaceFolders.length>0?t.workspace.workspaceFolders[0].uri:void 0,a=function(e){const t=new s.MemFS;return e.subscriptions.push(t),t}(e);await a.loadInitialAssets(e.extensionUri),t.commands.executeCommand("vscode.open",t.Uri.parse("memfs:/siv3d-playground/src/Main.cpp"),r),await a.loadAdditionalAssets()}}})();var s=exports;for(var o in r)s[o]=r[o];r.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=extension.js.map