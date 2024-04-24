let e,t,r,i,o,a,n,s,l,d;function h(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var u=globalThis,c={},m={},p=u.parcelRequire4485;null==p&&((p=function(e){if(e in c)return c[e].exports;if(e in m){var t=m[e];delete m[e];var r={id:e,exports:{}};return c[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){m[e]=t},u.parcelRequire4485=p);var f=p.register;f("RPVlj",function(e,t){h(e.exports,"FullScreenQuad",()=>a);var r=p("ilwiq");let i=new r.OrthographicCamera(-1,1,1,-1,0,1),o=new r.BufferGeometry;o.setAttribute("position",new r.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new r.Float32BufferAttribute([0,2,0,0,2,0],2));class a{constructor(e){this._mesh=new r.Mesh(o,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}}),f("4h5hN",function(e,t){h(e.exports,"acceleratedRaycast",()=>l),h(e.exports,"computeBoundsTree",()=>d),h(e.exports,"disposeBoundsTree",()=>u);var r=p("ilwiq"),i=p("b4YKL"),o=p("ff8ed");let a=new r.Ray,n=new r.Matrix4,s=r.Mesh.prototype.raycast;function l(e,t){if(this.geometry.boundsTree){if(void 0===this.material)return;n.copy(this.matrixWorld).invert(),a.copy(e.ray).applyMatrix4(n);let r=this.geometry.boundsTree;if(!0===e.firstHitOnly){let o=(0,i.convertRaycastIntersect)(r.raycastFirst(a,this.material),this,e);o&&t.push(o)}else{let o=r.raycast(a,this.material);for(let r=0,a=o.length;r<a;r++){let a=(0,i.convertRaycastIntersect)(o[r],this,e);a&&t.push(a)}}}else s.call(this,e,t)}function d(e){return this.boundsTree=new o.MeshBVH(this,e),this.boundsTree}function u(){this.boundsTree=null}}),f("b4YKL",function(e,t){h(e.exports,"convertRaycastIntersect",()=>r);function r(e,t,r){return null===e?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(r.ray.origin),e.object=t,e.distance<r.near||e.distance>r.far)?null:e}}),f("38WKP",function(e,t){h(e.exports,"getBVHExtremes",()=>a),h(e.exports,"estimateMemoryInBytes",()=>n),p("ilwiq");var r=p("Mleu6");p("aw71y");var i=p("2zRsl");function o(e){switch(typeof e){case"number":return 8;case"string":return 2*e.length;case"boolean":return 4;default:return 0}}function a(e){return e._roots.map((t,i)=>(function(e,t){let i={nodeCount:0,leafNodeCount:0,depth:{min:1/0,max:-1/0},tris:{min:1/0,max:-1/0},splits:[0,0,0],surfaceAreaScore:0};return e.traverse((e,t,o,a,n)=>{let s=o[3]-o[0],l=o[4]-o[1],d=o[5]-o[2],h=2*(s*l+l*d+d*s);i.nodeCount++,t?(i.leafNodeCount++,i.depth.min=Math.min(e,i.depth.min),i.depth.max=Math.max(e,i.depth.max),i.tris.min=Math.min(n,i.tris.min),i.tris.max=Math.max(n,i.tris.max),i.surfaceAreaScore+=h*r.TRIANGLE_INTERSECT_COST*n):(i.splits[a]++,i.surfaceAreaScore+=h*r.TRAVERSAL_COST)},t),i.tris.min===1/0&&(i.tris.min=0,i.tris.max=0),i.depth.min===1/0&&(i.depth.min=0,i.depth.max=0),i})(e,i))}function n(e){let t=new Set,r=[e],a=0;for(;r.length;){let e=r.pop();if(!t.has(e))for(let n in t.add(e),e){if(!e.hasOwnProperty(n))continue;a+=o(n);let t=e[n];t&&("object"==typeof t||"function"==typeof t)?/(Uint|Int|Float)(8|16|32)Array/.test(t.constructor.name)?a+=t.byteLength:(0,i.isSharedArrayBufferSupported)()&&t instanceof SharedArrayBuffer?a+=t.byteLength:t instanceof ArrayBuffer?a+=t.byteLength:r.push(t):a+=o(t)}}return a}}),f("5ca9G",function(e,t){h(e.exports,"MeshBVHHelper",()=>s);var r=p("ilwiq"),i=p("aw71y"),o=p("ff8ed");let a=new r.Box3;class n extends r.Object3D{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}constructor(e,t,i=10,o=0){super(),this.material=t,this.geometry=new r.BufferGeometry,this.name="MeshBVHRootHelper",this.depth=i,this.displayParents=!1,this.bvh=e,this.displayEdges=!0,this._group=o}raycast(){}update(){let e=this.geometry,t=this.bvh,o=this._group;if(e.dispose(),this.visible=!1,t){let n,s;let l=this.depth-1,d=this.displayParents,h=0;t.traverse((e,t)=>{if(e>=l||t)return h++,!0;d&&h++},o);let u=0,c=new Float32Array(24*h);t.traverse((e,t,r)=>{let o=e>=l||t;if(o||d){(0,i.arrayToBox)(0,r,a);let{min:e,max:t}=a;for(let r=-1;r<=1;r+=2){let i=r<0?e.x:t.x;for(let r=-1;r<=1;r+=2){let o=r<0?e.y:t.y;for(let r=-1;r<=1;r+=2){let a=r<0?e.z:t.z;c[u+0]=i,c[u+1]=o,c[u+2]=a,u+=3}}}return o}},o),s=new Uint8Array(this.displayEdges?[0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]:[0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),n=c.length>65535?new Uint32Array(s.length*h):new Uint16Array(s.length*h);let m=s.length;for(let e=0;e<h;e++){let t=8*e,r=e*m;for(let e=0;e<m;e++)n[r+e]=t+s[e]}e.setIndex(new r.BufferAttribute(n,1,!1)),e.setAttribute("position",new r.BufferAttribute(c,3,!1)),this.visible=!0}}}class s extends r.Group{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(e){this.edgeMaterial.opacity=e,this.meshMaterial.opacity=e}constructor(e=null,t=null,i=10){e instanceof o.MeshBVH&&(i=t||10,t=e,e=null),"number"==typeof t&&(i=t,t=null),super(),this.name="MeshBVHHelper",this.depth=i,this.mesh=e,this.bvh=t,this.displayParents=!1,this.displayEdges=!0,this._roots=[];let a=new r.LineBasicMaterial({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),n=new r.MeshBasicMaterial({color:65416,transparent:!0,opacity:.3,depthWrite:!1});n.color=a.color,this.edgeMaterial=a,this.meshMaterial=n,this.update()}update(){let e=this.bvh||this.mesh.geometry.boundsTree,t=e?e._roots.length:0;for(;this._roots.length>t;){let e=this._roots.pop();e.geometry.dispose(),this.remove(e)}for(let r=0;r<t;r++){let{depth:t,edgeMaterial:i,meshMaterial:o,displayParents:a,displayEdges:s}=this;if(r>=this._roots.length){let o=new n(e,i,t,r);this.add(o),this._roots.push(o)}let l=this._roots[r];l.bvh=e,l.depth=t,l.displayParents=a,l.displayEdges=s,l.material=s?i:o,l.update()}}updateMatrixWorld(...e){let t=this.mesh,r=this.parent;null!==t&&(t.updateWorldMatrix(!0,!1),r?this.matrix.copy(r.matrixWorld).invert().multiply(t.matrixWorld):this.matrix.copy(t.matrixWorld),this.matrix.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(...e)}copy(e){this.depth=e.depth,this.mesh=e.mesh,this.bvh=e.bvh,this.opacity=e.opacity,this.color.copy(e.color)}clone(){return new s(this.mesh,this.bvh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].geometry.dispose()}}});var y=p("ilwiq"),g=p("5Rd1x"),v=p("7lx9d"),x=p("RPVlj"),w=p("jiuw3"),b=p("4h5hN"),M=p("Mleu6"),C=p("38WKP"),T=p("5ca9G");y.Mesh.prototype.raycast=b.acceleratedRaycast,y.BufferGeometry.prototype.computeBoundsTree=b.computeBoundsTree,y.BufferGeometry.prototype.disposeBoundsTree=b.disposeBoundsTree;let B=new y.Vector2;const R=new Float32Array(1),A={options:{strategy:M.SAH,maxLeafTris:10,maxDepth:40,rebuild:function(){F()}},visualization:{displayMesh:!0,simpleColors:!1,outline:!0,traversalThreshold:50},benchmark:{displayRays:!1,firstHitOnly:!0,rotations:10,castCount:1e3}};class E extends y.ShaderMaterial{constructor(e){super({uniforms:{map:{value:null},threshold:{value:35},boundsColor:{value:new y.Color(16777215)},backgroundColor:{value:new y.Color(0)},thresholdColor:{value:new y.Color(16711680)},resolution:{value:new y.Vector2},outlineAlpha:{value:.5}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float threshold;

				uniform vec3 thresholdColor;
				uniform vec3 boundsColor;
				uniform vec3 backgroundColor;
				uniform vec2 resolution;
				uniform float outlineAlpha;

				varying vec2 vUv;
				void main() {

					float count = texture2D( map, vUv ).r;

					if ( count == 0.0 ) {

						vec2 offset = 1.0 / resolution;
						float c1 = texture2D( map, vUv + offset * vec2( 1.0, 0.0 ) ).r;
						float c2 = texture2D( map, vUv + offset * vec2( - 1.0, 0.0 ) ).r;
						float c3 = texture2D( map, vUv + offset * vec2( 0.0, 1.0 ) ).r;
						float c4 = texture2D( map, vUv + offset * vec2( 0.0, - 1.0 ) ).r;

						float maxC = max( c1, max( c2, max( c3, c4 ) ) );
						if ( maxC != 0.0 ) {

							gl_FragColor.rgb = mix( backgroundColor, mix( boundsColor, vec3( 1.0 ), 0.5 ), outlineAlpha );
							gl_FragColor.a = 1.0;
							return;

						}

					}

					if ( count > threshold ) {

						gl_FragColor.rgb = thresholdColor.rgb;
						gl_FragColor.a = 1.0;

					} else {

						float alpha = count / threshold;
						vec3 color = mix( boundsColor, vec3( 1.0 ), pow( alpha, 1.75 ) );

						gl_FragColor.rgb = mix( backgroundColor, color, alpha ).rgb ;
						gl_FragColor.a = 1.0;

					}

				}
			`});let t=this.uniforms;for(let e in t)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(t){this.uniforms[e].value=t}});this.setValues(e)}}function P(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}function F(){let e=performance.now();o.geometry.computeBoundsTree({strategy:parseInt(A.options.strategy),maxLeafTris:A.options.maxLeafTris,maxDepth:A.options.maxDepth});let t=performance.now()-e;i.update(),W();let r=(0,C.getBVHExtremes)(o.geometry.boundsTree)[0];a.innerText=`construction time        : ${t.toFixed(2)}ms
surface area score       : ${r.surfaceAreaScore.toFixed(2)}
total nodes              : ${r.nodeCount}
total leaf nodes         : ${r.leafNodeCount}
min / max tris per leaf  : ${r.tris.min} / ${r.tris.max}
min / max depth          : ${r.depth.min} / ${r.depth.max}
memory (incl. geometry)  : ${(1e-6*(0,C.estimateMemoryInBytes)(o.geometry.boundsTree)).toFixed(3)} mb 
memory (excl. geometry)  : ${(1e-6*(0,C.estimateMemoryInBytes)(o.geometry.boundsTree._roots)).toFixed(3)} mb`}function _(e=!1){let t=null,r=null;e&&(o.updateMatrixWorld(),r=new y.BufferGeometry,s.geometry.dispose(),t=[]);let i=new y.Raycaster;i.firstHitOnly=A.benchmark.firstHitOnly;let a=A.benchmark.castCount,n=A.benchmark.rotations,{ray:l}=i,{origin:d,direction:h}=l,u=performance.now();for(let r=0;r<a;r++){let s=r/a-.5;if(d.set(Math.cos(.75*Math.PI*s)*Math.sin(2*n*Math.PI*r/a),2*s,Math.cos(.75*Math.PI*s)*Math.cos(2*n*Math.PI*r/a)).multiplyScalar(2.5),h.set(Math.cos(5*n*s),Math.sin(10*n*s),Math.sin(5*n*s)).sub(d).normalize(),i.intersectObject(o),e){let e=i.intersectObject(o)[0];if(t.push(d.clone()),e)t.push(e.point.clone());else{let e=new y.Vector3;l.at(5,e),t.push(e)}}}let c=performance.now()-u;return e&&(r.setFromPoints(t),s.geometry=r),c}let H=0,S=0;function W(){H=0,S=0}!function(){a=document.getElementById("output"),n=document.getElementById("benchmark"),(r=new y.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(0,1),document.body.appendChild(r.domElement),l=new y.WebGLRenderTarget(1,1,{format:y.RedFormat,type:y.FloatType}),d=new x.FullScreenQuad(new E({map:l.texture,depthWrite:!1})),e=new y.Scene,(t=new y.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50)).position.set(-2.5,1.5,2.5),t.far=100,t.updateProjectionMatrix(),new g.OrbitControls(t,r.domElement),window.addEventListener("resize",P,!1),P(),new v.GLTFLoader().load("../models/DragonAttenuation.glb",t=>{t.scene.traverse(e=>{e.isMesh&&"Dragon"===e.name&&(o=e)}),o.material=new y.MeshBasicMaterial({colorWrite:!1}),o.geometry.center(),o.position.set(0,0,0),e.add(o),(i=new T.MeshBVHHelper(o,40)).displayEdges=!1,i.displayParents=!0,i.color.set(16777215),i.opacity=1,i.depth=40;let r=i.meshMaterial;r.blending=y.CustomBlending,r.blendDst=y.OneFactor,e.add(i),F(),_(!0)}),(s=new y.LineSegments).material.opacity=.1,s.material.transparent=!0,s.material.depthWrite=!1,s.frustumCulled=!1,e.add(s);let h=new w.GUI,u=h.addFolder("BVH");u.add(A.options,"strategy",{CENTER:M.CENTER,AVERAGE:M.AVERAGE,SAH:M.SAH}),u.add(A.options,"maxLeafTris",1,30,1),u.add(A.options,"maxDepth",1,40,1),u.add(A.options,"rebuild"),u.open();let c=h.addFolder("Visualization");c.add(A.visualization,"displayMesh"),c.add(A.visualization,"simpleColors"),c.add(A.visualization,"outline"),c.add(A.visualization,"traversalThreshold",1,300,1),c.open();let m=h.addFolder("Benchmark");m.add(A.benchmark,"displayRays"),m.add(A.benchmark,"firstHitOnly").onChange(W),m.add(A.benchmark,"castCount",100,5e3,1).onChange(()=>{W(),_(!0)}),m.add(A.benchmark,"rotations",1,20,1).onChange(()=>{W(),_(!0)}),m.open(),window.addEventListener("pointermove",e=>{B.set(e.clientX,window.innerHeight-e.clientY)})}(),function i(){requestAnimationFrame(i);let a=r.getPixelRatio();r.readRenderTargetPixels(l,B.x*a,B.y*a,1,1,R),o&&(H=Math.min(H+1,50),S+=(_()-S)/H,n.innerText=`
traversal depth at mouse : ${Math.round(R[0])}
benchmark rolling avg    : ${S.toFixed(3)} ms`),A.visualization.simpleColors?(d.material.boundsColor.set(16777215),d.material.thresholdColor.set(16711680),d.material.backgroundColor.set(0)):(d.material.boundsColor.set(16763432),d.material.thresholdColor.set(15277667),d.material.backgroundColor.set(8231)),d.material.threshold=A.visualization.traversalThreshold,d.material.outlineAlpha=A.visualization.outline?.5:0,d.material.resolution.set(l.width,l.height),s.visible=!1,r.autoClear=!0,o&&(o.visible=A.visualization.displayMesh),r.setRenderTarget(l),r.render(e,t),r.setRenderTarget(null),d.render(r),r.autoClear=!1,s.visible=A.benchmark.displayRays,o&&r.render(o,t),r.render(s,t)}();
//# sourceMappingURL=inspector.e2ab9340.js.map
