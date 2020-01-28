(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Es7B:function(t,i,e){"use strict";e.r(i);var l=e("8Y7J");class n{constructor(){this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}ngOnInit(){}}class r{}var s=e("pMnS"),o=e("Xd0L"),a=e("KCVW");const h=new l.w("MAT_GRID_LIST");class d{constructor(t,i){this._element=t,this._gridList=i,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(Object(a.f)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(Object(a.f)(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}}class u{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,i){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=i.map(t=>this._trackTile(t))}_trackTile(t){const i=this._findMatchingGap(t.colspan);return this._markTilePosition(i,t),this.columnIndex=i+t.colspan,new g(this.rowIndex,i)}_findMatchingGap(t){if(t>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${t} is wider than `+`grid with cols="${this.tracker.length}".`);let i=-1,e=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)):-1!=(i=this.tracker.indexOf(0,this.columnIndex))?(e=this._findGapEndIndex(i),this.columnIndex=i+1):(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i))}while(e-i<t||0==e);return Math.max(i,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let i=t+1;i<this.tracker.length;i++)if(0!=this.tracker[i])return i;return this.tracker.length}_markTilePosition(t,i){for(let e=0;e<i.colspan;e++)this.tracker[t+e]=i.rowspan}}class g{constructor(t,i){this.row=t,this.col=i}}const c=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class p{constructor(){this._rows=0,this._rowspan=0}init(t,i,e,l){this._gutterSize=_(t),this._rows=i.rowCount,this._rowspan=i.rowspan,this._cols=e,this._direction=l}getBaseTileSize(t,i){return`(${t}% - (${this._gutterSize} * ${i}))`}getTilePosition(t,i){return 0===i?"0":w(`(${t} + ${this._gutterSize}) * ${i}`)}getTileSize(t,i){return`(${t} * ${i}) + (${i-1} * ${this._gutterSize})`}setStyle(t,i,e){let l=100/this._cols,n=(this._cols-1)/this._cols;this.setColStyles(t,e,l,n),this.setRowStyles(t,i,l,n)}setColStyles(t,i,e,l){let n=this.getBaseTileSize(e,l);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(n,i)),t._setStyle("width",w(this.getTileSize(n,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class m extends p{constructor(t){super(),this.fixedRowHeight=t}init(t,i,e,l){if(super.init(t,i,e,l),this.fixedRowHeight=_(this.fixedRowHeight),!c.test(this.fixedRowHeight))throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`)}setRowStyles(t,i){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,i)),t._setStyle("height",w(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",w(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class f extends p{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,i,e,l){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,l),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,i)),t._setStyle("paddingTop",w(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",w(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const i=t.split(":");if(2!==i.length)throw Error(`mat-grid-list: invalid ratio given for row-height: "${t}"`);this.rowHeightRatio=parseFloat(i[0])/parseFloat(i[1])}}class b extends p{setRowStyles(t,i){let e=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(e,i)),t._setStyle("height",w(this.getTileSize(e,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function w(t){return`calc(${t})`}function _(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}const x="fit";class y{constructor(t,i){this._element=t,this._dir=i,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(Object(a.f)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const i=`${null==t?"":t}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler=t===x?new b:t&&t.indexOf(":")>-1?new f(t):new m(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new u);const t=this._tileCoordinator,i=this._tiles.filter(t=>!t._gridList||t._gridList===this),e=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,e),i.forEach((i,e)=>{const l=t.positions[e];this._tileStyler.setStyle(i,l.row,l.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}class S{}var k=e("IP0z"),T=e("cUpR"),v=l.Cb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function H(t){return l.ac(2,[(t()(),l.Eb(0,0,null,null,1,"div",[],null,null,null,null,null)),l.Pb(null,0)],null,null)}var O=l.Cb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function $(t){return l.ac(2,[(t()(),l.Eb(0,0,null,null,1,"figure",[["class","mat-figure"]],null,null,null,null,null)),l.Pb(null,0)],null,null)}var E=e("oBZk"),I=e("ZZ/e"),z=e("SVse"),R=l.Cb({encapsulation:0,styles:[[""]],data:{}});function C(t){return l.ac(0,[(t()(),l.Eb(0,0,null,null,2,"mat-grid-tile",[["class","mat-grid-tile"]],[[4,"background",null]],null,null,$,O)),l.Db(1,49152,[[1,4]],0,d,[l.p,[2,h]],{rowspan:[0,"rowspan"],colspan:[1,"colspan"]},null),(t()(),l.Yb(2,0,[" "," "]))],(function(t,i){t(i,1,0,i.context.$implicit.rows,i.context.$implicit.cols)}),(function(t,i){t(i,0,0,i.context.$implicit.color),t(i,2,0,i.context.$implicit.text)}))}function G(t){return l.ac(0,[(t()(),l.Eb(0,0,null,null,11,"ion-header",[],null,null,null,E.tb,E.t)),l.Db(1,49152,null,0,I.E,[l.j,l.p,l.G],null,null),(t()(),l.Eb(2,0,null,0,9,"ion-toolbar",[],null,null,null,E.Zb,E.Z)),l.Db(3,49152,null,0,I.Fb,[l.j,l.p,l.G],null,null),(t()(),l.Eb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,E.fb,E.f)),l.Db(5,49152,null,0,I.o,[l.j,l.p,l.G],null,null),(t()(),l.Eb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(t,i,e){var n=!0;return"click"===i&&(n=!1!==l.Qb(t,8).onClick(e)&&n),n}),E.cb,E.c)),l.Db(7,49152,null,0,I.j,[l.j,l.p,l.G],null,null),l.Db(8,16384,null,0,I.k,[[2,I.lb],I.Mb],null,null),(t()(),l.Eb(9,0,null,0,2,"ion-title",[],null,null,null,E.Xb,E.X)),l.Db(10,49152,null,0,I.Db,[l.j,l.p,l.G],null,null),(t()(),l.Yb(-1,0,["Grid"])),(t()(),l.Eb(12,0,null,null,7,"ion-content",[["class","ion-padding"]],null,null,null,E.ob,E.o)),l.Db(13,49152,null,0,I.x,[l.j,l.p,l.G],null,null),(t()(),l.Eb(14,0,null,0,5,"mat-grid-list",[["class","mat-grid-list"],["cols","4"],["rowHeight","100px"]],null,null,null,H,v)),l.Vb(6144,null,h,null,[y]),l.Db(16,2211840,null,1,y,[l.p,[2,k.b]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),l.Wb(603979776,1,{_tiles:1}),(t()(),l.tb(16777216,null,0,1,null,C)),l.Db(19,278528,null,0,z.m,[l.Y,l.U,l.y],{ngForOf:[0,"ngForOf"]},null)],(function(t,i){var e=i.component;t(i,16,0,"4","100px"),t(i,19,0,e.tiles)}),null)}function D(t){return l.ac(0,[(t()(),l.Eb(0,0,null,null,1,"app-mat-grid",[],null,null,null,G,R)),l.Db(1,114688,null,0,n,[],null,null)],(function(t,i){t(i,1,0)}),null)}var j=l.Ab("app-mat-grid",n,D,{},{},[]),M=e("s7LF"),L=e("iInd");e.d(i,"MatGridPageModuleNgFactory",(function(){return P}));var P=l.Bb(r,[],(function(t){return l.Nb([l.Ob(512,l.m,l.lb,[[8,[s.a,j]],[3,l.m],l.E]),l.Ob(4608,z.p,z.o,[l.A,[2,z.H]]),l.Ob(4608,M.t,M.t,[]),l.Ob(4608,I.c,I.c,[l.G,l.g]),l.Ob(4608,I.Lb,I.Lb,[I.c,l.m,l.x]),l.Ob(4608,I.Rb,I.Rb,[I.c,l.m,l.x]),l.Ob(1073742336,z.c,z.c,[]),l.Ob(1073742336,M.s,M.s,[]),l.Ob(1073742336,M.i,M.i,[]),l.Ob(1073742336,I.Hb,I.Hb,[]),l.Ob(1073742336,L.p,L.p,[[2,L.u],[2,L.n]]),l.Ob(1073742336,k.a,k.a,[]),l.Ob(1073742336,o.n,o.n,[[2,o.f],[2,T.f]]),l.Ob(1073742336,o.o,o.o,[]),l.Ob(1073742336,S,S,[]),l.Ob(1073742336,r,r,[]),l.Ob(1024,L.l,(function(){return[[{path:"",component:n}]]}),[])])}))},IP0z:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"a",(function(){return o}));var l=e("SVse"),n=e("8Y7J");const r=new n.w("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(n.gb)(l.d)}});let s=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new n.r,t){const i=t.documentElement?t.documentElement.dir:null,e=(t.body?t.body.dir:null)||i;this.value="ltr"===e||"rtl"===e?e:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.ngInjectableDef=Object(n.ec)({factory:function(){return new t(Object(n.fc)(r,8))},token:t,providedIn:"root"}),t})();class o{}}}]);