"use strict";(self.webpackChunksamurAI=self.webpackChunksamurAI||[]).push([[498],{8498:($e,L,y)=>{y.r(L),y.d(L,{HomeModule:()=>Ue});var N=y(4670),r=y(4946),te=y(9862);let U=(()=>{class t{constructor(e){this.http=e,this.apiUrl="https://localhost:7104/api"}getLabelResults(){return this.http.get(`${this.apiUrl}/LabelResults`)}getLabelResultById(e){return this.http.get(`${this.apiUrl}/LabelResults/${e}`)}getModelResults(){return this.http.get(`${this.apiUrl}/ModelResults`)}getModelResultById(e){return this.http.get(`${this.apiUrl}/ModelResults/${e}`)}getTextResults(){return this.http.get(`${this.apiUrl}/TextResults`)}getTextResultById(e){return this.http.get(`${this.apiUrl}/TextResults/${e}`)}insertTextResult(e){return this.http.post(`${this.apiUrl}/TextResults/insert`,{sentenceText:e,modelResultId:1})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(te.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var C=y(6814),S=y(95),T=y(3239),p=y(8137),B=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),I_textSize=function(t,a,e){var l,n=[].concat(a),i=n.length,o=t.font,s=0;for(t.font=e.string,l=0;l<i;++l)s=Math.max(t.measureText(n[l]).width,s);return t.font=o,{height:i*e.lineHeight,width:s}};function q(t,a){var e=a.x,n=a.y;if(null===e)return{x:0,y:-1};if(null===n)return{x:1,y:0};var i=t.x-e,o=t.y-n,s=Math.sqrt(i*i+o*o);return{x:s?i/s:0,y:s?o/s:-1}}var ae=0,$=1,z=2,J=4,Q=8;function O(t,a,e){var n=ae;return t<e.left?n|=$:t>e.right&&(n|=z),a<e.top?n|=Q:a>e.bottom&&(n|=J),n}function D(t,a){var i,o,e=a.anchor,n=t;return a.clamp&&(n=function re(t,a){for(var u,c,d,e=t.x0,n=t.y0,i=t.x1,o=t.y1,s=O(e,n,a),l=O(i,o,a);s|l&&!(s&l);)(u=s||l)&Q?(c=e+(i-e)*(a.top-n)/(o-n),d=a.top):u&J?(c=e+(i-e)*(a.bottom-n)/(o-n),d=a.bottom):u&z?(d=n+(o-n)*(a.right-e)/(i-e),c=a.right):u&$&&(d=n+(o-n)*(a.left-e)/(i-e),c=a.left),u===s?s=O(e=c,n=d,a):l=O(i=c,o=d,a);return{x0:e,x1:i,y0:n,y1:o}}(n,a.area)),"start"===e?(i=n.x0,o=n.y0):"end"===e?(i=n.x1,o=n.y1):(i=(n.x0+n.x1)/2,o=(n.y0+n.y1)/2),function ne(t,a,e,n,i){switch(i){case"center":e=n=0;break;case"bottom":e=0,n=1;break;case"right":e=1,n=0;break;case"left":e=-1,n=0;break;case"top":e=0,n=-1;break;case"start":e=-e,n=-n;break;case"end":break;default:i*=Math.PI/180,e=Math.cos(i),n=Math.sin(i)}return{x:t,y:a,vx:e,vy:n}}(i,o,t.vx,t.vy,a.align)}var F={arc:function(t,a){var e=(t.startAngle+t.endAngle)/2,n=Math.cos(e),i=Math.sin(e),o=t.innerRadius,s=t.outerRadius;return D({x0:t.x+n*o,y0:t.y+i*o,x1:t.x+n*s,y1:t.y+i*s,vx:n,vy:i},a)},point:function(t,a){var e=q(t,a.origin),n=e.x*t.options.radius,i=e.y*t.options.radius;return D({x0:t.x-n,y0:t.y-i,x1:t.x+n,y1:t.y+i,vx:e.x,vy:e.y},a)},bar:function(t,a){var e=q(t,a.origin),n=t.x,i=t.y,o=0,s=0;return t.horizontal?(n=Math.min(t.x,t.base),o=Math.abs(t.base-t.x)):(i=Math.min(t.y,t.base),s=Math.abs(t.base-t.y)),D({x0:n,y0:i+s,x1:n+o,y1:i,vx:e.x,vy:e.y},a)},fallback:function(t,a){var e=q(t,a.origin);return D({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:e.x,vy:e.y},a)}},x=function(t){return Math.round(t*B)/B};function oe(t,a){var e=a.chart.getDatasetMeta(a.datasetIndex).vScale;if(!e)return null;if(void 0!==e.xCenter&&void 0!==e.yCenter)return{x:e.xCenter,y:e.yCenter};var n=e.getBasePixel();return t.horizontal?{x:n,y:null}:{x:null,y:n}}function se(t){return t instanceof T.qi?F.arc:t instanceof T.od?F.point:t instanceof T.ZL?F.bar:F.fallback}function de(t,a,e){var n=t.shadowBlur,i=e.stroked,o=x(e.x),s=x(e.y),l=x(e.w);i&&t.strokeText(a,o,s,l),e.filled&&(n&&i&&(t.shadowBlur=0),t.fillText(a,o,s,l),n&&i&&(t.shadowBlur=n))}var G=function(t,a,e,n){var i=this;i._config=t,i._index=n,i._model=null,i._rects=null,i._ctx=a,i._el=e};(0,p.a4)(G.prototype,{_modelize:function(t,a,e,n){var i=this,o=i._index,s=(0,p.a0)((0,p.a)([e.font,{}],n,o)),l=(0,p.a)([e.color,p.d.color],n,o);return{align:(0,p.a)([e.align,"center"],n,o),anchor:(0,p.a)([e.anchor,"center"],n,o),area:n.chart.chartArea,backgroundColor:(0,p.a)([e.backgroundColor,null],n,o),borderColor:(0,p.a)([e.borderColor,null],n,o),borderRadius:(0,p.a)([e.borderRadius,0],n,o),borderWidth:(0,p.a)([e.borderWidth,0],n,o),clamp:(0,p.a)([e.clamp,!1],n,o),clip:(0,p.a)([e.clip,!1],n,o),color:l,display:t,font:s,lines:a,offset:(0,p.a)([e.offset,4],n,o),opacity:(0,p.a)([e.opacity,1],n,o),origin:oe(i._el,n),padding:(0,p.E)((0,p.a)([e.padding,4],n,o)),positioner:se(i._el),rotation:(0,p.a)([e.rotation,0],n,o)*(Math.PI/180),size:I_textSize(i._ctx,a,s),textAlign:(0,p.a)([e.textAlign,"start"],n,o),textShadowBlur:(0,p.a)([e.textShadowBlur,0],n,o),textShadowColor:(0,p.a)([e.textShadowColor,l],n,o),textStrokeColor:(0,p.a)([e.textStrokeColor,l],n,o),textStrokeWidth:(0,p.a)([e.textStrokeWidth,0],n,o)}},update:function(t){var s,l,u,a=this,e=null,n=null,i=a._index,o=a._config,c=(0,p.a)([o.display,!0],t,i);c&&(l=(0,p.v)((0,p.Q)(o.formatter,[s=t.dataset.data[i],t]),s),(u=(0,p.k)(l)?[]:function(t){var e,a=[];for(t=[].concat(t);t.length;)"string"==typeof(e=t.pop())?a.unshift.apply(a,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):(0,p.k)(t)||a.unshift(""+e);return a}(l)).length&&(n=function ie(t){var a=t.borderWidth||0,e=t.padding,n=t.size.height,i=t.size.width,o=-i/2,s=-n/2;return{frame:{x:o-e.left-a,y:s-e.top-a,w:i+e.width+2*a,h:n+e.height+2*a},text:{x:o,y:s,w:i,h:n}}}(e=a._modelize(c,u,o,t)))),a._model=e,a._rects=n},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,a){var s,n=t.ctx,i=this._model,o=this._rects;this.visible()&&(n.save(),i.clip&&(s=i.area,n.beginPath(),n.rect(s.left,s.top,s.right-s.left,s.bottom-s.top),n.clip()),n.globalAlpha=function(t,a,e){return Math.max(t,Math.min(a,e))}(0,i.opacity,1),n.translate(x(a.x),x(a.y)),n.rotate(i.rotation),function ue(t,a,e){var n=e.backgroundColor,i=e.borderColor,o=e.borderWidth;!n&&(!i||!o)||(t.beginPath(),function le(t,a,e,n,i,o){var s=Math.PI/2;if(o){var l=Math.min(o,i/2,n/2),u=a+l,c=e+l,d=a+n-l,f=e+i-l;t.moveTo(a,c),u<d&&c<f?(t.arc(u,c,l,-Math.PI,-s),t.arc(d,c,l,-s,0),t.arc(d,f,l,0,s),t.arc(u,f,l,s,Math.PI)):u<d?(t.moveTo(u,e),t.arc(d,c,l,-s,s),t.arc(u,c,l,s,Math.PI+s)):c<f?(t.arc(u,c,l,-Math.PI,0),t.arc(u,f,l,0,Math.PI)):t.arc(u,c,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(a,e)}else t.rect(a,e,n,i)}(t,x(a.x)+o/2,x(a.y)+o/2,x(a.w)-o,x(a.h)-o,e.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),i&&o&&(t.strokeStyle=i,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}(n,o.frame,i),function pe(t,a,e,n){var h,i=n.textAlign,o=n.color,s=!!o,l=n.font,u=a.length,c=n.textStrokeColor,d=n.textStrokeWidth,f=c&&d;if(u&&(s||f))for(e=function ce(t,a,e){var n=e.lineHeight,i=t.w,o=t.x;return"center"===a?o+=i/2:("end"===a||"right"===a)&&(o+=i),{h:n,w:i,x:o,y:t.y+n/2}}(e,i,l),t.font=l.string,t.textAlign=i,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,s&&(t.fillStyle=o),f&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=c),h=0,u=a.length;h<u;++h)de(t,a[h],{stroked:f,filled:s,w:e.w,x:e.x,y:e.y+e.h*h})}(n,i.lines,o.text,i),n.restore())}});var fe=Number.MIN_SAFE_INTEGER||-9007199254740991,he=Number.MAX_SAFE_INTEGER||9007199254740991;function A(t,a,e){var n=Math.cos(e),i=Math.sin(e),o=a.x,s=a.y;return{x:o+n*(t.x-o)-i*(t.y-s),y:s+i*(t.x-o)+n*(t.y-s)}}function Y(t,a){var o,s,c,e=he,n=fe,i=a.origin;for(o=0;o<t.length;++o)c=a.vx*((s=t[o]).x-i.x)+a.vy*(s.y-i.y),e=Math.min(e,c),n=Math.max(n,c);return{min:e,max:n}}function H(t,a){var e=a.x-t.x,n=a.y-t.y,i=Math.sqrt(e*e+n*n);return{vx:(a.x-t.x)/i,vy:(a.y-t.y)/i,origin:t,ln:i}}var V=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function j(t,a,e){var n=a.positioner(t,a),i=n.vx,o=n.vy;if(!i&&!o)return{x:n.x,y:n.y};var s=e.w,l=e.h,u=a.rotation,c=Math.abs(s/2*Math.cos(u))+Math.abs(l/2*Math.sin(u)),d=Math.abs(s/2*Math.sin(u))+Math.abs(l/2*Math.cos(u)),f=1/Math.max(Math.abs(i),Math.abs(o));return c*=i*f,d*=o*f,{x:n.x+(c+=a.offset*i),y:n.y+(d+=a.offset*o)}}(0,p.a4)(V.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,a,e){this._rotation=e,this._rect={x:a.x+t.x,y:a.y+t.y,w:a.w,h:a.h}},contains:function(t){var a=this,n=a._rect;return!((t=A(t,a.center(),-a._rotation)).x<n.x-1||t.y<n.y-1||t.x>n.x+n.w+2||t.y>n.y+n.h+2)},intersects:function(t){var i,o,s,a=this._points(),e=t._points(),n=[H(a[0],a[1]),H(a[0],a[3])];for(this._rotation!==t._rotation&&n.push(H(e[0],e[1]),H(e[0],e[3])),i=0;i<n.length;++i)if(o=Y(a,n[i]),s=Y(e,n[i]),o.max<s.min||s.max<o.min)return!1;return!0},_points:function(){var t=this,a=t._rect,e=t._rotation,n=t.center();return[A({x:a.x,y:a.y},n,e),A({x:a.x+a.w,y:a.y},n,e),A({x:a.x+a.w,y:a.y+a.h},n,e),A({x:a.x,y:a.y+a.h},n,e)]}});var P={prepare:function(t){var e,n,i,o,s,a=[];for(e=0,i=t.length;e<i;++e)for(n=0,o=t[e].length;n<o;++n)a.push(s=t[e][n]),s.$layout={_box:new V,_hidable:!1,_visible:!0,_set:e,_idx:s._index};return a.sort(function(l,u){var c=l.$layout,d=u.$layout;return c._idx===d._idx?d._set-c._set:d._idx-c._idx}),this.update(a),a},update:function(t){var e,n,i,o,s,a=!1;for(e=0,n=t.length;e<n;++e)o=(i=t[e]).model(),(s=i.$layout)._hidable=o&&"auto"===o.display,s._visible=i.visible(),a|=s._hidable;a&&function be(t){var a,e,n,i,o,s,l;for(a=0,e=t.length;a<e;++a)(i=(n=t[a]).$layout)._visible&&(l=new Proxy(n._el,{get:(u,c)=>u.getProps([c],!0)[c]}),o=n.geometry(),s=j(l,n.model(),o),i._box.update(s,o,n.rotation()));(function ge(t,a){var e,n,i,o;for(e=t.length-1;e>=0;--e)for(i=t[e].$layout,n=e-1;n>=0&&i._visible;--n)(o=t[n].$layout)._visible&&i._box.intersects(o._box)&&a(i,o)})(t,function(u,c){var d=u._hidable,f=c._hidable;d&&f||f?c._visible=!1:d&&(u._visible=!1)})}(t)},lookup:function(t,a){var e,n;for(e=t.length-1;e>=0;--e)if((n=t[e].$layout)&&n._visible&&n._box.contains(a))return t[e];return null},draw:function(t,a){var e,n,i,o,s,l;for(e=0,n=a.length;e<n;++e)(o=(i=a[e]).$layout)._visible&&(s=i.geometry(),l=j(i._el,i.model(),s),o._box.update(l,s,i.rotation()),i.draw(t,l))}},g="$datalabels",W="$default";function E(t,a,e,n){if(a){var s,i=e.$context,o=e.$groups;a[o._set]&&(s=a[o._set][o._key])&&!0===(0,p.Q)(s,[i,n])&&(t[g]._dirty=!0,e.update(i))}}var k={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,p.k)(t))return null;var e,n,i,a=t;if((0,p.i)(t))if((0,p.k)(t.label))if((0,p.k)(t.r))for(a="",i=0,n=(e=Object.keys(t)).length;i<n;++i)a+=(0!==i?", ":"")+e[i]+": "+t[e[i]];else a=t.r;else a=t.label;return""+a},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[g]={_actives:[]}},beforeUpdate:function(t){var a=t[g];a._listened=!1,a._listeners={},a._datasets=[],a._labels=[]},afterDatasetUpdate:function(t,a,e){var f,h,v,R,w,_,b,m,n=a.index,i=t[g],o=i._datasets[n]=[],s=t.isDatasetVisible(n),l=t.data.datasets[n],u=function xe(t,a){var o,s,e=t.datalabels,n={},i=[];return!1===e?null:(!0===e&&(e={}),a=(0,p.a4)({},[a,e]),o=a.labels||{},s=Object.keys(o),delete a.labels,s.length?s.forEach(function(l){o[l]&&i.push((0,p.a4)({},[a,o[l],{_key:l}]))}):i.push(a),n=i.reduce(function(l,u){return(0,p.F)(u.listeners||{},function(c,d){l[d]=l[d]||{},l[d][u._key||W]=c}),delete u.listeners,l},{}),{labels:i,listeners:n})}(l,e),c=a.meta.data||[],d=t.ctx;for(d.save(),f=0,v=c.length;f<v;++f)if((b=c[f])[g]=[],s&&b&&t.getDataVisibility(f)&&!b.skip)for(h=0,R=u.labels.length;h<R;++h)_=(w=u.labels[h])._key,(m=new G(w,d,b,f)).$groups={_set:n,_key:_||W},m.$context={active:!1,chart:t,dataIndex:f,dataset:l,datasetIndex:n},m.update(m.$context),b[g].push(m),o.push(m);d.restore(),(0,p.a4)(i._listeners,u.listeners,{merger:function(M,Z,Be){Z[M]=Z[M]||{},Z[M][a.index]=Be[M],i._listened=!0}})},afterUpdate:function(t){t[g]._labels=P.prepare(t[g]._datasets)},afterDatasetsDraw:function(t){P.draw(t,t[g]._labels)},beforeEvent:function(t,a){if(t[g]._listened){var e=a.event;switch(e.type){case"mousemove":case"mouseout":!function me(t,a){var i,o,e=t[g],n=e._listeners;if(n.enter||n.leave){if("mousemove"===a.type)o=P.lookup(e._labels,a);else if("mouseout"!==a.type)return;i=e._hovered,e._hovered=o,function _e(t,a,e,n,i){var o,s;!e&&!n||(e?n?e!==n&&(s=o=!0):s=!0:o=!0,s&&E(t,a.leave,e,i),o&&E(t,a.enter,n,i))}(t,n,i,o,a)}}(t,e);break;case"click":!function we(t,a){var e=t[g],n=e._listeners.click,i=n&&P.lookup(e._labels,a);i&&E(t,n,i,a)}(t,e)}}},afterEvent:function(t){var o,s,l,u,c,d,f,a=t[g],i=function(t,a){var i,o,s,l,e=t.slice(),n=[];for(i=0,s=a.length;i<s;++i)-1===(o=e.indexOf(l=a[i]))?n.push([l,1]):e.splice(o,1);for(i=0,s=e.length;i<s;++i)n.push([e[i],-1]);return n}(a._actives,a._actives=t.getActiveElements());for(o=0,s=i.length;o<s;++o)if((c=i[o])[1])for(l=0,u=(f=c[0].element[g]||[]).length;l<u;++l)(d=f[l]).$context.active=1===c[1],d.update(d.$context);(a._dirty||i.length)&&(P.update(a._labels),t.render()),delete a._dirty}};const Ce=["chartCanvas"];function Te(t,a){1&t&&(r.TgZ(0,"div",16),r._uU(1," Loading "),r._UZ(2,"span",17)(3,"span",17)(4,"span",17),r.qZA())}const ke=function(t){return{"reviews-margin":t}};let Re=(()=>{class t{constructor(e){this.apiService=e,this.text=null,this.resultLabel=null,this.activeTab="",this.close=new r.vpe,this.isLoading=!1,this.chartData={labels:[],datasets:[{data:[],backgroundColor:["#00D32A","#CED400","#D06700","#CF0000","#D100CB","#5700D3"],hoverBackgroundColor:["#1AF049","#ECF01A","#F0811A","#F01A1A","#F01AE8","#781AF0"]}]},this.chartOptions={responsive:!0,maintainAspectRatio:!1,cutout:"70%",layout:{padding:110},plugins:{legend:{position:"right",labels:{font:{size:16},generateLabels:n=>{const i=n.data;if(i.labels.length&&i.datasets.length){const o=i.datasets[0],s=i.labels,l=o.data.reduce((c,d)=>c+d,0);return s.map((c,d)=>({text:`${c} - ${(o.data[d]/l*100).toFixed(2)+"%"}`,fillStyle:o.backgroundColor[d],hidden:!1,index:d,datasetIndex:0}))}return[]},usePointStyle:!0},title:{display:!0,text:"Click to remove/add",color:"black",font:{size:16,weight:"bold"},padding:10}},tooltip:{callbacks:{label:n=>{const i=n.raw||0,o=(n.chart?.data?.datasets?.[0].data).reduce((l,u)=>l+u,0);return o?(i/o*100).toFixed(2)+"%":""}}},datalabels:{anchor:"end",align:"start",offset:-40,color:"black",borderWidth:2,borderRadius:4,borderColor:"black",backgroundColor:"white",font:{size:16,weight:"bold"},formatter:(n,i)=>{const o=(i.chart?.data?.datasets?.[0].data).reduce((u,c)=>u+c,0),s=o?(n/o*100).toFixed(2)+"%":"";return`${i.chart?.data?.labels[i.dataIndex]} - ${s}`},labels:{title:{font:{weight:"bold"}}},display:"auto"}}}}updateChartData(e){for(var n=[],i=[],o=[],s=[],l=0;l<e.labels.length;l++)isNaN(parseFloat(e.labels[l].label))?(n.push(e.labels[l].label),o.push(e.labels[l].percentage)):(i.push(e.labels[l].label),s.push(e.labels[l].percentage));"cyberbullying"===this.activeTab?(this.chartData.labels=n,this.chartData.datasets[0].data=o):"restaurant-reviews"===this.activeTab&&(this.chartData.labels=i,this.chartData.datasets[0].data=s)}createChart(){const n=this.chartCanvas.nativeElement.getContext("2d");var i="Random\nForest".replace(/ /g,"\n");this.apiService.getModelResultById(1).subscribe(l=>{i=l.modelName.replace(/ /g,"\n")}),T.kL.register({id:"datalabels",beforeDraw:l=>{const u=l.chartArea,c=(u.left+u.right)/2,d=(u.top+u.bottom)/2,f=Math.min((u.right-u.left)/2,(u.bottom-u.top)/2);n.save(),n.beginPath(),n.arc(c,d,f,0,2*Math.PI),n.fillStyle="white",n.shadowColor="rgba(0, 0, 0, 0.25)",n.shadowOffsetX=0,n.shadowOffsetY=4,n.shadowBlur=4,n.fill(),n.restore();const v=i.split("\n");if(n.save(),n.font="bold 32px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#099517",n.shadowColor="rgba(0, 0, 0, 0.25)",n.shadowOffsetX=0,n.shadowOffsetY=4,n.shadowBlur=4,v.length>1)for(var _=0;_<v.length;_++)n.fillText(v[_],c,d+30*_-15);else n.fillText(v[0],c,d);n.restore()},afterDraw:k.afterDraw,beforeDatasetsDraw:k.beforeDatasetsDraw,afterDatasetsDraw:k.afterDatasetsDraw,beforeDatasetDraw:k.beforeDatasetDraw,afterDatasetDraw:k.afterDatasetDraw}),"restaurant-reviews"===this.activeTab&&T.kL.register({id:"customTitle",beforeDraw:l=>{const u=l.ctx,c=l.legend;if(!c)return;const f="Click to\nremove/add".split("\n"),w=c.left+(c.width-60),_=c.top+70-20*f.length;u.save(),u.fillStyle="black",u.textAlign="center",u.textBaseline="top",u.font="bold 16px Arial";for(let b=0;b<f.length;b++)u.fillText(f[b],w,_+20*b);u.restore()}});const s=new T.kL(n,{type:"doughnut",data:this.chartData,options:this.chartOptions,plugins:[k]});"restaurant-reviews"===this.activeTab?s.options.plugins.legend.title.display=!1:"cyberbullying"===this.activeTab&&(s.options.plugins.legend.title.display=!0,s.options.plugins.legend.title.text="Click to remove/add"),s.update()}loadDefaultData(){"restaurant-reviews"===this.activeTab?(this.chartData.labels=["3","4","2","5","1"],this.chartData.datasets[0].data=[60,30,5,3,2]):"cyberbullying"===this.activeTab&&(this.chartData.labels=["Ethnicity","Other Cyberbullying","Not Cyberbullying","Gender","Age","Religion"],this.chartData.datasets[0].data=[96.74,1.9,1.22,.09,.04,.01])}loadDataFromApi(){this.isLoading=!0,this.apiService.getModelResultById(1).subscribe(e=>{this.updateChartData(e),this.createChart(),this.isLoading=!1},e=>{console.error("API call failed, loading default data..."),this.loadDefaultData(),this.createChart(),this.isLoading=!1})}ngAfterViewInit(){this.loadDataFromApi()}ngOnChanges(){this.loadDataFromApi()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(U))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-accuracy"]],viewQuery:function(e,n){if(1&e&&r.Gf(Ce,5),2&e){let i;r.iGM(i=r.CRH())&&(n.chartCanvas=i.first)}},inputs:{text:"text",resultLabel:"resultLabel",activeTab:"activeTab"},outputs:{close:"close"},features:[r.TTD],decls:31,vars:9,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"background-blur"],[1,"accuracy-container"],["href","/home",1,"close-icon",3,"click"],["width","40","height","40","viewBox","0 0 40 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.96405 0.981748L20 15.0171L33.9632 1.05447C34.2717 0.726193 34.6432 0.463583 35.0556 0.282388C35.468 0.101192 35.9127 0.0051427 36.3632 0C37.3275 0 38.2524 0.383088 38.9344 1.06499C39.6163 1.74689 39.9994 2.67175 39.9994 3.6361C40.0079 4.0819 39.9252 4.52472 39.7563 4.9374C39.5875 5.35007 39.3361 5.7239 39.0176 6.03593L24.8726 19.9986L39.0176 34.143C39.6169 34.7293 39.9684 35.5232 39.9994 36.361C39.9994 37.3254 39.6163 38.2502 38.9344 38.9321C38.2524 39.614 37.3275 39.9971 36.3632 39.9971C35.8997 40.0163 35.4374 39.939 35.0054 39.77C34.5735 39.601 34.1814 39.344 33.8541 39.0154L20 24.98L6.00041 38.979C5.69317 39.2963 5.32612 39.5497 4.92045 39.7244C4.51478 39.8992 4.07852 39.9919 3.63685 39.9971C2.67245 39.9971 1.74756 39.614 1.06563 38.9321C0.383696 38.2502 0.000591643 37.3254 0.000591643 36.361C-0.00788627 35.9152 0.0748273 35.4724 0.243657 35.0597C0.412487 34.6471 0.663871 34.2732 0.982381 33.9612L15.1274 19.9986L0.982381 5.85412C0.383071 5.26784 0.0316439 4.4739 0.000591643 3.6361C0.000591643 2.67175 0.383696 1.74689 1.06563 1.06499C1.74756 0.383088 2.67245 0 3.63685 0C4.50955 0.0109083 5.34589 0.36361 5.96405 0.981748Z","fill","#E67829"],[1,"accuracy-title"],[1,"text-container"],[1,"text-label"],[1,"text"],[1,"model-text"],["class","loading-indicator",4,"ngIf"],[1,"donut-chart",3,"ngClass"],["chartCanvas",""],[1,"loading-indicator"],[1,"loading-dot"]],template:function(e,n){1&e&&(r.TgZ(0,"html",0)(1,"head"),r._UZ(2,"meta",1)(3,"meta",2),r.TgZ(4,"title"),r._uU(5,"Accuracy Report"),r.qZA()(),r.TgZ(6,"body")(7,"div",3)(8,"div",4)(9,"a",5),r.NdJ("click",function(){return n.close.emit()}),r.O4$(),r.TgZ(10,"svg",6),r._UZ(11,"path",7),r.qZA()(),r.kcU(),r.TgZ(12,"p",8),r._uU(13),r.ALo(14,"titlecase"),r.qZA(),r.TgZ(15,"div",9)(16,"p",10),r._uU(17,"Text: "),r.qZA(),r.TgZ(18,"p",11),r._uU(19),r.qZA()(),r.TgZ(20,"div",9)(21,"p",10),r._uU(22,"Predicted Label: "),r.qZA(),r.TgZ(23,"p",11),r._uU(24),r.qZA()(),r.TgZ(25,"p",12),r._uU(26,"Model with the best accuracy: "),r.qZA(),r.YNc(27,Te,5,0,"div",13),r.TgZ(28,"div",14),r._UZ(29,"canvas",null,15),r.qZA()()()()()),2&e&&(r.xp6(13),r.hij("",r.lcZ(14,5,"accuracy report")," "),r.xp6(6),r.Oqu(n.text),r.xp6(5),r.Oqu(n.resultLabel),r.xp6(3),r.Q6J("ngIf",n.isLoading),r.xp6(1),r.Q6J("ngClass",r.VKq(7,ke,"restaurant-reviews"===n.activeTab)))},dependencies:[C.mk,C.O5,C.rS],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0}.background-blur[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000073;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.accuracy-container[_ngcontent-%COMP%]{width:1228px;height:860px;border-radius:50px;background:#FFF;box-shadow:0 4px 4px #00000040;margin:35px auto;cursor:default}.close-icon[_ngcontent-%COMP%]{cursor:pointer;margin:0 0 0 1130px;padding-top:40px;display:flex}.accuracy-title[_ngcontent-%COMP%]{color:#e57829;display:flex;padding:0 0 0 60px;font-size:48px;font-weight:700;margin-top:20px}.text-container[_ngcontent-%COMP%]{display:flex;margin:-40px 60px}.text-label[_ngcontent-%COMP%]{color:#000;font-size:32px;font-weight:700;margin-right:10px}.text[_ngcontent-%COMP%]{color:#000;font-size:32px;font-weight:400}.model-text[_ngcontent-%COMP%]{color:#b1520d;font-size:36px;font-weight:700;margin:60px 0 -30px 60px}.loading-indicator[_ngcontent-%COMP%]{font-size:40px;text-align:center;font-weight:700;margin-top:18%;color:#e57829}.loading-dot[_ngcontent-%COMP%]{display:inline-block;width:8px;height:8px;margin-right:4px;background-color:#e57829;border-radius:50%;animation:_ngcontent-%COMP%_jump .5s infinite alternate}.loading-dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:.1s}.loading-dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:.2s}@keyframes _ngcontent-%COMP%_jump{to{transform:translateY(-10px)}}.donut-chart[_ngcontent-%COMP%]{width:80%;height:60%;margin:auto auto auto 200px;white-space:pre-line}.reviews-margin[_ngcontent-%COMP%]{margin:auto auto auto 150px}"]}),t})();const Me=["cyberbullyingInput"],Ie=["reviewsInput"];function Ae(t,a){1&t&&(r.TgZ(0,"div",17),r._uU(1,"This field is required"),r.qZA())}function Pe(t,a){1&t&&(r.TgZ(0,"p",18),r._uU(1,"Result"),r.qZA())}const K=function(t,a){return{"negative-result":t,"positive-result":a}};function Ze(t,a){if(1&t&&(r.TgZ(0,"p",19),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.Q6J("ngClass",r.WLB(2,K,e.isNotCyberbullying(e.cyberbullyingResult),!e.isNotCyberbullying(e.cyberbullyingResult))),r.xp6(1),r.Oqu(e.cyberbullyingResult)}}function Oe(t,a){if(1&t){const e=r.EpF();r.TgZ(0,"button",20),r.NdJ("click",function(){r.CHM(e);const i=r.oxw(2);return r.KtG(i.onShowAccuracyReport())}),r._uU(1,"Accuracy Report"),r.qZA()}}const X=function(t){return{"required-border":t}},ee=function(t,a){return{"background-color":t,color:a}};function De(t,a){if(1&t){const e=r.EpF();r.ynx(0),r.TgZ(1,"p",8),r._uU(2,"Checking for cyberbullying"),r.qZA(),r.TgZ(3,"div",9)(4,"input",10,11),r.NdJ("ngModelChange",function(i){r.CHM(e);const o=r.oxw();return r.KtG(o.cyberbullyingInputValue=i)})("click",function(){r.CHM(e);const i=r.oxw();return r.KtG(i.onFocusInput("cyberbullying"))}),r.qZA(),r.TgZ(6,"button",12),r.NdJ("click",function(){r.CHM(e);const i=r.oxw();return r.KtG(i.onCheckClick())}),r._uU(7,"Check"),r.qZA()(),r.YNc(8,Ae,2,0,"div",13),r.YNc(9,Pe,2,0,"p",14),r.YNc(10,Ze,2,5,"p",15),r.YNc(11,Oe,2,0,"button",16),r.BQk()}if(2&t){const e=r.oxw();r.xp6(4),r.Q6J("ngModel",e.cyberbullyingInputValue)("ngClass",r.VKq(7,X,e.cyberbullyingInputRequired))("ngStyle",r.WLB(9,ee,""===e.cyberbullyingInputValue&&e.cyberbullyingInputRequired?"#ffcccc":"#FFF3E9",""===e.cyberbullyingInputValue&&e.cyberbullyingInputRequired?"red":"inherit")),r.xp6(4),r.Q6J("ngIf",e.cyberbullyingInputRequired),r.xp6(1),r.Q6J("ngIf",e.showCyberbullyingResult),r.xp6(1),r.Q6J("ngIf",e.showCyberbullyingResult),r.xp6(1),r.Q6J("ngIf",e.showCyberbullyingResult)}}function Fe(t,a){1&t&&(r.TgZ(0,"div",17),r._uU(1,"This field is required"),r.qZA())}function He(t,a){1&t&&(r.TgZ(0,"p",18),r._uU(1,"Result"),r.qZA())}function Se(t,a){if(1&t&&(r.TgZ(0,"p",19),r._uU(1),r.qZA()),2&t){const e=r.oxw(2);r.Q6J("ngClass",r.WLB(2,K,e.isNegativeReview(e.reviewsResult),!e.isNegativeReview(e.reviewsResult))),r.xp6(1),r.Oqu(e.reviewsResult)}}function qe(t,a){if(1&t){const e=r.EpF();r.TgZ(0,"button",20),r.NdJ("click",function(){r.CHM(e);const i=r.oxw(2);return r.KtG(i.onShowAccuracyReport())}),r._uU(1,"Accuracy Report"),r.qZA()}}function Ee(t,a){if(1&t){const e=r.EpF();r.ynx(0),r.TgZ(1,"p",8),r._uU(2,"Rating Review"),r.qZA(),r.TgZ(3,"div",9)(4,"input",21,22),r.NdJ("ngModelChange",function(i){r.CHM(e);const o=r.oxw();return r.KtG(o.reviewsInputValue=i)})("click",function(){r.CHM(e);const i=r.oxw();return r.KtG(i.onFocusInput("restaurant-reviews"))}),r.qZA(),r.TgZ(6,"button",12),r.NdJ("click",function(){r.CHM(e);const i=r.oxw();return r.KtG(i.onRateClick())}),r._uU(7,"Rate"),r.qZA()(),r.YNc(8,Fe,2,0,"div",13),r.YNc(9,He,2,0,"p",14),r.YNc(10,Se,2,5,"p",15),r.YNc(11,qe,2,0,"button",16),r.BQk()}if(2&t){const e=r.oxw();r.xp6(4),r.Q6J("ngModel",e.reviewsInputValue)("ngClass",r.VKq(7,X,e.reviewsInputRequired))("ngStyle",r.WLB(9,ee,""===e.reviewsInputValue&&e.reviewsInputRequired?"#ffcccc":"#FFF3E9",""===e.reviewsInputValue&&e.reviewsInputRequired?"red":"inherit")),r.xp6(4),r.Q6J("ngIf",e.reviewsInputRequired),r.xp6(1),r.Q6J("ngIf",e.showReviewsResult),r.xp6(1),r.Q6J("ngIf",e.showReviewsResult),r.xp6(1),r.Q6J("ngIf",e.showReviewsResult)}}function Le(t,a){if(1&t){const e=r.EpF();r.TgZ(0,"app-accuracy",23),r.NdJ("close",function(){r.CHM(e);const i=r.oxw();return r.KtG(i.onHideAccuracyReport())}),r.qZA()}if(2&t){const e=r.oxw();r.Q6J("text","cyberbullying"===e.activeTab?e.cyberbullyingInput.nativeElement.value:e.reviewsInput.nativeElement.value)("resultLabel","cyberbullying"===e.activeTab?e.cyberbullyingResult:e.reviewsResult)("activeTab",e.activeTab)}}const Ne=[{path:"",component:(()=>{class t{constructor(e){this.apiService=e,this.activeTab="cyberbullying",this.cyberbullyingResult="Cyberbullying - Gender",this.reviewsResult="Positive - 4",this.showAccuracyReport=!1,this.showCyberbullyingResult=!1,this.showReviewsResult=!1,this.cyberbullyingInputValue="",this.reviewsInputValue="",this.cyberbullyingInputRequired=!1,this.reviewsInputRequired=!1}ngOnInit(){this.loadLabelResults()}loadLabelResults(){this.apiService.getModelResultById(1).subscribe(e=>{for(var n=0;n<e.labels.length;n++)isNaN(parseFloat(e.labels[n].label))?this.cyberbullyingResult=e.labels[n].label:this.reviewsResult=e.labels[n].label})}ngAfterViewInit(){this.loadLabelResults(),this.focusInputBasedOnTab()}setActiveTab(e){this.activeTab=e,this.focusInputBasedOnTab()}onShowAccuracyReport(){this.showAccuracyReport=!0}onHideAccuracyReport(){this.showAccuracyReport=!1}onCheckClick(){""===this.cyberbullyingInputValue?this.cyberbullyingInputRequired=!0:(this.showCyberbullyingResult=!0,this.cyberbullyingInputRequired=!1,this.apiService.insertTextResult(this.cyberbullyingInputValue).subscribe(e=>{console.log("Text Result inserted:",e)},e=>{console.error("Error inserting Text Result:",e)}))}onRateClick(){""===this.reviewsInputValue?this.reviewsInputRequired=!0:(this.showReviewsResult=!0,this.reviewsInputRequired=!1,this.apiService.insertTextResult(this.reviewsInputValue).subscribe(e=>{console.log("Text Result inserted:",e)},e=>{console.error("Error inserting Text Result:",e)}))}onFocusInput(e){"cyberbullying"===e?this.cyberbullyingInputRequired=!1:"restaurant-reviews"===e&&(this.reviewsInputRequired=!1)}focusInputBasedOnTab(){setTimeout(()=>{"cyberbullying"===this.activeTab?this.cyberbullyingInput.nativeElement.focus():"restaurant-reviews"===this.activeTab&&this.reviewsInput.nativeElement.focus()})}isNotCyberbullying(e){return e.toLowerCase().includes("not cyberbullying")}isNegativeReview(e){return e.toLowerCase().includes("positive")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(U))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&(r.Gf(Me,5),r.Gf(Ie,5)),2&e){let i;r.iGM(i=r.CRH())&&(n.cyberbullyingInput=i.first),r.iGM(i=r.CRH())&&(n.reviewsInput=i.first)}},decls:16,vars:11,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"tab-container"],[1,"tab-button",3,"click"],[1,"info-container"],[4,"ngIf"],[3,"text","resultLabel","activeTab","close",4,"ngIf"],[1,"label"],[1,"input-container"],["type","text","placeholder","Example text",1,"input-text",3,"ngModel","ngClass","ngStyle","ngModelChange","click"],["cyberbullyingInput",""],[1,"check-button",3,"click"],["class","text-empty",4,"ngIf"],["class","result-label",4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","accuracy-button",3,"click",4,"ngIf"],[1,"text-empty"],[1,"result-label"],[3,"ngClass"],[1,"accuracy-button",3,"click"],["type","text","placeholder","Example review",1,"input-text",3,"ngModel","ngClass","ngStyle","ngModelChange","click"],["reviewsInput",""],[3,"text","resultLabel","activeTab","close"]],template:function(e,n){1&e&&(r.TgZ(0,"html",0)(1,"head"),r._UZ(2,"meta",1)(3,"meta",2),r.TgZ(4,"title"),r._uU(5,"SamurAI"),r.qZA()(),r.TgZ(6,"body")(7,"div",3)(8,"button",4),r.NdJ("click",function(){return n.setActiveTab("cyberbullying")}),r._uU(9," CyberBullying "),r.qZA(),r.TgZ(10,"button",4),r.NdJ("click",function(){return n.setActiveTab("restaurant-reviews")}),r._uU(11," Restaurant Reviews "),r.qZA()(),r.TgZ(12,"div",5),r.YNc(13,De,12,12,"ng-container",6),r.YNc(14,Ee,12,12,"ng-container",6),r.qZA(),r.YNc(15,Le,1,3,"app-accuracy",7),r.qZA()()),2&e&&(r.xp6(8),r.ekj("active","cyberbullying"===n.activeTab)("slide-out","cyberbullying"===n.activeTab),r.xp6(2),r.ekj("active","restaurant-reviews"===n.activeTab)("slide","restaurant-reviews"===n.activeTab),r.xp6(3),r.Q6J("ngIf","cyberbullying"===n.activeTab),r.xp6(1),r.Q6J("ngIf","restaurant-reviews"===n.activeTab),r.xp6(1),r.Q6J("ngIf",n.showAccuracyReport))},dependencies:[C.mk,C.O5,C.PC,S.Fj,S.JJ,S.On,Re],styles:['.tab-container[_ngcontent-%COMP%]{width:965px;height:124px;border-radius:72px;background:#FFF;box-shadow:0 4px 4px #49230040;display:flex;margin:20px auto -10px}.tab-button[_ngcontent-%COMP%]{color:#888;font-size:36px;font-weight:700;background:transparent;border:none;cursor:pointer;margin:auto}.tab-button.active[_ngcontent-%COMP%]{color:#e57829;font-size:36px;font-weight:700;background:transparent;border:none;position:relative;transition:all .3s ease-in-out,transform .3s ease-in-out;transform:scale(1.05)}.tab-button.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-10px;left:0;width:100%;height:6px;background:#e57829;filter:drop-shadow(0px 4px 4px rgba(0,0,0,.25));border-radius:30px}.tab-button.slide[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_slide .3s ease-in-out}@keyframes _ngcontent-%COMP%_slide{0%{transform:translate(-100%)}to{transform:translate(0)}}.tab-button.slide-out[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_slide-out .3s ease-in-out;transform:translate(0)}@keyframes _ngcontent-%COMP%_slide-out{0%{transform:translate(100%)}to{transform:translate(0)}}.info-container[_ngcontent-%COMP%]{width:1228px;height:590px;border-radius:50px;background:#FFF;box-shadow:0 4px 4px #00000040;margin:auto;cursor:default}.label[_ngcontent-%COMP%]{color:#b1520d;font-size:36px;font-weight:700;margin-left:80px;padding-top:40px}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-text[_ngcontent-%COMP%]{width:1067px;height:81px;border-radius:75px;border:1px solid #000;background:#FFF3E9;color:#000;font-size:36px;font-weight:400;margin:auto;text-indent:40px}.required-border[_ngcontent-%COMP%]{border:2px solid red}.text-empty[_ngcontent-%COMP%]{color:red;font-size:20px;font-weight:700;margin:10px 0 0 80px}.text-empty.ng-hide[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.check-button[_ngcontent-%COMP%]{width:156px;height:60px;border-radius:75px;background:#E57829;box-shadow:0 4px 4px #00000040;color:#fff;text-shadow:0px 4px 4px rgba(0,0,0,.25);font-size:36px;font-weight:700;cursor:pointer;position:absolute;right:450px}.result-label[_ngcontent-%COMP%]{color:#b1520d;font-size:45px;font-weight:700;margin-left:80px;margin-top:30px}.negative-result[_ngcontent-%COMP%]{color:#099517!important;font-size:48px;font-weight:700;text-shadow:0px 4px 4px rgba(73,35,0,.25);text-align:center;margin-top:-20px}.positive-result[_ngcontent-%COMP%]{color:#c73232!important;font-size:48px;font-weight:700;text-shadow:0px 4px 4px rgba(73,35,0,.25);text-align:center;margin-top:-20px}.accuracy-button[_ngcontent-%COMP%]{width:239px;height:110px;color:#fff;text-align:center;text-shadow:0px 4px 4px rgba(0,0,0,.25);font-size:36px;font-weight:700;border-radius:20px;border:none;background:#E57829;box-shadow:0 -4px 4px #00000040 inset;display:flex;align-items:center;cursor:pointer;margin:auto}']}),t})()}];let Ue=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[N.Bz.forChild(Ne),N.Bz]}),t})()}}]);