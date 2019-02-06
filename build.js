
//alert('REDIRECTING TO A BETTER SITE')
//window.location.href = 'https://yidio.com'


console.time('parse')
var body = document.body,
    timer;
    !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Hls=e()}}(function(){return function e(t,r,a){function i(s,o){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(n)return n(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[s]={exports:{}};t[s][0].call(d.exports,function(e){var r=t[s][1][e];return i(r||e)},d,d.exports,e,t,r,a)}return r[s].exports}for(var n="function"==typeof require&&require,s=0;s<a.length;s++)i(a[s]);return i}({1:[function(e,t,r){function a(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function n(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.prototype.setMaxListeners=function(e){if(!n(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},a.prototype.emit=function(e){var t,r,a,n,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(r=this._events[e],o(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:n=Array.prototype.slice.call(arguments,1),r.apply(this,n)}else if(s(r))for(n=Array.prototype.slice.call(arguments,1),a=(u=r.slice()).length,l=0;l<a;l++)u[l].apply(this,n);return!0},a.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?a.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.trace),this},a.prototype.on=a.prototype.addListener,a.prototype.once=function(e,t){function r(){this.removeListener(e,r),a||(a=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var a=!1;return r.listener=t,this.on(e,r),this},a.prototype.removeListener=function(e,t){var r,a,n,o;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],n=r.length,a=-1,r===t||i(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(o=n;o-->0;)if(r[o]===t||r[o].listener&&r[o].listener===t){a=o;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},a.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],i(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},a.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},a.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},a.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,r){!function(e){var a=/^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/;?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var a=this.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=this.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=this.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,f=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(f)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(e){var t=a.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(n,"");e.length!==(e=e.replace(s,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};"object"==typeof r&&"object"==typeof t?t.exports=o:"object"==typeof r?r.URLToolkit=o:e.URLToolkit=o}(this)},{}],3:[function(e,t,r){var a=arguments[3],i=arguments[4],n=arguments[5],s=JSON.stringify;t.exports=function(e,t){function r(e){p[e]=!0;for(var t in i[e][1]){var a=i[e][1][t];p[a]||r(a)}}for(var o,l=Object.keys(n),u=0,d=l.length;u<d;u++){var f=l[u],c=n[f].exports;if(c===e||c&&c.default===e){o=f;break}}if(!o){o=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var h={},u=0,d=l.length;u<d;u++)h[f=l[u]]=f;i[o]=[Function(["require","module","exports"],"("+e+")(self)"),h]}var g=Math.floor(Math.pow(16,8)*Math.random()).toString(16),v={};v[o]=o,i[g]=[Function(["require"],"var f = require("+s(o)+");(f.default ? f.default : f)(self);"),v];var p={};r(g);var y="("+a+")({"+Object.keys(p).map(function(e){return s(e)+":["+i[e][0]+","+s(i[e][1])+"]"}).join(",")+"},{},["+s(g)+"])",m=window.URL||window.webkitURL||window.mozURL||window.msURL,E=new Blob([y],{type:"text/javascript"});if(t&&t.bare)return E;var b=m.createObjectURL(E),T=new Worker(b);return T.objectURL=b,T}},{}],4:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.hlsDefaultConfig=void 0;var i=a(e(5)),n=a(e(8)),s=a(e(9)),o=a(e(10)),l=a(e(59)),u=a(e(7)),d=a(e(6)),f=a(e(50)),c=a(e(16)),h=a(e(15)),g=a(e(14));r.hlsDefaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:l.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,fetchSetup:void 0,abrController:i.default,bufferController:n.default,capLevelController:s.default,fpsController:o.default,audioStreamController:d.default,audioTrackController:u.default,subtitleStreamController:g.default,subtitleTrackController:h.default,timelineController:c.default,cueHandler:f.default,enableCEA708Captions:!0,enableWebVTT:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",stretchShortVideoTrack:!1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0}},{10:10,14:14,15:15,16:16,5:5,50:50,59:59,6:6,7:7,8:8,9:9}],5:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=a(e(37)),f=e(33),c=e(54),h=a(e(52)),g=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.FRAG_LOADING,l.default.FRAG_LOADED,l.default.FRAG_BUFFERED,l.default.ERROR));return r.lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=e,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){this.clearTimer(),u.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag;if("main"===t.type){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this._bwEstimator){var r=this.hls,a=e.frag.level,i=r.levels[a].details.live,n=r.config,s=void 0,o=void 0;i?(s=n.abrEwmaFastLive,o=n.abrEwmaSlowLive):(s=n.abrEwmaFastVoD,o=n.abrEwmaSlowVoD),this._bwEstimator=new h.default(r,o,s,n.abrEwmaDefaultEstimate)}this.fragCurrent=t}}},{key:"_abandonRulesCheck",value:function(){var e=this.hls,t=e.media,r=this.fragCurrent,a=r.loader,i=e.minAutoLevel;if(!a||a.stats&&a.stats.aborted)return c.logger.warn("frag loader destroy or aborted, disarm abandonRules"),void this.clearTimer();var n=a.stats;if(t&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var s=performance.now()-n.trequest,o=Math.abs(t.playbackRate);if(s>500*r.duration/o){var u=e.levels,f=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/s),h=u[r.level],g=h.realBitrate?Math.max(h.realBitrate,h.bitrate):h.bitrate,v=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*g/8)),p=t.currentTime,y=(v-n.loaded)/f,m=(d.default.bufferInfo(t,p,e.config.maxBufferHole).end-p)/o;if(m<2*r.duration/o&&y>m){var E=void 0,b=void 0;for(b=r.level-1;b>i;b--){var T=u[b].realBitrate?Math.max(u[b].realBitrate,u[b].bitrate):u[b].bitrate;if((E=r.duration*T/(6.4*f))<m)break}E<y&&(c.logger.warn("loading too slow, abort fragment loading and switch to level "+b+":fragLoadedDelay["+b+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+E.toFixed(1)+"<"+y.toFixed(1)+":"+m.toFixed(1)),e.nextLoadLevel=b,this._bwEstimator.sample(s,n.loaded),a.abort(),this.clearTimer(),e.trigger(l.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if("main"===t.type&&!isNaN(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],a=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,i=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:a,duration:i},r.realBitrate=Math.round(8*a/i)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}}},{key:"onFragBuffered",value:function(e){var t=e.stats,r=e.frag;if(!(!0===t.aborted||1!==r.loadCounter||"main"!==r.type||isNaN(r.sn)||r.bitrateTest&&t.tload!==t.tbuffered)){var a=t.tparsed-t.trequest;c.logger.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(a,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}}},{key:"onError",value:function(e){switch(e.details){case f.ErrorDetails.FRAG_LOAD_ERROR:case f.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}}},{key:"clearTimer",value:function(){clearInterval(this.timer),this.timer=null}},{key:"_findBestLevel",value:function(e,t,r,a,i,n,s,o,l){for(var u=i;u>=a;u--){var d=l[u].details,f=d?d.totalduration/d.fragments.length:t,h=!!d&&d.live,g=void 0;g=u<=e?s*r:o*r;var v=l[u].realBitrate?Math.max(l[u].realBitrate,l[u].bitrate):l[u].bitrate,p=v*f/g;if(c.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+u+"/"+Math.round(g)+"/"+v+"/"+f+"/"+n+"/"+p),g>v&&(!p||h&&!this.bitrateTestDelay||p<n))return u}return-1}},{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,a=e.config,i=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,u=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,f=this._bwEstimator?this._bwEstimator.getEstimate():a.abrEwmaDefaultEstimate,h=(d.default.bufferInfo(n,l,a.maxBufferHole).end-l)/u,g=this._findBestLevel(s,o,f,i,t,h,a.abrBandWidthFactor,a.abrBandWidthUpFactor,r);if(g>=0)return g;c.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var v=o?Math.min(o,a.maxStarvationDelay):a.maxStarvationDelay,p=a.abrBandWidthFactor,y=a.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;m&&(v=(o?Math.min(o,a.maxLoadingDelay):a.maxLoadingDelay)-m,c.logger.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*v)+" ms"),p=y=1)}return g=this._findBestLevel(s,o,f,i,t,h+v,p,y,r),Math.max(g,0)}}]),t}(u.default);r.default=g},{33:33,34:34,35:35,37:37,52:52,54:54}],6:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(48)),u=a(e(37)),d=a(e(25)),f=a(e(35)),c=a(e(34)),h=a(e(38)),g=a(e(55)),v=e(33),p=e(54),y=e(51),m={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS"},E=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,f.default.MEDIA_ATTACHED,f.default.MEDIA_DETACHING,f.default.AUDIO_TRACKS_UPDATED,f.default.AUDIO_TRACK_SWITCHING,f.default.AUDIO_TRACK_LOADED,f.default.KEY_LOADED,f.default.FRAG_LOADED,f.default.FRAG_PARSING_INIT_SEGMENT,f.default.FRAG_PARSING_DATA,f.default.FRAG_PARSED,f.default.ERROR,f.default.BUFFER_CREATED,f.default.BUFFER_APPENDED,f.default.BUFFER_FLUSHED,f.default.INIT_PTS_FOUND));return r.config=e.config,r.audioCodecSwap=!1,r.ticks=0,r._state=m.STOPPED,r.ontick=r.tick.bind(r),r.initPTS=[],r.waitingFragment=null,r.videoTrackCC=null,r}return s(t,e),o(t,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),c.default.prototype.destroy.call(this),this.state=m.STOPPED}},{key:"onInitPtsFound",value:function(e){var t=e.id,r=e.frag.cc,a=e.initPTS;"main"===t&&(this.initPTS[r]=a,this.videoTrackCC=r,p.logger.log("InitPTS for cc:"+r+" found from video track:"+a),this.state===m.WAITING_INIT_PTS&&this.tick())}},{key:"startLoad",value:function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.fragLoadError=0,t>0&&-1===e?(p.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=m.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=m.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=m.STOPPED}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=m.STOPPED}},{key:"tick",value:function(){1===++this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){var e,t,r,a=this.hls,i=a.config;switch(this.state){case m.ERROR:case m.PAUSED:case m.BUFFER_FLUSHING:break;case m.STARTING:this.state=m.WAITING_TRACK,this.loadedmetadata=!1;break;case m.IDLE:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!i.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var s=this.mediaBuffer?this.mediaBuffer:this.media,o=u.default.bufferInfo(s,e,i.maxBufferHole),d=o.len,c=o.end,h=this.fragPrevious,g=i.maxMaxBufferLength,E=this.audioSwitch,b=this.trackId;if((d<g||E)&&b<n.length){if(void 0===(r=n[b].details)){this.state=m.WAITING_TRACK;break}if(!E&&!r.live&&h&&h.sn===r.endSN&&(!this.media.seeking||this.media.duration-c<h.duration/2)){this.hls.trigger(f.default.BUFFER_EOS,{type:"audio"}),this.state=m.ENDED;break}var T=r.fragments,k=T.length,_=T[0].start,R=T[k-1].start+T[k-1].duration,S=void 0;if(E)if(r.live&&!r.PTSKnown)p.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),c=0;else if(c=e,r.PTSKnown&&e<_){if(!(o.end>_||o.nextStart))return;p.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=_+.05}if(r.initSegment&&!r.initSegment.data)S=r.initSegment;else if(c<=_){if(S=T[0],null!==this.videoTrackCC&&S.cc!==this.videoTrackCC&&(S=(0,y.findFragWithCC)(T,this.videoTrackCC)),r.live&&S.loadIdx&&S.loadIdx===this.fragLoadIdx){var A=o.nextStart?o.nextStart:_;return p.logger.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(A+.05)),void(this.media.currentTime=A+.05)}}else{var L=void 0,w=i.maxFragLookUpTolerance,D=h?T[h.sn-T[0].sn+1]:void 0,O=function(e){var t=Math.min(w,e.duration);return e.start+e.duration-t<=c?1:e.start-t>c&&e.start?-1:0};c<R?(c>R-w&&(w=0),L=D&&!O(D)?D:l.default.search(T,O)):L=T[k-1],L&&(S=L,_=L.start,h&&S.level===h.level&&S.sn===h.sn&&(S.sn<r.endSN?(S=T[S.sn+1-r.startSN],p.logger.log("SN just loaded, load next one: "+S.sn)):S=null))}if(S)if(S.decryptdata&&null!=S.decryptdata.uri&&null==S.decryptdata.key)p.logger.log("Loading key for "+S.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+b),this.state=m.KEY_LOADING,a.trigger(f.default.KEY_LOADING,{frag:S});else{if(p.logger.log("Loading "+S.sn+", cc: "+S.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+b+", currentTime:"+e+",bufferEnd:"+c.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,S.loadCounter){S.loadCounter++;var I=i.fragLoadingLoopThreshold;if(S.loadCounter>I&&Math.abs(this.fragLoadIdx-S.loadIdx)<I)return void a.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:S})}else S.loadCounter=1;S.loadIdx=this.fragLoadIdx,this.fragCurrent=S,this.startFragRequested=!0,isNaN(S.sn)||(this.nextLoadPosition=S.start+S.duration),a.trigger(f.default.FRAG_LOADING,{frag:S}),this.state=m.FRAG_LOADING}}break;case m.WAITING_TRACK:(t=this.tracks[this.trackId])&&t.details&&(this.state=m.IDLE);break;case m.FRAG_LOADING_WAITING_RETRY:var P=performance.now(),C=this.retryDate,x=(s=this.media)&&s.seeking;(!C||P>=C||x)&&(p.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=m.IDLE);break;case m.WAITING_INIT_PTS:if(void 0===this.initPTS[this.videoTrackCC])break;var F=this.waitingFragment;if(F){var M=F.frag.cc;this.videoTrackCC!==M?(p.logger.warn("Waiting fragment CC ("+M+") does not match video track CC ("+this.videoTrackCC+")"),this.waitingFragment=null,this.state=m.IDLE):(this.state=m.FRAG_LOADING,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null)}else this.state=m.IDLE;break;case m.STOPPED:case m.FRAG_LOADING:case m.PARSING:case m.PARSED:case m.ENDED:}}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(p.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.tracks;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){this.state===m.ENDED&&(this.state=m.IDLE),this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()}},{key:"onMediaEnded",value:function(){this.startPosition=this.lastCurrentTime=0}},{key:"onAudioTracksUpdated",value:function(e){p.logger.log("audio tracks updated"),this.tracks=e.audioTracks}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.state=m.PAUSED,this.waitingFragment=null,t?this.timer||(this.timer=setInterval(this.ontick,100)):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=m.IDLE,void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold)),this.tick()}},{key:"onAudioTrackLoaded",value:function(e){var t=e.details,r=e.id,a=this.tracks[r],i=t.totalduration,n=0;if(p.logger.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+i),t.live){var s=a.details;s&&t.fragments.length>0?(h.default.mergeDetails(s,t),n=t.fragments[0].start,t.PTSKnown?p.logger.log("live audio playlist sliding:"+n.toFixed(3)):p.logger.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,p.logger.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(a.details=t,!this.startFragRequested){if(-1===this.startPosition){var o=t.startTimeOffset;isNaN(o)?this.startPosition=0:(p.logger.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o)}this.nextLoadPosition=this.startPosition}this.state===m.WAITING_TRACK&&(this.state=m.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===m.KEY_LOADING&&(this.state=m.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===m.FRAG_LOADING&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var a=this.tracks[this.trackId],i=a.details,n=i.totalduration,s=t.level,o=t.sn,l=t.cc,u=this.config.defaultAudioCodec||a.audioCodec||"mp4a.40.2",c=this.stats=e.stats;if("initSegment"===o)this.state=m.IDLE,c.tparsed=c.tbuffered=performance.now(),i.initSegment.data=e.payload,this.hls.trigger(f.default.FRAG_BUFFERED,{stats:c,frag:t,id:"audio"}),this.tick();else{this.state=m.PARSING,this.appended=!1,this.demuxer||(this.demuxer=new d.default(this.hls,"audio"));var h=this.initPTS[l],g=i.initSegment?i.initSegment.data:[];if(i.initSegment||void 0!==h){this.pendingBuffering=!0,p.logger.log("Demuxing "+o+" of ["+i.startSN+" ,"+i.endSN+"],track "+s);this.demuxer.push(e.payload,g,u,null,t,n,!1,h)}else p.logger.log("unknown video PTS for continuity counter "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+i.startSN+" ,"+i.endSN+"],track "+s),this.waitingFragment=e,this.state=m.WAITING_INIT_PTS}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.PARSING){var a=e.tracks,i=void 0;if(a.video&&delete a.video,i=a.audio){i.levelCodec=i.codec,i.id=e.id,this.hls.trigger(f.default.BUFFER_CODECS,a),p.logger.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var n=i.initSegment;if(n){var s={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[s]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(f.default.BUFFER_APPENDING,s))}this.tick()}}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent,a=e.frag;if(r&&"audio"===e.id&&"audio"===e.type&&a.sn===r.sn&&a.level===r.level&&this.state===m.PARSING){var i=this.trackId,n=this.tracks[i],s=this.hls;isNaN(e.endPTS)&&(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),p.logger.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),h.default.updateFragPTSDTS(n.details,r,e.startPTS,e.endPTS);var o=this.audioSwitch,l=this.media,u=!1;if(o&&l)if(l.readyState){var d=l.currentTime;p.logger.log("switching audio track : currentTime:"+d),d>=e.startPTS&&(p.logger.log("switching audio track : flushing all audio"),this.state=m.BUFFER_FLUSHING,s.trigger(f.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),u=!0,this.audioSwitch=!1,s.trigger(f.default.AUDIO_TRACK_SWITCHED,{id:i}))}else this.audioSwitch=!1,s.trigger(f.default.AUDIO_TRACK_SWITCHED,{id:i});var c=this.pendingData;this.audioSwitch||([e.data1,e.data2].forEach(function(t){t&&t.length&&c.push({type:e.type,data:t,parent:"audio",content:"data"})}),!u&&c.length&&(c.forEach(function(e){t.state===m.PARSING&&(t.pendingBuffering=!0,t.hls.trigger(f.default.BUFFER_APPENDING,e))}),this.pendingData=[],this.appended=!0)),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.PARSING&&(this.stats.tparsed=performance.now(),this.state=m.PARSED,this._checkAppendedParsed())}},{key:"onBufferCreated",value:function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0)}},{key:"onBufferAppended",value:function(e){if("audio"===e.parent){var t=this.state;t!==m.PARSING&&t!==m.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==m.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=performance.now(),r.trigger(f.default.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var a=this.mediaBuffer?this.mediaBuffer:this.media;p.logger.log("audio buffered : "+g.default.toString(a.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(f.default.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=m.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case v.ErrorDetails.FRAG_LOAD_ERROR:case v.ErrorDetails.FRAG_LOAD_TIMEOUT:if(!e.fatal){var r=this.fragLoadError;r?r++:r=1;var a=this.config;if(r<=a.fragLoadingMaxRetry){this.fragLoadError=r,t.loadCounter=0;var i=Math.min(Math.pow(2,r-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);p.logger.warn("audioStreamController: frag loading failed, retry in "+i+" ms"),this.retryDate=performance.now()+i,this.state=m.FRAG_LOADING_WAITING_RETRY}else p.logger.error("audioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=m.ERROR}break;case v.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case v.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case v.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case v.ErrorDetails.KEY_LOAD_ERROR:case v.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==m.ERROR&&(this.state=e.fatal?m.ERROR:m.IDLE,p.logger.warn("audioStreamController: "+e.details+" while loading frag,switch to "+this.state+" state ..."));break;case v.ErrorDetails.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===m.PARSING||this.state===m.PARSED)){var n=this.mediaBuffer,s=this.media.currentTime;if(n&&u.default.isBuffered(n,s)&&u.default.isBuffered(n,s+.5)){var o=this.config;o.maxMaxBufferLength>=o.maxBufferLength&&(o.maxMaxBufferLength/=2,p.logger.warn("audio:reduce max buffer length to "+o.maxMaxBufferLength+"s"),this.fragLoadIdx+=2*o.fragLoadingLoopThreshold),this.state=m.IDLE}else p.logger.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=m.BUFFER_FLUSHING,this.hls.trigger(f.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}}},{key:"onBufferFlushed",value:function(){var e=this,t=this.pendingData;t&&t.length?(p.logger.log("appending pending audio data on Buffer Flushed"),t.forEach(function(t){e.hls.trigger(f.default.BUFFER_APPENDING,t)}),this.appended=!0,this.pendingData=[],this.state=m.PARSED):(this.state=m.IDLE,this.fragPrevious=null,this.tick())}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,p.logger.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}]),t}(c.default);r.default=E},{25:25,33:33,34:34,35:35,37:37,38:38,48:48,51:51,54:54,55:55}],7:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(54),f=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.MANIFEST_LOADING,l.default.MANIFEST_LOADED,l.default.AUDIO_TRACK_LOADED));return r.ticks=0,r.ontick=r.tick.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){u.default.prototype.destroy.call(this)}},{key:"tick",value:function(){1===++this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){this.updateTrack(this.trackId)}},{key:"onManifestLoading",value:function(){this.tracks=[],this.trackId=-1}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.audioTracks||[],a=!1;this.tracks=r,this.hls.trigger(l.default.AUDIO_TRACKS_UPDATED,{audioTracks:r});var i=0;r.forEach(function(e){if(e.default)return t.audioTrack=i,void(a=!0);i++}),!1===a&&r.length&&(d.logger.log("no default audio track defined, use first audio track as default"),this.audioTrack=0)}},{key:"onAudioTrackLoaded",value:function(e){e.id<this.tracks.length&&(d.logger.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.timer&&(this.timer=setInterval(this.ontick,1e3*e.details.targetduration)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))}},{key:"setAudioTrackInternal",value:function(e){if(e>=0&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,d.logger.log("switching to audioTrack "+e);var t=this.tracks[e],r=this.hls,a=t.type,i=t.url,n={id:e,type:a,url:i};r.trigger(l.default.AUDIO_TRACK_SWITCH,n),r.trigger(l.default.AUDIO_TRACK_SWITCHING,n);var s=t.details;!i||void 0!==s&&!0!==s.live||(d.logger.log("(re)loading playlist for audioTrack "+e),r.trigger(l.default.AUDIO_TRACK_LOADING,{url:i,id:e}))}}},{key:"updateTrack",value:function(e){if(e>=0&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,d.logger.log("updating audioTrack "+e);var t=this.tracks[e],r=t.url,a=t.details;!r||void 0!==a&&!0!==a.live||(d.logger.log("(re)loading playlist for audioTrack "+e),this.hls.trigger(l.default.AUDIO_TRACK_LOADING,{url:r,id:e}))}}},{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this.trackId},set:function(e){this.trackId===e&&void 0!==this.tracks[e].details||this.setAudioTrackInternal(e)}}]),t}(u.default);r.default=f},{34:34,35:35,54:54}],8:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(54),f=e(33),c=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.MEDIA_ATTACHING,l.default.MEDIA_DETACHING,l.default.MANIFEST_PARSED,l.default.BUFFER_RESET,l.default.BUFFER_APPENDING,l.default.BUFFER_CODECS,l.default.BUFFER_EOS,l.default.BUFFER_FLUSHING,l.default.LEVEL_PTS_UPDATED,l.default.LEVEL_UPDATED));return r._msDuration=null,r._levelDuration=null,r.onsbue=r.onSBUpdateEnd.bind(r),r.onsbe=r.onSBUpdateError.bind(r),r.pendingTracks={},r.tracks={},r}return s(t,e),o(t,[{key:"destroy",value:function(){u.default.prototype.destroy.call(this)}},{key:"onLevelPtsUpdated",value:function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var a=this.sourceBuffer.audio;if(Math.abs(a.timestampOffset-e.start)>.1){var i=a.updating;try{a.abort()}catch(e){i=!0,d.logger.warn("can not abort audio buffer: "+e)}i?this.audioTimestampOffset=e.start:(d.logger.warn("change mpeg audio timestamp offset from "+a.timestampOffset+" to "+e.start),a.timestampOffset=e.start)}}}},{key:"onManifestParsed",value:function(e){var t=e.audio,r=e.video,a=0;e.altAudio&&(t||r)&&(a=(t?1:0)+(r?1:0),d.logger.log(a+" sourceBuffer(s) expected")),this.sourceBufferNb=a}},{key:"onMediaAttaching",value:function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=URL.createObjectURL(r)}}},{key:"onMediaDetaching",value:function(){d.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){d.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(URL.revokeObjectURL(this.media.src),this.media.removeAttribute("src"),this.media.load()),this.mediaSource=null,this.media=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(l.default.MEDIA_DETACHED)}},{key:"onMediaSourceOpen",value:function(){d.logger.log("media source opened"),this.hls.trigger(l.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()}},{key:"checkPendingTracks",value:function(){var e=this.pendingTracks,t=Object.keys(e).length;t&&(this.sourceBufferNb<=t||0===this.sourceBufferNb)&&(this.createSourceBuffers(e),this.pendingTracks={},this.doAppending())}},{key:"onMediaSourceClose",value:function(){d.logger.log("media source closed")}},{key:"onMediaSourceEnded",value:function(){d.logger.log("media source ended")}},{key:"onSBUpdateEnd",value:function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;d.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var t=this.parent,r=this.segments.reduce(function(e,r){return r.parent===t?e+1:e},0);this.hls.trigger(l.default.BUFFER_APPENDED,{parent:t,pending:r}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()}},{key:"onSBUpdateError",value:function(e){d.logger.error("sourceBuffer error:",e),this.hls.trigger(l.default.ERROR,{type:f.ErrorTypes.MEDIA_ERROR,details:f.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferReset",value:function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}},{key:"onBufferCodecs",value:function(e){if(0===Object.keys(this.sourceBuffer).length){for(var t in e)this.pendingTracks[t]=e[t];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}}},{key:"createSourceBuffers",value:function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var a in e)if(!t[a]){var i=e[a],n=i.levelCodec||i.codec,s=i.container+";codecs="+n;d.logger.log("creating sourceBuffer("+s+")");try{var o=t[a]=r.addSourceBuffer(s);o.addEventListener("updateend",this.onsbue),o.addEventListener("error",this.onsbe),this.tracks[a]={codec:n,container:i.container},i.buffer=o}catch(e){d.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(l.default.ERROR,{type:f.ErrorTypes.MEDIA_ERROR,details:f.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(l.default.BUFFER_CREATED,{tracks:e})}},{key:"onBufferAppending",value:function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())}},{key:"onBufferAppendFail",value:function(e){d.logger.error("sourceBuffer error:",e.event),this.hls.trigger(l.default.ERROR,{type:f.ErrorTypes.MEDIA_ERROR,details:f.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferEos",value:function(e){var t=this.sourceBuffer,r=e.type;for(var a in t)r&&a!==r||t[a].ended||(t[a].ended=!0,d.logger.log(a+" sourceBuffer now EOS"));this.checkEos()}},{key:"checkEos",value:function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var a=e[r];if(!a.ended)return;if(a.updating)return void(this._needsEos=!0)}d.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){d.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1}},{key:"onBufferFlushing",value:function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()}},{key:"onLevelUpdated",value:function(e){var t=e.details;0!==t.fragments.length&&(this._levelDuration=t.totalduration+t.fragments[0].start,this.updateMediaElementDuration())}},{key:"updateMediaElementDuration",value:function(){var e=this.media,t=this.mediaSource,r=this.sourceBuffer,a=this._levelDuration;if(null!==a&&e&&t&&r&&0!==e.readyState&&"open"===t.readyState){for(var i in r)if(r[i].updating)return;null===this._msDuration&&(this._msDuration=t.duration);var n=e.duration;(a>this._msDuration&&a>n||n===1/0||isNaN(n))&&(d.logger.log("Updating mediasource duration to "+a.toFixed(3)),this._msDuration=t.duration=a)}}},{key:"doFlush",value:function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var a in r)t+=r[a].buffered.length}catch(e){d.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(l.default.BUFFER_FLUSHED)}}},{key:"doAppending",value:function(){var e=this.hls,t=this.sourceBuffer,r=this.segments;if(Object.keys(t).length){if(this.media.error)return this.segments=[],void d.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var a=r.shift();try{var i=t[a.type];i?i.updating?r.unshift(a):(i.ended=!1,this.parent=a.parent,i.appendBuffer(a.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(t){d.logger.error("error while trying to append buffer:"+t.message),r.unshift(a);var n={type:f.ErrorTypes.MEDIA_ERROR,parent:a.parent};if(22===t.code)return this.segments=[],n.details=f.ErrorDetails.BUFFER_FULL_ERROR,n.fatal=!1,void e.trigger(l.default.ERROR,n);if(this.appendError?this.appendError++:this.appendError=1,n.details=f.ErrorDetails.BUFFER_APPEND_ERROR,this.appendError>e.config.appendErrorMaxRetry)return d.logger.log("fail "+e.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],n.fatal=!0,void e.trigger(l.default.ERROR,n);n.fatal=!1,e.trigger(l.default.ERROR,n)}}}}},{key:"flushBuffer",value:function(e,t,r){var a,i,n,s,o,l,u=this.sourceBuffer;if(Object.keys(u).length){if(d.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var f in u)if(!r||f===r){if(a=u[f],a.ended=!1,a.updating)return d.logger.warn("cannot flush, sb updating in progress"),!1;try{for(i=0;i<a.buffered.length;i++)if(n=a.buffered.start(i),s=a.buffered.end(i),-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&t===Number.POSITIVE_INFINITY?(o=e,l=t):(o=Math.max(n,e),l=Math.min(s,t)),Math.min(l,s)-o>.5)return this.flushBufferCounter++,d.logger.log("flush "+f+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+this.media.currentTime),a.remove(o,l),!1}catch(e){d.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else d.logger.warn("abort flushing too many retries");d.logger.log("buffer flushed")}return!0}}]),t}(u.default);r.default=c},{33:33,34:34,35:35,54:54}],9:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=function(e){function t(e){return i(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.FPS_DROP_LEVEL_CAPPING,l.default.MEDIA_ATTACHING,l.default.MANIFEST_PARSED))}return s(t,e),o(t,[{key:"destroy",value:function(){this.hls.config.capLevelToPlayerSize&&(this.media=this.restrictedLevels=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))}},{key:"onFpsDropLevelCapping",value:function(e){t.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)}},{key:"onMediaAttaching",value:function(e){this.media=e.media instanceof HTMLVideoElement?e.media:null}},{key:"onManifestParsed",value:function(e){var t=this.hls;this.restrictedLevels=[],t.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=e.levels,t.firstLevel=this.getMaxLevel(e.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}},{key:"detectPlayerSize",value:function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}},{key:"getMaxLevel",value:function(e){var r=this;if(!this.levels)return-1;var a=this.levels.filter(function(a,i){return t.isLevelAllowed(i,r.restrictedLevels)&&i<=e});return t.getMaxLevelByMediaSize(a,this.mediaWidth,this.mediaHeight)}},{key:"mediaWidth",get:function(){var e=void 0,r=this.media;return r&&(e=r.width||r.clientWidth||r.offsetWidth,e*=t.contentScaleFactor),e}},{key:"mediaHeight",get:function(){var e=void 0,r=this.media;return r&&(e=r.height||r.clientHeight||r.offsetHeight,e*=t.contentScaleFactor),e}}],[{key:"isLevelAllowed",value:function(e){return-1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).indexOf(e)}},{key:"getMaxLevelByMediaSize",value:function(e,t,r){if(!e||e&&!e.length)return-1;for(var a=e.length-1,i=0;i<e.length;i+=1){var n=e[i];if((n.width>=t||n.height>=r)&&function(e,t){return!t||(e.width!==t.width||e.height!==t.height)}(n,e[i+1])){a=i;break}}return a}},{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}}]),t}(a(e(34)).default);r.default=u},{34:34,35:35}],10:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(54),f=function(e){function t(e){return i(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.MEDIA_ATTACHING))}return s(t,e),o(t,[{key:"destroy",value:function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1}},{key:"onMediaAttaching",value:function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))}},{key:"checkFPS",value:function(e,t,r){var a=performance.now();if(t){if(this.lastTime){var i=a-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/i,u=this.hls;if(u.trigger(l.default.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),o>0&&n>u.config.fpsDroppedMonitoringThreshold*s){var f=u.currentLevel;d.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+f),f>0&&(-1===u.autoLevelCapping||u.autoLevelCapping>=f)&&(f-=1,u.trigger(l.default.FPS_DROP_LEVEL_CAPPING,{level:f,droppedLevel:u.currentLevel}),u.autoLevelCapping=f,u.streamController.nextLevelSwitch())}}this.lastTime=a,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}},{key:"checkFPSInterval",value:function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}]),t}(u.default);r.default=f},{34:34,35:35,54:54}],11:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=a(e(27)),f=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.MEDIA_ATTACHED,l.default.MEDIA_DETACHING,l.default.FRAG_PARSING_METADATA));return r.id3Track=void 0,r.media=void 0,r}return s(t,e),o(t,[{key:"destroy",value:function(){u.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){this.media=e.media,this.media&&(this.id3Track=this.media.addTextTrack("metadata","id3"),this.id3Track.mode="hidden")}},{key:"onMediaDetaching",value:function(){this.media=void 0}},{key:"onFragParsingMetadata",value:function(e){for(var t=e.frag,r=e.samples,a=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,i=0;i<r.length;i++){var n=d.default.getID3Frames(r[i].data);if(n){var s=r[i].pts,o=i<r.length-1?r[i+1].pts:t.endPTS;s===o&&(o+=1e-4);for(var l=0;l<n.length;l++){var u=n[l];if(!d.default.isTimeStampFrame(u)){var f=new a(s,o,"");f.value=u,this.id3Track.addCue(f)}}}}}}]),t}(u.default);r.default=f},{27:27,34:34,35:35}],12:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(54),f=e(33),c=a(e(37)),h=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.MANIFEST_LOADED,l.default.LEVEL_LOADED,l.default.FRAG_LOADED,l.default.ERROR));return r.ontick=r.tick.bind(r),r._manualLevel=-1,r}return s(t,e),o(t,[{key:"destroy",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this._manualLevel=-1}},{key:"startLoad",value:function(){this.canload=!0;var e=this._levels;e&&e.forEach(function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)}),this.timer&&this.tick()}},{key:"stopLoad",value:function(){this.canload=!1}},{key:"onManifestLoaded",value:function(e){var t,r=[],a=[],i={},n=!1,s=!1,o=this.hls,u=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),c=function(e,t){return MediaSource.isTypeSupported(e+"/mp4;codecs="+t)};if(e.levels.forEach(function(e){e.videoCodec&&(n=!0),u&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(e.audioCodec||e.attrs&&e.attrs.AUDIO)&&(s=!0);var t=i[e.bitrate];void 0===t?(i[e.bitrate]=r.length,e.url=[e.url],e.urlId=0,r.push(e)):r[t].url.push(e.url)}),n&&s?r.forEach(function(e){e.videoCodec&&a.push(e)}):a=r,(a=a.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||c("audio",t))&&(!r||c("video",r))})).length){t=a[0].bitrate,a.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=a;for(var h=0;h<a.length;h++)if(a[h].bitrate===t){this._firstLevel=h,d.logger.log("manifest loaded,"+a.length+" level(s) found, first bitrate:"+t);break}o.trigger(l.default.MANIFEST_PARSED,{levels:a,firstLevel:this._firstLevel,stats:e.stats,audio:s,video:n,altAudio:e.audioTracks.length>0})}else o.trigger(l.default.ERROR,{type:f.ErrorTypes.MEDIA_ERROR,details:f.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:o.url,reason:"no level with compatible codecs found in manifest"})}},{key:"setLevelInternal",value:function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.timer&&(clearTimeout(this.timer),this.timer=null),this._level!==e){d.logger.log("switching to level "+e),this._level=e;var a=t[e];a.level=e,r.trigger(l.default.LEVEL_SWITCH,a),r.trigger(l.default.LEVEL_SWITCHING,a)}var i=t[e],n=i.details;if(!n||!0===n.live){var s=i.urlId;r.trigger(l.default.LEVEL_LOADING,{url:i.url[s],level:e,id:s})}}else r.trigger(l.default.ERROR,{type:f.ErrorTypes.OTHER_ERROR,details:f.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})}},{key:"onError",value:function(e){if(!e.fatal){var t=e.details,r=this.hls,a=void 0,i=void 0,n=!1;switch(t){case f.ErrorDetails.FRAG_LOAD_ERROR:case f.ErrorDetails.FRAG_LOAD_TIMEOUT:case f.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case f.ErrorDetails.KEY_LOAD_ERROR:case f.ErrorDetails.KEY_LOAD_TIMEOUT:a=e.frag.level;break;case f.ErrorDetails.LEVEL_LOAD_ERROR:case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:a=e.context.level,n=!0;break;case f.ErrorDetails.REMUX_ALLOC_ERROR:a=e.level}if(void 0!==a){(i=this._levels[a]).loadError?i.loadError++:i.loadError=1;var s=i.url.length;if(s>1&&i.loadError<s)i.urlId=(i.urlId+1)%s,i.details=void 0,d.logger.warn("level controller,"+t+" for level "+a+": switching to redundant stream id "+i.urlId);else if(-1===this._manualLevel&&a)d.logger.warn("level controller,"+t+": switch-down for next fragment"),r.nextAutoLevel=Math.max(0,a-1);else if(i&&i.details&&i.details.live)d.logger.warn("level controller,"+t+" on live stream, discard"),n&&(this._level=void 0);else if(t===f.ErrorDetails.LEVEL_LOAD_ERROR||t===f.ErrorDetails.LEVEL_LOAD_TIMEOUT){var o=r.media;if(o&&c.default.isBuffered(o,o.currentTime)&&c.default.isBuffered(o,o.currentTime+.5)){var l=r.config.levelLoadingRetryDelay;d.logger.warn("level controller,"+t+", but media buffered, retry in "+l+"ms"),this.timer=setTimeout(this.ontick,l),e.levelRetry=!0}else d.logger.error("cannot recover "+t+" error"),this._level=void 0,this.timer&&(clearTimeout(this.timer),this.timer=null),e.fatal=!0}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if(t&&"main"===t.type){var r=this._levels[t.level];r&&(r.loadError=0)}}},{key:"onLevelLoaded",value:function(e){var t=e.level;if(t===this._level){var r=this._levels[t];r.loadError=0;var a=e.details;if(a.live){var i=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),n=r.details;n&&a.endSN===n.endSN&&(i/=2,d.logger.log("same live playlist, reload twice faster")),i-=performance.now()-e.stats.trequest,i=Math.max(1e3,Math.round(i)),d.logger.log("live playlist, reload in "+i+" ms"),this.timer=setTimeout(this.ontick,i)}else this.timer=null}}},{key:"tick",value:function(){var e=this._level;if(void 0!==e&&this.canload){var t=this._levels[e];if(t&&t.url){var r=t.urlId;this.hls.trigger(l.default.LEVEL_LOADING,{url:t.url[r],level:e,id:r})}}}},{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this._level},set:function(e){var t=this._levels;t&&t.length>e&&(this._level===e&&void 0!==t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this._manualLevel},set:function(e){this._manualLevel=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this._manualLevel?this._manualLevel:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this._manualLevel&&(this.hls.nextAutoLevel=e)}}]),t}(u.default);r.default=h},{33:33,34:34,35:35,37:37,54:54}],13:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(48)),u=a(e(37)),d=a(e(25)),f=a(e(35)),c=a(e(34)),h=a(e(38)),g=a(e(55)),v=e(33),p=e(54),y={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR"},m=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,f.default.MEDIA_ATTACHED,f.default.MEDIA_DETACHING,f.default.MANIFEST_LOADING,f.default.MANIFEST_PARSED,f.default.LEVEL_LOADED,f.default.KEY_LOADED,f.default.FRAG_LOADED,f.default.FRAG_LOAD_EMERGENCY_ABORTED,f.default.FRAG_PARSING_INIT_SEGMENT,f.default.FRAG_PARSING_DATA,f.default.FRAG_PARSED,f.default.ERROR,f.default.AUDIO_TRACK_SWITCHING,f.default.AUDIO_TRACK_SWITCHED,f.default.BUFFER_CREATED,f.default.BUFFER_APPENDED,f.default.BUFFER_FLUSHED));return r.config=e.config,r.audioCodecSwap=!1,r.ticks=0,r._state=y.STOPPED,r.ontick=r.tick.bind(r),r}return s(t,e),o(t,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),c.default.prototype.destroy.call(this),this.state=y.STOPPED}},{key:"startLoad",value:function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var a=r.startLevel;-1===a&&(a=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=a,this.loadedmetadata=!1}t>0&&-1===e&&(p.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=y.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=y.STOPPED}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=y.STOPPED,this.forceStartLoad=!1}},{key:"tick",value:function(){1===++this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){switch(this.state){case y.ERROR:break;case y.BUFFER_FLUSHING:this.fragLoadError=0;break;case y.IDLE:this._doTickIdle();break;case y.WAITING_LEVEL:var e=this.levels[this.level];e&&e.details&&(this.state=y.IDLE);break;case y.FRAG_LOADING_WAITING_RETRY:var t=performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(p.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=y.IDLE);break;case y.ERROR:case y.STOPPED:case y.FRAG_LOADING:case y.PARSING:case y.PARSED:case y.ENDED:}this._checkBuffer(),this._checkFragmentChanged()}},{key:"_doTickIdle",value:function(){var e=this.hls,t=e.config,r=this.media;if(void 0===this.levelLastLoaded||r||!this.startFragRequested&&t.startFragPrefetch){var a=void 0;a=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var i=e.nextLoadLevel,n=this.levels[i];if(n){var s=n.bitrate,o=void 0;o=s?Math.max(8*t.maxBufferSize/s,t.maxBufferLength):t.maxBufferLength,o=Math.min(o,t.maxMaxBufferLength);var l=u.default.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,a,t.maxBufferHole),d=l.len;if(!(d>=o)){p.logger.trace("buffer length of "+d.toFixed(3)+" is below max of "+o.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=i;var c=n.details;if(void 0===c||c.live&&this.levelLastLoaded!==i)this.state=y.WAITING_LEVEL;else{var h=this.fragPrevious;if(!c.live&&h&&h.sn===c.endSN&&d&&!l.nextStart&&Math.min(r.duration,h.start+h.duration)-Math.max(l.end,h.start)<=Math.max(.2,h.duration)){var g={};return this.altAudio&&(g.type="video"),this.hls.trigger(f.default.BUFFER_EOS,g),void(this.state=y.ENDED)}this._fetchPayloadOrEos(a,l,c)}}}}}},{key:"_fetchPayloadOrEos",value:function(e,t,r){var a=this.fragPrevious,i=this.level,n=r.fragments,s=n.length;if(0!==s){var o=n[0].start,l=n[s-1].start+n[s-1].duration,u=t.end,d=void 0;if(r.initSegment&&!r.initSegment.data)d=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(s<f)return void p.logger.warn("Can not start playback of a level, reason: not enough fragments "+s+" < "+f);if(null===(d=this._ensureFragmentAtLivePoint(r,u,o,l,a,n,s)))return}else u<o&&(d=n[0]);d||(d=this._findFragment(o,a,s,n,u,l,r)),d&&this._loadFragmentOrKey(d,i,r,e,u)}}},{key:"_ensureFragmentAtLivePoint",value:function(e,t,r,a,i,n,s){var o=this.hls.config,l=this.media,u=void 0,d=void 0!==o.liveMaxLatencyDuration?o.liveMaxLatencyDuration:o.liveMaxLatencyDurationCount*e.targetduration;if(t<Math.max(r-o.maxFragLookUpTolerance,a-d)){var f=this.liveSyncPosition=this.computeLivePosition(r,e);p.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+f.toFixed(3)),t=f,l&&l.readyState&&l.duration>f&&(l.currentTime=f),this.nextLoadPosition=f}if(e.PTSKnown&&t>a&&l&&l.readyState)return null;if(this.startFragRequested&&!e.PTSKnown){if(i){var c=i.sn+1;c>=e.startSN&&c<=e.endSN&&(u=n[c-e.startSN],p.logger.log("live playlist, switching playlist, load frag with next SN: "+u.sn))}u||(u=n[Math.min(s-1,Math.round(s/2))],p.logger.log("live playlist, switching playlist, unknown, load middle frag : "+u.sn))}return u}},{key:"_findFragment",value:function(e,t,r,a,i,n,s){var o=this.hls.config,u=void 0,d=void 0,f=o.maxFragLookUpTolerance,c=t?a[t.sn-a[0].sn+1]:void 0,h=function(e){var t=Math.min(f,e.duration);return e.start+e.duration-t<=i?1:e.start-t>i&&e.start?-1:0};if(i<n?(i>n-f&&(f=0),d=c&&!h(c)?c:l.default.search(a,h)):d=a[r-1],d){var g=(u=d).sn-s.startSN,v=t&&u.level===t.level,y=a[g-1],m=a[g+1];if(t&&u.sn===t.sn)if(v&&!u.backtracked)if(u.sn<s.endSN){var E=t.deltaPTS;E&&E>o.maxBufferHole&&t.dropped&&g?(u=y,p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"),t.loadCounter--):(u=m,p.logger.log("SN just loaded, load next one: "+u.sn))}else u=null;else u.backtracked&&(m&&m.backtracked?(p.logger.warn("Already backtracked from fragment "+m.sn+", will not backtrack to fragment "+u.sn+". Loading fragment "+m.sn),u=m):(p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),u.dropped=0,y?(y.loadCounter&&y.loadCounter--,(u=y).backtracked=!0):g&&(u=null)))}return u}},{key:"_loadFragmentOrKey",value:function(e,t,r,a,i){var n=this.hls,s=n.config;if(!e.decryptdata||null==e.decryptdata.uri||null!=e.decryptdata.key){if(p.logger.log("Loading "+e.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+t+", currentTime:"+a.toFixed(3)+",bufferEnd:"+i.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,e.loadCounter){e.loadCounter++;var o=s.fragLoadingLoopThreshold;if(e.loadCounter>o&&Math.abs(this.fragLoadIdx-e.loadIdx)<o)return void n.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:e})}else e.loadCounter=1;return e.loadIdx=this.fragLoadIdx,this.fragCurrent=e,this.startFragRequested=!0,isNaN(e.sn)||(this.nextLoadPosition=e.start+e.duration),e.autoLevel=n.autoLevelEnabled,e.bitrateTest=this.bitrateTest,n.trigger(f.default.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new d.default(n,"main")),void(this.state=y.FRAG_LOADING)}p.logger.log("Loading key for "+e.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+t),this.state=y.KEY_LOADING,n.trigger(f.default.KEY_LOADING,{frag:e})}},{key:"getBufferedFrag",value:function(e){return l.default.search(this._bufferedFrags,function(t){return e<t.startPTS?-1:e>t.endPTS?1:0})}},{key:"followingBufferedFrag",value:function(e){return e?this.getBufferedFrag(e.endPTS+.5):null}},{key:"_checkFragmentChanged",value:function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>r.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=t),u.default.isBuffered(r,t)?e=this.getBufferedFrag(t):u.default.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var a=e;if(a!==this.fragPlaying){this.hls.trigger(f.default.FRAG_CHANGED,{frag:a});var i=a.level;this.fragPlaying&&this.fragPlaying.level===i||this.hls.trigger(f.default.LEVEL_SWITCHED,{level:i}),this.fragPlaying=a}}}},{key:"immediateLevelSwitch",value:function(){if(p.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e=this.media,t=void 0;e?(t=e.paused,e.pause()):t=!0,this.previouslyPaused=t}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}},{key:"immediateLevelSwitchEnd",value:function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,u.default.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())}},{key:"nextLevelSwitch",value:function(){var e=this.media;if(e&&e.readyState){var t=void 0,r=void 0,a=void 0;if(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,(r=this.getBufferedFrag(e.currentTime))&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),e.paused)t=0;else{var i=this.hls.nextLoadLevel,n=this.levels[i],s=this.fragLastKbps;t=s&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*s)+1:0}if((a=this.getBufferedFrag(e.currentTime+t))&&(a=this.followingBufferedFrag(a))){var o=this.fragCurrent;o&&o.loader&&o.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(a.maxStartPTS,Number.POSITIVE_INFINITY)}}}},{key:"flushMainBuffer",value:function(e,t){this.state=y.BUFFER_FLUSHING;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(f.default.BUFFER_FLUSHING,r)}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(p.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0,e.backtracked=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){var e=this.media,t=e?e.currentTime:void 0,r=this.config;isNaN(t)||p.logger.log("media seeking to "+t.toFixed(3));var a=this.mediaBuffer?this.mediaBuffer:e,i=u.default.bufferInfo(a,t,this.config.maxBufferHole);if(this.state===y.FRAG_LOADING){var n=this.fragCurrent;if(0===i.len&&n){var s=r.maxFragLookUpTolerance,o=n.start-s,l=n.start+n.duration+s;t<o||t>l?(n.loader&&(p.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=y.IDLE):p.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===y.ENDED&&(0===i.len&&(this.fragPrevious=0),this.state=y.IDLE);e&&(this.lastCurrentTime=t),this.state!==y.FRAG_LOADING&&void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*r.fragLoadingLoopThreshold),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=t),this.tick()}},{key:"onMediaSeeked",value:function(){var e=this.media,t=e?e.currentTime:void 0;isNaN(t)||p.logger.log("media seeked to "+t.toFixed(3)),this.tick()}},{key:"onMediaEnded",value:function(){p.logger.log("media ended"),this.startPosition=this.lastCurrentTime=0}},{key:"onManifestLoading",value:function(){p.logger.log("trigger BUFFER_RESET"),this.hls.trigger(f.default.BUFFER_RESET),this._bufferedFrags=[],this.stalled=!1,this.startPosition=this.lastCurrentTime=0}},{key:"onManifestParsed",value:function(e){var t,r=!1,a=!1;e.levels.forEach(function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(a=!0))}),this.audioCodecSwitch=r&&a,this.audioCodecSwitch&&p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startLevelLoaded=!1,this.startFragRequested=!1;var i=this.config;(i.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(i.startPosition)}},{key:"onLevelLoaded",value:function(e){var t=e.details,r=e.level,a=this.levels[r],i=t.totalduration,n=0;if(p.logger.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+i),this.levelLastLoaded=r,t.live){var s=a.details;s&&t.fragments.length>0?(h.default.mergeDetails(s,t),n=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(n,s),t.PTSKnown?p.logger.log("live playlist sliding:"+n.toFixed(3)):p.logger.log("live playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,p.logger.log("live playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(a.details=t,this.hls.trigger(f.default.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var o=t.startTimeOffset;isNaN(o)?t.live?(this.startPosition=this.computeLivePosition(n,t),p.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(o<0&&(p.logger.log("negative start time offset "+o+", count from end of last fragment"),o=n+i+o),p.logger.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===y.WAITING_LEVEL&&(this.state=y.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===y.KEY_LOADING&&(this.state=y.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===y.FRAG_LOADING&&t&&"main"===r.type&&r.level===t.level&&r.sn===t.sn){var a=e.stats,i=this.levels[t.level],n=i.details;if(p.logger.log("Loaded  "+t.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+t.level),this.bitrateTest=!1,this.stats=a,!0===r.bitrateTest&&this.hls.nextLoadLevel)this.state=y.IDLE,this.startFragRequested=!1,a.tparsed=a.tbuffered=performance.now(),this.hls.trigger(f.default.FRAG_BUFFERED,{stats:a,frag:t,id:"main"}),this.tick();else if("initSegment"===r.sn)this.state=y.IDLE,a.tparsed=a.tbuffered=performance.now(),n.initSegment.data=e.payload,this.hls.trigger(f.default.FRAG_BUFFERED,{stats:a,frag:t,id:"main"}),this.tick();else{this.state=y.PARSING;var s=n.totalduration,o=t.level,l=t.sn,u=this.config.defaultAudioCodec||i.audioCodec;this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),void 0===u&&(u=this.lastAudioCodec),u&&(u=-1!==u.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),this.pendingBuffering=!0,this.appended=!1,p.logger.log("Parsing "+l+" of ["+n.startSN+" ,"+n.endSN+"],level "+o+", cc "+t.cc);var c=this.demuxer;c||(c=this.demuxer=new d.default(this.hls,"main"));var h=this.media,g=!(h&&h.seeking)&&(n.PTSKnown||!n.live),v=n.initSegment?n.initSegment.data:[];c.push(e.payload,v,u,i.videoCodec,t,s,g,void 0)}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y.PARSING){var a,i,n=e.tracks;if(n.audio&&this.altAudio&&delete n.audio,i=n.audio){var s=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==i.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),-1!==o.indexOf("android")&&"audio/mpeg"!==i.container&&(s="mp4a.40.2",p.logger.log("Android: force audio codec to "+s)),i.levelCodec=s,i.id=e.id}(i=n.video)&&(i.levelCodec=this.levels[this.level].videoCodec,i.id=e.id),this.hls.trigger(f.default.BUFFER_CODECS,n);for(a in n){i=n[a],p.logger.log("main track:"+a+",container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var l=i.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(f.default.BUFFER_APPENDING,{type:a,data:l,parent:"main",content:"initSegment"}))}this.tick()}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent,a=e.frag;if(r&&"main"===e.id&&a.sn===r.sn&&a.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===y.PARSING){var i=this.levels[this.level],n=r;if(isNaN(e.endPTS)&&(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),p.logger.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),"video"===e.type)if(n.dropped=e.dropped,n.dropped){if(!n.backtracked)return p.logger.warn("missing video frame(s), backtracking fragment"),n.backtracked=!0,this.nextLoadPosition=e.startPTS,this.state=y.IDLE,this.fragPrevious=n,void this.tick();p.logger.warn("Already backtracked on this fragment, appending with the gap")}else n.backtracked=!1;var s=h.default.updateFragPTSDTS(i.details,n,e.startPTS,e.endPTS,e.startDTS,e.endDTS),o=this.hls;o.trigger(f.default.LEVEL_PTS_UPDATED,{details:i.details,level:this.level,drift:s,type:e.type,start:e.startPTS,end:e.endPTS}),[e.data1,e.data2].forEach(function(r){r&&r.length&&t.state===y.PARSING&&(t.appended=!0,t.pendingBuffering=!0,o.trigger(f.default.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))}),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y.PARSING&&(this.stats.tparsed=performance.now(),this.state=y.PARSED,this._checkAppendedParsed())}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url,r=e.id;if(!t){if(this.mediaBuffer!==this.media){p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(p.logger.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=y.IDLE}var i=this.hls;i.trigger(f.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),i.trigger(f.default.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}}},{key:"onAudioTrackSwitched",value:function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var a=this.videoBuffer;a&&this.mediaBuffer!==a&&(p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=a)}this.altAudio=r,this.tick()}},{key:"onBufferCreated",value:function(e){var t=e.tracks,r=void 0,a=void 0,i=!1;for(var n in t){var s=t[n];"main"===s.id?(a=n,r=s,"video"===n&&(this.videoBuffer=t[n].buffer)):i=!0}i&&r?(p.logger.log("alternate track found, use "+a+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media}},{key:"onBufferAppended",value:function(e){if("main"===e.parent){var t=this.state;t!==y.PARSING&&t!==y.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==y.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;p.logger.log("main buffered : "+g.default.toString(t.buffered));var r=this._bufferedFrags.filter(function(e){return u.default.isBuffered(t,(e.startPTS+e.endPTS)/2)});r.push(e),this._bufferedFrags=r.sort(function(e,t){return e.startPTS-t.startPTS}),this.fragPrevious=e;var a=this.stats;a.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*a.total/(a.tbuffered-a.tfirst)),this.hls.trigger(f.default.FRAG_BUFFERED,{stats:a,frag:e,id:"main"}),this.state=y.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=this.media,a=r&&u.default.isBuffered(r,r.currentTime)&&u.default.isBuffered(r,r.currentTime+.5);switch(e.details){case v.ErrorDetails.FRAG_LOAD_ERROR:case v.ErrorDetails.FRAG_LOAD_TIMEOUT:case v.ErrorDetails.KEY_LOAD_ERROR:case v.ErrorDetails.KEY_LOAD_TIMEOUT:if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var n=this.config;if(i<=n.fragLoadingMaxRetry||a||t.autoLevel&&t.level){this.fragLoadError=i,t.loadCounter=0;var s=Math.min(Math.pow(2,i-1)*n.fragLoadingRetryDelay,n.fragLoadingMaxRetryTimeout);p.logger.warn("mediaController: frag loading failed, retry in "+s+" ms"),this.retryDate=performance.now()+s,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.state=y.FRAG_LOADING_WAITING_RETRY}else p.logger.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=y.ERROR}break;case v.ErrorDetails.FRAG_LOOP_LOADING_ERROR:e.fatal||(a?(this._reduceMaxBufferLength(t.duration),this.state=y.IDLE):t.autoLevel&&0!==t.level||(e.fatal=!0,this.state=y.ERROR));break;case v.ErrorDetails.LEVEL_LOAD_ERROR:case v.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==y.ERROR&&(e.fatal?(this.state=y.ERROR,p.logger.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):e.levelRetry||this.state!==y.WAITING_LEVEL||(this.state=y.IDLE));break;case v.ErrorDetails.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==y.PARSING&&this.state!==y.PARSED||(a?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=y.IDLE):(p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}}},{key:"_reduceMaxBufferLength",value:function(e){var t=this.config;t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,p.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),this.fragLoadIdx+=2*t.fragLoadingLoopThreshold)}},{key:"_checkBuffer",value:function(){var e=this.media,t=this.config;if(e&&e.readyState){var r=e.currentTime,a=this.mediaBuffer?this.mediaBuffer:e,i=a.buffered;if(!this.loadedmetadata&&i.length){this.loadedmetadata=!0;var n=e.seeking?r:this.startPosition,s=u.default.isBuffered(a,n),o=i.start(0);(r!==n||!s&&Math.abs(n-o)<t.maxSeekHole)&&(p.logger.log("target start position:"+n),s||(n=o,p.logger.log("target start position not buffered, seek to buffered.start(0) "+n)),p.logger.log("adjust currentTime from "+r+" to "+n),e.currentTime=n)}else if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var l=u.default.bufferInfo(e,r,0),d=!(e.paused||e.ended||0===e.buffered.length);if(r!==this.lastCurrentTime)this.stallReported&&(p.logger.warn("playback not stuck anymore @"+r+", after "+Math.round(performance.now()-this.stalled)+"ms"),this.stallReported=!1),this.stalled=void 0,this.nudgeRetry=0;else if(d){var c=performance.now(),h=this.hls;if(this.stalled){var g=c-this.stalled,y=l.len,m=this.nudgeRetry||0;if(y<=.5&&g>1e3*t.lowBufferWatchdogPeriod){this.stallReported||(this.stallReported=!0,p.logger.warn("playback stalling in low buffer @"+r),h.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:y}));var E=l.nextStart,b=E-r;if(E&&b<t.maxSeekHole&&b>0){this.nudgeRetry=++m;var T=m*t.nudgeOffset;p.logger.log("adjust currentTime from "+e.currentTime+" to next buffered @ "+E+" + nudge "+T),e.currentTime=E+T,this.stalled=void 0,h.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,hole:E+T-r})}}else if(y>.5&&g>1e3*t.highBufferWatchdogPeriod)if(this.stallReported||(this.stallReported=!0,p.logger.warn("playback stalling in high buffer @"+r),h.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:y})),this.stalled=void 0,this.nudgeRetry=++m,m<t.nudgeMaxRetry){var k=e.currentTime,_=k+m*t.nudgeOffset;p.logger.log("adjust currentTime from "+k+" to "+_),e.currentTime=_,h.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else p.logger.error("still stuck in high buffer @"+r+" after "+t.nudgeMaxRetry+", raise fatal error"),h.trigger(f.default.ERROR,{type:v.ErrorTypes.MEDIA_ERROR,details:v.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}else this.stalled=c,this.stallReported=!1}}}}},{key:"onFragLoadEmergencyAborted",value:function(){this.state=y.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()}},{key:"onBufferFlushed",value:function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;this._bufferedFrags=this._bufferedFrags.filter(function(t){return u.default.isBuffered(e,(t.startPTS+t.endPTS)/2)}),this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=y.IDLE,this.fragPrevious=null}},{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}},{key:"computeLivePosition",value:function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,p.logger.log("main stream:"+t+"->"+e),this.hls.trigger(f.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}]),t}(c.default);r.default=m},{25:25,33:33,34:34,35:35,37:37,38:38,48:48,54:54,55:55}],14:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(54),f=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.ERROR,l.default.SUBTITLE_TRACKS_UPDATED,l.default.SUBTITLE_TRACK_SWITCH,l.default.SUBTITLE_TRACK_LOADED,l.default.SUBTITLE_FRAG_PROCESSED));return r.config=e.config,r.vttFragSNsProcessed={},r.vttFragQueues=void 0,r.currentlyProcessing=null,r.currentTrackId=-1,r}return s(t,e),o(t,[{key:"destroy",value:function(){u.default.prototype.destroy.call(this)}},{key:"clearVttFragQueues",value:function(){var e=this;this.vttFragQueues={},this.tracks.forEach(function(t){e.vttFragQueues[t.id]=[]})}},{key:"nextFrag",value:function(){if(null===this.currentlyProcessing&&this.currentTrackId>-1&&this.vttFragQueues[this.currentTrackId].length){var e=this.currentlyProcessing=this.vttFragQueues[this.currentTrackId].shift();this.hls.trigger(l.default.FRAG_LOADING,{frag:e})}}},{key:"onSubtitleFragProcessed",value:function(e){e.success&&this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),this.currentlyProcessing=null,this.nextFrag()}},{key:"onError",value:function(e){var t=e.frag;t&&"subtitle"!==t.type||this.currentlyProcessing&&(this.currentlyProcessing=null,this.nextFrag())}},{key:"onSubtitleTracksUpdated",value:function(e){var t=this;d.logger.log("subtitle tracks updated"),this.tracks=e.subtitleTracks,this.clearVttFragQueues(),this.vttFragSNsProcessed={},this.tracks.forEach(function(e){t.vttFragSNsProcessed[e.id]=[]})}},{key:"onSubtitleTrackSwitch",value:function(e){this.currentTrackId=e.id,this.clearVttFragQueues()}},{key:"onSubtitleTrackLoaded",value:function(e){var t=this.vttFragSNsProcessed[e.id],r=this.vttFragQueues[e.id],a=this.currentlyProcessing?this.currentlyProcessing.sn:-1,i=function(e){return t.indexOf(e.sn)>-1},n=function(e){return r.some(function(t){return t.sn===e.sn})};e.details.fragments.forEach(function(t){i(t)||t.sn===a||n(t)||(t.trackId=e.id,r.push(t))}),this.nextFrag()}}]),t}(u.default);r.default=f},{34:34,35:35,54:54}],15:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){for(var t=[],r=0;r<e.length;r++)"subtitles"===e[r].kind&&t.push(e[r]);return t}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=a(e(35)),d=a(e(34)),f=e(54),c=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MEDIA_ATTACHED,u.default.MEDIA_DETACHING,u.default.MANIFEST_LOADING,u.default.MANIFEST_LOADED,u.default.SUBTITLE_TRACK_LOADED));return r.tracks=[],r.trackId=-1,r.media=void 0,r}return s(t,e),l(t,[{key:"_onTextTracksChanged",value:function(){if(this.media){for(var e=-1,t=o(this.media.textTracks),r=0;r<t.length;r++)"showing"===t[r].mode&&(e=r);this.subtitleTrack=e}}},{key:"destroy",value:function(){d.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){this.media=e.media,this.media&&(this.trackChangeListener=this._onTextTracksChanged.bind(this),this.media.textTracks.addEventListener("change",this.trackChangeListener))}},{key:"onMediaDetaching",value:function(){this.media&&(this.media.textTracks.removeEventListener("change",this.trackChangeListener),this.media=void 0)}},{key:"onManifestLoading",value:function(){this.tracks=[],this.trackId=-1}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.subtitles||[],a=!1;this.tracks=r,this.trackId=-1,this.hls.trigger(u.default.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach(function(e){e.default&&(t.subtitleTrack=e.id,a=!0)})}},{key:"onTick",value:function(){var e=this.trackId,t=this.tracks[e];if(t){var r=t.details;void 0!==r&&!0!==r.live||(f.logger.log("(re)loading playlist for subtitle track "+e),this.hls.trigger(u.default.SUBTITLE_TRACK_LOADING,{url:t.url,id:e}))}}},{key:"onSubtitleTrackLoaded",value:function(e){var t=this;e.id<this.tracks.length&&(f.logger.log("subtitle track "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.timer&&(this.timer=setInterval(function(){t.onTick()},1e3*e.details.targetduration,this)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))}},{key:"setSubtitleTrackInternal",value:function(e){if(e>=0&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,f.logger.log("switching to subtitle track "+e);var t=this.tracks[e];this.hls.trigger(u.default.SUBTITLE_TRACK_SWITCH,{id:e});var r=t.details;void 0!==r&&!0!==r.live||(f.logger.log("(re)loading playlist for subtitle track "+e),this.hls.trigger(u.default.SUBTITLE_TRACK_LOADING,{url:t.url,id:e}))}}},{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&this.setSubtitleTrackInternal(e)}}]),t}(d.default);r.default=c},{34:34,35:35,54:54}],16:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}function l(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}function u(e,t,r,a){return Math.min(t,a)-Math.max(e,r)}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),f=a(e(35)),c=a(e(34)),h=a(e(49)),g=a(e(58)),v=e(54),p=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,f.default.MEDIA_ATTACHING,f.default.MEDIA_DETACHING,f.default.FRAG_PARSING_USERDATA,f.default.MANIFEST_LOADING,f.default.MANIFEST_LOADED,f.default.FRAG_LOADED,f.default.LEVEL_SWITCHING,f.default.INIT_PTS_FOUND));if(r.hls=e,r.config=e.config,r.enabled=!0,r.Cues=e.config.cueHandler,r.textTracks=[],r.tracks=[],r.unparsedVttFrags=[],r.initPTS=void 0,r.cueRanges=[],r.config.enableCEA708Captions){var a=r,s=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},l={newCue:function(e,t,r){if(!a.textTrack1){var i=a.getExistingTrack("1");if(i)a.textTrack1=i,o(a.textTrack1),s(a.textTrack1,a.media);else{var n=a.createTextTrack("captions",a.config.captionsTextTrack1Label,a.config.captionsTextTrack1LanguageCode);n&&(n.textTrack1=!0,a.textTrack1=n)}}a.addCues("textTrack1",e,t,r)}},u={newCue:function(e,t,r){if(!a.textTrack2){var i=a.getExistingTrack("2");if(i)a.textTrack2=i,o(a.textTrack2),s(a.textTrack2,a.media);else{var n=a.createTextTrack("captions",a.config.captionsTextTrack2Label,a.config.captionsTextTrack1LanguageCode);n&&(n.textTrack2=!0,a.textTrack2=n)}}a.addCues("textTrack2",e,t,r)}};r.cea608Parser=new h.default(0,l,u)}return r}return s(t,e),d(t,[{key:"addCues",value:function(e,t,r,a){for(var i=this.cueRanges,n=!1,s=i.length;s--;){var o=i[s],l=u(o[0],o[1],t,r);if(l>=0&&(o[0]=Math.min(o[0],t),o[1]=Math.max(o[1],r),n=!0,l/(r-t)>.5))return}n||i.push([t,r]),this.Cues.newCue(this[e],t,r,a)}},{key:"onInitPtsFound",value:function(e){var t=this;void 0===this.initPTS&&(this.initPTS=e.initPTS),this.unparsedVttFrags.length&&(this.unparsedVttFrags.forEach(function(e){t.onFragLoaded(e)}),this.unparsedVttFrags=[])}},{key:"getExistingTrack",value:function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var a=t.textTracks[r];if(!0===a["textTrack"+e])return a}return null}},{key:"createTextTrack",value:function(e,t,r){var a=this.media;if(a)return a.addTextTrack(e,t,r)}},{key:"destroy",value:function(){c.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(e){this.media=e.media}},{key:"onMediaDetaching",value:function(){o(this.textTrack1),o(this.textTrack2)}},{key:"onManifestLoading",value:function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0};var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)o(t[r])}}},{key:"onManifestLoaded",value:function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=void 0,this.cueRanges=[],this.config.enableWebVTT){this.tracks=e.subtitles||[];var r=this.media?this.media.textTracks:[];this.tracks.forEach(function(e,a){var i=void 0;if(a<r.length){var n=r[a];l(n,e)&&(i=n)}i||(i=t.createTextTrack("subtitles",e.name,e.lang)),i.mode=e.default?"showing":"hidden",t.textTracks.push(i)})}}},{key:"onLevelSwitching",value:function(){this.enabled="NONE"!==this.hls.currentLevel.closedCaptions}},{key:"onFragLoaded",value:function(e){var t=e.frag,r=e.payload;if("main"===t.type){var a=t.sn;if(a!==this.lastSn+1){var i=this.cea608Parser;i&&i.reset()}this.lastSn=a}else if("subtitle"===t.type)if(r.byteLength){if(void 0===this.initPTS)return void this.unparsedVttFrags.push(e);var n=this.vttCCs;n[t.cc]||(n[t.cc]={start:t.start,prevCC:this.prevCC,new:!0},this.prevCC=t.cc);var s=this.textTracks,o=this.hls;g.default.parse(r,this.initPTS,n,t.cc,function(e){var r=s[t.trackId];e.forEach(function(e){r.cues.getCueById(e.id)||r.addCue(e)}),o.trigger(f.default.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:t})},function(e){v.logger.log("Failed to parse VTT cue: "+e),o.trigger(f.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})})}else this.hls.trigger(f.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})}},{key:"onFragParsingUserdata",value:function(e){if(this.enabled&&this.config.enableCEA708Captions)for(var t=0;t<e.samples.length;t++){var r=this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts,r)}}},{key:"extractCea608Data",value:function(e){for(var t,r,a,i,n,s=31&e[0],o=2,l=[],u=0;u<s;u++)t=e[o++],r=127&e[o++],a=127&e[o++],i=0!=(4&t),n=3&t,0===r&&0===a||i&&0===n&&(l.push(r),l.push(a));return l}}]),t}(c.default);r.default=p},{34:34,35:35,49:49,54:54,58:58}],17:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(t,r){a(this,e),this.subtle=t,this.aesIV=r}return i(e,[{key:"decrypt",value:function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}]),e}();r.default=n},{}],18:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(){a(this,e),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return i(e,[{key:"uint8ArrayToUint32Array_",value:function(e){for(var t=new DataView(e),r=new Uint32Array(4),a=0;a<4;a++)r[a]=t.getUint32(4*a);return r}},{key:"initTable",value:function(){var e=this.sBox,t=this.invSBox,r=this.subMix,a=r[0],i=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],d=o[2],f=o[3],c=new Uint32Array(256),h=0,g=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var p=g^g<<1^g<<2^g<<3^g<<4;p=p>>>8^255&p^99,e[h]=p,t[p]=h;var y=c[h],m=c[y],E=c[m],b=257*c[p]^16843008*p;a[h]=b<<24|b>>>8,i[h]=b<<16|b>>>16,n[h]=b<<8|b>>>24,s[h]=b,b=16843009*E^65537*m^257*y^16843008*h,l[p]=b<<24|b>>>8,u[p]=b<<16|b>>>16,d[p]=b<<8|b>>>24,f[p]=b,h?(h=y^c[c[c[E^y]]],g^=c[c[g]]):h=g=1}}},{key:"expandKey",value:function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,a=0;a<t.length&&r;)r=t[a]===this.key[a],a++;if(!r){this.key=t;var i=this.keySize=t.length;if(4!==i&&6!==i&&8!==i)throw new Error("Invalid aes key size="+i);var n=this.ksRows=4*(i+6+1),s=void 0,o=void 0,l=this.keySchedule=new Uint32Array(n),u=this.invKeySchedule=new Uint32Array(n),d=this.sBox,f=this.rcon,c=this.invSubMix,h=c[0],g=c[1],v=c[2],p=c[3],y=void 0,m=void 0;for(s=0;s<n;s++)s<i?y=l[s]=t[s]:(m=y,s%i==0?(m=d[(m=m<<8|m>>>24)>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m],m^=f[s/i|0]<<24):i>6&&s%i==4&&(m=d[m>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m]),l[s]=y=(l[s-i]^m)>>>0);for(o=0;o<n;o++)s=n-o,m=3&o?l[s]:l[s-4],u[o]=o<4||s<=4?m:h[d[m>>>24]]^g[d[m>>>16&255]]^v[d[m>>>8&255]]^p[d[255&m]],u[o]=u[o]>>>0}}},{key:"networkToHostOrderSwap",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"decrypt",value:function(e,t,r){for(var a,i,n=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,l=this.invSubMix,u=l[0],d=l[1],f=l[2],c=l[3],h=this.uint8ArrayToUint32Array_(r),g=h[0],v=h[1],p=h[2],y=h[3],m=new Int32Array(e),E=new Int32Array(m.length),b=void 0,T=void 0,k=void 0,_=void 0,R=void 0,S=void 0,A=void 0,L=void 0,w=void 0,D=void 0,O=void 0,I=void 0,P=this.networkToHostOrderSwap;t<m.length;){for(w=P(m[t]),D=P(m[t+1]),O=P(m[t+2]),I=P(m[t+3]),R=w^s[0],S=I^s[1],A=O^s[2],L=D^s[3],a=4,i=1;i<n;i++)b=u[R>>>24]^d[S>>16&255]^f[A>>8&255]^c[255&L]^s[a],T=u[S>>>24]^d[A>>16&255]^f[L>>8&255]^c[255&R]^s[a+1],k=u[A>>>24]^d[L>>16&255]^f[R>>8&255]^c[255&S]^s[a+2],_=u[L>>>24]^d[R>>16&255]^f[S>>8&255]^c[255&A]^s[a+3],R=b,S=T,A=k,L=_,a+=4;b=o[R>>>24]<<24^o[S>>16&255]<<16^o[A>>8&255]<<8^o[255&L]^s[a],T=o[S>>>24]<<24^o[A>>16&255]<<16^o[L>>8&255]<<8^o[255&R]^s[a+1],k=o[A>>>24]<<24^o[L>>16&255]<<16^o[R>>8&255]<<8^o[255&S]^s[a+2],_=o[L>>>24]<<24^o[R>>16&255]<<16^o[S>>8&255]<<8^o[255&A]^s[a+3],a+=3,E[t]=P(b^g),E[t+1]=P(_^v),E[t+2]=P(k^p),E[t+3]=P(T^y),g=w,v=D,p=O,y=I,t+=4}return E.buffer}},{key:"destroy",value:function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0}}]),e}();r.default=n},{}],19:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(17)),o=a(e(20)),l=a(e(18)),u=e(33),d=e(54),f=function(){function e(t,r){i(this,e),this.observer=t,this.config=r,this.logEnabled=!0;try{var a=crypto||self.crypto;this.subtle=a.subtle||a.webkitSubtle}catch(e){}this.disableWebCrypto=!this.subtle}return n(e,[{key:"isSync",value:function(){return this.disableWebCrypto&&this.config.enableSoftwareAES}},{key:"decrypt",value:function(e,t,r,a){var i=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(d.logger.log("JS AES decrypt"),this.logEnabled=!1);var n=this.decryptor;n||(this.decryptor=n=new l.default),n.expandKey(t),a(n.decrypt(e,0,r))}else{this.logEnabled&&(d.logger.log("WebCrypto AES decrypt"),this.logEnabled=!1);var u=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new o.default(u,t)),this.fastAesKey.expandKey().then(function(n){new s.default(u,r).decrypt(e,n).catch(function(n){i.onWebCryptoError(n,e,t,r,a)}).then(function(e){a(e)})}).catch(function(n){i.onWebCryptoError(n,e,t,r,a)})}}},{key:"onWebCryptoError",value:function(e,t,r,a,i){this.config.enableSoftwareAES?(d.logger.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,a,i)):(d.logger.error("decrypting error : "+e.message),this.observer.trigger(Event.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))}},{key:"destroy",value:function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)}}]),e}();r.default=f},{17:17,18:18,20:20,33:33,54:54}],20:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(t,r){a(this,e),this.subtle=t,this.key=r}return i(e,[{key:"expandKey",value:function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}]),e}();r.default=n},{}],21:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(22)),o=e(54),l=a(e(27)),u=function(){function e(t,r,a){i(this,e),this.observer=t,this.config=a,this.remuxer=r}return n(e,[{key:"resetInitSegment",value:function(e,t,r,a){this._audioTrack={container:"audio/adts",type:"audio",id:-1,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:a,inputTimeScale:9e4}}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,a){for(var i=this._audioTrack,n=l.default.getID3Data(e,0),u=90*l.default.getTimeStamp(n),d=0,f=u,c=e.length,h=n.length,g=[{pts:f,dts:f,data:n}];h<c-1;)if(s.default.isHeader(e,h)&&h+5<c){s.default.initTrackConfig(i,this.observer,e,h,i.manifestCodec);var v=s.default.appendFrame(i,e,h,u,d);if(!v){o.logger.log("Unable to parse AAC frame");break}h+=v.length,f=v.sample.pts,d++}else l.default.isHeader(e,h)?(n=l.default.getID3Data(e,h),g.push({pts:f,dts:f,data:n}),h+=n.length):h++;this.remuxer.remux(i,{samples:[]},{samples:g,inputTimeScale:9e4},{samples:[]},t,r,a)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){var t,r,a=l.default.getID3Data(e,0);if(a&&void 0!==l.default.getTimeStamp(a))for(t=a.length,r=Math.min(e.length-1,t+100);t<r;t++)if(s.default.probe(e,t))return o.logger.log("ADTS sync word found !"),!0;return!1}}]),e}();r.default=u},{22:22,27:27,54:54}],22:[function(e,t,r){"use strict";var a=e(54),i=e(33),n={getAudioConfig:function(e,t,r,n){var s,o,l,u,d,f=navigator.userAgent.toLowerCase(),c=n,h=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((o=(60&t[r+2])>>>2)>h.length-1))return u=(1&t[r+2])<<2,u|=(192&t[r+3])>>>6,a.logger.log("manifest codec:"+n+",ADTS data:type:"+s+",sampleingIndex:"+o+"["+h[o]+"Hz],channelConfig:"+u),/firefox/i.test(f)?o>=6?(s=5,d=new Array(4),l=o-3):(s=2,d=new Array(2),l=o):-1!==f.indexOf("android")?(s=2,d=new Array(2),l=o):(s=5,d=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&o>=6?l=o-3:((n&&-1!==n.indexOf("mp4a.40.2")&&o>=6&&1===u||!n&&1===u)&&(s=2,d=new Array(2)),l=o)),d[0]=s<<3,d[0]|=(14&o)>>1,d[1]|=(1&o)<<7,d[1]|=u<<3,5===s&&(d[1]|=(14&l)>>1,d[2]=(1&l)<<7,d[2]|=8,d[3]=0),{config:d,samplerate:h[o],channelCount:u,codec:"mp4a.40."+s,manifestCodec:c};e.trigger(Event.ERROR,{type:i.ErrorTypes.MEDIA_ERROR,details:i.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+o})},isHeaderPattern:function(e,t){return 255===e[t]&&240==(246&e[t+1])},getHeaderLength:function(e,t){return 1&e[t+1]?7:9},getFullFrameLength:function(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.getHeaderLength(e,t);t+5<e.length&&(r=this.getFullFrameLength(e,t));var a=t+r;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1},initTrackConfig:function(e,t,r,i,n){if(!e.samplerate){var s=this.getAudioConfig(t,r,i,n);e.config=s.config,e.samplerate=s.samplerate,e.channelCount=s.channelCount,e.codec=s.codec,e.manifestCodec=s.manifestCodec,a.logger.log("parsed codec:"+e.codec+",rate:"+s.samplerate+",nb channel:"+s.channelCount)}},getFrameDuration:function(e){return 9216e4/e},appendFrame:function(e,t,r,a,i){var n=this.getFrameDuration(e.samplerate),s=this.parseFrameHeader(t,r,a,i,n);if(s){var o=s.stamp,l=s.headerLength,u=s.frameLength,d={unit:t.subarray(r+l,r+l+u),pts:o,dts:o};return e.samples.push(d),e.len+=u,{sample:d,length:u+l}}},parseFrameHeader:function(e,t,r,a,i){var n,s,o,l=e.length;if(n=this.getHeaderLength(e,t),s=this.getFullFrameLength(e,t),(s-=n)>0&&t+n+s<=l)return o=r+a*i,{headerLength:n,frameLength:s,stamp:o}}};t.exports=n},{33:33,54:54}],23:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(35)),o=e(33),l=a(e(19)),u=a(e(21)),d=a(e(29)),f=a(e(32)),c=a(e(28)),h=a(e(45)),g=a(e(46)),v=function(){function e(t,r,a,n){i(this,e),this.observer=t,this.typeSupported=r,this.config=a,this.vendor=n}return n(e,[{key:"destroy",value:function(){var e=this.demuxer;e&&e.destroy()}},{key:"push",value:function(e,t,r,a,i,n,o,u,d,f,c,h){if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var g=this.decrypter;null==g&&(g=this.decrypter=new l.default(this.observer,this.config));var v,p=this;try{v=performance.now()}catch(e){v=Date.now()}g.decrypt(e,t.key.buffer,t.iv.buffer,function(e){var l;try{l=performance.now()}catch(e){l=Date.now()}p.observer.trigger(s.default.FRAG_DECRYPTED,{stats:{tstart:v,tdecrypt:l}}),p.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,i,n,o,u,d,f,c,h)})}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,i,n,o,u,d,f,c,h)}},{key:"pushDecrypted",value:function(e,t,r,a,i,n,l,v,p,y,m,E){var b=this.demuxer;if(!b||l&&!this.probe(e)){for(var T=this.observer,k=this.typeSupported,_=this.config,R=[{demux:u.default,remux:h.default},{demux:c.default,remux:h.default},{demux:f.default,remux:h.default},{demux:d.default,remux:g.default}],S=0,A=R.length;S<A;S++){var L=R[S],w=L.demux.probe;if(w(e)){var D=this.remuxer=new L.remux(T,_,k,this.vendor);b=new L.demux(T,D,_,k),this.probe=w;break}}if(!b)return void T.trigger(s.default.ERROR,{type:o.ErrorTypes.MEDIA_ERROR,details:o.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=b}var O=this.remuxer;(l||v)&&(b.resetInitSegment(r,a,i,y),O.resetInitSegment()),l&&(b.resetTimeStamp(E),O.resetTimeStamp(E)),"function"==typeof b.setDecryptData&&b.setDecryptData(t),b.append(e,n,p,m)}}]),e}();r.default=v},{19:19,21:21,28:28,29:29,32:32,33:33,35:35,45:45,46:46}],24:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var i=a(e(23)),n=a(e(35)),s=e(54),o=a(e(1));r.default=function(e){var t=new o.default;t.trigger=function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];t.emit.apply(t,[e,e].concat(a))},t.off=function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];t.removeListener.apply(t,[e].concat(a))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",function(a){var n=a.data;switch(n.cmd){case"init":var o=JSON.parse(n.config);e.demuxer=new i.default(t,n.typeSupported,o,n.vendor);try{(0,s.enableLogs)(!0===o.debug)}catch(e){}r("init",null);break;case"demux":e.demuxer.push(n.data,n.decryptdata,n.initSegment,n.audioCodec,n.videoCodec,n.timeOffset,n.discontinuity,n.trackSwitch,n.contiguous,n.duration,n.accurateTimeOffset,n.defaultInitPTS)}}),t.on(n.default.FRAG_DECRYPTED,r),t.on(n.default.FRAG_PARSING_INIT_SEGMENT,r),t.on(n.default.FRAG_PARSED,r),t.on(n.default.ERROR,r),t.on(n.default.FRAG_PARSING_METADATA,r),t.on(n.default.FRAG_PARSING_USERDATA,r),t.on(n.default.INIT_PTS_FOUND,r),t.on(n.default.FRAG_PARSING_DATA,function(t,r){var a=[],i={event:t,data:r};r.data1&&(i.data1=r.data1.buffer,a.push(r.data1.buffer),delete r.data1),r.data2&&(i.data2=r.data2.buffer,a.push(r.data2.buffer),delete r.data2),e.postMessage(i,a)})}},{1:1,23:23,35:35,54:54}],25:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(35)),o=a(e(23)),l=a(e(24)),u=e(54),d=e(33),f=a(e(1)),c=function(){function t(r,a){i(this,t),this.hls=r,this.id=a;var n=this.observer=new f.default,c=r.config;n.trigger=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n.emit.apply(n,[e,e].concat(r))},n.off=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n.removeListener.apply(n,[e].concat(r))};var h=function(e,t){(t=t||{}).frag=this.frag,t.id=this.id,r.trigger(e,t)}.bind(this);n.on(s.default.FRAG_DECRYPTED,h),n.on(s.default.FRAG_PARSING_INIT_SEGMENT,h),n.on(s.default.FRAG_PARSING_DATA,h),n.on(s.default.FRAG_PARSED,h),n.on(s.default.ERROR,h),n.on(s.default.FRAG_PARSING_METADATA,h),n.on(s.default.FRAG_PARSING_USERDATA,h),n.on(s.default.INIT_PTS_FOUND,h);var g={mp4:MediaSource.isTypeSupported("video/mp4"),mpeg:MediaSource.isTypeSupported("audio/mpeg"),mp3:MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')},v=navigator.vendor;if(c.enableWorker&&"undefined"!=typeof Worker){u.logger.log("demuxing in webworker");var p=void 0;try{var y=e(3);p=this.w=y(l.default),this.onwmsg=this.onWorkerMessage.bind(this),p.addEventListener("message",this.onwmsg),p.onerror=function(e){r.trigger(s.default.ERROR,{type:d.ErrorTypes.OTHER_ERROR,details:d.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:e.message+" ("+e.filename+":"+e.lineno+")"}})},p.postMessage({cmd:"init",typeSupported:g,vendor:v,id:a,config:JSON.stringify(c)})}catch(e){u.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),p&&URL.revokeObjectURL(p.objectURL),this.demuxer=new o.default(n,g,c,v),this.w=void 0}}else this.demuxer=new o.default(n,g,c,v)}return n(t,[{key:"destroy",value:function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)}},{key:"push",value:function(e,t,r,a,i,n,s,o){var l=this.w,d=isNaN(i.startDTS)?i.start:i.startDTS,f=i.decryptdata,c=this.frag,h=!(c&&i.cc===c.cc),g=!(c&&i.level===c.level),v=c&&i.sn===c.sn+1,p=!g&&v;if(h&&u.logger.log(this.id+":discontinuity detected"),g&&u.logger.log(this.id+":switch detected"),this.frag=i,l)l.postMessage({cmd:"demux",data:e,decryptdata:f,initSegment:t,audioCodec:r,videoCodec:a,timeOffset:d,discontinuity:h,trackSwitch:g,contiguous:p,duration:n,accurateTimeOffset:s,defaultInitPTS:o},[e]);else{var y=this.demuxer;y&&y.push(e,f,t,r,a,d,h,g,p,n,s,o)}}},{key:"onWorkerMessage",value:function(e){var t=e.data,r=this.hls;switch(t.event){case"init":URL.revokeObjectURL(this.w.objectURL);break;case s.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}}}]),t}();r.default=c},{1:1,23:23,24:24,3:3,33:33,35:35,54:54}],26:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=e(54),s=function(){function e(t){a(this,e),this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}return i(e,[{key:"loadWord",value:function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,a=new Uint8Array(4),i=Math.min(4,t);if(0===i)throw new Error("no bytes available");a.set(e.subarray(r,r+i)),this.word=new DataView(a.buffer).getUint32(0),this.bitsAvailable=8*i,this.bytesAvailable-=i}},{key:"skipBits",value:function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}},{key:"readBits",value:function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&n.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),t=e-t,t>0&&this.bitsAvailable?r<<t|this.readBits(t):r}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){return this.readBits(8)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"skipScalingList",value:function(e){var t,r=8,a=8;for(t=0;t<e;t++)0!==a&&(a=(r+this.readEG()+256)%256),r=0===a?r:a}},{key:"readSPS",value:function(){var e,t,r,a,i,n,s,o=0,l=0,u=0,d=0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),g=this.readBoolean.bind(this),v=this.skipBits.bind(this),p=this.skipEG.bind(this),y=this.skipUEG.bind(this),m=this.skipScalingList.bind(this);if(f(),e=f(),c(5),v(3),f(),y(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var E=h();if(3===E&&v(1),y(),y(),v(1),g())for(n=3!==E?8:12,s=0;s<n;s++)g()&&m(s<6?16:64)}y();var b=h();if(0===b)h();else if(1===b)for(v(1),p(),p(),t=h(),s=0;s<t;s++)p();y(),v(1),r=h(),a=h(),0===(i=c(1))&&v(1),v(1),g()&&(o=h(),l=h(),u=h(),d=h());var T=[1,1];if(g()&&g())switch(f()){case 1:T=[1,1];break;case 2:T=[12,11];break;case 3:T=[10,11];break;case 4:T=[16,11];break;case 5:T=[40,33];break;case 6:T=[24,11];break;case 7:T=[20,11];break;case 8:T=[32,11];break;case 9:T=[80,33];break;case 10:T=[18,11];break;case 11:T=[15,11];break;case 12:T=[64,33];break;case 13:T=[160,99];break;case 14:T=[4,3];break;case 15:T=[3,2];break;case 16:T=[2,1];break;case 255:T=[f()<<8|f(),f()<<8|f()]}return{width:Math.ceil(16*(r+1)-2*o-2*l),height:(2-i)*(a+1)*16-(i?2:4)*(u+d),pixelRatio:T}}},{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}]),e}();r.default=s},{54:54}],27:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(){a(this,e)}return i(e,null,[{key:"isHeader",value:function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128}},{key:"isFooter",value:function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128}},{key:"getID3Data",value:function(t,r){for(var a=r,i=0;e.isHeader(t,r);)i+=10,i+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(i+=10),r+=i;if(i>0)return t.subarray(a,a+i)}},{key:"_readSize",value:function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]}},{key:"getTimeStamp",value:function(t){for(var r=e.getID3Frames(t),a=0;a<r.length;a++){var i=r[a];if(e.isTimeStampFrame(i))return e._readTimeStamp(i)}}},{key:"isTimeStampFrame",value:function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info}},{key:"_getFrameData",value:function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),a=e._readSize(t,4);return{type:r,size:a,data:t.subarray(10,10+a)}}},{key:"getID3Frames",value:function(t){for(var r=0,a=[];e.isHeader(t,r);){for(var i=e._readSize(t,r+6),n=(r+=10)+i;r+8<n;){var s=e._getFrameData(t.subarray(r)),o=e._decodeFrame(s);o&&a.push(o),r+=s.size+10}e.isFooter(t,r)&&(r+=10)}return a}},{key:"_decodeFrame",value:function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0}},{key:"_readTimeStamp",value:function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],a=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return a/=45,r&&(a+=47721858.84),Math.round(a)}}},{key:"_decodePrivFrame",value:function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data),a=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:a.buffer}}}},{key:"_decodeTextFrame",value:function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,a=e._utf8ArrayToStr(t.data.subarray(r));r+=a.length+1;var i=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:a,data:i}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}}},{key:"_decodeURLFrame",value:function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,a=e._utf8ArrayToStr(t.data.subarray(r));r+=a.length+1;var i=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:a,data:i}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}}},{key:"_utf8ArrayToStr",value:function(e){for(var t=void 0,r=void 0,a="",i=0,n=e.length;i<n;){var s=e[i++];switch(s>>4){case 0:return a;case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(s);break;case 12:case 13:t=e[i++],a+=String.fromCharCode((31&s)<<6|63&t);break;case 14:t=e[i++],r=e[i++],a+=String.fromCharCode((15&s)<<12|(63&t)<<6|(63&r)<<0)}}return a}}]),e}();r.default=n},{}],28:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(27)),o=e(54),l=a(e(30)),u=function(){function e(t,r,a){i(this,e),this.observer=t,this.config=a,this.remuxer=r}return n(e,[{key:"resetInitSegment",value:function(e,t,r,a){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:a,inputTimeScale:9e4}}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,a){for(var i=s.default.getID3Data(e,0),n=90*s.default.getTimeStamp(i),o=i.length,u=e.length,d=0,f=0,c=this._audioTrack,h=[{pts:n,dts:n,data:i}];o<u;)if(l.default.isHeader(e,o)){var g=l.default.appendFrame(c,e,o,n,d);if(!g)break;o+=g.length,f=g.sample.pts,d++}else s.default.isHeader(e,o)?(i=s.default.getID3Data(e,o),h.push({pts:f,dts:f,data:i}),o+=i.length):o++;this.remuxer.remux(c,{samples:[]},{samples:h,inputTimeScale:9e4},{samples:[]},t,r,a)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){var t,r,a=s.default.getID3Data(e,0);if(a&&void 0!==s.default.getTimeStamp(a))for(t=a.length,r=Math.min(e.length-1,t+100);t<r;t++)if(l.default.probe(e,t))return o.logger.log("MPEG Audio sync word found !"),!0;return!1}}]),e}();r.default=u},{27:27,30:30,54:54}],29:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(e(35)),s=Math.pow(2,32)-1,o=function(){function e(t,r){a(this,e),this.observer=t,this.remuxer=r}return i(e,[{key:"resetTimeStamp",value:function(e){this.initPTS=e}},{key:"resetInitSegment",value:function(t,r,a,i){if(t&&t.byteLength){var s=this.initData=e.parseInitSegment(t),o={};s.audio&&(o.audio={container:"audio/mp4",codec:r,initSegment:i?t:null}),s.video&&(o.video={container:"video/mp4",codec:a,initSegment:i?t:null}),this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT,{tracks:o})}else r&&(this.audioCodec=r),a&&(this.videoCodec=a)}},{key:"append",value:function(t,r,a,i){var s=this.initData;s||(this.resetInitSegment(t,this.audioCodec,this.videoCodec),s=this.initData);var o=void 0,l=this.initPTS;if(void 0===l){var u=e.getStartDTS(s,t);this.initPTS=l=u-r,this.observer.trigger(n.default.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(s,t,l),o=e.getStartDTS(s,t),this.remuxer.remux(s.audio,s.video,null,null,o,a,i,t)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(t){if(t.length>=8){var r=e.bin2str(t.subarray(4,8));return["moof","ftyp","styp"].indexOf(r)>=0}return!1}},{key:"bin2str",value:function(e){return String.fromCharCode.apply(null,e)}},{key:"readUint32",value:function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r}},{key:"writeUint32",value:function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}},{key:"findBox",value:function(t,r){var a,i,n,s,o,l,u,d=[];if(t.data?(l=t.start,s=t.end,t=t.data):(l=0,s=t.byteLength),!r.length)return null;for(a=l;a<s;)i=e.readUint32(t,a),n=e.bin2str(t.subarray(a+4,a+8)),u=i>1?a+i:s,n===r[0]&&(1===r.length?d.push({data:t,start:a+8,end:u}):(o=e.findBox({data:t,start:a+8,end:u},r.slice(1))).length&&(d=d.concat(o))),a=u;return d}},{key:"parseInitSegment",value:function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach(function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var i=a.data[a.start],n=0===i?12:20,s=e.readUint32(a,n),o=e.findBox(t,["mdia","mdhd"])[0];if(o){n=0===(i=o.data[o.start])?12:20;var l=e.readUint32(o,n),u=e.findBox(t,["mdia","hdlr"])[0];if(u){var d={soun:"audio",vide:"video"}[e.bin2str(u.data.subarray(u.start+8,u.start+12))];d&&(r[s]={timescale:l,type:d},r[d]={timescale:l,id:s})}}}}),r}},{key:"getStartDTS",value:function(t,r){var a,i,n;return a=e.findBox(r,["moof","traf"]),i=[].concat.apply([],a.map(function(r){return e.findBox(r,["tfhd"]).map(function(a){var i,n,s;return i=e.readUint32(a,4),n=t[i].timescale||9e4,s=e.findBox(r,["tfdt"]).map(function(t){var r,a;return r=t.data[t.start],a=e.readUint32(t,4),1===r&&(a*=Math.pow(2,32),a+=e.readUint32(t,8)),a})[0],(s=s||1/0)/n})})),n=Math.min.apply(null,i),isFinite(n)?n:0}},{key:"offsetStartDTS",value:function(t,r,a){e.findBox(r,["moof","traf"]).map(function(r){return e.findBox(r,["tfhd"]).map(function(i){var n=e.readUint32(i,4),o=t[n].timescale||9e4;e.findBox(r,["tfdt"]).map(function(t){var r=t.data[t.start],i=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,i-a*o);else{i*=Math.pow(2,32),i+=e.readUint32(t,8),i-=a*o;var n=Math.floor(i/(s+1)),l=Math.floor(i%(s+1));e.writeUint32(t,4,n),e.writeUint32(t,8,l)}})})})}}]),e}();r.default=o},{35:35}],30:[function(e,t,r){"use strict";var a={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],appendFrame:function(e,t,r,a,i){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var s=a+i*(10368e4/n.sampleRate),o={unit:t.subarray(r,r+n.frameLength),pts:s,dts:s};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(o),e.len+=n.frameLength,{sample:o,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,i=e[t+1]>>1&3,n=e[t+2]>>4&15,s=e[t+2]>>2&3,o=!!(2&e[t+2]);if(1!==r&&0!==n&&15!==n&&3!==s){var l=3===r?3-i:3===i?3:4,u=1e3*a.BitratesMap[14*l+n-1],d=3===r?0:2===r?1:2,f=a.SamplingRateMap[3*d+s],c=o?1:0;return{sampleRate:f,channelCount:e[t+3]>>6==3?1:2,frameLength:3===i?(3===r?12:6)*u/f+c<<2:(3===r?144:72)*u/f+c|0}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),a=4;r&&r.frameLength&&(a=r.frameLength);var i=t+a;if(i===e.length||i+1<e.length&&this.isHeaderPattern(e,i))return!0}return!1}};t.exports=a},{}],31:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(e(19)),s=function(){function e(t,r,i,s){a(this,e),this.decryptdata=i,this.discardEPB=s,this.decrypter=new n.default(t,r)}return i(e,[{key:"decryptBuffer",value:function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)}},{key:"decryptAacSample",value:function(e,t,r,a){var i=e[t].unit,n=i.subarray(16,i.length-i.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,function(n){n=new Uint8Array(n),i.set(n,16),a||o.decryptAacSamples(e,t+1,r)})}},{key:"decryptAacSamples",value:function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var a=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,a),!a)return}}}},{key:"getAvcEncryptedData",value:function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),a=0,i=32;i<=e.length-16;i+=160,a+=16)r.set(e.subarray(i,i+16),a);return r}},{key:"getAvcDecryptedUnit",value:function(e,t){t=new Uint8Array(t);for(var r=0,a=32;a<=e.length-16;a+=160,r+=16)e.set(t.subarray(r,r+16),a);return e}},{key:"decryptAvcSample",value:function(e,t,r,a,i,n){var s=this.discardEPB(i.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,function(o){i.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(e,t,r+1,a)})}},{key:"decryptAvcSamples",value:function(e,t,r,a){for(;;t++,r=0){if(t>=e.length)return void a();for(var i=e[t].units;!(r>=i.length);r++){var n=i[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,a,n,s),!s)return}}}}}]),e}();r.default=s},{19:19}],32:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(22)),o=a(e(30)),l=a(e(35)),u=a(e(26)),d=a(e(31)),f=e(54),c=e(33),h=function(){function e(t,r,a,n){i(this,e),this.observer=t,this.config=a,this.typeSupported=n,this.remuxer=r,this.sampleAes=null}return n(e,[{key:"setDecryptData",value:function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new d.default(this.observer,this.config,e,this.discardEPB):this.sampleAes=null}},{key:"resetInitSegment",value:function(e,t,r,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack={container:"video/mp2t",type:"video",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:0},this._audioTrack={container:"video/mp2t",type:"audio",id:-1,inputTimeScale:9e4,duration:a,sequenceNumber:0,samples:[],len:0,isAAC:!0},this._id3Track={type:"id3",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this._txtTrack={type:"text",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=t,this.videoCodec=r,this._duration=a}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,a){var i,n,s,o,u,d=e.length,h=!1;this.contiguous=r;var g=this.pmtParsed,v=this._avcTrack,p=this._audioTrack,y=this._id3Track,m=v.id,E=p.id,b=y.id,T=this._pmtId,k=v.pesData,_=p.pesData,R=y.pesData,S=this._parsePAT,A=this._parsePMT,L=this._parsePES,w=this._parseAVCPES.bind(this),D=this._parseAACPES.bind(this),O=this._parseMPEGPES.bind(this),I=this._parseID3PES.bind(this);for(d-=d%188,i=0;i<d;i+=188)if(71===e[i]){if(n=!!(64&e[i+1]),s=((31&e[i+1])<<8)+e[i+2],(48&e[i+3])>>4>1){if((o=i+5+e[i+4])===i+188)continue}else o=i+4;switch(s){case m:n&&(k&&(u=L(k))&&w(u,!1),k={data:[],size:0}),k&&(k.data.push(e.subarray(o,i+188)),k.size+=i+188-o);break;case E:n&&(_&&(u=L(_))&&(p.isAAC?D(u):O(u)),_={data:[],size:0}),_&&(_.data.push(e.subarray(o,i+188)),_.size+=i+188-o);break;case b:n&&(R&&(u=L(R))&&I(u),R={data:[],size:0}),R&&(R.data.push(e.subarray(o,i+188)),R.size+=i+188-o);break;case 0:n&&(o+=e[o]+1),T=this._pmtId=S(e,o);break;case T:n&&(o+=e[o]+1);var P=A(e,o,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(m=P.avc)>0&&(v.id=m),(E=P.audio)>0&&(p.id=E,p.isAAC=P.isAAC),(b=P.id3)>0&&(y.id=b),h&&!g&&(f.logger.log("reparse from beginning"),h=!1,i=-188),g=this.pmtParsed=!0;break;case 17:case 8191:break;default:h=!0}}else this.observer.trigger(l.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});k&&(u=L(k))?(w(u,!0),v.pesData=null):v.pesData=k,_&&(u=L(_))?(p.isAAC?D(u):O(u),p.pesData=null):(_&&_.size&&f.logger.log("last AAC PES packet truncated,might overlap between fragments"),p.pesData=_),R&&(u=L(R))?(I(u),y.pesData=null):y.pesData=R,null==this.sampleAes?this.remuxer.remux(p,v,y,this._txtTrack,t,r,a):this.decryptAndRemux(p,v,y,this._txtTrack,t,r,a)}},{key:"decryptAndRemux",value:function(e,t,r,a,i,n,s){if(e.samples&&e.isAAC){var o=this;this.sampleAes.decryptAacSamples(e.samples,0,function(){o.decryptAndRemuxAvc(e,t,r,a,i,n,s)})}else this.decryptAndRemuxAvc(e,t,r,a,i,n,s)}},{key:"decryptAndRemuxAvc",value:function(e,t,r,a,i,n,s){if(t.samples){var o=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,function(){o.remuxer.remux(e,t,r,a,i,n,s)})}else this.remuxer.remux(e,t,r,a,i,n,s)}},{key:"destroy",value:function(){this._initPTS=this._initDTS=void 0,this._duration=0}},{key:"_parsePAT",value:function(e,t){return(31&e[t+10])<<8|e[t+11]}},{key:"_parsePMT",value:function(e,t,r,a){var i,n,s={audio:-1,avc:-1,id3:-1,isAAC:!0};for(i=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<i;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!a){f.logger.log("unkown stream type:"+e[t]);break}case 15:-1===s.audio&&(s.audio=n);break;case 21:-1===s.id3&&(s.id3=n);break;case 219:if(!a){f.logger.log("unkown stream type:"+e[t]);break}case 27:-1===s.avc&&(s.avc=n);break;case 3:case 4:r?-1===s.audio&&(s.audio=n,s.isAAC=!1):f.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:f.logger.warn("HEVC stream type found, not supported for now");break;default:f.logger.log("unkown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return s}},{key:"_parsePES",value:function(e){var t,r,a,i,n,s,o,l,u=0,d=e.data;if(!e||0===e.size)return null;for(;d[0].length<19&&d.length>1;){var c=new Uint8Array(d[0].length+d[1].length);c.set(d[0]),c.set(d[1],d[0].length),d[0]=c,d.splice(1,1)}if(t=d[0],1===(t[0]<<16)+(t[1]<<8)+t[2]){if((a=(t[4]<<8)+t[5])&&a>e.size-6)return null;192&(r=t[7])&&((s=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2)>4294967295&&(s-=8589934592),64&r?((o=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>4294967295&&(o-=8589934592),s-o>54e5&&(f.logger.warn(Math.round((s-o)/9e4)+"s delta between PTS and DTS, align them"),s=o)):o=s),l=(i=t[8])+9,e.size-=l,n=new Uint8Array(e.size);for(var h=0,g=d.length;h<g;h++){var v=(t=d[h]).byteLength;if(l){if(l>v){l-=v;continue}t=t.subarray(l),v-=l,l=0}n.set(t,u),u+=v}return a&&(a-=i+3),{data:n,pts:s,dts:o,len:a}}return null}},{key:"pushAccesUnit",value:function(e,t){if(e.units.length&&e.frame){var r=t.samples,a=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(a||this.contiguous)?(e.id=a,r.push(e)):t.dropped++}e.debug.length&&f.logger.log(e.pts+"/"+e.dts+":"+e.debug)}},{key:"_parseAVCPES",value:function(e,t){var r,a,i,n=this,s=this._avcTrack,o=this._parseAVCNALu(e.data),l=this.avcSample,d=!1;e.data=null,o.forEach(function(t){switch(t.type){case 1:a=!0,l.frame=!0;var o=t.data;if(d&&o.length>4){var f=new u.default(o).readSliceType();2!==f&&4!==f&&7!==f&&9!==f||(l.key=!0)}break;case 5:a=!0,l||(l=n.avcSample=n._createAVCSample(!0,e.pts,e.dts,"")),l.key=!0,l.frame=!0;break;case 6:a=!0,(r=new u.default(n.discardEPB(t.data))).readUByte();for(var c=0,h=0,g=!1,v=0;!g&&r.bytesAvailable>1;){c=0;do{c+=v=r.readUByte()}while(255===v);h=0;do{h+=v=r.readUByte()}while(255===v);if(4===c&&0!==r.bytesAvailable){if(g=!0,181===r.readUByte()&&49===r.readUShort()&&1195456820===r.readUInt()&&3===r.readUByte()){var p=r.readUByte(),y=31&p,m=[p,r.readUByte()];for(i=0;i<y;i++)m.push(r.readUByte()),m.push(r.readUByte()),m.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:m})}}else if(h<r.bytesAvailable)for(i=0;i<h;i++)r.readUByte()}break;case 7:if(a=!0,d=!0,!s.sps){var E=(r=new u.default(t.data)).readSPS();s.width=E.width,s.height=E.height,s.pixelRatio=E.pixelRatio,s.sps=[t.data],s.duration=n._duration;var b=t.data.subarray(1,4),T="avc1.";for(i=0;i<3;i++){var k=b[i].toString(16);k.length<2&&(k="0"+k),T+=k}s.codec=T}break;case 8:a=!0,s.pps||(s.pps=[t.data]);break;case 9:a=!1,l&&n.pushAccesUnit(l,s),l=n.avcSample=n._createAVCSample(!1,e.pts,e.dts,"");break;case 12:a=!1;break;default:a=!1,l&&(l.debug+="unknown NAL "+t.type+" ")}l&&a&&l.units.push(t)}),t&&l&&(this.pushAccesUnit(l,s),this.avcSample=null)}},{key:"_createAVCSample",value:function(e,t,r,a){return{key:e,pts:t,dts:r,units:[],debug:a}}},{key:"_insertSampleInOrder",value:function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var a=r-1;a>=0;a--)if(t.pts<e[a].pts){e.splice(a,0,t);break}}else e.push(t)}},{key:"_getLastNalUnit",value:function(){var e=this.avcSample,t=void 0;if(!e||0===e.units.length){var r=this._avcTrack.samples;e=r[r.length-1]}if(e){var a=e.units;t=a[a.length-1]}return t}},{key:"_parseAVCNALu",value:function(e){var t,r,a,i,n=0,s=e.byteLength,o=this._avcTrack,l=o.naluState||0,u=l,d=[],f=-1;for(-1===l&&(f=0,i=31&e[0],l=0,n=1);n<s;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){if(f>=0)a={data:e.subarray(f,n-l-1),type:i},d.push(a);else{var c=this._getLastNalUnit();if(c&&(u&&n<=4-u&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-u)),(r=n-l-1)>0)){var h=new Uint8Array(c.data.byteLength+r);h.set(c.data,0),h.set(e.subarray(0,r),c.data.byteLength),c.data=h}}n<s?(f=n,i=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;if(f>=0&&l>=0&&(a={data:e.subarray(f,s),type:i,state:l},d.push(a)),0===d.length){var g=this._getLastNalUnit();if(g){var v=new Uint8Array(g.data.byteLength+e.byteLength);v.set(g.data,0),v.set(e,g.data.byteLength),g.data=v}}return o.naluState=l,d}},{key:"discardEPB",value:function(e){for(var t,r,a=e.byteLength,i=[],n=1;n<a-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(i.push(n+2),n+=2):n++;if(0===i.length)return e;t=a-i.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===i[0]&&(s++,i.shift()),r[n]=e[s];return r}},{key:"_parseAACPES",value:function(e){var t,r,a,i,n,o=this._audioTrack,u=e.data,d=e.pts,h=this.aacOverFlow,g=this.aacLastPTS;if(h){var v=new Uint8Array(h.byteLength+u.byteLength);v.set(h,0),v.set(u,h.byteLength),u=v}for(a=0,n=u.length;a<n-1&&!s.default.isHeader(u,a);a++);if(a){var p,y;if(a<n-1?(p="AAC PES did not start with ADTS header,offset:"+a,y=!1):(p="no ADTS header found in AAC PES",y=!0),f.logger.warn("parsing error:"+p),this.observer.trigger(l.default.ERROR,{type:c.ErrorTypes.MEDIA_ERROR,details:c.ErrorDetails.FRAG_PARSING_ERROR,fatal:y,reason:p}),y)return}if(s.default.initTrackConfig(o,this.observer,u,a,this.audioCodec),r=0,t=s.default.getFrameDuration(o.samplerate),h&&g){var m=g+t;Math.abs(m-d)>1&&(f.logger.log("AAC: align PTS for overlapping frames by "+Math.round((m-d)/90)),d=m)}for(;a<n;)if(s.default.isHeader(u,a)&&a+5<n){var E=s.default.appendFrame(o,u,a,d,r);if(!E)break;a+=E.length,i=E.sample.pts,r++}else a++;h=a<n?u.subarray(a,n):null,this.aacOverFlow=h,this.aacLastPTS=i}},{key:"_parseMPEGPES",value:function(e){for(var t=e.data,r=t.length,a=0,i=0,n=e.pts;i<r;)if(o.default.isHeader(t,i)){var s=o.default.appendFrame(this._audioTrack,t,i,n,a);if(!s)break;i+=s.length,a++}else i++}},{key:"_parseID3PES",value:function(e){this._id3Track.samples.push(e)}}],[{key:"probe",value:function(e){return e.length>=564&&71===e[0]&&71===e[188]&&71===e[376]}}]),e}();r.default=h},{22:22,26:26,30:30,31:31,33:33,35:35,54:54}],33:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},r.ErrorDetails={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException",WEBVTT_EXCEPTION:"webVTTException"}},{}],34:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=e(54),o=e(33),l=function(e){return e&&e.__esModule?e:{default:e}}(e(35)),u=function(){function e(t){a(this,e),this.hls=t,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,i=Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];this.handledEvents=i,this.useGenericHandler=!0,this.registerListeners()}return n(e,[{key:"destroy",value:function(){this.unregisterListeners()}},{key:"isEventHandler",value:function(){return"object"===i(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}},{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if("hlsEventGeneric"===e)throw new Error("Forbidden event name: "+e);this.hls.on(e,this.onEvent)},this)}},{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)},this)}},{key:"onEvent",value:function(e,t){this.onEventGeneric(e,t)}},{key:"onEventGeneric",value:function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){s.logger.error("internal error happened while processing "+e+":"+t.message),this.hls.trigger(l.default.ERROR,{type:o.ErrorTypes.OTHER_ERROR,details:o.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}}}]),e}();r.default=u},{33:33,35:35,54:54}],35:[function(e,t,r){"use strict";t.exports={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCH:"hlsLevelSwitch",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCH:"hlsAudioTrackSwitch",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},{}],36:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(){a(this,e)}return i(e,null,[{key:"getSilentFrame",value:function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null}}]),e}();r.default=n},{}],37:[function(e,t,r){"use strict";var a={isBuffered:function(e,t){if(e)for(var r=e.buffered,a=0;a<r.length;a++)if(t>=r.start(a)&&t<=r.end(a))return!0;return!1},bufferInfo:function(e,t,r){if(e){var a,i=e.buffered,n=[];for(a=0;a<i.length;a++)n.push({start:i.start(a),end:i.end(a)});return this.bufferedInfo(n,t,r)}return{len:0,start:t,end:t,nextStart:void 0}},bufferedInfo:function(e,t,r){var a,i,n,s,o,l=[];for(e.sort(function(e,t){var r=e.start-t.start;return r||t.end-e.end}),o=0;o<e.length;o++){var u=l.length;if(u){var d=l[u-1].end;e[o].start-d<r?e[o].end>d&&(l[u-1].end=e[o].end):l.push(e[o])}else l.push(e[o])}for(o=0,a=0,i=n=t;o<l.length;o++){var f=l[o].start,c=l[o].end;if(t+r>=f&&t<c)i=f,a=(n=c)-t;else if(t+r<f){s=f;break}}return{len:a,start:i,end:n,nextStart:s}}};t.exports=a},{}],38:[function(e,t,r){"use strict";var a=e(54),i={mergeDetails:function(e,t){var r,n=Math.max(e.startSN,t.startSN)-t.startSN,s=Math.min(e.endSN,t.endSN)-t.startSN,o=t.startSN-e.startSN,l=e.fragments,u=t.fragments,d=0;if(s<n)t.PTSKnown=!1;else{for(var f=n;f<=s;f++){var c=l[o+f],h=u[f];h&&c&&(d=c.cc-h.cc,isNaN(c.startPTS)||(h.start=h.startPTS=c.startPTS,h.endPTS=c.endPTS,h.duration=c.duration,h.backtracked=c.backtracked,h.dropped=c.dropped,r=h))}if(d)for(a.logger.log("discontinuity sliding from playlist, take drift into account"),f=0;f<u.length;f++)u[f].cc+=d;if(r)i.updateFragPTSDTS(t,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS);else if(o>=0&&o<l.length){var g=l[o].start;for(f=0;f<u.length;f++)u[f].start+=g}t.PTSKnown=e.PTSKnown}},updateFragPTSDTS:function(e,t,r,a,n,s){var o=r;if(!isNaN(t.startPTS)){var l=Math.abs(t.startPTS-r);isNaN(t.deltaPTS)?t.deltaPTS=l:t.deltaPTS=Math.max(l,t.deltaPTS),o=Math.max(r,t.startPTS),r=Math.min(r,t.startPTS),a=Math.max(a,t.endPTS),n=Math.min(n,t.startDTS),s=Math.max(s,t.endDTS)}var u=r-t.start;t.start=t.startPTS=r,t.maxStartPTS=o,t.endPTS=a,t.startDTS=n,t.endDTS=s,t.duration=a-r;var d=t.sn;if(!e||d<e.startSN||d>e.endSN)return 0;var f,c,h;for(f=d-e.startSN,t=(c=e.fragments)[f],h=f;h>0;h--)i.updatePTS(c,h,h-1);for(h=f;h<c.length-1;h++)i.updatePTS(c,h,h+1);return e.PTSKnown=!0,u},updatePTS:function(e,t,r){var i=e[t],n=e[r],s=n.startPTS;isNaN(s)?n.start=r>t?i.start+i.duration:Math.max(i.start-n.duration,0):r>t?(i.duration=s-i.start,i.duration<0&&a.logger.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(n.duration=i.start-s,n.duration<0&&a.logger.warn("negative duration computed for frag "+n.sn+",level "+n.level+", there should be some duration drift between playlist and fragment!"))}};t.exports=i},{54:54}],39:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(2)),o=a(e(35)),l=e(33),u=a(e(43)),d=a(e(41)),f=a(e(42)),c=a(e(13)),h=a(e(12)),g=a(e(11)),v=e(54),p=a(e(1)),y=e(4),m=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e);var a=e.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var n in a)n in r||(r[n]=a[n]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0,v.enableLogs)(r.debug),this.config=r,this._autoLevelCapping=-1;var s=this.observer=new p.default;s.trigger=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];s.emit.apply(s,[e,e].concat(r))},s.off=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];s.removeListener.apply(s,[e].concat(r))},this.on=s.on.bind(s),this.off=s.off.bind(s),this.trigger=s.trigger.bind(s);var o=this.abrController=new r.abrController(this),l=new r.bufferController(this),y=new r.capLevelController(this),m=new r.fpsController(this),E=new u.default(this),b=new d.default(this),T=new f.default(this),k=new g.default(this),_=[this.levelController=new h.default(this),this.streamController=new c.default(this)],R=r.audioStreamController;R&&_.push(new R(this)),this.networkControllers=_;var S=[E,b,T,o,l,y,m,k];if(R=r.audioTrackController){var A=new R(this);this.audioTrackController=A,S.push(A)}if(R=r.subtitleTrackController){var L=new R(this);this.subtitleTrackController=L,S.push(L)}[r.subtitleStreamController,r.timelineController].forEach(function(e){e&&S.push(new e(t))}),this.coreComponents=S}return n(e,null,[{key:"isSupported",value:function(){var e=window.MediaSource=window.MediaSource||window.WebKitMediaSource,t=window.SourceBuffer=window.SourceBuffer||window.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),a=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return r&&a}},{key:"version",get:function(){return"0.7.10"}},{key:"Events",get:function(){return o.default}},{key:"ErrorTypes",get:function(){return l.ErrorTypes}},{key:"ErrorDetails",get:function(){return l.ErrorDetails}},{key:"DefaultConfig",get:function(){return e.defaultConfig?e.defaultConfig:y.hlsDefaultConfig},set:function(t){e.defaultConfig=t}}]),n(e,[{key:"destroy",value:function(){v.logger.log("destroy"),this.trigger(o.default.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(e){e.destroy()}),this.url=null,this.observer.removeAllListeners(),this._autoLevelCapping=-1}},{key:"attachMedia",value:function(e){v.logger.log("attachMedia"),this.media=e,this.trigger(o.default.MEDIA_ATTACHING,{media:e})}},{key:"detachMedia",value:function(){v.logger.log("detachMedia"),this.trigger(o.default.MEDIA_DETACHING),this.media=null}},{key:"loadSource",value:function(e){e=s.default.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),v.logger.log("loadSource:"+e),this.url=e,this.trigger(o.default.MANIFEST_LOADING,{url:e})}},{key:"startLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;v.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(t){t.startLoad(e)})}},{key:"stopLoad",value:function(){v.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})}},{key:"swapAudioCodec",value:function(){v.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}},{key:"recoverMediaError",value:function(){v.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)}},{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){v.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){v.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){v.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){v.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){v.logger.log("set startLevel:"+e);var t=this;-1!==e&&(e=Math.max(e,t.minAutoLevel)),t.levelController.startLevel=e}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){v.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this,t=e.levels,r=e.config.minAutoBitrate,a=t?t.length:0,i=0;i<a;i++)if((t[i].realBitrate?Math.max(t[i].realBitrate,t[i].bitrate):t[i].bitrate)>r)return i;return 0}},{key:"maxAutoLevel",get:function(){var e=this,t=e.levels,r=e.autoLevelCapping;return-1===r&&t&&t.length?t.length-1:r}},{key:"nextAutoLevel",get:function(){var e=this;return Math.min(Math.max(e.abrController.nextAutoLevel,e.minAutoLevel),e.maxAutoLevel)},set:function(e){var t=this;t.abrController.nextAutoLevel=Math.max(t.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}}]),e}();r.default=m},{1:1,11:11,12:12,13:13,2:2,33:33,35:35,4:4,41:41,42:42,43:43,54:54}],40:[function(e,t,r){"use strict";t.exports=e(39).default},{39:39}],41:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(33),f=e(54),c=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.FRAG_LOADING));return r.loaders={},r}return s(t,e),o(t,[{key:"destroy",value:function(){var e=this.loaders;for(var t in e){var r=e[t];r&&r.destroy()}this.loaders={},u.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag,r=t.type,a=this.loaders[r],i=this.hls.config;t.loaded=0,a&&(f.logger.warn("abort previous fragment loader for type:"+r),a.abort()),a=this.loaders[r]=t.loader=void 0!==i.fLoader?new i.fLoader(i):new i.loader(i);var n=void 0,s=void 0,o=void 0;n={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var l=t.byteRangeStartOffset,u=t.byteRangeEndOffset;isNaN(l)||isNaN(u)||(n.rangeStart=l,n.rangeEnd=u),s={timeout:i.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:i.fragLoadingMaxRetryTimeout},o={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},a.load(n,s,o)}},{key:"loadsuccess",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(l.default.FRAG_LOADED,{payload:i,frag:n,stats:t,networkDetails:a})}},{key:"loaderror",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=t.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(l.default.ERROR,{type:d.ErrorTypes.NETWORK_ERROR,details:d.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})}},{key:"loadtimeout",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=t.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(l.default.ERROR,{type:d.ErrorTypes.NETWORK_ERROR,details:d.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})}},{key:"loadprogress",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t.frag;i.loaded=e.loaded,this.hls.trigger(l.default.FRAG_LOAD_PROGRESS,{frag:i,stats:e,networkDetails:a})}}]),t}(u.default);r.default=c},{33:33,34:34,35:35,54:54}],42:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(35)),u=a(e(34)),d=e(33),f=e(54),c=function(e){function t(e){i(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,l.default.KEY_LOADING));return r.loaders={},r.decryptkey=null,r.decrypturl=null,r}return s(t,e),o(t,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},u.default.prototype.destroy.call(this)}},{key:"onKeyLoading",value:function(e){var t=e.frag,r=t.type,a=this.loaders[r],i=t.decryptdata,n=i.uri;if(n!==this.decrypturl||null===this.decryptkey){var s=this.hls.config;a&&(f.logger.warn("abort previous key loader for type:"+r),a.abort()),t.loader=this.loaders[r]=new s.loader(s),this.decrypturl=n,this.decryptkey=null;var o=void 0,u=void 0,d=void 0;o={url:n,frag:t,responseType:"arraybuffer"},u={timeout:s.fragLoadingTimeOut,maxRetry:s.fragLoadingMaxRetry,retryDelay:s.fragLoadingRetryDelay,maxRetryDelay:s.fragLoadingMaxRetryTimeout},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(o,u,d)}else this.decryptkey&&(i.key=this.decryptkey,this.hls.trigger(l.default.KEY_LOADED,{frag:t}))}},{key:"loadsuccess",value:function(e,t,r){var a=r.frag;this.decryptkey=a.decryptdata.key=new Uint8Array(e.data),a.loader=void 0,this.loaders[a.type]=void 0,this.hls.trigger(l.default.KEY_LOADED,{frag:a})}},{key:"loaderror",value:function(e,t){var r=t.frag,a=r.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(l.default.ERROR,{type:d.ErrorTypes.NETWORK_ERROR,details:d.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.frag,a=r.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(l.default.ERROR,{type:d.ErrorTypes.NETWORK_ERROR,details:d.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})}}]),t}(u.default);r.default=c},{33:33,34:34,35:35,54:54}],43:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=a(e(2)),u=a(e(35)),d=a(e(34)),f=e(33),c=a(e(47)),h=e(54),g=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,v=/#EXT-X-MEDIA:(.*)/g,p=new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)(\S+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),y=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,m=function(){function e(){s(this,e),this.method=null,this.key=null,this.iv=null,this._uri=null}return o(e,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=l.default.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),e}(),E=function(){function e(){s(this,e),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[]}return o(e,[{key:"createInitializationVector",value:function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t}},{key:"fragmentDecryptdataFromLevelkey",value:function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&((r=new m).method=e.method,r.baseuri=e.baseuri,r.reluri=e.reluri,r.iv=this.createInitializationVector(t)),r}},{key:"cloneObj",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=l.default.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"programDateTime",get:function(){return!this._programDateTime&&this.rawProgramDateTime&&(this._programDateTime=new Date(Date.parse(this.rawProgramDateTime))),this._programDateTime}},{key:"byteRange",get:function(){if(!this._byteRange){var e=this._byteRange=[];if(this.rawByteRange){var t=this.rawByteRange.split("@",2);if(1===t.length){var r=this.lastByteRangeEndOffset;e[0]=r||0}else e[0]=parseInt(t[1]);e[1]=parseInt(t[0])+e[0]}}return this._byteRange}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}}]),e}(),b=function(e){function t(e){s(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u.default.MANIFEST_LOADING,u.default.LEVEL_LOADING,u.default.AUDIO_TRACK_LOADING,u.default.SUBTITLE_TRACK_LOADING));return r.loaders={},r}return n(t,e),o(t,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},d.default.prototype.destroy.call(this)}},{key:"onManifestLoading",value:function(e){this.load(e.url,{type:"manifest"})}},{key:"onLevelLoading",value:function(e){this.load(e.url,{type:"level",level:e.level,id:e.id})}},{key:"onAudioTrackLoading",value:function(e){this.load(e.url,{type:"audioTrack",id:e.id})}},{key:"onSubtitleTrackLoading",value:function(e){this.load(e.url,{type:"subtitleTrack",id:e.id})}},{key:"load",value:function(e,t){var r=this.loaders[t.type];if(r){var a=r.context;if(a&&a.url===e)return void h.logger.trace("playlist request ongoing");h.logger.warn("abort previous loader for type:"+t.type),r.abort()}var i=this.hls.config,n=void 0,s=void 0,o=void 0,l=void 0;"manifest"===t.type?(n=i.manifestLoadingMaxRetry,s=i.manifestLoadingTimeOut,o=i.manifestLoadingRetryDelay,l=i.manifestLoadingMaxRetryTimeout):(n=i.levelLoadingMaxRetry,s=i.levelLoadingTimeOut,o=i.levelLoadingRetryDelay,l=i.levelLoadingMaxRetryTimeout,h.logger.log("loading playlist for "+t.type+" "+(t.level||t.id))),r=this.loaders[t.type]=t.loader=void 0!==i.pLoader?new i.pLoader(i):new i.loader(i),t.url=e,t.responseType="";var u=void 0,d=void 0;u={timeout:s,maxRetry:n,retryDelay:o,maxRetryDelay:l},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},r.load(t,u,d)}},{key:"resolve",value:function(e,t){return l.default.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}},{key:"parseMasterPlaylist",value:function(e,t){var r=[],a=void 0;for(g.lastIndex=0;null!=(a=g.exec(e));){var i={},n=i.attrs=new c.default(a[1]);i.url=this.resolve(a[2],t);var s=n.decimalResolution("RESOLUTION");s&&(i.width=s.width,i.height=s.height),i.bitrate=n.decimalInteger("AVERAGE-BANDWIDTH")||n.decimalInteger("BANDWIDTH"),i.name=n.NAME;var o=n.CODECS;if(o){o=o.split(/[ ,]+/);for(var l=0;l<o.length;l++){var u=o[l];-1!==u.indexOf("avc1")?i.videoCodec=this.avc1toavcoti(u):-1!==u.indexOf("hvc1")?i.videoCodec=u:i.audioCodec=u}}r.push(i)}return r}},{key:"parseMasterPlaylistMedia",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=void 0,n=[],s=0;for(v.lastIndex=0;null!=(i=v.exec(e));){var o={},l=new c.default(i[1]);l.TYPE===r&&(o.groupId=l["GROUP-ID"],o.name=l.NAME,o.type=r,o.default="YES"===l.DEFAULT,o.autoselect="YES"===l.AUTOSELECT,o.forced="YES"===l.FORCED,l.URI&&(o.url=this.resolve(l.URI,t)),o.lang=l.LANGUAGE,o.name||(o.name=o.lang),a&&(o.audioCodec=a),o.id=s++,n.push(o))}return n}},{key:"avc1toavcoti",value:function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t}},{key:"parseLevelPlaylist",value:function(e,t,r,a){var i,n,s=0,o=0,l={type:null,version:null,url:t,fragments:[],live:!0,startSN:0},u=new m,d=0,f=null,g=new E;for(p.lastIndex=0;null!==(i=p.exec(e));){var v=i[1];if(v){g.duration=parseFloat(v);var b=(" "+i[2]).slice(1);g.title=b||null,g.tagList.push(b?["INF",v,b]:["INF",v])}else if(i[3]){if(!isNaN(g.duration)){var T=s++;g.type=a,g.start=o,g.levelkey=u,g.sn=T,g.level=r,g.cc=d,g.baseurl=t,g.relurl=(" "+i[3]).slice(1),l.fragments.push(g),f=g,o+=g.duration,g=new E}}else if(i[4]){if(g.rawByteRange=(" "+i[4]).slice(1),f){var k=f.byteRangeEndOffset;k&&(g.lastByteRangeEndOffset=k)}}else if(i[5])g.rawProgramDateTime=(" "+i[5]).slice(1),g.tagList.push(["PROGRAM-DATE-TIME",g.rawProgramDateTime]);else{for(i=i[0].match(y),n=1;n<i.length&&void 0===i[n];n++);var _=(" "+i[n+1]).slice(1),R=(" "+i[n+2]).slice(1);switch(i[n]){case"#":g.tagList.push(R?[_,R]:[_]);break;case"PLAYLIST-TYPE":l.type=_.toUpperCase();break;case"MEDIA-SEQUENCE":s=l.startSN=parseInt(_);break;case"TARGETDURATION":l.targetduration=parseFloat(_);break;case"VERSION":l.version=parseInt(_);break;case"EXTM3U":break;case"ENDLIST":l.live=!1;break;case"DIS":d++,g.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":d=parseInt(_);break;case"KEY":var S=_,A=new c.default(S),L=A.enumeratedString("METHOD"),w=A.URI,D=A.hexadecimalInteger("IV");L&&(u=new m,w&&["AES-128","SAMPLE-AES"].indexOf(L)>=0&&(u.method=L,u.baseuri=t,u.reluri=w,u.key=null,u.iv=D));break;case"START":var O=_,I=new c.default(O).decimalFloatingPoint("TIME-OFFSET");isNaN(I)||(l.startTimeOffset=I);break;case"MAP":var P=new c.default(_);g.relurl=P.URI,g.rawByteRange=P.BYTERANGE,g.baseurl=t,g.level=r,g.type=a,g.sn="initSegment",l.initSegment=g,g=new E;break;default:h.logger.warn("line parsed but not handled: "+i)}}}return(g=f)&&!g.relurl&&(l.fragments.pop(),o-=g.duration),l.totalduration=o,l.averagetargetduration=o/l.fragments.length,l.endSN=s-1,l}},{key:"loadsuccess",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e.data,n=e.url,s=r.type,o=r.id,l=r.level,d=this.hls;if(this.loaders[s]=void 0,void 0!==n&&0!==n.indexOf("data:")||(n=r.url),t.tload=performance.now(),0===i.indexOf("#EXTM3U"))if(i.indexOf("#EXTINF:")>0){var c="audioTrack"!==s&&"subtitleTrack"!==s,g=isNaN(l)?isNaN(o)?0:o:l,v=this.parseLevelPlaylist(i,n,g,"audioTrack"===s?"audio":"subtitleTrack"===s?"subtitle":"main");v.tload=t.tload,"manifest"===s&&d.trigger(u.default.MANIFEST_LOADED,{levels:[{url:n,details:v}],audioTracks:[],url:n,stats:t,networkDetails:a}),t.tparsed=performance.now(),v.targetduration?c?d.trigger(u.default.LEVEL_LOADED,{details:v,level:l||0,id:o||0,stats:t,networkDetails:a}):"audioTrack"===s?d.trigger(u.default.AUDIO_TRACK_LOADED,{details:v,id:o,stats:t,networkDetails:a}):"subtitleTrack"===s&&d.trigger(u.default.SUBTITLE_TRACK_LOADED,{details:v,id:o,stats:t,networkDetails:a}):d.trigger(u.default.ERROR,{type:f.ErrorTypes.NETWORK_ERROR,details:f.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"invalid targetduration",networkDetails:a})}else{var p=this.parseMasterPlaylist(i,n);if(p.length){var y=this.parseMasterPlaylistMedia(i,n,"AUDIO",p[0].audioCodec),m=this.parseMasterPlaylistMedia(i,n,"SUBTITLES");if(y.length){var E=!1;y.forEach(function(e){e.url||(E=!0)}),!1===E&&p[0].audioCodec&&!p[0].attrs.AUDIO&&(h.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),y.unshift({type:"main",name:"main"}))}d.trigger(u.default.MANIFEST_LOADED,{levels:p,audioTracks:y,subtitles:m,url:n,stats:t,networkDetails:a})}else d.trigger(u.default.ERROR,{type:f.ErrorTypes.NETWORK_ERROR,details:f.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"no level found in manifest",networkDetails:a})}else d.trigger(u.default.ERROR,{type:f.ErrorTypes.NETWORK_ERROR,details:f.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"no EXTM3U delimiter",networkDetails:a})}},{key:"loaderror",value:function(e,t){var r,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t.loader;switch(t.type){case"manifest":r=f.ErrorDetails.MANIFEST_LOAD_ERROR,a=!0;break;case"level":r=f.ErrorDetails.LEVEL_LOAD_ERROR,a=!1;break;case"audioTrack":r=f.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,a=!1}n&&(n.abort(),this.loaders[t.type]=void 0),this.hls.trigger(u.default.ERROR,{type:f.ErrorTypes.NETWORK_ERROR,details:r,fatal:a,url:n.url,loader:n,response:e,context:t,networkDetails:i})}},{key:"loadtimeout",value:function(e,t){var r,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t.loader;switch(t.type){case"manifest":r=f.ErrorDetails.MANIFEST_LOAD_TIMEOUT,a=!0;break;case"level":r=f.ErrorDetails.LEVEL_LOAD_TIMEOUT,a=!1;break;case"audioTrack":r=f.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT,a=!1}n&&(n.abort(),this.loaders[t.type]=void 0),this.hls.trigger(u.default.ERROR,{type:f.ErrorTypes.NETWORK_ERROR,details:r,fatal:a,url:n.url,loader:n,context:t,networkDetails:i})}}]),t}(d.default);r.default=b},{2:2,33:33,34:34,35:35,47:47,54:54}],44:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=Math.pow(2,32)-1,s=function(){function e(){a(this,e)}return i(e,null,[{key:"init",value:function(){e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var t;for(t in e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),a=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:a};var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,l,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,i))}},{key:"box",value:function(e){for(var t,r=Array.prototype.slice.call(arguments,1),a=8,i=r.length,n=i;i--;)a+=r[i].byteLength;for((t=new Uint8Array(a))[0]=a>>24&255,t[1]=a>>16&255,t[2]=a>>8&255,t[3]=255&a,t.set(e,4),i=0,a=8;i<n;i++)t.set(r[i],a),a+=r[i].byteLength;return t}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,r){r*=t;var a=Math.floor(r/(n+1)),i=Math.floor(r%(n+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,i>>24,i>>16&255,i>>8&255,255&i,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))}},{key:"moof",value:function(t,r,a){return e.box(e.types.moof,e.mfhd(t),e.traf(a,r))}},{key:"moov",value:function(t){for(var r=t.length,a=[];r--;)a[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(a).concat(e.mvex(t)))}},{key:"mvex",value:function(t){for(var r=t.length,a=[];r--;)a[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(a))}},{key:"mvhd",value:function(t,r){r*=t;var a=Math.floor(r/(n+1)),i=Math.floor(r%(n+1)),s=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,i>>24,i>>16&255,i>>8&255,255&i,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,s)}},{key:"sdtp",value:function(t){var r,a,i=t.samples||[],n=new Uint8Array(4+i.length);for(a=0;a<i.length;a++)r=i[a].flags,n[a+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var r,a,i,n=[],s=[];for(r=0;r<t.sps.length;r++)i=(a=t.sps[r]).byteLength,n.push(i>>>8&255),n.push(255&i),n=n.concat(Array.prototype.slice.call(a));for(r=0;r<t.pps.length;r++)i=(a=t.pps[r]).byteLength,s.push(i>>>8&255),s.push(255&i),s=s.concat(Array.prototype.slice.call(a));var o=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l=t.width,u=t.height,d=t.pixelRatio[0],f=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,f>>24,f>>16&255,f>>8&255,255&f])))}},{key:"esds",value:function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}},{key:"mp4a",value:function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"mp3",value:function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))}},{key:"stsd",value:function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var r=t.id,a=t.duration*t.timescale,i=t.width,s=t.height,o=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,255&i,0,0,s>>8&255,255&s,0,0]))}},{key:"traf",value:function(t,r){var a=e.sdtp(t),i=t.id,s=Math.floor(r/(n+1)),o=Math.floor(r%(n+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o])),e.trun(t,a.length+16+20+8+16+8+8),a)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(t,r){var a,i,n,s,o,l,u=t.samples||[],d=u.length,f=12+16*d,c=new Uint8Array(f);for(r+=8+f,c.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),a=0;a<d;a++)n=(i=u[a]).duration,s=i.size,o=i.flags,l=i.cts,c.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*a);return e.box(e.types.trun,c)}},{key:"initSegment",value:function(t){e.types||e.init();var r,a=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+a.byteLength)).set(e.FTYP),r.set(a,e.FTYP.byteLength),r}}]),e}();r.default=s},{}],45:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(e(36)),o=a(e(35)),l=e(54),u=a(e(44)),d=e(33),f=function(){function e(t,r,a,n){i(this,e),this.observer=t,this.config=r,this.typeSupported=a;var s=navigator.userAgent;this.isSafari=n&&n.indexOf("Apple")>-1&&s&&!s.match("CriOS"),this.ISGenerated=!1}return n(e,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(e){this._initPTS=this._initDTS=e}},{key:"resetInitSegment",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(e,t,r,a,i,n,s){if(this.ISGenerated){if(s){var u=this._initPTS,d=this._PTSNormalize,f=e.inputTimeScale||t.inputTimeScale,c=1/0,h=1/0,g=e.samples;if(g.length&&(c=h=d(g[0].pts-f*i,u)),(g=t.samples).length){var v=g[0];c=Math.min(c,d(v.pts-f*i,u)),h=Math.min(h,d(v.dts-f*i,u))}if(c!==1/0){var p=u-c;Math.abs(p)>10*f&&(l.logger.warn("timestamp inconsistency, "+(p/f).toFixed(3)+"s delta against expected value: missing discontinuity ? reset initPTS/initDTS"),this._initPTS=c,this._initDTS=h,this.observer.trigger(o.default.INIT_PTS_FOUND,{initPTS:c}))}}}else this.generateIS(e,t,i);if(this.ISGenerated)if(e.samples.length){e.timescale||(l.logger.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,i));var y=this.remuxAudio(e,i,n,s);if(t.samples.length){var m=void 0;y&&(m=y.endPTS-y.startPTS),t.timescale||(l.logger.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,i)),this.remuxVideo(t,i,n,m,s)}}else{var E=void 0;t.samples.length&&(E=this.remuxVideo(t,i,n,s)),E&&e.codec&&this.remuxEmptyAudio(e,i,n,E)}r.samples.length&&this.remuxID3(r,i),a.samples.length&&this.remuxText(a,i),this.observer.trigger(o.default.FRAG_PARSED)}},{key:"generateIS",value:function(e,t,r){var a,i,n=this.observer,s=e.samples,f=t.samples,c=this.typeSupported,h="audio/mp4",g={},v={tracks:g},p=void 0===this._initPTS;if(p&&(a=i=1/0),e.config&&s.length&&(e.timescale=e.samplerate,l.logger.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),g.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:u.default.initSegment([e]),metadata:{channelCount:e.channelCount}},p&&(a=i=s[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&f.length){var y=t.inputTimeScale;t.timescale=y,g.video={container:"video/mp4",codec:t.codec,initSegment:u.default.initSegment([t]),metadata:{width:t.width,height:t.height}},p&&(a=Math.min(a,f[0].pts-y*r),i=Math.min(i,f[0].dts-y*r),this.observer.trigger(o.default.INIT_PTS_FOUND,{initPTS:a}))}Object.keys(g).length?(n.trigger(o.default.FRAG_PARSING_INIT_SEGMENT,v),this.ISGenerated=!0,p&&(this._initPTS=a,this._initDTS=i)):n.trigger(o.default.ERROR,{type:d.ErrorTypes.MEDIA_ERROR,details:d.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})}},{key:"remuxVideo",value:function(e,t,r,a,i){var n,s,f,c,h,g,v,p=8,y=e.timescale,m=e.samples,E=[],b=m.length,T=this._PTSNormalize,k=this._initDTS,_=this.nextAvcDts,R=this.isSafari;R&&(r|=m.length&&_&&(i&&Math.abs(t-_/y)<.1||Math.abs(m[0].pts-_-k)<y/5)),r||(_=t*y),m.forEach(function(e){e.pts=T(e.pts-k,_),e.dts=T(e.dts-k,_)}),m.sort(function(e,t){var r=e.dts-t.dts,a=e.pts-t.pts;return r||(a||e.id-t.id)});var S=m.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(S<0){l.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(S/90)+" ms to overcome this issue");for(var A=0;A<m.length;A++)m[A].dts+=S}var L=m[0];h=Math.max(L.dts,0),c=Math.max(L.pts,0);var w=Math.round((h-_)/90);r&&w&&(w>1?l.logger.log("AVC:"+w+" ms hole between fragments detected,filling it"):w<-1&&l.logger.log("AVC:"+-w+" ms overlapping between fragments detected"),h=_,m[0].dts=h,c=Math.max(c-w,_),m[0].pts=c,l.logger.log("Video/PTS/DTS adjusted: "+Math.round(c/90)+"/"+Math.round(h/90)+",delta:"+w+" ms")),L=m[m.length-1],v=Math.max(L.dts,0),g=Math.max(L.pts,0,v),R&&(n=Math.round((v-h)/(m.length-1)));for(var D=0,O=0,I=0;I<b;I++){for(var P=m[I],C=P.units,x=C.length,F=0,M=0;M<x;M++)F+=C[M].data.length;O+=F,D+=x,P.length=F,P.dts=R?h+I*n:Math.max(P.dts,h),P.pts=Math.max(P.pts,P.dts)}var N=O+4*D+8;try{s=new Uint8Array(N)}catch(e){return void this.observer.trigger(o.default.ERROR,{type:d.ErrorTypes.MUX_ERROR,details:d.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating video mdat "+N})}var U=new DataView(s.buffer);U.setUint32(0,N),s.set(u.default.types.mdat,4);for(var B=0;B<b;B++){for(var G=m[B],j=G.units,H=0,W=void 0,K=0,V=j.length;K<V;K++){var Y=j[K],z=Y.data,X=Y.data.byteLength;U.setUint32(p,X),p+=4,s.set(z,p),p+=X,H+=4+X}if(R)W=Math.max(0,n*Math.round((G.pts-G.dts)/n));else{if(B<b-1)n=m[B+1].dts-G.dts;else{var q=this.config,Q=G.dts-m[B>0?B-1:B].dts;if(q.stretchShortVideoTrack){var J=q.maxBufferHole,Z=q.maxSeekHole,$=Math.floor(Math.min(J,Z)*y),ee=(a?c+a*y:this.nextAudioPts)-G.pts;ee>$?((n=ee-Q)<0&&(n=Q),l.logger.log("It is approximately "+ee/90+" ms to the next segment; using duration "+n/90+" ms for the last video frame.")):n=Q}else n=Q}W=Math.round(G.pts-G.dts)}E.push({size:H,duration:n,cts:W,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:G.key?2:1,isNonSync:G.key?0:1}})}this.nextAvcDts=v+n;var te=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,E.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var re=E[0].flags;re.dependsOn=2,re.isNonSync=0}e.samples=E,f=u.default.moof(e.sequenceNumber++,h,e),e.samples=[];var ae={data1:f,data2:s,startPTS:c/y,endPTS:(g+n)/y,startDTS:h/y,endDTS:this.nextAvcDts/y,type:"video",nb:E.length,dropped:te};return this.observer.trigger(o.default.FRAG_PARSING_DATA,ae),ae}},{key:"remuxAudio",value:function(e,t,r,a){var i,n,f,c,h,g,v,p=e.inputTimeScale,y=p/e.timescale,m=(e.isAAC?1024:1152)*y,E=this._PTSNormalize,b=this._initDTS,T=!e.isAAC&&this.typeSupported.mpeg,k=e.samples,_=[],R=this.nextAudioPts;if((r|=k.length&&R&&(a&&Math.abs(t-R/p)<.1||Math.abs(k[0].pts-R-b)<20*m))||(R=t*p),k.forEach(function(e){e.pts=e.dts=E(e.pts-b,R)}),k.sort(function(e,t){return e.pts-t.pts}),a&&e.isAAC)for(var S=0,A=R;S<k.length;){var L,w=k[S];L=w.pts-A;var D=Math.abs(1e3*L/p);if(L<=-m)l.logger.warn("Dropping 1 audio frame @ "+(A/p).toFixed(3)+"s due to "+D+" ms overlap."),k.splice(S,1),e.len-=w.unit.length;else if(L>=m&&D<1e4&&A){var O=Math.round(L/m);l.logger.warn("Injecting "+O+" audio frame @ "+(A/p).toFixed(3)+"s due to "+Math.round(1e3*L/p)+" ms gap.");for(var I=0;I<O;I++){var P=Math.max(A,0);(f=s.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),f=w.unit.subarray()),k.splice(S,0,{unit:f,pts:P,dts:P}),e.len+=f.length,A+=m,S++}w.pts=w.dts=A,A+=m,S++}else Math.abs(L),w.pts=w.dts=A,A+=m,S++}for(var C=0,x=k.length;C<x;C++){var F=k[C],M=F.unit,N=F.pts;if(void 0!==v)n.duration=Math.round((N-v)/y);else{var U=Math.round(1e3*(N-R)/p),B=0;if(r&&e.isAAC&&U){if(U>0&&U<1e4)B=Math.round((N-R)/m),l.logger.log(U+" ms hole between AAC samples detected,filling it"),B>0&&((f=s.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(f=M.subarray()),e.len+=B*f.length);else if(U<-12){l.logger.log("drop overlapping AAC sample, expected/parsed/delta:"+(R/p).toFixed(3)+"s/"+(N/p).toFixed(3)+"s/"+-U+"ms"),e.len-=M.byteLength;continue}N=R}if(g=Math.max(0,N),!(e.len>0))return;var G=T?e.len:e.len+8;i=T?0:8;try{c=new Uint8Array(G)}catch(e){return void this.observer.trigger(o.default.ERROR,{type:d.ErrorTypes.MUX_ERROR,details:d.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:G,reason:"fail allocating audio mdat "+G})}T||(new DataView(c.buffer).setUint32(0,G),c.set(u.default.types.mdat,4));for(var j=0;j<B;j++)(f=s.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),f=M.subarray()),c.set(f,i),i+=f.byteLength,n={size:f.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},_.push(n)}c.set(M,i);var H=M.byteLength;i+=H,n={size:H,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},_.push(n),v=N}var W=0,K=_.length;if(K>=2&&(W=_[K-2].duration,n.duration=W),K){this.nextAudioPts=R=v+y*W,e.len=0,e.samples=_,h=T?new Uint8Array:u.default.moof(e.sequenceNumber++,g/y,e),e.samples=[];var V=g/p,Y=R/p,z={data1:h,data2:c,startPTS:V,endPTS:Y,startDTS:V,endDTS:Y,type:"audio",nb:K};return this.observer.trigger(o.default.FRAG_PARSING_DATA,z),z}return null}},{key:"remuxEmptyAudio",value:function(e,t,r,a){var i=e.inputTimeScale,n=i/(e.samplerate?e.samplerate:i),o=this.nextAudioPts,u=(void 0!==o?o:a.startDTS*i)+this._initDTS,d=a.endDTS*i+this._initDTS,f=1024*n,c=Math.ceil((d-u)/f),h=s.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(l.logger.warn("remux empty Audio"),h){for(var g=[],v=0;v<c;v++){var p=u+v*f;g.push({unit:h,pts:p,dts:p}),e.len+=h.length}e.samples=g,this.remuxAudio(e,t,r)}else l.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")}},{key:"remuxID3",value:function(e,t){var r,a=e.samples.length,i=e.inputTimeScale,n=this._initPTS,s=this._initDTS;if(a){for(var l=0;l<a;l++)(r=e.samples[l]).pts=(r.pts-n)/i,r.dts=(r.dts-s)/i;this.observer.trigger(o.default.FRAG_PARSING_METADATA,{samples:e.samples})}e.samples=[],t=t}},{key:"remuxText",value:function(e,t){e.samples.sort(function(e,t){return e.pts-t.pts});var r,a=e.samples.length,i=e.inputTimeScale,n=this._initPTS;if(a){for(var s=0;s<a;s++)(r=e.samples[s]).pts=(r.pts-n)/i;this.observer.trigger(o.default.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[],t=t}},{key:"_PTSNormalize",value:function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}}]),e}();r.default=f},{33:33,35:35,36:36,44:44,54:54}],46:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(e(35)),s=function(){function e(t){a(this,e),this.observer=t}return i(e,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(){}},{key:"resetInitSegment",value:function(){}},{key:"remux",value:function(e,t,r,a,i,s,o,l){var u=this.observer,d="";e&&(d+="audio"),t&&(d+="video"),u.trigger(n.default.FRAG_PARSING_DATA,{data1:l,startPTS:i,startDTS:i,type:d,nb:1,dropped:0}),u.trigger(n.default.FRAG_PARSED)}}]),e}();r.default=s},{35:35}],47:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=/^(\d+)x(\d+)$/,s=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o=function(){function e(t){a(this,e),"string"==typeof t&&(t=e.parseAttrList(t));for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r])}return i(e,[{key:"decimalInteger",value:function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"hexadecimalInteger",value:function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),a=0;a<t.length/2;a++)r[a]=parseInt(t.slice(2*a,2*a+2),16);return r}return null}},{key:"hexadecimalIntegerAsNumber",value:function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"decimalFloatingPoint",value:function(e){return parseFloat(this[e])}},{key:"enumeratedString",value:function(e){return this[e]}},{key:"decimalResolution",value:function(e){var t=n.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}}],[{key:"parseAttrList",value:function(e){var t,r={};for(s.lastIndex=0;null!==(t=s.exec(e));){var a=t[2];0===a.indexOf('"')&&a.lastIndexOf('"')===a.length-1&&(a=a.slice(1,-1)),r[t[1]]=a}return r}}]),e}();r.default=o},{}],48:[function(e,t,r){"use strict";var a={search:function(e,t){for(var r=0,a=e.length-1,i=null,n=null;r<=a;){var s=t(n=e[i=(r+a)/2|0]);if(s>0)r=i+1;else{if(!(s<0))return n;a=i-1}}return null}};t.exports=a},{}],49:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},s=function(e){var t=e;return n.hasOwnProperty(e)&&(t=n[e]),String.fromCharCode(t)},o=15,l=100,u={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},d={17:2,18:4,21:6,22:8,23:10,19:13,20:15},f={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},c={25:2,26:4,29:6,30:8,31:10,27:13,28:15},h=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],g={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(e){this.time=e},log:function(e,t){this.verboseFilter[e];this.verboseLevel}},v=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},p=function(){function e(t,r,i,n,s){a(this,e),this.foreground=t||"white",this.underline=r||!1,this.italics=i||!1,this.background=n||"black",this.flash=s||!1}return i(e,[{key:"reset",value:function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}},{key:"setStyles",value:function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var a=t[r];e.hasOwnProperty(a)&&(this[a]=e[a])}}},{key:"isDefault",value:function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash}},{key:"equals",value:function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}},{key:"copy",value:function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}},{key:"toString",value:function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}]),e}(),y=function(){function e(t,r,i,n,s,o){a(this,e),this.uchar=t||" ",this.penState=new p(r,i,n,s,o)}return i(e,[{key:"reset",value:function(){this.uchar=" ",this.penState.reset()}},{key:"setChar",value:function(e,t){this.uchar=e,this.penState.copy(t)}},{key:"setPenState",value:function(e){this.penState.copy(e)}},{key:"equals",value:function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}},{key:"copy",value:function(e){this.uchar=e.uchar,this.penState.copy(e.penState)}},{key:"isEmpty",value:function(){return" "===this.uchar&&this.penState.isDefault()}}]),e}(),m=function(){function e(){a(this,e),this.chars=[];for(var t=0;t<l;t++)this.chars.push(new y);this.pos=0,this.currPenState=new p}return i(e,[{key:"equals",value:function(e){for(var t=!0,r=0;r<l;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<l;t++)this.chars[t].copy(e.chars[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<l;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}},{key:"setCursor",value:function(e){this.pos!==e&&(this.pos=e),this.pos<0?(g.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>l&&(g.log("ERROR","Too large cursor position "+this.pos),this.pos=l)}},{key:"moveCursor",value:function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}},{key:"backSpace",value:function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}},{key:"insertChar",value:function(e){e>=144&&this.backSpace();var t=s(e);this.pos>=l?g.log("ERROR","Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))}},{key:"clearFromPos",value:function(e){var t;for(t=e;t<l;t++)this.chars[t].reset()}},{key:"clear",value:function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}},{key:"clearToEndOfRow",value:function(){this.clearFromPos(this.pos)}},{key:"getTextString",value:function(){for(var e=[],t=!0,r=0;r<l;r++){var a=this.chars[r].uchar;" "!==a&&(t=!1),e.push(a)}return t?"":e.join("")}},{key:"setPenStyles",value:function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}]),e}(),E=function(){function e(){a(this,e),this.rows=[];for(var t=0;t<o;t++)this.rows.push(new m);this.currRow=o-1,this.nrRollUpRows=null,this.reset()}return i(e,[{key:"reset",value:function(){for(var e=0;e<o;e++)this.rows[e].clear();this.currRow=o-1}},{key:"equals",value:function(e){for(var t=!0,r=0;r<o;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<o;t++)this.rows[t].copy(e.rows[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<o;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}},{key:"backSpace",value:function(){this.rows[this.currRow].backSpace()}},{key:"clearToEndOfRow",value:function(){this.rows[this.currRow].clearToEndOfRow()}},{key:"insertChar",value:function(e){this.rows[this.currRow].insertChar(e)}},{key:"setPen",value:function(e){this.rows[this.currRow].setPenStyles(e)}},{key:"moveCursor",value:function(e){this.rows[this.currRow].moveCursor(e)}},{key:"setCursor",value:function(e){g.log("INFO","setCursor: "+e),this.rows[this.currRow].setCursor(e)}},{key:"setPAC",value:function(e){g.log("INFO","pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<o;r++)this.rows[r].clear();var a=this.currRow+1-this.nrRollUpRows,i=this.lastOutputScreen;if(i){var n=i.rows[a].cueStartTime;if(n&&n<g.time)for(var s=0;s<this.nrRollUpRows;s++)this.rows[t-this.nrRollUpRows+s+1].copy(i.rows[a+s])}}this.currRow=t;var l=this.rows[this.currRow];if(null!==e.indent){var u=e.indent,d=Math.max(u-1,0);l.setCursor(e.indent),e.color=l.chars[d].penState.foreground}var f={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(f)}},{key:"setBkgData",value:function(e){g.log("INFO","bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}},{key:"setRollUpRows",value:function(e){this.nrRollUpRows=e}},{key:"rollUp",value:function(){if(null!==this.nrRollUpRows){g.log("TEXT",this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),g.log("INFO","Rolling up")}else g.log("DEBUG","roll_up but nrRollUpRows not set yet")}},{key:"getDisplayText",value:function(e){e=e||!1;for(var t=[],r="",a=-1,i=0;i<o;i++){var n=this.rows[i].getTextString();n&&(a=i+1,e?t.push("Row "+a+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r}},{key:"getTextAndFormat",value:function(){return this.rows}}]),e}(),b=function(){function e(t,r){a(this,e),this.chNr=t,this.outputFilter=r,this.mode=null,this.verbose=0,this.displayedMemory=new E,this.nonDisplayedMemory=new E,this.lastOutputScreen=new E,this.currRollUpRow=this.displayedMemory.rows[o-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}return i(e,[{key:"reset",value:function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[o-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null}},{key:"getHandler",value:function(){return this.outputFilter}},{key:"setHandler",value:function(e){this.outputFilter=e}},{key:"setPAC",value:function(e){this.writeScreen.setPAC(e)}},{key:"setBkgData",value:function(e){this.writeScreen.setBkgData(e)}},{key:"setMode",value:function(e){e!==this.mode&&(this.mode=e,g.log("INFO","MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}},{key:"insertChars",value:function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";g.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(g.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}},{key:"ccRCL",value:function(){g.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}},{key:"ccBS",value:function(){g.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}},{key:"ccAOF",value:function(){}},{key:"ccAON",value:function(){}},{key:"ccDER",value:function(){g.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}},{key:"ccRU",value:function(e){g.log("INFO","RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}},{key:"ccFON",value:function(){g.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})}},{key:"ccRDC",value:function(){g.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}},{key:"ccTR",value:function(){g.log("INFO","TR"),this.setMode("MODE_TEXT")}},{key:"ccRTD",value:function(){g.log("INFO","RTD"),this.setMode("MODE_TEXT")}},{key:"ccEDM",value:function(){g.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate()}},{key:"ccCR",value:function(){g.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate()}},{key:"ccENM",value:function(){g.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}},{key:"ccEOC",value:function(){if(g.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,g.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate()}},{key:"ccTO",value:function(e){g.log("INFO","TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}},{key:"ccMIDROW",value:function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16,a=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=a[r]}g.log("INFO","MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}},{key:"outputDataUpdate",value:function(){var e=g.time;null!==e&&this.outputFilter&&(this.outputFilter.updateData&&this.outputFilter.updateData(e,this.displayedMemory),null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.lastOutputScreen),this.cueStartTime=this.displayedMemory.isEmpty()?null:e):this.cueStartTime=e,this.lastOutputScreen.copy(this.displayedMemory))}},{key:"cueSplitAtTime",value:function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}]),e}(),T=function(){function e(t,r,i){a(this,e),this.field=t||1,this.outputs=[r,i],this.channels=[new b(1,r),new b(2,i)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}return i(e,[{key:"getHandler",value:function(e){return this.channels[e].getHandler()}},{key:"setHandler",value:function(e,t){this.channels[e].setHandler(t)}},{key:"addData",value:function(e,t){var r,a,i,n=!1;this.lastTime=e,g.setTime(e);for(var s=0;s<t.length;s+=2)a=127&t[s],i=127&t[s+1],0!==a||0!==i?(g.log("DATA","["+v([t[s],t[s+1]])+"] -> ("+v([a,i])+")"),(r=this.parseCmd(a,i))||(r=this.parseMidrow(a,i)),r||(r=this.parsePAC(a,i)),r||(r=this.parseBackgroundAttributes(a,i)),r||(n=this.parseChars(a,i))&&(this.currChNr&&this.currChNr>=0?this.channels[this.currChNr-1].insertChars(n):g.log("WARNING","No channel found yet. TEXT-MODE?")),r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,g.log("WARNING","Couldn't parse cleaned data "+v([a,i])+" orig: "+v([t[s],t[s+1]])))):this.dataCounters.padding+=2}},{key:"parseCmd",value:function(e,t){var r=null,a=(20===e||28===e)&&32<=t&&t<=47,i=(23===e||31===e)&&33<=t&&t<=35;if(!a&&!i)return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,g.log("DEBUG","Repeated command ("+v([e,t])+") is dropped"),!0;r=20===e||23===e?1:2;var n=this.channels[r-1];return 20===e||28===e?32===t?n.ccRCL():33===t?n.ccBS():34===t?n.ccAOF():35===t?n.ccAON():36===t?n.ccDER():37===t?n.ccRU(2):38===t?n.ccRU(3):39===t?n.ccRU(4):40===t?n.ccFON():41===t?n.ccRDC():42===t?n.ccTR():43===t?n.ccRTD():44===t?n.ccEDM():45===t?n.ccCR():46===t?n.ccENM():47===t&&n.ccEOC():n.ccTO(t-32),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"parseMidrow",value:function(e,t){var r=null;return(17===e||25===e)&&32<=t&&t<=47&&((r=17===e?1:2)!==this.currChNr?(g.log("ERROR","Mismatch channel in midrow parsing"),!1):(this.channels[r-1].ccMIDROW(t),g.log("DEBUG","MIDROW ("+v([e,t])+")"),!0))}},{key:"parsePAC",value:function(e,t){var r=null,a=null,i=(17<=e&&e<=23||25<=e&&e<=31)&&64<=t&&t<=127,n=(16===e||24===e)&&64<=t&&t<=95;if(!i&&!n)return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,!0;r=e<=23?1:2,a=64<=t&&t<=95?1===r?u[e]:f[e]:1===r?d[e]:c[e];var s=this.interpretPAC(a,t);return this.channels[r-1].setPAC(s),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"interpretPAC",value:function(e,t){var r=t,a={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,a.underline=1==(1&r),r<=13?a.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(a.italics=!0,a.color="white"):a.indent=4*Math.floor((r-16)/2),a}},{key:"parseChars",value:function(e,t){var r=null,a=null,i=null;if(e>=25?(r=2,i=e-8):(r=1,i=e),17<=i&&i<=19){var n=t;n=17===i?t+80:18===i?t+112:t+144,g.log("INFO","Special char '"+s(n)+"' in channel "+r),a=[n]}else 32<=e&&e<=127&&(a=0===t?[e]:[e,t]);if(a){var o=v(a);g.log("DEBUG","Char codes =  "+o.join(",")),this.lastCmdA=null,this.lastCmdB=null}return a}},{key:"parseBackgroundAttributes",value:function(e,t){var r,a,i,n=(16===e||24===e)&&32<=t&&t<=47,s=(23===e||31===e)&&45<=t&&t<=47;return!(!n&&!s)&&(r={},16===e||24===e?(a=Math.floor((t-32)/2),r.background=h[a],t%2==1&&(r.background=r.background+"_semi")):45===t?r.background="transparent":(r.foreground="black",47===t&&(r.underline=!0)),i=e<24?1:2,this.channels[i-1].setBkgData(r),this.lastCmdA=null,this.lastCmdB=null,!0)}},{key:"reset",value:function(){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].reset();this.lastCmdA=null,this.lastCmdB=null}},{key:"cueSplitAtTime",value:function(e){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].cueSplitAtTime(e)}}]),e}();r.default=T},{}],50:[function(e,t,r){"use strict";var a=e(57),i={newCue:function(e,t,r,i){for(var n,s,o,l,u,d=window.VTTCue||window.TextTrackCue,f=0;f<i.rows.length;f++)if(n=i.rows[f],o=!0,l=0,u="",!n.isEmpty()){for(var c=0;c<n.chars.length;c++)n.chars[c].uchar.match(/\s/)&&o?l++:(u+=n.chars[c].uchar,o=!1);n.cueStartTime=t,t===r&&(r+=1e-4),s=new d(t,r,(0,a.fixLineBreaks)(u.trim())),l>=16?l--:l++,navigator.userAgent.match(/Firefox\//)?s.line=f+1:s.line=f>7?f-2:f+1,s.align="left",s.position=Math.max(0,Math.min(100,l/32*100+(navigator.userAgent.match(/Firefox\//)?50:0))),e.addCue(s)}}};t.exports=i},{57:57}],51:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.findFragWithCC=function(e,t){return a.default.search(e,function(e){return e.cc<t?1:e.cc>t?-1:0})};var a=function(e){return e&&e.__esModule?e:{default:e}}(e(48))},{48:48}],52:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(e(53)),s=function(){function e(t,r,i,s){a(this,e),this.hls=t,this.defaultEstimate_=s,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new n.default(r),this.fast_=new n.default(i)}return i(e,[{key:"sample",value:function(e,t){var r=8e3*t/(e=Math.max(e,this.minDelayMs_)),a=e/1e3;this.fast_.sample(a,r),this.slow_.sample(a,r)}},{key:"canEstimate",value:function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_}},{key:"getEstimate",value:function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}},{key:"destroy",value:function(){}}]),e}();r.default=s},{53:53}],53:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=function(){function e(t){a(this,e),this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=0,this.totalWeight_=0}return i(e,[{key:"sample",value:function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}},{key:"getTotalWeight",value:function(){return this.totalWeight_}},{key:"getEstimate",value:function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_}}]),e}();r.default=n},{}],54:[function(e,t,r){"use strict";function a(){}function i(e,t){return t="["+e+"] > "+t}function n(e){var t=self.console[e];return t?function(){for(var r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];a[0]&&(a[0]=i(e,a[0])),t.apply(self.console,a)}:a}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];r.forEach(function(t){u[t]=e[t]?e[t].bind(e):n(t)})}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l={trace:a,debug:a,log:a,warn:a,info:a,error:a},u=l;r.enableLogs=function(e){if(!0===e||"object"===(void 0===e?"undefined":o(e))){s(e,"debug","log","info","warn","error");try{u.log()}catch(e){u=l}}else u=l},r.logger=u},{}],55:[function(e,t,r){"use strict";var a={toString:function(e){for(var t="",r=e.length,a=0;a<r;a++)t+="["+e.start(a).toFixed(3)+","+e.end(a).toFixed(3)+"]";return t}};t.exports=a},{}],56:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){function e(e){return"string"==typeof e&&(!!n[e.toLowerCase()]&&e.toLowerCase())}function t(e){return"string"==typeof e&&(!!s[e.toLowerCase()]&&e.toLowerCase())}function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)e[a]=r[a]}return e}function a(a,n,s){var o=this,l=function(){if("undefined"!=typeof navigator)return/MSIE\s8\.0/.test(navigator.userAgent)}(),u={};l?o=document.createElement("custom"):u.enumerable=!0,o.hasBeenReset=!1;var d="",f=!1,c=a,h=n,g=s,v=null,p="",y=!0,m="auto",E="start",b=50,T="middle",k=50,_="middle";if(Object.defineProperty(o,"id",r({},u,{get:function(){return d},set:function(e){d=""+e}})),Object.defineProperty(o,"pauseOnExit",r({},u,{get:function(){return f},set:function(e){f=!!e}})),Object.defineProperty(o,"startTime",r({},u,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"endTime",r({},u,{get:function(){return h},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");h=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"text",r({},u,{get:function(){return g},set:function(e){g=""+e,this.hasBeenReset=!0}})),Object.defineProperty(o,"region",r({},u,{get:function(){return v},set:function(e){v=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"vertical",r({},u,{get:function(){return p},set:function(t){var r=e(t);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");p=r,this.hasBeenReset=!0}})),Object.defineProperty(o,"snapToLines",r({},u,{get:function(){return y},set:function(e){y=!!e,this.hasBeenReset=!0}})),Object.defineProperty(o,"line",r({},u,{get:function(){return m},set:function(e){if("number"!=typeof e&&e!==i)throw new SyntaxError("An invalid number or illegal string was specified.");m=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"lineAlign",r({},u,{get:function(){return E},set:function(e){var r=t(e);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");E=r,this.hasBeenReset=!0}})),Object.defineProperty(o,"position",r({},u,{get:function(){return b},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");b=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"positionAlign",r({},u,{get:function(){return T},set:function(e){var r=t(e);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");T=r,this.hasBeenReset=!0}})),Object.defineProperty(o,"size",r({},u,{get:function(){return k},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");k=e,this.hasBeenReset=!0}})),Object.defineProperty(o,"align",r({},u,{get:function(){return _},set:function(e){var r=t(e);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");_=r,this.hasBeenReset=!0}})),o.displayState=void 0,l)return o}if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var i="auto",n={"":!0,lr:!0,rl:!0},s={start:!0,middle:!0,end:!0,left:!0,right:!0};return a.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},a}()},{}],57:[function(e,t,r){"use strict";function a(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new d,this.regionList=[]}function i(e){function t(e,t,r,a){return 3600*(0|e)+60*(0|t)+(0|r)+(0|a)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}function n(){this.values=Object.create(null)}function s(e,t,r,a){var i=a?e.split(a):[e];for(var n in i)if("string"==typeof i[n]){var s=i[n].split(r);2===s.length&&t(s[0],s[1])}}function o(e,t,r){function a(){var t=i(e);if(null===t)throw new Error("Malformed timestamp: "+l);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function o(){e=e.replace(/^\s+/,"")}var l=e;if(o(),t.startTime=a(),o(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+l);e=e.substr(3),o(),t.endTime=a(),o(),function(e,t){var a=new n;s(e,function(e,t){switch(e){case"region":for(var i=r.length-1;i>=0;i--)if(r[i].id===t){a.set(e,r[i].region);break}break;case"vertical":a.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),s=n[0];a.integer(e,s),a.percent(e,s)&&a.set("snapToLines",!1),a.alt(e,s,["auto"]),2===n.length&&a.alt("lineAlign",n[1],["start",c,"end"]);break;case"position":n=t.split(","),a.percent(e,n[0]),2===n.length&&a.alt("positionAlign",n[1],["start",c,"end","line-left","line-right","auto"]);break;case"size":a.percent(e,t);break;case"align":a.alt(e,t,["start",c,"end","left","right"])}},/:/,/\s/),t.region=a.get("region",null),t.vertical=a.get("vertical","");var i=a.get("line","auto");"auto"===i&&-1===f.line&&(i=-1),t.line=i,t.lineAlign=a.get("lineAlign","start"),t.snapToLines=a.get("snapToLines",!0),t.size=a.get("size",100),t.align=a.get("align",c);var o=a.get("position","auto");"auto"===o&&50===f.position&&(o="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=o}(e,t)}function l(e){return e.replace(/<br(?: \/)?>/gi,"\n")}Object.defineProperty(r,"__esModule",{value:!0}),r.fixLineBreaks=void 0;var u=function(e){return e&&e.__esModule?e:{default:e}}(e(56)),d=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};n.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var a=0;a<r.length;++a)if(t===r[a]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var f=new u.default(0,0,0),c="middle"===f.align?"middle":"center";a.prototype={parse:function(e){function t(){var e=r.buffer,t=0;for(e=l(e);t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var a=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,r.buffer=e.substr(t),a}var r=this;e&&(r.buffer+=r.decoder.decode(e,{stream:!0}));try{var a;if("INITIAL"===r.state){if(!/\r\n|\n/.test(r.buffer))return this;var i=(a=t()).match(/^WEBVTT([ \t].*)?$/);if(!i||!i[0])throw new Error("Malformed WebVTT signature.");r.state="HEADER"}for(var n=!1;r.buffer;){if(!/\r\n|\n/.test(r.buffer))return this;switch(n?n=!1:a=t(),r.state){case"HEADER":/:/.test(a)?s(a,function(e,t){},/:/):a||(r.state="ID");continue;case"NOTE":a||(r.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(a)){r.state="NOTE";break}if(!a)continue;if(r.cue=new u.default(0,0,""),r.state="CUE",-1===a.indexOf("--\x3e")){r.cue.id=a;continue}case"CUE":try{o(a,r.cue,r.regionList)}catch(e){r.cue=null,r.state="BADCUE";continue}r.state="CUETEXT";continue;case"CUETEXT":var d=-1!==a.indexOf("--\x3e");if(!a||d&&(n=!0)){r.oncue&&r.oncue(r.cue),r.cue=null,r.state="ID";continue}r.cue.text&&(r.cue.text+="\n"),r.cue.text+=a;continue;case"BADCUE":a||(r.state="ID");continue}}}catch(e){"CUETEXT"===r.state&&r.cue&&r.oncue&&r.oncue(r.cue),r.cue=null,r.state="INITIAL"===r.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return e.onflush&&e.onflush(),this}},r.fixLineBreaks=l,r.default=a},{56:56}],58:[function(e,t,r){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(e(57)),i=function(e,t,r){return e.substr(r||0,t.length)===t},n=function(e){var t=parseInt(e.substr(-3)),r=parseInt(e.substr(-6,2)),a=parseInt(e.substr(-9,2)),i=e.length>9?parseInt(e.substr(0,e.indexOf(":"))):0;return isNaN(t)||isNaN(r)||isNaN(a)||isNaN(i)?-1:(t+=1e3*r,t+=6e4*a,t+=36e5*i)},s=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},o=function(e,t,r){var a=e[t],i=e[a.prevCC];if(!i||!i.new&&a.new)return e.ccOffset=e.presentationOffset=a.start,void(a.new=!1);for(;i&&i.new;)e.ccOffset+=a.start-i.start,a.new=!1,i=e[(a=i).prevCC];e.presentationOffset=r},l={parse:function(e,t,r,l,u,d){var f=/\r\n|\n\r|\n|\r/g,c=String.fromCharCode.apply(null,new Uint8Array(e)).trim().replace(f,"\n").split("\n"),h="00:00.000",g=0,v=0,p=0,y=[],m=void 0,E=!0,b=new a.default;b.oncue=function(e){var t=r[l],a=r.ccOffset;t&&t.new&&(void 0!==v?a=r.ccOffset=t.start:o(r,l,p)),p&&(a=p+r.ccOffset-r.presentationOffset),e.startTime+=a-v,e.endTime+=a-v,e.id=s(e.startTime)+s(e.endTime)+s(e.text),e.text=decodeURIComponent(escape(e.text)),e.endTime>0&&y.push(e)},b.onparsingerror=function(e){m=e},b.onflush=function(){m&&d?d(m):u(y)},c.forEach(function(e){if(E){if(i(e,"X-TIMESTAMP-MAP=")){E=!1,e.substr(16).split(",").forEach(function(e){i(e,"LOCAL:")?h=e.substr(6):i(e,"MPEGTS:")&&(g=parseInt(e.substr(7)))});try{g-=t=t<0?t+8589934592:t,v=n(h)/1e3,p=g/9e4,-1===v&&(m=new Error("Malformed X-TIMESTAMP-MAP: "+e))}catch(t){m=new Error("Malformed X-TIMESTAMP-MAP: "+e)}return}""===e&&(E=!1)}b.parse(e+"\n")}),b.flush()}};t.exports=l},{57:57}],59:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=e(54),s=function(){function e(t){a(this,e),t&&t.xhrSetup&&(this.xhrSetup=t.xhrSetup)}return i(e,[{key:"destroy",value:function(){this.abort(),this.loader=null}},{key:"abort",value:function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null}},{key:"load",value:function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()}},{key:"loadInternal",value:function(){var e,t=this.context;e="undefined"!=typeof XDomainRequest?this.loader=new XDomainRequest:this.loader=new XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var a=this.xhrSetup;try{if(a)try{a(e,t.url)}catch(r){e.open("GET",t.url,!0),a(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()}},{key:"readystatechange",value:function(e){var t=e.currentTarget,r=t.readyState,a=this.stats,i=this.context,s=this.config;if(!a.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===a.tfirst&&(a.tfirst=Math.max(performance.now(),a.trequest)),4===r){var o=t.status;if(o>=200&&o<300){a.tload=Math.max(a.tfirst,performance.now());var l=void 0,u=void 0;u="arraybuffer"===i.responseType?(l=t.response).byteLength:(l=t.responseText).length,a.loaded=a.total=u;var d={url:t.responseURL,data:l};this.callbacks.onSuccess(d,a,i,t)}else a.retry>=s.maxRetry||o>=400&&o<499?(n.logger.error(o+" while loading "+i.url),this.callbacks.onError({code:o,text:t.statusText},i,t)):(n.logger.warn(o+" while loading "+i.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),a.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout)}},{key:"loadtimeout",value:function(){n.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)}},{key:"loadprogress",value:function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var a=this.callbacks.onProgress;a&&a(r,this.context,null,t)}}]),e}();r.default=s},{54:54}]},{},[40])(40)});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function e(){return vi.apply(null,arguments)}function t(e){vi=e}function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e){var t;for(t in e)return!1;return!0}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return vn(e,t,n,s,!0).utc()}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function f(e){return null==e._pf&&(e._pf=c()),e._pf}function m(e){if(null==e._isValid){var t=f(e),n=Mi.call(t.parsedDateParts,function(e){return null!=e}),s=!(isNaN(e._d.getTime())||t.overflow>=0||t.empty||t.invalidMonth||t.invalidWeekday||t.nullInput||t.invalidFormat||t.userInvalidated||!(!t.meridiem||t.meridiem&&n));if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function _(e){var t=h(0/0);return null!=e?d(f(t),e):f(t).userInvalidated=!0,t}function y(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=f(t)),r(t._locale)||(e._locale=t._locale),Si.length>0)for(n=0;n<Si.length;n++)s=Si[n],i=t[s],r(i)||(e[s]=i);return e}function g(t){y(this,t),this._d=new Date(null!=t._d?t._d.getTime():0/0),this.isValid()||(this._d=new Date(0/0)),ki===!1&&(ki=!0,e.updateOffset(this),ki=!1)}function p(e){return e instanceof g||null!=e&&null!=e._isAMomentObject}function v(e){return 0>e?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=v(t)),n}function M(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;i>s;s++)(n&&e[s]!==t[s]||!n&&w(e[s])!==w(t[s]))&&a++;return a+r}function S(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,n){var s=!0;return d(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] ";for(var o in arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}S(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+Error().stack),s=!1}return n.apply(this,arguments)},n)}function D(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),Di[t]||(S(n),Di[t]=!0)}function Y(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function O(e){var t,n;for(n in e)t=e[n],Y(t)?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function x(e,t){var n,i=d({},e);for(n in t)l(t,n)&&(s(e[n])&&s(t[n])?(i[n]={},d(i[n],e[n]),d(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);for(n in e)l(e,n)&&!l(t,n)&&s(e[n])&&(i[n]=d({},i[n]));return i}function T(e){null!=e&&this.set(e)}function b(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return Y(s)?s.call(t,n):s}function P(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function W(){return this._invalidDate}function R(e){return this._ordinal.replace("%d",e)}function C(e,t,n,s){var i=this._relativeTime[n];return Y(i)?i(e,t,n,s):i.replace(/%d/i,e)}function F(e,t){var n=this._relativeTime[e>0?"future":"past"];return Y(n)?n(t):n.replace(/%s/i,t)}function U(e,t){var n=e.toLowerCase();Fi[n]=Fi[n+"s"]=Fi[t]=e}function H(e){return"string"==typeof e?Fi[e]||Fi[e.toLowerCase()]:void 0}function L(e){var t,n,s={};for(n in e)l(e,n)&&(t=H(n),t&&(s[t]=e[n]));return s}function G(e,t){Ui[e]=t}function V(e){var t=[];for(var n in e)t.push({unit:n,priority:Ui[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function j(t,n){return function(s){return null!=s?(E(this,t,s),e.updateOffset(this,n),this):A(this,t)}}function A(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():0/0}function E(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function I(e){return e=H(e),Y(this[e])?this[e]():this}function Z(e,t){if("object"==typeof e){e=L(e);for(var n=V(e),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit])}else if(e=H(e),Y(this[e]))return this[e](t);return this}function z(e,t,n){var s=""+Math.abs(e),i=t-s.length,r=e>=0;return(r?n?"+":"":"-")+(""+Math.pow(10,Math.max(0,i))).substr(1)+s}function N(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(Vi[e]=i),t&&(Vi[t[0]]=function(){return z(i.apply(this,arguments),t[1],t[2])}),n&&(Vi[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function $(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function q(e){var t,n,s=e.match(Hi);for(t=0,n=s.length;n>t;t++)s[t]=Vi[s[t]]?Vi[s[t]]:$(s[t]);return function(t){var i,r="";for(i=0;n>i;i++)r+=Y(s[i])?s[i].call(t,e):s[i];return r}}function J(e,t){return e.isValid()?(t=B(t,e.localeData()),Gi[t]=Gi[t]||q(t),Gi[t](e)):e.localeData().invalidDate()}function B(e,t){function n(e){return t.longDateFormat(e)||e}var s=5;for(Li.lastIndex=0;s>=0&&Li.test(e);)e=e.replace(Li,n),Li.lastIndex=0,s-=1;return e}function Q(e,t,n){sr[e]=Y(t)?t:function(e){return e&&n?n:t}}function X(e,t){return l(sr,e)?sr[e](t._strict,t._locale):RegExp(K(e))}function K(e){return et(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i}))}function et(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function tt(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)ir[e[n]]=s}function nt(e,t){tt(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function st(e,t,n){null!=t&&l(ir,e)&&ir[e](t,n._a,n,e)}function it(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function rt(e,t){return e?n(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||_r).test(t)?"format":"standalone"][e.month()]:n(this._months)?this._months:this._months.standalone}function at(e,t){return e?n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[_r.test(t)?"format":"standalone"][e.month()]:n(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ot(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;12>s;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?(i=mr.call(this._shortMonthsParse,a),-1!==i?i:null):(i=mr.call(this._longMonthsParse,a),-1!==i?i:null):"MMM"===t?(i=mr.call(this._shortMonthsParse,a),-1!==i?i:(i=mr.call(this._longMonthsParse,a),-1!==i?i:null)):(i=mr.call(this._longMonthsParse,a),-1!==i?i:(i=mr.call(this._shortMonthsParse,a),-1!==i?i:null))}function ut(e,t,n){var s,i,r;if(this._monthsParseExact)return ot.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}}function lt(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=w(t);else if(t=e.localeData().monthsParse(t),!a(t))return e;return n=Math.min(e.date(),it(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function dt(t){return null!=t?(lt(this,t),e.updateOffset(this,!0),this):A(this,"Month")}function ht(){return it(this.year(),this.month())}function ct(e){return this._monthsParseExact?(l(this,"_monthsRegex")||mt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=pr),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ft(e){return this._monthsParseExact?(l(this,"_monthsRegex")||mt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=vr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function mt(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;12>t;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;12>t;t++)s[t]=et(s[t]),i[t]=et(i[t]);for(t=0;24>t;t++)r[t]=et(r[t]);this._monthsRegex=RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=RegExp("^("+s.join("|")+")","i")}function _t(e){return yt(e)?366:365}function yt(e){return e%4===0&&e%100!==0||e%400===0}function gt(){return yt(this.year())}function pt(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return 100>e&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function vt(e){var t=new Date(Date.UTC.apply(null,arguments));return 100>e&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function wt(e,t,n){var s=7+t-n,i=(7+vt(e,0,s).getUTCDay()-t)%7;return-i+s-1}function Mt(e,t,n,s,i){var r,a,o=(7+n-s)%7,u=wt(e,s,i),l=1+7*(t-1)+o+u;return l>0?l>_t(e)?(r=e+1,a=l-_t(e)):(r=e,a=l):(r=e-1,a=_t(r)+l),{year:r,dayOfYear:a}}function St(e,t,n){var s,i,r=wt(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return 1>a?(i=e.year()-1,s=a+kt(i,t,n)):a>kt(e.year(),t,n)?(s=a-kt(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function kt(e,t,n){var s=wt(e,t,n),i=wt(e+1,t,n);return(_t(e)-s+i)/7}function Dt(e){return St(e,this._week.dow,this._week.doy).week}function Yt(){return this._week.dow}function Ot(){return this._week.doy}function xt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Tt(e){var t=St(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function bt(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Pt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Wt(e,t){return e?n(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:n(this._weekdays)?this._weekdays:this._weekdays.standalone}function Rt(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ct(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ft(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;7>s;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?(i=mr.call(this._weekdaysParse,a),-1!==i?i:null):"ddd"===t?(i=mr.call(this._shortWeekdaysParse,a),-1!==i?i:null):(i=mr.call(this._minWeekdaysParse,a),-1!==i?i:null):"dddd"===t?(i=mr.call(this._weekdaysParse,a),-1!==i?i:(i=mr.call(this._shortWeekdaysParse,a),-1!==i?i:(i=mr.call(this._minWeekdaysParse,a),-1!==i?i:null))):"ddd"===t?(i=mr.call(this._shortWeekdaysParse,a),-1!==i?i:(i=mr.call(this._weekdaysParse,a),-1!==i?i:(i=mr.call(this._minWeekdaysParse,a),-1!==i?i:null))):(i=mr.call(this._minWeekdaysParse,a),-1!==i?i:(i=mr.call(this._weekdaysParse,a),-1!==i?i:(i=mr.call(this._shortWeekdaysParse,a),-1!==i?i:null)))}function Ut(e,t,n){var s,i,r;if(this._weekdaysParseExact)return Ft.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;7>s;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}}function Ht(e){if(!this.isValid())return null!=e?this:0/0;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=bt(e,this.localeData()),this.add(e-t,"d")):t}function Lt(e){if(!this.isValid())return null!=e?this:0/0;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Gt(e){if(!this.isValid())return null!=e?this:0/0;if(null!=e){var t=Pt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Vt(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Et.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=Yr),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function jt(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Et.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Or),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function At(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Et.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Et(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;7>t;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;7>t;t++)o[t]=et(o[t]),u[t]=et(u[t]),l[t]=et(l[t]);this._weekdaysRegex=RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=RegExp("^("+a.join("|")+")","i")}function It(){return this.hours()%12||12}function Zt(){return this.hours()||24}function zt(e,t){N(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Nt(e,t){return t._meridiemParse}function $t(e){return"p"===(e+"").toLowerCase().charAt(0)}function qt(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Jt(e){return e?e.toLowerCase().replace("_","-"):e}function Bt(e){for(var t,n,s,i,r=0;r<e.length;){for(i=Jt(e[r]).split("-"),t=i.length,n=Jt(e[r+1]),n=n?n.split("-"):null;t>0;){if(s=Qt(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&M(i,n,!0)>=t-1)break;t--}r++}return null}function Qt(e){var t=null;if(!Rr[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Tr._abbr,require("./locale/"+e),Xt(t)}catch(n){}return Rr[e]}function Xt(e,t){var n;return e&&(n=r(t)?tn(e):Kt(e,t),n&&(Tr=n)),Tr._abbr}function Kt(e,t){if(null!==t){var n=Wr;if(t.abbr=e,null!=Rr[e])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Rr[e]._config;else if(null!=t.parentLocale){if(null==Rr[t.parentLocale])return Cr[t.parentLocale]||(Cr[t.parentLocale]=[]),Cr[t.parentLocale].push({name:e,config:t}),null;n=Rr[t.parentLocale]._config}return Rr[e]=new T(x(n,t)),Cr[e]&&Cr[e].forEach(function(e){Kt(e.name,e.config)}),Xt(e),Rr[e]}return delete Rr[e],null}function en(e,t){if(null!=t){var n,s=Wr;null!=Rr[e]&&(s=Rr[e]._config),t=x(s,t),n=new T(t),n.parentLocale=Rr[e],Rr[e]=n,Xt(e)}else null!=Rr[e]&&(null!=Rr[e].parentLocale?Rr[e]=Rr[e].parentLocale:null!=Rr[e]&&delete Rr[e]);return Rr[e]}function tn(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Tr;if(!n(e)){if(t=Qt(e))return t;e=[e]}return Bt(e)}function nn(){return xi(Rr)}function sn(e){var t,n=e._a;return n&&-2===f(e).overflow&&(t=n[ar]<0||n[ar]>11?ar:n[or]<1||n[or]>it(n[rr],n[ar])?or:n[ur]<0||n[ur]>24||24===n[ur]&&(0!==n[lr]||0!==n[dr]||0!==n[hr])?ur:n[lr]<0||n[lr]>59?lr:n[dr]<0||n[dr]>59?dr:n[hr]<0||n[hr]>999?hr:-1,f(e)._overflowDayOfYear&&(rr>t||t>or)&&(t=or),f(e)._overflowWeeks&&-1===t&&(t=cr),f(e)._overflowWeekday&&-1===t&&(t=fr),f(e).overflow=t),e}function rn(e){var t,n,s,i,r,a,o=e._i,u=Fr.exec(o)||Ur.exec(o);if(u){for(f(e).iso=!0,t=0,n=Lr.length;n>t;t++)if(Lr[t][1].exec(u[1])){i=Lr[t][0],s=Lr[t][2]!==!1;break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=Gr.length;n>t;t++)if(Gr[t][1].exec(u[3])){r=(u[2]||" ")+Gr[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!Hr.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),cn(e)}else e._isValid=!1}function an(e){var t,n,s,i,r,a,o,u,l={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},d="YXWVUTSRQPONZABCDEFGHIKLM";if(t=e._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),n=jr.exec(t)){if(s=n[1]?"ddd"+(5===n[1].length?", ":" "):"",i="D MMM "+(n[2].length>10?"YYYY ":"YY "),r="HH:mm"+(n[4]?":ss":""),n[1]){var h=new Date(n[2]),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][h.getDay()];if(n[1].substr(0,3)!==c)return f(e).weekdayMismatch=!0,void(e._isValid=!1)}switch(n[5].length){case 2:0===u?o=" +0000":(u=d.indexOf(n[5][1].toUpperCase())-12,o=(0>u?" -":" +")+(""+u).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:o=l[n[5]];break;default:o=l[" GMT"]}n[5]=o,e._i=n.splice(1).join(""),a=" ZZ",e._f=s+i+r+a,cn(e),f(e).rfc2822=!0}else e._isValid=!1}function on(t){var n=Vr.exec(t._i);return null!==n?void(t._d=new Date(+n[1])):(rn(t),void(t._isValid===!1&&(delete t._isValid,an(t),t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t)))))}function un(e,t,n){return null!=e?e:null!=t?t:n}function ln(t){var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function dn(e){var t,n,s,i,r=[];if(!e._d){for(s=ln(e),e._w&&null==e._a[or]&&null==e._a[ar]&&hn(e),null!=e._dayOfYear&&(i=un(e._a[rr],s[rr]),(e._dayOfYear>_t(i)||0===e._dayOfYear)&&(f(e)._overflowDayOfYear=!0),n=vt(i,0,e._dayOfYear),e._a[ar]=n.getUTCMonth(),e._a[or]=n.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=r[t]=s[t];for(;7>t;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ur]&&0===e._a[lr]&&0===e._a[dr]&&0===e._a[hr]&&(e._nextDay=!0,e._a[ur]=0),e._d=(e._useUTC?vt:pt).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ur]=24)}}function hn(e){var t,n,s,i,r,a,o,u;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)r=1,a=4,n=un(t.GG,e._a[rr],St(wn(),1,4).year),s=un(t.W,1),i=un(t.E,1),(1>i||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=St(wn(),r,a);n=un(t.gg,e._a[rr],l.year),s=un(t.w,l.week),null!=t.d?(i=t.d,(0>i||i>6)&&(u=!0)):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}1>s||s>kt(n,r,a)?f(e)._overflowWeeks=!0:null!=u?f(e)._overflowWeekday=!0:(o=Mt(n,s,i,r,a),e._a[rr]=o.year,e._dayOfYear=o.dayOfYear)}function cn(t){if(t._f===e.ISO_8601)return void rn(t);if(t._f===e.RFC_2822)return void an(t);t._a=[],f(t).empty=!0;var n,s,i,r,a,o=""+t._i,u=o.length,l=0;for(i=B(t._f,t._locale).match(Hi)||[],n=0;n<i.length;n++)r=i[n],s=(o.match(X(r,t))||[])[0],s&&(a=o.substr(0,o.indexOf(s)),a.length>0&&f(t).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),l+=s.length),Vi[r]?(s?f(t).empty=!1:f(t).unusedTokens.push(r),st(r,s,t)):t._strict&&!s&&f(t).unusedTokens.push(r);f(t).charsLeftOver=u-l,o.length>0&&f(t).unusedInput.push(o),t._a[ur]<=12&&f(t).bigHour===!0&&t._a[ur]>0&&(f(t).bigHour=void 0),f(t).parsedDateParts=t._a.slice(0),f(t).meridiem=t._meridiem,t._a[ur]=fn(t._locale,t._a[ur],t._meridiem),dn(t),sn(t)}function fn(e,t,n){var s;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(s=e.isPM(n),s&&12>t&&(t+=12),s||12!==t||(t=0),t):t}function mn(e){var t,n,s,i,r;if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(0/0));for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],cn(t),m(t)&&(r+=f(t).charsLeftOver,r+=10*f(t).unusedTokens.length,f(t).score=r,(null==s||s>r)&&(s=r,n=t));d(e,n||t)}function _n(e){if(!e._d){var t=L(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),dn(e)}}function yn(e){var t=new g(sn(gn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function gn(e){var t=e._i,s=e._f;return e._locale=e._locale||tn(e._l),null===t||void 0===s&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),p(t)?new g(sn(t)):(o(t)?e._d=t:n(s)?mn(e):s?cn(e):pn(e),m(e)||(e._d=null),e))}function pn(t){var i=t._i;r(i)?t._d=new Date(e.now()):o(i)?t._d=new Date(i.valueOf()):"string"==typeof i?on(t):n(i)?(t._a=u(i.slice(0),function(e){return parseInt(e,10)}),dn(t)):s(i)?_n(t):a(i)?t._d=new Date(i):e.createFromInputFallback(t)}function vn(e,t,r,a,o){var u={};return(r===!0||r===!1)&&(a=r,r=void 0),(s(e)&&i(e)||n(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=r,u._i=e,u._f=t,u._strict=a,yn(u)}function wn(e,t,n,s){return vn(e,t,n,s,!1)}function Mn(e,t){var s,i;if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return wn();for(s=t[0],i=1;i<t.length;++i)(!t[i].isValid()||t[i][e](s))&&(s=t[i]);return s}function Sn(){var e=[].slice.call(arguments,0);return Mn("isBefore",e)}function kn(){var e=[].slice.call(arguments,0);return Mn("isAfter",e)}function Dn(e){for(var t in e)if(-1===Zr.indexOf(t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Zr.length;++s)if(e[Zr[s]]){if(n)return!1;parseFloat(e[Zr[s]])!==w(e[Zr[s]])&&(n=!0)}return!0}function Yn(){return this._isValid}function On(){return zn(0/0)}function xn(e){var t=L(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=Dn(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=tn(),this._bubble()}function Tn(e){return e instanceof xn}function bn(e){return 0>e?-1*Math.round(-1*e):Math.round(e)}function Pn(e,t){N(e,0,0,function(){var e=this.utcOffset(),n="+";return 0>e&&(e=-e,n="-"),n+z(~~(e/60),2)+t+z(~~e%60,2)})}function Wn(e,t){var n=(t||"").match(e);if(null===n)return null;var s=n[n.length-1]||[],i=(s+"").match(zr)||["-",0,0],r=+(60*i[1])+w(i[2]);return 0===r?0:"+"===i[0]?r:-r}function Rn(t,n){var s,i;return n._isUTC?(s=n.clone(),i=(p(t)||o(t)?t.valueOf():wn(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),e.updateOffset(s,!1),s):wn(t).local()}function Cn(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Fn(t,n,s){var i,r=this._offset||0;if(!this.isValid())return null!=t?this:0/0;if(null!=t){if("string"==typeof t){if(t=Wn(er,t),null===t)return this}else Math.abs(t)<16&&!s&&(t=60*t);return!this._isUTC&&n&&(i=Cn(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==t&&(!n||this._changeInProgress?Bn(this,zn(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Cn(this)}function Un(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Hn(e){return this.utcOffset(0,e)}function Ln(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Cn(this),"m")),this}function Gn(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Wn(Ki,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Vn(e){return this.isValid()?(e=e?wn(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function jn(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function An(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),e=gn(e),e._a){var t=e._isUTC?h(e._a):wn(e._a);this._isDSTShifted=this.isValid()&&M(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function En(){return this.isValid()?!this._isUTC:!1}function In(){return this.isValid()?this._isUTC:!1}function Zn(){return this.isValid()?this._isUTC&&0===this._offset:!1}function zn(e,t){var n,s,i,r=e,o=null;return Tn(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Nr.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:w(o[or])*n,h:w(o[ur])*n,m:w(o[lr])*n,s:w(o[dr])*n,ms:w(bn(1e3*o[hr]))*n}):(o=$r.exec(e))?(n="-"===o[1]?-1:1,r={y:Nn(o[2],n),M:Nn(o[3],n),w:Nn(o[4],n),d:Nn(o[5],n),h:Nn(o[6],n),m:Nn(o[7],n),s:Nn(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=qn(wn(r.from),wn(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new xn(r),Tn(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function Nn(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function $n(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function qn(e,t){var n;return e.isValid()&&t.isValid()?(t=Rn(t,e),e.isBefore(t)?n=$n(e,t):(n=$n(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Jn(e,t){return function(n,s){var i,r;return null===s||isNaN(+s)||(D(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),n="string"==typeof n?+n:n,i=zn(n,s),Bn(this,i,e),this}}function Bn(t,n,s,i){var r=n._milliseconds,a=bn(n._days),o=bn(n._months);t.isValid()&&(i=null==i?!0:i,r&&t._d.setTime(t._d.valueOf()+r*s),a&&E(t,"Date",A(t,"Date")+a*s),o&&lt(t,A(t,"Month")+o*s),i&&e.updateOffset(t,a||o))}function Qn(e,t){var n=e.diff(t,"days",!0);return-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse"}function Xn(t,n){var s=t||wn(),i=Rn(s,this).startOf("day"),r=e.calendarFormat(this,i)||"sameElse",a=n&&(Y(n[r])?n[r].call(this,s):n[r]);return this.format(a||this.localeData().calendar(r,this,wn(s)))}function Kn(){return new g(this)}function es(e,t){var n=p(e)?e:wn(e);return this.isValid()&&n.isValid()?(t=H(r(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function ts(e,t){var n=p(e)?e:wn(e);return this.isValid()&&n.isValid()?(t=H(r(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function ns(e,t,n,s){return s=s||"()",("("===s[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))}function ss(e,t){var n,s=p(e)?e:wn(e);return this.isValid()&&s.isValid()?(t=H(t||"millisecond"),"millisecond"===t?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function is(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function rs(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function as(e,t,n){var s,i,r,a;return this.isValid()?(s=Rn(e,this),s.isValid()?(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t),"year"===t||"month"===t||"quarter"===t?(a=os(this,s),"quarter"===t?a/=3:"year"===t&&(a/=12)):(r=this-s,a="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-i)/864e5:"week"===t?(r-i)/6048e5:r),n?a:v(a)):0/0):0/0}function os(e,t){var n,s,i=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(i,"months");return 0>t-r?(n=e.clone().add(i-1,"months"),s=(t-r)/(r-n)):(n=e.clone().add(i+1,"months"),s=(t-r)/(n-r)),-(i+s)||0}function us(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ls(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?J(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Y(Date.prototype.toISOString)?this.toDate().toISOString():J(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ds(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0>this.year()||this.year()>9999?"YYYYYY":"YYYY",i="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]';return this.format(n+s+i+r)}function hs(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var n=J(this,t);return this.localeData().postformat(n)}function cs(e,t){return this.isValid()&&(p(e)&&e.isValid()||wn(e).isValid())?zn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function fs(e){return this.from(wn(),e)}function ms(e,t){return this.isValid()&&(p(e)&&e.isValid()||wn(e).isValid())?zn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function _s(e){return this.to(wn(),e)}function ys(e){var t;return void 0===e?this._locale._abbr:(t=tn(e),null!=t&&(this._locale=t),this)}function gs(){return this._locale}function ps(e){switch(e=H(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function vs(e){return e=H(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function ws(){return this._d.valueOf()-6e4*(this._offset||0)}function Ms(){return Math.floor(this.valueOf()/1e3)}function Ss(){return new Date(this.valueOf())}function ks(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ds(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ys(){return this.isValid()?this.toISOString():null}function Os(){return m(this)}function xs(){return d({},f(this))}function Ts(){return f(this).overflow}function bs(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ps(e,t){N(0,[e,e.length],0,t)}function Ws(e){return Us.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rs(e){return Us.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Cs(){return kt(this.year(),1,4)}function Fs(){var e=this.localeData()._week;return kt(this.year(),e.dow,e.doy)}function Us(e,t,n,s,i){var r;return null==e?St(this,s,i).year:(r=kt(e,s,i),t>r&&(t=r),Hs.call(this,e,t,n,s,i))}function Hs(e,t,n,s,i){var r=Mt(e,t,n,s,i),a=vt(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Ls(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Gs(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function Vs(e,t){t[hr]=w(1e3*("0."+e))}function js(){return this._isUTC?"UTC":""}function As(){return this._isUTC?"Coordinated Universal Time":""}function Es(e){return wn(1e3*e)}function Is(){return wn.apply(null,arguments).parseZone()}function Zs(e){return e}function zs(e,t,n,s){var i=tn(),r=h().set(s,t);return i[n](r,e)}function Ns(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return zs(e,t,n,"month");var s,i=[];for(s=0;12>s;s++)i[s]=zs(e,s,n,"month");return i}function $s(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i=tn(),r=e?i._week.dow:0;if(null!=n)return zs(t,(n+r)%7,s,"day");var o,u=[];for(o=0;7>o;o++)u[o]=zs(t,(o+r)%7,s,"day");return u}function qs(e,t){return Ns(e,t,"months")}function Js(e,t){return Ns(e,t,"monthsShort")}function Bs(e,t,n){return $s(e,t,n,"weekdays")}function Qs(e,t,n){return $s(e,t,n,"weekdaysShort")}function Xs(e,t,n){return $s(e,t,n,"weekdaysMin")}function Ks(){var e=this._data;return this._milliseconds=ia(this._milliseconds),this._days=ia(this._days),this._months=ia(this._months),e.milliseconds=ia(e.milliseconds),e.seconds=ia(e.seconds),e.minutes=ia(e.minutes),e.hours=ia(e.hours),e.months=ia(e.months),e.years=ia(e.years),this}function ei(e,t,n,s){var i=zn(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function ti(e,t){return ei(this,e,t,1)}function ni(e,t){return ei(this,e,t,-1)}function si(e){return 0>e?Math.floor(e):Math.ceil(e)}function ii(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||0>=r&&0>=a&&0>=o||(r+=864e5*si(ai(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=v(r/1e3),u.seconds=e%60,t=v(e/60),u.minutes=t%60,n=v(t/60),u.hours=n%24,a+=v(n/24),i=v(ri(a)),o+=i,a-=si(ai(i)),s=v(o/12),o%=12,u.days=a,u.months=o,u.years=s,this}function ri(e){return 4800*e/146097}function ai(e){return 146097*e/4800}function oi(e){if(!this.isValid())return 0/0;var t,n,s=this._milliseconds;if(e=H(e),"month"===e||"year"===e)return t=this._days+s/864e5,n=this._months+ri(t),"month"===e?n:n/12;switch(t=this._days+Math.round(ai(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw Error("Unknown unit "+e)}}function ui(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):0/0}function li(e){return function(){return this.as(e)}}function di(e){return e=H(e),this.isValid()?this[e+"s"]():0/0}function hi(e){return function(){return this.isValid()?this._data[e]:0/0}}function ci(){return v(this.days()/7)}function fi(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}function mi(e,t,n){var s=zn(e).abs(),i=wa(s.as("s")),r=wa(s.as("m")),a=wa(s.as("h")),o=wa(s.as("d")),u=wa(s.as("M")),l=wa(s.as("y")),d=i<=Ma.ss&&["s",i]||i<Ma.s&&["ss",i]||1>=r&&["m"]||r<Ma.m&&["mm",r]||1>=a&&["h"]||a<Ma.h&&["hh",a]||1>=o&&["d"]||o<Ma.d&&["dd",o]||1>=u&&["M"]||u<Ma.M&&["MM",u]||1>=l&&["y"]||["yy",l];return d[2]=t,d[3]=+e>0,d[4]=n,fi.apply(null,d)}function _i(e){return void 0===e?wa:"function"==typeof e?(wa=e,!0):!1}function yi(e,t){return void 0===Ma[e]?!1:void 0===t?Ma[e]:(Ma[e]=t,"s"===e&&(Ma.ss=t-1),!0)}function gi(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=mi(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function pi(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s=Sa(this._milliseconds)/1e3,i=Sa(this._days),r=Sa(this._months);e=v(s/60),t=v(e/60),s%=60,e%=60,n=v(r/12),r%=12;var a=n,o=r,u=i,l=t,d=e,h=s,c=this.asSeconds();return c?(0>c?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(l||d||h?"T":"")+(l?l+"H":"")+(d?d+"M":"")+(h?h+"S":""):"P0D"}var vi,wi;wi=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;n>s;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var Mi=wi,Si=e.momentProperties=[],ki=!1,Di={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Yi;Yi=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var Oi,xi=Yi,Ti={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},bi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Pi="Invalid date",Wi="%d",Ri=/\d{1,2}/,Ci={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Fi={},Ui={},Hi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Li=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Gi={},Vi={},ji=/\d/,Ai=/\d\d/,Ei=/\d{3}/,Ii=/\d{4}/,Zi=/[+-]?\d{6}/,zi=/\d\d?/,Ni=/\d\d\d\d?/,$i=/\d\d\d\d\d\d?/,qi=/\d{1,3}/,Ji=/\d{1,4}/,Bi=/[+-]?\d{1,6}/,Qi=/\d+/,Xi=/[+-]?\d+/,Ki=/Z|[+-]\d\d:?\d\d/gi,er=/Z|[+-]\d\d(?::?\d\d)?/gi,tr=/[+-]?\d+(\.\d{1,3})?/,nr=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,sr={},ir={},rr=0,ar=1,or=2,ur=3,lr=4,dr=5,hr=6,cr=7,fr=8;Oi=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};var mr=Oi;N("M",["MM",2],"Mo",function(){return this.month()+1}),N("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),N("MMMM",0,0,function(e){return this.localeData().months(this,e)}),U("month","M"),G("month",8),Q("M",zi),Q("MM",zi,Ai),Q("MMM",function(e,t){return t.monthsShortRegex(e)}),Q("MMMM",function(e,t){return t.monthsRegex(e)}),tt(["M","MM"],function(e,t){t[ar]=w(e)-1}),tt(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ar]=i:f(n).invalidMonth=e});var _r=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,yr="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),gr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pr=nr,vr=nr;N("Y",0,0,function(){var e=this.year();return e>9999?"+"+e:""+e}),N(0,["YY",2],0,function(){return this.year()%100}),N(0,["YYYY",4],0,"year"),N(0,["YYYYY",5],0,"year"),N(0,["YYYYYY",6,!0],0,"year"),U("year","y"),G("year",1),Q("Y",Xi),Q("YY",zi,Ai),Q("YYYY",Ji,Ii),Q("YYYYY",Bi,Zi),Q("YYYYYY",Bi,Zi),tt(["YYYYY","YYYYYY"],rr),tt("YYYY",function(t,n){n[rr]=2===t.length?e.parseTwoDigitYear(t):w(t)}),tt("YY",function(t,n){n[rr]=e.parseTwoDigitYear(t)}),tt("Y",function(e,t){t[rr]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var wr=j("FullYear",!0);N("w",["ww",2],"wo","week"),N("W",["WW",2],"Wo","isoWeek"),U("week","w"),U("isoWeek","W"),G("week",5),G("isoWeek",5),Q("w",zi),Q("ww",zi,Ai),Q("W",zi),Q("WW",zi,Ai),nt(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=w(e)});var Mr={dow:0,doy:6};N("d",0,"do","day"),N("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),N("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),N("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),N("e",0,0,"weekday"),N("E",0,0,"isoWeekday"),U("day","d"),U("weekday","e"),U("isoWeekday","E"),G("day",11),G("weekday",11),G("isoWeekday",11),Q("d",zi),Q("e",zi),Q("E",zi),Q("dd",function(e,t){return t.weekdaysMinRegex(e)}),Q("ddd",function(e,t){return t.weekdaysShortRegex(e)}),Q("dddd",function(e,t){return t.weekdaysRegex(e)}),nt(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:f(n).invalidWeekday=e}),nt(["d","e","E"],function(e,t,n,s){t[s]=w(e)});var Sr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),kr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Dr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Yr=nr,Or=nr,xr=nr;N("H",["HH",2],0,"hour"),N("h",["hh",2],0,It),N("k",["kk",2],0,Zt),N("hmm",0,0,function(){return""+It.apply(this)+z(this.minutes(),2)}),N("hmmss",0,0,function(){return""+It.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)}),N("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)}),N("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)}),zt("a",!0),zt("A",!1),U("hour","h"),G("hour",13),Q("a",Nt),Q("A",Nt),Q("H",zi),Q("h",zi),Q("k",zi),Q("HH",zi,Ai),Q("hh",zi,Ai),Q("kk",zi,Ai),Q("hmm",Ni),Q("hmmss",$i),Q("Hmm",Ni),Q("Hmmss",$i),tt(["H","HH"],ur),tt(["k","kk"],function(e,t){var n=w(e);t[ur]=24===n?0:n}),tt(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),tt(["h","hh"],function(e,t,n){t[ur]=w(e),f(n).bigHour=!0}),tt("hmm",function(e,t,n){var s=e.length-2;t[ur]=w(e.substr(0,s)),t[lr]=w(e.substr(s)),f(n).bigHour=!0}),tt("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ur]=w(e.substr(0,s)),t[lr]=w(e.substr(s,2)),t[dr]=w(e.substr(i)),f(n).bigHour=!0}),tt("Hmm",function(e,t){var n=e.length-2;t[ur]=w(e.substr(0,n)),t[lr]=w(e.substr(n))}),tt("Hmmss",function(e,t){var n=e.length-4,s=e.length-2;t[ur]=w(e.substr(0,n)),t[lr]=w(e.substr(n,2)),t[dr]=w(e.substr(s))});var Tr,br=/[ap]\.?m?\.?/i,Pr=j("Hours",!0),Wr={calendar:Ti,longDateFormat:bi,invalidDate:Pi,ordinal:Wi,dayOfMonthOrdinalParse:Ri,relativeTime:Ci,months:yr,monthsShort:gr,week:Mr,weekdays:Sr,weekdaysMin:Dr,weekdaysShort:kr,meridiemParse:br},Rr={},Cr={},Fr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ur=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hr=/Z|[+-]\d\d(?::?\d\d)?/,Lr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Gr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Vr=/^\/?Date\((\-?\d+)/i,jr=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var Ar=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=wn.apply(null,arguments);return this.isValid()&&e.isValid()?this>e?this:e:_()}),Er=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=wn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:_()}),Ir=function(){return Date.now?Date.now():+new Date},Zr=["year","quarter","month","week","day","hour","minute","second","millisecond"];Pn("Z",":"),Pn("ZZ",""),Q("Z",er),Q("ZZ",er),tt(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Wn(er,e)});var zr=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var Nr=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,$r=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;zn.fn=xn.prototype,zn.invalid=On;var qr=Jn(1,"add"),Jr=Jn(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Br=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});N(0,["gg",2],0,function(){return this.weekYear()%100}),N(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ps("gggg","weekYear"),Ps("ggggg","weekYear"),Ps("GGGG","isoWeekYear"),Ps("GGGGG","isoWeekYear"),U("weekYear","gg"),U("isoWeekYear","GG"),G("weekYear",1),G("isoWeekYear",1),Q("G",Xi),Q("g",Xi),Q("GG",zi,Ai),Q("gg",zi,Ai),Q("GGGG",Ji,Ii),Q("gggg",Ji,Ii),Q("GGGGG",Bi,Zi),Q("ggggg",Bi,Zi),nt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=w(e)}),nt(["gg","GG"],function(t,n,s,i){n[i]=e.parseTwoDigitYear(t)}),N("Q",0,"Qo","quarter"),U("quarter","Q"),G("quarter",7),Q("Q",ji),tt("Q",function(e,t){t[ar]=3*(w(e)-1)}),N("D",["DD",2],"Do","date"),U("date","D"),G("date",9),Q("D",zi),Q("DD",zi,Ai),Q("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),tt(["D","DD"],or),tt("Do",function(e,t){t[or]=w(e.match(zi)[0],10)});var Qr=j("Date",!0);N("DDD",["DDDD",3],"DDDo","dayOfYear"),U("dayOfYear","DDD"),G("dayOfYear",4),Q("DDD",qi),Q("DDDD",Ei),tt(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),N("m",["mm",2],0,"minute"),U("minute","m"),G("minute",14),Q("m",zi),Q("mm",zi,Ai),tt(["m","mm"],lr);var Xr=j("Minutes",!1);N("s",["ss",2],0,"second"),U("second","s"),G("second",15),Q("s",zi),Q("ss",zi,Ai),tt(["s","ss"],dr);var Kr=j("Seconds",!1);N("S",0,0,function(){return~~(this.millisecond()/100)}),N(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),N(0,["SSS",3],0,"millisecond"),N(0,["SSSS",4],0,function(){return 10*this.millisecond()}),N(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),N(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),N(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),N(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),N(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),U("millisecond","ms"),G("millisecond",16),Q("S",qi,ji),Q("SS",qi,Ai),Q("SSS",qi,Ei);var ea;for(ea="SSSS";ea.length<=9;ea+="S")Q(ea,Qi);for(ea="S";ea.length<=9;ea+="S")tt(ea,Vs);var ta=j("Milliseconds",!1);N("z",0,0,"zoneAbbr"),N("zz",0,0,"zoneName");var na=g.prototype;na.add=qr,na.calendar=Xn,na.clone=Kn,na.diff=as,na.endOf=vs,na.format=hs,na.from=cs,na.fromNow=fs,na.to=ms,na.toNow=_s,na.get=I,na.invalidAt=Ts,na.isAfter=es,na.isBefore=ts,na.isBetween=ns,na.isSame=ss,na.isSameOrAfter=is,na.isSameOrBefore=rs,na.isValid=Os,na.lang=Br,na.locale=ys,na.localeData=gs,na.max=Er,na.min=Ar,na.parsingFlags=xs,na.set=Z,na.startOf=ps,na.subtract=Jr,na.toArray=ks,na.toObject=Ds,na.toDate=Ss,na.toISOString=ls,na.inspect=ds,na.toJSON=Ys,na.toString=us,na.unix=Ms,na.valueOf=ws,na.creationData=bs,na.year=wr,na.isLeapYear=gt,na.weekYear=Ws,na.isoWeekYear=Rs,na.quarter=na.quarters=Ls,na.month=dt,na.daysInMonth=ht,na.week=na.weeks=xt,na.isoWeek=na.isoWeeks=Tt,na.weeksInYear=Fs,na.isoWeeksInYear=Cs,na.date=Qr,na.day=na.days=Ht,na.weekday=Lt,na.isoWeekday=Gt,na.dayOfYear=Gs,na.hour=na.hours=Pr,na.minute=na.minutes=Xr,na.second=na.seconds=Kr,na.millisecond=na.milliseconds=ta,na.utcOffset=Fn,na.utc=Hn,na.local=Ln,na.parseZone=Gn,na.hasAlignedHourOffset=Vn,na.isDST=jn,na.isLocal=En,na.isUtcOffset=In,na.isUtc=Zn,na.isUTC=Zn,na.zoneAbbr=js,na.zoneName=As,na.dates=k("dates accessor is deprecated. Use date instead.",Qr),na.months=k("months accessor is deprecated. Use month instead",dt),na.years=k("years accessor is deprecated. Use year instead",wr),na.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Un),na.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",An);var sa=T.prototype;sa.calendar=b,sa.longDateFormat=P,sa.invalidDate=W,sa.ordinal=R,sa.preparse=Zs,sa.postformat=Zs,sa.relativeTime=C,sa.pastFuture=F,sa.set=O,sa.months=rt,sa.monthsShort=at,sa.monthsParse=ut,sa.monthsRegex=ft,sa.monthsShortRegex=ct,sa.week=Dt,sa.firstDayOfYear=Ot,sa.firstDayOfWeek=Yt,sa.weekdays=Wt,sa.weekdaysMin=Ct,sa.weekdaysShort=Rt,sa.weekdaysParse=Ut,sa.weekdaysRegex=Vt,sa.weekdaysShortRegex=jt,sa.weekdaysMinRegex=At,sa.isPM=$t,sa.meridiem=qt,Xt("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Xt),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",tn);var ia=Math.abs,ra=li("ms"),aa=li("s"),oa=li("m"),ua=li("h"),la=li("d"),da=li("w"),ha=li("M"),ca=li("y"),fa=hi("milliseconds"),ma=hi("seconds"),_a=hi("minutes"),ya=hi("hours"),ga=hi("days"),pa=hi("months"),va=hi("years"),wa=Math.round,Ma={ss:44,s:45,m:45,h:22,d:26,M:11},Sa=Math.abs,ka=xn.prototype;return ka.isValid=Yn,ka.abs=Ks,ka.add=ti,ka.subtract=ni,ka.as=oi,ka.asMilliseconds=ra,ka.asSeconds=aa,ka.asMinutes=oa,ka.asHours=ua,ka.asDays=la,ka.asWeeks=da,ka.asMonths=ha,ka.asYears=ca,ka.valueOf=ui,ka._bubble=ii,ka.get=di,ka.milliseconds=fa,ka.seconds=ma,ka.minutes=_a,ka.hours=ya,ka.days=ga,ka.weeks=ci,ka.months=pa,ka.years=va,ka.humanize=gi,ka.toISOString=pi,ka.toString=pi,ka.toJSON=pi,ka.locale=ys,ka.localeData=gs,ka.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pi),ka.lang=Br,N("X",0,0,"unix"),N("x",0,0,"valueOf"),Q("x",Xi),Q("X",tr),tt("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),tt("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.18.1",t(wn),e.fn=na,e.min=Sn,e.max=kn,e.now=Ir,e.utc=h,e.unix=Es,e.months=qs,e.isDate=o,e.locale=Xt,e.invalid=_,e.duration=zn,e.isMoment=p,e.weekdays=Bs,e.parseZone=Is,e.localeData=tn,e.isDuration=Tn,e.monthsShort=Js,e.weekdaysMin=Xs,e.defineLocale=Kt,e.updateLocale=en,e.locales=nn,e.weekdaysShort=Qs,e.normalizeUnits=H,e.relativeTimeRounding=_i,e.relativeTimeThreshold=yi,e.calendarFormat=Qn,e.prototype=na,e});

var lite = false;
function liteactivate(){
	lite = true;
}


	function BackgroundNode({node, loadedClassName}) {
	let src = node.getAttribute('data-background-image-url');
	let show = (onComplete) => {
		requestAnimationFrame(() => {
			node.style.backgroundImage = `url(${src})`
			node.classList.add(loadedClassName);
			onComplete();
		})
	}

	return {
		node,

		// onComplete is called after the image is done loading.
		load: (onComplete) => {
			let img = new Image();
			img.onload = show(onComplete);
			img.src = src;
		}
	}
}

let defaultOptions = {
	selector: '[data-background-image-url]',
	loadedClassName: 'loaded'
}

function BackgroundLazyLoader({selector, loadedClassName} = defaultOptions) {
	let nodes = [].slice.apply(document.querySelectorAll(selector))
		.map(node => new BackgroundNode({node, loadedClassName}));

	let callback = (entries, observer) => {
		entries.forEach(({target, isIntersecting}) => {
			if (!isIntersecting) {
				return;
			}

			let obj = nodes.find(it => it.node.isSameNode(target));
			
			if (obj) {
				obj.load(() => {
					// Unobserve the node:
					observer.unobserve(target);
					// Remove this node from our list:
					nodes = nodes.filter(n => !n.node.isSameNode(target));
					
					// If there are no remaining unloaded nodes,
					// disconnect the observer since we don't need it anymore.
					if (!nodes.length) {
						observer.disconnect();
					}
				});
			}
		})
	};
	
	let observer = new IntersectionObserver(callback);
	nodes.forEach(node => observer.observe(node.node));
};


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
var showswithimages = {}
/*
window.addEventListener('scroll', function() {
    clearTimeout(timer);

    if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover');
    }

    timer = setTimeout(function(){
        body.classList.remove('disable-hover');
    }, 500);
}, false);
*/

  var hovering;
        var hls = new Hls();

function playHover(element){
	if (isMobile) {
		return;
	}
	var video = document.createElement('video')
video.className = 'sixteen-nine';
video.style.top = '0px';
video.playsinline='';
video.muted = 'true';
video.loop = '';
video.style.width = '100%';
video.style.height = '100%';

element.querySelector('a').insertBefore(video,element.querySelector('img'))


  hovering = setTimeout(function(){

 

    var video = element.querySelector('video')
video.addEventListener("timeupdate", function(e){
if(video.currentTime >= 30)
{
  hls.detachMedia();

}
});
    element.querySelector('.playbutton').style.visibility = 'hidden'
    var url = element.getAttribute('url')
    console.log(url)

      if(Hls.isSupported()) {
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();

  });
              element.querySelector('.cover').style.display = 'none';

 }
if (url.includes('cwtv.com') | url.includes('cwseed.com')) {
var stripped = url.split('?')[1].split('=')[1]
   // HLS = 154 | 206
   // MP4 = 213
   hls.loadSource('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=redirect')
   /*
   var url = "http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/217?format=json"
   fetch(url, {
      method: 'get'
   }).then(function(response) { 
      return response.json();
   }).then(function(data) {
        finalurl = data.videos.variantplaylist_dai.uri;
        var parser = document.createElement('a');
    parser.href = finalurl
    hls.loadSource(parser.href);


   })
   */
}
if (url.includes('api.fox.com')) {
      var finalurl = element.getAttribute('autoplay')

      hls.loadSource(finalurl);

}  






  },5000)


}
function stopHover(element){
	if (isMobile) {
		return;
	}
  clearTimeout(hovering);
    var video = element.querySelector('video')

  hls.detachMedia()
video.currentTime = 0;

    element.querySelector('.playbutton').style.visibility = 'visible'

    element.querySelector('.cover').style.display = 'block';


  }


// code for click to go next
function scroll(d,el){
	console.log(d,el)
}





var textInput = document.getElementById('search');

function addJS(url) {
  var s = document.createElement('script'); // Create a script element
  s.type = "text/javascript"; // optional in html5
  s.async = false; // asynchronous? true/false
  s.src = url;
  var fs = document.getElementsByTagName('script')[0]; // Get the first script
  fs.parentNode.insertBefore(s, fs);
};
// https://github.com/filamentgroup/loadCSS
! function(e) {
  "use strict";
  var n = function(n, t, o) {
    function i(e) {
      return f.body ? e() : void setTimeout(function() {
        i(e)
      })
    }
    var d, r, a, l, f = e.document,
      s = f.createElement("link"),
      u = o || "all";
    return t ? d = t : (r = (f.body || f.getElementsByTagName("head")[0]).childNodes, d = r[r.length - 1]), a = f.styleSheets, s.rel = "stylesheet", s.href = n, s.media = "only x", i(function() {
      d.parentNode.insertBefore(s, t ? d : d.nextSibling)
    }), l = function(e) {
      for (var n = s.href, t = a.length; t--;)
        if (a[t].href === n) return e();
      setTimeout(function() {
        l(e)
      })
    }, s.addEventListener && s.addEventListener("load", function() {
      this.media = u
    }), s.onloadcssdefined = l, l(function() {
      s.media !== u && (s.media = u)
    }), s
  };
  "undefined" != typeof exports ? exports.loadCSS = n : e.loadCSS = n
}("undefined" != typeof global ? global : this);
loadCSS('css/feed.css')

function logIn(u, p) {
  firebase.auth().signInWithEmailAndPassword(u, p).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
      // ...
  });
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser)
    } else {
      console.log('not logged in')
    }
  })
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.visibility = "visible";
            document.getElementById("myBtn").style.opacity = ".4";

  } else {
    document.getElementById("myBtn").style.visibility = "hidden";
        document.getElementById("myBtn").style.opacity = "0";


  } 
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  doScrolling(0,350)

//  document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
function results(num) {
  var res = num + " results found"
  if (num == 1) {
    res = "one result found"
  }
  if (num == 0) {
    res = "no results found"
  }
  if (num == null) {
    res = ""
  }
  document.getElementById('results').innerHTML = res
}



window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset  
  var diff = elementY - startingY  
  var start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

function elementInViewport2(el) {
// return true;

   const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
	var cards = document.querySelectorAll('li')
var images = document.querySelectorAll('.lazy')
var ignored = []
function scrolling(num){
	return;

			requestAnimationFrame(function() {



		for (var i = cards.length - 1; i >= 0; i--) {
			if (ignored.includes(cards[i])) continue;
if(elementInViewport2(cards[i]) || cards[i].parentNode.id == 'watching'){
cards[i].style.visibility = 'visible';
if (cards[i].querySelector('img').getAttribute('done') == 'true') continue;
		requestAnimationFrame(() => {

cards[i].querySelector('img').srcset =  cards[i].querySelector('img').getAttribute('data-original-set');
cards[i].querySelector('img').src =  cards[i].querySelector('img').getAttribute('data-original');
cards[i].querySelector('img').setAttribute('done','true')
})
ignored.push(cards[i])
}else{
	cards[i].style.visibility = 'hidden'

}
}
});
	}


var items 
// Cache: Our client rects are kept here, we can use this to clear them later.
var elemsWithBoundingRects = [];
window.pbsGetBoundingClientRect = function( element ) {
// Check if we already got the client rect before.
if ( ! element._boundingClientRect ) {
// If not, get it then store it for future use.
element._boundingClientRect = element.getBoundingClientRect();
elemsWithBoundingRects.push( element );
}
return element._boundingClientRect;
};


function lazyLoadNew(){
	 items = document.getElementsByClassName('episode')

var options = {
  threshold: 0,
  root: null
}
//  rootMargin:"300px 0px 0px 300px"

    var io = new IntersectionObserver(
    entries => {
for (i in entries){

// ||  entries[i].boundingClientRect.bottom > -50 
pos = entries[i].target.getBoundingClientRect().top - document.body.getBoundingClientRect().top;	
var doc = document.documentElement;
// console.log(pos - (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0) )

// || (pos - (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)) < 2000
console.log()
if(entries[i].isIntersecting && entries[i].intersectionRatio > 0 || entries[i].target.classList[0] == 'new_release'){
//	console.log(entries[i])

	//requestAnimationFrame(function(time){
	//	console.log(time)
// console.log(entries[i])
	if(entries[i].target.hasAttribute('data-original-set')){
 entries[i].target.srcset =  entries[i].target.getAttribute('data-original-set');
};
	if(entries[i].target.hasAttribute('data-original')){
entries[i].target.src =  entries[i].target.getAttribute('data-original');
};



	//})
		io.unobserve(entries[i].target);


}
}
    },
    {
    }
,options);
    io.USE_MUTATION_OBSERVER = false;

// Start observing an element
var Lazyelements = document.querySelectorAll('.lazy')
for (var i = Lazyelements.length - 1; i >= 0; i--) {
Lazyelements[i].onload = function(element) {
if (!element.target.classList.contains('loaded')) {
element.target.classList.add('loaded');

}
}

io.observe(Lazyelements[i])
}
console.timeEnd('initImg')

}
 
function sortTV(){
    var div = document.querySelector('#tvShows'),
        para = document.querySelectorAll('#tvShows .showDiv');
    var paraArr = [].slice.call(para).sort(function (a, b) {
        return a.getAttribute('show') > b.getAttribute('show') ? 1 : -1;
    });
    paraArr.forEach(function (p) {
        div.appendChild(p);
    });

}
function addJS(url) {
  var s = document.createElement('script'); // Create a script element
  s.type = "text/javascript"; // optional in html5
  s.async = true; // asynchronous? true/false
  s.src = url;
  var fs = document.getElementsByTagName('script')[0]; // Get the first script
  fs.parentNode.insertBefore(s, fs);
};
var maxnum = 0
var num = 0

function selectedshows(alreadySelected){
	//	document.getElementsByClassName('clear')[0].style.position = 'absolute';
	//	document.getElementsByClassName('clear')[0].style.right = 0;
	//			document.getElementsByClassName('clear')[0].style.paddingRight = '25px';
	//							document.getElementsByClassName('clear')[0].style.display = '';
	//							document.getElementsByClassName('clear')[0].style.top = 0;
	if (alreadySelected) {
		  	document.getElementById('showsLike').style.display = 'none'

var newfinalshows = []
	for (var i = finalObj.length - 1; i >= 0; i--) {
		if (alreadySelected.includes(finalObj[i].show)) {

			newfinalshows.push(finalObj[i])
		}
	}
 var q = []
 newfinalshows.sort(function(x, y) {
   var date1 = (x.time);
   var date2 = (y.time);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    q.push(x)
  });


  document.getElementById('carasoul').innerHTML = ''
  document.getElementById('watching').innerHTML = ''
  	document.getElementById('showsLike').style.display = 'none'
  			requestAnimationFrame(() => {

  	document.body.setAttribute('class','finished');
})
loadMedia(q)
everythingfinished(alreadySelected)






return;

	}
	var selected = document.querySelectorAll('.checked')
	console.log(selected)
	if (selected.length == 0 ) {

var l = []
finalObj.sort(function(x, y) {
   var date1 = (x.time);
   var date2 = (y.time);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    l.push(x)
  });
loadMedia(l)
  	document.getElementById('showsLike').style.display = 'none'
  	document.body.setAttribute('class','finished');

		everythingfinished()
return;
	}

	var checkedShows = []
	for (var i = selected.length - 1; i >= 0; i--) {
		if(selected[i]){
			checkedShows.push(selected[i].value)

		}
	}
	localStorage['like'] = JSON.stringify(checkedShows)
	console.log(checkedShows)
	var newfinalshows = []
	for (var i = finalObj.length - 1; i >= 0; i--) {
		if (checkedShows.includes(finalObj[i].show)) {
					console.log(finalObj[i])

			newfinalshows.push(finalObj[i])
		}
	}
 var q = []
 newfinalshows.sort(function(x, y) {
   var date1 = (x.time);
   var date2 = (y.time);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    q.push(x)
  });
  document.getElementById('carasoul').innerHTML = ''
  document.getElementById('watching').innerHTML = ''
  	document.getElementById('showsLike').style.display = 'none'
  	document.body.setAttribute('class','finished');
  	document.getElementsByClassName('contain')[0].style.display = 'block'

loadMedia(q)
everythingfinished(checkedShows)

}

function everythingfinished(exclude){

 cards = document.querySelectorAll('li')
 images = document.querySelectorAll('.lazy')
 for (var i = images.length - 1; i >= 0; i--) {
images[i].onload = function(element) {
if (!element.target.classList.contains('loaded')) {
element.target.classList.add('loaded');
}
}
}
lazyLoadNew()


BackgroundLazyLoader();



   if (!document.getElementById('search').value == '') {
        query(document.getElementById('search').value)
      }
       if (document.getElementById('watching').children.length === 0) {
        document.getElementById('wtcTxt').style.display = 'none'
        document.getElementById('upNextDivider').style.display = 'none'

        
      }else{
        document.getElementById('wtcTxt').style.display = 'block'
        document.getElementById('upNextDivider').style.display = 'block'


}

if(!isMobile){

for(var i = document.querySelectorAll('.shows').length - 1; i >= 0; i--){
	// document.querySelectorAll('.shows')[i].style.overflowY = 'initial'
}
}
console.timeEnd();
       

 
}
console.log('started downloading data')
console.time('download_data')
function loaders(atr) {
  if (atr == 'remove') {
  num--
    if (num == 0) {
    	console.time()
console.log('finished downloading data')
console.timeEnd('download_data')

finalObj =  finalObj.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);


if (!isMobile || !window.location.search == '' || window.location.search == '?') {

console.time()
var l = []
finalObj.sort(function(x, y) {
   var date1 = (x.time);
   var date2 = (y.time);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    l.push(x)
  });
loadMedia(l)

everythingfinished()
document.querySelector('.lScreen span').setAttribute('class','logotextdone')
setTimeout(function(){
document.body.setAttribute('class','finished');
  	document.getElementsByClassName('contain')[0].style.display = 'block'
document.querySelector('.lScreen span').setAttribute('class','')
console.timeEnd()

},400)


}else{





	if (localStorage['like']) {
		selectedshows(JSON.parse(localStorage['like']))
		 return;
	}
	var allshowdata = '<h1>What shows do you watch?</h1><p>If nothing is selected then all shows will appear (slower).</p><button onclick="selectedshows()">Ok</button><ul style="    padding: 8px;list-style: none;">'
console.log(showswithimages)
for (i in showswithimages) {
	console.log(showswithimages[i])
	allshowdata += `<li style="padding-bottom:5px;padding-top: 5px;
    margin: 5px;border-radius: 2px;    background: rgba(76, 76, 76, 0.53)!important;" onclick="if(this.querySelector('input').checked){
		this.querySelector('input').checked = false;
		this.querySelector('input').classList = '';
		this.querySelector('.over').style.display = 'none'
	}else{
		this.querySelector('input').checked = true;
		this.querySelector('input').classList += ' checked';
		this.querySelector('.over').style.display = 'flex'

	}">
	<input type="checkbox" class="showButton" value="${i}">
	<div class="image" style=" position: relative;
      width: auto;max-width:50%;    display: inline-block;
  ">
	<img style="  max-width: 100%;
  max-height: 100%;display:inline-block" src="${showswithimages[i]}">
  <div class="over" style="     width: 100%;
    height: 100%;position: absolute;
  top: 0;
  left: 0;
  display: none;
    background: linear-gradient(0deg,rgba(0,0,0,.5) 0,transparent);
        align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 40px;
    color: #fff;
    text-align: center;

  z-index: 200;"><i class="fa fa-check check"></i></div>
	</div>
	${i}
	</input></li>`
}
allshowdata += '</ul>'
	document.getElementById('showsLike').innerHTML = allshowdata


	document.getElementById('showsLike').style.display = ''
}


    }
    if (document.getElementsByClassName('spinner').length == 0) {
     // lazyLoadImages()
    }
    return;
  }
  num++
  if (num > maxnum) {
maxnum = num
  }
console.log(num/maxnum)
  document.getElementById('topprogress').style.transform = 'scaleX(' + ((100 - (num/maxnum *100)) / 100) + ')'
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 196; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
var qtime
function query(q) {
  clearTimeout(qtime)
  var num = 0
 qtime = setTimeout(function() {
    for (var i = 0, len = finalObj.length; i < len; i++) {
    		if(document.getElementsByClassName(finalObj[i].id).length == 0){
      		continue;
      	}
      if ((finalObj[i].show +' '+ finalObj[i].episode).toLowerCase().includes(q.toLowerCase())) {
                document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block';

        num = num + 1
      } else {
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'none';

      }
    }
    results(num)
  }, 100)
}
function showAll(q){
    document.getElementById('search').value = '';

  var num = 0
  setTimeout(function() {
    for (var i = 0, len = finalObj.length; i < len; i++) {
    		if(document.getElementsByClassName(finalObj[i].id).length == 0){
      		continue;
      	}
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block'

        num = num + 1
      }
 results(num)
  }, 10)


}
function scrollShows(name) {
  element = document.getElementById(name)

  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
  }
  if (!elementInViewport2(element)) {
    doScrolling(element.offsetTop,350)

  //  element = document.getElementById("carasoul")
    // element.scrollIntoView(true);
  }
}

function ObjectLength( object ) {
return Object.keys(object).length;
	return;
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};
function showQuery(q, o,type) {
  if (q == null) {
    q = o.getAttribute('show')
      //   document.body.style.background = 'url(' + obj.getAttribute('bg') + ") no-repeat center center fixed";
  };


console.log(q,upnextshows[q],upnextshows[q].seasons)
var episodes =''
var sznLI = ''
var perc = 0 
for(i in upnextshows[q].seasons){
	console.log(upnextshows[q].seasons[i],i)
var horzScroll = ''
if(upnextshows[q].seasonCount() != 1){
horzScroll = 'horizontal-episodes shows dragscroll'
}else{
	console.log('not multiple season')
	horzScroll = 'one_season'
}

	sznLI += `<a onclick="scrollShows('#season${i}')" href="#season${i}"><li  style="width:calc(100% / ${ObjectLength(upnextshows[q].seasons)})">Season ${i}</li></a>`

episodes += `<div style="font-size: x-large;
    padding: 8px;" id="#season${i}">Season ${i}</div><div class="seasonGrouped ${horzScroll}">`
for(z in upnextshows[q].seasons[i]){
	console.log(upnextshows[q].seasons[i][z])
	if(!upnextshows[q].seasons[i][z].episode.toLowerCase().includes('part') && upnextshows[q].seasons[i][z].episode.includes(': ') && q != 'The Blacklist'){
	var splittedName = upnextshows[q].seasons[i][z].episode.split(': ')
	splittedName.shift()
upnextshows[q].seasons[i][z].episode = splittedName.join(': ')
}
var donecol = ''
if( (upnextshows[q].seasons[i][z].length - localStorage['?'+ upnextshows[q].seasons[i][z].link]) < 35){

donecol = "prog_done"; }
var date = new Date(upnextshows[q].seasons[i][z].airdate)
console.log((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear())
	episodes += `<div class="single-episode">


<a href="video.html?${upnextshows[q].seasons[i][z].link}">
    	<div id="${upnextshows[q].seasons[i][z].link}_showEpisode" class="episode   ${upnextshows[q].seasons[i][z].link}">
    	<div class="episode_img"><div class="episode_overlay"></div><img class="hoverEpisode cover  lazy" width="100%" 

data-original="${upnextshows[q].seasons[i][z].img}" onerror="if (this.src != '${showDetail[q].bg}') this.src = '${showDetail[q].bg}';this.srcset = '';"  data-original-set="${upnextshows[q].seasons[i][z].srcset}" 	sizes="(max-width: 600px) 75vw, 40vw" alt="${q}"


	></img></div><div class="episode_number">${upnextshows[q].seasons[i][z].episode_number}</div>
	<div class="episode_naming">
		<span class="episode_title">'${upnextshows[q].seasons[i][z].episode}'</span>

	<div class="episode_details">
	<span>S${upnextshows[q].seasons[i][z].season_number}:E${upnextshows[q].seasons[i][z].episode_number} • ${(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()} • ${Math.round(upnextshows[q].seasons[i][z].length / 60)}m</span>
	</div>
	<a classS="episode_show" onclick="showQuery(null,this)"  show="${q}" href="javascript:">${''}</a>
	</div>
<div class="episode-progressbar ${donecol}" id="progress" length="${upnextshows[q].seasons[i][z].length}" style="width: ${upnextshows[q].seasons[i][z].percentageDone}%;"></div>
</div>
</a>
</div>`
}
episodes += '</div>'
}

var showDIV = q
if(showLogos[q]){
	showDIV = `<div style="margin:auto;max-width:265px;    padding: 5px;"><img width="100%" src="${showLogos[q]}"></div>`
}
document.getElementsByClassName('show_container')[0].id = encodeURIComponent(q)
document.getElementsByClassName('show_container')[0].innerHTML = `
 <hr class="divider">
 <div id="${decodeURIComponent(q)}" class="showTitle_image">${showDIV}</div>
  <ul  style="display:none;" class="seasons"> 
    ${sznLI}
  </ul>
  <div class="show_episodes">
    ${episodes}

  </div>


  `;
if(upnextshows[q].upNext != null){
console.log(upnextshows[q].upNext.link)
document.getElementById(`${upnextshows[q].upNext.link}_showEpisode`).scrollIntoView()

}else{

  if(upnextshows[q].latestWSesN != null){
 // scrollShows(`#season${upnextshows[q].latestWSesN}`)
  	console.log(document.getElementById(`#season${upnextshows[q].latestWSesN}`))
  	document.getElementById(`#season${upnextshows[q].latestWSesN}`).scrollIntoView()

}else{

	document.getElementById(encodeURIComponent(q)).scrollIntoView()

}

}
dragscroll.reset()
refreshContinueWatching()
setTimeout(function(){
lazyLoadNew()
},0)
  

  return;
  document.getElementById('search').value = q

  var num = 0
    for (var i = 0, len = finalObj.length; i < len; i++) {
	if(document.getElementsByClassName(finalObj[i].id).length == 0){
      		continue;
      	}
      if (finalObj[i].show.toLowerCase() == (q.toLowerCase())) {
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block';

        num = num + 1
      } else {
      
                document.getElementsByClassName(finalObj[i].id)[0].style.display = 'none';

      }
    }
    scrollShows()
    results(num)
   // scrolling();
    var Showtype = ''
if (window.location.search.split(':')[0] == '') {
	return;
Showtype = o.getAttribute('data-type')
}else{
	   Showtype = type
}

 //   window.history.replaceState('', '', '?' + Showtype + ':' + q);

}
var tvobj = {}

function si(image){
  var request = new Request('https://api.imageresizer.io/images?url=' + image, {
  headers: new Headers({
    'x-api-key': 'a3e2aafcd6b43320725811cb3654f2733b05ab9c'
  })
});
  return request
}
function showImage(e){
  fetch(si(e.getAttribute('data-src'))).then(function(res){return res.json();}).then(function(data){
    e.src = 'https://im.ages.io/'+data.response.id+'?width=350&q=80'
  })
}

function tvstQ(q) {
  q = encodeURIComponent(q);
  var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="https://api.tozelabs.com/v2/show?limit=1&q=' + q + '"') + '&format=json&_maxage=36000000';
  return query;
}

function yqltheTVDB(q) {
  q = encodeURIComponent(q);
  var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="http://skyhook.sonarr.tv/v1/tvdb/search/en/?term=' + q + '"') + '&format=json&_maxage=36000';
  return query;
}

function multiURL(urls) {
  q = encodeURIComponent(urls);
  var query = "select all_images.poster,stripped_name from json where url='https://api.tozelabs.com/v2/show?limit=1&q=" + q + "';"
  return query;
}
var tvdbimg = 'https://thetvdb.com/banners/posters/279121-50.jpg'
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
var showhtml = []
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
        return result * sortOrder;
    }
}
function tvlist(showName,img,type) {
  if (showName.toLowerCase() in tvobj) {
    return 'Already In.';
  }

  tvobj[(showName.toLowerCase())] = ''
if (img != undefined) {
 /* document.getElementById('tvShows').innerHTML += `<div show="${showName}" onclick="showQuery(null,this,'${type}')"  class="show">
  <div  class="background" style="background:url(${img});background-repeat: no-repeat;    background-size: 100% 100%;"></div>
</div>`
*/
/*
showhtml.push({show:showName,html:`<div  percent="" show="${showName}" onclick="showQuery(null,this,'${type}')"  class="show">
  <div  class="background" data-background-image-url="${img}" style="background-repeat: no-repeat;    background-size: 100% 100%;"><span style="
    font-weight: bolder;
    margin: auto;
    position: absolute;
    width: 100%;
    vertical-align: -webkit-baseline-middle;
    height: auto;
    display: inline-grid;
    top: 38%;
    text-align: center;
    font-size: 2em;
        font-weight: bold;
        opacity:0;
    display: block;
    z-index: 21;
    font-family: Graphik-Bold;
">`+showName+`</span><div class="newepisodes"><div>NEW EPISODES</div></div></div>
</div>`,img:img}); 
*/
return;
}


 url = `http://api.tvmaze.com/search/shows?q=${showName}`
  fetch(url, {
    method: 'get',
    cache: "force-cache"
  }).then(function(response) {
    return response.json();
  }).then(function(dat) {
    console.log()
    if (!dat.length == 0) {
  fetch('http://webservice.fanart.tv/v3/tv/'+dat["0"].show.externals.thetvdb+'?api_key=334bde683eabd3ae55eb6a1917bd4795').then(function(res){return res.json()
    }).then(function(fan){
      if ('status' in fan || !'tvthumb' in fan) {return;}else{
      var fanart = (fan.tvthumb[0].url)
  document.getElementById('tvShows').innerHTML += `<div show="${showName}" onclick="showQuery(null,this)"  class="show">
  <div  class="background" style="background:black;background:url(${fanart});background-repeat: no-repeat;    background-size: 100% 100%;"></div>
</div>
`;
      }


          }).catch(function(e){})      
    }
  
}).catch(function(e) {
console.log(e)
});

  }

 


function search(val) {
  function filter(a) {
    var match = []
    for (var i = 0; i < a.length; i++) {
      if (a[i].metadata.toLowerCase().includes(val.toLowerCase())) match.push(a[i])
    }
    return match
  }
  var result = filter(obj);
  if (result.length == 0) {
    document.getElementById('carasoul').innerHTML = "No results found :("
  } else {
    loadMedia(result)
  }
}






function sortCards() {

var l = []
obj.sort(function(x, y) {
   var date1 = new Date(x.airdate);
   var date2 = new Date( y.airdate);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    l.push(x)
  });
document.getElementById('carasoul').innerHTML = ''
loadMedia(l)




}
var theflash = 'https://images.cwtv.com/feed/mobileapp/videos/apiversion_7/show_the-flash'
var show_hub = 'https://images.cwtv.com/feed/mobileapp/videos/apiversion_7/show_hub'
var shows = 'https://images.cwtv.com/feed/mobileapp/shows/apiversion_7/channel_cwtv/pagesize_100'
var proxy = 'https://cors-anywhere.herokuapp.com/'
var template = "";
if (!window.fetch) {
  alert('fetch isnt working')
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}
// url (required), options (optional)
function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.trunc(s)
}

function rating(rate) {
  if (rate == undefined){
    return "UNRATED"
  }

  if (rate.includes('tv-14')) {
    return "TV-14";
  }
  if (rate.includes('tv-pg')) {
    return "TV-PG";
  }
  if (rate.includes('tv-y7')) {
    return "TV-Y7";
  }
  if (rate.includes('tv-y')) {
    return "TV-Y";
  }
  if (rate.includes('tv-g')) {
    return "TV-G";
  }
  return rate.toUpperCase();
}


const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


function loadPlayer(url) {
  return '';
  link = url.href;
  return false;
 }

var formatter = new Intl.DateTimeFormat({
  month: "short"
})
var date1 = new Date()
  async function  fetchurl(url){
return await fetch(url).then(function(res){return res.text()})
    }

var doneNum = {}
  var upnextshows = {}
var showDetail = {}
function refreshContinueWatching(){
var continueW_DIVS = document.getElementsByClassName('card')
for(i = 0; i <  continueW_DIVS.length; i++){
//	console.log(continueW_DIVS[i])
	var episodeDIV = continueW_DIVS[i]
var showSeason = upnextshows[episodeDIV.getAttribute('show')].seasons[episodeDIV.getAttribute('seasonNumber')]
for(a in showSeason){
if(showSeason[a].episode_number == episodeDIV.getAttribute('episodeNumber') && showSeason[a].season_number == episodeDIV.getAttribute('seasonNumber')){
	if(localStorage['?' + showSeason[a].link] == undefined){continue;}
if(localStorage['?' + showSeason[a].link + '_duration'] - localStorage['?' + showSeason[a].link]  < 35){
	console.log('finished')
	if(Number(a) + 2 > showSeason.length){
		continueW_DIVS[i].style.display = 'none'

	}else{
		console.log(showSeason[Number(a) + 1])
 
 var topShow = episodeDIV.getAttribute('show')
 if(showLogos[episodeDIV.getAttribute('show')] && episodeDIV.getAttribute('show') != 'Heroes'){
 	var extraStyles = ''
 	if(json.type == 'nbc'){
extraStyles += `       transform: translate(8%,-29%);
    margin: -6px;`
 	}
 	topShow = `<img src="${showLogos[episodeDIV.getAttribute('show')]}" width="" style="
    width: 6em;
      /*  filter: brightness(0) invert(1); */
        ${extraStyles}
">`
 }

	continueW_DIVS[i].outerHTML = `<li show="${episodeDIV.getAttribute('show')}"  seasonNumber="${showSeason[Number(a)+1].season_number}" episodeNumber="${showSeason[Number(a)+1].episode_number}"  class=" card forceVisible ${showSeason[Number(a)+1].link}">
      <div class="image-crop sixteen-nine">
         <a onclick="loadPlayer(this)" href="video.html?${showSeason[Number(a)+1].link}">
            <img class="cover loaded  sixteen-nine" sizes="(max-width: 600px) 30vw, 40vw" alt="${showSeason[Number(a)+1].episode}" src="${showSeason[Number(a)+1].img}" srcset="${showSeason[Number(a)+1].srcset}">
         </a>
                  <span class="continShow">${topShow}</span>

         <span class="timeRemaining
             "></span>
         <span class="episode-gradient"></span>
            <div id="progress" length="${showSeason[Number(a)+1].duration}" class="w3-progressbar" style="width: 0%;"></div>
         <div class="overlay"><a onclick="loadPlayer(this)" href="video.html?${showSeason[Number(a)+1].link}" class="overlay-btn zoom-btn " title="Watch ${showSeason[Number(a)+1].episode}"><i class="fa fa-play playbutton"></i></a></div>
      </div>
      <h2 class="watchingTitle" style="">
<a class="episode-name" onclick="loadPlayer(this)" href="video.html?${showSeason[Number(a)+1].link}">"${showSeason[Number(a)+1].episode}"</a></h2>
</li>`
	}
}
}
}
} 

}

var lastFired = new Date().getTime();
setInterval(function() {
    now = new Date().getTime();
    if(now - lastFired > 1000) {//if it's been more than 5 seconds
refreshContinueWatching()
    }
    lastFired = now;
}, 500);
function loadMedia(episodes,arg) {
	var ids = []
	var thisTime = date1.getTime()

  var template = []
  var watching = ''
  var tempLS = localStorage
try{
  console.time('ProcessShows')


for(i in episodes.reverse()){
var endTime = 35
if(tempLS['?'+episodes[i].href +'_end']){
	endTime = tempLS['?'+episodes[i].href +'_end']
}
	  if (tempLS['?'+episodes[i].href+'_duration'] != undefined) {
      	episodes[i].length = Number(tempLS['?'+episodes[i].href+'_duration'])

      }
episodes[i].end = episodes[i].length - endTime 

	var done = false;
	if(!upnextshows[episodes[i].show]){
		upnextshows[episodes[i].show] = {show:episodes[i].show,seasonCount:function(){
return Object.keys(this.seasons).length;

		},seasons:{},isNew:false,latestWatched:null,latestWNum:null,latestWSesN:null,upNext:null,upNextSeason:null,upNextNum:null,totalEpisodes:0,percentage:null}
	}
	upnextshows[episodes[i].show].totalEpisodes += 1
var isLatest = false
	if (episodes[i].length - tempLS["?" + episodes[i].href] < endTime) {
		done = true;
		episodes[i]['done'] = done
		if (doneNum[episodes[i].show] == undefined) {
				doneNum[episodes[i].show] = 0
			}
		doneNum[episodes[i].show] += 1
		//		console.log(episodes[i].show,doneNum[episodes[i].show])
isLatest = true
//console.log(isLatest,episodes[i])
		upnextshows[episodes[i].show].latestWatched = {episode:episodes[i].episode,epiformat:episodes[i].epiformat,done:done,link:episodes[i].href}
		upnextshows[episodes[i].show].latestWNum = episodes[i].episodeNumber
		upnextshows[episodes[i].show].latestWSesN = episodes[i].seasonNumber
		
	}
	var seasonFirst = false
	if(episodes[i].seasonNumber != 1 && episodes[i].seasonNumber > 1 && episodes[i].episodeNumber == 1 && upnextshows[episodes[i].show].seasons != {}){
		try{
if(''+(Number(episodes[i].seasonNumber) - 1)+'' in upnextshows[episodes[i].show].seasons ){
		
	var seasonLengthPrev = Object.keys(upnextshows[episodes[i].show].seasons[episodes[i].seasonNumber - 1]).length
	var lastSeasonLastEpisode = upnextshows[episodes[i].show].seasons[episodes[i].seasonNumber - 1][seasonLengthPrev - 1 ]
	if(lastSeasonLastEpisode.done && episodes[i].episodeNumber == 1){
		seasonFirst = true
	//	console.log(episodes[i])
	}

			}

}catch(e){
	console.log(e)
}
	}
if(isLatest){
	seasonFirst = false;
}
	if (seasonFirst || upnextshows[episodes[i].show].latestWNum + 1 == Number(episodes[i].episodeNumber) && Number(episodes[i].seasonNumber) == upnextshows[episodes[i].show].latestWSesN && upnextshows[episodes[i].show].latestWNum != null) {
	//	console.log(episodes[i])
		upnextshows[episodes[i].show].upNext = {episode:episodes[i].episode,epiformat:episodes[i].epiformat,done:done,link:episodes[i].href}
		upnextshows[episodes[i].show].upNextNum =  episodes[i].episodeNumber
		upnextshows[episodes[i].show].upNextSeason = episodes[i].seasonNumber

	}
	if(upnextshows[episodes[i].show].isNew == false){
		if(date1.getTime() - episodes[i].time < 604800000){
			upnextshows[episodes[i].show].isNew = true
		}
	}
if (upnextshows[episodes[i].show].seasons[episodes[i].seasonNumber] == undefined) {
upnextshows[episodes[i].show].seasons[episodes[i].seasonNumber] = []
}
	upnextshows[episodes[i].show].seasons[episodes[i].seasonNumber].push({episode:episodes[i].episode,thisEpisodeCount:upnextshows[episodes[i].show].totalEpisodes,airdate:episodes[i].time,original:episodes[i],percentageDone:(tempLS['?'+episodes[i].href]/episodes[i].length )*100,length:episodes[i].length,description:episodes[i].description,img:episodes[i].img,srcset:episodes[i].imgdyn,epiformat:episodes[i].epiformat,episode_number:episodes[i].episodeNumber,season_number:episodes[i].seasonNumber,done:done,link:episodes[i].href})


}
   document.getElementById('tvShows').innerHTML = ''
  for(i in showDetail){
  	if(upnextshows[showDetail[i].name]){

if(showDetail[i].rating == undefined){
	showDetail[i].rating = 'TV-14'
}
if(showDetail[i].bg == undefined){
	showDetail[i].bg = showswithimages[i]
}
if(showDetail[i].genre == undefined){
	showDetail[i].genre = ''
}
var sznNum = '1 Season'
if(ObjectLength(upnextshows[showDetail[i].name].seasons) > 1){
	sznNum = ObjectLength(upnextshows[showDetail[i].name].seasons) + ' Seasons'
}
var showContButton = ''
if(upnextshows[showDetail[i].name].upNext != null){
showContButton = `  <a href="video.html?${(upnextshows[showDetail[i].name].upNext.link)}"><i class="fa fa-play-circle" style="    position: absolute;
    bottom: 10px;
    padding: 15px;
    z-index: 100000;
    font-size: 45px;
        right: 14px;" class="continueFromShow">	
</i></a>`
}
// console.log(showDetail[i].genre)
var logo = `<img width="100%" src="${showDetail[i].logo}">
`
var showlogodiv = ''
if(i == 'The Blacklist'){
	logo = `<img width="100%" style="margin-top: -25%;" src="${showDetail[i].logo}">`
}
// i == 'Heroes' ||
if( showDetail[i].logo == ''){
	logo = `<span>${i}</span>`
showlogodiv = ' line-height: 1;width:unset;'
}

var bgstyle = ''
var gradient = 'linear-gradient(90deg,rgba(0, 0, 0, 0.57) 36%,transparent),'
if('align' in showDetail[i]){
	bgstyle = showDetail[i].align
	 gradient = 'linear-gradient(270deg, transparent 35%, black 68%),'
}
 document.getElementById('tvShows').innerHTML += `<div show="${i}" onclick="showQuery(null,this)"  class="showDiv">
  <div style="${showlogodiv}" class="showLogo">
${logo}
  </div>
  <img width="100%" class="fallback_showImg" src="${showswithimages[i]}" style="
    border-radius: 10px;
">
  <div style="  ${bgstyle}  background-repeat: no-repeat;
  
    background-image:${gradient} url(${showDetail[i].bg});" class="showBG"></div>
  ${showContButton}
  <div class="showDetails">
    <span>${showDetail[i].year} <span class="rating">${showDetail[i].rating.toUpperCase()}</span> <span class="ShowSeasons">${sznNum}</span></span>
    <span class="genre">${showDetail[i].genre.join(' <span class="dot">•</span> ')}</span></div>
    </div>`

  }
}


episodes.reverse()
  for (i in episodes) {
	upnextshows[episodes[i].show].percentage = (doneNum[episodes[i].show] / upnextshows[episodes[i].show].totalEpisodes) * 100





  	if ('episode_id' in episodes[i]) {
  		if (ids.indexOf(episodes[i].episode_id) > -1) {
  			continue;
  		}else{
  		ids.push(episodes[i].episode_id)

  		}
  	}
    var json = episodes[i]
    var con = (json.show +''+ json.episode).toLowerCase().split(' ').join('').replace(/[^a-zA-Z ]/g, "")
    /*
    if (document.body.querySelector('.'+con)) {
      console.log('there')
      continue;
    }
    */

    var time = json.time
if (!time > 0) {
  time = 140000000
}
   

    function newBanner() {
      var diff = Math.abs(Math.floor(json.time - date1));
	  var days = Math.ceil(Math.abs(json.time - date1) / (1000 * 3600 * 24) - 1); 
      if (days <= 0 ) {
        return '<div class="new-label">New</div>';
      } 
      if (json.time > date1) {
                return '<div class="new-label">Unaired</div>';

      }
      return '';
    }
    var perc = 0;
    if (tempLS["?" + json.href]) {
      perc = (tempLS["?" + json.href] / json.length) * 100;
    //  console.log((tempLS["?" + json.href] / json.length) * 100)
     /* if (!tempLS['?'+json.href+'_duration'] == undefined) {
      	      perc = tempLS["?" + json.href] / json.length * 100;

      }else{
      	json.length = tempLS['?'+json.href+'_duration']
      }*/
      if (perc == "NaN") {
        perc = 0
      }
      if (perc == undefined) {
        perc = 0
      }
    } 

    function showCheck() {

      if (perc > 99) {
        return 1;
        alert('finished')
      }
      return 0;
    }
    function almost_expire(){
    	if (json.expires - thisTime < 604800 * 1000) {
    		return `<span class="expiring
             ">EXPIRING SOON</span>`
    	}
    	return '';
    	
    }
  
    var done = perc > 99
 //   console.log(tempLS["?" + json.href] > 10 && json.length - tempLS["?" + json.href] > 45 )
if (json.length - tempLS["?" + json.href] < json.end) {
//	perc = 100
}
if(!json.episode.toLowerCase().includes('part') && json.episode.includes(': ') && json.show != 'The Blacklist'){
	var splittedName = json.episode.split(': ')
	splittedName.shift()
json.episode = splittedName.join(': ')
}
 var topShow = json.show
// && json.show != 'Heroes'
 if(showLogos[json.show]  && json.show != "Bob's Burgers"){
 	var extraStyles = ''
 	if(json.show == 'The Blacklist'){
extraStyles += `       transform: translate(8%,-29%);
    margin: -6px;`
 	}
 	topShow = `<img src="${showLogos[json.show]}" width="" style="
    width: 6em;
       /* filter: brightness(0) invert(1); */
        ${extraStyles}
">`
 }


    if ((tempLS["?" + json.href] > 10 && json.length - tempLS["?" + json.href] > 35 ) || (upnextshows[json.show].upNextNum ==  Number(json.epiformat.split('E')[1]) && upnextshows[json.show].upNextSeason == Number(json.epiformat.split('S')[1].split('E')[0]))  ) {

      //          <span class="episode-gradient"></span>
        //  document.getElementById('watching').innerHTML += '<div tabindex="1" class="wtc '+json[i].href+'"><a onclick="loadPlayer(this)" href="player.html?'+json[i].href+'" ><img width="100%" src="'+json[i].img+'"><div id="projpar" class="w3-progress-container" style=""><div id="progress" class="w3-progressbar" style="width: '+perc+'%;"><\/div><\/div><br> <span>'+json[i].show+'<\/span><\/a><\/div>'
    //   console.log(Math.round((json.length - tempLS["?" + json.href]) / 60), 'mins left.')
        var Timeleft = Math.round((json.length - tempLS["?" + json.href]) / 60) +  ' mins left'

       if(!tempLS["?" + json.href]){
       	Timeleft = ''
       }
 if(Math.round((json.length - tempLS["?" + json.href]) / 60) == 0){
 	Timeleft = 'almost done'
 }
var episodes_left = ''
for(p in upnextshows[json.show].seasons[json.seasonNumber]){
	//console.log(upnextshows[json.show].seasons[json.seasonNumber][p].link,json.href)
	if(upnextshows[json.show].seasons[json.seasonNumber][p].link == json.href){
if(upnextshows[json.show].totalEpisodes - upnextshows[json.show].seasons[json.seasonNumber][p].thisEpisodeCount > 0){
episodes_left = '+' + (upnextshows[json.show].totalEpisodes - upnextshows[json.show].seasons[json.seasonNumber][p].thisEpisodeCount)
}

	}
}
        watching += `<li show="${json.show}"  seasonNumber="${json.seasonNumber}" episodeNumber="${json.episodeNumber}" data-type="${json.type}"  class=" card forceVisible ${json.href}">
      <div class="image-crop sixteen-nine">
         <a onclick="loadPlayer(this)" href="video.html?${json.href}">
            <img class="cover loaded  sixteen-nine" sizes="(max-width: 600px) 30vw, 40vw" alt="${json.episode}" onerror="if (this.src != '${showDetail[json.show].bg}') this.src = '${showDetail[json.show].bg}';this.srcset = '';" src="${json.img}" srcset="${json.imgdyn }">
         </a>
         <span class="continShow">${topShow}</span>
         <span class="timeRemaining
             ">${Timeleft}</span>
             <span class="episodes_left">${episodes_left}</span>
         <span class="episode-gradient"></span>
            <div id="progress" length="${json.length}" class="w3-progressbar" style="width: ${perc}%;"></div>
         <div class="overlay" style="opacity: 1;
    background: linear-gradient(90deg,rgba(0, 0, 0, 0.42) 0,transparent);"><a onclick="loadPlayer(this)" href="video.html?${json.href}" class="overlay-btn zoom-btn " title="Watch ${json.episode}">
    <i class="partially_filled  playbutton">
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" >
<g>
	<path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" fill="#FFFFFF"/>
	<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill="#FFFFFF"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>


    </i>
     <i class="filled  playbutton">

<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" >
<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z" fill="#FFFFFF"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

     </i>

    </a></div>
      </div>
      <h2 class="watchingTitle" style="">
<a class="episode-name" onclick="loadPlayer(this)" href="video.html?${json.href}">"${json.episode}"</a></h2>
</li>`

//        watching.innerHTML =  '<li style="margin: 11px;" class=" card  ' + json.href + '"><a href="#"><div style="   " class="piece fanart-container"><div class="image-crop sixteen-nine" >' + newBanner() + '<a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '"><\/span><div class="bg"  style=" background-image:url('+json.bg+');background-size:cover;" ></div><div class="imageBG"><\/div><img    class="cover sixteen-nine lazy "    sizes="(max-width: 600px) 80vw, 460px"    alt="' + json.episode + '" data-original-set="' + json.imgdyn + '" class"" class="cover" ><i class="fa fa-play-circle-o" aria-hidden="true"><\/i><\/a><span class="episode-gradient"><\/span><div id="projpar" class="w3-progress-container" style=""><div id="progress" class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '" class="overlay-btn zoom-btn "  title="Watch ' + json.episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2><a class="episode-name" onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '">' + json.episode + '<\/a><\/h2><a onclick="showQuery(null,this)"  show="' + json.show + '" href="javascript:" class="secondary-link show-name">' + json.show + '<\/a><a href="javascript:"><i style="    /* opacity: ' + showCheck() + '; */color: rgb(127, 218, 99);position: absolute;right: 10px;bottom: 10px;display:none;" class="visited fa fa-check" aria-hidden="true"><\/i><\/a><\/div><div class="bottom"><\/div><\/div><\/a><\/li>'
      
      }
    
    var query = (json.metadata + " " + json.episode).toLowerCase();
    timeofPlayback = Math.floor(json.length / 60) + 'm'
        function hidden(){
if (json.hidden) {
	return 'opacity: .3'
}
    }
    var visible = ""
    if (i < 30) {
    	visible = "forceVisible"
    }
    var out = "'out'"


var date2 = new Date(json.time)
    var month2 = formatter.format(date2);
    var FDate = '' //month2 + ' ' + date2.getUTCDate() + ' ' + date2.getUTCFullYear()
    FDate = month2
   // console.log(date1.getDate(),date1.getMonth(),date1.getFullYear(),date2.getDate(),date2.getMonth(),date2.getFullYear())
if(dateDiffInDays(date2,date1) < 14 || date2.getFullYear() == date1.getFullYear() && date1.getMonth() == date2.getMonth()){
	//console.log('close airdate')
	if(dateDiffInDays(date2,date1) == 0){
		console.log('today')
		FDate = 'today'
	}
	if(dateDiffInDays(date2,date1) == 1){
		console.log('yesterday')
		FDate = 'yesterday'
	}
	for (i = 0; i < 14; i++) { 
   // console.log(i + 1)
   //|| i + 1 == 7
    if(i + 1 == 1 ){ continue;}
   if(dateDiffInDays(date2,date1) == i + 1){
		FDate = (`${i + 1} days ago`)

	}
}
/*
	if(date1.getDate() - date2.getDate() == 2){
		console.log('2 days ago')
	}
	if(date1.getDate() - date2.getDate() == 3){
		console.log('3 days ago')
	}
	*/
// console.log(dateDiffInDays(date2,date1))
	if(dateDiffInDays(date2,date1) < 7|| date1.getDate() - date2.getDate() < 7){
		console.log('new')
		   template.push( `<a href="video.html?${json.href}">
    	<div data-query="${query}" class=" episode  ${con} ${json.type} ${json.href}">
    	<div class="episode_img"><div class="episode_overlay"></div><img class="new_release cover hoverEpisode lazy" width="100%" 

data-original="${json.img}" onerror="if (this.src != '${showDetail[json.show].bg}') this.src = '${showDetail[json.show].bg}';this.srcset = '';"  data-original-set="${json.imgdyn}" 	sizes="(max-width: 600px) 75vw, 40vw" alt="${json.show}"


	></img></div><div class="episode_number">${json.episodeNumber}</div>
	<div class="episode_naming">
		<span class="episode_title">'${json.episode}'</span>

	<div class="episode_details">
	<span>S${json.seasonNumber}:E${json.episodeNumber} • ${timeofPlayback} • ${FDate}</span>
	</div>

	<a class="episode_show" onclick="showQuery(null,this,'${json.type}')"  show="${json.show}" href="javascript:">${topShow}</a>
	</div>
<div class="episode-progressbar" id="progress" length="${json.length}" style="width: ${perc}%;"></div>
</div>
</a>


<!--
<li style="${hidden()};visibility:visible;"  aired="${json.time}" ShowName="${json.show}" class="${visible} initialized  ${con} ${json.type} ${json.id} ${json.href}"   data-query="${query}">
      <div class="image-crop sixteen-nine" url="${json.href}" autoplay="${json.autoplay}" onmouseover="playHover(this)" onmouseout="stopHover(this)">
         <a onclick="loadPlayer(this)" href="play.html?${json.href}">
         ${newBanner()}
            <img class="grayscale cover sixteen-nine lazy" sizes="(max-width: 600px) 75vw, 45vw" alt="${json.show}" data-original="${json.img}" data-original-set="${json.imgdyn}" style="display: block;">
         </a>
         <span class="episode-gradient"></span>
            <div class="w3-progressbar" length="${json.length}" style="width: ${perc}%;"></div>
         <div class="overlay"><a onclick="loadPlayer(this)" href="play.html?${json.href}" class="overlay-btn zoom-btn " title='Watch "${json.episode}"'><i class="fa fa-play playbutton" style="visibility: visible;"></i></a></div>
      </div>
      ${almost_expire()}
      <div class="fanart-details">
         <h2><a class="episode-name" onclick="loadPlayer(this)" href="play.html?${json.href}">"${json.episode}"</a></h2>
         <a onclick="showQuery(null,this,'${json.type}')" data-type="${json.type}" show="${json.show}" href="javascript:" class="secondary-link show-name">${json.show}</a>
         <div style="border-top:0;" class="cardBorder"></div>
            <p>${FDate} • ${timeofPlayback} • S${json.seasonNumber}:E${json.episodeNumber}</p>
        </div>
      <div class="bottom"></div>
</li>
!-->
`)
	}
}


//json.id
var old = `            <div class="bg" data-style=" background-image:url(${json.bg});background-size:cover;"></div>
            <video class="sixteen-nine" style="top:0px;" playsinline="" muted="" loop="" width="100%" height="100%"></video>

`
 
 //   wrapper.innerHTML = '<li  aired="' + json.time + '"  ShowName="' + json.show + '" class="initialized  '+con+' ' + json.type + '  ' + json.id + '" data-query="' + query + '"><div  class="piece fanart-container"><div class="image-crop sixteen-nine"url="'+json.href+'" autoplay="'+json.autoplay+'" onmouseover="playHover(this)" onmouseout="stopHover(this)">' + newBanner() + '<a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '"><div class="bg"  style=" background-image:url('+json.bg+');background-size:cover;" ></div><video class="sixteen-nine" style="top:0px;" playsinline muted loop width="100%" height="100%"></video><\/span><div class="imageBG"><\/div><img     class="cover sixteen-nine lazy"   sizes="(max-width: 600px) 70vw, 25vw"  alt="' + json.show + '"   data-original="'+json.img +'" data-original-set="' + json.imgdyn + '" ><i class="fa fa-play-circle-o" aria-hidden="true"><\/i><\/a><span class="episode-gradient"><\/span><div  class="w3-progress-container" style=""><div class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '" class="overlay-btn zoom-btn " title="Watch ' + json.episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2 ><a class="episode-name" onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '">' + json.episode + '<\/a><\/h2><a onclick="showQuery(null,this)" show="' + json.show + '" href="javascript:" class="secondary-link show-name">' + json.show + '<\/a><div class="cardBorder"></div><div class=><p>' + FDate + ' | ' + json.rating + ' | ' + timeofPlayback + ' | ' + json.epiformat + '<\/p><\/div><i style="opacity:' + showCheck() + ';color:rgb(127, 218, 99);"class="visited fa fa-check" aria-hidden="true"><\/i><\/div><div class="bottom"><div class="bar"><\/div><div class="bar"><\/div><div class="bar"><\/div><\/div><\/div><\/li>'
     
  }
sortTV()
  document.getElementById('watching').innerHTML += watching;
  if(template.join('') == ''){
  	document.getElementById('newepisodes').innerHTML = ''
  }
  document.getElementById('carasoul').innerHTML += template.join('');


  console.log(upnextshows)

localStorage['showData'] = JSON.stringify(upnextshows)

    console.timeEnd('ProcessShows')

  }catch(e){
console.log(e)
alert(e)
}
}

function epiformat(s, e) {
  s = parseInt(s)
  e = parseInt(e)
  if (s < 10) {
    s = '0' + s
  }
  if (e < 10) {
    e = '0' + e
  }
  return 'S' + s + 'E' + e
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
} 
var template = "";
var obj = []
    var finalObj = []
    var showLogos = []

var cors_show_hub = 'https://crossorigin.me/' + show_hub
// var show_hub = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + show_hub + '"') + '&format=json&bust='+Date.now();
var cwTimes = {}
function cw(show){
	var skipTheseShows = ['Elseworlds','Penn & Teller: Fool Us','Masters of Illusion','Masters of Illusion: Christmas Magic']
	loaders()
	fetch('https://www.cwtv.com/images/c/headers/cacheversions.json?cb=8045022').then(function(res){return res.json();
	}).then(function(config){
		// 'https://images.cwtv.com/feed/mobileapp/shows/channel_cwtv/apiversion_9/channel_cwtv/device_ios/pagesize_10000'
loaders()
fetch('https://images.cwtv.com/feed/mobileapp/shows-grouped/channel_cwtv/apiversion_9/device_ios').then(function(res){return res.json()}).then(function(cwshows){
// console.log(cwshows.items.show_groups[0].shows)
// .concat(cwshows.items.show_groups[2].shows)
//cwshows['items'] = (cwshows.items.show_groups[0].shows)

for(i in cwshows.items.show_groups){
	console.log(cwshows.items.show_groups[i])
	if(cwshows.items.show_groups[i].slug == 'current-shows'){
		cwshows['items'] = (cwshows.items.show_groups[i].shows)
		break;

	}
}
console.log(cwshows)
// cwshows.items.push( {"videos_count":"13","title":"Forever","deeplink": "","airtime":"STREAM NOW","slug":"forever","series_code":"FVR","group_type":"current-shows"})
for(i in cwshows.items){
	loaders()
	var airtime = cwshows.items[i].airtime.split('|')[0].split(' ')[cwshows.items[i].airtime.split('|')[0].split(' ').length - 1]
if (isNaN(airtime) || airtime == '') {
airtime = '8'
}
cwTimes[cwshows.items[i].title] = airtime
	if (cwshows.items[i].deeplink.includes('cwseed') || cwshows.items[i].slug == 'more-video' || skipTheseShows.includes(cwshows.items[i].title)) {loaders('remove');continue;}
			if (show != 'undefined' && show != undefined && cwshows.items[i].title.toLowerCase().includes(show.toLowerCase()) == false){
 loaders('remove');
 continue;
			}
				if (show == undefined && isMobile && localStorage['like']) {
		var savedShows = JSON.parse(localStorage['like'])
		if (!savedShows.includes(cwshows.items[i].title)) {
			loaders('remove');
			continue;
		}
	}




fetch('https://images.cwtv.com/feed/mobileapp/videos/channel_cwtv/show_'+cwshows.items[i].slug + '/apiversion_8' )
.then(function(res){
return res.json()
}).then(function(data){
    for (i in data.videos) {
    if (data.videos[i].fullep == 1) {
showLogos[data.videos[i].series_name] = 'https://images.cwtv.com/images/cw/show-logo-stacked/'+data.videos[i].show_slug+'.png'

      function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000 * 60);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes;
      }
      var epinum = data.videos[i].episode
      try {
        epinum = data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1]
        var s = (data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1].split('E')[0].split('S')[1])
        var e = (data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1].split('E')[1])
      } catch (e) {
        console.log(e)
      }
      var airdate =  data.videos[i].airdate //+' '+ (12 + Number(cwTimes[data.videos[i].series_name]) + ':00')

      if (airdate == '') {
        airdate = (data.videos[i].start_time)
      }
      function cwdyres(resulution){

      	if (webpcompatible == true) {
// return 'https://res.cloudinary.com/david-wash-blog/image/fetch/f_webp/http://images.cwtv.com/thecw/img/w_'+resulution+'.s_mobile.i_video_thumbnail.guid_'+data.videos[i].guid+'.jpg'
}
      	 return 'https://images.cwtv.com/thecw/img/w_'+resulution+'.s_mobile.i_video_thumbnail.guid_'+data.videos[i].guid+'.jpg'
      }
      var dyn =  cwdyres(1920)+' 1920w, ' +cwdyres(850) + " 850w  ,"+ cwdyres(682)+' 682w, '+cwdyres(638)+' 638w, ' +  cwdyres(341) + ' 341w '
      var dyn = data.videos[i].large_thumbnail + ' 1920w, '+ data.videos[i].large_thumbnail + '?w=1280 1280w,  ' + data.videos[i].thumbnail + ' 720w, ' + data.videos[i].large_thumbnail + '?w=341 341w'
      showswithimages[data.videos[i].series_name] = '//images.cwtv.com/thecw/img/s_mobile.i_show_thumbnail.show_'+data.videos[i].show_slug+'.v_7.w_585.jpg'
    //  tvlist(data.videos[i].series_name,'http://images.cwtv.com/images/ios/cw/shows/'+data.videos[i].show_slug+'/large_featured.png')
      tvlist(data.videos[i].series_name,'https://images.cwtv.com/thecw/img/s_mobile.i_show_thumbnail.show_'+data.videos[i].show_slug+'.v_7.w_585.jpg','cw')
showDetail[data.videos[i].series_name] = {
	name:data.videos[i].series_name,
	rating:data.videos[i].rating,
	logo:"https://images.cwtv.com/images/cw/show-logo-horz/"+data.videos[i].show_slug+".png",
	bg:"https://images.cwtv.com/images/cw/show-hub/"+data.videos[i].show_slug+".png",genre:[data.videos[i].comscore_genre],
	year:moment(airdate).year(),
	align:'background-position: right;    background-size: contain;'
}

	// stacked
	// horz
if(data.videos[i].share_url == 'http://cwtv.com/shows/arrow/crisis-on-earth-x-part-2/?play=558f75d6-f35b-4eab-9bb7-34ade42bec3f'){
	airdate = '2017-11-27'
}
      var episode_data = {
        img: cwdyres('638'),
        rating: (data.videos[i].rating),
        imgdyn: dyn,
        id: makeid(),
        href: data.videos[i].share_url,
        show: data.videos[i].series_name,
        episode: data.videos[i].title,
        epiformat: epiformat(s, e),
        episodeNumber:Number(e),
        seasonNumber:Number(s),
        description:data.videos[i].description_long,
        length: Number(data.videos[i].duration_secs),
        type: "cw",
        bg:  'https://i2.wp.com/'+data.videos[i].large_thumbnail.split('tv_')[0].replace('http://','') + 'tv_141x79.jpg'+'?w=8',
        time:Date.parse(moment(airdate).toDate()),
        episode_id:data.videos[i].guid,
        expires:new Date(data.videos[i].expire_time).getTime()

      }
            finalObj.push(episode_data)


    }
  }
  loaders('remove')
})
}


/*
fetch('theflash.json').then(function(res){return res.json();}).then(function(theflash){

	for(i in theflash){
console.log(i)
if (3 > i ) {continue;}
for(z in theflash[i]){
      function cwdyres(resulution){

      	 return 'http://images.cwtv.com/thecw/img/w_'+resulution+'.s_mobile.i_video_thumbnail.guid_'+theflash[i][z].id+'.jpg'
      }
      var dyn =  cwdyres(1920)+' 1920w, ' +cwdyres(850) + " 850w  ,"+ cwdyres(682)+' 682w, '+cwdyres(638)+' 638w, ' +  cwdyres(341) + ' 341w '
  var episode_data = {
        img: cwdyres('638'),
        rating: 'TV-14',
        imgdyn: dyn,
        id: makeid(),
        href: 'http://cwtv.com/shows/the-flash/title/?play='+ theflash[i][z].id,
        show: 'The Flash',
        episode: theflash[i][z].title,
        epiformat: 'S'+Number(i)+'E'+Number([z]+1),
        episodeNumber:Number([z])+1,
        seasonNumber:Number(i),
        length: 2600,
        type: "cw",
        bg: '',
        time:(1400000000),
        episode_id:theflash[i][z].id,

      }
            finalObj.push(episode_data)
}
}
})
*/
loaders('remove')
}).catch(function(e){
	console.log(e)
	loaders('remove')
})



loaders('remove')

	})
}


function nbcloadnext(url){
//	console.log(decodeURIComponent( url).split('&'),url+'&fields[videos]=internalId,guid,runTime,permalink,seasonNumber,episodeNumber,type,title,available,expiration,airdate,images,categories,nbcAuthWindow,tveAuthWindow')
		var nbcshows = {}

//console.log(url)
loaders()
fetch(url+'&fields[videos]=guid,runTime,permalink,seasonNumber,episodeNumber,type,title,vChipRating,description,airdate,images,categories&fields[images]=path,internalId').then(function(res){return res.json();}).then(function(episode){
		if('next' in episode.links){
				//	console.log(episode.links.next)
					nbcloadnext(episode.links.next)
				}
				if (episode.data.length == 0) {
					 loaders('remove');
					return;
					 }
				for (var z = episode.data.length - 1; z >= 0; z--) {
					if (episode.data[z].attributes.type != 'Full Episode') {
						continue;
					}
					function nbcimg(res){

						`https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=480&imdensity=1 480w,
						 https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=340&imdensity=1 340w,
						 https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=170&imdensity=1 170w`
						return ('https://img.nbc.com'+episode.included[z].attributes.path+'?impolicy=nbc_com&imwidth='+res+'&imdensity=1')
						 }
					//	 695 1278 660 675
					      var dyn =  nbcimg('')+' 1920w, ' +nbcimg(1278)+' 1278w, ' + nbcimg(695)+' 695w, ' +nbcimg(675)+' 675w, '+nbcimg(660)+' 660w, '  +nbcimg(480)+' 480w, ' +  nbcimg(340) + ' 340w, ' +  nbcimg(170) + ' 170w '
      tvlist(episode.data[z].attributes.categories[0].split('/')[1],nbcshows[episode.data[z].relationships.show.data.id],'nbc')
showDetail[episode.data[z].attributes.categories[0].split('/')[1]].year = moment(new Date(episode.data[z].attributes.airdate)).year()
showDetail[episode.data[z].attributes.categories[0].split('/')[1]].rating = episode.data[z].attributes.vChipRating

// showswithimages[episode.data[z].attributes.categories[0].split('/')[1]] = nbcshows[episode.data[z].relationships.show.data.id]
// console.log(episode.included[z].attributes.path)
					      var episodes = {
        img: 'https://img.nbc.com/'+episode.included[z].attributes.path,
        rating: 'TV-14',
        imgdyn: dyn,
        id: makeid(),
        href: episode.data[z].attributes.permalink,
        show: episode.data[z].attributes.categories[0].split('/')[1],
        episode: episode.data[z].attributes.title,
        epiformat: epiformat(episode.data[z].attributes.seasonNumber, episode.data[z].attributes.episodeNumber),
        episodeNumber: Number(episode.data[z].attributes.episodeNumber),
        seasonNumber: Number(episode.data[z].attributes.seasonNumber),
        description:episode.data[z].attributes.description,
        length: episode.data[z].attributes.runTime,
        type: "nbc",
        bg:'',
        time:Date.parse(new Date(episode.data[z].attributes.airdate)),
        expires:new Date(episode.data[z].attributes.expiration).getTime()

      }
            finalObj.push(episodes)

				}
									loaders('remove')
}).catch(function(e){
	console.log(e)
	loaders('remove')
})
}
var nbcStLogo = []
var nbcGenres = []
var nbcIncludes = []
function nbc(show){
	var nbcshows = {}
	function nbcShowHandle(shows){
		for (var z = shows.included.length - 1; z >= 0; z--) {
			//if(shows.included[z].attributes.path == undefined){continue;}
			if(shows.included[z].type == 'images'){
			nbcIncludes[shows.included[z].id] = 'https://img.nbc.com'+ shows.included[z].attributes.path 
}else{
	nbcIncludes[shows.included[z].id] = shows.included[z]
}
}
		for (var i = shows.data.length - 1; i >= 0; i--) {
			var showId = shows.data[i].id
			if(show){
				// console.log(show)
if(!shows.data[i].attributes.shortTitle.toLowerCase().includes(show)){
continue;
}
			}else{
				// showId != '1033f650-03ff-405e-a3b9-adfbea0dd669' &&
				//&& showId != '99d3a2c1-fd98-43b9-a7a4-f7872b0eb808'  
				console.log(shows.data[i].attributes.name)

		if (showId != '384bac0b-0daf-4947-8f93-0f060fe3451b' && showId != '2dad10ef-8a32-4591-80df-fab41a6cb8b3') { // the blacklist && heroes
				 continue;
			}
		}
	
// console.log(nbcIncludes)
// console.log(nbcIncludes[nbcIncludes[shows.data[i].relationships.iosProperties.data.id].relationships.compactImage.data.id])
var logo = ''
if('logo' in shows.data[i].relationships && !nbcIncludes[shows.data[i].relationships.logo.data.id].includes('logo-share')){
	logo =  nbcIncludes[shows.data[i].relationships.logo.data.id];
}
if(shows.data[i].attributes.shortTitle == 'Heroes'){
	logo = 'showMetadata/heroes/Heroes.logo.png'
}
showDetail[shows.data[i].attributes.shortTitle] = {name:shows.data[i].attributes.shortTitle,
					logo:logo,
					genre:[shows.data[i].attributes.genre],
					bg:nbcIncludes[nbcIncludes[shows.data[i].relationships.iosProperties.data.id].relationships.compactImage.data.id] +'?impolicy=nbc_com&imwidth=990&imdensity=1'
				}
				showLogos[shows.data[i].attributes.shortTitle] = logo


			if(shows.data[i].relationships.logo != null){

		}
		nbcGenres[shows.data[i].attributes.shortTitle] = shows.data[i].attributes.genre 
			var genre = shows.data[i].attributes.genre
			if(genre == 'News and Information' || genre == 'Reality' || genre == 'Family and Kids' || genre == null || genre == 'LateNight' || genre == 'Lifestyle and Fashion' || genre == 'Special'){
				continue;
			}

			if (show == undefined && isMobile && localStorage['like']) {
		var savedShows = JSON.parse(localStorage['like'])
		if (!savedShows.includes(shows.data[i].attributes.shortTitle)) {
			continue;
		}
	}

     // showswithimages[shows.data[i].attributes.shortTitle] = 'https://img.nbc.com/'+'sites/'+shows.included[i].attributes.path.split('sites/')[1] +'?impolicy=nbc_com&imwidth='+480;
// console.log(shows.data[i].relationships.logo,shows.included[i].attributes)
			nbcshows[showId] = 'https://img.nbc.com/'+'sites/'+shows.included[i].attributes.path.split('sites/')[1] +'?impolicy=nbc_com&imwidth='+480;

			loaders()
			fetch('https://api.nbc.com/v3.14/videos?filter[type][value][0]=full episode&include=image&fields[images]=internalId,path&fields[videos]=guid,vChipRating,description,runTime,permalink,seasonNumber,episodeNumber,type,title,airdate,images,categories&filter[show]='+showId+'&sort=-airdate&page%5Bsize%5D=10').then(function(res){return res.json()}).then(function(episode){
				console.log(episode)
				if('next' in episode.links){
			//		console.log(episode.links.next)
			//		nbcloadnext(episode.links.next)
				}
				if (episode.data.length == 0) {
					 loaders('remove');
					return;
					 }
				for (var z = episode.data.length - 1; z >= 0; z--) {
					if (episode.data[z].attributes.type != 'Full Episode') {
						continue;
					}
					function nbcimg(res){
						`https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=480&imdensity=1 480w,
						 https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=340&imdensity=1 340w,
						 https://img.nbc.com/sites/nbcunbc/files/files/images/2018/7/02/180611_3743190_Genesis.jpg?impolicy=nbc_com&imwidth=170&imdensity=1 170w`
						return ('https://img.nbc.com'+episode.included[z].attributes.path+'?impolicy=nbc_com&imwidth='+res+'&imdensity=1')
						 }
					      var dyn =  nbcimg(1920)+' 1920w, ' +nbcimg(990) + " 990w  ,"+ nbcimg(682)+' 682w, '+nbcimg(480)+' 480w, ' +  nbcimg(340) + ' 340w, ' +  nbcimg(170) + ' 170w '
      tvlist(episode.data[z].attributes.categories[0].split('/')[1],nbcshows[episode.data[z].relationships.show.data.id],'nbc')
showDetail[episode.data[z].attributes.categories[0].split('/')[1]].year = moment(new Date(episode.data[z].attributes.airdate)).year()
showDetail[episode.data[z].attributes.categories[0].split('/')[1]].rating = episode.data[z].attributes.vChipRating
showswithimages[episode.data[z].attributes.categories[0].split('/')[1]] = nbcshows[episode.data[z].relationships.show.data.id]
					      var episodes = {
        img: 'https://img.nbc.com/'+episode.included[z].attributes.path,
        rating: 'TV-14',
        imgdyn: dyn,
        id: makeid(),
        href: episode.data[z].attributes.permalink,
        show: episode.data[z].attributes.categories[0].split('/')[1],
        episode: episode.data[z].attributes.title,
        epiformat: epiformat(episode.data[z].attributes.seasonNumber, episode.data[z].attributes.episodeNumber),
        episodeNumber: Number(episode.data[z].attributes.episodeNumber),
        seasonNumber: Number(episode.data[z].attributes.seasonNumber),
        length: episode.data[z].attributes.runTime,
                description:episode.data[z].attributes.description,
        type: "nbc",
        bg:'',
        time:Date.parse(new Date(episode.data[z].attributes.airdate)),
        expires:new Date(episode.data[z].attributes.expiration).getTime()

      }
            finalObj.push(episodes)

				}
									loaders('remove')

			}).catch(function(e){
				console.log(e)
				loaders('remove')
			})
		}

			//loaders('remove')
	}

	function nbcLoadShow(url){
		loaders()
fetch(url ).then(function(res){return res.json();}).then(function(shows){
		nbcShowHandle(shows)

if('next' in shows.links){
nbcLoadShow(shows.links.next)
}
loaders('remove')
	}).catch(function(e){
		console.log(e)
		 loaders('remove')
	})
	}
	nbcLoadShow('https://api.nbc.com/v3.14/shows?filter[shortTitle]=The%20Blacklist&fields[images]=internalId,path&fields[shows]=genre,internalId,name,shortTitle,sortTitle&include=image,iosProperties.compactImage,logo,coverImageMobile&sort=-sortTitle')

//nbcLoadShow('https://api.nbc.com/v3.14/shows?filter[shortTitle]=The%20Blacklist:%20Redemption&fields[images]=internalId,path&fields[shows]=genre,internalId,name,shortTitle,sortTitle&include=image,iosProperties.compactImage,logo,coverImageMobile&sort=-sortTitle')
//nbcLoadShow('https://api.nbc.com/v3.14/shows?fields[images]=internalId,path&fields[shows]=genre,internalId,name,shortTitle,sortTitle&filter[active]=1&filter[frontends]=tv&include=image,iosProperties.compactImage,logo,coverImageMobile&sort=-sortTitle')
}


// addJS('https://api.watchabc.go.com/vp2/ws/s/contents/2020/shows/jsonp/001/001/-1?callback=useABC')
function fancyTimeFormat(time) {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = Math.floor(time % 60);
  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

var webpcompatible = false



	var WebP = new Image();
	WebP.onload = WebP.onerror = function() {
		if ( WebP.height != 2 ) {
			return false;
		}else{
			 webpcompatible = true
		}
	};
	WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  


var foxshowlist = ['snowfall','atlanta']

function fox(show){

var externalToApi = 'https://api.fox.com/fbc-content/v3/video?externalId=853172291669'
var shows = 'https://api.fox.com/fbc-content/v3/screens/find'
var newest = 'https://api.fox.com/fbc-content/v3/screenpanels/58d57fd0880f910001a9fb82/items' 
var data = null;
var apiver = 'v2.0'
var apikey = ''


loaders()
fetch('//config.foxneodigital.com/foxnow/ios/3.11/ios_info_prod.json').then(function(res){return res.json()}).then(function(config){
	apikey = (config.apis.content.apiKey)

//	apiver = (config.apis.content.endpoints.find.split('content/')[1].split('/')[0])
	var foxheaders = new Headers({
  'x-api-key':'abdcbed02c124d393b39e818a4312055',
  "Accept":"application/json, text/plain, */*"

})

// https://api.fox.com/fbc-content/v3_blue/screenpanels/57d15aaa3721cfe22013ead4/items?itemsPerPage=100
// "https://api.fox.com/fbc-content/v3_blue/screenpanels/58daf2a54672070001df1404/items?itemsPerPage=60"
// https://api.fox.com/fbc-content/v1_4/screenpanels/5805048e7fdd600001a349c0/?itemsPerPage=150
var foxshowNames = {'snowfall':'Snowfall','atlanta':'Atlanta'}
if(show != undefined && show != ''){
fetch('https://api2.fox.com/fbc-content/v2.0/series?_fields=name,showCode&q='+show,{headers:foxheaders}).then(function(res){return res.json();}).then(function(q){
	console.log(q.member[0].showCode,q.member[0].name,foxshowNames)
	foxshowNames[q.member[0].showCode] = q.member[0].name
	foxshowlist.push(q.member[0].showCode)
})
}
var showEpisodeCount = {}
// config.apis.content.baseUrl
fetch('https://api2.fox.com' + '/fbc-content/'+apiver+'/series?_fields=showCode,network,fullEpisodeCount,showCode,name&itemsPerPage=300&seriesType=series&network=fox,fx',{cache:"no-store",headers:foxheaders,mode: 'cors'}).then(function(res){return res.json()}).then(function(foxshows){
var allEpisodeCount = 0
	var skipTheseShows = ['Love Connection','Showtime at the Apollo','New Girl']

	for (var i = foxshows.member.length - 1; i >= 0; i--) {
		if (foxshows.member[i].fullEpisodeCount == 0 || 'fullEpisodeCount' in foxshows.member[i] == false) continue;
if (show != undefined) {
			if (show.toLowerCase().includes(foxshows.member[i].name)) {
				
								skipTheseShows.push(foxshows.member[i].name)
			}
}
		showEpisodeCount[foxshows.member[i].showCode] = foxshows.member[i].fullEpisodeCount
		if(foxshows.member[i].network == 'fox' || skipTheseShows.includes(foxshows.member[i])  ){
			if (foxshows.member[i].showCode == 'the-x-files' || skipTheseShows.includes(foxshows.member[i].name)) continue;

			foxshowlist.push(foxshows.member[i].showCode)
			foxshowNames[foxshows.member[i].showCode] = foxshows.member[i].name
			allEpisodeCount = allEpisodeCount +  foxshows.member[i].fullEpisodeCount

		}
	}


	function loadTogether(){
for (var i = foxshowlist.length - 1; i >= 0; i--) {
	if (show != 'undefined' && show != undefined && foxshowNames[foxshowlist[i]].toLowerCase().includes(show.toLowerCase()) == false) {
		  foxshowlist.splice(i, 1);
continue;
	}
	if (show == undefined && isMobile && localStorage['like']) {
		var savedShows = JSON.parse(localStorage['like'])
		if (!savedShows.includes(foxshowNames[foxshowlist[i]])) {
  foxshowlist.splice(i, 1);
			continue;
		}
	} 
}

console.log(foxshowlist.join())
		  loaders()
if (foxshowlist.length == 0) {loaders('remove');return;}
/*
loaders()
fetch(config.apis.content.baseUrl + '/fbc-content/v1_5/screenpanels/58261c820501880001930b2e/items/',{headers:foxheaders}).then(function(res){return res.json();}).then(function(epg){
 // epg.panels.member["0"].items.member =  epg.panels.member["0"].items.member.concat(epg.panels.member["4"].items.member).sort(function(a, b){return new Date(a.startDate) - new Date(b.startDate)});

	for (var i = epg.member.length - 1; i >= 0; i--) {
		if (!foxshowlist.includes(epg.member[i].showCode) || epg.member[i].seriesType != 'series') {continue;}
			if (epg.member[i].datePublished != epg.member[i].startDate) {
				continue;
			}
		if(moment(epg.member[i].startDate).toDate() < new Date()){continue;}
				console.log(epg.member[i],moment(epg.member[i].startDate).toDate(), new Date())


var image = epg.member[i].images.videoList.HD.split('?')[0]
var sizes = [
'110:62',
'304:171',
'480:270',
'528:297',
'740:416',
'840:315',
'1280:720'
]
var srcset = ''
function webpImage(){
if (webpcompatible) {
	return '&output-format=webp';
}else{
	return ''
}
}
for (var z = sizes.length - 1; z >= 0; z--) {
 srcset += (image + '?fit=inside|' + encodeURIComponent(sizes[z]) +  ' ' + sizes[z].split(':')[0] +'w ,')
}
srcset = srcset.substr(0, srcset.length - 1);
var date = new Date(epg.member[i].originalAirDate)
date.setTime(date.getTime() - (date.getTimezoneOffset() * 60000));

var this_episode = {
        img: image + '?fit=inside%7C480:270',
        rating: '',
        href: 'https://api.fox.com/fbc-content/v1_5/video/'+epg.member[i].playerScreenUrl.split('player/')[1].split('?')[0],
        show: epg.member[i].seriesName,
        episode: epg.member[i].name,
        id: epg.member[i].playerScreenUrl.split('player/')[1].split('?')[0],
        epiformat: epiformat(epg.member[i].seasonNumber, epg.member[i].episodeNumber),
        episodeNumber: Number(epg.member[i].episodeNumber),
        seasonNumber: Number(epg.member[i].seasonNumber),
        length: epg.member[i].durationInSeconds,
        type: epg.member[i].network,
        imgdyn: srcset,
        autoplay:epg.member[i].autoPlayVideo.default.url,
        bg:epg.member[i].images.videoList.HD.replace('http://','https://').split('?')[0].split('?')[0] + '?downsize=8px:*',
        time:Date.parse(date),
        type:'fox',
        episode_id:epg.member[i].playerScreenUrl.split('player/')[1].split('?')[0],
        hidden:epg.member[i].hideVideo,
        expires:new Date(epg.member[i].expires).getTime()  + 1000000000

              }


if (!finalObj.includes(this_episode)) {
				 finalObj.push(this_episode);
}




	}

loaders('remove')
})
*/


	fetch(config.apis.content.baseUrl + '/fbc-content/'+apiver+'/video/?seriesType=series&_fields=contentRating,id,name,rating,genres,images,expires,@id,seriesName,seasonNumber,showCode,episodeNumber,durationInSeconds,originalAirDate,hideVideo,releaseYear&id=&itemsPerPage=1000&videoType=fullEpisode&showCode=' + foxshowlist.join(),{headers:foxheaders}).then(function(res){if(res.status == 200){return res.json();}else{}}).then(function(fullEpisodes){
if ('member' in fullEpisodes) {
	fullEpisodes.member.reverse()
for(i in fullEpisodes.member){

  // !json.member[i].requiresAuth &&
if(!'images' in fullEpisodes.member[i]){
	console.log(fullEpisodes.member[i])
}
var image = fullEpisodes.member[i].images.still.HD.split('?')[0]
var sizes = [
'110:110',
'320:180',
'480:270',
'528:297',
'740:416',
'840:315',
'1280:720'
]
var srcset = ''
function webpImage(){
if (webpcompatible) {
	return '&output-format=webp';
}else{
	return ''
}
}
for (var z = sizes.length - 1; z >= 0; z--) {
	//encodeURIComponent
 srcset += (image + '?fit=inside%7C' + (sizes[z]) +  ' ' + sizes[z].split(':')[0] +'w ,')
}
srcset = srcset.substr(0, srcset.length - 1);
var date = new Date(fullEpisodes.member[i].originalAirDate)
date.setTime(date.getTime() - (date.getTimezoneOffset() * 60000));
var output = date.toISOString().substring(0, date.toISOString().length - 1) + ((date.getTimezoneOffset() / 60) < 0 ? "-" : "+") + ((Math.abs(date.getTimezoneOffset() / 60) < 10) ?  ("0" + Math.abs(date.getTimezoneOffset() / 60)) : test) + "00";
try{

	if (!('autoPlayVideo' in fullEpisodes.member[i])) {

		fullEpisodes.member[i]['autoPlayVideo'] = {"default":{"url":""}}
	}
	var showYear = ''
	if('releaseYear' in fullEpisodes.member[i]){
		showYear = fullEpisodes.member[i].releaseYear
	}else{
		showYear = moment(date).year()

	}
	showLogos[fullEpisodes.member[i].seriesName] = fullEpisodes.member[i].images.logoCenter.FHD
showDetail[fullEpisodes.member[i].seriesName] = {name:fullEpisodes.member[i].seriesName,rating:fullEpisodes.member[i].contentRating,
	logo:fullEpisodes.member[i].images.logoCenter.FHD,bg:fullEpisodes.member[i].images.seriesStill.FHD.split('?')[0]+'?fit=inside%7C720:405',
	genre:fullEpisodes.member[i].genres,year:showYear}

	// rating(fullEpisodes.member[i].contentRating)
	var this_episode = {
        img: fullEpisodes.member[i].images.still.SD,
        rating: '',
        href: 'https://api.fox.com/fbc-content/v2.0/video/'+fullEpisodes.member[i].id,
        show: fullEpisodes.member[i].seriesName,
        episode: fullEpisodes.member[i].name,
        id: fullEpisodes.member[i].id,
        epiformat: epiformat(fullEpisodes.member[i].seasonNumber, fullEpisodes.member[i].episodeNumber),
        episodeNumber: Number(fullEpisodes.member[i].episodeNumber),
        seasonNumber: Number(fullEpisodes.member[i].seasonNumber),
        length: fullEpisodes.member[i].durationInSeconds,
        type: fullEpisodes.member[i].network,
        imgdyn: srcset,
        autoplay:'',
        bg:fullEpisodes.member[i].images.still.HD.replace('http://','https://').split('?')[0].split('?')[0] + '?downsize=8px:*',
        time:Date.parse(date),
        type:'fox',
        episode_id:fullEpisodes.member[i].id,
        hidden:fullEpisodes.member[i].hideVideo,
        expires:new Date(fullEpisodes.member[i].expires).getTime() + 1000000000

              }
              if (!finalObj.includes(this_episode)) {
      finalObj.push(this_episode);

              }
  }catch(e){
  	console.log(e)
  }
                  tvlist(fullEpisodes.member[i].seriesName,fullEpisodes.member[i].images.seriesList.SD.replace('http://','https://').split('?')[0] + '?fit=inside|320:180' /*+ webpImage()*/,'fox' )
showswithimages[fullEpisodes.member[i].seriesName] = fullEpisodes.member[i].images.seriesList.SD.replace('http://','https://').split('?')[0] + '?fit=inside|320:180' //+ webpImage()

} 

}




		loaders('remove')

	}).catch(function(e){
console.log(e)

		loaders('remove')
	})
	

	}
loadTogether()
// loadSeperate()
loaders('remove')




}).catch(function(e){
console.log(e)
loaders('remove')
})

})





}

function setEpisodes(){
	var offlineSet = [
{
img:"https://art-s.nflximg.net/acac8/647db4182c5748a4a2a2aaa70713acd7652acac8.webp",
rating:"TV-14",
href:"http://hlsioscwtv.warnerbros.com/ioshlskeys/videos/2017/10/09/TheFlash-401-TheFlashReborn-T2713401-CW-Stereo_b7fbeaea_dai.m3u8",
show:"The Flash",
episode:"The Flash Reborn",
id:makeid(),
epiformat:"S04E01",
length:2640,
type:"offline",
time:new Date('10/7/14 8:00 pm').getTime(),
expires:Date.now() + 10000000000,
imgdyn:""
}


	]
	for (var i = offlineSet.length - 1; i >= 0; i--) {
		finalObj.push(offlineSet[i])
	}
}


    if (!window.location.search == '' || window.location.search == '?') {
      for (var i = window.location.search.split('?')[1].split(',').length - 1; i >= 0; i--) {
      	var sConfig = decodeURIComponent(window.location.search)
        eval(sConfig.split('?')[1].split(',')[i].split(':')[0] + '("'+decodeURIComponent(sConfig.split('?')[1].split(',')[i].split(':')[1]).replace(new RegExp("\\+","g"),' ')+'")')
      }
    sConfig.split('?')[1]
    }else{
    cw()
    //  fox()
      nbc()
      // setEpisodes()
          var vtag = document.createElement("video"); var hlsSupported = !!vtag.canPlayType && !!vtag.canPlayType("application/x-mpegurl");
if (hlsSupported) {
 // aswim()
}
    }


console.timeEnd('parse');
 