!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e,n){r(this,t),this.x=e||0,this.y=n||0}return i(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"equals",value:function(t){return t&&this.x===t.x&&this.y===t.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalized",value:function(){var e=this.length();return 0===e?new t(0,0):new t(this.x/e,this.y/e)}},{key:"perpendicular",value:function(){return new t(-this.y,this.x)}},{key:"rotated",value:function(e){var n=Math.cos(e),r=Math.sin(e);return new t(n*this.x+r*this.y,-r*this.x+n*this.y)}},{key:"plus",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"minus",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"perpDot",value:function(t){return this.x*t.y-this.y*t.x}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e)}}]),t}();e.default=a},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(o),l=function(){function t(e,n,r,a){i(this,t),this.left=void 0===e?Number.POSITIVE_INFINITY:e,this.right=void 0===r?Number.NEGATIVE_INFINITY:r,this.top=void 0===n?Number.POSITIVE_INFINITY:n,this.bottom=void 0===a?Number.NEGATIVE_INFINITY:a}return a(t,[{key:"isEmpty",value:function(){return this.left>this.right||this.top>this.bottom}},{key:"width",value:function(){var t=this.right-this.left;return t>=0?t:NaN}},{key:"height",value:function(){var t=this.bottom-this.top;return t>=0?t:NaN}},{key:"centre",value:function(){return new u.default(.5*(this.left+this.right),.5*(this.top+this.bottom))}},{key:"containsPoint",value:function(t){return this.left<=t.x&&t.x<=this.right&&this.top<=t.y&&t.y<=this.bottom}},{key:"containsPoints",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;if(!this.containsPoint(o))return!1}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}return!0}},{key:"intersects",value:function(t){return this.left<=t.right&&this.right>=t.left&&this.top<=t.bottom&&this.bottom>=t.top}},{key:"translated",value:function(e){return new t(this.left+e.x,this.top+e.y,this.right+e.x,this.bottom+e.y)}}],[{key:"fromPoints",value:function(e){var n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(n=Math.min.apply(Math,r(e.map(function(t){return t.x}))),i=Math.min.apply(Math,r(e.map(function(t){return t.y}))),a=Math.max.apply(Math,r(e.map(function(t){return t.x}))),o=Math.max.apply(Math,r(e.map(function(t){return t.y})))):(n=e.x,i=e.y,a=e.x,o=e.y),new t(n,i,a,o)}},{key:"fromAABBs",value:function(e){var n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(n=Math.min.apply(Math,r(e.map(function(t){return t.left}))),i=Math.min.apply(Math,r(e.map(function(t){return t.top}))),a=Math.max.apply(Math,r(e.map(function(t){return t.right}))),o=Math.max.apply(Math,r(e.map(function(t){return t.bottom})))):(n=Math.min(n,aabb.left),i=Math.min(i,aabb.top),a=Math.max(a,aabb.right),o=Math.max(o,aabb.bottom)),new t(n,i,a,o)}}]),t}();e.default=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(9),l=r(u),s=n(0),f=r(s),c=n(1),h=r(c),y=n(3),p=r(y),v=function(t){return t.reduce(function(t,e){return t+e},0)/t.length},d=function(t,e,n,r){if(t>n)throw new Error("Right must be greater than Left");if(e>r)throw new Error("Bottom must be greater than Top")},m=function(){function t(e){a(this,t),this.vertices=e,this.recompute()}return o(t,[{key:"recompute",value:function(){var t=this.vertices;if(this.aabb=h.default.fromPoints(t),this.edges=[],this.normals=[],this.count=t.length,this.centre=new f.default(v(t.map(function(t){return t.x})),v(t.map(function(t){return t.y}))),this.count>1)for(var e=0;e<this.count;e++){var n=(e+1)%this.count,r=t[n].minus(t[e]);this.edges.push(r);var i=r.normalized().perpendicular(),a=t[e].minus(this.centre);a.dot(i)<0&&(i=i.scale(-1)),this.normals.push(i)}}},{key:"isValid",value:function(){if(this.count<4)return!0;for(var t=0,e=0;e<this.count;e++){var n=(e+1)%this.count,r=this.edges[e].perpDot(this.edges[n]);if(r*t<0)return!1;t=r}return!0}},{key:"projectOntoAxis",value:function(t){var e=new p.default,n=!0,r=!1,i=void 0;try{for(var a,o=this.vertices[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value,l=u.dot(t);e.extendTo(l)}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return e}},{key:"rotated",value:function(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=this.vertices[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value,s=new f.default(l.x,l.y).minus(this.centre),c=s.rotated(e),h=this.centre.plus(c);n.push(h)}}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return new t(n)}},{key:"translated",value:function(e){return new t(this.vertices.map(function(t){return t.plus(e)}))}}],[{key:"fromRectangle",value:function(e,n,r,i){return d(e,n,r,i),new t([new f.default(e,n),new f.default(r,n),new f.default(r,i),new f.default(e,i)])}},{key:"fromCapsule",value:function(e,n,r,a,o){if(o<3)throw new Error("Specify at least 3 cap segments");d(e,n,r,a);var u=r-e;if(a-n<u)throw new Error("Capsule height must be larger than width");var l=.5*u,s=[].concat(i(Array(o).keys())).map(function(t){return-t*Math.PI/o}),c=.5*(e+r),h=s.map(function(t){return new f.default(Math.cos(t),Math.sin(t)).scale(l)}),y=new f.default(c,n+l),p=h.map(function(t){return y.plus(t)});p.push(new f.default(e,y.y));var v=new f.default(c,a-l);return p=p.concat(h.map(function(t){return v.minus(t)})),p.push(new f.default(r,v.y)),new t(p)}},{key:"generateConvexPolygons",value:function(e){var n=e.map(function(t){return[t.x,t.y]});return l.default.decomp(n).map(function(e){return new t(e.map(function(t){return new f.default(t[0],t[1])}))})}}]),t}();e.default=m},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){r(this,t),this.makeEmpty()}return i(t,[{key:"extendTo",value:function(t){this.min>t&&(this.min=t),this.max<t&&(this.max=t)}},{key:"containsPoint",value:function(t){return this.min<=t&&t<=this.max}},{key:"containsRange",value:function(t){return this.min<=t.min&&this.max>t.max}},{key:"isEmpty",value:function(){return this.min>this.max}},{key:"makeEmpty",value:function(){this.min=Number.POSITIVE_INFINITY,this.max=Number.NEGATIVE_INFINITY}},{key:"length",value:function(){return this.min>this.max?Number.NaN:this.max-this.min}}],[{key:"intersection",value:function(e,n){var r=new t;return r.min=Math.max(e.min,n.min),r.max=Math.min(e.max,n.max),r.min>r.max&&r.makeEmpty(),r}},{key:"bound",value:function(e,n){var r=new t;return r.min=Math.min(e.min,n.min),r.max=Math.max(e.max,n.max),r}}]),t}();e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=r(o),l=n(2),s=r(l),f=n(3),c=r(f),h=n(1),y=(r(h),n(10)),p=r(y),v=function(){function t(e){i(this,t),this.objectLayerJson=e,this.shapes=[];var n=!0,r=!1,a=void 0;try{for(var o,u=e.objects[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var l=o.value;l.polygon?this.addPolygon(l):l.polyline||l.ellipse||l.gid||(l.text,this.addRectangle(l))}}catch(t){r=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw a}}this.quadTree=new p.default(this.shapes,5,5)}return a(t,[{key:"addRectangle",value:function(t){var e=t.width,n=t.height,r=new u.default(e,0),i=new u.default(0,n),a=-t.rotation*Math.PI/180;a&&(r=r.rotated(a),i=i.rotated(a));var o={x:t.x,y:t.y,width:t.width,height:t.height,polygon:[{x:0,y:0},r,r.plus(i),i],properties:t.properties||{}};this.addPolygon(o)}},{key:"addPolygon",value:function(t){var e=t.polygon.map(function(e){return new u.default(t.x+e.x,t.y+e.y)}),n=s.default.generateConvexPolygons(e),r=!0,i=!1,a=void 0;try{for(var o,l=n[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var f=o.value;this.addConvexPolygon(f,t.properties||{})}}catch(t){i=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}}},{key:"addConvexPolygon",value:function(t,e){var n=t.aabb,r={type:"polygon",left:n.left,top:n.top,right:n.right,bottom:n.bottom,polygon:t,properties:e||{},collideWidth:function(t){var e=t.sprite,n=new u.default(e.x,e.y),r=t.x,i=t.x+t.width,a=t.y,o=t.y+t.height,l=void 0,f=void 0;t.plus&&t.plus.shape?(f=t.plus.shape.translated(n),l=f.normals.concat(this.polygon.normals)):(f=s.default.fromRectangle(r,a,i,o),l=[new u.default(1,0),new u.default(0,1)].concat(this.polygon.normals));var h=Number.POSITIVE_INFINITY,y=void 0,p=!0,v=!1,d=void 0;try{for(var m,b=l[Symbol.iterator]();!(p=(m=b.next()).done);p=!0){var g=m.value,w=this.polygon.projectOntoAxis(g),x=f.projectOntoAxis(g);if(c.default.intersection(w,x).isEmpty())return null;var k=Math.min(Math.abs(w.max-x.min),Math.abs(x.max-w.min));h>k&&(h=k,y=g)}}catch(t){v=!0,d=t}finally{try{!p&&b.return&&b.return()}finally{if(v)throw d}}return f.centre.minus(this.polygon.centre).dot(y)<0&&(y=y.scale(-1)),{penetration:y.scale(-h),normal:y}}};this.shapes.push(r)}}]),t}();e.default=v},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(6),a=r(i),o=n(14),u=r(o),l=n(15),s=r(l),f=n(16),c=r(f);Phaser.Plugin.TilemapPlus=function(t,e){function n(t){return t+"-TilemapPlus"}Phaser.Plugin.call(this,t,e);var r=Phaser.Loader.prototype.tilemap;Phaser.Loader.prototype.tilemap=function(t,e,i,a){r.call(this,t,e,i,a),this.json(n(t),e)};var i=Phaser.GameObjectFactory.prototype.tilemap;Phaser.GameObjectFactory.prototype.tilemap=function(t,e,r,o,u){var l=i.call(this,t,e,r,o,u),s=this.game.cache.getJSON(n(t));return l.plus=new a.default(s,this.game.time,l),l};var o=Phaser.Tilemap.prototype.createLayer;Phaser.Tilemap.prototype.createLayer=function(t,e,n,r){var i=o.call(this,t,e,n,r);return i.plus=new u.default(i),i};var l=Phaser.Tilemap.prototype.addTilesetImage;Phaser.Tilemap.prototype.addTilesetImage=function(t,e,n,r,i,a,o){var u=l.call(this,t,e,n,r,i,a,o);return u.plus=new s.default(u),u};var f=Phaser.GameObjectFactory.prototype.sprite;Phaser.GameObjectFactory.prototype.sprite=function(t,e,n,r,i){var a=f.call(this,t,e,n,r,i);return a.plus=new c.default(a),a}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),o=r(a),u=n(8),l=r(u),s=n(11),f=r(s),c=function t(e,n,r){i(this,t),this.tilemapJson=e,this.time=n,this.tilemap=r,this.timer=null,this.tileAnimations=[],this.game=n.game,this.animation=new o.default(e,n,r),this.events=new f.default(e),this.physics=new l.default(e,this.events),this.properties=e.properties||{}};e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=t.tiles;if(e){var n=!0,r=!1,i=void 0;try{for(var o,u=Object.keys(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var l=o.value,s=e[l],f=s.animation;f&&f.length>0&&a.bind(this)(t,l,f)}}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}}}function a(t,e,n){var r=n.map(function(t){return{tileId:t.tileid,duration:t.duration}});if(0!==r.length){var i=this.tilemap.tilesets.find(function(e){return e.name===t.name}),a={frames:r,tileset:i,tileLocations:u.bind(this)(i.firstgid+parseInt(e)),currentFrame:0,currentDuration:0};this.tileAnimations.push(a)}}function o(){var t=this.time.elapsedMS,e=!1,n=!0,r=!1,i=void 0;try{for(var a,o=this.tileAnimations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value,l=u.frames,s=u.tileset,f=u.tileLocations,c=u.currentFrame,h=l[c].duration;if(u.currentDuration+=t,u.currentDuration>h){u.currentDuration-=h,u.currentFrame=(c+1)%l.length;var y=s.firstgid+l[u.currentFrame].tileId,p=!0,v=!1,d=void 0;try{for(var m,b=f[Symbol.iterator]();!(p=(m=b.next()).done);p=!0){var g=m.value;this.tilemap.getTile(g.x,g.y,g.layer,!0).index=y}}catch(t){v=!0,d=t}finally{try{!p&&b.return&&b.return()}finally{if(v)throw d}}e=!0}}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}if(e){var w=!0,x=!1,k=void 0;try{for(var N,I=this.tilemap.layers[Symbol.iterator]();!(w=(N=I.next()).done);w=!0){N.value.dirty=!0}}catch(t){x=!0,k=t}finally{try{!w&&I.return&&I.return()}finally{if(x)throw k}}}}function u(t){var e=[],n=!0,r=!1,i=void 0;try{for(var a,o=this.tilemapJson.layers[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;if("tilelayer"===u.type)for(var l=u.data,s=u.width,f=u.height,c=0;c<f;c++)for(var h=0;h<s;h++)l[c*s+h]===t&&e.push({x:h,y:c,layer:u.name})}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return e}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(){function t(e,n,i){r(this,t),this.tilemapJson=e,this.time=n,this.tilemap=i,this.timer=null,this.tileAnimations=[],this.game=n.game}return l(t,[{key:"enable",value:function(){var t=this;if(null==this.timer){var e=!0,n=!1,r=void 0;try{for(var a,u=this.tilemapJson.tilesets[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var l=a.value;l.tiles&&i.bind(this)(l)}}catch(t){n=!0,r=t}finally{try{!e&&u.return&&u.return()}finally{if(n)throw r}}this.timer=this.time.events.loop(20,function(){return o.bind(t)()})}}},{key:"disable",value:function(){null!=this.timer&&(this.time.events.remove(this.timer),this.timer=null,this.tileAnimations=[])}}]),t}();e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=r(o),l=n(2),s=(r(l),n(3)),f=(r(s),n(1)),c=r(f),h=n(4),y=r(h),p=function(){function t(e,n){i(this,t),this.tilemapJson=e,this.events=n}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new y.default(e)}},{key:"collideWith",value:function(t){if(this.shapeLayer){var e=t.body,n=t.game.physics.arcade.gravity,r=new u.default(n.x,n.y),i=(r.normalized(),new u.default(e.velocity.x,e.velocity.y));e.contactNormal||(e.contactNormal=new u.default),e.contactNormal.x=e.contactNormal.y=0;var a=new u.default,o=0,l=new c.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),s=this.shapeLayer.quadTree.candidateShapes(l),f=[],h=!0,y=!1,p=void 0;try{for(var v,d=s[Symbol.iterator]();!(h=(v=d.next()).done);h=!0){var m=v.value,b=m.collideWidth(e);if(b){var g=b.normal;if(!(i.dot(g)>=0)){var w=b.penetration;if(new u.default(e.x-e.prev.x,e.y-e.prev.y).minus(w).dot(g)>=-1){var x=m.properties,k=x.collideOnly;if(k){if("down"===k&&(i.y<0||g.y>=0))continue;if("up"===k&&(i.y>0||g.y<=0))continue;if("right"===k&&(i.x<0||g.x>=0))continue;if("left"===k&&(i.x>0||g.x<=0))continue}e.contactNormal=e.contactNormal.plus(g),a=a.plus(w);var N=x.bounce;N&&(o+=N),f.push(m)}}}}}catch(t){y=!0,p=t}finally{try{!h&&d.return&&d.return()}finally{if(y)throw p}}e.x-=a.x,e.y-=a.y,e.contactNormal=e.contactNormal.normalized();var I=e.contactNormal,M=i.dot(I),_=I.scale(M),P=i.minus(_),S=void 0;S=_.scale(-o);var T=P,E=S.plus(T);e.velocity.x=E.x,e.velocity.y=E.y,this.updateBlocked(t,I),this.events.collisions.notify(t,f,i,E,I)}}},{key:"updateBlocked",value:function(t,e){var n=t.body;n.blocked.up=n.blocked.up||e.y>0,n.blocked.down=n.blocked.down||e.y<0,n.blocked.left=n.blocked.left||e.x>0,n.blocked.right=n.blocked.right||e.x<0,n.blocked.none=0==e.x&&0==e.y}}]),t}();e.default=p},function(t,e){function n(t,e,n){n=n||0;var r,i,a,o,u,l,s,f=[0,0];return r=t[1][1]-t[0][1],i=t[0][0]-t[1][0],a=r*t[0][0]+i*t[0][1],o=e[1][1]-e[0][1],u=e[0][0]-e[1][0],l=o*e[0][0]+u*e[0][1],s=r*u-o*i,_(s,0,n)||(f[0]=(u*a-i*l)/s,f[1]=(r*l-o*a)/s),f}function r(t,e,n,r){var i=e[0]-t[0],a=e[1]-t[1],o=r[0]-n[0],u=r[1]-n[1];if(o*a-u*i==0)return!1;var l=(i*(n[1]-t[1])+a*(t[0]-n[0]))/(o*a-u*i),s=(o*(t[1]-n[1])+u*(n[0]-t[0]))/(u*i-o*a);return l>=0&&l<=1&&s>=0&&s<=1}function i(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function a(t,e,n){return i(t,e,n)>0}function o(t,e,n){return i(t,e,n)>=0}function u(t,e,n){return i(t,e,n)<0}function l(t,e,n){return i(t,e,n)<=0}function s(t,e,n,r){if(r){var a=P,o=S;a[0]=e[0]-t[0],a[1]=e[1]-t[1],o[0]=n[0]-e[0],o[1]=n[1]-e[1];var u=a[0]*o[0]+a[1]*o[1],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]),s=Math.sqrt(o[0]*o[0]+o[1]*o[1]);return Math.acos(u/(l*s))<r}return 0===i(t,e,n)}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function c(t,e){var n=t.length;return t[e<0?e%n+n:e%n]}function h(t){t.length=0}function y(t,e,n,r){for(var i=n;i<r;i++)t.push(e[i])}function p(t){for(var e=0,n=t,r=1;r<t.length;++r)(n[r][1]<n[e][1]||n[r][1]===n[e][1]&&n[r][0]>n[e][0])&&(e=r);a(c(t,e-1),c(t,e),c(t,e+1))||v(t)}function v(t){for(var e=[],n=t.length,r=0;r!==n;r++)e.push(t.pop());for(var r=0;r!==n;r++)t[r]=e[r]}function d(t,e){return u(c(t,e-1),c(t,e),c(t,e+1))}function m(t,e,r){var i,a,u=T,s=E;if(o(c(t,e+1),c(t,e),c(t,r))&&l(c(t,e-1),c(t,e),c(t,r)))return!1;a=f(c(t,e),c(t,r));for(var h=0;h!==t.length;++h)if((h+1)%t.length!==e&&h!==e&&o(c(t,e),c(t,r),c(t,h+1))&&l(c(t,e),c(t,r),c(t,h))&&(u[0]=c(t,e),u[1]=c(t,r),s[0]=c(t,h),s[1]=c(t,h+1),i=n(u,s),f(c(t,e),i)<a))return!1;return!0}function b(t,e,n,r){var i=r||[];if(h(i),e<n)for(var a=e;a<=n;a++)i.push(t[a]);else{for(var a=0;a<=n;a++)i.push(t[a]);for(var a=e;a<t.length;a++)i.push(t[a])}return i}function g(t){for(var e=[],n=[],r=[],i=[],a=Number.MAX_VALUE,o=0;o<t.length;++o)if(d(t,o))for(var u=0;u<t.length;++u)if(m(t,o,u)){n=g(b(t,o,u,i)),r=g(b(t,u,o,i));for(var l=0;l<r.length;l++)n.push(r[l]);n.length<a&&(e=n,a=n.length,e.push([c(t,o),c(t,u)]))}return e}function w(t){var e=g(t);return e.length>0?x(t,e):[t]}function x(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var n=[t],r=0;r<e.length;r++)for(var i=e[r],a=0;a<n.length;a++){var o=n[a],u=x(o,i);if(u){n.splice(a,1),n.push(u[0],u[1]);break}}return n}var i=e,r=t.indexOf(i[0]),a=t.indexOf(i[1]);return-1!==r&&-1!==a&&[b(t,r,a),b(t,a,r)]}function k(t){var e,n=t;for(e=0;e<n.length-1;e++)for(var i=0;i<e-1;i++)if(r(n[e],n[e+1],n[i],n[i+1]))return!1;for(e=1;e<n.length-2;e++)if(r(n[0],n[n.length-1],n[e],n[e+1]))return!1;return!0}function N(t,e,n,r,i){i=i||0;var a=e[1]-t[1],o=t[0]-e[0],u=a*t[0]+o*t[1],l=r[1]-n[1],s=n[0]-r[0],f=l*n[0]+s*n[1],c=a*s-l*o;return _(c,0,i)?[0,0]:[(s*u-o*f)/c,(a*f-l*u)/c]}function I(t,e,n,r,i,s,h){s=s||100,h=h||0,i=i||25,e=void 0!==e?e:[],n=n||[],r=r||[];var p=[0,0],v=[0,0],m=[0,0],b=0,g=0,w=0,x=0,k=0,M=0,_=0,P=[],S=[],T=t,E=t;if(E.length<3)return e;if(++h>s)return console.warn("quickDecomp: max level ("+s+") reached."),e;for(var O=0;O<t.length;++O)if(d(T,O)){n.push(T[O]),b=g=Number.MAX_VALUE;for(var j=0;j<t.length;++j)a(c(T,O-1),c(T,O),c(T,j))&&l(c(T,O-1),c(T,O),c(T,j-1))&&(m=N(c(T,O-1),c(T,O),c(T,j),c(T,j-1)),u(c(T,O+1),c(T,O),m)&&(w=f(T[O],m))<g&&(g=w,v=m,M=j)),a(c(T,O+1),c(T,O),c(T,j+1))&&l(c(T,O+1),c(T,O),c(T,j))&&(m=N(c(T,O+1),c(T,O),c(T,j),c(T,j+1)),a(c(T,O-1),c(T,O),m)&&(w=f(T[O],m))<b&&(b=w,p=m,k=j));if(M===(k+1)%t.length)m[0]=(v[0]+p[0])/2,m[1]=(v[1]+p[1])/2,r.push(m),O<k?(y(P,T,O,k+1),P.push(m),S.push(m),0!==M&&y(S,T,M,T.length),y(S,T,0,O+1)):(0!==O&&y(P,T,O,T.length),y(P,T,0,k+1),P.push(m),S.push(m),y(S,T,M,O+1));else{if(M>k&&(k+=t.length),x=Number.MAX_VALUE,k<M)return e;for(var j=M;j<=k;++j)o(c(T,O-1),c(T,O),c(T,j))&&l(c(T,O+1),c(T,O),c(T,j))&&(w=f(c(T,O),c(T,j)))<x&&(x=w,_=j%t.length);O<_?(y(P,T,O,_+1),0!==_&&y(S,T,_,E.length),y(S,T,0,O+1)):(0!==O&&y(P,T,O,E.length),y(P,T,0,_+1),y(S,T,_,O+1))}return P.length<S.length?(I(P,e,n,r,i,s,h),I(S,e,n,r,i,s,h)):(I(S,e,n,r,i,s,h),I(P,e,n,r,i,s,h)),e}return e.push(t),e}function M(t,e){for(var n=0,r=t.length-1;t.length>3&&r>=0;--r)s(c(t,r-1),c(t,r),c(t,r+1),e)&&(t.splice(r%t.length,1),n++);return n}function _(t,e,n){return n=n||0,Math.abs(t-e)<n}t.exports={decomp:w,quickDecomp:I,isSimple:k,removeCollinearPoints:M,makeCCW:p};var P=[],S=[],T=[],E=[]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=(r(o),n(1)),l=r(u),s=function(){function t(e,n,r){if(i(this,t),this.maxLevel=n,this.maxShapes=r,e.length<r||n<=1)this.shapes=e;else{var a=l.default.fromAABBs(e.map(function(t){return t.polygon.aabb})),o=a.centre();this.pivot=o;var u=[],s=[],f=[],c=[],h=[],y=!0,p=!1,v=void 0;try{for(var d,m=e[Symbol.iterator]();!(y=(d=m.next()).done);y=!0){var b=d.value,g=b.polygon.aabb;g.right<o.x&&g.bottom<o.y?s.push(b):g.left>o.x&&g.bottom<o.y?f.push(b):g.right<o.x&&g.top>o.y?c.push(b):g.left>o.x&&g.top>o.y?h.push(b):u.push(b)}}catch(t){p=!0,v=t}finally{try{!y&&m.return&&m.return()}finally{if(p)throw v}}this.shapes=u,s.length>0&&(this.topLeftNode=new t(s,n-1,r)),f.length>0&&(this.topRightNode=new t(f,n-1,r)),c.length>0&&(this.bottomLeftNode=new t(c,n-1,r)),h.length>0&&(this.bottomRightNode=new t(h,n-1,r))}}return a(t,[{key:"candidateShapes",value:function(t){var e=this.shapes.filter(function(e){return e.polygon.aabb.intersects(t)}),n=this.pivot;if(!n)return e;var r=this.topLeftNode;r&&t.left<=n.x&&t.top<=n.y&&(e=e.concat(r.candidateShapes(t)));var i=this.topRightNode;i&&t.right>=n.x&&t.top<=n.y&&(e=e.concat(i.candidateShapes(t)));var a=this.bottomLeftNode;a&&t.left<=n.x&&t.bottom>=n.y&&(e=e.concat(a.candidateShapes(t)));var o=this.bottomRightNode;return o&&t.right>=n.x&&t.bottom>=n.y&&(e=e.concat(o.candidateShapes(t))),e}}]),t}();e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),o=r(a),u=n(13),l=r(u),s=function t(e){i(this,t),this.collisions=new o.default,this.regions=new l.default(e)};e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){r(this,t),this.spriteListeners=new Map,this.spriteCollisions=new Map}return i(t,[{key:"add",value:function(t,e){return this.getSpriteListeners(t).push(e),e}},{key:"remove",value:function(t,e){var n=this.getSpriteListeners(t);this.spriteListeners.set(t,n.filter(function(t){return t!=e}))}},{key:"notify",value:function(t,e,n,r,i){var a=this.spriteCollisions.has(t)?this.spriteCollisions.get(t):[],o=e.filter(function(t){return!a.find(function(e){return e===t})});this.spriteCollisions.set(t,e);var u=!0,l=!1,s=void 0;try{for(var f,c=o[Symbol.iterator]();!(u=(f=c.next()).done);u=!0){var h=f.value,y=!0,p=!1,v=void 0;try{for(var d,m=this.getSpriteListeners(t)[Symbol.iterator]();!(y=(d=m.next()).done);y=!0){(0,d.value)(h,n,r,i)}}catch(t){p=!0,v=t}finally{try{!y&&m.return&&m.return()}finally{if(p)throw v}}}}catch(t){l=!0,s=t}finally{try{!u&&c.return&&c.return()}finally{if(l)throw s}}}},{key:"getSpriteListeners",value:function(t){return this.spriteListeners.has(t)||this.spriteListeners.set(t,[]),this.spriteListeners.get(t)}}]),t}();e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=(r(o),n(2)),l=(r(u),n(3)),s=(r(l),n(1)),f=r(s),c=n(4),h=r(c),y=function(){function t(e){i(this,t),this.tilemapJson=e,this.spriteStates=new Map}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new h.default(e)}},{key:"onEnterAdd",value:function(t,e){return this.getSpriteState(t).enterListeners.push(e),e}},{key:"onEnterRemove",value:function(t,e){var n=this.getSpriteState(t);n.enterListeners=n.enterListeners.filter(function(t){return t!=e})}},{key:"onLeaveAdd",value:function(t,e){return this.getSpriteState(t).leaveListeners.push(e),e}},{key:"onLeaveRemove",value:function(t,e){var n=this.getSpriteState(t);n.leaveListeners=n.leaveListeners.filter(function(t){return t!=e})}},{key:"triggerWith",value:function(t){if(this.shapeLayer){var e=t.body,n=new f.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),r=this.shapeLayer.quadTree.candidateShapes(n),i=[],a=!0,o=!1,u=void 0;try{for(var l,s=r[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var c=l.value;c.collideWidth(e)&&i.push(c)}}catch(t){o=!0,u=t}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}this.notify(t,i)}}},{key:"notify",value:function(t,e){var n=this.getSpriteState(t),r=n.collisions,i=e.filter(function(t){return!r.find(function(e){return e===t})}),a=r.filter(function(t){return!e.find(function(e){return e===t})});n.collisions=e;var o=!0,u=!1,l=void 0;try{for(var s,f=i[Symbol.iterator]();!(o=(s=f.next()).done);o=!0){var c=s.value,h=!0,y=!1,p=void 0;try{for(var v,d=n.enterListeners[Symbol.iterator]();!(h=(v=d.next()).done);h=!0){(0,v.value)(c)}}catch(t){y=!0,p=t}finally{try{!h&&d.return&&d.return()}finally{if(y)throw p}}}}catch(t){u=!0,l=t}finally{try{!o&&f.return&&f.return()}finally{if(u)throw l}}var m=!0,b=!1,g=void 0;try{for(var w,x=a[Symbol.iterator]();!(m=(w=x.next()).done);m=!0){var k=w.value,N=!0,I=!1,M=void 0;try{for(var _,P=n.leaveListeners[Symbol.iterator]();!(N=(_=P.next()).done);N=!0){(0,_.value)(k)}}catch(t){I=!0,M=t}finally{try{!N&&P.return&&P.return()}finally{if(I)throw M}}}}catch(t){b=!0,g=t}finally{try{!m&&x.return&&x.return()}finally{if(b)throw g}}}},{key:"getSpriteState",value:function(t){return this.spriteStates.has(t)||this.spriteStates.set(t,{collisions:[],enterListeners:[],leaveListeners:[]}),this.spriteStates.get(t)}}]),t}();e.default=y},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e){r(this,t),this.properties=e.layer.properties||{}};e.default=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e){r(this,t),this.properties=e.properties||{}};e.default=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(){function t(e){r(this,t),this.sprite=e}return i(t,[{key:"setBodyCapsule",value:function(t,e,n){var r=this.sprite;if(!r.body)throw new Error("Enable arcade physics before assigning body shape");var i=r.body;i.plus=i.plus||{};var a=.5*t,u=.5*e;i.plus.shape=o.default.fromCapsule(-a,-u,+a,+u,n)}}]),t}();e.default=u}]);