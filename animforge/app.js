(()=>{var Gm=Object.defineProperty;var jn=(i,e)=>()=>(i&&(e=i(i=0)),e);var Gs=(i,e)=>{for(var t in e)Gm(i,t,{get:e[t],enumerable:!0})};function Vm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ep(){let i=no("canvas");return i.style.display="block",i}function Dh(...i){let e="THREE."+i.shift();lr?lr("log",e,...i):console.log(e,...i)}function tp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=tp(i);let e="THREE."+i.shift();if(lr)lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=tp(i);let e="THREE."+i.shift();if(lr)lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kr(...i){let e=i.join(" ");e in Hd||(Hd[e]=!0,Ie(...i))}function np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function As(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Nh(i,e){return(i%e+e)%e}function Xm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jm(i,e,t){return i!==e?(t-i)/(e-i):0}function Qr(i,e,t){return(1-t)*i+t*e}function Ym(i,e,t,n){return Qr(i,e,1-Math.exp(-t*n))}function qm(i,e=1){return e-Math.abs(Nh(i,e*2)-e)}function Zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Km(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jm(i,e){return i+Math.random()*(e-i)}function Qm(i){return i*(.5-Math.random())}function e0(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t0(i){return i*Jr}function n0(i){return i*cr}function i0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function s0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(i,e){if(e.constructor===Float32Array)return i;let t=Fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function rp(i,e){if(e.constructor===Float32Array)return i;let t=Fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function o0(){let i={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[eo]:{primaries:e,whitePoint:n,transfer:to,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}function kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Yc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=e.dot(ds),l=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function S0(i,e,t,n,s,r,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ci,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ma),i.getVertexPosition(c,Sa),i.getVertexPosition(l,ba);let h=S0(i,e,t,n,Ma,Sa,ba,nf);if(h){let u=new P;Wi.getBarycoord(nf,Ma,Sa,ba,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,c,l,u,new Re)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,c,l,u,new Re)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};Wi.getNormal(Ma,Sa,ba,d.normal),h.face=d,h.barycoord=u}return h}function Ia(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Xa.fromBufferAttribute(a,s),ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Xa,ja,Qc,lf)>n)return;Qc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:lf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(uf(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(uf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function uf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function E0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}function Vi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function R0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function df(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function C0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function lp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function I0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function P0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=lp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=I0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}function ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function pf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function L0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return Mo;case"quaternion":return $i;case"bool":case"boolean":return Ii;case"string":return Pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function D0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=L0(i.type);if(i.times===void 0){let n=[],s=[];C0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),$r(i.settings)&&(t.settings={inTangents:Vi(i.settings.inTangents,Float32Array),outTangents:Vi(i.settings.outTangents,Float32Array)}),t}function vf(i,e){return i.distance-e.distance}function lh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)lh(r[o],e,t,!0)}}function zh(i,e,t,n){let s=G0(n);switch(t){case Ah:return i*e;case fl:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case es:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case Rh:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Io:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:case vl:return Math.max(i,16)*Math.max(e,8)/4;case _l:case yl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case Sl:case wl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:case No:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uo:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(i){switch(i){case vn:case bh:return{byteLength:1,components:1};case br:case wh:case ti:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case ei:case hl:case Hn:return{byteLength:4,components:1};case Eh:case Th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var xr,Ji,Qi,Mf,hh,Sf,Ms,bf,yr,ci,on,pn,Ss,vr,uh,dh,fh,wf,bs,Ef,Tf,Af,Rf,Cf,If,Pf,Lf,ph,mh,Df,Nf,Uf,Ff,Of,Bf,kf,zf,Hf,Ua,Fa,Oa,ir,Ba,ka,za,Ha,ol,Gf,Vf,hi,gh,_h,xh,Co,yh,vh,Mh,Sh,ws,Mr,al,ll,sr,Bn,rr,Bt,cl,Es,sn,Sr,Qn,vn,bh,wh,br,hl,ei,Hn,ti,ul,dl,Ts,Eh,Th,Ah,Rh,In,Ei,Li,fl,pl,es,ml,gl,Io,Po,Lo,Do,_l,xl,yl,vl,Ml,Sl,bl,wl,El,No,Tl,Al,Rl,Cl,Il,Pl,Ll,Dl,Nl,Ul,Fl,Ol,Bl,kl,zl,Hl,Gl,Vl,Wl,Xl,Uo,jl,ms,or,Da,th,nh,ih,sh,Wf,Xf,Fo,jf,ni,Qt,eo,to,ot,Na,Yf,qf,Zf,$f,Ch,Kf,Jf,Ih,Ph,Qf,Lh,kn,ar,Hd,lr,ip,$n,hn,Gd,Jr,cr,Rs,Hh,Re,it,Gh,P,Nc,Vd,Vh,Oe,Uc,Wd,Xd,Ke,Vs,hr,a0,Ti,l0,Oc,fn,Wh,St,Ga,Rn,io,Va,rl,Je,Ws,Yn,c0,h0,Bi,ua,En,jd,Yd,rn,ur,u0,qd,Xs,xi,da,Vr,d0,f0,Zd,$d,Kd,Jd,p0,js,Bc,_t,bi,m0,dr,op,ki,fa,He,un,oi,qn,yi,zc,vi,Ys,qs,Qd,Hc,Gc,Vc,Wc,Xc,jc,Wi,Vt,Mi,Zn,pa,Zs,$s,Ks,zi,Hi,us,Wr,ma,ga,ds,Ft,_a,g0,Ot,so,ro,Xe,_0,Xr,qc,Ai,x0,On,Zc,Js,Tn,jr,Jt,kt,$c,y0,v0,An,M0,Kn,Si,Kc,xa,ya,Xi,Ri,ef,fs,va,tf,Ma,Sa,ba,Jc,wa,nf,Ea,oe,oo,ao,Qs,sf,Aa,rf,b0,Yr,qr,lo,ps,w0,Ra,ji,of,Wa,gs,Xa,ja,af,Zr,Ca,Qc,lf,Cn,cf,hf,Ya,Yi,co,fr,Ci,ho,uo,ft,fo,po,Pt,mo,go,_o,qi,zn,_s,Jn,xo,yo,ap,T0,A0,ai,qa,li,vo,Za,$a,Zi,Ka,Ja,Qa,el,yn,Ii,Mo,pr,tl,$i,Pi,Ki,So,nl,cp,il,mr,bo,eh,mf,gf,wo,Pa,La,ri,Eo,Gi,_f,xf,dn,rh,To,Ao,oh,xs,er,tr,gr,sl,Bh,N0,kh,U0,F0,O0,B0,k0,z0,H0,ah,rt,WM,yf,ys,_r,Xh,ch,Ro,vs,jh=jn(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */xr="187",Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,hh=1,Sf=2,Ms=1,bf=2,yr=3,ci=0,on=1,pn=2,Ss=0,vr=1,uh=2,dh=3,fh=4,wf=5,bs=100,Ef=101,Tf=102,Af=103,Rf=104,Cf=200,If=201,Pf=202,Lf=203,ph=204,mh=205,Df=206,Nf=207,Uf=208,Ff=209,Of=210,Bf=211,kf=212,zf=213,Hf=214,Ua=0,Fa=1,Oa=2,ir=3,Ba=4,ka=5,za=6,Ha=7,ol=0,Gf=1,Vf=2,hi=0,gh=1,_h=2,xh=3,Co=4,yh=5,vh=6,Mh=7,Sh=300,ws=301,Mr=302,al=303,ll=304,sr=1e3,Bn=1001,rr=1002,Bt=1003,cl=1004,Es=1005,sn=1006,Sr=1007,Qn=1008,vn=1009,bh=1010,wh=1011,br=1012,hl=1013,ei=1014,Hn=1015,ti=1016,ul=1017,dl=1018,Ts=1020,Eh=35902,Th=35899,Ah=1021,Rh=1022,In=1023,Ei=1026,Li=1027,fl=1028,pl=1029,es=1030,ml=1031,gl=1033,Io=33776,Po=33777,Lo=33778,Do=33779,_l=35840,xl=35841,yl=35842,vl=35843,Ml=36196,Sl=37492,bl=37496,wl=37488,El=37489,No=37490,Tl=37491,Al=37808,Rl=37809,Cl=37810,Il=37811,Pl=37812,Ll=37813,Dl=37814,Nl=37815,Ul=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,Hl=36492,Gl=36494,Vl=36495,Wl=36283,Xl=36284,Uo=36285,jl=36286,ms=2300,or=2301,Da=2302,th=2303,nh=2400,ih=2401,sh=2402,Wf=2500,Xf=3200,Fo=0,jf=1,ni="",Qt="srgb",eo="srgb-linear",to="linear",ot="srgb",Na=7680,Yf=519,qf=512,Zf=513,$f=514,Ch=515,Kf=516,Jf=517,Ih=518,Ph=519,Qf=35044,Lh="300 es",kn=2e3,ar=2001;Hd={},lr=null;ip={[Ua]:Ua,[Oa]:za,[Ba]:Ba,[ir]:ka,[Fa]:Fa,[za]:Oa,[Ha]:Ha,[ka]:ir},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,Jr=Math.PI/180,cr=180/Math.PI;Rs={DEG2RAD:Jr,RAD2DEG:cr,generateUUID:As,clamp:je,euclideanModulo:Nh,mapLinear:Xm,inverseLerp:jm,lerp:Qr,damp:Ym,pingpong:qm,smoothstep:Zm,smootherstep:$m,randInt:Km,randFloat:Jm,randFloatSpread:Qm,seededRandom:e0,degToRad:t0,radToDeg:n0,isPowerOfTwo:i0,ceilPowerOfTwo:s0,floorPowerOfTwo:Uh,setQuaternionFromProperEuler:r0,normalize:rp,denormalize:sp},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;Re=Hh,it=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);m=Math.sin(m*v)/w,a=Math.sin(a*v)/w,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gh=class Gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;P=Gh,Nc=new P,Vd=new it,Vh=class Vh{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],w=s[4],y=s[7],T=s[2],E=s[5],_=s[8];return r[0]=o*x+a*v+c*T,r[3]=o*p+a*w+c*E,r[6]=o*m+a*y+c*_,r[1]=l*x+h*v+u*T,r[4]=l*p+h*w+u*E,r[7]=l*m+h*y+u*_,r[2]=d*x+f*v+g*T,r[5]=d*p+f*w+g*E,r[8]=d*m+f*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;Oe=Vh,Uc=new Oe,Wd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=o0();hr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=no("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,Ti=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l0=0,Oc=new P,fn=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=sn,o=Qn,a=In,c=vn,l=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=As(),this.name="",this.source=new Ti(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Sh;fn.DEFAULT_ANISOTROPY=1;Wh=class Wh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,T=(m+1)/2,E=(h+d)/4,_=(u+x)/4,b=(g+p)/4;return w>y&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=_/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;St=Wh,Ga=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new fn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ti(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},io=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Va=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rl=class rl{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,h0)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Bi.crossVectors(n,En),Bi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Bi.crossVectors(n,En)),Bi.normalize(),ua.crossVectors(En,Bi),s[0]=Bi.x,s[4]=ua.x,s[8]=En.x,s[1]=Bi.y,s[5]=ua.y,s[9]=En.y,s[2]=Bi.z,s[6]=ua.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=s[0],_=s[4],b=s[8],D=s[12],C=s[1],N=s[5],B=s[9],I=s[13],A=s[2],O=s[6],j=s[10],z=s[14],te=s[3],W=s[7],J=s[11],ee=s[15];return r[0]=o*E+a*C+c*A+l*te,r[4]=o*_+a*N+c*O+l*W,r[8]=o*b+a*B+c*j+l*J,r[12]=o*D+a*I+c*z+l*ee,r[1]=h*E+u*C+d*A+f*te,r[5]=h*_+u*N+d*O+f*W,r[9]=h*b+u*B+d*j+f*J,r[13]=h*D+u*I+d*z+f*ee,r[2]=g*E+x*C+p*A+m*te,r[6]=g*_+x*N+p*O+m*W,r[10]=g*b+x*B+p*j+m*J,r[14]=g*D+x*I+p*z+m*ee,r[3]=v*E+w*C+y*A+T*te,r[7]=v*_+w*N+y*O+T*W,r[11]=v*b+w*B+y*j+T*J,r[15]=v*D+w*I+y*z+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],v=c*f-l*d,w=a*f-l*u,y=a*d-c*u,T=o*f-l*h,E=o*d-c*h,_=o*u-a*h;return t*(x*v-p*w+m*y)-n*(g*v-p*T+m*E)+s*(g*w-x*T+m*_)-r*(g*y-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=t*a-n*o,w=t*c-s*o,y=t*l-r*o,T=n*c-s*a,E=n*l-r*a,_=s*l-r*c,b=h*x-u*g,D=h*p-d*g,C=h*m-f*g,N=u*p-d*x,B=u*m-f*x,I=d*m-f*p,A=v*I-w*B+y*N+T*C-E*D+_*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/A;return e[0]=(a*I-c*B+l*N)*O,e[1]=(s*B-n*I-r*N)*O,e[2]=(x*_-p*E+m*T)*O,e[3]=(d*E-u*_-f*T)*O,e[4]=(c*C-o*I-l*D)*O,e[5]=(t*I-s*C+r*D)*O,e[6]=(p*y-g*_-m*w)*O,e[7]=(h*_-d*y+f*w)*O,e[8]=(o*B-a*C+l*b)*O,e[9]=(n*C-t*B-r*b)*O,e[10]=(g*E-x*y+m*v)*O,e[11]=(u*y-h*E-f*v)*O,e[12]=(a*D-o*N-c*b)*O,e[13]=(t*N-n*D+s*b)*O,e[14]=(x*w-g*T-p*v)*O,e[15]=(h*T-u*w+d*v)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=c*l,w=c*h,y=c*u,T=n.x,E=n.y,_=n.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+w)*_,s[9]=(p-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),c=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yn.copy(this);let l=1/o,h=1/a,u=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=kn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===kn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ar)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===kn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ar)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};rl.prototype.isMatrix4=!0;Je=rl,Ws=new P,Yn=new Je,c0=new P(0,0,0),h0=new P(1,1,1),Bi=new P,ua=new P,En=new P,jd=new Je,Yd=new it,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,qd=new P,Xs=new it,xi=new Je,da=new P,Vr=new P,d0=new P,f0=new it,Zd=new P(1,0,0),$d=new P(0,1,0),Kd=new P(0,0,1),Jd={type:"added"},p0={type:"removed"},js={type:"childadded",child:null},Bc={type:"childremoved",child:null},_t=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new rn,n=new it,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Oe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Vr,da,this.up):xi.lookAt(da,Vr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(xi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),js.child=e,this.dispatchEvent(js),js.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;bi=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},fa={h:0,s:0,l:0};He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Nh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ke.workingToColorSpace(un.copy(this),e),Math.round(je(un.r*255,0,255))*65536+Math.round(je(un.g*255,0,255))*256+Math.round(je(un.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(un.copy(this),t);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Qt){Ke.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,s=un.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(fa);let n=Qr(ki.h,fa.h,t),s=Qr(ki.s,fa.s,t),r=Qr(ki.l,fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new He;He.NAMES=op;oi=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new P,yi=new P,zc=new P,vi=new P,Ys=new P,qs=new P,Qd=new P,Hc=new P,Gc=new P,Vc=new P,Wc=new St,Xc=new St,jc=new St,Wi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),yi.subVectors(n,t),zc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(yi),c=qn.dot(zc),l=yi.dot(yi),h=yi.dot(zc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wc.setScalar(0),Xc.setScalar(0),jc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Xc,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),yi.subVectors(e,t),qn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),qs.subVectors(r,n),Hc.subVectors(e,n);let c=Ys.dot(Hc),l=qs.dot(Hc);if(c<=0&&l<=0)return t.copy(n);Gc.subVectors(e,s);let h=Ys.dot(Gc),u=qs.dot(Gc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Ys,o);Vc.subVectors(e,r);let f=Ys.dot(Vc),g=qs.dot(Vc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Qd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Qd,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ys,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),ma.subVectors(this.max,Wr),Zs.subVectors(e.a,Wr),$s.subVectors(e.b,Wr),Ks.subVectors(e.c,Wr),zi.subVectors($s,Zs),Hi.subVectors(Ks,$s),us.subVectors(Zs,Ks);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-us.z,us.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,us.z,0,-us.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-us.y,us.x,0];return!Yc(t,Zs,$s,Ks,ma)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Zs,$s,Ks,ma))?!1:(ga.crossVectors(zi,Hi),t=[ga.x,ga.y,ga.z],Yc(t,Zs,$s,Ks,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new P,new P,new P,new P,new P,new P,new P,new P],Zn=new P,pa=new Vt,Zs=new P,$s=new P,Ks=new P,zi=new P,Hi=new P,us=new P,Wr=new P,ma=new P,ga=new P,ds=new P;Ft=new P,_a=new Re,g0=0,Ot=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qf,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=e!==void 0?Fh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.array)}},so=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ro=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Xe=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},_0=new Vt,Xr=new P,qc=new P,Ai=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(qc)),this.expandByPoint(Xr.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},x0=0,On=new Je,Zc=new _t,Js=new P,Tn=new Vt,jr=new Vt,Jt=new P,kt=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?ro:so)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Tn.min,jr.min),Tn.expandByPoint(Jt),Jt.addVectors(Tn.max,jr.max),Tn.expandByPoint(Jt)):(Tn.expandByPoint(jr.min),Tn.expandByPoint(jr.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Jt.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),Jt.add(Js)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;let h=new P,u=new P,d=new P,f=new Re,g=new Re,x=new Re,p=new P,m=new P;function v(D,C,N){l[D]=l[C]=l[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(B),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(B),a[D].add(p),a[C].add(p),a[N].add(p),c[D].add(m),c[C].add(m),c[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,C=w.length;D<C;++D){let N=w[D],B=N.start,I=N.count;for(let A=B,O=B+I;A<O;A+=3)v(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let y=new P,T=new P,E=new P,_=new P;function b(D){E.fromBufferAttribute(s,D),_.copy(E);let C=a[D];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(_,C);let B=T.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,B)}for(let D=0,C=n.count;D<C;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ot(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new P,y0=new P,v0=new Oe,An=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||v0.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},M0=0,Kn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=As(),this.name="",this.type="Material",this.blending=vr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Si=new P,Kc=new P,xa=new P,ya=new P,Xi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kc.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(Kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=ya.dot(this.direction),c=-ya.dot(xa),l=ya.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Kc).addScaledVector(xa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(c),T=Math.abs(l),E=Math.abs(h),_,b,D,C,N,B,I,A,O,j,z,te;if(y>=T&&y>=E?(D=c,B=u,O=g,te=m,c>=0?(_=l,b=h,C=d,N=f,I=x,A=p,j=v,z=w):(_=h,b=l,C=f,N=d,I=p,A=x,j=w,z=v)):T>=E?(D=l,B=d,O=x,te=v,l>=0?(_=h,b=c,C=f,N=u,I=p,A=g,j=w,z=m):(_=c,b=h,C=u,N=f,I=g,A=p,j=m,z=w)):(D=h,B=f,O=p,te=w,h>=0?(_=c,b=l,C=u,N=d,I=g,A=x,j=m,z=v):(_=l,b=c,C=d,N=u,I=x,A=g,j=v,z=m)),D===0)return null;let W=_/D,J=b/D,ee=1/D,Me=C-W*B,De=N-J*B,q=I-W*O,ue=A-J*O,be=j-W*te,Pe=z-J*te,xe=be*ue-Pe*q,ze=Me*Pe-De*be,Nt=q*De-ue*Me;if(s){if(xe<0||ze<0||Nt<0)return null}else if((xe<0||ze<0||Nt<0)&&(xe>0||ze>0||Nt>0))return null;let Ue=xe+ze+Nt;if(Ue===0)return null;let ct=ee*(xe*B+ze*O+Nt*te);return(Ue>0?ct<0:ct>0)?null:this.at(ct/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ri=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ef=new Je,fs=new Xi,va=new Ai,tf=new P,Ma=new P,Sa=new P,ba=new P,Jc=new P,wa=new P,nf=new P,Ea=new P,oe=class extends _t{constructor(e=new kt,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,e),o?wa.addScaledVector(Jc,h):wa.addScaledVector(Jc.sub(t),h))}t.add(wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(va.containsPoint(fs.origin)===!1&&(fs.intersectSphere(va,tf)===null||fs.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),fs.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=Ta(this,m,e,n,l,h,u,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=Ta(this,o,e,n,l,h,u,v,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=w;y<T;y+=3){let E=y,_=y+1,b=y+2;s=Ta(this,m,e,n,l,h,u,E,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,w=p+1,y=p+2;s=Ta(this,o,e,n,l,h,u,v,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};oo=class extends fn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bt,h=Bt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ao=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new Je,sf=new Je,Aa=[],rf=new Vt,b0=new Je,Yr=new oe,qr=new Ai,lo=class extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),rf.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),qr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),sf.multiplyMatrices(n,Qs),Yr.matrixWorld=sf,Yr.raycast(e,Aa);for(let o=0,a=Aa.length;o<a;o++){let c=Aa[o];c.instanceId=r,c.object=this,t.push(c)}Aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(s*this.count),s,this.count,fl,Hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new Ai,w0=new Re(.5,.5),Ra=new P,ji=class{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,m-g,T-v).normalize(),s[1].setComponents(l+o,f+h,m+g,T+v).normalize(),s[2].setComponents(l+a,f+u,m+x,T+w).normalize(),s[3].setComponents(l-a,f-u,m-x,T-w).normalize(),n)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,f-d,m-p,T-y).normalize();else if(s[4].setComponents(l-c,f-d,m-p,T-y).normalize(),t===kn)s[5].setComponents(l+c,f+d,m+p,T+y).normalize();else if(t===ar)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=w0.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},of=new Je,Wa=class i{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];of.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ji),n[s].setFromProjectionMatrix(of,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ji),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},gs=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xa=new P,ja=new P,af=new Je,Zr=new Xi,Ca=new Ai,Qc=new P,lf=new P,Cn=class extends _t{constructor(e=new kt,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xa.fromBufferAttribute(t,s-1),ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(ja);e.setAttribute("lineDistance",new Xe(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;af.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),v=h.getX(x+1),w=Ia(this,e,Zr,c,m,v,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=Ia(this,e,Zr,c,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=Ia(this,e,Zr,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ia(this,e,Zr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};cf=new P,hf=new P,Ya=class extends Cn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cf.fromBufferAttribute(t,s),hf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cf.distanceTo(hf);e.setAttribute("lineDistance",new Xe(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yi=class extends fn{constructor(e=[],t,n,s,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},co=class extends fn{constructor(e=[],t=ws,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fr=class extends fn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ci=class extends fn{constructor(e,t,n=ei,s,r,o,a=Bt,c=Bt,l,h=Ei,u=1){if(h!==Ei&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ti(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ho=class extends Ci{constructor(e,t=ei,n=ws,s,r,o=Bt,a=Bt,c,l=Ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ft=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(x,p,m,v,w,y,T,E,_,b,D){let C=y/_,N=T/b,B=y/2,I=T/2,A=E/2,O=_+1,j=b+1,z=0,te=0,W=new P;for(let J=0;J<j;J++){let ee=J*N-I;for(let Me=0;Me<O;Me++){let De=Me*C-B;W[x]=De*v,W[p]=ee*w,W[m]=A,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(Me/_),u.push(1-J/b),z+=1}}for(let J=0;J<b;J++)for(let ee=0;ee<_;ee++){let Me=d+ee+O*J,De=d+ee+O*(J+1),q=d+(ee+1)+O*(J+1),ue=d+(ee+1)+O*J;c.push(Me,De,ue),c.push(De,q,ue),te+=6}a.addGroup(f,te,D),f+=te,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fo=class i extends kt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=s+1,p=new P,m=new P;for(let v=0;v<=g;v++){let w=0,y=0,T=0,E=0;if(v<=n){let D=v/n,C=D*Math.PI/2;y=-h-e*Math.cos(C),T=e*Math.sin(C),E=-e*Math.cos(C),w=D*u}else if(v<=n+r){let D=(v-n)/r;y=-h+D*t,T=e,E=0,w=u+D*d}else{let D=(v-n-r)/n,C=D*Math.PI/2;y=h+e*Math.sin(C),T=e*Math.cos(C),E=e*Math.sin(C),w=u+d+D*u}let _=Math.max(0,Math.min(1,w/f)),b=0;v===0?b=.5/s:v===g&&(b=-.5/s);for(let D=0;D<=s;D++){let C=D/s,N=C*Math.PI*2,B=Math.sin(N),I=Math.cos(N);m.x=-T*I,m.y=y,m.z=T*B,a.push(m.x,m.y,m.z),p.set(-T*I,E,T*B),p.normalize(),c.push(p.x,p.y,p.z),l.push(C+b,_)}if(v>0){let D=(v-1)*x;for(let C=0;C<s;C++){let N=D+C,B=D+C+1,I=v*x+C,A=v*x+C+1;o.push(N,B,I),o.push(B,A,I)}}}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},po=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new Re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pt=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function v(){let y=new P,T=new P,E=0,_=(t-e)/n;for(let b=0;b<=r;b++){let D=[],C=b/r,N=C*(t-e)+e;for(let B=0;B<=s;B++){let I=B/s,A=I*c+a,O=Math.sin(A),j=Math.cos(A);T.x=N*O,T.y=-C*n+p,T.z=N*j,u.push(T.x,T.y,T.z),y.set(O,_,j).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-C),D.push(g++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let C=x[D][b],N=x[D+1][b],B=x[D+1][b+1],I=x[D][b+1];(e>0||D!==0)&&(h.push(C,N,I),E+=3),(t>0||D!==r-1)&&(h.push(N,B,I),E+=3)}l.addGroup(m,E,0),m+=E}function w(y){let T=g,E=new Re,_=new P,b=0,D=y===!0?e:t,C=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let A=B/s*c+a,O=Math.cos(A),j=Math.sin(A);_.x=D*j,_.y=p*C,_.z=D*O,u.push(_.x,_.y,_.z),d.push(0,C,0),E.x=O*.5+.5,E.y=j*.5*C+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let I=T+B,A=N+B;y===!0?h.push(A,A+1,I):h.push(A+1,A,I),b+=3}l.addGroup(m,b,y===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class i extends Pt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},go=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new P,y=new P,T=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],y),f(t[E+2],T),c(w,y,T,v)}function c(v,w,y,T){let E=T+1,_=[];for(let b=0;b<=E;b++){_[b]=[];let D=v.clone().lerp(y,b/E),C=w.clone().lerp(y,b/E),N=E-b;for(let B=0;B<=N;B++)B===0&&b===E?_[b][B]=D:_[b][B]=D.clone().lerp(C,B/N)}for(let b=0;b<E;b++)for(let D=0;D<2*(E-b)-1;D++){let C=Math.floor(D/2);D%2===0?(d(_[b][C+1]),d(_[b+1][C]),d(_[b][C])):(d(_[b][C+1]),d(_[b+1][C+1]),d(_[b+1][C]))}}function l(v){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let v=new P;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let y=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(y,1-T)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let w=o[v+0],y=o[v+2],T=o[v+4],E=Math.max(w,y,T),_=Math.min(w,y,T);E>.9&&_<.1&&(w<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,w){let y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let v=new P,w=new P,y=new P,T=new P,E=new Re,_=new Re,b=new Re;for(let D=0,C=0;D<r.length;D+=9,C+=6){v.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),E.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),T.copy(v).add(w).add(y).divideScalar(3);let N=p(T);x(E,C+0,v,N),x(_,C+2,w,N),x(b,C+4,y,N)}}function x(v,w,y,T){T<0&&v.x===1&&(o[w]=v.x-1),y.x===0&&y.z===0&&(o[w]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},_o=class i extends go{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qi=class i extends go{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zn=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let w=0;w<l;w++){let y=w*u-r;g.push(y,-v,0),x.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let w=v+l*m,y=v+l*(m+1),T=v+1+l*(m+1),E=v+1+l*m;f.push(w,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_s=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],w=m/n,y=o+w*a,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),_=0;m===0&&o===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let D=b/t,C=s+D*r;u.x=-E*Math.cos(C),u.y=T,u.z=E*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(D+_,1-w),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let w=h[m][v+1],y=h[m][v],T=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(w,y,E),(m!==n-1||c<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Jn=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,y=(s+1)*x+p;c.push(m,v,y),c.push(v,w,y)}this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},xo=class i extends kt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],c=[],l=[],h=[],u=new P,d=new P,f=new P,g=new P,x=new P,p=new P,m=new P;for(let w=0;w<=n;++w){let y=w/n*r*Math.PI*2;v(y,r,o,e,f),v(y+.01,r,o,e,g),p.subVectors(g,f),m.addVectors(g,f),x.crossVectors(p,m),m.crossVectors(x,p),x.normalize(),m.normalize();for(let T=0;T<=s;++T){let E=T/s*Math.PI*2,_=-t*Math.cos(E),b=t*Math.sin(E);u.x=f.x+(_*m.x+b*x.x),u.y=f.y+(_*m.y+b*x.y),u.z=f.z+(_*m.z+b*x.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(w/n),h.push(T/s)}}for(let w=1;w<=n;w++)for(let y=1;y<=s;y++){let T=(s+1)*(w-1)+(y-1),E=(s+1)*w+(y-1),_=(s+1)*w+y,b=(s+1)*(w-1)+y;a.push(T,E,b),a.push(E,_,b)}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(h,2));function v(w,y,T,E,_){let b=Math.cos(w),D=Math.sin(w),C=T/y*w,N=Math.cos(C);_.x=E*(2+N)*.5*b,_.y=E*(2+N)*D*.5,_.z=E*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},yo=class extends Kn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};ap={clone:Cs,merge:mn},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},li=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vo=class extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ol,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ih:r=e,a=2*t-n;break;case sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ih:o=e,c=2*n-t;break;case sh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[l+T]+w*o[c+T]+y*o[u+T];return r}},Ja=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Qa=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends Zi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*d+g*2,v=u[m],w=u[m+1],y=e*d+g*2,T=h[y],E=h[y+1],_=P0(n,t,v,T,s);r[g]=lp(_,x,w,E,p)}return r}};yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vi(t,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vi(e.times,Array),values:Vi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$r(e.settings)&&(n.settings={inTangents:Vi(e.settings.inTangents,Array),outTangents:Vi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case th:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;$r(this.settings)&&(ff(this.settings.inTangents,e),ff(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$r(this.settings)&&(pf(this.settings.inTangents,e),pf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Fe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Wm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=or;Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ms;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;Mo=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Mo.prototype.ValueTypeName="color";pr=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};pr.prototype.ValueTypeName="number";tl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)it.slerpFlat(r,0,o,l-a,o,l,c);return r}},$i=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;Pi=class extends yn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ms;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;Ki=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Ki.prototype.ValueTypeName="vector";So=class{constructor(e="",t=-1,n=[],s=Wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=As(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=R0(c);c=df(c,1,h),l=df(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new pr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};nl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new nl,il=class{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";mr=class extends _t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bo=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},eh=new Je,mf=new P,gf=new P,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pa=new P,La=new it,ri=new P,Eo=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,La,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,La,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new P,_f=new Re,xf=new Re,dn=class extends Eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,_f,xf),t.subVectors(xf,_f)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends wo{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},To=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ao=class extends Eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends wo{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},er=-90,tr=1,gr=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new dn(er,tr,e,t);r.layers=this.layers,this.add(r);let o=new dn(er,tr,e,t);o.layers=this.layers,this.add(o);let a=new dn(er,tr,e,t);a.layers=this.layers,this.add(a);let c=new dn(er,tr,e,t);c.layers=this.layers,this.add(c);let l=new dn(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sl=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Bh="\\[\\]\\.:\\/",N0=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",U0="[^"+Bh.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",kh),O0=/(WCOD+)?/.source.replace("WCOD",U0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),k0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),z0=new RegExp("^"+F0+O0+B0+k0+"$"),H0=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(e){let t=z0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=ah;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];WM=new Float32Array(1),yf=new Je,ys=class{constructor(e,t,n=0,s=1/0){this.ray=new Xi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,n=[]){return lh(e,this,n,t),n.sort(vf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)lh(e[s],this,n,t);return n.sort(vf),n}};_r=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Xh=class Xh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Xh.prototype.isMatrix2=!0;ch=Xh,Ro=class extends Ya{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new kt;r.setIndex(new Ot(n,1)),r.setAttribute("position",new Xe(s,3)),super(r,new gs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},vs=class extends $n{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xr}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xr)});function Pp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function V0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function wx(i,e,t,n,s,r){let o=new He(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(v){let w=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let y=f(w);y&&y.isCubeTexture?(l===void 0&&(l=new oe(new ft(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Cs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lp),l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new oe(new zn(2,2),new ai({name:"BackgroundMaterial",uniforms:Cs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,w){v.getRGB(Yl,Oh(i)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Ex(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(N,B,I,A,O){let j=!1,z=u(N,A,I,B);r!==z&&(r=z,l(r.object)),j=f(N,A,I,O),j&&g(N,A,I,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(N,B,I,A),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,B,I,A){let O=A.wireframe===!0,j=n[B.id];j===void 0&&(j={},n[B.id]=j);let z=N.isInstancedMesh===!0?N.id:0,te=j[z];te===void 0&&(te={},j[z]=te);let W=te[I.id];W===void 0&&(W={},te[I.id]=W);let J=W[O];return J===void 0&&(J=d(c()),W[O]=J),J}function d(N){let B=[],I=[],A=[];for(let O=0;O<t;O++)B[O]=0,I[O]=0,A[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:I,attributeDivisors:A,object:N,attributes:{},index:null}}function f(N,B,I,A){let O=r.attributes,j=B.attributes,z=0,te=I.getAttributes();for(let W in te)if(te[W].location>=0){let ee=O[W],Me=j[W];if(Me===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function g(N,B,I,A){let O={},j=B.attributes,z=0,te=I.getAttributes();for(let W in te)if(te[W].location>=0){let ee=j[W];ee===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),O[W]=Me,z++}r.attributes=O,r.attributesNum=z,r.index=A}function x(){let N=r.newAttributes;for(let B=0,I=N.length;B<I;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){let I=r.newAttributes,A=r.enabledAttributes,O=r.attributeDivisors;I[N]=1,A[N]===0&&(i.enableVertexAttribArray(N),A[N]=1),O[N]!==B&&(i.vertexAttribDivisor(N,B),O[N]=B)}function v(){let N=r.newAttributes,B=r.enabledAttributes;for(let I=0,A=B.length;I<A;I++)B[I]!==N[I]&&(i.disableVertexAttribArray(I),B[I]=0)}function w(N,B,I,A,O,j,z){z===!0?i.vertexAttribIPointer(N,B,I,O,j):i.vertexAttribPointer(N,B,I,A,O,j)}function y(N,B,I,A){x();let O=A.attributes,j=I.getAttributes(),z=B.defaultAttributeValues;for(let te in j){let W=j[te];if(W.location>=0){let J=O[te];if(J===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let ee=J.normalized,Me=J.itemSize,De=e.get(J);if(De===void 0)continue;let q=De.buffer,ue=De.type,be=De.bytesPerElement,Pe=ue===i.INT||ue===i.UNSIGNED_INT||J.gpuType===hl;if(J.isInterleavedBufferAttribute){let xe=J.data,ze=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Nt=J.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Ue=0;Ue<W.locationSize;Ue++)m(W.location+Ue,xe.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ue=0;Ue<W.locationSize;Ue++)p(W.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ue=0;Ue<W.locationSize;Ue++)w(W.location+Ue,Me/W.locationSize,ue,ee,ze*be,(Nt+Me/W.locationSize*Ue)*be,Pe)}else{if(J.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe,J.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let xe=0;xe<W.locationSize;xe++)w(W.location+xe,Me/W.locationSize,ue,ee,Me*be,Me/W.locationSize*xe*be,Pe)}}else if(z!==void 0){let ee=z[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}v()}function T(){D();for(let N in n){let B=n[N];for(let I in B){let A=B[I];for(let O in A){let j=A[O];for(let z in j)h(j[z].object),delete j[z];delete A[O]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let B=n[N.id];for(let I in B){let A=B[I];for(let O in A){let j=A[O];for(let z in j)h(j[z].object),delete j[z];delete A[O]}}delete n[N.id]}function _(N){for(let B in n){let I=n[B];for(let A in I){let O=I[A];if(O[N.id]===void 0)continue;let j=O[N.id];for(let z in j)h(j[z].object),delete j[z];delete O[N.id]}}}function b(N){for(let B in n){let I=n[B],A=N.isInstancedMesh===!0?N.id:0,O=I[A];if(O!==void 0){for(let j in O){let z=O[j];for(let te in z)h(z[te].object),delete z[te];delete O[j]}delete I[A],Object.keys(I).length===0&&delete n[B]}}}function D(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Tx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==In&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vn&&_!==Hn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Rx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new An,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,w=v*4,y=m.clippingState||null;c.value=y,y=h(g,d,w,f);for(let T=0;T!==w;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(u[w]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function up(i,e,t){return new ko(i,{minFilter:Qn,generateMipmaps:e,type:ti,colorSpace:eo,depthBuffer:t})}function zo(i,e,t){return new ai({name:i,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:on,blending:Ss,depthTest:!1,depthWrite:!1})}function Nx(){return zo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ux(){return zo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Np}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fx(){return zo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ix}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dp(){return zo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function fp(){return zo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ox(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===al||f===ll)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new ko(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===al||f===ll,x=f===ws||f===Mr;if(g||x){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Er(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Er(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===al?d.mapping=ws:f===ll&&(d.mapping=Mr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Bx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Kr("WebGLRenderer: "+n+" extension not supported."),s}}}function kx(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?ro:so,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,D=0;b<v;b+=3){let C=_[b+0],N=_[b+1],B=_[b+2];T[D++]=C,T[D++]=N,T[D++]=N,T[D++]=B,T[D++]=B,T[D++]=C}}else{m=p.version;for(let _=0,b=0;_<v;_+=3){let D=_+0,C=_+1,N=_+2;T[b++]=D,T[b++]=C,T[b++]=C,T[b++]=N,T[b++]=N,T[b++]=D}}y.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,y)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function zx(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Hx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gx(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let D=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),_=new io(E,y,T,u);_.type=Hn,_.needsUpdate=!0;let b=w*4;for(let C=0;C<u;C++){let N=p[C],B=m[C],I=v[C],A=y*T*4*C;for(let O=0;O<N.count;O++){let j=O*b;f===!0&&(s.fromBufferAttribute(N,O),E[A+j+0]=s.x,E[A+j+1]=s.y,E[A+j+2]=s.z,E[A+j+3]=0),g===!0&&(s.fromBufferAttribute(B,O),E[A+j+4]=s.x,E[A+j+5]=s.y,E[A+j+6]=s.z,E[A+j+7]=0),x===!0&&(s.fromBufferAttribute(I,O),E[A+j+8]=s.x,E[A+j+9]=s.y,E[A+j+10]=s.z,E[A+j+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Re(y,T)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vx(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function Xx(i,e,t,n,s,r){let o=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new kt;h.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let u=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new oe(h,u),f=new Ao(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),c!==null&&c.setSize(T,E);for(let _=0;_<w.length;_++){let b=w[_];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,_=o.height;w.length>0&&a===null&&(a=new Rn(E,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new Rn(E,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(D=>D.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Ci(E,_),r===!0&&(l.format=Li,l.type=Ts)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let D=0;D<w.length;D++){let C=w[D];C.setSize&&C.setSize(E,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,E){if(p||T.toneMapping===hi&&w.length===0)return!1;if(v=E,E!==null){let _=E.width,b=E.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=hi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=m,p=!0;let _=o,b=a;for(let D=0;D<w.length;D++){let C=w[D];C.enabled!==!1&&(C.render(T,b,_,E),C.needsSwap!==!1&&(_=b,b=b===a?c:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},Ke.getTransfer(g)===ot&&(u.defines.SRGB_TRANSFER="");let D=Wx[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pp[s];if(r===void 0&&(r=new Float32Array(s),pp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $l(i,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function $x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),Xt(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;_p.set(n),i.uniformMatrix3fv(this.addr,!1,_p),Xt(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;gp.set(n),i.uniformMatrix4fv(this.addr,!1,gp),Xt(t,n)}}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Kl(i){return i.version===0&&(i.compareFunction=Ph,i.needsUpdate=!0),i}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Kl(Fp):r=Up,t.setTexture2D(e||r,s)}function ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kp,s)}function cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Kl(Op):r=zp,t.setTextureCube(e||r,s)}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bp,s)}function uy(i){switch(i){case 5126:return jx;case 35664:return Yx;case 35665:return qx;case 35666:return Zx;case 35674:return $x;case 35675:return Kx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}function dy(i,e){i.uniform1fv(this.addr,e)}function fy(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function py(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function my(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function gy(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xy(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yy(i,e){i.uniform1iv(this.addr,e)}function vy(i,e){i.uniform2iv(this.addr,e)}function My(i,e){i.uniform3iv(this.addr,e)}function Sy(i,e){i.uniform4iv(this.addr,e)}function by(i,e){i.uniform1uiv(this.addr,e)}function wy(i,e){i.uniform2uiv(this.addr,e)}function Ey(i,e){i.uniform3uiv(this.addr,e)}function Ty(i,e){i.uniform4uiv(this.addr,e)}function Ay(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Kl(Fp):o=Up;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ry(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kp,r[o])}function Cy(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Kl(Op):o=zp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Iy(i,e,t){let n=this.cache,s=e.length,r=$l(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bp,r[o])}function Py(i){switch(i){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return wy;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Iy}}function yp(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),o=Yh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yp(t,l===void 0?new Zh(a,i,e):new $h(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Kh(a),yp(t,u)),t=u}}}function vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Uy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Fy(i){Ke._getMatrix(Mp,Ke.workingColorSpace,i);let e=`mat3( ${Mp.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case to:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Uy(i.getShaderSource(e),a)}else return r}function Oy(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function ky(i,e){let t=By[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zy(){Ke.getLuminanceCoefficients(ql);let i=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bo(i){return i!==""}function bp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Jh(i){return i.replace(Wy,Xy)}function Xy(i,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jh(t)}function Ep(i){return i.replace(jy,Yy)}function Yy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zy(i){return qy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Ky(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Qy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jy[i.combine]||"ENVMAP_BLENDING_NONE"}function ev(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Zy(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ky(t),u=Qy(t),d=Hy(t),f=Gy(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(x=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?We.tonemapping_pars_fragment:"",t.toneMapping!==hi?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),zy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Jh(o),o=bp(o,t),o=wp(o,t),a=Jh(a),a=bp(a,t),a=wp(a,t),o=Ep(o),a=Ep(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+x+o,w=m+p+a,y=vp(s,s.VERTEX_SHADER,v),T=vp(s,s.FRAGMENT_SHADER,w);s.attachShader(g,y),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(y)||"",I=s.getShaderInfoLog(T)||"",A=N.trim(),O=B.trim(),j=I.trim(),z=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,T);else{let W=Sp(s,y,"vertex"),J=Sp(s,T,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+W+`
`+J)}else A!==""?Ie("WebGLProgram: Program Info Log:",A):(O===""||j==="")&&(te=!1);te&&(C.diagnostics={runnable:z,programLog:A,vertexShader:{log:O,prefix:x},fragmentShader:{log:j,prefix:p}})}s.deleteShader(y),s.deleteShader(T),_=new wr(s,g),b=Vy(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Dy)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ny++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}function nv(i){return i===es||i===No||i===Uo}function iv(i,e,t,n,s,r){let o=new ur,a=new Qh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,D,C,N,B){let I=C.fog,A=N.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||O,j),te=d[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let J=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ee=J!==void 0?J.length:0,Me=0;A.morphAttributes.position!==void 0&&(Me=1),A.morphAttributes.normal!==void 0&&(Me=2),A.morphAttributes.color!==void 0&&(Me=3);let De,q,ue,be;if(te){let ge=di[te];De=ge.vertexShader,q=ge.fragmentShader}else{De=_.vertexShader,q=_.fragmentShader;let ge=a.getVertexShaderStage(_),ht=a.getFragmentShaderStage(_);a.update(_,ge,ht),ue=ge.id,be=ht.id}let Pe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Nt=N.isBatchedMesh===!0,Ue=!!_.map,ct=!!_.matcap,ut=!!z,qe=ut&&z.isPMREMTexture===!0,tn=!!_.aoMap,Ht=!!_.lightMap,xn=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,si=!!_.displacementMap,Zt=!!_.emissiveMap,Dn=!!_.metalnessMap,Nn=!!_.roughnessMap,Un=_.anisotropy>0,F=_.clearcoat>0,Fn=_.diffuseRoughness>0,vt=_.dispersion>0,Mt=_.retroreflectivity>0,me=_.iridescence>0,Gt=_.sheen>0,Le=_.transmission>0,Be=Un&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,ie=Fn&&!!_.diffuseRoughnessMap,Q=me&&!!_.iridescenceMap,ae=me&&!!_.iridescenceThicknessMap,fe=Gt&&!!_.sheenColorMap,Z=Gt&&!!_.sheenRoughnessMap,$=!!_.specularMap,ce=!!_.specularColorMap,L=!!_.specularIntensityMap,K=Le&&!!_.transmissionMap,Y=Le&&!!_.thicknessMap,he=!!_.gradientMap,re=!!_.alphaMap,le=_.alphaTest>0,Ae=!!_.alphaHash,Ve=!!_.extensions,se=hi;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(se=i.toneMapping);let Ce=qe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ge={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:q,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Nt,batchingColor:Nt&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:ct,envMap:ut,envMapMode:ut&&z.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ce.length-1:null,envMapSize:qe?Ce[0].width:null,aoMap:tn,lightMap:Ht,bumpMap:xn,normalMap:Et,displacementMap:si,emissiveMap:Zt,normalMapObjectSpace:Et&&_.normalMapType===jf,normalMapTangentSpace:Et&&_.normalMapType===Fo,packedNormalMap:Et&&_.normalMapType===Fo&&nv(_.normalMap.format),metalnessMap:Dn,roughnessMap:Nn,anisotropy:Un,anisotropyMap:Be,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Fn,diffuseRoughnessMap:ie,dispersion:vt,retroreflection:Mt,iridescence:me,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:Gt,sheenColorMap:fe,sheenRoughnessMap:Z,specularMap:$,specularColorMap:ce,specularIntensityMap:L,transmission:Le,transmissionMap:K,thicknessMap:Y,gradientMap:he,opaque:_.transparent===!1&&_.blending===vr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Ae,combine:_.combine,mapUv:Ue&&f(_.map.channel),aoMapUv:tn&&f(_.aoMap.channel),lightMapUv:Ht&&f(_.lightMap.channel),bumpMapUv:xn&&f(_.bumpMap.channel),normalMapUv:Et&&f(_.normalMap.channel),displacementMapUv:si&&f(_.displacementMap.channel),emissiveMapUv:Zt&&f(_.emissiveMap.channel),metalnessMapUv:Dn&&f(_.metalnessMap.channel),roughnessMapUv:Nn&&f(_.roughnessMap.channel),anisotropyMapUv:Be&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:ce&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:re&&f(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Et||Un),vertexNormals:!!A.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!A.attributes.uv&&(Ue||re),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||A.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:Zt&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||Nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let b=d[_.type],D;if(b){let C=di[b];D=ap.clone(C.uniforms)}else D=_.uniforms;return D}function w(_,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new ev(i,b,_,s),l.push(D),h.set(b,D)),D}function y(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:E}}function sv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,p,m){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function c(d,f,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);let w=a(d,f,g,x,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(d,f,g,x,p,m){let v=a(d,f,g,x,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||rv),n.length>1&&n.sort(f||Ap),s.length>1&&s.sort(f||Ap)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function ov(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rp,i.set(n,[o])):s>=r.length?(o=new Rp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function av(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function lv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function hv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uv(i){let e=new av,t=lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Je,o=new Je;function a(l){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,w=0,y=0,T=0,E=0,_=0,b=0,D=0,C=0;l.sort(hv);for(let B=0,I=l.length;B<I;B++){let A=l[B],O=A.color,j=A.intensity,z=A.distance,te=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===es?te=A.shadow.map.texture:te=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=O.r*j,u+=O.g*j,d+=O.b*j;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],j);C++}else if(A.isSunLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,ee=t.get(A);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=te;let Me=J.getViewportCount();for(let De=0;De<Me;De++)n.sunShadowMatrix[x+De]=J.getMatrix(De),n.sunShadowCascade[x+De]=J._cascadeData[De];x+=Me,g++}n.sun[f]=W,f++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,ee=t.get(A);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=A.shadow.matrix,T++}n.directional[p]=W,p++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(O).multiplyScalar(j),W.distance=z,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[v]=W;let J=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,J.updateMatrices(A),A.castShadow&&D++),n.spotLightMatrix[v]=J.matrix,A.castShadow){let ee=t.get(A);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=te,_++}v++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(O).multiplyScalar(j),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[w]=W,w++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let J=A.shadow,ee=t.get(A);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=A.shadow.matrix,E++}n.point[m]=W,m++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(j),W.groundColor.copy(A.groundColor).multiplyScalar(j),n.hemi[y]=W,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=C,n.version=cv++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){let y=l[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Cp(i){let e=new uv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function dv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cp(i),e.set(s,[a])):r>=o.length?(a=new Cp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function _v(i,e,t){let n=new ji,s=new Re,r=new Re,o=new St,a=new Za,c=new $a,l={},h=t.maxTextureSize,u={[ci]:on,[on]:ci,[pn]:pn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===bf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let D=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ss),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let I=m!==this.type;I&&_.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(O=>O.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,O=E.length;A<O;A++){let j=E[A],z=j.shadow;if(z===void 0){Ie("WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let te=z.getFrameExtents();s.multiply(te),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,z.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===yr){if(j.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Rn(s.x,s.y,{format:es,type:ti,minFilter:sn,magFilter:sn,generateMipmaps:!1}),z.map.texture.name=j.name+".shadowMap",z.map.depthTexture=new Ci(s.x,s.y,Hn),z.map.depthTexture.name=j.name+".shadowMapDepth",z.map.depthTexture.format=Ei,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else j.isPointLight?(z.map=new ko(s.x),z.map.depthTexture=new ho(s.x,ei)):(z.map=new Rn(s.x,s.y),z.map.depthTexture=new Ci(s.x,s.y,ei)),z.map.depthTexture.name=j.name+".shadowMap",z.map.depthTexture.format=Ei,this.type===Ms?(z.map.depthTexture.compareFunction=W?Ih:Ch,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();j.isPointLight!==!0&&z.updateMatrices(j,b);let ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Me=0;Me<J;Me++){let De=z.getCamera(Me);if(j.isPointLight){let q=z.camera,ue=z.matrix,be=j.distance||q.far;be!==q.far&&(q.far=be,q.updateProjectionMatrix()),Oo.setFromMatrixPosition(j.matrixWorld),q.position.copy(Oo),qh.copy(q.position),qh.add(mv[Me]),q.up.copy(gv[Me]),q.lookAt(qh),q.updateMatrixWorld(),ue.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Ip.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ip,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(z.map),i.clear());let q=z.getViewport(Me);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),B.viewport(o)}n=z.getFrustum(Me),y(_,b,De,j,ee,this.type)}z.isPointLightShadow!==!0&&this.type===yr&&v(z,b),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,C,N)};function v(E,_){let b=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:es,type:ti}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function w(E,_,b,D){let C=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,I=_.uuid,A=l[B];A===void 0&&(A={},l[B]=A);let O=A[I];O===void 0&&(O=C.clone(),A[I]=O,_.addEventListener("dispose",T)),C=O}if(C.visible=_.visible,C.wireframe=_.wireframe,D===yr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=b}return C}function y(E,_,b,D,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===yr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let A=e.update(E),O=E.material;if(Array.isArray(O)){let j=A.groups;for(let z=0,te=j.length;z<te;z++){let W=j[z],J=O[W.materialIndex];if(J&&J.visible){let ee=w(E,J,D,N);E.onBeforeShadow(i,E,_,b,A,ee,W),i.renderBufferDirect(b,null,A,ee,E,W),E.onAfterShadow(i,E,_,b,A,ee,W)}}}else if(O.visible){let j=w(E,O,D,N);E.onBeforeShadow(i,E,_,b,A,j,null),i.renderBufferDirect(b,null,A,j,E,null),E.onAfterShadow(i,E,_,b,A,j,null)}}let I=E.children;for(let A=0,O=I.length;A<O;A++)y(I[A],_,b,D,C,N)}function T(E){E.target.removeEventListener("dispose",T);for(let b in l){let D=l[b],C=E.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function xv(i,e){function t(){let L=!1,K=new St,Y=null,he=new St(0,0,0,0);return{setMask:function(re){Y!==re&&!L&&(i.colorMask(re,re,re,re),Y=re)},setLocked:function(re){L=re},setClear:function(re,le,Ae,Ve,se){se===!0&&(re*=Ve,le*=Ve,Ae*=Ve),K.set(re,le,Ae,Ve),he.equals(K)===!1&&(i.clearColor(re,le,Ae,Ve),he.copy(K))},reset:function(){L=!1,Y=null,he.set(-1,0,0,0)}}}function n(){let L=!1,K=!1,Y=null,he=null,re=null;return{setReversed:function(le){if(K!==le){let Ae=e.get("EXT_clip_control");le?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),K=le;let Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return K},setTest:function(le){le?xe(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(le){Y!==le&&!L&&(i.depthMask(le),Y=le)},setFunc:function(le){if(K&&(le=ip[le]),he!==le){switch(le){case Ua:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){L=le},setClear:function(le){re!==le&&(re=le,K&&(le=1-le),i.clearDepth(le))},reset:function(){L=!1,Y=null,he=null,re=null,K=!1}}}function s(){let L=!1,K=null,Y=null,he=null,re=null,le=null,Ae=null,Ve=null,se=null;return{setTest:function(Ce){L||(Ce?xe(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Ce){K!==Ce&&!L&&(i.stencilMask(Ce),K=Ce)},setFunc:function(Ce,Ge,ge){(Y!==Ce||he!==Ge||re!==ge)&&(i.stencilFunc(Ce,Ge,ge),Y=Ce,he=Ge,re=ge)},setOp:function(Ce,Ge,ge){(le!==Ce||Ae!==Ge||Ve!==ge)&&(i.stencilOp(Ce,Ge,ge),le=Ce,Ae=Ge,Ve=ge)},setLocked:function(Ce){L=Ce},setClear:function(Ce){se!==Ce&&(i.clearStencil(Ce),se=Ce)},reset:function(){L=!1,K=null,Y=null,he=null,re=null,le=null,Ae=null,Ve=null,se=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,w=null,y=null,T=null,E=null,_=null,b=new He(0,0,0),D=0,C=!1,N=null,B=null,I=null,A=null,O=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=te>=2);let J=null,ee={},Me=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),q=new St().fromArray(Me),ue=new St().fromArray(De);function be(L,K,Y,he){let re=new Uint8Array(4),le=i.createTexture();i.bindTexture(L,le),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Y;Ae++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(K+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return le}let Pe={};Pe[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),o.setFunc(ir),xn(!1),Et(hh),xe(i.CULL_FACE),tn(Ss);function xe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ze(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Nt(L,K){return d[L]!==K?(i.bindFramebuffer(L,K),d[L]=K,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ue(L,K){let Y=g,he=!1;if(L){Y=f.get(K),Y===void 0&&(Y=[],f.set(K,Y));let re=L.textures;if(Y.length!==re.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ae=re.length;le<Ae;le++)Y[le]=i.COLOR_ATTACHMENT0+le;Y.length=re.length,he=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,he=!0);he&&i.drawBuffers(Y)}function ct(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let ut={[bs]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[Tf]:i.FUNC_REVERSE_SUBTRACT};ut[Af]=i.MIN,ut[Rf]=i.MAX;let qe={[Cf]:i.ZERO,[If]:i.ONE,[Pf]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[Df]:i.DST_ALPHA,[Lf]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Bf]:i.CONSTANT_COLOR,[kf]:i.ONE_MINUS_CONSTANT_COLOR,[zf]:i.CONSTANT_ALPHA,[Hf]:i.ONE_MINUS_CONSTANT_ALPHA};function tn(L,K,Y,he,re,le,Ae,Ve,se,Ce){if(L===Ss){p===!0&&(ze(i.BLEND),p=!1);return}if(p===!1&&(xe(i.BLEND),p=!0),L!==wf){if(L!==m||Ce!==C){if((v!==bs||T!==bs)&&(i.blendEquation(i.FUNC_ADD),v=bs,T=bs),Ce)switch(L){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,_=null,b.set(0,0,0),D=0,m=L,C=Ce}return}re=re||K,le=le||Y,Ae=Ae||he,(K!==v||re!==T)&&(i.blendEquationSeparate(ut[K],ut[re]),v=K,T=re),(Y!==w||he!==y||le!==E||Ae!==_)&&(i.blendFuncSeparate(qe[Y],qe[he],qe[le],qe[Ae]),w=Y,y=he,E=le,_=Ae),(Ve.equals(b)===!1||se!==D)&&(i.blendColor(Ve.r,Ve.g,Ve.b,se),b.copy(Ve),D=se),m=L,C=!1}function Ht(L,K){L.side===pn?ze(i.CULL_FACE):xe(i.CULL_FACE);let Y=L.side===on;K&&(Y=!Y),xn(Y),L.blending===vr&&L.transparent===!1?tn(Ss):tn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function xn(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function Et(L){L!==Mf?(xe(i.CULL_FACE),L!==B&&(L===hh?i.cullFace(i.BACK):L===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),B=L}function si(L){L!==I&&(z&&i.lineWidth(L),I=L)}function Zt(L,K,Y){L?(xe(i.POLYGON_OFFSET_FILL),(A!==K||O!==Y)&&(A=K,O=Y,o.getReversed()&&(K=-K,Y=-Y),i.polygonOffset(K,Y))):ze(i.POLYGON_OFFSET_FILL)}function Dn(L){L?xe(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Nn(L){L===void 0&&(L=i.TEXTURE0+j-1),J!==L&&(i.activeTexture(L),J=L)}function Un(L,K,Y){Y===void 0&&(J===null?Y=i.TEXTURE0+j-1:Y=J);let he=ee[Y];he===void 0&&(he={type:void 0,texture:void 0},ee[Y]=he),(he.type!==L||he.texture!==K)&&(J!==Y&&(i.activeTexture(Y),J=Y),i.bindTexture(L,K||Pe[L]),he.type=L,he.texture=K)}function F(){let L=ee[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Fn(){try{i.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function me(){try{i.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Gt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Be(){try{i.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ie(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function Q(L,K){u[L]!==K&&(i.pixelStorei(L,K),u[L]=K)}function ae(L){q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function fe(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function Z(L,K){let Y=l.get(K);Y===void 0&&(Y=new WeakMap,l.set(K,Y));let he=Y.get(L);he===void 0&&(he=i.getUniformBlockIndex(K,L.name),i.uniformBlockBinding(K,he,he),Y.set(L,he))}function $(L,K,Y){let re=l.get(K).get(L);c[re]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,Y),c[re]=Y)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,ee={},d={},c={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,w=null,y=null,T=null,E=null,_=null,b=new He(0,0,0),D=0,C=!1,N=null,B=null,I=null,A=null,O=null,q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:ze,bindFramebuffer:Nt,drawBuffers:Ue,useProgram:ct,setBlending:tn,setMaterial:Ht,setFlipSided:xn,setCullFace:Et,setLineWidth:si,setPolygonOffset:Zt,setScissorTest:Dn,activeTexture:Nn,bindTexture:Un,unbindTexture:F,compressedTexImage2D:Fn,compressedTexImage3D:vt,texImage2D:M,texImage3D:G,pixelStorei:Q,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:$,texStorage2D:Be,texStorage3D:R,texSubImage2D:Mt,texSubImage3D:me,compressedTexSubImage2D:Gt,compressedTexSubImage3D:Le,scissor:ae,viewport:fe,reset:ce}}function yv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return p?new OffscreenCanvas(R,M):no("canvas")}function v(R,M,G){let ie=1,Q=Be(R);if((Q.width>G||Q.height>G)&&(ie=G/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ae=Math.floor(ie*Q.width),fe=Math.floor(ie*Q.height);d===void 0&&(d=m(ae,fe));let Z=M?m(ae,fe):d;return Z.width=ae,Z.height=fe,Z.getContext("2d").drawImage(R,0,0,ae,fe),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+fe+")."),Z}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function w(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,M,G,ie,Q,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;ie&&(fe=e.get("EXT_texture_norm16"),fe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8),G===i.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),G===i.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),M===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8),G===i.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),G===i.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),G===i.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let $=ae?to:Ke.getTransfer(Q);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=$===ot?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),G===i.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,M){let G;return R?M===null||M===ei||M===Ts?G=i.DEPTH24_STENCIL8:M===Hn?G=i.DEPTH32F_STENCIL8:M===br&&(G=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ei||M===Ts?G=i.DEPTH_COMPONENT24:M===Hn?G=i.DEPTH_COMPONENT32F:M===br&&(G=i.DEPTH_COMPONENT16),G}function b(R,M){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){let M=new WeakRef(R);n.get(R).__ref=M,g.add(M),x.register(R,M,M)}function C(R){let M=n.get(R).__ref;M!==void 0&&(g.delete(M),x.unregister(M))}function N(R){I(R.target)}function B(R){A(R.target)}function I(R){R.removeEventListener("dispose",N),C(R),j(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function A(R){R.removeEventListener("dispose",B),C(R),te(R)}function O(){for(let R of g){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?A(M):I(M))}g.clear(),u.clear()}function j(R){let M=n.get(R);if(M.__webglInit===void 0)return;let G=R.source,ie=f.get(G);if(ie){let Q=ie[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(R),Object.keys(ie).length===0&&f.delete(G)}n.remove(R)}function z(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let G=R.source,ie=f.get(G);delete ie[M.__cacheKey],o.memory.textures--}function te(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&I(G),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ae=0;ae<M.__webglFramebuffer[Q].length;ae++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ae]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ie=R.textures;for(let Q=0,ae=ie.length;Q<ae;Q++){let fe=n.get(ie[Q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(ie[Q])}n.remove(R)}let W=0;function J(){W=0}function ee(){return W}function Me(R){W=R}function De(){let R=W;return R>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function q(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ue(R,M){let G=n.get(R);if(R.isVideoTexture&&Gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let ie=R.image;if(ie===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(G,R,M);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function be(R,M){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ht(G,R,M);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Pe(R,M){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ht(G,R,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function xe(R,M){let G=n.get(R);if(R.version>0&&G.__version!==R.version){xn(G,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let ze={[sr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[rr]:i.MIRRORED_REPEAT},Nt={[Bt]:i.NEAREST,[cl]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Ue={[qf]:i.NEVER,[Ph]:i.ALWAYS,[Zf]:i.LESS,[Ch]:i.LEQUAL,[$f]:i.EQUAL,[Ih]:i.GEQUAL,[Kf]:i.GREATER,[Jf]:i.NOTEQUAL};function ct(R,M){if(M.type===Hn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Sr||M.magFilter===Es||M.magFilter===Qn||M.minFilter===sn||M.minFilter===Sr||M.minFilter===Es||M.minFilter===Qn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ze[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ze[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ze[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Nt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Nt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Es&&M.minFilter!==Qn||M.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ut(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",N),D(M));let ie=M.source,Q=f.get(ie);Q===void 0&&(Q={},f.set(ie,Q));let ae=q(M);if(ae!==R.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ae].usedTimes++;let fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&z(M)),R.__cacheKey=ae,R.__webglTexture=Q[ae].texture}return G}function qe(R,M,G){return Math.floor(Math.floor(R/G)/M)}function tn(R,M,G,ie){let ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,ie,M.data);else{ae.sort((L,K)=>L.start-K.start);let fe=0;for(let L=1;L<ae.length;L++){let K=ae[fe],Y=ae[L],he=K.start+K.count,re=qe(Y.start,M.width,4),le=qe(K.start,M.width,4);Y.start<=he+1&&re===le&&qe(Y.start+Y.count-1,M.width,4)===re?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++fe,ae[fe]=Y)}ae.length=fe+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,K=ae.length;L<K;L++){let Y=ae[L],he=Math.floor(Y.start/4),re=Math.ceil(Y.count/4),le=he%M.width,Ae=Math.floor(he/M.width),Ve=re,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,le,Ae,Ve,se,G,ie,M.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Ht(R,M,G){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);let Q=ut(R,M),ae=M.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+G);let fe=n.get(ae);if(ae.version!==fe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let se=Ke.getPrimaries(Ke.workingColorSpace),Ce=M.colorSpace===ni?null:Ke.getPrimaries(M.colorSpace),Ge=M.colorSpace===ni||se===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let $=v(M.image,!1,s.maxTextureSize);$=Le(M,$);let ce=r.convert(M.format,M.colorSpace),L=r.convert(M.type),K=E(M.internalFormat,ce,L,M.normalized,M.colorSpace,M.isVideoTexture);ct(ie,M);let Y,he=M.mipmaps,re=M.isVideoTexture!==!0,le=fe.__version===void 0||Q===!0,Ae=ae.dataReady,Ve=b(M,$);if(M.isDepthTexture)K=_(M.format===Li,M.type),le&&(re?t.texStorage2D(i.TEXTURE_2D,1,K,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,ce,L,null));else if(M.isDataTexture)if(he.length>0){re&&le&&t.texStorage2D(i.TEXTURE_2D,Ve,K,he[0].width,he[0].height);for(let se=0,Ce=he.length;se<Ce;se++)Y=he[se],re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,L,Y.data):t.texImage2D(i.TEXTURE_2D,se,K,Y.width,Y.height,0,ce,L,Y.data);M.generateMipmaps=!1}else re?(le&&t.texStorage2D(i.TEXTURE_2D,Ve,K,$.width,$.height),Ae&&tn(M,$,ce,L)):t.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,ce,L,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){re&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,K,he[0].width,he[0].height,$.depth);for(let se=0,Ce=he.length;se<Ce;se++)if(Y=he[se],M.format!==In)if(ce!==null)if(re){if(Ae)if(M.layerUpdates.size>0){let Ge=zh(Y.width,Y.height,M.format,M.type);for(let ge of M.layerUpdates){let ht=Y.data.subarray(ge*Ge/Y.data.BYTES_PER_ELEMENT,(ge+1)*Ge/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ge,Y.width,Y.height,1,ce,ht)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,$.depth,ce,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,K,Y.width,Y.height,$.depth,0,Y.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,$.depth,ce,L,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,K,Y.width,Y.height,$.depth,0,ce,L,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{re&&le&&t.texStorage2D(i.TEXTURE_2D,Ve,K,he[0].width,he[0].height);for(let se=0,Ce=he.length;se<Ce;se++)Y=he[se],M.format!==In?ce!==null?re?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,se,K,Y.width,Y.height,0,Y.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,L,Y.data):t.texImage2D(i.TEXTURE_2D,se,K,Y.width,Y.height,0,ce,L,Y.data)}else if(M.isDataArrayTexture)if(re){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,K,$.width,$.height,$.depth),Ae)if(M.layerUpdates.size>0){let se=zh($.width,$.height,M.format,M.type);for(let Ce of M.layerUpdates){let Ge=$.data.subarray(Ce*se/$.data.BYTES_PER_ELEMENT,(Ce+1)*se/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,ce,L,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ce,L,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,$.width,$.height,$.depth,0,ce,L,$.data);else if(M.isData3DTexture)re?(le&&t.texStorage3D(i.TEXTURE_3D,Ve,K,$.width,$.height,$.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ce,L,$.data)):t.texImage3D(i.TEXTURE_3D,0,K,$.width,$.height,$.depth,0,ce,L,$.data);else if(M.isFramebufferTexture){if(le)if(re)t.texStorage2D(i.TEXTURE_2D,Ve,K,$.width,$.height);else{let se=$.width,Ce=$.height;for(let Ge=0;Ge<Ve;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,K,se,Ce,0,ce,L,null),se>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),$.parentNode!==se){se.appendChild($),u.add(M),se.onpaint=Ce=>{let Ge=Ce.changedElements;for(let ge of u)Ge.includes(ge.image)&&(ge.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Ge=i.RGBA,ge=i.RGBA,ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,ge,ht,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(re&&le){let se=Be(he[0]);t.texStorage2D(i.TEXTURE_2D,Ve,K,se.width,se.height)}for(let se=0,Ce=he.length;se<Ce;se++)Y=he[se],re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ce,L,Y):t.texImage2D(i.TEXTURE_2D,se,K,ce,L,Y);M.generateMipmaps=!1}else if(re){if(le){let se=Be($);t.texStorage2D(i.TEXTURE_2D,Ve,K,se.width,se.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,L,$)}else t.texImage2D(i.TEXTURE_2D,0,K,ce,L,$);w(M)&&M.mipmapsAutoUpdate===!0&&y(ie),fe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function xn(R,M,G){if(M.image.length!==6)return;let ie=ut(R,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let ae=n.get(Q);if(Q.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);let fe=Ke.getPrimaries(Ke.workingColorSpace),Z=M.colorSpace===ni?null:Ke.getPrimaries(M.colorSpace),$=M.colorSpace===ni||fe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ce=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,K=[];for(let ge=0;ge<6;ge++)!ce&&!L?K[ge]=v(M.image[ge],!0,s.maxCubemapSize):K[ge]=L?M.image[ge].image:M.image[ge],K[ge]=Le(M,K[ge]);let Y=K[0],he=r.convert(M.format,M.colorSpace),re=r.convert(M.type),le=E(M.internalFormat,he,re,M.normalized,M.colorSpace),Ae=M.isVideoTexture!==!0,Ve=ae.__version===void 0||ie===!0,se=Q.dataReady,Ce=b(M,Y);ct(i.TEXTURE_CUBE_MAP,M);let Ge;if(M.isDepthTexture){if(le=_(M.format===Li,M.type),Ve)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,Y.width,Y.height,0,he,re,null)}else if(ce){Ae&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,le,Y.width,Y.height);for(let ge=0;ge<6;ge++){Ge=K[ge].mipmaps;for(let ht=0;ht<Ge.length;ht++){let $t=Ge[ht];M.format!==In?he!==null?Ae?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht,0,0,$t.width,$t.height,he,$t.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht,le,$t.width,$t.height,0,$t.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht,0,0,$t.width,$t.height,he,re,$t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht,le,$t.width,$t.height,0,he,re,$t.data)}}}else{if(Ge=M.mipmaps,Ae&&Ve){Ge.length>0&&Ce++;let ge=Be(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(L){Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,K[ge].width,K[ge].height,he,re,K[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,K[ge].width,K[ge].height,0,he,re,K[ge].data);for(let ht=0;ht<Ge.length;ht++){let Fi=Ge[ht].image[ge].image;Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht+1,0,0,Fi.width,Fi.height,he,re,Fi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht+1,le,Fi.width,Fi.height,0,he,re,Fi.data)}}else{Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he,re,K[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,he,re,K[ge]);for(let ht=0;ht<Ge.length;ht++){let $t=Ge[ht];Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht+1,0,0,he,re,$t.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ht+1,le,he,re,$t.image[ge])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ae.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Et(R,M,G,ie,Q,ae){let fe=r.convert(G.format,G.colorSpace),Z=r.convert(G.type),$=E(G.internalFormat,fe,Z,G.normalized,G.colorSpace),ce=n.get(M),L=n.get(G);if(L.__renderTarget=M,!ce.__hasExternalTextures){let K=Math.max(1,M.width>>ae),Y=Math.max(1,M.height>>ae);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,$,K,Y,M.depth,0,fe,Z,null):t.texImage2D(Q,ae,$,K,Y,0,fe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,L.__webglTexture,0,Mt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,L.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function si(R,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let ie=M.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,ae=_(M.stencilBuffer,Q),fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(M),ae,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(M),ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let ie=M.textures;for(let Q=0;Q<ie.length;Q++){let ae=ie[Q],fe=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),$=E(ae.internalFormat,fe,Z,ae.normalized,ae.colorSpace);me(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(M),$,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(M),$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(R,M,G){let ie=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(M.depthTexture);Q.__renderTarget=M;let ae=ie?M.depthTexture.image[0]:M.depthTexture.image;(!Q.__webglTexture||ae.width!==M.width||ae.height!==M.height)&&(ae.width=M.width,ae.height=M.height,M.depthTexture.needsUpdate=!0),ie?xe(M.depthTexture,0):ue(M.depthTexture,0);let fe=Q.__webglTexture,Z=Mt(M),$=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ce=M.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ei)me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,$,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ce,$,fe,0);else if(M.depthTexture.format===Li)me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,$,fe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ce,$,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dn(R){let M=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ie){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ie.removeEventListener("dispose",Q)};ie.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=ie}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)Zt(M.__webglFramebuffer[ie],R,ie);else R.texture.mipmaps.length>0?Zt(M.__webglFramebuffer[0],R,0):Zt(M.__webglFramebuffer,R,0);else if(G){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]===void 0)M.__webglDepthbuffer[ie]=i.createRenderbuffer(),si(M.__webglDepthbuffer[ie],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),si(M.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nn(R,M,G){let ie=n.get(R);M!==void 0&&Et(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Dn(R)}function Un(R){let M=R.texture,G=n.get(R),ie=n.get(M);R.addEventListener("dispose",B),D(R);let Q=R.textures,ae=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++),ae){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){G.__webglFramebuffer[Z]=[];for(let $=0;$<M.mipmaps.length;$++)G.__webglFramebuffer[Z][$]=i.createFramebuffer()}else G.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)G.__webglFramebuffer[Z]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Z=0,$=Q.length;Z<$;Z++){let ce=n.get(Q[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&me(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let $=Q[Z];G.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Z]);let ce=r.convert($.format,$.colorSpace),L=r.convert($.type),K=E($.internalFormat,ce,L,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),Y=Mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,K,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,G.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),si(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ct(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Et(G.__webglFramebuffer[Z][$],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else Et(G.__webglFramebuffer[Z],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Z=0,$=Q.length;Z<$;Z++){let ce=Q[Z],L=n.get(ce),K=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,L.__webglTexture),ct(K,ce),Et(G.__webglFramebuffer,R,ce,i.COLOR_ATTACHMENT0+Z,K,0),w(ce)&&y(K)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),ct(Z,M),M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Et(G.__webglFramebuffer[$],R,M,i.COLOR_ATTACHMENT0,Z,$);else Et(G.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,Z,0);w(M)?y(Z):M.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Dn(R)}function F(R){let M=R.textures;for(let G=0,ie=M.length;G<ie;G++){let Q=M[G];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let ae=T(R),fe=n.get(Q).__webglTexture;t.bindTexture(ae,fe),y(ae),t.unbindTexture()}}}let Fn=[];function vt(R){if(R.samples>0){if(me(R)===!1){let M=R.textures,G=R.width,ie=R.height,Q=i.COLOR_BUFFER_BIT,ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),Z=M.length>1;if(Z)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);let L=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,ie,0,0,G,ie,Q,i.NEAREST),c===!0&&(Fn.length=0,Fn.push(i.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Fn.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);let L=n.get(M[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Mt(R){return Math.min(s.maxSamples,R.samples)}function me(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Gt(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Le(R,M){let G=R.colorSpace,ie=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==eo&&G!==ni&&(Ke.getTransfer(G)===ot?(ie!==In||Q!==vn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",G)),M}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=De,this.resetTextureUnits=J,this.getTextureUnits=ee,this.setTextureUnits=Me,this.setTexture2D=ue,this.setTexture2DArray=be,this.setTexture3D=Pe,this.setTextureCube=xe,this.rebindTextures=Nn,this.setupRenderTarget=Un,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Dn,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=me,this.dispose=O}function vv(i,e){function t(n,s=ni){let r,o=Ke.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===wh)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Rh)return i.RGB;if(n===In)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Io||n===Po||n===Lo||n===Do)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===xl||n===yl||n===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===bl||n===wl||n===El||n===No||n===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===Sl)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===No)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Al)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Gl||n===Vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hl)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wl||n===Xl||n===Uo||n===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function wv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Oh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ev(i,e,t,n){let s={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,w){let y=s[v.id];y===void 0&&(g(v),y=c(v),s[v.id]=y,v.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(l(v),r[v.id]=E)}function c(v){let w=i.createBuffer(),y=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(v){let w=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,_=y.length;E<_;E++){let b=y[E];if(Array.isArray(b))for(let D=0,C=b.length;D<C;D++)h(b[D],E,D,T);else h(b,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(d(v,w,y,T)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let C=_[D],N=x(C,!0);u(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function u(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function d(v,w,y,T){let E=v.value,_=w+"_"+y;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let b=T[_],D=!1;for(let C=0;C<E.length;C++)f(E[C],b,C)===!0&&(D=!0);return D}return f(E,T,_)}function f(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){let w=v.uniforms,y=0,T=16;for(let _=0,b=w.length;_<b;_++){let D=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,N=D.length;C<N;C++){let B=D[C],I=Array.isArray(B.value)?B.value:[B.value],A=Array.isArray(w[_])||Array.isArray(B.value),O=y;for(let z=0,te=I.length;z<te;z++){let W=I[z],J=x(W,A),ee=y%T,Me=ee%J.boundary,De=ee+Me;y+=Me,De!==0&&T-De<J.storage&&(y+=T-De),z===0&&(O=y),y+=J.storage}let j=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new j((y-O)/Float32Array.BYTES_PER_ELEMENT),B.__offset=O}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function x(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let w=v.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}function Av(){return ui===null&&(ui=new oo(Tv,16,16,es,ti),ui.name="DFG_LUT",ui.minFilter=sn,ui.magFilter=sn,ui.wrapS=Bn,ui.wrapT=Bn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var W0,X0,j0,Y0,q0,Z0,$0,K0,J0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,yg,vg,Mg,Sg,bg,wg,Eg,Tg,Ag,Rg,Cg,Ig,Pg,Lg,Dg,Ng,Ug,Fg,Og,Bg,kg,zg,Hg,Gg,Vg,Wg,Xg,jg,Yg,qg,Zg,$g,Kg,Jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,y_,v_,M_,S_,b_,w_,E_,T_,A_,R_,C_,I_,P_,L_,D_,N_,U_,F_,O_,B_,k_,z_,H_,G_,V_,W_,X_,j_,Y_,q_,Z_,$_,K_,J_,Q_,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,_x,xx,yx,vx,Mx,Sx,We,_e,di,Yl,bx,Lp,ko,hp,Cx,Ix,Dp,Np,Px,Lx,Dx,Er,Wx,Up,Fp,Op,Bp,kp,zp,pp,mp,gp,_p,xp,Zh,$h,Kh,Yh,wr,Dy,Ny,Mp,By,ql,Wy,jy,qy,$y,Jy,tv,Qh,eu,cv,fv,pv,mv,gv,Ip,Oo,qh,Mv,Sv,tu,nu,bv,Hp,Tv,ui,Zl,ts=jn(()=>{jh();jh();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:j0,alphamap_pars_fragment:Y0,alphatest_fragment:q0,alphatest_pars_fragment:Z0,aomap_fragment:$0,aomap_pars_fragment:K0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:ag,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:yg,colorspace_pars_fragment:vg,envmap_fragment:Mg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:bg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ug,envmap_vertex:Eg,fog_vertex:Tg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Pg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:kg,lights_physical_fragment:zg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Gg,lights_fragment_maps:Vg,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Zg,map_fragment:$g,map_pars_fragment:Kg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:e_,metalnessmap_pars_fragment:t_,morphinstance_vertex:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:r_,morphtarget_vertex:o_,normal_fragment_begin:a_,normal_fragment_maps:l_,normal_pars_fragment:c_,normal_pars_vertex:h_,normal_vertex:u_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:__,packing:x_,premultiplied_alpha_fragment:y_,project_vertex:v_,dithering_fragment:M_,dithering_pars_fragment:S_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:R_,skinbase_vertex:C_,skinning_pars_vertex:I_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:D_,specularmap_pars_fragment:N_,tonemapping_fragment:U_,tonemapping_pars_fragment:F_,transmission_fragment:O_,transmission_pars_fragment:B_,uv_pars_fragment:k_,uv_pars_vertex:z_,uv_vertex:H_,worldpos_vertex:G_,background_vert:V_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:j_,cube_vert:Y_,cube_frag:q_,depth_vert:Z_,depth_frag:$_,distance_vert:K_,distance_frag:J_,equirect_vert:Q_,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:_x,points_frag:xx,shadow_vert:yx,shadow_frag:vx,sprite_vert:Mx,sprite_frag:Sx},_e={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},di={basic:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:mn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:mn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:mn([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:mn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:mn([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:mn([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:mn([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:mn([_e.lights,_e.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};di.physical={uniforms:mn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};Yl={r:0,b:0,g:0},bx=new Je,Lp=new Oe;Lp.set(-1,0,0,0,1,0,0,0,1);ko=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ft(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ss});r.uniforms.tEquirect.value=t;let o=new oe(s,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=sn),new gr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},hp=256,Cx=3,Ix=20,Dp=256,Np=16,Px=3,Lx=new P,Dx=new He,Er=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gr(1,10,null),this._boxMesh=new oe(new ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Lx}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Dx));let p=new gr(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hp,Uh(e))}_fromTexture(e,t){e.mapping===ws||e.mapping===Mr?this._setSize(e.image.length===0?hp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=up(e,!1,!1),n=Math.log2(e)-Cx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=up(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ws||e.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Nx(),this._integrationMaterial=Ux());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Np);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Px)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Dp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Wx={[gh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};Up=new fn,Fp=new Ci(1,1),Op=new ho(1),Bp=new io,kp=new Va,zp=new co,pp=[],mp=[],gp=new Float32Array(16),_p=new Float32Array(9),xp=new Float32Array(4);Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uy(t.type)}},$h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Py(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ly(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Dy=37297,Ny=0;Mp=new Oe;By={[gh]:"Linear",[_h]:"Reinhard",[xh]:"Cineon",[Co]:"ACESFilmic",[vh]:"AgX",[Mh]:"Neutral",[yh]:"Custom"};ql=new P;Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;qy={[Ms]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};$y={[Mr]:"ENVMAP_MODE_REFRACTION"};Jy={[ol]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};tv=0,Qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eu(e),t.set(e,n)),n}},eu=class{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}};cv=0;fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],gv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ip=new Je,Oo=new P,qh=new P;Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ai({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new tu,m={},v=t.getContextAttributes(),w=null,y=null,T=[],E=[],_=new Re,b=null,D=null,C=new dn;C.viewport=new St;let N=new dn;N.viewport=new St;let B=[C,N],I=new sl,A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ue=T[q];return ue===void 0&&(ue=new dr,T[q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(q){let ue=T[q];return ue===void 0&&(ue=new dr,T[q]=ue),ue.getGripSpace()},this.getHand=function(q){let ue=T[q];return ue===void 0&&(ue=new dr,T[q]=ue),ue.getHandSpace()};function j(q){let ue=E.indexOf(q.inputSource);if(ue===-1)return;let be=T[ue];be!==void 0&&(be.update(q.inputSource,q.frame,l||o),be.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",te);for(let q=0;q<T.length;q++){let ue=E[q];ue!==null&&(E[q]=null,T[q].disconnect(ue))}A=null,O=null,p.reset();for(let q in m)delete m[q];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,y=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),D!==null){let q=D.camera;q.fov=D.fov,q.zoom=D.zoom,q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",z),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?Li:Ei,Pe=v.stencil?Ts:ei);let ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Rn(d.textureWidth,d.textureHeight,{format:In,type:vn,depthTexture:new Ci(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Rn(f.framebufferWidth,f.framebufferHeight,{format:In,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(q){for(let ue=0;ue<q.removed.length;ue++){let be=q.removed[ue],Pe=E.indexOf(be);Pe>=0&&(E[Pe]=null,T[Pe].disconnect(be))}for(let ue=0;ue<q.added.length;ue++){let be=q.added[ue],Pe=E.indexOf(be);if(Pe===-1){for(let ze=0;ze<T.length;ze++)if(ze>=E.length){E.push(be),Pe=ze;break}else if(E[ze]===null){E[ze]=be,Pe=ze;break}if(Pe===-1)break}let xe=T[Pe];xe&&xe.connect(be)}}function W(q,ue){ue===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ue.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ue=q.near,be=q.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(be=p.depthFar)),I.near=N.near=C.near=ue,I.far=N.far=C.far=be,(A!==I.near||O!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,O=I.far),I.layers.mask=q.layers.mask|6,C.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;let Pe=q.parent,xe=I.cameras;W(I,Pe);for(let ze=0;ze<xe.length;ze++)W(xe[ze],Pe);I.projectionMatrix.copy(C.projectionMatrix),I.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&q.isPerspectiveCamera&&(D={camera:q,fov:q.fov,zoom:q.zoom}),J(q,I,Pe)};function J(q,ue,be){be===null?q.matrix.copy(ue.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(ue.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(q){return m[q]};let ee=null;function Me(q,ue){if(h=ue.getViewerPose(l||o),g=ue,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;be.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Ue=0;Ue<be.length;Ue++){let ct=be[Ue],ut=null;if(f!==null)ut=f.getViewport(ct);else{let tn=u.getViewSubImage(d,ct);ut=tn.viewport,Ue===0&&(e.setRenderTargetTextures(y,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(y))}let qe=B[Ue];qe===void 0&&(qe=new dn,qe.layers.enable(Ue),qe.viewport=new St,B[Ue]=qe),qe.matrix.fromArray(ct.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ct.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ut.x,ut.y,ut.width,ut.height),Ue===0&&(I.matrix.copy(qe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(qe)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ue=u.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<be.length;Ue++){let ct=be[Ue].camera;if(ct){let ut=m[ct];ut||(ut=new uo,m[ct]=ut);let qe=u.getCameraImage(ct);ut.sourceTexture=qe}}}}for(let be=0;be<T.length;be++){let Pe=E[be],xe=T[be];Pe!==null&&xe!==void 0&&xe.update(Pe,ue,l||o)}ee&&ee(q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let De=new Pp;De.setAnimationLoop(Me),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}},bv=new Je,Hp=new Oe;Hp.set(-1,0,0,0,1,0,0,0,1);Tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;Zl=class{constructor(e={}){let{canvas:t=ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([gl,ml,pl]),m=new Set([vn,ei,br,Ts,ul,dl]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,B=null,I=null,A=null,O=null;this._outputColorSpace=Qt;let j=0,z=0,te=null,W=-1,J=null,ee=new St,Me=new St,De=null,q=new He(0),ue=0,be=t.width,Pe=t.height,xe=1,ze=null,Nt=null,Ue=new St(0,0,be,Pe),ct=new St(0,0,be,Pe),ut=!1,qe=new ji,tn=new Wa,Ht=!1,xn=!1,Et=new Je,si=new P,Zt=new St,Dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nn=!1;function Un(){return te===null?xe:1}let F=n;function Fn(S,U){return t.getContext(S,U)}let vt,Mt,me,Gt,Le,Be,R,M,G,ie,Q,ae,fe,Z,$,ce,L,K,Y,he,re,le,Ae;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xr}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){let U="webgl2";if(F=Fn(U,S),F===null)throw Fn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(S){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Fe("WebGLRenderer: "+S.message),S}function Ve(){vt=new Bx(F),vt.init(),re=new vv(F,vt),Mt=new Ax(F,vt,e,re),me=new xv(F,vt),Mt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),I=F.createFramebuffer(),A=F.createFramebuffer(),O=F.createFramebuffer(),Gt=new Hx(F),Le=new sv,Be=new yv(F,vt,me,Le,Mt,re,Gt),R=new Ox(C),M=new V0(F),le=new Ex(F,M),G=new kx(F,M,Gt,le),ie=new Vx(F,G,M,le,Gt),K=new Gx(F,Mt,Be),$=new Rx(Le),Q=new iv(C,R,vt,Mt,le,$),ae=new wv(C,Le),fe=new ov,Z=new dv(vt),L=new wx(C,R,me,ie,g,c),ce=new _v(C,ie,Mt),Ae=new Ev(F,Gt,Mt,me),Y=new Tx(F,vt,Gt),he=new zx(F,vt,Gt),Gt.programs=Q.programs,C.capabilities=Mt,C.extensions=vt,C.properties=Le,C.renderLists=fe,C.shadowMap=ce,C.state=me,C.info=Gt}x!==vn&&(D=new Xx(x,t.width,t.height,a,s,r));let se=new nu(C,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(S){S!==void 0&&(xe=S,this.setSize(be,Pe,!1))},this.getSize=function(S){return S.set(be,Pe)},this.setSize=function(S,U,X=!0){if(se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}be=S,Pe=U,t.width=Math.floor(S*xe),t.height=Math.floor(U*xe),X===!0&&(t.style.width=S+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(be*xe,Pe*xe).floor()},this.setDrawingBufferSize=function(S,U,X){be=S,Pe=U,xe=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===vn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(Ue)},this.setViewport=function(S,U,X,H){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,U,X,H),me.viewport(ee.copy(Ue).multiplyScalar(Un()).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,U,X,H){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,U,X,H),me.scissor(Me.copy(ct).multiplyScalar(Un()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(S){me.setScissorTest(ut=S)},this.setOpaqueSort=function(S){ze=S},this.setTransparentSort=function(S){Nt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let H=0;if(S){let V=!1;if(te!==null){let pe=te.texture.format;V=p.has(pe)}if(V){let pe=te.texture.type,Se=m.has(pe),de=L.getClearColor(),ye=L.getClearAlpha(),Te=de.r,ke=de.g,Ze=de.b;Se?(v[0]=Te,v[1]=ke,v[2]=Ze,v[3]=ye,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Te,w[1]=ke,w[2]=Ze,w[3]=ye,F.clearBufferiv(F.COLOR,0,w))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),L.dispose(),fe.dispose(),Z.dispose(),Be.dispose(),Le.dispose(),R.dispose(),ie.dispose(),G.dispose(),le.dispose(),Ae.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Pd),se.removeEventListener("sessionend",Ld),ls.stop()};function Ce(S){S.preventDefault(),Dh("WebGLRenderer: Context Lost."),N=!0}function Ge(){Dh("WebGLRenderer: Context Restored."),N=!1;let S=Gt.autoReset,U=ce.enabled,X=ce.autoUpdate,H=ce.needsUpdate,V=ce.type;Ve(),Gt.autoReset=S,ce.enabled=U,ce.autoUpdate=X,ce.needsUpdate=H,ce.type=V}function ge(S){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){let U=S.target;U.removeEventListener("dispose",ht),$t(U)}function $t(S){Fi(S),Le.remove(S)}function Fi(S){let U=Le.get(S).programs;U!==void 0&&(U.forEach(function(X){Q.releaseProgram(X)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,H,V,pe){U===null&&(U=Dn);let Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,de=km(S,U,X,H,V);me.setMaterial(H,Se);let ye=X.index,Te=1;if(H.wireframe===!0){if(ye=G.getWireframeAttribute(X),ye===void 0)return;Te=2}let ke=X.drawRange,Ze=X.attributes.position,we=ke.start*Te,$e=(ke.start+ke.count)*Te;pe!==null&&(we=Math.max(we,pe.start*Te),$e=Math.min($e,(pe.start+pe.count)*Te)),ye!==null?(we=Math.max(we,0),$e=Math.min($e,ye.count)):Ze!=null&&(we=Math.max(we,0),$e=Math.min($e,Ze.count));let Ut=$e-we;if(Ut<0||Ut===1/0)return;le.setup(V,H,de,X,ye);let mt,dt=Y;if(ye!==null&&(mt=M.get(ye),dt=he,dt.setIndex(mt)),V.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*Un()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(V.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),me.setLineWidth(ln*Un()),V.isLineSegments?dt.setMode(F.LINES):V.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else V.isPoints?dt.setMode(F.POINTS):V.isSprite&&dt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ln=V._multiDrawStarts,Ee=V._multiDrawCounts,_n=V._multiDrawCount,nt=ye?M.get(ye).bytesPerElement:1,cs=Le.get(H).currentProgram.getUniforms();for(let cn=0;cn<_n;cn++)cs.setValue(F,"_gl_DrawID",cn),dt.render(ln[cn]/nt,Ee[cn])}else if(V.isInstancedMesh)dt.renderInstances(we,Ut,V.count);else if(X.isInstancedBufferGeometry){let ln=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,ln);dt.renderInstances(we,Ut,Ee)}else dt.render(we,Ut)};function Id(S,U,X,H){B!==null&&S.isNodeMaterial&&B.setObject(H,S),Ht===!0&&$.setState(S,X,!1),S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,Gr(S,U,H),S.side=ci,S.needsUpdate=!0,Gr(S,U,H),S.side=pn):Gr(S,U,H)}this.compile=function(S,U,X=null){X===null&&(X=S),B!==null&&B.renderStart(S,U,X),E=Z.get(X),E.init(U),b.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),xn=this.localClippingEnabled,Ht=$.init(this.clippingPlanes,xn),Ht===!0&&$.setGlobalState(this.clippingPlanes,U),B!==null&&ce.render(E.state.shadowsArray,X,U);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pe=V.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let de=pe[Se];Id(de,X,U,V),H.add(de)}else Id(pe,X,U,V),H.add(pe)}),E=b.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(S,U,X=null){let H=this.compile(S,U,X);return new Promise(V=>{function pe(){if(H.forEach(function(Se){let ye=Le.get(Se).currentProgram;(ye===void 0||ye.isReady())&&H.delete(Se)}),H.size===0){V(S);return}setTimeout(pe,10)}vt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Lc=null;function Om(S){Lc&&Lc(S)}function Pd(){ls.stop()}function Ld(){ls.start()}let ls=new Pp;ls.setAnimationLoop(Om),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(S){Lc=S,se.setAnimationLoop(S),S===null?ls.stop():ls.start()},se.addEventListener("sessionstart",Pd),se.addEventListener("sessionend",Ld),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(S,U);let X=se.enabled===!0&&se.isPresenting===!0,H=D!==null&&(te===null||X)&&D.begin(C,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,te),E=Z.get(S,b.length),E.init(U),E.state.textureUnits=Be.getTextureUnits(),b.push(E),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?tn.setFromArrayCamera(U):qe.setFromProjectionMatrix(Et,kn,U.reversedDepth),xn=this.localClippingEnabled,Ht=$.init(this.clippingPlanes,xn),T=fe.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Dc(Se,U,-1/0,C.sortObjects)}Dc(S,U,0,C.sortObjects),T.finish(),B!==null&&B.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(ze,Nt),Nn=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Nn&&L.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&$.beginShadows();let V=E.state.shadowsArray;if(ce.render(V,S,U),Ht===!0&&$.endShadows(),(H&&D.hasRenderPass())===!1){let Se=T.opaque,de=T.transmissive;if(E.setupLights(),U.isArrayCamera){let ye=U.cameras;if(de.length>0)for(let Te=0,ke=ye.length;Te<ke;Te++){let Ze=ye[Te];Nd(Se,de,S,Ze)}Nn&&L.render(S);for(let Te=0,ke=ye.length;Te<ke;Te++){let Ze=ye[Te];Dd(T,S,Ze,Ze.viewport)}}else de.length>0&&Nd(Se,de,S,U),Nn&&L.render(S),Dd(T,S,U)}te!==null&&z===0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te)),H&&D.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),le.resetDefaultState(),W=-1,J=null,b.pop(),b.length>0?(E=b[b.length-1],Be.setTextureUnits(E.state.textureUnits),Ht===!0&&$.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,B!==null&&B.renderEnd()};function Dc(S,U,X,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let Se=U.isArrayCamera?tn:qe;if(!S.frustumCulled||S.intersectsFrustum(Se)){H&&Zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Et);let de=ie.update(S),ye=S.material;ye.visible&&T.push(S,de,ye,X,Zt.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let Se=U.isArrayCamera?tn:qe;if(!S.frustumCulled||S.intersectsFrustum(Se)){let de=ie.update(S),ye=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Zt.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Zt.copy(de.boundingSphere.center)),Zt.applyMatrix4(S.matrixWorld).applyMatrix4(Et)),Array.isArray(ye)){let Te=de.groups;for(let ke=0,Ze=Te.length;ke<Ze;ke++){let we=Te[ke],$e=ye[we.materialIndex];$e&&$e.visible&&T.push(S,de,$e,X,Zt.z,we,U)}}else ye.visible&&T.push(S,de,ye,X,Zt.z,null,U)}}}let pe=S.children;for(let Se=0,de=pe.length;Se<de;Se++)Dc(pe[Se],U,X,H)}function Dd(S,U,X,H){let{opaque:V,transmissive:pe,transparent:Se}=S;E.setupLightsView(X),Ht===!0&&$.setGlobalState(C.clippingPlanes,X),H&&me.viewport(ee.copy(H)),V.length>0&&ca(V,U,X),pe.length>0&&ca(pe,U,X),Se.length>0&&ca(Se,U,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Nd(S,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let we=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Rn(1,1,{generateMipmaps:!0,type:we?ti:vn,minFilter:Qn,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let pe=E.state.transmissionRenderTarget[H.id],Se=H.viewport||ee;pe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ye=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(q),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),Nn&&L.render(X);let ke=C.toneMapping;C.toneMapping=hi;let Ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Ht===!0&&$.setGlobalState(C.clippingPlanes,H),ca(S,X,H),Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let $e=0,Ut=U.length;$e<Ut;$e++){let mt=U[$e],{object:dt,geometry:ln,material:Ee,group:_n}=mt;if(Ee.side===pn&&dt.layers.test(H.layers)){let nt=Ee.side;Ee.side=on,Ee.needsUpdate=!0,Ud(dt,X,H,ln,Ee,_n),Ee.side=nt,Ee.needsUpdate=!0,we=!0}}we===!0&&(Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe))}C.setRenderTarget(de,ye,Te),C.setClearColor(q,ue),Ze!==void 0&&(H.viewport=Ze),C.toneMapping=ke}function ca(S,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,pe=S.length;V<pe;V++){let Se=S[V],{object:de,geometry:ye,group:Te}=Se,ke=Se.material;ke.allowOverride===!0&&H!==null&&(ke=H),de.layers.test(X.layers)&&Ud(de,U,X,ye,ke,Te)}}function Ud(S,U,X,H,V,pe){B!==null&&V.isNodeMaterial&&B.setObject(S,V),S.onBeforeRender(C,U,X,H,V,pe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,U,X,H,S,pe),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,C.renderBufferDirect(X,U,H,V,S,pe),V.side=ci,V.needsUpdate=!0,C.renderBufferDirect(X,U,H,V,S,pe),V.side=pn):C.renderBufferDirect(X,U,H,V,S,pe),S.onAfterRender(C,U,X,H,V,pe)}function Fd(S){let U=0;for(let X of S)X.texture!==null&&U++;return U}function Gr(S,U,X){U.isScene!==!0&&(U=Dn);let H=Le.get(S),V=E.state.lights,pe=E.state.shadowsArray,Se=V.state.version,de=Q.getParameters(S,V.state,pe,U,X,E.state.lightProbeGridArray),ye=Q.getProgramCacheKey(de),Te=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=R.get(S.envMap||H.environment,ke),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",ht),Te=new Map,H.programs=Te,H.programVariants=new Map);let Ze=Te.get(ye);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===Se)return Bd(S,de),Ze}else de.uniforms=Q.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,X,de),S.onBeforeCompile(de,C),Ze=Q.acquireProgram(de,ye),Te.set(ye,Ze),H.uniforms=de.uniforms;let we=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=$.uniform),Bd(S,de),H.needsLights=Hm(S),H.lightsStateVersion=Se,H.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.sunLights.value=V.state.sun,we.sunLightShadows.value=V.state.sunShadow,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.sunShadowMatrix.value=V.state.sunShadowMatrix,we.sunShadowCascade.value=V.state.sunShadowCascade,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Fd(E.state.lightProbeGridArray),H.currentProgram=Ze,H.uniformsList=null,Ze}function Bm(S,U,X,H,V){let pe=Le.get(S),Se=pe.currentProgram.id+","+H+","+V,de=pe.programVariants.get(Se);return de===void 0?(de=Gr(S,U,X),pe.programVariants.set(Se,de)):(pe.currentProgram=de,pe.uniformsList=null,pe.outputColorSpace=H,pe.toneMapping=V),de}function Od(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=wr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Bd(S,U){let X=Le.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function km(S,U,X,H,V){U.isScene!==!0&&(U=Dn),Be.resetTextureUnits();let pe=U.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,de=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ke.workingColorSpace,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=R.get(H.envMap||Se,ye),ke=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Ut=!!X.morphAttributes.color,mt=hi;H.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mt=C.toneMapping);let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ln=dt!==void 0?dt.length:0,Ee=Le.get(H),_n=E.state.lights;if(Ht===!0&&(xn===!0||S!==J)){let Tt=S===J&&H.id===W;$.setState(H,S,Tt)}let nt=!1,cs=!1;H.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==_n.state.version||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Te||H.fog===!0&&Ee.fog!==pe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==$.numPlanes||Ee.numIntersection!==$.numIntersection)||Ee.vertexAlphas!==ke||Ee.vertexTangents!==Ze||Ee.morphTargets!==we||Ee.morphNormals!==$e||Ee.morphColors!==Ut||Ee.morphTargetsCount!==ln||Ee.numLightProbeGrids!==Fd(E.state.lightProbeGridArray)?nt=!0:(Ee.outputColorSpace!==de||Ee.toneMapping!==mt)&&(cs=!0):(nt=!0,Ee.__version=H.version);let cn=Ee.currentProgram;(nt===!0||cs===!0)&&(cn=cs===!0?Bm(H,U,V,de,mt):Gr(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,cn,Ee));let ha=!1,Oi=!1,hs=!1,et=cn.getUniforms(),nn=Ee.uniforms;if(me.useProgram(cn.program)&&(ha=!0,Oi=!0,hs=!0),H.id!==W&&(W=H.id,Oi=!0),ha||J!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),et.setValue(F,"projectionMatrix",S.projectionMatrix),et.setValue(F,"viewMatrix",S.matrixWorldInverse);let Kt=et.map.cameraPosition;Kt!==void 0&&Kt.setValue(F,si.setFromMatrixPosition(S.matrixWorld)),Mt.logarithmicDepthBuffer&&et.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&et.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Oi=!0,hs=!0)}if(Ee.needsLights&&(_n.state.sunShadowMap.length>0&&et.setValue(F,"sunShadowMap",_n.state.sunShadowMap,Be),_n.state.directionalShadowMap.length>0&&et.setValue(F,"directionalShadowMap",_n.state.directionalShadowMap,Be),_n.state.spotShadowMap.length>0&&et.setValue(F,"spotShadowMap",_n.state.spotShadowMap,Be),_n.state.pointShadowMap.length>0&&et.setValue(F,"pointShadowMap",_n.state.pointShadowMap,Be)),V.isSkinnedMesh){et.setOptional(F,V,"bindMatrix"),et.setOptional(F,V,"bindMatrixInverse");let Tt=V.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),et.setValue(F,"boneTexture",Tt.boneTexture,Be))}V.isBatchedMesh&&(et.setOptional(F,V,"batchingTexture"),et.setValue(F,"batchingTexture",V._matricesTexture,Be),et.setOptional(F,V,"batchingIdTexture"),et.setValue(F,"batchingIdTexture",V._indirectTexture,Be),et.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&et.setValue(F,"batchingColorTexture",V._colorsTexture,Be));let Xn=X.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&K.update(V,X,cn),(Oi||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,et.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Av()),Oi){if(et.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&zm(nn,hs),pe&&H.fog===!0&&ae.refreshFogUniforms(nn,pe),ae.refreshMaterialUniforms(nn,H,xe,Pe,E.state.transmissionRenderTarget[S.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let Tt=y,Kt=0;for(let _i of E.state.lightProbeGridArray)_i.texture!==null&&(Tt.textures[Kt]=_i.texture,Tt.min[Kt]=_i.boundingBox.min,Tt.max[Kt]=_i.boundingBox.max,Tt.resolution[Kt]=_i.resolution,Kt++);for(let _i in Tt)Tt[_i].length=Kt;nn.probesSH.value=Tt.textures,nn.probesMin.value=Tt.min,nn.probesMax.value=Tt.max,nn.probesResolution.value=Tt.resolution}wr.upload(F,Od(Ee),nn,Be)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wr.upload(F,Od(Ee),nn,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&et.setValue(F,"center",V.center),et.setValue(F,"modelViewMatrix",V.modelViewMatrix),et.setValue(F,"normalMatrix",V.normalMatrix),et.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Tt=H.uniformsGroups;for(let Kt=0,_i=Tt.length;Kt<_i;Kt++){let zd=Tt[Kt];Ae.update(zd,cn),Ae.bind(zd,cn)}}return cn}function zm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Hm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,U,X){let H=Le.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Le.get(S.texture).__webglTexture=U,Le.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let X=Le.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){te=S,j=U,z=X;let H=null,V=!1,pe=!1;if(S){let de=Le.get(S);if(de.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(S.viewport),Me.copy(S.scissor),De=S.scissorTest,me.viewport(ee),me.scissor(Me),me.setScissorTest(De),W=-1;return}else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(S);else if(de.__hasExternalTextures)Be.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ke=S.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(S)}}let ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);let Te=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?H=Te[U][X]:H=Te[U],V=!0):S.samples>0&&Be.useMultisampledRTT(S)===!1?H=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[X]:H=Te,ee.copy(S.viewport),Me.copy(S.scissor),De=S.scissorTest}else ee.copy(Ue).multiplyScalar(xe).floor(),Me.copy(ct).multiplyScalar(xe).floor(),De=ut;if(X!==0&&(H=I),me.bindFramebuffer(F.FRAMEBUFFER,H)&&me.drawBuffers(S,H),me.viewport(ee),me.scissor(Me),me.setScissorTest(De),V){let de=Le.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,X)}else if(pe){let de=U;for(let ye=0;ye<S.textures.length;ye++){let Te=Le.get(S.textures[ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ye,Te.__webglTexture,X,de)}}else if(S!==null&&X!==0){let de=Le.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,X)}W=-1};function kd(S){let U=Le.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=Mt.textureFormatReadable(S.format),U.__typeReadable=Mt.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,X,H,V,pe,Se,de=0){if(!(S&&S.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se],Array.isArray(ye)&&(ye=ye[0])),ye){me.bindFramebuffer(F.FRAMEBUFFER,ye);try{let Te=S.textures[de],ke=Te.format,Ze=Te.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let we=kd(Te);if(we.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&X>=0&&X<=S.height-V&&F.readPixels(U,X,H,V,re.convert(ke),re.convert(Ze),pe)}finally{let Te=te!==null?Le.get(te).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,H,V,pe,Se,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se],Array.isArray(ye)&&(ye=ye[0])),ye)if(U>=0&&U<=S.width-H&&X>=0&&X<=S.height-V){me.bindFramebuffer(F.FRAMEBUFFER,ye);let Te=S.textures[de],ke=Te.format,Ze=Te.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let we=kd(Te);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(U,X,H,V,re.convert(ke),re.convert(Ze),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ut=te!==null?Le.get(te).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ut);let mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await np(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer($e),F.deleteSync(mt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,X=0){let H=Math.pow(2,-X),V=Math.floor(S.image.width*H),pe=Math.floor(S.image.height*H),Se=U!==null?U.x:0,de=U!==null?U.y:0;Be.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Se,de,V,pe),me.unbindTexture()},this.copyTextureToTexture=function(S,U,X=null,H=null,V=0,pe=0){let Se,de,ye,Te,ke,Ze,we,$e,Ut,mt=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(X!==null)Se=X.max.x-X.min.x,de=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,ke=X.min.y,Ze=X.isBox3?X.min.z:0;else{let et=Math.pow(2,-V);Se=Math.floor(mt.width*et),de=Math.floor(mt.height*et),S.isDataArrayTexture?ye=mt.depth:S.isData3DTexture?ye=Math.floor(mt.depth*et):ye=1,Te=0,ke=0,Ze=0}H!==null?(we=H.x,$e=H.y,Ut=H.z):(we=0,$e=0,Ut=0);let dt=re.convert(U.format),ln=re.convert(U.type),Ee;U.isData3DTexture?(Be.setTexture3D(U,0),Ee=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),Ee=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),Ee=F.TEXTURE_2D),me.activeTexture(F.TEXTURE0),me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let _n=me.getParameter(F.UNPACK_ROW_LENGTH),nt=me.getParameter(F.UNPACK_IMAGE_HEIGHT),cs=me.getParameter(F.UNPACK_SKIP_PIXELS),cn=me.getParameter(F.UNPACK_SKIP_ROWS),ha=me.getParameter(F.UNPACK_SKIP_IMAGES);me.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),me.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),me.pixelStorei(F.UNPACK_SKIP_ROWS,ke),me.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);let Oi=S.isDataArrayTexture||S.isData3DTexture,hs=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let et=Le.get(S),nn=Le.get(U),Xn=Le.get(et.__renderTarget),Tt=Le.get(nn.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,Xn.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Kt=0;Kt<ye;Kt++)Oi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,V,Ze+Kt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(U).__webglTexture,pe,Ut+Kt)),F.blitFramebuffer(Te,ke,Te+Se,ke+de,we,$e,we+Se,$e+de,F.DEPTH_BUFFER_BIT,F.NEAREST);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||Le.has(S)){let et=Le.get(S),nn=Le.get(U);me.bindFramebuffer(F.READ_FRAMEBUFFER,A),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Xn=0;Xn<ye;Xn++)Oi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,et.__webglTexture,V,Ze+Xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,et.__webglTexture,V),hs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,pe,Ut+Xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,pe),V!==0?F.blitFramebuffer(Te,ke,Te+Se,ke+de,we,$e,we+Se,$e+de,F.COLOR_BUFFER_BIT,F.NEAREST):hs?F.copyTexSubImage3D(Ee,pe,we,$e,Ut+Xn,Te,ke,Se,de):F.copyTexSubImage2D(Ee,pe,we,$e,Te,ke,Se,de);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hs?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ee,pe,we,$e,Ut,Se,de,ye,dt,ln,mt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,pe,we,$e,Ut,Se,de,ye,dt,mt.data):F.texSubImage3D(Ee,pe,we,$e,Ut,Se,de,ye,dt,ln,mt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,we,$e,Se,de,dt,ln,mt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,we,$e,mt.width,mt.height,dt,mt.data):F.texSubImage2D(F.TEXTURE_2D,pe,we,$e,Se,de,dt,ln,mt);me.pixelStorei(F.UNPACK_ROW_LENGTH,_n),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),me.pixelStorei(F.UNPACK_SKIP_PIXELS,cs),me.pixelStorei(F.UNPACK_SKIP_ROWS,cn),me.pixelStorei(F.UNPACK_SKIP_IMAGES,ha),pe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&Be.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Be.setTextureCube(S,0):S.isData3DTexture?Be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Be.setTexture2DArray(S,0):Be.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){j=0,z=0,te=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});function Jl(i){return{...an[i]?.params||{},...Rv}}function Ar(i){let e=Jl(i),t={};for(let n in e)t[n]=e[n].def;return t}function Ho(i,e){let t=an[i]||an.box,n={...Ar(i),...e},s;try{s=t.build(n)}catch{s=new ft(1,1,1)}return Cv(s,Number(n.taper)||0,Number(n.twist)||0),s.computeBoundingSphere(),s}function Cv(i,e,t){if(!e&&!t)return;let n=i.attributes.position;if(!n)return;i.computeBoundingBox();let s=i.boundingBox,r=Math.max(1e-6,s.max.y-s.min.y),o=t*Math.PI/180;for(let a=0;a<n.count;a++){let c=n.getY(a),l=(c-s.min.y)/r,h=Math.max(.05,1+e*l),u=n.getX(a)*h,d=n.getZ(a)*h;if(t){let f=o*l,g=Math.cos(f),x=Math.sin(f),p=u*g-d*x,m=u*x+d*g;u=p,d=m}n.setXYZ(a,u,c,d)}n.needsUpdate=!0,i.computeVertexNormals()}function Vp(i){return Gp[i%Gp.length]}function Go(i="#7cc7ff"){return{color:i,metalness:.25,roughness:.42,emissive:"#000000",emissiveIntensity:1,opacity:1,wireframe:!1,flatShading:!1}}function ru(i,e){let t=i.material;if(!t||!t.isMeshStandardMaterial)return;let n=!!e.flatShading;t.flatShading!==n&&(t.flatShading=n,t.needsUpdate=!0),t.color.set(e.color),t.metalness=e.metalness,t.roughness=e.roughness,t.emissive.set(e.emissive||"#000000"),t.emissiveIntensity=e.emissiveIntensity??1,t.opacity=e.opacity??1,t.transparent=(e.opacity??1)<1,t.wireframe=!!e.wireframe,t.depthWrite=(e.opacity??1)>=1}function ou(i){let e=Ho(i.type,i.params),t=new li({color:i.material?.color||"#7cc7ff",metalness:i.material?.metalness??.25,roughness:i.material?.roughness??.42,envMapIntensity:1,side:i.type==="plane"?pn:ci}),n=new oe(e,t);return n.castShadow=!0,n.receiveShadow=!0,n.name=i.name,n.userData.id=i.id,n.userData.paramSig=JSON.stringify(i.params),ru(n,i.material||Go()),n}var at,an,su,Rv,Gp,Ql=jn(()=>{ts();at=(i,e,t,n,s)=>({label:i,def:e,min:t,max:n,step:s}),an={box:{label:"Box",icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',params:{w:at("Width",1,.05,20,.05),h:at("Height",1,.05,20,.05),d:at("Depth",1,.05,20,.05)},build:i=>new ft(i.w,i.h,i.d,1,1,1)},sphere:{label:"Sphere",icon:'<circle cx="12" cy="12" r="8.5"/><ellipse cx="12" cy="12" rx="8.5" ry="3.4"/><path d="M12 3.5v17"/>',params:{r:at("Radius",.6,.05,10,.05),wseg:at("Segments",40,6,96,2),hseg:at("Rings",26,4,64,1)},build:i=>new _s(i.r,i.wseg,i.hseg)},cylinder:{label:"Cylinder",icon:'<path d="M4 7.5c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5-3.6 3.5-8 3.5-8-1.5-8-3.5z"/><path d="M4 7.5v9c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-9"/>',params:{rt:at("Top radius",.5,.01,10,.02),rb:at("Base radius",.5,.01,10,.02),h:at("Height",1.2,.05,20,.05),seg:at("Segments",40,3,96,1)},build:i=>new Pt(i.rt,i.rb,i.h,i.seg,1)},cone:{label:"Cone",icon:'<path d="M12 3.5l7.5 15.5h-15z"/><ellipse cx="12" cy="19" rx="7.5" ry="2.2"/>',params:{r:at("Radius",.6,.02,10,.02),h:at("Height",1.3,.05,20,.05),seg:at("Segments",40,3,96,1)},build:i=>new mo(i.r,i.h,i.seg,1)},torus:{label:"Torus",icon:'<ellipse cx="12" cy="12" rx="9" ry="6.5"/><ellipse cx="12" cy="12" rx="4" ry="2.4"/>',params:{r:at("Radius",.55,.05,8,.05),tube:at("Thickness",.18,.01,4,.01),rseg:at("Sides",20,3,64,1),tseg:at("Segments",64,3,160,2)},build:i=>new Jn(i.r,i.tube,i.rseg,i.tseg)},capsule:{label:"Capsule",icon:'<path d="M8.5 9a3.5 3.5 0 017 0v6a3.5 3.5 0 01-7 0z"/>',params:{r:at("Radius",.4,.02,6,.02),h:at("Height",.8,.05,20,.05),seg:at("Segments",32,3,64,1)},build:i=>new fo(i.r,i.h,8,i.seg)},knot:{label:"Knot",icon:'<path d="M7 8.5c3-3 9-3 10 1s-4 6-9 5.5S3 12 7 8.5z"/><path d="M9.5 16.5c-2.5 1-4-3-1-5s8-2 9 1.5"/>',params:{r:at("Radius",.5,.05,6,.05),tube:at("Thickness",.16,.01,3,.01),rseg:at("Sides",14,3,64,1),tseg:at("Segments",96,8,256,4)},build:i=>new xo(i.r,i.tube,i.tseg,i.rseg)},icosa:{label:"Crystal",icon:'<path d="M12 3l8 6-8 12-8-12z"/><path d="M4 9h16M12 3v18" opacity=".55"/>',params:{r:at("Radius",.65,.05,8,.05),detail:at("Detail",0,0,3,1)},build:i=>new _o(i.r,Math.round(i.detail))},plane:{label:"Plane",icon:'<path d="M3.5 8.5l7-4 10 5.5-7 4z"/><path d="M3.5 8.5v6l10 6v-6" opacity=".5"/>',params:{w:at("Width",2,.05,40,.05),h:at("Height",2,.05,40,.05)},build:i=>new zn(i.w,i.h)}},su=["box","sphere","cylinder","cone","torus","capsule","knot","icosa","plane"],Rv={taper:at("Taper",0,-.9,1.5,.05),twist:at("Twist",0,-180,180,5)};Gp=["#7cc7ff","#a78bfa","#ff8fab","#5ee6a8","#ffc46b","#6ee7ff","#f0f4ff","#ff9d6b"]});function Rt(i,e){return Vo.has(i)||Vo.set(i,new Set),Vo.get(i).add(e),()=>Iv(i,e)}function Iv(i,e){Vo.get(i)?.delete(e)}function Ne(i,e){Vo.get(i)?.forEach(t=>{try{t(e)}catch(n){console.error(`[bus:${i}]`,n)}})}var Vo,Is=jn(()=>{Vo=new Map});var Bs={};Gs(Bs,{EASES:()=>ec,EASE_LABEL:()=>nc,addClip:()=>xu,addObject:()=>ic,blankProject:()=>lu,canRedo:()=>Ru,canUndo:()=>Au,changeType:()=>pu,clamp:()=>Rr,clearTrack:()=>Eu,clip:()=>tt,commit:()=>Qe,currentTransform:()=>oc,cycleEase:()=>wu,deleteClip:()=>yu,deleteGroup:()=>fu,deleteKey:()=>Pr,deleteObjects:()=>Ns,demoProject:()=>Ur,duplicateObject:()=>Ds,evalObject:()=>Us,getObject:()=>zt,groupMembers:()=>is,hasKeys:()=>Yp,insertKey:()=>Fs,isSelected:()=>Ls,jumpKey:()=>Tu,keyAt:()=>tc,keysFor:()=>Pn,loadLocal:()=>Cu,loadProject:()=>ns,makeObject:()=>uu,moveKey:()=>bu,newProject:()=>cu,primary:()=>Cr,pushHistory:()=>gt,redo:()=>Dr,renameClip:()=>vu,renameObject:()=>mu,sampleTrack:()=>rc,saveLocal:()=>Nr,select:()=>Di,selectGroup:()=>sc,selectMany:()=>Xp,serialize:()=>Iu,setActiveClip:()=>_u,setDuration:()=>Mu,setFps:()=>Su,setTime:()=>ii,state:()=>k,stepFrame:()=>Os,togglePlay:()=>Lr,toggleVisible:()=>gu,uid:()=>Mn,undo:()=>Xo,ungroup:()=>du,uniqueName:()=>Wo,writeTransform:()=>Ir});function lu(i="Untitled scene"){return{v:1,name:i,fps:30,objects:[],clips:[{id:Mn("c"),name:"Clip 1",duration:4,tracks:{}}],activeClipId:null}}function cu(i="Untitled scene"){let e=lu(i);e.activeClipId=e.clips[0].id,k.project=e,k.selectedIds=[],k.time=0,k.playing=!1,k.selectedKey=null,Gn.length=0,Ps.length=0,Qe("reset"),Ne("project:reload")}function ns(i){if(!i||!Array.isArray(i.objects)||!Array.isArray(i.clips))throw new Error("Not an AnimForge project");let e={v:1,name:i.name||"Untitled scene",fps:Rr(Number(i.fps)||30,12,60),objects:i.objects.map(n=>hu(n)),clips:i.clips.map(n=>({id:n.id||Mn("c"),name:n.name||"Clip",duration:Rr(Number(n.duration)||4,.5,60),tracks:n.tracks&&typeof n.tracks=="object"?n.tracks:{}})),activeClipId:i.activeClipId||null};e.clips.length||e.clips.push({id:Mn("c"),name:"Clip 1",duration:4,tracks:{}}),e.clips.some(n=>n.id===e.activeClipId)||(e.activeClipId=e.clips[0].id);let t=new Set(e.objects.map(n=>n.id));for(let n of e.clips)for(let s of Object.keys(n.tracks))t.has(s)||delete n.tracks[s];k.project=e,k.selectedIds=e.objects.length?[e.objects[0].id]:[],k.time=0,k.playing=!1,k.selectedKey=null,Gn.length=0,Ps.length=0,Qe("reset"),Ne("project:reload")}function hu(i){let e=an[i.type]?i.type:"box";return{id:i.id||Mn("o"),name:i.name||e,type:e,params:{...Ar(e),...i.params||{}},pos:au(i.pos,[0,1,0]),rot:au(i.rot,[0,0,0]),scale:au(i.scale,[1,1,1]),visible:i.visible!==!1,group:i.group||null,preset:i.preset||null,material:{...Go(i.material?.color||"#7cc7ff"),...i.material||{}}}}function Di(i,e=!1){let t=(Array.isArray(i)?i:[i]).filter(Boolean);if(e)for(let n of t){let s=k.selectedIds.indexOf(n);s>=0?k.selectedIds.splice(s,1):k.selectedIds.push(n)}else k.selectedIds=t.slice(-1);k.selectedKey=null,Ne("selection"),Ne("timeline:refresh")}function Wo(i){let e=new Set(k.project.objects.map(n=>n.name));if(!e.has(i))return i;let t=2;for(;e.has(`${i} ${t}`);)t++;return`${i} ${t}`}function ic(i,e={}){let t=an[i]||an.box,n=k.project.objects.length,s=Ar(i),r=.5;try{let c=Ho(i,s);c.computeBoundingBox(),r=Math.max(0,-c.boundingBox.min.y),c.dispose()}catch{}let o=e.pos;if(!o&&Array.isArray(e.xz)&&(o=[e.xz[0],r,e.xz[1]]),!o)if(n===0)o=[0,r,0];else{let c=n-1,l=Math.floor(c/8),h=c%8/8*Math.PI*2+l*.42,u=2+l*1.5;o=[Math.cos(h)*u,r,Math.sin(h)*u]}let a={id:Mn("o"),name:Wo(e.name||t.label),type:i,params:s,pos:o,rot:e.rot||[0,0,0],scale:[1,1,1],visible:!0,material:{...Go(Vp(n)),...e.material||{}}};return gt(),k.project.objects.push(a),k.selectedIds=[a.id],Qe("objects"),Ne("selection"),a}function uu({name:i,type:e,params:t,pos:n,rot:s,scale:r,material:o,group:a,preset:c}){return hu({id:Mn("o"),name:Wo(i||(an[e]?.label??"Object")),type:e,params:t,pos:n||[0,1,0],rot:s||[0,0,0],scale:r||[1,1,1],material:o,group:a,preset:c})}function Xp(i){k.selectedIds=[...new Set((i||[]).filter(Boolean))],k.selectedKey=null,Ne("selection"),Ne("timeline:refresh")}function is(i){let e=zt(i);return e?e.group?k.project.objects.filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}function sc(i){let e=is(i);e.length&&(Xp(e),Ne("toast",{msg:`${e.length} parts selected \u2014 drag the gizmo to move, rotate or scale the whole model`,kind:"ok"}))}function du(i){let t=zt(i)?.group;if(t){gt();for(let n of k.project.objects)n.group===t&&(n.group=null,n.preset=null);Qe("objects"),Ne("selection"),Ne("toast",{msg:"Model split into separate objects"})}}function fu(i){let e=is(i);e.length&&Ns(e)}function pu(i,e){let t=zt(i);if(!t||!an[e]||t.type===e)return null;gt();let n=Ar(e),s={};for(let r of Object.keys(n))t.params[r]!==void 0&&(s[r]=t.params[r]);return t.type=e,t.params={...n,...s},Qe("objects"),Ne("selection"),Ne("toast",{msg:`${t.name} \u2192 ${an[e].label}`,kind:"ok"}),t}function Ds(i){let e=zt(i);if(!e)return null;gt();let t=JSON.parse(JSON.stringify(e));t.id=Mn("o"),t.name=Wo(e.name.replace(/ \d+$/,"")+" copy"),t.pos=[e.pos[0]+.35,e.pos[1],e.pos[2]+.35],k.project.objects.push(t);let n=tt();return n?.tracks[i]?.length&&(n.tracks[t.id]=n.tracks[i].map(s=>({...s,pos:[...s.pos],rot:[...s.rot],scale:[...s.scale]}))),k.selectedIds=[t.id],Qe("objects"),Ne("selection"),t}function Ns(i){let e=(Array.isArray(i)?i:[i]).filter(Boolean);if(e.length){gt(),k.project.objects=k.project.objects.filter(t=>!e.includes(t.id));for(let t of k.project.clips)for(let n of e)delete t.tracks[n];k.selectedIds=k.selectedIds.filter(t=>!e.includes(t)),Qe("objects"),Ne("selection")}}function mu(i,e){let t=zt(i);if(!t)return;let n=(e||"").trim().slice(0,40)||t.name;n!==t.name&&(gt(),t.name=Wo(n),Qe("objects"))}function gu(i){let e=zt(i);e&&(gt(),e.visible=!e.visible,Qe("objects"))}function _u(i){k.project.clips.some(e=>e.id===i)&&(k.project.activeClipId=i,k.time=Math.min(k.time,tt().duration),Qe("clip"),Ne("clip"))}function xu(i){gt();let e={id:Mn("c"),name:i||`Clip ${k.project.clips.length+1}`,duration:tt()?.duration||4,tracks:{}};return k.project.clips.push(e),k.project.activeClipId=e.id,k.time=0,Qe("clip"),Ne("clip"),e}function yu(i){k.project.clips.length<=1||(gt(),k.project.clips=k.project.clips.filter(e=>e.id!==i),k.project.activeClipId===i&&(k.project.activeClipId=k.project.clips[0].id),k.time=Math.min(k.time,tt().duration),Qe("clip"),Ne("clip"))}function vu(i,e){let t=k.project.clips.find(s=>s.id===i),n=(e||"").trim().slice(0,40);!t||!n||n===t.name||(gt(),t.name=n,Qe("clip"),Ne("clip"))}function Mu(i){let e=tt();if(!e)return;let t=Rr(Number(i)||1,.5,60);if(t!==e.duration){gt(),e.duration=t,k.time>t&&(k.time=t);for(let n in e.tracks)e.tracks[n]=e.tracks[n].filter(s=>s.t<=t+1e-6);Qe("clip"),Ne("clip")}}function Su(i){let e=Math.round(Rr(Number(i)||30,12,60));e!==k.project.fps&&(gt(),k.project.fps=e,Qe("fps"))}function Yp(i,e=tt()){return(e?.tracks?.[i]?.length||0)>0}function tc(i,e,t=tt()){return Pn(i,t).find(n=>Math.abs(n.t-e)<Lv)||null}function rc(i,e){let t=i.length;if(!t)return null;if(e<=i[0].t)return i[0];if(e>=i[t-1].t)return i[t-1];let n=0,s=t-1;for(;s-n>1;){let h=n+s>>1;i[h].t<=e?n=h:s=h}let r=i[n],o=i[s],a=o.t-r.t||1,c=Nv(r.ease||"smooth",Dv((e-r.t)/a)),l=(h,u)=>h+(u-h)*c;return{t:e,ease:r.ease,pos:[l(r.pos[0],o.pos[0]),l(r.pos[1],o.pos[1]),l(r.pos[2],o.pos[2])],rot:[l(r.rot[0],o.rot[0]),l(r.rot[1],o.rot[1]),l(r.rot[2],o.rot[2])],scale:[l(r.scale[0],o.scale[0]),l(r.scale[1],o.scale[1]),l(r.scale[2],o.scale[2])]}}function Us(i,e,t=tt()){let n=Pn(i.id,t);if(!n.length)return{pos:[...i.pos],rot:[...i.rot],scale:[...i.scale]};let s=rc(n,e);return{pos:[...s.pos],rot:[...s.rot],scale:[...s.scale]}}function qp(i,e,t,n,s){if(!e)return null;e.tracks[i]||(e.tracks[i]=[]);let r=e.tracks[i],o=Math.round(t*1e3)/1e3,a=r.find(l=>Math.abs(l.t-o)<.002);if(a)return a.pos=[...n.pos],a.rot=[...n.rot],a.scale=[...n.scale],s&&(a.ease=s),a;let c={t:o,ease:s||"smooth",pos:[...n.pos],rot:[...n.rot],scale:[...n.scale]};return r.push(c),jp(r),c}function Ir(i,e,{silent:t=!1}={}){let n=zt(i);if(!n)return;let s=tt();if(Yp(i,s)||k.autoKey&&s){let a={...Us(n,k.time,s),...e},c=tc(i,k.time,s);qp(i,s,k.time,a,c?.ease)}else Object.assign(n,e);t||Qe("values")}function Fs(i=k.selectedIds[0],e=k.time){let t=zt(i),n=tt();if(!t||!n)return;if(tc(i,e,n)){Ne("toast",{msg:"Key already exists at this time",kind:"err"});return}gt();let r=Us(t,e,n);qp(i,n,e,r),k.selectedKey={objId:i,key:tc(i,e,n)},Qe("keys"),Ne("clip"),Ne("toast",{msg:`Key added \xB7 ${t.name} @ ${e.toFixed(2)}s`,kind:"ok"})}function Pr(i,e=k.time){let t=tt(),n=Pn(i,t),s=n.findIndex(r=>Math.abs(r.t-e)<.002);return s<0?!1:(gt(),n.splice(s,1),n.length||delete t.tracks[i],k.selectedKey=null,Qe("keys"),Ne("clip"),!0)}function bu(i,e,t){let n=tt(),s=Pn(i,n);if(!s.includes(e))return-1;let r=Math.round(Rr(t,0,n.duration)*1e3)/1e3,o=s.find(a=>a!==e&&Math.abs(a.t-r)<.002);return o?(o.pos=[...e.pos],o.rot=[...e.rot],o.scale=[...e.scale],s.splice(s.indexOf(e),1),e.t=o.t):e.t=r,jp(s),Qe("keys",!0),s.indexOf(e)}function wu(i){i&&(gt(),i.ease=ec[(ec.indexOf(i.ease||"smooth")+1)%ec.length],Qe("keys"),Ne("clip"),Ne("toast",{msg:`Interpolation: ${nc[i.ease]}`,kind:"ok"}))}function Eu(i){let e=tt();e?.tracks?.[i]&&(gt(),delete e.tracks[i],Qe("keys"),Ne("clip"))}function ii(i,{silent:e=!1}={}){let n=tt()?.duration||4;k.time=(k.loop,Math.max(0,Math.min(n,i))),e||Ne("time")}function Os(i=1){let e=1/(k.project?.fps||30),t=Math.round(k.time/e)*e+i*e,n=tt()?.duration||4;ii(t>n?i>0?n:0:t<0?0:t)}function Tu(i=1){let e=tt(),t=k.selectedIds.length?k.selectedIds:e?Object.keys(e.tracks):[],n=[];for(let o of t)for(let a of Pn(o,e))n.push(a.t);if(!n.length)return;let s=[...new Set(n)].sort((o,a)=>o-a),r=i>0?s.find(o=>o>k.time+1e-4):[...s].reverse().find(o=>o<k.time-1e-4);r!==void 0&&ii(r)}function Lr(i){k.playing=i!==void 0?i:!k.playing,k.playing&&k.time>=(tt()?.duration||4)-1e-4&&(k.time=0),Ne("playback")}function gt(){if(!k.project)return;let i=JSON.stringify(k.project);Gn.length&&Gn[Gn.length-1]===i||(Gn.push(i),Gn.length>Pv&&Gn.shift(),Ps.length=0,Ne("history"))}function Xo(){let i=JSON.stringify(k.project),e=Gn.pop();for(;e!==void 0&&e===i;)e=Gn.pop();if(e===void 0){Ne("history");return}Ps.push(i),Zp(e),Ne("toast",{msg:"Undo",kind:""})}function Dr(){let i=JSON.stringify(k.project),e=Ps.pop();for(;e!==void 0&&e===i;)e=Ps.pop();if(e===void 0){Ne("history");return}Gn.push(i),Zp(e),Ne("toast",{msg:"Redo",kind:""})}function Zp(i){k.project=JSON.parse(i);let e=new Set(k.project.objects.map(t=>t.id));k.selectedIds=k.selectedIds.filter(t=>e.has(t)),k.project.clips.some(t=>t.id===k.project.activeClipId)||(k.project.activeClipId=k.project.clips[0]?.id),k.time=Math.min(k.time,tt()?.duration||4),Qe("reload"),Ne("project:reload"),Ne("history")}function Qe(i="values",e=!1){e||(Ne("change",i),Ne("timeline:refresh")),clearTimeout(Wp),Wp=setTimeout(Nr,700)}function Nr(){try{localStorage.setItem("animforge:project",JSON.stringify(k.project))}catch{}}function Cu(){try{let i=localStorage.getItem("animforge:project");return i?JSON.parse(i):null}catch{return null}}function Ur(){let i=lu("Hover-bot demo"),e=(I,A,O,j,z,te)=>{let W=hu({id:Mn("o"),name:I,type:A,params:{...Ar(A),...O},pos:j,rot:z||[0,0,0],material:{...Go("#7cc7ff"),...te}});return i.objects.push(W),W},t=e("Base disc","cylinder",{rt:.6,rb:.72,h:.1,seg:48},[0,.05,0],null,{color:"#2f3a4d",metalness:.7,roughness:.38}),n=e("Glow ring","torus",{r:.82,tube:.021,rseg:12,tseg:90},[0,.07,0],[90,0,0],{color:"#08161d",metalness:.2,roughness:.5,emissive:"#1fb6e8",emissiveIntensity:1.5}),s=e("Hull","capsule",{r:.29,h:.46,seg:44},[0,.74,0],null,{color:"#4f9ada",metalness:.55,roughness:.28}),r=e("Core lens","sphere",{r:.13,wseg:32,hseg:24},[0,.78,.243],null,{color:"#06151f",metalness:.12,roughness:.28,emissive:"#1187b5",emissiveIntensity:1}),o=e("Head","sphere",{r:.285,wseg:40,hseg:28},[0,1.42,0],null,{color:"#74b5e6",metalness:.42,roughness:.34}),a=e("Eye L","sphere",{r:.052,wseg:20,hseg:14},[-.1,1.45,.25],null,{color:"#04121a",metalness:.1,roughness:.3,emissive:"#35e0ff",emissiveIntensity:1}),c=e("Eye R","sphere",{r:.052,wseg:20,hseg:14},[.1,1.45,.25],null,{color:"#04121a",metalness:.1,roughness:.3,emissive:"#35e0ff",emissiveIntensity:1}),l=e("Antenna","cylinder",{rt:.012,rb:.018,h:.16,seg:12},[0,1.72,0],null,{color:"#4d6a86",metalness:.9,roughness:.3}),h=e("Beacon","sphere",{r:.055,wseg:20,hseg:14},[0,1.84,0],null,{color:"#1b0f18",metalness:.15,roughness:.35,emissive:"#e03c93",emissiveIntensity:1.6}),u=e("Arm L","capsule",{r:.05,h:.26,seg:22},[-.34,.76,0],[0,0,16],{color:"#4a7fae",metalness:.62,roughness:.33}),d=e("Arm R","capsule",{r:.05,h:.26,seg:22},[.34,.76,0],[0,0,-16],{color:"#4a7fae",metalness:.62,roughness:.33}),f=Math.PI*2,g=(I,A)=>[I[0]+A[0],I[1]+A[1],I[2]+A[2]],x=(I,A)=>{let O=A*Math.PI/180,j=Math.cos(O),z=Math.sin(O);return[I[0]*j+I[2]*z,I[1],-I[0]*z+I[2]*j]},p=(I,A,O,j)=>{let z={id:Mn("c"),name:I,duration:A,tracks:{}},te=Math.round(A/O);for(let[W,J]of j){let ee={pos:W.pos,rot:W.rot,scale:W.scale},Me=[];for(let De=0;De<=te;De++){let q=+(De*A/te).toFixed(4),ue=J(q,ee)||{};Me.push({t:+q.toFixed(3),ease:ue.ease||"smooth",pos:ue.pos?[...ue.pos]:[...ee.pos],rot:ue.rot?[...ue.rot]:[...ee.rot],scale:ue.scale?[...ue.scale]:[...ee.scale]})}z.tracks[W.id]=Me}return z},m=[0,1.42,0],v=[-.1,.045,.25],w=[.1,.045,.25],y=4,T=I=>Math.sin(f*I/y)*.05,E=I=>7*Math.sin(f*I/y),_=I=>[0,m[1]+T(I),0],b=p("Idle",y,1,[[s,(I,A)=>({pos:g(A.pos,[0,T(I),0])})],[o,(I,A)=>({pos:g(A.pos,[0,T(I),0]),rot:[0,E(I),0]})],[a,I=>({pos:g(_(I),x(v,E(I)))})],[c,I=>({pos:g(_(I),x(w,E(I)))})],[r,(I,A)=>{let O=1+.05*Math.sin(f*I/2);return{pos:g(A.pos,[0,T(I),0]),scale:[O,O,1]}}],[l,(I,A)=>({pos:g(A.pos,[0,T(I),0]),rot:[0,E(I),3*Math.sin(f*I/y)]})],[h,(I,A)=>({pos:g(A.pos,[.02*Math.sin(f*I/y),T(I),0])})],[u,(I,A)=>({pos:g(A.pos,[0,T(I),0]),rot:[0,0,16+7*Math.sin(f*I/y)]})],[d,(I,A)=>({pos:g(A.pos,[0,T(I),0]),rot:[0,0,-16-7*Math.sin(f*I/y)]})],[n,(I,A)=>{let O=1+.02*Math.sin(f*I/y);return{pos:[A.pos[0],.07+T(I)*.35,A.pos[2]],rot:[90,0,0],scale:[O,O,1]}}],[t,(I,A)=>({pos:A.pos,rot:A.rot})]]),D=I=>Math.abs(Math.sin(Math.PI*I))*.14,C=I=>360*I/y,N=I=>[0,m[1]+D(I),0],B=p("Dance",y,.5,[[s,(I,A)=>({pos:g(A.pos,[0,D(I),0]),rot:[0,C(I),0],ease:"linear"})],[o,(I,A)=>({pos:g(A.pos,[0,D(I),0]),rot:[0,C(I),6*Math.sin(f*I/2)],ease:"linear"})],[a,I=>({pos:g(N(I),x(v,C(I))),ease:"linear"})],[c,I=>({pos:g(N(I),x(w,C(I))),ease:"linear"})],[r,(I,A)=>{let O=1+.14*Math.abs(Math.sin(Math.PI*I));return{pos:g(A.pos,[0,D(I),0]),scale:[O,O,1],ease:"linear"}}],[l,(I,A)=>({pos:g(A.pos,[0,D(I),0]),rot:[0,C(I),20*Math.sin(f*I)],ease:"linear"})],[h,(I,A)=>({pos:g(A.pos,[.05*Math.sin(f*I),D(I),0]),ease:"linear"})],[u,(I,A)=>({pos:g([0,A.pos[1]+D(I),0],x([A.pos[0],0,0],C(I))),rot:[0,C(I),66+44*Math.sin(f*I)],ease:"linear"})],[d,(I,A)=>({pos:g([0,A.pos[1]+D(I),0],x([A.pos[0],0,0],C(I))),rot:[0,C(I),-66-44*Math.sin(f*I+Math.PI)],ease:"linear"})],[n,(I,A)=>{let O=1+.06*Math.abs(Math.sin(Math.PI*I));return{pos:[A.pos[0],.07-D(I)*.35,A.pos[2]],rot:[90,0,0],scale:[O,O,1]}}],[t,(I,A)=>({pos:A.pos,rot:A.rot})]]);return i.clips=[b,B],i.activeClipId=b.id,i}var Mn,k,Pv,Gn,Ps,ec,nc,au,Rr,tt,zt,Cr,Ls,Lv,jp,Pn,Dv,Nv,oc,Au,Ru,Wp,Iu,ss=jn(()=>{Ql();Is();Mn=(i="o")=>i+Math.random().toString(36).slice(2,9),k={project:null,selectedIds:[],time:0,playing:!1,loop:!0,autoKey:!0,snap:!1,tool:"translate",selectedKey:null},Pv=90,Gn=[],Ps=[],ec=["smooth","linear","in","out"],nc={smooth:"Smooth",linear:"Linear",in:"Ease in",out:"Ease out"};au=(i,e)=>Array.isArray(i)&&i.length===3?i.map(t=>Number(t)||0):e.slice(),Rr=(i,e,t)=>Math.min(t,Math.max(e,i)),tt=()=>k.project?.clips.find(i=>i.id===k.project.activeClipId)||k.project?.clips[0]||null,zt=i=>k.project?.objects.find(e=>e.id===i)||null,Cr=()=>zt(k.selectedIds[k.selectedIds.length-1]||""),Ls=i=>k.selectedIds.includes(i);Lv=1e-4,jp=i=>i.sort((e,t)=>e.t-t.t),Pn=(i,e=tt())=>e?.tracks?.[i]||[];Dv=i=>Math.min(1,Math.max(0,i)),Nv=(i,e)=>{switch(i){case"linear":return e;case"in":return e*e*e;case"out":return 1-Math.pow(1-e,3);default:return e*e*(3-2*e)}};oc=i=>Us(i,k.time);Au=()=>Gn.length>1,Ru=()=>Ps.length>0,Wp=null;Iu=()=>JSON.stringify(k.project,null,2)});function Fv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ov(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jp),this.state=st.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=st.DOLLY;break;case Ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}break;case Ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Lu)}function zv(i){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hv(i){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(i.preventDefault(),this.dispatchEvent(Lu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jp))}function Gv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1){this.state=st.NONE;break}this._handleTouchStartRotate(i),this.state=st.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1){this.state=st.NONE;break}this._handleTouchStartPan(i),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=st.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Lu)}function Wv(i){switch(this._trackPointer(i),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=st.NONE}}function Xv(i){this.enabled!==!1&&i.preventDefault()}function jv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $p,Lu,Jp,ac,Kp,Uv,jt,Sn,st,Pu,lc,Qp=jn(()=>{ts();$p={type:"change"},Lu={type:"start"},Jp={type:"end"},ac=new Xi,Kp=new An,Uv=Math.cos(70*Rs.DEG2RAD),jt=new P,Sn=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pu=1e-6,lc=class extends vs{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new it,this._lastTargetPosition=new P,this._quat=new it().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new P,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new P,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ov.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=Bv.bind(this),this._onContextMenu=Xv.bind(this),this._onMouseWheel=Hv.bind(this),this._onKeyDown=Gv.bind(this),this._onTouchStart=Vv.bind(this),this._onTouchMove=Wv.bind(this),this._onMouseDown=kv.bind(this),this._onMouseMove=zv.bind(this),this._interceptControlDown=jv.bind(this),this._interceptControlUp=Yv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=st.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($p),this.update(),this.state=st.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<Uv?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pu||this._lastTargetPosition.distanceToSquared(this.target)>Pu?(this.dispatchEvent($p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function qv(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{let e=this.domElement.getBoundingClientRect(),t=this.viewport,n,s,r,o;return t!==null?(n=t.x,s=e.height-t.y-t.w,r=t.z,o=t.w):(n=0,s=0,r=e.width,o=e.height),{x:(i.clientX-e.left-n)/r*2-1,y:-(i.clientY-e.top-s)/o*2+1,button:i.button}}}function Zv(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function $v(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Kv(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Jv(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Nu(i,e,t){let n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}var ks,Ct,rs,bt,em,Du,tm,nm,im,fc,cc,pt,sm,rm,hc,dc,fi,pc,qo,zs,Zo,uc,jo,Yo,Uu,Fu,Ou,om=jn(()=>{ts();ks=new ys,Ct=new P,rs=new P,bt=new it,em={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Du={type:"change"},tm={type:"mouseDown",mode:null},nm={type:"mouseUp",mode:null},im={type:"objectChange"},fc=class extends vs{constructor(e,t=null){super(void 0,t);let n=new Uu(this);this._root=n;let s=new Fu;this._gizmo=s,n.add(s);let r=new Ou;this._plane=r,n.add(r);let o=this;function a(w,y){let T=y;Object.defineProperty(o,w,{get:function(){return T!==void 0?T:y},set:function(E){T!==E&&(T=E,r[w]=E,s[w]=E,o.dispatchEvent({type:w+"-changed",value:E}),o.dispatchEvent(Du))}}),o[w]=y,r[w]=y,s[w]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),this.viewport=null,a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("showXYZE",!0),a("showE",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let c=new P,l=new P,h=new it,u=new it,d=new P,f=new it,g=new P,x=new P,p=new P,m=0,v=new P;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",m),a("eye",v),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new it,this._parentQuaternionInv=new it,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new it,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new it,this._scaleStart=new P,this._getPointer=qv.bind(this),this._onPointerDown=$v.bind(this),this._onPointerHover=Zv.bind(this),this._onPointerMove=Kv.bind(this),this._onPointerUp=Jv.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ks.setFromCamera(e,this.camera);let t=Nu(this._gizmo.picker[this.mode],ks);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ks.setFromCamera(e,this.camera);let t=Nu(this._plane,ks,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,tm.mode=this.mode,this.dispatchEvent(tm)}}pointerMove(e){let t=this.axis,n=this.mode,s=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ks.setFromCamera(e,this.camera);let o=Nu(this._plane,ks,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(bt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.getWorldPosition(Ct),t.search("X")!==-1&&(Ct.x=Math.round(Ct.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(Ct.y=Math.round(Ct.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(Ct.z=Math.round(Ct.z/this.translationSnap)*this.translationSnap),s.position.copy(s.parent.worldToLocal(Ct)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),rs.set(a,a,a)}else Ct.copy(this.pointStart),rs.copy(this.pointEnd),Ct.applyQuaternion(this._worldQuaternionInv),rs.applyQuaternion(this._worldQuaternionInv),rs.divide(Ct),t.search("X")===-1&&(rs.x=1),t.search("Y")===-1&&(rs.y=1),t.search("Z")===-1&&(rs.z=1);s.scale.copy(this._scaleStart).multiply(rs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Ct.setFromMatrixPosition(this.camera.matrixWorld)),c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ct.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(em[t]),Ct.copy(em[t]),r==="local"&&Ct.applyQuaternion(this.worldQuaternion),Ct.cross(this.eye),Ct.length()===0?c=!0:this.rotationAngle=this._offset.dot(Ct.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Du),this.dispatchEvent(im)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(nm.mode=this.mode,this.dispatchEvent(nm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Du),this.dispatchEvent(im),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ks}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};cc=new rn,pt=new P(0,1,0),sm=new P(0,0,0),rm=new Je,hc=new it,dc=new it,fi=new P,pc=new Je,qo=new P(1,0,0),zs=new P(0,1,0),Zo=new P(0,0,1),uc=new P,jo=new P,Yo=new P,Uu=class extends _t{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),this.parent&&(pc.copy(this.parent.matrixWorld).invert(),pc.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Fu=class extends _t{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Ri({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new gs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:d};let x=new Pt(0,.04,.1,12);x.translate(0,.05,0);let p=new ft(.08,.08,.08);p.translate(0,.04,0);let m=new kt;m.setAttribute("position",new Xe([0,0,0,1,0,0],3));let v=new Pt(.0075,.0075,.5,3);v.translate(0,.25,0);function w(O,j){let z=new Jn(O,.0075,3,64,j*Math.PI*2);return z.rotateY(Math.PI/2),z.rotateX(Math.PI/2),z}function y(){let O=new kt;return O.setAttribute("position",new Xe([0,0,0,1,1,1],3)),O}let T={X:[[new oe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new oe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new oe(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new oe(x,o),[0,.5,0]],[new oe(x,o),[0,-.5,0],[Math.PI,0,0]],[new oe(v,o)]],Z:[[new oe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new oe(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new oe(new qi(.1,0),u),[0,0,0]]],XY:[[new oe(new ft(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new oe(new ft(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new ft(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new oe(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new Pt(.2,0,.6,4),n),[0,.3,0]],[new oe(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new oe(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new oe(new qi(.2,0),n)]],XY:[[new oe(new ft(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new oe(new ft(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new ft(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},_={START:[[new oe(new qi(.01,2),s),null,null,null,"helper"]],END:[[new oe(new qi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Cn(y(),s),null,null,null,"helper"]],X:[[new Cn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Cn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Cn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new oe(w(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new oe(w(.5,.5),r)]],Y:[[new oe(w(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new oe(w(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new oe(w(.75,1),d),null,[0,Math.PI/2,0]]]},D={AXIS:[[new Cn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},C={XYZE:[[new oe(new _s(.25,10,8),n)]],X:[[new oe(new Jn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new oe(new Jn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new oe(new Jn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new oe(new Jn(.75,.1,2,24),n)]]},N={X:[[new oe(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new oe(v,r),[0,0,0],[0,0,-Math.PI/2]],[new oe(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new oe(p,o),[0,.5,0]],[new oe(v,o)],[new oe(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new oe(p,a),[0,0,.5],[Math.PI/2,0,0]],[new oe(v,a),[0,0,0],[Math.PI/2,0,0]],[new oe(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new oe(new ft(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new oe(new ft(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new ft(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new ft(.1,.1,.1),u)]]},B={X:[[new oe(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new oe(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new oe(new Pt(.2,0,.6,4),n),[0,.3,0]],[new oe(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new oe(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new oe(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new oe(new ft(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new oe(new ft(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new oe(new ft(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new oe(new ft(.2,.2,.2),n),[0,0,0]]]},I={X:[[new Cn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Cn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Cn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function A(O){let j=new _t;for(let z in O)for(let te=O[z].length;te--;){let W=O[z][te][0].clone(),J=O[z][te][1],ee=O[z][te][2],Me=O[z][te][3],De=O[z][te][4];W.name=z,W.tag=De,J&&W.position.set(J[0],J[1],J[2]),ee&&W.rotation.set(ee[0],ee[1],ee[2]),Me&&W.scale.set(Me[0],Me[1],Me[2]),W.updateMatrix();let q=W.geometry.clone();q.applyMatrix4(W.matrix),W.geometry=q,W.renderOrder=1/0,W.position.set(0,0,0),W.rotation.set(0,0,0),W.scale.set(1,1,1),j.add(W)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=A(T)),this.add(this.gizmo.rotate=A(b)),this.add(this.gizmo.scale=A(N)),this.add(this.picker.translate=A(E)),this.add(this.picker.rotate=A(C)),this.add(this.picker.scale=A(B)),this.add(this.helper.translate=A(_)),this.add(this.helper.rotate=A(D)),this.add(this.helper.scale=A(I)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:dc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(bt.setFromEuler(cc.set(0,0,0)),o.quaternion.copy(n).multiply(bt),Math.abs(pt.copy(qo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(bt.setFromEuler(cc.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(bt),Math.abs(pt.copy(zs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(bt.setFromEuler(cc.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(bt),Math.abs(pt.copy(Zo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(bt.setFromEuler(cc.set(0,Math.PI/2,0)),pt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(rm.lookAt(sm,pt,zs)),o.quaternion.multiply(bt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ct.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ct.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ct),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(pt.copy(qo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(pt.copy(zs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(pt.copy(Zo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(pt.copy(Zo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(pt.copy(qo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(pt.copy(zs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(hc.copy(n),pt.copy(this.eye).applyQuaternion(bt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(rm.lookAt(this.eye,sm,zs)),o.name==="X"&&(bt.setFromAxisAngle(qo,Math.atan2(-pt.y,pt.z)),bt.multiplyQuaternions(hc,bt),o.quaternion.copy(bt)),o.name==="Y"&&(bt.setFromAxisAngle(zs,Math.atan2(pt.x,pt.z)),bt.multiplyQuaternions(hc,bt),o.quaternion.copy(bt)),o.name==="Z"&&(bt.setFromAxisAngle(Zo,Math.atan2(pt.y,pt.x)),bt.multiplyQuaternions(hc,bt),o.quaternion.copy(bt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.visible=o.visible&&(o.name!=="E"||this.showE),o.visible=o.visible&&(o.name!=="XYZE"||this.showXYZE),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},Ou=class extends oe{constructor(){super(new zn(1e5,1e5,2,2),new Ri({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),uc.copy(qo).applyQuaternion(t==="local"?this.worldQuaternion:dc),jo.copy(zs).applyQuaternion(t==="local"?this.worldQuaternion:dc),Yo.copy(Zo).applyQuaternion(t==="local"?this.worldQuaternion:dc),pt.copy(jo),this.mode){case"translate":case"scale":switch(this.axis){case"X":pt.copy(this.eye).cross(uc),fi.copy(uc).cross(pt);break;case"Y":pt.copy(this.eye).cross(jo),fi.copy(jo).cross(pt);break;case"Z":pt.copy(this.eye).cross(Yo),fi.copy(Yo).cross(pt);break;case"XY":fi.copy(Yo);break;case"YZ":fi.copy(uc);break;case"XZ":pt.copy(Yo),fi.copy(jo);break;case"XYZ":case"E":fi.set(0,0,0);break}break;case"rotate":default:fi.set(0,0,0)}fi.length()===0?this.quaternion.copy(this.cameraQuaternion):(pc.lookAt(Ct.set(0,0,0),fi,pt),this.quaternion.setFromRotationMatrix(pc)),super.updateMatrixWorld(e)}}});function Fr(i){return new vo({color:0,emissive:16777215,emissiveIntensity:i})}var mc,am=jn(()=>{ts();mc=class extends oi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ft;e.deleteAttribute("uv");let t=new li({side:on}),n=new li,s=new To(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new lo(e,n,6),a=new _t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new oe(e,Fr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new oe(e,Fr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new oe(e,Fr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new oe(e,Fr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new oe(e,Fr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new oe(e,Fr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var yc={};Gs(yc,{buildExportGroup:()=>Xu,debugGroupTransform:()=>sM,debugState:()=>rM,ensureVisible:()=>Vu,focusSelection:()=>Qo,frameAll:()=>kr,frameObjects:()=>xc,getSpawnPoint:()=>ju,init:()=>zu,isReady:()=>iM,screenshot:()=>Wu,setGridVisible:()=>Gu,setSnap:()=>Jo,setSpace:()=>nM,setTool:()=>_c,setView:()=>Br,sync:()=>Hs,update:()=>Hu});function zu(i){gc=i,wt=new Zl({antialias:!0,alpha:!0,powerPreference:"high-performance"}),wt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),wt.setClearColor(0,0),wt.shadowMap.enabled=!0,wt.shadowMap.type=Ms,wt.toneMapping=Co,wt.toneMappingExposure=1,wt.domElement.style.touchAction="none",i.appendChild(wt.domElement),en=new oi,yt=new dn(46,1,.05,400),yt.position.set(3.1,2.15,4.5),Lt=new lc(yt,wt.domElement),Lt.enableDamping=!0,Lt.dampingFactor=.075,Lt.target.set(0,.95,0),Lt.minDistance=.6,Lt.maxDistance=40,Lt.maxPolarAngle=Math.PI*.495,Lt.update();let e=new Er(wt),t=e.fromScene(new mc,.045);en.environment=t.texture,en.environmentIntensity=.38,e.dispose();let n=new bo(12376319,1514793,.4);en.add(n);let s=new xs(16774374,2.1);s.position.set(4.2,7.5,4.5),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=.5,s.shadow.camera.far=30,s.shadow.camera.left=-7,s.shadow.camera.right=7,s.shadow.camera.top=7,s.shadow.camera.bottom=-7,s.shadow.bias=-4e-4,s.shadow.normalBias=.022,s.shadow.radius=3,en.add(s);let r=new xs(8696575,.55);r.position.set(-5.5,3.2,-2.5),en.add(r);let o=new xs(10980346,.6);o.position.set(-1.5,2.5,-6),en.add(o);let a=document.createElement("canvas");a.width=a.height=512;let c=a.getContext("2d"),l=c.createRadialGradient(256,256,8,256,256,256);l.addColorStop(0,"rgba(48,63,90,0.95)"),l.addColorStop(.4,"rgba(27,36,52,0.82)"),l.addColorStop(.72,"rgba(14,19,29,0.45)"),l.addColorStop(1,"rgba(9,12,19,0)"),c.fillStyle=l,c.fillRect(0,0,512,512);let h=new fr(a);h.colorSpace=Qt,Ko=new oe(new po(15,64),new li({map:h,transparent:!0,roughness:.95,metalness:0,depthWrite:!1})),Ko.rotation.x=-Math.PI/2,Ko.position.y=-.004,en.add(Ko),$o=new oe(new zn(20,20),new Ri({map:oM(wt),transparent:!0,depthWrite:!1,opacity:.95})),$o.rotation.x=-Math.PI/2,$o.position.y=.002,en.add($o);let u=new oe(new zn(26,26),new yo({color:776,opacity:.46}));u.rotation.x=-Math.PI/2,u.position.y=.004,u.receiveShadow=!0,en.add(u),um=u,mi=new Ro(new Vt,7268351),mi.material.transparent=!0,mi.material.opacity=.9,mi.material.depthTest=!1,mi.renderOrder=10,mi.visible=!1,en.add(mi),gn=new _t,gn.name="__gizmoProxy",en.add(gn),xt=new fc(yt,wt.domElement),xt.setSize(.85),xt.setSpace("world");let d=xt.getHelper?xt.getHelper():xt;return en.add(d),xt.addEventListener("dragging-changed",g=>{if(Lt.enabled=!g.value,!g.value){let x=!!bn;os=null,bn=null,Qe("values"),Ne("gizmo:end"),x&&Ne("toast",{msg:"Model transform applied",kind:"ok"})}}),xt.addEventListener("mouseDown",()=>{gt(),pm()||(os=Cr()?.id||null)}),xt.addEventListener("objectChange",()=>{if(bn){mm();return}if(!os)return;let g=Yt.get(os),x=zt(os);if(!g||!x)return;let p={};xt.getMode()==="rotate"?p.rot=[+(g.rotation.x/Ni).toFixed(2),+(g.rotation.y/Ni).toFixed(2),+(g.rotation.z/Ni).toFixed(2)]:xt.getMode()==="scale"?p.scale=[Vn(g.scale.x),Vn(g.scale.y),Vn(g.scale.z)]:p.pos=[Vn(g.position.x),Vn(g.position.y),Vn(g.position.z)],Ir(os,p)}),ku=new ys,wt.domElement.addEventListener("pointerdown",g=>{Or={x:g.clientX,y:g.clientY,button:g.button}}),wt.domElement.addEventListener("pointerup",g=>{if(!Or||g.button!==0){Or=null;return}let x=Math.hypot(g.clientX-Or.x,g.clientY-Or.y);if(Or=null,x>5||xt.dragging||xt.axis)return;let p=Qv(g);Di(p?[p]:[],g.shiftKey)}),new ResizeObserver(()=>lm()).observe(i),lm(),Hs(),{renderer:wt,scene:en,camera:yt}}function lm(){if(!wt||!gc)return;let i=gc.clientWidth||1,e=gc.clientHeight||1;wt.setSize(i,e,!1),yt.aspect=i/e,yt.updateProjectionMatrix()}function Qv(i){let e=wt.domElement.getBoundingClientRect(),t=new Re((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1);ku.setFromCamera(t,yt);let n=[...Yt.values()].filter(r=>r.visible),s=ku.intersectObjects(n,!1);return s.length?s[0].object.userData.id:null}function Hs(){let i=k.project;if(!i)return;let e=new Set;for(let t of i.objects){e.add(t.id);let n=Yt.get(t.id),s=JSON.stringify(t.params);if(!n||n.userData.type!==t.type)n&&cm(n),n=ou(t),n.userData.type=t.type,n.userData.paramSig=s,Yt.set(t.id,n),en.add(n);else if(n.userData.paramSig!==s){let r=n.geometry;n.geometry=Ho(t.type,t.params),r.dispose(),n.userData.paramSig=s}n.name=t.name,n.visible=t.visible,n.userData.id=t.id,ru(n,t.material),os!==t.id&&fm(n,Us(t,k.time))}for(let[t,n]of[...Yt])e.has(t)||(cm(n),en.remove(n),Yt.delete(t));eM(),gm()}function cm(i){i.geometry?.dispose(),Array.isArray(i.material)?i.material.forEach(e=>e.dispose()):i.material?.dispose()}function fm(i,e){i.position.fromArray(e.pos),i.rotation.set(e.rot[0]*Ni,e.rot[1]*Ni,e.rot[2]*Ni),i.scale.fromArray(e.scale)}function eM(){let i=k.selectedIds;if(xt.setMode(k.tool==="rotate"?"rotate":k.tool==="scale"?"scale":"translate"),i.length>1){let n=new Vt,s=0;for(let r of i){let o=Yt.get(r),a=zt(r);o&&a?.visible&&(n.expandByObject(o),s++)}if(s>1){let r=n.getCenter(new P);r.y=n.min.y,gn.position.copy(r),gn.rotation.set(0,0,0),gn.scale.set(1,1,1),gn.updateMatrixWorld(),xt.object!==gn&&xt.attach(gn);return}}let e=i.length===1?zt(i[0]):null,t=e&&e.visible?Yt.get(e.id):null;t?xt.object!==t&&xt.attach(t):xt.detach()}function pm(){bn=null;let i=k.selectedIds;if(i.length<2)return!1;let e=[];for(let t of i){let n=Yt.get(t),s=zt(t);!n||!s||!s.visible||e.push({id:t,pos:n.position.clone(),rot:[n.rotation.x,n.rotation.y,n.rotation.z],scale:n.scale.clone()})}return e.length<2?!1:(bn={c:gn.position.clone(),items:e,startPos:gn.position.clone()},!0)}function mm(){let i=gn,e=i.position.clone().sub(bn.startPos),t=new it().setFromEuler(i.rotation),n=i.scale.clone();for(let s of bn.items){let r=s.pos.clone().sub(bn.c).multiply(n).applyQuaternion(t),o=bn.c.clone().add(r).add(e),a=t.clone().multiply(new it().setFromEuler(new rn(s.rot[0],s.rot[1],s.rot[2]))),c=new rn().setFromQuaternion(a),l=s.scale.clone().multiply(n),h=Yt.get(s.id);h&&(h.position.copy(o),h.quaternion.copy(a),h.scale.copy(l)),Ir(s.id,{pos:[Vn(o.x),Vn(o.y),Vn(o.z)],rot:[Bu(c.x),Bu(c.y),Bu(c.z)],scale:[Vn(l.x),Vn(l.y),Vn(l.z)]},{silent:!0})}}function gm(){let i=new Vt,e=k.selectedIds,t=!1;for(let n of e){let s=Yt.get(n);if(!s||!s.visible)continue;let r=new Vt().setFromObject(s);r.isEmpty()||(t?i.union(r):i.copy(r),t=!0)}t?(mi.box.copy(i).expandByScalar(.015),mi.visible=!0):mi.visible=!1}function Hu(i){let e=k.project;if(!e)return;let t=k.time;if(Math.abs(t-hm)>1e-6){for(let n of e.objects){if(os===n.id)continue;let s=Yt.get(n.id);s&&fm(s,Us(n,t))}hm=t}gm(),tM(i),Lt.update(),wt.render(en,yt)}function tM(i){if(!pi)return;let e=1-Math.pow(8e-4,i);yt.position.lerp(pi.pos,e),Lt.target.lerp(pi.target,e),yt.position.distanceTo(pi.pos)<.006&&Lt.target.distanceTo(pi.target)<.006&&(yt.position.copy(pi.pos),Lt.target.copy(pi.target),pi=null),Lt.update()}function _c(i){k.tool=i,xt.setMode(i==="rotate"?"rotate":i==="scale"?"scale":"translate")}function Jo(i){k.snap=i,xt.translationSnap=i?.25:null,xt.rotationSnap=i?Math.PI/12:null,xt.scaleSnap=i?.1:null}function Gu(i){$o.visible=i,Ko.visible=i,um.visible=i}function nM(i){xt.setSpace(i)}function Br(i){let e=new P,t=new Vt,n=!1;for(let c of k.selectedIds){let l=Yt.get(c);l&&(t.expandByObject(l),n=!0)}n||t.setFromCenterAndSize(new P(0,.9,0),new P(2.4,2.4,2.4)),t.getCenter(e);let r=Math.max(t.getSize(new P).length()*.5,1.1)*3,o={persp:new P(.62,.5,.9),front:new P(0,0,1),side:new P(1,0,0),top:new P(0,1,1e-4)},a=(o[i]||o.persp).clone().normalize();pi={pos:e.clone().add(a.multiplyScalar(r)),target:e},Lt.target.copy(e)}function Qo(){Br("persp")}function kr(i=1.15){let e=new Vt;for(let t of Yt.values())t.visible&&e.expandByObject(t);_m(e,i)}function xc(i=[],e=1.3){let t=new Vt;for(let n of i){let s=Yt.get(n);s&&s.visible&&t.expandByObject(s)}return t.isEmpty()?!1:(dm={min:t.min.toArray().map(n=>+n.toFixed(2)),max:t.max.toArray().map(n=>+n.toFixed(2))},_m(t,e),!0)}function _m(i,e=1.15){i.isEmpty()&&i.setFromCenterAndSize(new P(0,.9,0),new P(2.4,2.2,2.4));let t=i.getCenter(new P),n=Math.max(i.getSize(new P).length()*.5,.8),s=yt.fov*Math.PI/180,r=n/Math.sin(s/2)*e,o=yt.position.clone().sub(Lt.target);o.lengthSq()<1e-6&&o.set(.5,.36,1),o.normalize(),pi=null,yt.position.copy(t).add(o.multiplyScalar(r)),Lt.target.copy(t),Lt.update()}function Vu(i,e=.78){let t=Yt.get(i);if(!t)return!1;let n=new P;t.getWorldPosition(n);let s=t.geometry?.boundingSphere?.radius||.5,r=n.clone().project(yt),o=n.clone().add(yt.position.clone().sub(n).normalize().multiplyScalar(0)).project(yt),a=new P().setFromMatrixColumn(yt.matrixWorld,0).multiplyScalar(s),c=n.clone().add(a).project(yt),l=Math.abs(c.x-o.x);return Math.abs(r.x)+l>e*1.35||Math.abs(r.y)+l>e||r.z>1?(kr(1.22),!0):!1}function Wu(){return wt.render(en,yt),wt.domElement.toDataURL("image/png")}function Xu(){let i=new bi;i.name=k.project?.name||"Scene";let e=new Set;for(let t of k.project.objects){if(!t.visible)continue;let n=ou(t),s=t.name.replace(/[^\w\- ]+/g,"").trim()||"Object",r=2;for(;e.has(s);)s=`${t.name} ${r++}`;e.add(s),n.name=s,n.userData.exportId=t.id;let o=t.pos;n.position.fromArray(o),n.rotation.set(t.rot[0]*Ni,t.rot[1]*Ni,t.rot[2]*Ni),n.scale.fromArray(t.scale),i.add(n)}return i}function ju(){let i=Lt.target.clone(),e=yt.position.clone().sub(i).setY(0);e.lengthSq()<1e-6&&e.set(0,0,1),e.normalize();let t=new P().crossVectors(new P(0,1,0),e).normalize(),n=i.clone().addScaledVector(t,1.05).addScaledVector(e,.45);return n.y=0,{point:[n.x,n.z],right:[t.x,t.z]}}function iM(){return!!wt}function sM({dx:i=0,dy:e=0,dz:t=0,sx:n=1,sy:s=1,sz:r=1}={}){if(!pm())return null;gn.position.set(bn.startPos.x+i,bn.startPos.y+e,bn.startPos.z+t),gn.scale.set(n,s,r),mm();let o=bn.items.map(a=>a.id);return bn=null,Qe("values"),o.length}function oM(i){let n=document.createElement("canvas");n.width=n.height=1024;let s=n.getContext("2d"),r=1024/40;for(let c=0;c<=40;c++){let l=Math.round(c*r)+.5,h=c%10===0;s.strokeStyle=h?"rgba(128,156,200,0.62)":"rgba(96,120,162,0.28)",s.lineWidth=h?1.6:1,s.beginPath(),s.moveTo(l,0),s.lineTo(l,1024),s.stroke(),s.beginPath(),s.moveTo(0,l),s.lineTo(1024,l),s.stroke()}let o=s.createRadialGradient(1024/2,1024/2,1024*.05,1024/2,1024/2,1024*.5);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0.8)"),o.addColorStop(.82,"rgba(0,0,0,0.28)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.globalCompositeOperation="destination-in",s.fillStyle=o,s.fillRect(0,0,1024,1024);let a=new fr(n);a.colorSpace=Qt;try{a.anisotropy=i.capabilities.getMaxAnisotropy()}catch{}return a}var Ni,wt,en,yt,Lt,xt,ku,gc,Yt,mi,$o,Ko,um,os,pi,dm,gn,bn,Or,Vn,Bu,hm,rM,vc=jn(()=>{ts();Qp();om();am();Ql();ss();Is();Ni=Math.PI/180,Yt=new Map,mi=null,$o=null,Ko=null,um=null,os=null,pi=null,dm=null,gn=null,bn=null,Or=null;Vn=i=>Math.round(i*1e3)/1e3;Bu=i=>+(i*180/Math.PI).toFixed(2);hm=-1;rM=()=>({cam:yt?yt.position.toArray().map(i=>+i.toFixed(2)):null,target:Lt?Lt.target.toArray().map(i=>+i.toFixed(2)):null,meshes:Yt.size,lastFrameBox:dm,screenPoint:(i,e,t)=>{let n=new P(i,e,t).project(yt),s=wt.domElement.getBoundingClientRect();return[s.left+(n.x*.5+.5)*s.width,s.top+(-n.y*.5+.5)*s.height]},gizmoPivot:()=>xt.object===gn?gn.position.toArray().map(i=>+i.toFixed(2)):null,groupBox:i=>{let e=is(i),t=new Vt;for(let n of e){let s=Yt.get(n);s&&t.expandByObject(s)}return t.isEmpty()?null:{min:t.min.toArray().map(n=>+n.toFixed(2)),max:t.max.toArray().map(n=>+n.toFixed(2))}},meshPos:()=>[...Yt.entries()].map(([i,e])=>[i,e.name,e.position.toArray().map(t=>+t.toFixed(2))])})});function Ui(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function MM(i){return new TextEncoder().encode(i).buffer}function SM(i){return Ui(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function bM(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Rs.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Am(i){return Math.ceil(i/4)*4}function ed(i,e=0){let t=Am(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function td(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function wM(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var bm,as,Ye,Qu,Ln,wm,gM,Em,_M,xM,Tm,yM,vM,nd,id,sd,rd,od,ad,ld,cd,hd,ud,dd,fd,pd,md,gd,Rm=jn(()=>{ts();bm={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},as=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new id(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new gd(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new nd,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Qu="KHR_mesh_quantization",Ln={};Ln[Bt]=Ye.NEAREST;Ln[cl]=Ye.NEAREST_MIPMAP_NEAREST;Ln[Es]=Ye.NEAREST_MIPMAP_LINEAR;Ln[sn]=Ye.LINEAR;Ln[Sr]=Ye.LINEAR_MIPMAP_NEAREST;Ln[Qn]=Ye.LINEAR_MIPMAP_LINEAR;Ln[Bn]=Ye.CLAMP_TO_EDGE;Ln[sr]=Ye.REPEAT;Ln[rr]=Ye.MIRRORED_REPEAT;wm={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},gM=new He,Em=12,_M=1179937895,xM=2,Tm=8,yM=1313821514,vM=5130562;nd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+xr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(c);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.copyright&&(o.asset.copyright=n.copyright),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=ed(d.result),g=new DataView(new ArrayBuffer(Tm));g.setUint32(0,f.byteLength,!0),g.setUint32(4,vM,!0);let x=ed(MM(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Tm));p.setUint32(0,x.byteLength,!0),p.setUint32(4,yM,!0);let m=new ArrayBuffer(Em),v=new DataView(m);v.setUint32(0,_M,!0),v.setUint32(4,xM,!0);let w=Em+p.byteLength+x.byteLength+g.byteLength+f.byteLength;v.setUint32(8,w,!0);let y=new Blob([m,p,x,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(y),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new P;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new P;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===Qt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Yi&&(e=await this.decompressTextureAsync(e)),t instanceof Yi&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=td();c.width=o,c.height=a;let l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);let h=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);let f=n(e),g=l.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}if(r){l.drawImage(r,0,0,o,a);let f=n(t),g=l.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}l.putImageData(h,0,0);let d=(e||t).clone();return d.source=new Ti(c),d.colorSpace=ni,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async buildNormalMapTextureAsync(e,t,n){e instanceof Yi&&(e=await this.decompressTextureAsync(e));let s=e.image,r=td();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),c=a.data;for(let h=0;h<c.length;h+=4)t&&(c[h+0]=255-c[h+0]),n&&(c[h+1]=255-c[h+1]);o.putImageData(a,0,0);let l=e.clone();return l.source=new Ti(r),l}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Ye.BYTE:case Ye.UNSIGNED_BYTE:a=1;break;case Ye.SHORT:case Ye.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;r===Ye.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);let l=Am(s*c),h=new DataView(new ArrayBuffer(l)),u=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let p;e.itemSize>4?p=e.array[g*e.itemSize+x]:(x===0?p=e.getX(g):x===1?p=e.getY(g):x===2?p=e.getZ(g):x===3&&(p=e.getW(g)),e.normalized===!0&&(p=Rs.normalize(p,e.array))),t===Ye.FLOAT?h.setFloat32(u,p,!0):t===Ye.INT?h.setInt32(u,p,!0):t===Ye.UNSIGNED_INT?h.setUint32(u,p,!0):t===Ye.SHORT?h.setInt16(u,p,!0):t===Ye.UNSIGNED_SHORT?h.setUint16(u,p,!0):t===Ye.BYTE?h.setInt8(u,p):t===Ye.UNSIGNED_BYTE&&h.setUint8(u,p),u+=a}u%c!==0&&(u+=c-u%c)}let d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(d.target=r),r===Ye.ARRAY_BUFFER&&(d.byteStride=c),this.byteOffset+=l,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=ed(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=Ye.FLOAT;else if(e.array.constructor===Int32Array)a=Ye.INT;else if(e.array.constructor===Uint32Array)a=Ye.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Ye.SHORT;else if(e.array.constructor===Uint16Array)a=Ye.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Ye.BYTE;else if(e.array.constructor===Uint8Array)a=Ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=bM(e,n,s),l;t!==void 0&&(l=e===t.index?Ye.ELEMENT_ARRAY_BUFFER:Ye.ARRAY_BUFFER);let h=this.processBufferView(e,a,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let d={mimeType:s},f=td();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==In&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(wM(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):d.uri=hr.getDataURL(f,s);let x=a.images.push(d)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Ln[e.magFilter],minFilter:Ln[e.minFilter],wrapS:Ln[e.wrapS],wrapT:Ln[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Yi&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType,a=this.processImage(e.image,e.format,e.flipY,o),c={sampler:this.processSampler(e)};o==="image/webp"?(c.extensions=c.extensions||{},c.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):c.source=a,e.name&&(c.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,c)});let l=r.textures.push(c)-1;return s.textures.set(e,l),l}async processMaterialAsync(e,t){let n=this.cache,s=this.json,r=t!==void 0&&t.hasAttribute("tangent"),o=e.normalMap?e.uuid+":"+r:e.uuid;if(n.materials.has(o))return n.materials.get(o);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let c=e.color.toArray().concat([e.opacity]);if(Ui(c,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=c),e.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=e.metalness,a.pbrMetallicRoughness.roughnessFactor=e.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),a.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),a.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let d={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(d,e.emissiveMap),a.emissiveTexture=d}}if(e.normalMap){let h=e.normalScale,u=h.x<0,d=r?h.y<0:h.y>0,f=e.normalMap;if(u||d){n.normalMaps.has(e.normalMap)===!1&&n.normalMaps.set(e.normalMap,{});let x=n.normalMaps.get(e.normalMap),p=`${u}:${d}`;x[p]===void 0&&(x[p]=await this.buildNormalMapTextureAsync(e.normalMap,u,d)),f=x[p]}let g={index:await this.processTextureAsync(f),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(g.scale=Math.abs(h.x)),this.applyTextureTransform(g,e.normalMap),a.normalTexture=g}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),a.occlusionTexture=h}e.transparent?a.alphaMode="BLEND":e.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=e.alphaTest),e.side===pn&&(a.doubleSided=!0),e.name!==""&&(a.name=e.name),this.serializeUserData(e,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,a)});let l=s.materials.push(a)-1;return n.materials.set(o,l),l}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,T=e.material.length;y<T;y++)s.push(e.material[y].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=Ye.LINES:e.isLineLoop?a=Ye.LINE_LOOP:e.isLine?a=Ye.LINE_STRIP:e.isPoints?a=Ye.POINTS:a=e.material.wireframe?Ye.LINES:Ye.TRIANGLES;let c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let y in o.attributes){if(y.slice(0,5)==="morph")continue;let T=o.attributes[y];if(y=d[y]||y.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)&&!y.startsWith("_")&&(y="_"+y),t.attributes.has(this.getUID(T))){l[y]=t.attributes.get(this.getUID(T));continue}g=null;let _=T.array;y==="JOINTS_0"&&!(_ instanceof Uint16Array)&&!(_ instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=as.Utils.toTypedBufferAttribute(T,Uint16Array)):(_ instanceof Uint32Array||_ instanceof Int32Array)&&!y.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${y}" converted to type FLOAT.`),g=as.Utils.toTypedBufferAttribute(T,Float32Array));let b=this.processAccessor(g||T,o);b!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,T),l[y]=b,t.attributes.set(this.getUID(T),b))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let y=[],T=[],E={};if(e.morphTargetDictionary!==void 0)for(let _ in e.morphTargetDictionary)E[e.morphTargetDictionary[_]]=_;for(let _=0;_<e.morphTargetInfluences.length;++_){let b={},D=!1;for(let C in o.morphAttributes){if(C!=="position"&&C!=="normal"){D||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),D=!0);continue}let N=o.morphAttributes[C][_],B=C.toUpperCase(),I=o.attributes[C];if(t.attributes.has(this.getUID(N,!0))){b[B]=t.attributes.get(this.getUID(N,!0));continue}let A=N.clone();if(!o.morphTargetsRelative)for(let O=0,j=N.count;O<j;O++)for(let z=0;z<N.itemSize;z++)z===0&&A.setX(O,N.getX(O)-I.getX(O)),z===1&&A.setY(O,N.getY(O)-I.getY(O)),z===2&&A.setZ(O,N.getZ(O)-I.getZ(O)),z===3&&A.setW(O,N.getW(O)-I.getW(O));b[B]=this.processAccessor(A,o),t.attributes.set(this.getUID(I,!0),b[B])}u.push(b),y.push(e.morphTargetInfluences[_]),e.morphTargetDictionary!==void 0&&T.push(E[_])}c.weights=y,T.length>0&&(c.extras={},c.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let p=!1;if(x&&o.index===null){let y=[];for(let T=0,E=o.attributes.position.count;T<E;T++)y[T]=T;o.setIndex(y),p=!0}let m=x?e.material:[e.material],v=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,T=v.length;y<T;y++){let E={mode:a,attributes:l};if(this.serializeUserData(o,E),u.length>0&&(E.targets=u),o.index!==null){let b=this.getUID(o.index);(v[y].start!==void 0||v[y].count!==void 0)&&(b+=":"+v[y].start+":"+v[y].count),t.attributes.has(b)?E.indices=t.attributes.get(b):(E.indices=this.processAccessor(o.index,o,v[y].start,v[y].count),t.attributes.set(b,E.indices)),E.indices===null&&delete E.indices}let _=await this.processMaterialAsync(m[v[y].materialIndex],o);_!==null&&(E.material=_),h.push(E)}p===!0&&o.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(y){y.writeMesh&&y.writeMesh(e,c)});let w=n.meshes.push(c)-1;return t.meshes.set(r,w),w}detectMeshQuantization(e,t){if(this.extensionsUsed[Qu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];bm[s]&&bm[s].includes(n)&&(this.extensionsUsed[Qu]=!0,this.extensionsRequired[Qu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right,ymag:e.top,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Rs.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=as.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){let h=r[l],u=rt.parseTrackName(h.name),d=rt.findNode(t,u.nodeName),f=wm[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let g=1,x=h.values.length/h.times.length;f===wm.morphTargetInfluences&&(x/=d.morphTargetInfluences.length);let p;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",x/=3):h.getInterpolation()===ms?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new Ot(h.times,g)),output:this.processAccessor(new Ot(h.values,x)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(d),path:f}})}let c={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,c),n.animations.push(c),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],c=new Float32Array(r.bones.length*16),l=new Je;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Ot(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();Ui(a,[0,0,0,1])||(r.rotation=a),Ui(c,[0,0,0])||(r.translation=c),Ui(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),SM(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let c=0,l=e.children.length;c<l;c++){let h=e.children[c];if(h.visible||n.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,s=this.nodeMap,r=e.pivot,o={},a=e.quaternion.toArray(),c=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],l=e.scale.toArray();Ui(a,[0,0,0,1])||(o.rotation=a),Ui(c,[0,0,0])||(o.translation=c),Ui(l,[1,1,1])||(o.scale=l),o.extras={pivot:r.toArray()},e.name!==""&&(o.name=String(e.name)),this.serializeUserData(e,o);let h=t.nodes.push(o)-1;s.set(e,h);let u={},d=[-r.x,-r.y,-r.z];if(Ui(d,[0,0,0])||(u.translation=d),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(u.mesh=x)}else e.isCamera&&(u.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let g=[t.nodes.push(u)-1];if(e.children.length>0){let x=[];for(let p=0,m=e.children.length;p<m;p++){let v=e.children[p];if(v.visible||n.onlyVisible===!1){let w=await this.processNodeAsync(v);w!==null&&x.push(w)}}x.length>0&&(u.children=x)}return o.children=g,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,o)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let c=e.children[o];if(c.visible||n.onlyVisible===!1){let l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new oi;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof oi?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(e.length===1)for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);else for(let s=0;s<e.length;s++){let r=t.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],e[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},id=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},sd=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},rd=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},od=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ad=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,r.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,e.iridescenceThicknessMap){let o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ld=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cd=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hd=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ud=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(gM)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},dd=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},fd=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},pd=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},md=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},gd=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new Je,l=new P,h=new it,u=new P;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(r,f*3),h.toArray(o,f*4),u.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new Ot(r,3)),ROTATION:n.processAccessor(new Ot(o,4)),SCALE:n.processAccessor(new Ot(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};as.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=rt.parseTrackName(o.name),c=rt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(or)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[c.uuid]===void 0){u=o.clone();let f=new u.ValueBufferType(l*u.times.length);for(let g=0;g<u.times.length;g++)f[g*l+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,t.push(u);continue}let d=o.createInterpolant(new o.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(u,o.times[f]);u.values[g*l+h]=o.values[f]}}return i.tracks=t,i},toTypedBufferAttribute:function(i,e){let t=new Ot(new e(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let n=0,s=i.count;n<s;n++)for(let r=0;r<i.itemSize;r++)t.setComponent(n,r,i.getComponent(n,r));return t}}});var vd={};Gs(vd,{bakeClips:()=>Im,exportGLB:()=>xd,exportPNG:()=>yd,safeName:()=>ra,saveProjectJSON:()=>Cc});function Cm(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),4e3)}function Cc(){let i=k.project;return Cm(new Blob([Iu()],{type:"application/json"}),`${ra(i.name)}.animforge.json`),Nr(),`${ra(i.name)}.animforge.json`}function Im(i){let e=k.project,t=e.fps||30,n=new Map;for(let r of i.children)n.set(r.userData.exportId,r);let s=[];for(let r of e.clips){let o=[],a=Math.max(1,Math.round(r.duration*t));for(let[c,l]of Object.entries(r.tracks||{})){let h=n.get(c);if(!h||!l.length)continue;let u=[],d=[],f=[],g=[],x=null;for(let m=0;m<=a;m++){let v=m/t,w=rc(l,v);u.push(+v.toFixed(5)),d.push(w.pos[0],w.pos[1],w.pos[2]);let y=new it().setFromEuler(new rn(w.rot[0]*_d,w.rot[1]*_d,w.rot[2]*_d,"XYZ"));x&&x.dot(y)<0&&y.set(-y.x,-y.y,-y.z,-y.w),x=y,f.push(y.x,y.y,y.z,y.w),g.push(w.scale[0],w.scale[1],w.scale[2])}let p=h.name;o.push(new Ki(`${p}.position`,u,d)),o.push(new $i(`${p}.quaternion`,u,f)),o.push(new Ki(`${p}.scale`,u,g))}o.length&&s.push(new So(r.name||"Clip",r.duration,o))}return s}function xd(){return new Promise((i,e)=>{let t=k.project;if(!t.objects.length){e(new Error("Nothing to export \u2014 add an object first"));return}let n=Xu(),s=Im(n);new as().parse(n,o=>{let a=`${ra(t.name)}.glb`;Cm(new Blob([o],{type:"model/gltf-binary"}),a),n.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material.dispose())}),i({filename:a,clips:s.length,objects:n.children.length})},o=>e(o),{binary:!0,animations:s,onlyVisible:!0,truncateDrawRange:!0})})}function yd(){let i=Wu(),e=document.createElement("a");return e.href=i,e.download=`${ra(k.project.name)}.png`,document.body.appendChild(e),e.click(),e.remove(),e.download}var _d,ra,Md=jn(()=>{ts();Rm();ss();vc();_d=Math.PI/180;ra=i=>String(i||"scene").trim().replace(/[^\w\-. ]+/g,"").replace(/\s+/g,"-")||"scene"});ss();vc();var Ku={};Gs(Ku,{init:()=>$u,refresh:()=>ea});ss();Is();var aM=151,gi=110,lt={},At=null,Yu=null;function $u(){lt.body=document.getElementById("tl-body"),lt.grid=document.getElementById("tl-grid"),lt.ruler=document.getElementById("tl-ruler"),lt.rows=document.getElementById("tl-rows"),lt.playhead=document.getElementById("tl-playhead"),lt.clipLabel=document.getElementById("tl-clip-label"),lt.duration=document.getElementById("tl-duration"),lt.fps=document.getElementById("tl-fps"),lt.duration.addEventListener("change",()=>Mu(lt.duration.value)),lt.fps.addEventListener("change",()=>Su(lt.fps.value)),document.getElementById("tl-key").addEventListener("click",()=>{let i=k.selectedIds[0];i&&Fs(i,k.time)}),document.getElementById("tl-delkey").addEventListener("click",()=>{let i=k.selectedIds[0];if(i&&!Pr(i,k.time)&&k.selectedKey){let{objId:e,key:t}=k.selectedKey;Pr(e,t.t)}}),lt.grid.addEventListener("pointerdown",cM),lt.grid.addEventListener("dblclick",hM),new ResizeObserver(()=>ea()).observe(lt.body),Rt("change",Mc),Rt("timeline:refresh",Mc),Rt("selection",Mc),Rt("clip",Mc),Rt("time",Sc),Rt("playback",Sc),ym(),ea()}function Mc(){Yu||(Yu=requestAnimationFrame(()=>{Yu=null,ea()}))}function ym(){let i=tt(),e=Math.max(320,(lt.body?.clientWidth||800)-aM-6),t=i?.duration||4;gi=Math.max(28,Math.min(240,e/t)),lt.grid?.style.setProperty("--lane-w",`${Math.round(t*gi)}px`)}function ea(){let i=k.project;if(!i||!lt.rows)return;ym();let e=tt(),t=e?.duration||4;lt.clipLabel.textContent=e?e.name:"Timeline",document.activeElement!==lt.duration&&(lt.duration.value=String(t)),document.activeElement!==lt.fps&&(lt.fps.value=String(i.fps));let n=gi>=150?.25:gi>=90?.5:gi>=45?1:2,s=document.createDocumentFragment();for(let o=0;o<=t+1e-6;o+=n){let a=document.createElement("div"),c=Math.abs(o-Math.round(o))<1e-6;if(a.className="tick"+(c?" major":""),a.style.left=`${o*gi}px`,c){let l=document.createElement("span");l.textContent=`${Math.round(o)}s`,a.appendChild(l)}s.appendChild(a)}lt.ruler.replaceChildren(s);let r=document.createDocumentFragment();for(let o of i.objects){let a=document.createElement("div");a.className="tl-row"+(Ls(o.id)?" sel":""),a.dataset.id=o.id;let c=document.createElement("div");c.className="tl-cell name";let l=Pn(o.id);c.innerHTML=`<span class="sw" style="background:${o.material.color}"></span>
      <span class="nm">${lM(o.name)}</span>
      <span class="kcount">${l.length?l.length+"k":""}</span>`,a.appendChild(c);let h=document.createElement("div");h.className="tl-cell lane";for(let u of l){let d=document.createElement("div"),f=k.selectedKey?.key===u&&k.selectedKey?.objId===o.id;d.className=`key ${u.ease||"smooth"}${f?" sel":""}`,d.style.left=`${u.t*gi}px`,d.dataset.t=String(u.t),d.title=`${o.name} \xB7 ${u.t.toFixed(2)}s \xB7 ${nc[u.ease||"smooth"]}`,h.appendChild(d)}a.appendChild(h),r.appendChild(a)}lt.rows.replaceChildren(r),Sc()}function Sc(){if(!lt.playhead||!lt.grid)return;let i=k.time,e=lt.grid.getBoundingClientRect(),n=lt.ruler.getBoundingClientRect().left-e.left;lt.playhead.style.left=`${n+i*gi}px`}var lM=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function qu(i,e){let t=e.getBoundingClientRect(),n=(i.clientX-t.left)/gi,s=k.project?.fps||30,r=Math.max(0,Math.min(tt()?.duration||4,n));return Math.round(r*s)/s}function cM(i){if(i.button!==0)return;let e=i.target.closest(".key"),t=i.target.closest(".tl-cell.lane"),n=i.target.closest(".tl-row");if(!t)return;let s=n?.dataset.id;if(e){if(!s)return;i.preventDefault();let r=zt(s),o=[...t.querySelectorAll(".key")].indexOf(e),a=Pn(s)[o];if(!a)return;Di([s]),k.selectedKey={objId:s,key:a},gt(),At={type:"key",objId:s,key:a,el:e,laneEl:t},e.classList.add("dragging"),t.querySelectorAll(".key").forEach(c=>c.classList.toggle("sel",c===e)),window.addEventListener("pointermove",Zu),window.addEventListener("pointerup",xm,{once:!0});return}i.preventDefault(),ii(qu(i,t)),At={type:"scrub",laneEl:t},window.addEventListener("pointermove",Zu),window.addEventListener("pointerup",xm,{once:!0})}function Zu(i){if(At)if(At.type==="key"){let e=qu(i,At.laneEl);bu(At.objId,At.key,e),At.el.style.left=`${At.key.t*gi}px`,At.el.dataset.t=String(At.key.t),At.el.dataset.shownT!==String(At.key.t)&&(At.el.dataset.shownT=String(At.key.t)),Sc(),Qe("keys",!0)}else At.type==="scrub"&&ii(qu(i,At.laneEl))}function xm(){window.removeEventListener("pointermove",Zu),At?.el&&At.el.classList.remove("dragging"),At?.type==="key"&&(k.selectedKey={objId:At.objId,key:At.key},Qe("keys")),At=null,ea()}function hM(i){let e=i.target.closest(".key");if(!e)return;let t=i.target.closest(".tl-row"),n=i.target.closest(".tl-cell.lane"),s=t?.dataset.id;if(!s)return;let r=[...n.querySelectorAll(".key")].indexOf(e),o=Pn(s)[r];o&&wu(o)}var Cd={};Gs(Cd,{init:()=>Td,insertPreset:()=>Rd,setToolUI:()=>la,toast:()=>It});ss();vc();Ql();var Rc={};Gs(Rc,{CATEGORIES:()=>Ju,LIBRARY:()=>Tc,getPreset:()=>sa,insertPreset:()=>Ac});ss();Is();var Wn=Math.PI*2,ia=i=>i*Math.PI/180,qt=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Mm=(i,e)=>{let t=ia(e),n=Math.cos(t),s=Math.sin(t);return[i[0],i[1]*n-i[2]*s,i[1]*s+i[2]*n]},na=(i,e)=>{let t=ia(e),n=Math.cos(t),s=Math.sin(t);return[i[0]*n+i[2]*s,i[1],-i[0]*s+i[2]*n]},uM=(i,e)=>{let t=ia(e),n=Math.cos(t),s=Math.sin(t);return[i[0]*n-i[1]*s,i[0]*s+i[1]*n,i[2]]},Dt=(i,e,t,n="X")=>{let s=n==="X"?Mm([0,-e,0],t):n==="Z"?uM([0,-e,0],t):na([0,-e,0],t);return qt(i,s)},ne=(i,e,t,n,s,r,o)=>({name:i,type:e,params:t||{},pos:n||[0,0,0],rot:s||[0,0,0],material:r||{},scale:o||[1,1,1]}),ta=(i={})=>{let e=i.shirt||"#5b93e8",t=i.pants||"#2f3c55",n=i.skin||"#f2c9a2",s=i.shoe||"#1d2430",r=.35,o=.255,a=[-.118,.7,0],c=[.118,.7,0],l=[-.235,1.4,0],h=[.235,1.4,0],u=[ne("Head","sphere",{r:.145,wseg:32,hseg:24},[0,1.63,0],null,{color:n,roughness:.62,metalness:.04}),ne("Eye L","sphere",{r:.023,wseg:14,hseg:10},[-.052,1.655,.133],null,{color:"#121a24",roughness:.35,metalness:.1}),ne("Eye R","sphere",{r:.023,wseg:14,hseg:10},[.052,1.655,.133],null,{color:"#121a24",roughness:.35,metalness:.1}),ne("Neck","cylinder",{rt:.05,rb:.058,h:.1,seg:16},[0,1.5,0],null,{color:n,roughness:.6,metalness:.04}),ne("Torso","capsule",{r:.155,h:.3,seg:32},[0,1.16,0],null,{color:e,roughness:.74,metalness:.06}),ne("Pelvis","box",{w:.31,h:.18,d:.2},[0,.79,0],null,{color:t,roughness:.8,metalness:.04}),ne("Arm L","capsule",{r:.055,h:.4,seg:20},[l[0],1.4-o,0],null,{color:e,roughness:.74,metalness:.06}),ne("Arm R","capsule",{r:.055,h:.4,seg:20},[h[0],1.4-o,0],null,{color:e,roughness:.74,metalness:.06}),ne("Hand L","sphere",{r:.062,wseg:18,hseg:14,taper:.25},[l[0],.94,0],null,{color:n,roughness:.62,metalness:.04}),ne("Hand R","sphere",{r:.062,wseg:18,hseg:14,taper:.25},[h[0],.94,0],null,{color:n,roughness:.62,metalness:.04}),ne("Leg L","capsule",{r:.072,h:.55,seg:20},[a[0],1.4-o-.35,0],null,{color:t,roughness:.8,metalness:.04}),ne("Leg R","capsule",{r:.072,h:.55,seg:20},[c[0],.35,0],null,{color:t,roughness:.8,metalness:.04}),ne("Foot L","box",{w:.135,h:.09,d:.26},[a[0],.045,.045],null,{color:s,roughness:.7,metalness:.08}),ne("Foot R","box",{w:.135,h:.09,d:.26},[c[0],.045,.045],null,{color:s,roughness:.7,metalness:.08})];return u[10].pos=[a[0],.35,0],{parts:u,A:{hipL:a,hipR:c,shL:l,shR:h,LEG:r,ARM:o}}},bc=i=>({legL:l=>({pos:Dt(i.hipL,i.LEG,l),rot:[l,0,0]}),legR:l=>({pos:Dt(i.hipR,i.LEG,l),rot:[l,0,0]}),footL:l=>({pos:qt(Dt(i.hipL,.66,l),[0,0,.045]),rot:[l,0,0]}),footR:l=>({pos:qt(Dt(i.hipR,.66,l),[0,0,.045]),rot:[l,0,0]}),armL:(l,h=0)=>h?{pos:Dt(i.shL,i.ARM,h,"Z"),rot:[0,0,h]}:{pos:Dt(i.shL,i.ARM,l),rot:[l,0,0]},armR:(l,h=0)=>h?{pos:Dt(i.shR,i.ARM,h,"Z"),rot:[0,0,h]}:{pos:Dt(i.shR,i.ARM,l),rot:[l,0,0]},handL:(l,h=0)=>({pos:h?Dt(i.shL,.51,h,"Z"):Dt(i.shL,.51,l),rot:h?[0,0,h]:[l,0,0]}),handR:(l,h=0)=>({pos:h?Dt(i.shR,.51,h,"Z"):Dt(i.shR,.51,l),rot:h?[0,0,h]:[l,0,0]})}),wc=(i,e)=>Object.fromEntries(i.map(t=>[t,(n,s)=>({pos:[s.pos[0],s.pos[1]+e(n),s.pos[2]]})])),Ec=["Head","Eye L","Eye R","Neck","Torso","Pelvis","Arm L","Arm R","Hand L","Hand R"];function dM(){let t=(c,l)=>[c,.32,l],n=[["Leg FL",[-.115,.32,.26]],["Leg FR",[.115,.32,.26]],["Leg BL",[-.115,.32,-.26]],["Leg BR",[.115,.32,-.26]]],s="#c98b52",r="#8f5c31",o=[ne("Body","capsule",{r:.17,h:.44,seg:28},[0,.46,0],[90,0,0],{color:s,roughness:.85,metalness:.02}),ne("Chest","sphere",{r:.175,wseg:24,hseg:18},[0,.46,.3],null,{color:r,roughness:.85,metalness:.02}),ne("Head","sphere",{r:.15,wseg:28,hseg:20},[0,.6,.44],null,{color:s,roughness:.85,metalness:.02}),ne("Snout","box",{w:.12,h:.1,d:.19},[0,.55,.56],null,{color:r,roughness:.8,metalness:.02}),ne("Nose","sphere",{r:.035,wseg:14,hseg:10},[0,.575,.655],null,{color:"#20242c",roughness:.4,metalness:.1}),ne("Ear L","box",{w:.05,h:.12,d:.03},[-.09,.72,.4],[0,0,14],{color:r,roughness:.85}),ne("Ear R","box",{w:.05,h:.12,d:.03},[.09,.72,.4],[0,0,-14],{color:r,roughness:.85}),ne("Eye L","sphere",{r:.024,wseg:12,hseg:8},[-.07,.635,.55],null,{color:"#101418",roughness:.3}),ne("Eye R","sphere",{r:.024,wseg:12,hseg:8},[.07,.635,.55],null,{color:"#101418",roughness:.3}),ne("Tail","capsule",{r:.035,h:.2,seg:14},[0,.58,-.46],[48,0,0],{color:s,roughness:.85})];for(let[c,l]of n)o.push(ne(c,"capsule",{r:.052,h:.2,seg:16},[l[0],.32-.152,l[2]],null,{color:r,roughness:.85,metalness:.02}));let a=Object.fromEntries(n.map(([c,l])=>[c,l]));return{parts:o,A:{legMap:a,legHalf:.152,legY:.32,hip:t,tailBase:[0,.55,-.36]}}}var vm=(i,e,t,n,s)=>r=>{let o=Wn/i,a=bc(r),c=h=>e*Math.sin(o*h),l=h=>n*Math.cos(2*o*h);return{...wc(Ec,l),"Leg L":h=>a.legL(c(h)),"Leg R":h=>a.legR(-c(h)),"Foot L":h=>a.footL(c(h)),"Foot R":h=>a.footR(-c(h)),"Arm L":h=>a.armL(-t*Math.sin(o*h)),"Arm R":h=>a.armR(t*Math.sin(o*h)),"Hand L":h=>a.handL(-t*Math.sin(o*h)),"Hand R":h=>a.handR(t*Math.sin(o*h)),Torso:(h,u)=>({pos:[u.pos[0],u.pos[1]+l(h),u.pos[2]],rot:[s,4*Math.sin(o*h),0]}),Head:(h,u)=>({pos:[u.pos[0],u.pos[1]+l(h),u.pos[2]],rot:[0,-5*Math.sin(o*h),0]})}},Sm=[{id:"human-walk",name:"Human \xB7 Walk",cat:"human",emoji:"\u{1F6B6}",clip:"Walk",duration:1.6,samples:16,make:()=>ta({shirt:"#5b93e8",pants:"#2f3c55"}),anim:vm(1.6,26,20,.024,3)},{id:"human-run",name:"Human \xB7 Run",cat:"human",emoji:"\u{1F3C3}",clip:"Run",duration:1,samples:16,make:()=>ta({shirt:"#ff7a59",pants:"#22304a"}),anim:vm(1,42,40,.055,13)},{id:"human-idle",name:"Human \xB7 Idle",cat:"human",emoji:"\u{1F9CD}",clip:"Idle",duration:4,samples:12,make:()=>ta({shirt:"#8f7bff",pants:"#2c3350"}),anim:i=>{let e=Wn/4,t=bc(i),n=r=>.012*Math.sin(e*r),s=r=>3*Math.sin(e*r);return{...wc(Ec,n),Torso:(r,o)=>{let a=1+.018*Math.sin(e*r);return{pos:[o.pos[0],o.pos[1]+n(r),o.pos[2]],rot:[1.2*Math.sin(e*r),0,0],scale:[1,a,1]}},Head:(r,o)=>({pos:[o.pos[0],o.pos[1]+n(r),o.pos[2]],rot:[2*Math.sin(e*r+1),6*Math.sin(e*r*.5),0]}),"Arm L":r=>t.armL(s(r)),"Arm R":r=>t.armR(-s(r)),"Hand L":r=>t.handL(s(r)),"Hand R":r=>t.handR(-s(r))}}},{id:"human-wave",name:"Human \xB7 Wave",cat:"human",emoji:"\u{1F44B}",clip:"Wave",duration:2.4,samples:16,make:()=>ta({shirt:"#3fd6a8",pants:"#26374a"}),anim:i=>{let e=Wn/2.4,t=bc(i),n=r=>.01*Math.sin(e*r),s=r=>138+16*Math.sin(3*e*r);return{...wc(Ec,n),Head:(r,o)=>({pos:[o.pos[0],o.pos[1]+n(r),o.pos[2]],rot:[0,-8,6]}),"Arm R":r=>t.armR(0,s(r)),"Hand R":r=>t.handR(0,s(r)),"Arm L":r=>t.armL(2*Math.sin(e*r)),"Hand L":r=>t.handL(2*Math.sin(e*r))}}},{id:"human-jump",name:"Human \xB7 Jump",cat:"human",emoji:"\u{1F938}",clip:"Jump",duration:1.6,samples:24,make:()=>ta({shirt:"#ffcf5c",pants:"#33405c",skin:"#e8b183"}),anim:i=>{let e=bc(i),t=1.6,n=l=>{let h=(l-.28)/(t-.56);return h<=0||h>=1?0:Math.sin(Math.PI*h)},s=l=>l<.28?Math.sin(Math.PI*l/.28)*.12:l>t-.32?Math.sin(Math.PI*(t-l)/.32)*.12:0,r=l=>n(l)*.62,o=l=>r(l),a=l=>-34*n(l),c={...wc(Ec,o)};return c["Leg L"]=l=>({pos:qt(Dt(i.hipL,i.LEG,a(l)),[0,r(l),0]),rot:[a(l),0,0]}),c["Leg R"]=l=>({pos:qt(Dt(i.hipR,i.LEG,a(l)),[0,r(l),0]),rot:[a(l),0,0]}),c["Foot L"]=l=>({pos:qt(qt(Dt(i.hipL,.66,a(l)),[0,r(l),.045]),[0,0,0]),rot:[a(l),0,0]}),c["Foot R"]=l=>({pos:qt(qt(Dt(i.hipR,.66,a(l)),[0,r(l),.045]),[0,0,0]),rot:[a(l),0,0]}),c["Arm L"]=l=>{let h=-70*n(l)+12*s(l);return{pos:qt(Dt(i.shL,i.ARM,h),[0,r(l),0]),rot:[h,0,0]}},c["Arm R"]=l=>{let h=-70*n(l)+12*s(l);return{pos:qt(Dt(i.shR,i.ARM,h),[0,r(l),0]),rot:[h,0,0]}},c["Hand L"]=l=>{let h=-70*n(l);return{pos:qt(Dt(i.shL,.51,h),[0,r(l),0]),rot:[h,0,0]}},c["Hand R"]=l=>{let h=-70*n(l);return{pos:qt(Dt(i.shR,.51,h),[0,r(l),0]),rot:[h,0,0]}},c.Torso=(l,h)=>{let u=1-.1*s(l)/.12+.05*n(l);return{pos:[h.pos[0],h.pos[1]+r(l),h.pos[2]],scale:[u,1/u,u]}},c}},{id:"dog-walk",name:"Dog \xB7 Walk",cat:"animal",emoji:"\u{1F415}",clip:"Walk",duration:1.4,samples:16,make:dM,anim:i=>{let e=Wn/1.4,t=(r,o)=>24*Math.sin(e*r+o),n={},s=[["Leg FL",0],["Leg BR",0],["Leg FR",Math.PI],["Leg BL",Math.PI]];for(let[r,o]of s){let a=i.legMap[r];n[r]=c=>{let l=t(c,o);return{pos:qt(a,Mm([0,-i.legHalf,0],l)),rot:[l,0,0]}}}n.Body=(r,o)=>({pos:[o.pos[0],o.pos[1]+.012*Math.cos(2*e*r),o.pos[2]],rot:[90,3*Math.sin(e*r),0]}),n.Chest=(r,o)=>({pos:[o.pos[0],o.pos[1]+.012*Math.cos(2*e*r),o.pos[2]]});for(let r of["Head","Snout","Nose","Ear L","Ear R","Eye L","Eye R"])n[r]=(o,a)=>({pos:[a.pos[0],a.pos[1]+.016*Math.cos(2*e*o+.6),a.pos[2]],rot:r==="Head"?[0,5*Math.sin(e*o),0]:[0,0,0]});return n.Tail=r=>({pos:qt(i.tailBase,na([0,.14,-.06],26*Math.sin(2*e*r))),rot:[48,26*Math.sin(2*e*r),0]}),n}},{id:"cat-sit",name:"Cat \xB7 Sit",cat:"animal",emoji:"\u{1F408}",clip:"Sit",duration:3.2,samples:12,make:()=>{let i="#9aa3b2",e="#6b7482";return{parts:[ne("Body","capsule",{r:.16,h:.2,seg:24},[0,.4,-.08],[-38,0,0],{color:i,roughness:.86,metalness:.02}),ne("Head","sphere",{r:.145,wseg:26,hseg:20},[0,.68,.17],null,{color:i,roughness:.86}),ne("Muzzle","sphere",{r:.07,wseg:18,hseg:12},[0,.64,.29],null,{color:"#e6e9ef",roughness:.8}),ne("Ear L","cone",{r:.06,h:.13,seg:16},[-.078,.815,.16],[0,0,12],{color:e,roughness:.86}),ne("Ear R","cone",{r:.06,h:.13,seg:16},[.078,.815,.16],[0,0,-12],{color:e,roughness:.86}),ne("Eye L","sphere",{r:.022,wseg:12,hseg:8},[-.058,.705,.28],null,{color:"#20303c",roughness:.3}),ne("Eye R","sphere",{r:.022,wseg:12,hseg:8},[.058,.705,.28],null,{color:"#20303c",roughness:.3}),ne("Paw L","capsule",{r:.042,h:.1,seg:14},[-.075,.115,.2],[8,0,0],{color:i,roughness:.86}),ne("Paw R","capsule",{r:.042,h:.1,seg:14},[.075,.115,.2],[8,0,0],{color:i,roughness:.86}),ne("Haunch L","sphere",{r:.135,wseg:18,hseg:14},[-.115,.17,-.1],null,{color:i,roughness:.86}),ne("Haunch R","sphere",{r:.135,wseg:18,hseg:14},[.115,.17,-.1],null,{color:i,roughness:.86}),ne("Tail 1","capsule",{r:.032,h:.28,seg:14},[0,.2,-.3],[66,0,0],{color:e,roughness:.86}),ne("Tail 2","capsule",{r:.026,h:.22,seg:12},[0,.08,-.44],[100,0,0],{color:e,roughness:.86})],A:{tailBase:[0,.28,-.22]}}},anim:i=>{let e=Wn/3.2,t=s=>22*Math.sin(e*s),n={};n.Head=(s,r)=>({pos:[r.pos[0],r.pos[1]+.01*Math.sin(e*s),r.pos[2]],rot:[2*Math.sin(e*s+.8),12*Math.sin(e*s*.5),0]});for(let s of["Muzzle","Ear L","Ear R","Eye L","Eye R"])n[s]=(r,o)=>({pos:[o.pos[0],o.pos[1]+.01*Math.sin(e*r),o.pos[2]]});return n.Body=(s,r)=>{let o=1+.02*Math.sin(e*s+1);return{pos:[r.pos[0],r.pos[1]+.005*Math.sin(e*s),r.pos[2]],rot:[-38,0,0],scale:[o,1,o]}},n["Tail 1"]=s=>({pos:qt(i.tailBase,na([0,-.14,-.1],t(s))),rot:[66,t(s),0]}),n["Tail 2"]=s=>({pos:qt(i.tailBase,na([0,-.24,-.26],t(s)*1.4)),rot:[100,t(s)*1.4,0]}),n}},{id:"bird-fly",name:"Bird \xB7 Flap",cat:"animal",emoji:"\u{1F426}",clip:"Flap",duration:.9,samples:16,make:()=>{let i="#4fc3f7",e="#2f9bd4";return{parts:[ne("Body","sphere",{r:.16,wseg:24,hseg:18},[0,1,0],null,{color:i,roughness:.7},[1,.88,1.3]),ne("Chest","sphere",{r:.11,wseg:18,hseg:12},[0,.99,.12],null,{color:"#dff1ff",roughness:.7},[1,.9,1]),ne("Head","sphere",{r:.105,wseg:22,hseg:16},[0,1.12,.13],null,{color:i,roughness:.7}),ne("Beak","cone",{r:.045,h:.13,seg:10},[0,1.1,.25],[90,0,0],{color:"#ffb648",roughness:.55}),ne("Eye L","sphere",{r:.018,wseg:10,hseg:8},[-.06,1.15,.19],null,{color:"#101820",roughness:.3}),ne("Eye R","sphere",{r:.018,wseg:10,hseg:8},[.06,1.15,.19],null,{color:"#101820",roughness:.3}),ne("Wing L","box",{w:.46,h:.02,d:.24,taper:.35},[-.33,1.02,0],[0,0,0],{color:e,roughness:.72}),ne("Wing R","box",{w:.46,h:.02,d:.24,taper:.35},[.33,1.02,0],[0,0,0],{color:e,roughness:.72}),ne("Tail","box",{w:.14,h:.02,d:.22,taper:.4},[0,1,-.3],[0,0,0],{color:e,roughness:.72})],A:{shL:[-.1,1.02,0],shR:[.1,1.02,0]}}},anim:i=>{let e=Wn/.9,t=o=>62*Math.sin(e*o),n=o=>.035*Math.sin(e*o+Math.PI/2),s={},r=(o,a)=>c=>{let l=t(c)*a;return{pos:qt(Dt(o,.23,l,"Z"),[0,n(c),0]),rot:[0,0,l]}};s["Wing L"]=r(i.shL,1),s["Wing R"]=r(i.shR,-1);for(let o of["Body","Chest","Head","Beak","Eye L","Eye R","Tail"])s[o]=(a,c)=>({pos:[c.pos[0],c.pos[1]+n(a),c.pos[2]]});return s},float:1},{id:"fish-swim",name:"Fish \xB7 Swim",cat:"animal",emoji:"\u{1F41F}",clip:"Swim",duration:2,samples:16,make:()=>{let i="#ffa14a",e="#ff7a3d";return{parts:[ne("Body","sphere",{r:.2,wseg:26,hseg:18,taper:0},[0,1,0],null,{color:i,roughness:.42,metalness:.18},[.85,.95,1.5]),ne("Dorsal fin","box",{w:.02,h:.14,d:.34,taper:.6},[0,1.16,-.04],null,{color:e,roughness:.5}),ne("Tail","cone",{r:.16,h:.26,seg:4},[0,1,-.42],[-90,45,0],{color:e,roughness:.5}),ne("Fin L","box",{w:.2,h:.02,d:.12},[-.18,.94,.12],[0,0,22],{color:e,roughness:.5}),ne("Fin R","box",{w:.2,h:.02,d:.12},[.18,.94,.12],[0,0,-22],{color:e,roughness:.5}),ne("Eye L","sphere",{r:.028,wseg:12,hseg:8},[-.12,1.05,.24],null,{color:"#101820",roughness:.25}),ne("Eye R","sphere",{r:.028,wseg:12,hseg:8},[.12,1.05,.24],null,{color:"#101820",roughness:.25})],A:{tail:[0,1,-.3]}}},anim:i=>{let e=Wn/2,t=s=>9*Math.sin(e*s),n={};for(let s of["Body","Dorsal fin","Fin L","Fin R","Eye L","Eye R"])n[s]=(r,o)=>({pos:[o.pos[0],o.pos[1]+.04*Math.sin(e*r+1),o.pos[2]],rot:o.rot,ease:"smooth"});return n.Body=(s,r)=>({pos:[r.pos[0],r.pos[1]+.04*Math.sin(e*s+1),r.pos[2]],rot:[0,t(s),0],ease:"linear"}),n.Tail=s=>({pos:qt(i.tail,na([0,0,-.14],24*Math.sin(e*s))),rot:[-90,45+22*Math.sin(e*s),0]}),n},float:1},{id:"rabbit-hop",name:"Rabbit \xB7 Hop",cat:"animal",emoji:"\u{1F407}",clip:"Hop",duration:1.2,samples:18,make:()=>{let i="#e6e2dc",e="#c9c2b8";return{parts:[ne("Body","sphere",{r:.17,wseg:24,hseg:18},[0,.3,-.02],null,{color:i,roughness:.9,metalness:.02},[1,.95,1.25]),ne("Head","sphere",{r:.13,wseg:22,hseg:16},[0,.5,.16],null,{color:i,roughness:.9}),ne("Ear L","capsule",{r:.036,h:.2,seg:14},[-.055,.74,.12],[-12,0,8],{color:e,roughness:.9}),ne("Ear R","capsule",{r:.036,h:.2,seg:14},[.055,.74,.12],[-12,0,-8],{color:e,roughness:.9}),ne("Eye L","sphere",{r:.022,wseg:12,hseg:8},[-.06,.53,.26],null,{color:"#101820",roughness:.28}),ne("Eye R","sphere",{r:.022,wseg:12,hseg:8},[.06,.53,.26],null,{color:"#101820",roughness:.28}),ne("Nose","sphere",{r:.022,wseg:10,hseg:8},[0,.48,.29],null,{color:"#ff9db5",roughness:.5}),ne("Foot L","box",{w:.09,h:.07,d:.24},[-.085,.04,.06],null,{color:e,roughness:.9}),ne("Foot R","box",{w:.09,h:.07,d:.24},[.085,.04,.06],null,{color:e,roughness:.9}),ne("Tail","sphere",{r:.065,wseg:16,hseg:12},[0,.34,-.24],null,{color:"#ffffff",roughness:.95})],A:{}}},anim:()=>{let e=r=>r/1.2,t=r=>Math.max(0,Math.sin(Math.PI*e(r)))*.34,n=r=>1-.18*Math.max(0,Math.cos(Wn*e(r)))*(t(r)<.02?1:0),s={};for(let r of["Body","Head","Ear L","Ear R","Eye L","Eye R","Nose","Tail"])s[r]=(o,a)=>({pos:[a.pos[0],a.pos[1]+t(o),a.pos[2]],rot:a.rot});return s.Body=(r,o)=>({pos:[o.pos[0],o.pos[1]+t(r),o.pos[2]],scale:[1+(1-n(r))*.6,n(r),1+(1-n(r))*.6]}),s["Foot L"]=(r,o)=>({pos:[o.pos[0],o.pos[1]+t(r)*.85,o.pos[2]+t(r)*.3],rot:[t(r)*60,0,0]}),s["Foot R"]=(r,o)=>({pos:[o.pos[0],o.pos[1]+t(r)*.85,o.pos[2]+t(r)*.3],rot:[t(r)*60,0,0]}),s}},{id:"tree",name:"Tree",cat:"thing",emoji:"\u{1F333}",clip:"Sway",duration:4,samples:12,make:()=>({parts:[ne("Trunk","cylinder",{rt:.11,rb:.22,h:1.25,seg:18,taper:0},[0,.62,0],null,{color:"#8a6242",roughness:.92,metalness:.02}),ne("Foliage low","icosa",{r:.58,detail:1},[0,1.35,0],null,{color:"#3f9b5c",roughness:.85,metalness:.02,flatShading:!0}),ne("Foliage mid","icosa",{r:.44,detail:1},[.16,1.78,-.08],null,{color:"#4fb26a",roughness:.85,flatShading:!0}),ne("Foliage top","icosa",{r:.32,detail:1},[-.1,2.06,.06],null,{color:"#63c47c",roughness:.85,flatShading:!0})],A:{}}),anim:()=>{let i=Wn/4,e=t=>Math.sin(i*t);return{Trunk:(t,n)=>({pos:[n.pos[0],n.pos[1],n.pos[2]],rot:[0,0,1.6*e(t)]}),"Foliage low":(t,n)=>({pos:[n.pos[0]+.05*e(t),n.pos[1],n.pos[2]],rot:[0,0,2.2*e(t)]}),"Foliage mid":(t,n)=>({pos:[n.pos[0]+.08*e(t+.4),n.pos[1],n.pos[2]],rot:[0,0,3*e(t+.4)]}),"Foliage top":(t,n)=>({pos:[n.pos[0]+.11*e(t+.8),n.pos[1],n.pos[2]],rot:[0,0,3.6*e(t+.8)]})}}},{id:"rocket",name:"Rocket",cat:"thing",emoji:"\u{1F680}",clip:"Hover",duration:2.4,samples:16,make:()=>({parts:[ne("Hull","cylinder",{rt:.19,rb:.24,h:.9,seg:28},[0,.85,0],null,{color:"#e8eef7",roughness:.34,metalness:.55}),ne("Nose","cone",{r:.19,h:.36,seg:28},[0,1.48,0],null,{color:"#ff5d73",roughness:.4,metalness:.3}),ne("Window","sphere",{r:.11,wseg:20,hseg:14},[0,1,.19],null,{color:"#0a1a26",roughness:.15,metalness:.2,emissive:"#2ec5ff",emissiveIntensity:.9}),ne("Fin L","box",{w:.05,h:.36,d:.28,taper:.7},[-.22,.5,-.02],[0,0,-14],{color:"#ff5d73",roughness:.45,metalness:.35}),ne("Fin R","box",{w:.05,h:.36,d:.28,taper:.7},[.22,.5,-.02],[0,0,14],{color:"#ff5d73",roughness:.45,metalness:.35}),ne("Fin B","box",{w:.05,h:.34,d:.26,taper:.7},[0,.5,-.2],[-14,0,0],{color:"#ff5d73",roughness:.45,metalness:.35}),ne("Thruster glow","torus",{r:.2,tube:.035,rseg:10,tseg:40},[0,.38,0],[90,0,0],{color:"#1a0d10",roughness:.4,emissive:"#ff8a3d",emissiveIntensity:2.2})],A:{}}),anim:()=>{let i=Wn/2.4,e=n=>.05*Math.sin(i*n),t={};for(let n of["Hull","Nose","Window","Fin L","Fin R","Fin B","Thruster glow"])t[n]=(s,r)=>({pos:[r.pos[0],r.pos[1]+e(s),r.pos[2]],rot:r.rot});return t.Hull=(n,s)=>({pos:[s.pos[0],s.pos[1]+e(n),s.pos[2]],rot:[0,0,2.2*Math.sin(i*n)]}),t["Thruster glow"]=(n,s)=>{let r=1+.12*Math.sin(4*i*n);return{pos:[s.pos[0],s.pos[1]+e(n),s.pos[2]],rot:[90,0,0],scale:[r,r,r]}},t},float:1},{id:"car",name:"Car",cat:"thing",emoji:"\u{1F697}",clip:"Drive",duration:2,samples:16,make:()=>({parts:[ne("Body","box",{w:1.5,h:.3,d:.74,taper:.06},[0,.52,0],null,{color:"#e0453f",roughness:.34,metalness:.55}),ne("Cabin","box",{w:.76,h:.3,d:.66,taper:.35},[0,.8,-.02],null,{color:"#22303f",roughness:.22,metalness:.5}),ne("Light L","sphere",{r:.06,wseg:14,hseg:10},[-.52,.52,.37],null,{color:"#fff3c4",roughness:.2,emissive:"#ffd166",emissiveIntensity:1.6}),ne("Light R","sphere",{r:.06,wseg:14,hseg:10},[.52,.52,.37],null,{color:"#fff3c4",roughness:.2,emissive:"#ffd166",emissiveIntensity:1.6}),ne("Wheel FL","cylinder",{rt:.18,rb:.18,h:.13,seg:24},[-.62,.18,.26],[0,0,90],{color:"#181c22",roughness:.85}),ne("Wheel FR","cylinder",{rt:.18,rb:.18,h:.13,seg:24},[.62,.18,.26],[0,0,90],{color:"#181c22",roughness:.85}),ne("Wheel BL","cylinder",{rt:.18,rb:.18,h:.13,seg:24},[-.62,.18,-.26],[0,0,90],{color:"#181c22",roughness:.85}),ne("Wheel BR","cylinder",{rt:.18,rb:.18,h:.13,seg:24},[.62,.18,-.26],[0,0,90],{color:"#181c22",roughness:.85})],A:{}}),anim:()=>{let i=Wn/2,e=n=>.012*Math.sin(4*i*n),t={};for(let n of["Body","Cabin","Light L","Light R"])t[n]=(s,r)=>({pos:[r.pos[0],r.pos[1]+e(s),r.pos[2]],rot:[0,0,.9*Math.sin(2*i*s)]});for(let n of["Wheel FL","Wheel FR","Wheel BL","Wheel BR"])t[n]=(s,r)=>({pos:[r.pos[0],r.pos[1]+e(s)*.4,r.pos[2]],rot:r.rot});return t}},{id:"drone",name:"Drone",cat:"thing",emoji:"\u{1F6F8}",clip:"Fly",duration:1.6,samples:16,make:()=>{let i="#7789a4";return{parts:[ne("Body","box",{w:.4,h:.14,d:.4,taper:.16},[0,1,0],null,{color:"#8fa4c2",roughness:.42,metalness:.35}),ne("Top plate","box",{w:.26,h:.05,d:.26,taper:.4},[0,1.1,0],null,{color:"#5b6c86",roughness:.5,metalness:.3}),ne("Camera","sphere",{r:.07,wseg:16,hseg:12},[0,.93,.08],null,{color:"#0d141c",roughness:.2,metalness:.3,emissive:"#35e0ff",emissiveIntensity:.7}),ne("Arm X1","cylinder",{rt:.028,rb:.028,h:.36,seg:10},[.17,1.02,.17],[0,90,-45],{color:i,roughness:.55,metalness:.25}),ne("Arm X2","cylinder",{rt:.028,rb:.028,h:.36,seg:10},[-.17,1.02,.17],[0,90,45],{color:i,roughness:.55,metalness:.25}),ne("Arm X3","cylinder",{rt:.028,rb:.028,h:.36,seg:10},[.17,1.02,-.17],[0,90,45],{color:i,roughness:.55,metalness:.25}),ne("Arm X4","cylinder",{rt:.028,rb:.028,h:.36,seg:10},[-.17,1.02,-.17],[0,90,-45],{color:i,roughness:.55,metalness:.25}),ne("Rotor 1","torus",{r:.17,tube:.016,rseg:4,tseg:6},[.29,1.05,.3],[90,0,0],{color:"#6ee7ff",roughness:.3,metalness:.4,emissive:"#2ec5ff",emissiveIntensity:.5}),ne("Rotor 2","torus",{r:.17,tube:.016,rseg:4,tseg:6},[-.29,1.05,.3],[90,0,0],{color:"#6ee7ff",roughness:.3,metalness:.4,emissive:"#2ec5ff",emissiveIntensity:.5}),ne("Rotor 3","torus",{r:.17,tube:.016,rseg:4,tseg:6},[.29,1.05,-.3],[90,0,0],{color:"#6ee7ff",roughness:.3,metalness:.4,emissive:"#2ec5ff",emissiveIntensity:.5}),ne("Rotor 4","torus",{r:.17,tube:.016,rseg:4,tseg:6},[-.29,1.05,-.3],[90,0,0],{color:"#6ee7ff",roughness:.3,metalness:.4,emissive:"#2ec5ff",emissiveIntensity:.5})],A:{}}},anim:()=>{let i=Wn/1.6,e=n=>.05*Math.sin(i*n),t={};for(let n of["Body","Top plate","Camera","Arm X1","Arm X2","Arm X3","Arm X4"])t[n]=(s,r)=>({pos:[r.pos[0],r.pos[1]+e(s),r.pos[2]],rot:r.rot});return["Rotor 1","Rotor 2","Rotor 3","Rotor 4"].forEach((n,s)=>{t[n]=(r,o)=>({pos:[o.pos[0],o.pos[1]+e(r)*1.2,o.pos[2]],rot:[90,(s%2?-1:1)*900*r,0],ease:"linear"})}),t},float:1},{id:"planet",name:"Planet",cat:"thing",emoji:"\u{1FA90}",clip:"Orbit",duration:6,samples:24,make:()=>({parts:[ne("Planet","icosa",{r:.6,detail:1},[0,1.1,0],null,{color:"#4f7fd6",roughness:.62,metalness:.12,flatShading:!0}),ne("Ring","torus",{r:.95,tube:.05,rseg:6,tseg:80},[0,1.1,0],[12,0,0],{color:"#c9b48a",roughness:.7,metalness:.25,flatShading:!0}),ne("Continent A","icosa",{r:.2,detail:0},[.42,1.28,.34],null,{color:"#59c07d",roughness:.75,flatShading:!0}),ne("Continent B","icosa",{r:.15,detail:0},[-.38,.9,.36],null,{color:"#59c07d",roughness:.75,flatShading:!0}),ne("Moon","icosa",{r:.14,detail:0},[1.35,1.35,0],null,{color:"#dfe3ea",roughness:.8,metalness:.05,flatShading:!0})],A:{}}),anim:()=>{let e=s=>360*s/6,t={Planet:(s,r)=>({pos:r.pos,rot:[0,e(s),0],ease:"linear"}),Ring:(s,r)=>({pos:r.pos,rot:[12,e(s)*.25,0],ease:"linear"})},n=(s,r)=>{let o=ia(e(r));return[s[0]*Math.cos(o)+s[2]*Math.sin(o),s[1],-s[0]*Math.sin(o)+s[2]*Math.cos(o)]};return t["Continent A"]=s=>({pos:n([.42,1.28,.34],s),rot:[0,e(s),0],ease:"linear"}),t["Continent B"]=s=>({pos:n([-.38,.9,.36],s),rot:[0,e(s),0],ease:"linear"}),t.Moon=s=>{let r=ia(360*s/6)*2;return{pos:[1.35*Math.cos(r),1.1+.35*Math.sin(r*.5)+.25,1.35*Math.sin(r)],rot:[0,e(s),0],ease:"linear"}},t},float:1}],Ju=[{id:"all",label:"All"},{id:"human",label:"Humans"},{id:"animal",label:"Animals"},{id:"thing",label:"Props"}],Tc=Sm,fM=i=>i.samples||12;function pM(i,e,t,n){if(!e)return null;let s={pos:i.pos,rot:i.rot,scale:i.scale},r=[];for(let o=0;o<=n;o++){let a=+(o*t/n).toFixed(3),c;try{c=e(a,s)||{}}catch{c={}}r.push({t:a,ease:c.ease||"smooth",pos:[...c.pos||s.pos],rot:[...c.rot||s.rot],scale:[...c.scale||s.scale]})}return r}function mM(i,e){let t=e[0]||0,n=e[1]||0;if(!t&&!n)return;let s=r=>Array.isArray(r)&&r.length===3&&typeof r[0]=="number"?[r[0]+t,r[1],r[2]+n]:r;for(let r of Object.keys(i)){let o=i[r];if(Array.isArray(o))i[r]=s(o);else if(o&&typeof o=="object")for(let a of Object.keys(o))o[a]=s(o[a])}}function Ac(i,e=[0,0],t={}){let n=k.project;if(!n||!i)return null;let s=i.make(),r=s.parts,o=s.A||{};mM(o,e),gt();let a=Mn("g"),c=[];for(let x of r){let p=uu({name:x.name,type:x.type,params:x.params,pos:[x.pos[0]+e[0],x.pos[1],x.pos[2]+e[1]],rot:x.rot,scale:x.scale,material:{...x.material},group:a,preset:i.id});n.objects.push(p),c.push(p)}let l=tt()||null,h=!!t.intoCurrentClip&&!!l,u=new Set(n.clips.map(x=>x.name)),d=i.clip;for(let x=2;u.has(d);x++)d=`${i.clip} ${x}`;let f=h?l:{id:Mn("c"),name:d,duration:i.duration,tracks:{}};h&&(f.duration=Math.max(f.duration,i.duration));let g=i.anim?i.anim(o):{};return r.forEach((x,p)=>{let m=g[x.name]||g["*"],v=pM(c[p],m,i.duration,fM(i));v&&(f.tracks[c[p].id]=v)}),h||n.clips.push(f),n.activeClipId=f.id,k.selectedIds=[c[0].id],k.time=0,Qe("objects"),Ne("selection"),Ne("clip"),Ne("toast",{msg:h?`${i.name} added to \u201C${f.name}\u201D \xB7 ${c.length} parts`:`${i.name} added \xB7 ${c.length} parts \xB7 clip \u201C${f.name}\u201D`,kind:"ok"}),{objects:c,clip:f,primary:c[0],group:a}}var sa=i=>Sm.find(e=>e.id===i)||null;Is();Md();var ve=i=>document.getElementById(i),Ed=i=>String(Math.round((Number(i)||0)*1e3)/1e3),wn=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Pc=null,aa=new Set;function It(i,e=""){let t=ve("toasts");if(!t)return;let n=document.createElement("div");for(n.className=`toast ${e}`,n.innerHTML=`<span class="tdot"></span><span>${wn(i)}</span>`,t.appendChild(n),setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),260)},2400);t.children.length>4;)t.firstChild.remove()}function Td(){EM(),TM(),AM(),DM(),UM(),FM(),LM(),zM(),kM(),Rt("change",i=>{Hr(i),zr(),oa(i),Ic()}),Rt("selection",()=>{Hr("selection"),oa("selection"),zr()}),Rt("time",()=>{bd(),Dm()}),Rt("playback",OM),Rt("history",Sd),Rt("clip",()=>{zr(),oa("clip"),Ic()}),Rt("project:reload",()=>{Pc=null,Ic(),Hr("objects"),zr(),oa("reload"),Sd(),bd()}),Ic(),Hr("objects"),zr(),oa("reload"),Sd(),bd()}function Ic(){let i=k.project;if(!i)return;document.activeElement!==ve("project-name")&&(ve("project-name").value=i.name),ve("obj-count").textContent=String(i.objects.length),ve("clip-count").textContent=String(i.clips.length);let e=tt();ve("tp-duration").textContent=(e?.duration||4).toFixed(2),document.activeElement!==ve("tl-duration")&&(ve("tl-duration").value=String(e?.duration??4)),document.activeElement!==ve("tl-fps")&&(ve("tl-fps").value=String(i.fps))}function EM(){let i=ve("prim-grid");i.innerHTML=su.map(e=>{let t=an[e];return`<button class="prim" data-type="${e}" title="Add ${t.label}">
      <svg viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round">${t.icon}</svg>
      <span>${t.label}</span>
    </button>`}).join(""),i.addEventListener("click",e=>{let t=e.target.closest(".prim");if(!t)return;let n=ic(t.dataset.type,{xz:Ad()});n&&(It(`Added ${n.name}`,"ok"),requestAnimationFrame(()=>Vu(n.id)))})}function Ad(){let{point:i,right:e}=ju(),t=[-e[1],e[0]],n=k.project?.objects||[],s=[[0,0],[1.15,0],[-1.15,0],[0,1.15],[0,-1.15],[1.15,1.15],[-1.15,1.15],[1.15,-1.15],[-1.15,-1.15],[2.3,0],[-2.3,0]];for(let[r,o]of s){let a=[i[0]+e[0]*r+t[0]*o,i[1]+e[1]*r+t[1]*o];if(!n.some(l=>Math.hypot(l.pos[0]-a[0],l.pos[2]-a[1])<1.1))return a}return i}function Hr(i="objects"){let e=ve("outliner"),t=k.project;if(!t)return;if(i==="values"&&e.querySelectorAll(".ol-item").length===t.objects.length){for(let r of e.querySelectorAll(".ol-item")){let o=zt(r.dataset.id);if(!o)continue;r.classList.toggle("is-hidden",!o.visible);let a=r.querySelector(".ol-swatch");a&&(a.style.background=o.material.color),r.classList.toggle("sel",Ls(o.id))}return}if(!t.objects.length){e.innerHTML='<li class="ol-empty">No objects yet \u2014 add a primitive above.</li>';return}let n="",s=null;for(let r of t.objects){if(r.group&&r.group!==s){let o=t.objects.filter(h=>h.group===r.group),a=sa(r.preset)?.name||"Model",c=aa.has(r.group),l=o.every(h=>Ls(h.id));n+=`
    <li class="ol-group${l?" sel":""}" data-group="${r.group}">
      <button class="ol-caret" data-collapse="${r.group}" title="Collapse / expand">${c?"\u25B8":"\u25BE"}</button>
      <span class="ol-swatch" style="background:${wn(o[0]?.material?.color||"#7cc7ff")}"></span>
      <span class="ol-name" data-selectgroup="${r.group}" title="Select the whole model">${wn(a)}</span>
      <span class="ol-type">${o.length} parts</span>
    </li>`}s=r.group||null,!(r.group&&aa.has(r.group))&&(n+=`
    <li class="ol-item${r.group?" in-group":""}${Ls(r.id)?" sel":""}${r.visible?"":" is-hidden"}" data-id="${r.id}">
      <span class="ol-swatch" style="background:${wn(r.material.color)}"></span>
      <span class="ol-name" data-name="${r.id}">${wn(r.name)}</span>
      <span class="ol-type">${wn(an[r.type]?.label||r.type)}</span>
      <span class="ol-actions">
        <button class="ol-act${r.visible?"":" hidden-eye"}" data-act="visible" data-id="${r.id}" title="Show / hide">
          <svg viewBox="0 0 24 24">${r.visible?'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/>':'<path d="M4 4l16 16M9.9 5.9A9.6 9.6 0 0112 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 01-2.6 3.4M6.4 7.8A16.7 16.7 0 002.5 12S6 18.5 12 18.5c1 0 1.9-.2 2.7-.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}
          </svg>
        </button>
        <button class="ol-act" data-act="dup" data-id="${r.id}" title="Duplicate">
          <svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15 6.5V5a1.5 1.5 0 00-1.5-1.5H5A1.5 1.5 0 003.5 5v8.5A1.5 1.5 0 005 15h1.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
        </button>
        <button class="ol-act" data-act="del" data-id="${r.id}" title="Delete">
          <svg viewBox="0 0 24 24"><path d="M5 7h14M9 7V4.8h6V7M7 7l1 13h8l1-13M10.5 11v5M13.5 11v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </span>
    </li>`)}e.innerHTML=n}function TM(){let i=ve("outliner");i.addEventListener("click",e=>{let t=e.target.closest("[data-act]");if(t){let o=t.dataset.id;t.dataset.act==="del"&&Ns([o]),t.dataset.act==="dup"&&Ds(o),t.dataset.act==="visible"&&gu(o);return}let n=e.target.closest("[data-collapse]");if(n){let o=n.dataset.collapse;aa.has(o)?aa.delete(o):aa.add(o),Hr("objects");return}let s=e.target.closest("[data-selectgroup]");if(s){sc(s.dataset.selectgroup);return}let r=e.target.closest(".ol-item");!r||e.target.isContentEditable||Di([r.dataset.id],e.shiftKey||e.metaKey||e.ctrlKey)}),i.addEventListener("dblclick",e=>{let t=e.target.closest(".ol-name");if(!t)return;t.contentEditable="true",t.focus();let n=window.getSelection(),s=document.createRange();s.selectNodeContents(t),n.removeAllRanges(),n.addRange(s)}),i.addEventListener("blur",e=>{let t=e.target.closest?.(".ol-name");t&&(t.contentEditable="false",mu(t.dataset.name,t.textContent),Hr("objects"))},!0),i.addEventListener("keydown",e=>{let t=e.target.closest?.(".ol-name");t&&(e.key==="Enter"&&(e.preventDefault(),t.blur()),e.key==="Escape"&&(t.textContent=zt(t.dataset.name)?.name||"",t.blur()),e.stopPropagation())})}function zr(){let i=ve("clip-list"),e=k.project;!e||!i||(i.innerHTML=e.clips.map(t=>{let n=Object.values(t.tracks||{}).reduce((s,r)=>s+r.length,0);return`<li class="clip-item${t.id===e.activeClipId?" active":""}" data-id="${t.id}">
      <span class="clip-name" data-name="${t.id}">${wn(t.name)}</span>
      <span class="clip-meta">${t.duration.toFixed(1)}s \xB7 ${n}\u25C6</span>
      <button class="ol-act" data-clipdel="${t.id}" title="Delete clip">
        <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </li>`}).join(""))}function AM(){ve("clip-list").addEventListener("click",i=>{let e=i.target.closest("[data-clipdel]");if(e){if(k.project.clips.length<=1){It("A project needs at least one clip","err");return}yu(e.dataset.clipdel);return}if(i.target.isContentEditable)return;let t=i.target.closest(".clip-item");t&&_u(t.dataset.id)}),ve("clip-list").addEventListener("dblclick",i=>{let e=i.target.closest(".clip-name");if(!e)return;e.contentEditable="true",e.focus();let t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}),ve("clip-list").addEventListener("blur",i=>{let e=i.target.closest?.(".clip-name");e&&(e.contentEditable="false",vu(e.dataset.name,e.textContent),zr())},!0),ve("clip-list").addEventListener("keydown",i=>{let e=i.target.closest?.(".clip-name");e&&(i.key==="Enter"&&(i.preventDefault(),e.blur()),i.stopPropagation())}),ve("btn-add-clip").addEventListener("click",()=>{let i=xu();It(`Created ${i.name} \u2014 key your objects to build it`,"ok")})}function RM(){let i=!k.project?.objects.length;return`<div class="insp-empty">
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.4">
      <path d="M32 6l22 12.7v26.6L32 58 10 45.3V18.7z"/><path d="M32 32v26M32 32l22-13.3M32 32L10 18.7" opacity=".6"/>
    </svg>
    <b>${i?"Empty scene":"Nothing selected"}</b>
    <p>${i?"Add a primitive to start modelling, or load the demo scene to see how a rigged animation is put together.":"Pick an object in the viewport or the outliner to edit its shape, finish and keyframes."}</p>
    ${i?`<div class="insp-empty-actions">
        <button class="ghost-btn small" id="insp-empty-box">+ Add a box</button>
        <button class="ghost-btn small" id="insp-empty-demo">Load demo scene</button>
      </div>`:""}
  </div>`}function CM(i){let e=an[i.type]||an.box,t=oc(i),n=Pn(i.id),s=i.material,r=k.selectedIds.length,o=(f,g,x,p=.05)=>`
    <div class="vec-row">
      <label>${f}</label>
      ${["X","Y","Z"].map((m,v)=>`
        <div class="axis-field ${m.toLowerCase()}">
          <span class="axis">${m}</span>
          <input type="number" step="${p}" data-ch="${g}" data-axis="${v}" value="${Ed(x[v])}">
        </div>`).join("")}
    </div>`,a=(f,g,x,p,m,v)=>`
    <div class="slider-row">
      <label>${f}</label>
      <input type="range" data-mat="${g}" min="${p}" max="${m}" step="${v}" value="${x}">
      <output data-out="${g}">${Number(x).toFixed(2)}</output>
    </div>`,c=(f,g,x)=>`
    <div class="color-row">
      <label>${f}</label>
      <div class="color-input"><input type="color" data-mat="${g}" value="${x}"><span data-out="${g}">${wn(x)}</span></div>
    </div>`,l=(f,g,x)=>`
    <label class="check-row"><input type="checkbox" data-mat="${g}" ${x?"checked":""}><span>${f}</span></label>`,h=su.map(f=>`
      <button class="swap-chip${f===i.type?" active":""}" data-swap="${f}" title="Turn into ${an[f].label}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${an[f].icon}</svg>
      </button>`).join(""),u=Object.entries(Jl(i.type)).map(([f,g])=>`
    <div class="field-row">
      <label>${g.label}</label>
      <input type="number" data-param="${f}" min="${g.min}" max="${g.max}" step="${g.step}" value="${Ed(i.params[f])}">
    </div>`).join(""),d=i.group?{name:sa(i.preset)?.name||"Model",parts:is(i.id).length}:null;return`
    <div class="insp-head">
      <span class="tag">${wn(e.label)}</span>
      <h2>${wn(i.name)}</h2>
    </div>

    ${d?`<div class="model-bar">
      <span class="model-name"><svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4-8 4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity=".65"/></svg>${wn(d.name)}</span>
      <span class="model-count">${d.parts} parts</span>
      <div class="model-actions">
        <button class="ghost-btn small" id="insp-selmodel" title="Select every part, then drag the gizmo to move / rotate / scale the model">Select whole model</button>
        <button class="ghost-btn small" id="insp-splitmodel" title="Break the model into independent objects">Split</button>
        <button class="ghost-btn small danger" id="insp-delmodel" title="Delete every part of this model">Delete model</button>
      </div>
    </div>`:""}

    <div class="sect">
      <h4>Transform
        <span class="badge" id="insp-anim">${n.length?`${n.length} keys`:"static"}</span>
      </h4>
      ${o("Position","pos",t.pos)}
      ${o("Rotation","rot",t.rot,1)}
      ${o("Scale","scale",t.scale,.05)}
      <button class="key-btn" id="insp-key">
        <svg viewBox="0 0 24 24"><path d="M12 4l7 8-7 8-7-8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        <span id="insp-key-label">Insert key at ${k.time.toFixed(2)}s</span>
      </button>
    </div>

    <div class="sect">
      <h4>Shape</h4>
      <div class="swap-block">
        <label>Convert to</label>
        <div class="swap-grid">${h}</div>
      </div>
      ${u}
    </div>

    <div class="sect">
      <h4>Material</h4>
      ${c("Base colour","color",s.color)}
      ${a("Metalness","metalness",s.metalness,0,1,.01)}
      ${a("Roughness","roughness",s.roughness,0,1,.01)}
      ${a("Opacity","opacity",s.opacity,.05,1,.01)}
      ${c("Glow","emissive",s.emissive||"#000000")}
      ${a("Glow power","emissiveIntensity",s.emissiveIntensity??1,0,6,.05)}
      ${l("Wireframe","wireframe",!!s.wireframe)}
      ${l("Flat shading","flatShading",!!s.flatShading)}
    </div>

    <div class="sect">
      <h4>Actions</h4>
      <div style="display:flex;gap:6px">
        <button class="ghost-btn small" id="insp-dup" style="flex:1">Duplicate</button>
        <button class="ghost-btn small" id="insp-del" style="flex:1;color:#ff8fa0">Delete${r>1?` (${r})`:""}</button>
      </div>
      ${n.length?`<button class="ghost-btn small" id="insp-clearkeys" style="width:100%;margin-top:6px">Clear keys in \u201C${wn(tt()?.name||"")}\u201D</button>`:""}
    </div>`}function oa(i="values"){let e=ve("inspector"),t=Cr(),n=t?`${t.id}|${t.type}|${k.selectedIds.length}|${t.group||""}`:"none";if(n!==Pc||i!=="values"){Pc=n,e.innerHTML=t?CM(t):RM(),t?PM(e,t):(ve("insp-empty-box")?.addEventListener("click",()=>ic("box",{xz:Ad()})),ve("insp-empty-demo")?.addEventListener("click",()=>{ns(Ur()),kr(),It("Demo scene loaded","ok")}));return}t&&Dm()}function Dm(){let i=Cr();if(!i||Pc==="none")return;let e=ve("inspector");if(!e.querySelector("[data-ch]"))return;let t=oc(i);for(let r of e.querySelectorAll("[data-ch]")){if(document.activeElement===r)continue;let o=r.dataset.ch,a=Number(r.dataset.axis);r.value=Ed(t[o][a])}let n=ve("insp-anim");if(n){let r=Pn(i.id).length;n.textContent=r?`${r} keys`:"static"}let s=ve("insp-key-label");s&&(s.textContent=`Insert key at ${k.time.toFixed(2)}s`)}function IM(i,e){let t=[];for(let n of i.querySelectorAll(`[data-ch="${e}"]`))t[Number(n.dataset.axis)]=Number(n.value)||0;return t}function PM(i,e){i.querySelectorAll("[data-ch]").forEach(t=>{t.addEventListener("input",()=>{let n=t.dataset.ch,s={[n]:IM(i,n)};n==="scale"&&(s.scale=s.scale.map(r=>Math.abs(r)<.001?.001:r)),Ir(e.id,s)})}),i.querySelectorAll("[data-param]").forEach(t=>{t.addEventListener("input",()=>{let n=t.dataset.param,s=Jl(e.type)[n],r=Number(t.value);Number.isFinite(r)&&(r=Math.min(s.max,Math.max(s.min,r)),e.params[n]=r,Qe("values"))})}),i.querySelectorAll("[data-mat]").forEach(t=>{let n=t.type==="range"||t.type==="color"?"input":"change";t.addEventListener(n,()=>{let s=t.dataset.mat,r;t.type==="checkbox"?r=t.checked:t.type==="color"?r=t.value:r=Number(t.value),e.material[s]=r;let o=i.querySelector(`[data-out="${s}"]`);o&&(o.textContent=t.type==="color"?r:Number(r).toFixed(2)),Qe("values")})}),ve("insp-selmodel")?.addEventListener("click",()=>sc(e.id)),ve("insp-splitmodel")?.addEventListener("click",()=>du(e.id)),ve("insp-delmodel")?.addEventListener("click",()=>{let t=is(e.id).length;fu(e.id),It(`Deleted model \xB7 ${t} parts`)}),i.querySelectorAll("[data-swap]").forEach(t=>{t.addEventListener("click",()=>pu(e.id,t.dataset.swap))}),ve("insp-key")?.addEventListener("click",()=>Fs(e.id,k.time)),ve("insp-dup")?.addEventListener("click",()=>{Ds(e.id),It("Duplicated","ok")}),ve("insp-del")?.addEventListener("click",()=>{let t=k.selectedIds.slice();Ns(t),It(t.length>1?`Deleted ${t.length} objects`:"Object deleted")}),ve("insp-clearkeys")?.addEventListener("click",()=>{Eu(e.id),It("Track cleared")})}var Pm=!1;function LM(){Pm||(Pm=!0,ve("inspector").addEventListener("focusin",()=>gt()))}function DM(){ve("btn-undo").addEventListener("click",Xo),ve("btn-redo").addEventListener("click",Dr),ve("btn-save").addEventListener("click",()=>{let i=Cc();It(`Saved ${i}`,"ok")}),ve("btn-new").addEventListener("click",()=>{confirm("Start a new scene? Unsaved changes will be lost.")&&(cu("Untitled scene"),It("New scene","ok"))}),ve("btn-open").addEventListener("click",()=>ve("file-input").click()),ve("file-input").addEventListener("change",async i=>{let e=i.target.files?.[0];if(i.target.value="",!!e)try{let t=await e.text();ns(JSON.parse(t)),It(`Opened ${e.name}`,"ok"),Br("persp")}catch(t){It("Could not open that project file","err"),console.error(t)}}),ve("btn-export").addEventListener("click",i=>NM(i.currentTarget)),ve("project-name").addEventListener("change",i=>{let e=i.target.value.trim()||"Untitled scene";gt(),k.project.name=e,Qe("values"),i.target.value=e})}function NM(i){document.querySelector(".export-menu")?.remove();let e=document.createElement("div");e.className="export-menu",e.innerHTML=`
    <button data-x="glb"><b>GLB model</b><small>Animated binary glTF \xB7 Blender, Unity, three.js</small></button>
    <button data-x="png"><b>PNG snapshot</b><small>Current viewport render</small></button>
    <button data-x="json"><b>Project file</b><small>Editable .json you can reopen</small></button>`,document.body.appendChild(e);let t=i.getBoundingClientRect();e.style.top=`${t.bottom+8}px`,e.style.left=`${Math.max(12,t.right-e.offsetWidth)}px`;let n=s=>{s&&e.contains(s.target)||(e.remove(),document.removeEventListener("pointerdown",n,!0))};setTimeout(()=>document.addEventListener("pointerdown",n,!0),0),e.addEventListener("click",async s=>{let r=s.target.closest("[data-x]");if(!r)return;e.remove();let o=r.dataset.x;try{if(o==="glb"){It("Exporting GLB\u2026");let a=await xd();It(`${a.filename} \xB7 ${a.objects} objects \xB7 ${a.clips} clip${a.clips===1?"":"s"}`,"ok")}else if(o==="png"){let a=yd();It(`Saved ${a}`,"ok")}else{let a=Cc();It(`Saved ${a}`,"ok")}}catch(a){console.error(a),It(a?.message||"Export failed","err")}})}function Sd(){ve("btn-undo").disabled=!Au(),ve("btn-redo").disabled=!Ru()}function UM(){document.querySelectorAll("[data-tool]").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll("[data-tool]").forEach(e=>e.classList.toggle("active",e===i)),_c(i.dataset.tool)})}),ve("btn-snap").addEventListener("click",i=>{let e=!i.currentTarget.classList.contains("active");i.currentTarget.classList.toggle("active",e),Jo(e)}),ve("btn-grid").addEventListener("click",i=>{let e=!i.currentTarget.classList.contains("active");i.currentTarget.classList.toggle("active",e),Gu(e)}),ve("btn-focus").addEventListener("click",()=>Qo()),document.querySelectorAll("[data-view]").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===i)),i.dataset.view==="persp"?Br("persp"):Br(i.dataset.view)})})}function la(i){document.querySelectorAll("[data-tool]").forEach(e=>e.classList.toggle("active",e.dataset.tool===i)),_c(i)}function FM(){ve("tp-play").addEventListener("click",()=>Lr()),ve("tp-start").addEventListener("click",()=>ii(0)),ve("tp-prev").addEventListener("click",()=>Os(-1)),ve("tp-next").addEventListener("click",()=>Os(1)),ve("tp-prevkey").addEventListener("click",()=>Tu(-1)),ve("tp-loop").addEventListener("click",i=>{k.loop=!k.loop,i.currentTarget.classList.toggle("toggled",k.loop)}),ve("tp-autokey").addEventListener("click",i=>{k.autoKey=!k.autoKey,i.currentTarget.classList.toggle("toggled",k.autoKey),It(`Auto-key ${k.autoKey?"ON":"OFF"}`,k.autoKey?"ok":"")})}function OM(){let i=k.playing;ve("tp-play").querySelector(".i-play").style.display=i?"none":"block",ve("tp-play").querySelector(".i-pause").style.display=i?"block":"none"}function bd(){ve("tp-current").textContent=k.time.toFixed(2);let i=tt();ve("tp-duration").textContent=(i?.duration||4).toFixed(2)}var Lm={human:'<circle cx="12" cy="6.6" r="3"/><path d="M12 9.6v5.4M12 15l-3 5.4M12 15l3 5.4M7.2 12.6c2-1.3 7.6-1.3 9.6 0"/>',animal:'<circle cx="8.2" cy="8.6" r="1.9"/><circle cx="15.8" cy="8.6" r="1.9"/><circle cx="5.4" cy="13.4" r="1.7"/><circle cx="18.6" cy="13.4" r="1.7"/><path d="M12 11.8c2.9 0 4.8 2.3 4.8 4.4S14.7 20.6 12 20.6 7.2 18.3 7.2 16.2s1.9-4.4 4.8-4.4z"/>',thing:'<path d="M12 3.4l7.4 4.2v8.8L12 20.6 4.6 16.4V7.6z"/><path d="M12 12l7.4-4.4M12 12v8.6M12 12L4.6 7.6"/>'},wd=new Map;function BM(i){if(!wd.has(i.id)){let e=0;try{e=i.make().parts.length}catch{e=0}wd.set(i.id,e)}return wd.get(i.id)}function Rd(i,e){let t=Ac(i,e);return t&&requestAnimationFrame(()=>xc(t.objects.map(n=>n.id),1.65)),t}function kM(){let i=ve("lib-overlay");if(!i)return;let e=ve("lib-grid"),t=ve("lib-tabs"),n=ve("lib-search"),s="all",r=ve("lib-count");r&&(r.textContent=String(Tc.length)),t.innerHTML=Ju.map(l=>`<button class="lib-tab${l.id==="all"?" active":""}" data-cat="${l.id}">${l.label}</button>`).join("");let o=()=>{let l=(n.value||"").trim().toLowerCase(),h=Tc.filter(u=>(s==="all"||u.cat===s)&&(!l||u.name.toLowerCase().includes(l)));e.innerHTML=h.length?h.map(u=>`
        <button class="lib-card" data-preset="${u.id}">
          <span class="lib-emoji ${u.cat}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${Lm[u.cat]||Lm.thing}</svg>
          </span>
          <span class="lib-body">
            <b>${wn(u.name)}</b>
            <small>${BM(u)} parts \xB7 ${wn(u.clip)} ${u.duration.toFixed(1)}s</small>
          </span>
          <span class="lib-add">+</span>
        </button>`).join(""):'<p class="lib-empty">No models match that search.</p>'},a=()=>{i.hidden=!1,o(),setTimeout(()=>n.focus(),30)},c=()=>{i.hidden=!0};ve("btn-library").addEventListener("click",a),ve("lib-close").addEventListener("click",c),i.addEventListener("click",l=>{l.target===i&&c()}),window.addEventListener("keydown",l=>{l.key==="Escape"&&!i.hidden&&c(),(l.key==="l"||l.key==="L")&&!l.metaKey&&!l.ctrlKey&&!/input|textarea/i.test(document.activeElement?.tagName||"")&&(l.preventDefault(),i.hidden?a():c())}),t.addEventListener("click",l=>{let h=l.target.closest("[data-cat]");h&&(s=h.dataset.cat,t.querySelectorAll("[data-cat]").forEach(u=>u.classList.toggle("active",u===h)),o())}),n.addEventListener("input",o),e.addEventListener("click",l=>{let h=l.target.closest("[data-preset]");if(!h)return;let u=sa(h.dataset.preset);if(!u)return;let d=!!ve("lib-into-clip")?.checked,f=Ac(u,Ad(),{intoCurrentClip:d});c(),f&&requestAnimationFrame(()=>xc(f.objects.map(g=>g.id),1.65))}),o()}function zM(){let i=ve("help-overlay"),e=()=>{i.hidden=!1},t=()=>{i.hidden=!0};ve("btn-help").addEventListener("click",e),ve("help-close").addEventListener("click",t),i.addEventListener("click",n=>{n.target===i&&t()}),window.addEventListener("keydown",n=>{n.key==="Escape"&&!i.hidden&&t(),(n.key==="?"||n.key==="/"&&n.shiftKey)&&e()})}Is();ss();var Nm=performance.now();function Um(){let i=Cu();if(i)try{ns(i)}catch{ns(Ur())}else ns(Ur());zu(document.getElementById("viewport")),Jo(!1),Td(),$u(),Rt("change",()=>Hs()),Rt("selection",()=>Hs()),Rt("project:reload",()=>Hs()),Rt("gizmo:end",()=>Hs()),Rt("toast",({msg:e,kind:t})=>It(e,t)),Rt("library:insert",({preset:e,xz:t})=>Rd(e,t)),requestAnimationFrame(()=>{kr();let e=document.getElementById("vp-hint");e&&setTimeout(()=>{e.style.transition="opacity .8s",e.style.opacity="0"},9e3)}),window.__ANIMFORGE__={project:Bs,viewport:yc,ui:Cd,timeline:Ku,library:Rc,emit:Ne},requestAnimationFrame(Fm),window.addEventListener("keydown",GM),window.addEventListener("beforeunload",Nr)}function Fm(i){let e=Math.min(.1,(i-Nm)/1e3);if(Nm=i,k.playing){let t=tt()?.duration||4,n=k.time+e;n>=t&&(k.loop?n=n%t:(n=t,Lr(!1))),k.time=n,Ne("time")}Hu(e),requestAnimationFrame(Fm)}var HM=i=>{if(!i)return!1;let e=i.tagName;return i.isContentEditable||e==="INPUT"||e==="TEXTAREA"||e==="SELECT"};function GM(i){if(HM(i.target))return;let e=i.metaKey||i.ctrlKey;if(e&&i.key.toLowerCase()==="z"){i.preventDefault(),i.shiftKey?Dr():Xo();return}if(e&&i.key.toLowerCase()==="y"){i.preventDefault(),Dr();return}if(e&&i.key.toLowerCase()==="s"){i.preventDefault(),Promise.resolve().then(()=>(Md(),vd)).then(t=>{t.saveProjectJSON(),It("Project saved","ok")});return}if(e&&i.key.toLowerCase()==="d"){i.preventDefault(),k.selectedIds[0]&&Ds(k.selectedIds[0]);return}if(!e)switch(i.key){case" ":i.preventDefault(),Lr();break;case"k":case"K":{i.preventDefault();let t=k.selectedIds[0];t?Fs(t,k.time):Ne("toast",{msg:"Select an object first",kind:"err"});break}case"w":case"W":la("translate");break;case"e":case"E":la("rotate");break;case"r":case"R":la("scale");break;case"f":case"F":Qo();break;case"d":case"D":k.selectedIds[0]&&Ds(k.selectedIds[0]);break;case"ArrowLeft":i.preventDefault(),Os(-1);break;case"ArrowRight":i.preventDefault(),Os(1);break;case"Home":i.preventDefault(),ii(0);break;case"End":i.preventDefault(),ii(tt()?.duration||4);break;case"Delete":case"Backspace":{i.preventDefault();let t=k.selectedKey;t?Pr(t.objId,t.key.t)&&(k.selectedKey=null,Ne("toast",{msg:"Key deleted",kind:""})):k.selectedIds.length&&Ns(k.selectedIds.slice());break}case"Escape":Di([]);break;default:break}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Um):Um();})();
