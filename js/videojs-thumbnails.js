(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsThumbnails = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var videojs = _interopDefault((typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null));
var global = require(1);

var ThumbnailHelpers = function () {
  function ThumbnailHelpers() {
    _classCallCheck(this, ThumbnailHelpers);
  }

  _createClass(ThumbnailHelpers, null, [{
    key: 'hidePlayerOnHoverTime',
    value: function hidePlayerOnHoverTime(progressControl) {
      var mouseTime = progressControl.el_.getElementsByClassName('vjs-mouse-display')[0];

      mouseTime.style.display = 'none';
    }
  }, {
    key: 'createThumbnails',
    value: function createThumbnails() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var thumbnailClip = args.shift() || {};

      Object.keys(args).map(function (i) {
        var singleThumbnail = args[i];

        Object.keys(singleThumbnail).map(function (property) {
          if (singleThumbnail.hasOwnProperty(property)) {
            if (_typeof(singleThumbnail[property]) === 'object') {
              thumbnailClip[property] = ThumbnailHelpers.createThumbnails(thumbnailClip[property], singleThumbnail[property]);
            } else {
              thumbnailClip[property] = singleThumbnail[property];
            }
          }
          return thumbnailClip;
        });
        return thumbnailClip;
      });
      return thumbnailClip;
    }
  }, {
    key: 'getComputedStyle',
    value: function getComputedStyle(thumbnailContent, pseudo) {
      return function (prop) {
        if (global.window.getComputedStyle) {
          return global.window.getComputedStyle(thumbnailContent, pseudo)[prop];
        }
        return thumbnailContent.currentStyle[prop];
      };
    }
  }, {
    key: 'getVisibleWidth',
    value: function getVisibleWidth(thumbnailContent, width) {
      if (width) {
        return parseFloat(width);
      }

      var clip = ThumbnailHelpers.getComputedStyle(thumbnailContent)('clip');

      if (clip !== 'auto' && clip !== 'inherit') {
        clip = clip.split(/(?:\(|\))/)[1].split(/(?:,| )/);
        if (clip.length === 4) {
          return parseFloat(clip[1]) - parseFloat(clip[3]);
        }
      }
      return 0;
    }
  }, {
    key: 'getScrollOffset',
    value: function getScrollOffset() {
      if (global.window.pageXOffset) {
        return {
          x: global.window.pageXOffset,
          y: global.window.pageYOffset
        };
      }
      return {
        x: global.document.documentElement.scrollLeft,
        y: global.document.documentElement.scrollTop
      };
    }
  }, {
    key: 'suportAndroidEvents',
    value: function suportAndroidEvents(player) {
      // Android doesn't support :active and :hover on non-anchor and non-button elements
      // so, we need to fake the :active selector for thumbnails to show up.
      var progressControl = player.controlBar.progressControl;

      var addFakeActive = function addFakeActive() {
        progressControl.addClass('fake-active');
      };

      var removeFakeActive = function removeFakeActive() {
        progressControl.removeClass('fake-active');
      };

      progressControl.on('touchstart', addFakeActive);
      progressControl.on('touchend', removeFakeActive);
      progressControl.on('touchcancel', removeFakeActive);
    }
  }, {
    key: 'createThumbnaislHolder',
    value: function createThumbnaislHolder() {
      var wrap = global.document.createElement('div');

      wrap.className = 'vjs-thumbnail-holder';
      return wrap;
    }
  }, {
    key: 'createThumbnailImg',
    value: function createThumbnailImg(thumbnailClips) {
      var thumbnailImg = global.document.createElement('img');

      thumbnailImg.src = thumbnailClips['0'].src;
      thumbnailImg.className = 'vjs-thumbnail-img';
      return thumbnailImg;
    }
  }, {
    key: 'createThumbnailTime',
    value: function createThumbnailTime() {
      var time = global.document.createElement('div');

      time.className = 'vjs-thumbnail-time';
      time.id = 'vjs-time';
      return time;
    }
  }, {
    key: 'createThumbnailArrowDown',
    value: function createThumbnailArrowDown() {
      var arrow = global.document.createElement('div');

      arrow.className = 'vjs-thumbnail-arrow';
      arrow.id = 'vjs-arrow';
      return arrow;
    }
  }, {
    key: 'mergeThumbnailElements',
    value: function mergeThumbnailElements(thumbnailsHolder, thumbnailImg, timelineTime, thumbnailArrowDown) {

      thumbnailsHolder.appendChild(thumbnailImg);
      thumbnailsHolder.appendChild(timelineTime);
      thumbnailsHolder.appendChild(thumbnailArrowDown);
      return thumbnailsHolder;
    }
  }, {
    key: 'centerThumbnailOverCursor',
    value: function centerThumbnailOverCursor(thumbnailImg) {
      // center the thumbnail over the cursor if an offset wasn't provided
      if (!thumbnailImg.style.left && !thumbnailImg.style.right) {
        thumbnailImg.onload = function () {
          var thumbnailWidth = { width: -(thumbnailImg.naturalWidth / 2) };

          thumbnailImg.style.left = thumbnailWidth + 'px';
        };
      }
    }
  }, {
    key: 'getVideoDuration',
    value: function getVideoDuration(player) {
      var duration = player.duration();

      player.on('durationchange', function () {
        duration = player.duration();
      });
      return duration;
    }
  }, {
    key: 'addThumbnailToPlayer',
    value: function addThumbnailToPlayer(progressControl, thumbnailsHolder) {
      progressControl.el().appendChild(thumbnailsHolder);
    }
  }, {
    key: 'findMouseLeftOffset',
    value: function findMouseLeftOffset(pageMousePositionX, progressControl, pageXOffset, event) {
      // find the page offset of the mouse
      var leftOffset = pageMousePositionX || event.clientX + global.document.body.scrollLeft + global.document.documentElement.scrollLeft;

      // subtract the page offset of the positioned offset parent
      leftOffset -= progressControl.el().getBoundingClientRect().left + pageXOffset;
      return leftOffset;
    }
  }, {
    key: 'getMouseVideoTime',
    value: function getMouseVideoTime(mouseLeftOffset, progressControl, duration) {
      return Math.floor((mouseLeftOffset - progressControl.el().offsetLeft) / progressControl.width() * duration);
    }
  }, {
    key: 'updateThumbnailTime',
    value: function updateThumbnailTime(timelineTime, progressControl) {
      timelineTime.innerHTML = progressControl.seekBar.mouseTimeDisplay.el_.attributes['data-current-time'].value;
    }
  }, {
    key: 'getPageMousePositionX',
    value: function getPageMousePositionX(event) {
      var pageMouseOffsetX = event.pageX;

      if (event.changedTouches) {
        pageMouseOffsetX = event.changedTouches[0].pageX;
      }
      return pageMouseOffsetX;
    }
  }, {
    key: 'keepThumbnailInsidePlayer',
    value: function keepThumbnailInsidePlayer(thumbnailImg, activeThumbnail, thumbnailClips, mouseLeftOffset, progresBarRightOffset) {

      var width = ThumbnailHelpers.getVisibleWidth(thumbnailImg, activeThumbnail.width || thumbnailClips[0].width);

      var halfWidth = width / 2;

      // make sure that the thumbnail doesn't fall off the right side of
      // the left side of the player
      if (mouseLeftOffset + halfWidth > progresBarRightOffset) {
        mouseLeftOffset -= mouseLeftOffset + halfWidth - progresBarRightOffset;
      } else if (mouseLeftOffset < halfWidth) {
        mouseLeftOffset = halfWidth;
      }
      return mouseLeftOffset;
    }
  }, {
    key: 'updateThumbnailLeftStyle',
    value: function updateThumbnailLeftStyle(mouseLeftOffset, thumbnailsHolder) {
      var leftValue = { mouseLeftOffset: mouseLeftOffset };

      thumbnailsHolder.style.left = leftValue.mouseLeftOffset + 'px';
    }
  }, {
    key: 'getActiveThumbnail',
    value: function getActiveThumbnail(thumbnailClips, mouseTime) {
      var activeClip = 0;

      for (var clipNumber in thumbnailClips) {
        if (mouseTime > clipNumber) {
          activeClip = Math.max(activeClip, clipNumber);
        }
      }
      return thumbnailClips[activeClip];
    }
  }, {
    key: 'updateThumbnailSrc',
    value: function updateThumbnailSrc(activeThumbnail, thumbnailImg) {
      if (activeThumbnail.src && thumbnailImg.src !== activeThumbnail.src) {
        thumbnailImg.src = activeThumbnail.src;
      }
    }
  }, {
    key: 'updateThumbnailStyle',
    value: function updateThumbnailStyle(activeThumbnail, thumbnailImg) {
      if (activeThumbnail.style && thumbnailImg.style !== activeThumbnail.style) {
        ThumbnailHelpers.createThumbnails(thumbnailImg.style, activeThumbnail.style);
      }
    }
  }, {
    key: 'moveListener',
    value: function moveListener(event, progressControl, thumbnailsHolder, thumbnailClips, timelineTime, thumbnailImg, player) {

      var duration = ThumbnailHelpers.getVideoDuration(player);
      var pageXOffset = ThumbnailHelpers.getScrollOffset().x;
      var progresBarPosition = progressControl.el().getBoundingClientRect();

      var progresBarRightOffset = (progresBarPosition.width || progresBarPosition.right) + pageXOffset;

      var pageMousePositionX = ThumbnailHelpers.getPageMousePositionX(event);

      var mouseLeftOffset = ThumbnailHelpers.findMouseLeftOffset(pageMousePositionX, progressControl, pageXOffset, event);

      var mouseTime = ThumbnailHelpers.getMouseVideoTime(mouseLeftOffset, progressControl, duration);

      var activeThumbnail = ThumbnailHelpers.getActiveThumbnail(thumbnailClips, mouseTime);

      ThumbnailHelpers.updateThumbnailTime(timelineTime, progressControl);

      ThumbnailHelpers.updateThumbnailSrc(activeThumbnail, thumbnailImg);

      ThumbnailHelpers.updateThumbnailStyle(activeThumbnail, thumbnailImg);

      mouseLeftOffset = ThumbnailHelpers.keepThumbnailInsidePlayer(thumbnailImg, activeThumbnail, thumbnailClips, mouseLeftOffset, progresBarRightOffset);

      ThumbnailHelpers.updateThumbnailLeftStyle(mouseLeftOffset, thumbnailsHolder);
    }
  }, {
    key: 'upadateOnHover',
    value: function upadateOnHover(progressControl, thumbnailsHolder, thumbnailClips, timelineTime, thumbnailImg, player) {

      // update the thumbnail while hovering
      progressControl.on('mousemove', function (event) {
        ThumbnailHelpers.moveListener(event, progressControl, thumbnailsHolder, thumbnailClips, timelineTime, thumbnailImg, player);
      });
      progressControl.on('touchmove', function (event) {
        ThumbnailHelpers.moveListener(event, progressControl, thumbnailsHolder, thumbnailClips, timelineTime, thumbnailImg);
      });
    }
  }, {
    key: 'hideThumbnail',
    value: function hideThumbnail(thumbnailsHolder) {
      thumbnailsHolder.style.left = '-1000px';
    }
  }, {
    key: 'upadateOnHoverOut',
    value: function upadateOnHoverOut(progressControl, thumbnailsHolder, player) {

      // move the placeholder out of the way when not hovering
      progressControl.on('mouseout', function (event) {
        ThumbnailHelpers.hideThumbnail(thumbnailsHolder);
      });
      progressControl.on('touchcancel', function (event) {
        ThumbnailHelpers.hideThumbnail(thumbnailsHolder);
      });
      progressControl.on('touchend', function (event) {
        ThumbnailHelpers.hideThumbnail(thumbnailsHolder);
      });
      player.on('userinactive', function (event) {
        ThumbnailHelpers.hideThumbnail(thumbnailsHolder);
      });
    }
  }]);

  return ThumbnailHelpers;
}();

// Default options for the plugin.


var defaults = {};

// Cross-compatibility for Video.js 5 and 6.
var registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player.
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */

var prepareThumbnailsClips = function prepareThumbnailsClips(videoTime, options) {

  var currentTime = 0;
  var currentIteration = 0;
  var thumbnailOffset = 0;
  var stepTime = options.stepTime;
  var thumbnailWidth = options.width;
  var spriteURL = options.spriteUrl;
  var thumbnailClips = {
    0: {
      src: spriteURL,
      style: {
        left: thumbnailWidth / 2 * -1 + 'px',
        width: (Math.floor(videoTime / stepTime) + 1) * thumbnailWidth + 'px',
        clip: 'rect(0,' + options.width + 'px,' + options.width + 'px, 0)'
      }
    }
  };

  while (currentTime <= videoTime) {
    currentTime += stepTime;
    thumbnailOffset = ++currentIteration * thumbnailWidth;
    thumbnailClips[currentTime] = {
      style: {
        left: (thumbnailWidth / 2 + thumbnailOffset) * -1 + 'px',
        clip: 'rect(0, ' + (thumbnailWidth + thumbnailOffset) + 'px,' + options.width + 'px, ' + thumbnailOffset + 'px)'
      }
    };
  }
  return thumbnailClips;
};

var initializeThumbnails = function initializeThumbnails(thumbnailsClips, player) {

  var thumbnailClips = ThumbnailHelpers.createThumbnails({}, defaults, thumbnailsClips);
  var progressControl = player.controlBar.progressControl;
  var thumbnailImg = ThumbnailHelpers.createThumbnailImg(thumbnailClips);
  var timelineTime = ThumbnailHelpers.createThumbnailTime();
  var thumbnailArrowDown = ThumbnailHelpers.createThumbnailArrowDown();
  var thumbnaislHolder = ThumbnailHelpers.createThumbnaislHolder();

  thumbnaislHolder = ThumbnailHelpers.mergeThumbnailElements(thumbnaislHolder, thumbnailImg, timelineTime, thumbnailArrowDown);
  ThumbnailHelpers.hidePlayerOnHoverTime(progressControl);

  if (global.window.navigator.userAgent.toLowerCase().indexOf('android') !== -1) {
    ThumbnailHelpers.suportAndroidEvents();
  }

  ThumbnailHelpers.createThumbnails(thumbnailImg.style, thumbnailClips['0'].style);

  ThumbnailHelpers.centerThumbnailOverCursor(thumbnailImg);

  ThumbnailHelpers.addThumbnailToPlayer(progressControl, thumbnaislHolder);

  ThumbnailHelpers.upadateOnHover(progressControl, thumbnaislHolder, thumbnailClips, timelineTime, thumbnailImg, player);

  ThumbnailHelpers.upadateOnHoverOut(progressControl, thumbnaislHolder, player);
};

var onPlayerReady = function onPlayerReady(player, options) {
  player.on('loadedmetadata', function () {
    var thumbnailsClips = prepareThumbnailsClips(player.duration(), options);

    initializeThumbnails(thumbnailsClips, player);
  });
};
/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function thumbnails
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var thumbnails = function thumbnails(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('thumbnails', thumbnails);

// Include the version number.
thumbnails.VERSION = '1.0.3';

module.exports = thumbnails;

},{"1":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1RBOzs7Ozs7OztBQUVBLFNBQVMsZUFBVCxDQUEwQixFQUExQixFQUE4QjtBQUFFLFNBQVEsTUFBTyxRQUFPLEVBQVAseUNBQU8sRUFBUCxPQUFjLFFBQXJCLElBQWtDLGFBQWEsRUFBaEQsR0FBc0QsR0FBRyxTQUFILENBQXRELEdBQXNFLEVBQTdFO0FBQWtGOztBQUVsSCxJQUFJLFVBQVUsZ0JBQWdCLFFBQVEsVUFBUixDQUFoQixDQUFkO0FBQ0EsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFiOztJQUVNLGdCOzs7Ozs7OzBDQUV5QixlLEVBQWlCO0FBQzVDLFVBQU0sWUFBWSxnQkFBZ0IsR0FBaEIsQ0FBb0Isc0JBQXBCLENBQTJDLG1CQUEzQyxFQUFnRSxDQUFoRSxDQUFsQjs7QUFFQSxnQkFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0Q7Ozt1Q0FFZ0M7QUFBQSx3Q0FBTixJQUFNO0FBQU4sWUFBTTtBQUFBOztBQUMvQixVQUFNLGdCQUFnQixLQUFLLEtBQUwsTUFBZ0IsRUFBdEM7O0FBRUEsYUFBTyxJQUFQLENBQVksSUFBWixFQUFrQixHQUFsQixDQUFzQixVQUFDLENBQUQsRUFBTztBQUMzQixZQUFNLGtCQUFrQixLQUFLLENBQUwsQ0FBeEI7O0FBRUEsZUFBTyxJQUFQLENBQVksZUFBWixFQUE2QixHQUE3QixDQUFpQyxVQUFDLFFBQUQsRUFBYztBQUM3QyxjQUFJLGdCQUFnQixjQUFoQixDQUErQixRQUEvQixDQUFKLEVBQThDO0FBQzVDLGdCQUFJLFFBQU8sZ0JBQWdCLFFBQWhCLENBQVAsTUFBcUMsUUFBekMsRUFB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ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIG1vZHVsZS5leHBvcnRzID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7fTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciB2aWRlb2pzID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3ZpZGVvLmpzJykpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJ2dsb2JhbCcpO1xuXG5jbGFzcyBUaHVtYm5haWxIZWxwZXJzIHtcblxuICBzdGF0aWMgaGlkZVBsYXllck9uSG92ZXJUaW1lKHByb2dyZXNzQ29udHJvbCkge1xuICAgIGNvbnN0IG1vdXNlVGltZSA9IHByb2dyZXNzQ29udHJvbC5lbF8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLW1vdXNlLWRpc3BsYXknKVswXTtcblxuICAgIG1vdXNlVGltZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRodW1ibmFpbHMoLi4uYXJncykge1xuICAgIGNvbnN0IHRodW1ibmFpbENsaXAgPSBhcmdzLnNoaWZ0KCkgfHwge307XG5cbiAgICBPYmplY3Qua2V5cyhhcmdzKS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IHNpbmdsZVRodW1ibmFpbCA9IGFyZ3NbaV07XG5cbiAgICAgIE9iamVjdC5rZXlzKHNpbmdsZVRodW1ibmFpbCkubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZiAoc2luZ2xlVGh1bWJuYWlsLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2luZ2xlVGh1bWJuYWlsW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRodW1ibmFpbENsaXBbcHJvcGVydHldID0gVGh1bWJuYWlsSGVscGVycy5jcmVhdGVUaHVtYm5haWxzKHRodW1ibmFpbENsaXBbcHJvcGVydHldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlVGh1bWJuYWlsW3Byb3BlcnR5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRodW1ibmFpbENsaXBbcHJvcGVydHldID0gc2luZ2xlVGh1bWJuYWlsW3Byb3BlcnR5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRodW1ibmFpbENsaXA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHVtYm5haWxDbGlwO1xuICAgIH0pO1xuICAgIHJldHVybiB0aHVtYm5haWxDbGlwO1xuICB9XG5cbiAgc3RhdGljIGdldENvbXB1dGVkU3R5bGUodGh1bWJuYWlsQ29udGVudCwgcHNldWRvKSB7XG4gICAgcmV0dXJuIChwcm9wKSA9PiB7XG4gICAgICBpZiAoZ2xvYmFsLndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwud2luZG93LmdldENvbXB1dGVkU3R5bGUodGh1bWJuYWlsQ29udGVudCwgcHNldWRvKVtwcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aHVtYm5haWxDb250ZW50LmN1cnJlbnRTdHlsZVtwcm9wXTtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFZpc2libGVXaWR0aCh0aHVtYm5haWxDb250ZW50LCB3aWR0aCkge1xuICAgIGlmICh3aWR0aCkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQod2lkdGgpO1xuICAgIH1cblxuICAgIGxldCBjbGlwID0gVGh1bWJuYWlsSGVscGVycy5nZXRDb21wdXRlZFN0eWxlKHRodW1ibmFpbENvbnRlbnQpKCdjbGlwJyk7XG5cbiAgICBpZiAoY2xpcCAhPT0gJ2F1dG8nICYmIGNsaXAgIT09ICdpbmhlcml0Jykge1xuICAgICAgY2xpcCA9IGNsaXAuc3BsaXQoLyg/OlxcKHxcXCkpLylbMV0uc3BsaXQoLyg/Oix8ICkvKTtcbiAgICAgIGlmIChjbGlwLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICByZXR1cm4gKHBhcnNlRmxvYXQoY2xpcFsxXSkgLSBwYXJzZUZsb2F0KGNsaXBbM10pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0U2Nyb2xsT2Zmc2V0KCkge1xuICAgIGlmIChnbG9iYWwud2luZG93LnBhZ2VYT2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBnbG9iYWwud2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB5OiBnbG9iYWwud2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgeDogZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgeTogZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHN1cG9ydEFuZHJvaWRFdmVudHMocGxheWVyKSB7XG4gICAgLy8gQW5kcm9pZCBkb2Vzbid0IHN1cHBvcnQgOmFjdGl2ZSBhbmQgOmhvdmVyIG9uIG5vbi1hbmNob3IgYW5kIG5vbi1idXR0b24gZWxlbWVudHNcbiAgICAvLyBzbywgd2UgbmVlZCB0byBmYWtlIHRoZSA6YWN0aXZlIHNlbGVjdG9yIGZvciB0aHVtYm5haWxzIHRvIHNob3cgdXAuXG4gICAgY29uc3QgcHJvZ3Jlc3NDb250cm9sID0gcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sO1xuXG4gICAgY29uc3QgYWRkRmFrZUFjdGl2ZSA9ICgpID0+IHtcbiAgICAgIHByb2dyZXNzQ29udHJvbC5hZGRDbGFzcygnZmFrZS1hY3RpdmUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlRmFrZUFjdGl2ZSA9ICgpID0+IHtcbiAgICAgIHByb2dyZXNzQ29udHJvbC5yZW1vdmVDbGFzcygnZmFrZS1hY3RpdmUnKTtcbiAgICB9O1xuXG4gICAgcHJvZ3Jlc3NDb250cm9sLm9uKCd0b3VjaHN0YXJ0JywgYWRkRmFrZUFjdGl2ZSk7XG4gICAgcHJvZ3Jlc3NDb250cm9sLm9uKCd0b3VjaGVuZCcsIHJlbW92ZUZha2VBY3RpdmUpO1xuICAgIHByb2dyZXNzQ29udHJvbC5vbigndG91Y2hjYW5jZWwnLCByZW1vdmVGYWtlQWN0aXZlKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUaHVtYm5haXNsSG9sZGVyKCkge1xuICAgIGNvbnN0IHdyYXAgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB3cmFwLmNsYXNzTmFtZSA9ICd2anMtdGh1bWJuYWlsLWhvbGRlcic7XG4gICAgcmV0dXJuIHdyYXA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGh1bWJuYWlsSW1nKHRodW1ibmFpbENsaXBzKSB7XG4gICAgY29uc3QgdGh1bWJuYWlsSW1nID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgdGh1bWJuYWlsSW1nLnNyYyA9IHRodW1ibmFpbENsaXBzWycwJ10uc3JjO1xuICAgIHRodW1ibmFpbEltZy5jbGFzc05hbWUgPSAndmpzLXRodW1ibmFpbC1pbWcnO1xuICAgIHJldHVybiB0aHVtYm5haWxJbWc7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGh1bWJuYWlsVGltZSgpIHtcbiAgICBjb25zdCB0aW1lID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGltZS5jbGFzc05hbWUgPSAndmpzLXRodW1ibmFpbC10aW1lJztcbiAgICB0aW1lLmlkID0gJ3Zqcy10aW1lJztcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUaHVtYm5haWxBcnJvd0Rvd24oKSB7XG4gICAgY29uc3QgYXJyb3cgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBhcnJvdy5jbGFzc05hbWUgPSAndmpzLXRodW1ibmFpbC1hcnJvdyc7XG4gICAgYXJyb3cuaWQgPSAndmpzLWFycm93JztcbiAgICByZXR1cm4gYXJyb3c7XG4gIH1cblxuICBzdGF0aWMgbWVyZ2VUaHVtYm5haWxFbGVtZW50cyh0aHVtYm5haWxzSG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsQXJyb3dEb3duKSB7XG5cbiAgICB0aHVtYm5haWxzSG9sZGVyLmFwcGVuZENoaWxkKHRodW1ibmFpbEltZyk7XG4gICAgdGh1bWJuYWlsc0hvbGRlci5hcHBlbmRDaGlsZCh0aW1lbGluZVRpbWUpO1xuICAgIHRodW1ibmFpbHNIb2xkZXIuYXBwZW5kQ2hpbGQodGh1bWJuYWlsQXJyb3dEb3duKTtcbiAgICByZXR1cm4gdGh1bWJuYWlsc0hvbGRlcjtcbiAgfVxuXG4gIHN0YXRpYyBjZW50ZXJUaHVtYm5haWxPdmVyQ3Vyc29yKHRodW1ibmFpbEltZykge1xuICAgIC8vIGNlbnRlciB0aGUgdGh1bWJuYWlsIG92ZXIgdGhlIGN1cnNvciBpZiBhbiBvZmZzZXQgd2Fzbid0IHByb3ZpZGVkXG4gICAgaWYgKCF0aHVtYm5haWxJbWcuc3R5bGUubGVmdCAmJiAhdGh1bWJuYWlsSW1nLnN0eWxlLnJpZ2h0KSB7XG4gICAgICB0aHVtYm5haWxJbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aHVtYm5haWxXaWR0aCA9IHsgd2lkdGg6IC0odGh1bWJuYWlsSW1nLm5hdHVyYWxXaWR0aCAvIDIpIH07XG5cbiAgICAgICAgdGh1bWJuYWlsSW1nLnN0eWxlLmxlZnQgPSBgJHt0aHVtYm5haWxXaWR0aH1weGA7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRWaWRlb0R1cmF0aW9uKHBsYXllcikge1xuICAgIGxldCBkdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuXG4gICAgcGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICAgIGR1cmF0aW9uID0gcGxheWVyLmR1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGFkZFRodW1ibmFpbFRvUGxheWVyKHByb2dyZXNzQ29udHJvbCwgdGh1bWJuYWlsc0hvbGRlcikge1xuICAgIHByb2dyZXNzQ29udHJvbC5lbCgpLmFwcGVuZENoaWxkKHRodW1ibmFpbHNIb2xkZXIpO1xuICB9XG5cbiAgc3RhdGljIGZpbmRNb3VzZUxlZnRPZmZzZXQocGFnZU1vdXNlUG9zaXRpb25YLCBwcm9ncmVzc0NvbnRyb2wsIHBhZ2VYT2Zmc2V0LCBldmVudCkge1xuICAgIC8vIGZpbmQgdGhlIHBhZ2Ugb2Zmc2V0IG9mIHRoZSBtb3VzZVxuICAgIGxldCBsZWZ0T2Zmc2V0ID0gcGFnZU1vdXNlUG9zaXRpb25YIHx8IChldmVudC5jbGllbnRYICtcbiAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5kb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpO1xuXG4gICAgLy8gc3VidHJhY3QgdGhlIHBhZ2Ugb2Zmc2V0IG9mIHRoZSBwb3NpdGlvbmVkIG9mZnNldCBwYXJlbnRcbiAgICBsZWZ0T2Zmc2V0IC09IHByb2dyZXNzQ29udHJvbC5lbCgpLlxuICAgICAgICAgICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgIHJldHVybiBsZWZ0T2Zmc2V0O1xuICB9XG5cbiAgc3RhdGljIGdldE1vdXNlVmlkZW9UaW1lKG1vdXNlTGVmdE9mZnNldCwgcHJvZ3Jlc3NDb250cm9sLCBkdXJhdGlvbikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChtb3VzZUxlZnRPZmZzZXQgLSBwcm9ncmVzc0NvbnRyb2wuZWwoKS5vZmZzZXRMZWZ0KSAvXG4gICAgICAgICAgIHByb2dyZXNzQ29udHJvbC53aWR0aCgpICogZHVyYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRodW1ibmFpbFRpbWUodGltZWxpbmVUaW1lLCBwcm9ncmVzc0NvbnRyb2wpIHtcbiAgICB0aW1lbGluZVRpbWUuaW5uZXJIVE1MID0gKHByb2dyZXNzQ29udHJvbC5zZWVrQmFyLm1vdXNlVGltZURpc3BsYXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsXy5hdHRyaWJ1dGVzWydkYXRhLWN1cnJlbnQtdGltZSddLnZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQYWdlTW91c2VQb3NpdGlvblgoZXZlbnQpIHtcbiAgICBsZXQgcGFnZU1vdXNlT2Zmc2V0WCA9IGV2ZW50LnBhZ2VYO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBwYWdlTW91c2VPZmZzZXRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgfVxuICAgIHJldHVybiBwYWdlTW91c2VPZmZzZXRYO1xuICB9XG5cbiAgc3RhdGljIGtlZXBUaHVtYm5haWxJbnNpZGVQbGF5ZXIodGh1bWJuYWlsSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbENsaXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUxlZnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNCYXJSaWdodE9mZnNldCkge1xuXG4gICAgY29uc3Qgd2lkdGggPSBUaHVtYm5haWxIZWxwZXJzLmdldFZpc2libGVXaWR0aCh0aHVtYm5haWxJbWcsIGFjdGl2ZVRodW1ibmFpbC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsQ2xpcHNbMF0ud2lkdGgpO1xuXG4gICAgY29uc3QgaGFsZldpZHRoID0gd2lkdGggLyAyO1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHRodW1ibmFpbCBkb2Vzbid0IGZhbGwgb2ZmIHRoZSByaWdodCBzaWRlIG9mXG4gICAgLy8gdGhlIGxlZnQgc2lkZSBvZiB0aGUgcGxheWVyXG4gICAgaWYgKChtb3VzZUxlZnRPZmZzZXQgKyBoYWxmV2lkdGgpID4gcHJvZ3Jlc0JhclJpZ2h0T2Zmc2V0KSB7XG4gICAgICBtb3VzZUxlZnRPZmZzZXQgLT0gKG1vdXNlTGVmdE9mZnNldCArIGhhbGZXaWR0aCkgLSBwcm9ncmVzQmFyUmlnaHRPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChtb3VzZUxlZnRPZmZzZXQgPCBoYWxmV2lkdGgpIHtcbiAgICAgIG1vdXNlTGVmdE9mZnNldCA9IGhhbGZXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIG1vdXNlTGVmdE9mZnNldDtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUaHVtYm5haWxMZWZ0U3R5bGUobW91c2VMZWZ0T2Zmc2V0LCB0aHVtYm5haWxzSG9sZGVyKSB7XG4gICAgY29uc3QgbGVmdFZhbHVlID0geyBtb3VzZUxlZnRPZmZzZXQgfTtcblxuICAgIHRodW1ibmFpbHNIb2xkZXIuc3R5bGUubGVmdCA9IGAke2xlZnRWYWx1ZS5tb3VzZUxlZnRPZmZzZXR9cHhgO1xuICB9XG5cbiAgc3RhdGljIGdldEFjdGl2ZVRodW1ibmFpbCh0aHVtYm5haWxDbGlwcywgbW91c2VUaW1lKSB7XG4gICAgbGV0IGFjdGl2ZUNsaXAgPSAwO1xuXG4gICAgZm9yIChjb25zdCBjbGlwTnVtYmVyIGluIHRodW1ibmFpbENsaXBzKSB7XG4gICAgICBpZiAobW91c2VUaW1lID4gY2xpcE51bWJlcikge1xuICAgICAgICBhY3RpdmVDbGlwID0gTWF0aC5tYXgoYWN0aXZlQ2xpcCwgY2xpcE51bWJlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aHVtYm5haWxDbGlwc1thY3RpdmVDbGlwXTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUaHVtYm5haWxTcmMoYWN0aXZlVGh1bWJuYWlsLCB0aHVtYm5haWxJbWcpIHtcbiAgICBpZiAoYWN0aXZlVGh1bWJuYWlsLnNyYyAmJiB0aHVtYm5haWxJbWcuc3JjICE9PSBhY3RpdmVUaHVtYm5haWwuc3JjKSB7XG4gICAgICB0aHVtYm5haWxJbWcuc3JjID0gYWN0aXZlVGh1bWJuYWlsLnNyYztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGh1bWJuYWlsU3R5bGUoYWN0aXZlVGh1bWJuYWlsLCB0aHVtYm5haWxJbWcpIHtcbiAgICBpZiAoYWN0aXZlVGh1bWJuYWlsLnN0eWxlICYmIHRodW1ibmFpbEltZy5zdHlsZSAhPT0gYWN0aXZlVGh1bWJuYWlsLnN0eWxlKSB7XG4gICAgICBUaHVtYm5haWxIZWxwZXJzLmNyZWF0ZVRodW1ibmFpbHModGh1bWJuYWlsSW1nLnN0eWxlLCBhY3RpdmVUaHVtYm5haWwuc3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtb3ZlTGlzdGVuZXIoZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250cm9sLFxuICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHNIb2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsQ2xpcHMsXG4gICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbEltZyxcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIpIHtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVGh1bWJuYWlsSGVscGVycy5nZXRWaWRlb0R1cmF0aW9uKHBsYXllcik7XG4gICAgY29uc3QgcGFnZVhPZmZzZXQgPSBUaHVtYm5haWxIZWxwZXJzLmdldFNjcm9sbE9mZnNldCgpLng7XG4gICAgY29uc3QgcHJvZ3Jlc0JhclBvc2l0aW9uID0gcHJvZ3Jlc3NDb250cm9sLmVsKCkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBwcm9ncmVzQmFyUmlnaHRPZmZzZXQgPSAocHJvZ3Jlc0JhclBvc2l0aW9uLndpZHRoIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNCYXJQb3NpdGlvbi5yaWdodCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlWE9mZnNldDtcblxuICAgIGNvbnN0IHBhZ2VNb3VzZVBvc2l0aW9uWCA9IFRodW1ibmFpbEhlbHBlcnMuZ2V0UGFnZU1vdXNlUG9zaXRpb25YKGV2ZW50KTtcblxuICAgIGxldCBtb3VzZUxlZnRPZmZzZXQgPSBUaHVtYm5haWxIZWxwZXJzLmZpbmRNb3VzZUxlZnRPZmZzZXQocGFnZU1vdXNlUG9zaXRpb25YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250cm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCk7XG5cbiAgICBjb25zdCBtb3VzZVRpbWUgPSBUaHVtYm5haWxIZWxwZXJzLmdldE1vdXNlVmlkZW9UaW1lKG1vdXNlTGVmdE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uKTtcblxuICAgIGNvbnN0IGFjdGl2ZVRodW1ibmFpbCA9IFRodW1ibmFpbEhlbHBlcnMuZ2V0QWN0aXZlVGh1bWJuYWlsKHRodW1ibmFpbENsaXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlVGltZSk7XG5cbiAgICBUaHVtYm5haWxIZWxwZXJzLnVwZGF0ZVRodW1ibmFpbFRpbWUodGltZWxpbmVUaW1lLCBwcm9ncmVzc0NvbnRyb2wpO1xuXG4gICAgVGh1bWJuYWlsSGVscGVycy51cGRhdGVUaHVtYm5haWxTcmMoYWN0aXZlVGh1bWJuYWlsLCB0aHVtYm5haWxJbWcpO1xuXG4gICAgVGh1bWJuYWlsSGVscGVycy51cGRhdGVUaHVtYm5haWxTdHlsZShhY3RpdmVUaHVtYm5haWwsIHRodW1ibmFpbEltZyk7XG5cbiAgICBtb3VzZUxlZnRPZmZzZXQgPSBUaHVtYm5haWxIZWxwZXJzLmtlZXBUaHVtYm5haWxJbnNpZGVQbGF5ZXIodGh1bWJuYWlsSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsQ2xpcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUxlZnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzQmFyUmlnaHRPZmZzZXQpO1xuXG4gICAgVGh1bWJuYWlsSGVscGVycy51cGRhdGVUaHVtYm5haWxMZWZ0U3R5bGUobW91c2VMZWZ0T2Zmc2V0LCB0aHVtYm5haWxzSG9sZGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGFkYXRlT25Ib3Zlcihwcm9ncmVzc0NvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHNIb2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbENsaXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbEltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyKSB7XG5cbiAgICAvLyB1cGRhdGUgdGhlIHRodW1ibmFpbCB3aGlsZSBob3ZlcmluZ1xuICAgIHByb2dyZXNzQ29udHJvbC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICBUaHVtYm5haWxIZWxwZXJzLm1vdmVMaXN0ZW5lcihldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHNIb2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxDbGlwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbEltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcik7XG4gICAgfSk7XG4gICAgcHJvZ3Jlc3NDb250cm9sLm9uKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIFRodW1ibmFpbEhlbHBlcnMubW92ZUxpc3RlbmVyKGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250cm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsc0hvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbENsaXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsSW1nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoaWRlVGh1bWJuYWlsKHRodW1ibmFpbHNIb2xkZXIpIHtcbiAgICB0aHVtYm5haWxzSG9sZGVyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XG4gIH1cblxuICBzdGF0aWMgdXBhZGF0ZU9uSG92ZXJPdXQocHJvZ3Jlc3NDb250cm9sLCB0aHVtYm5haWxzSG9sZGVyLCBwbGF5ZXIpIHtcblxuICAgIC8vIG1vdmUgdGhlIHBsYWNlaG9sZGVyIG91dCBvZiB0aGUgd2F5IHdoZW4gbm90IGhvdmVyaW5nXG4gICAgcHJvZ3Jlc3NDb250cm9sLm9uKCdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgVGh1bWJuYWlsSGVscGVycy5oaWRlVGh1bWJuYWlsKHRodW1ibmFpbHNIb2xkZXIpO1xuICAgIH0pO1xuICAgIHByb2dyZXNzQ29udHJvbC5vbigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgIFRodW1ibmFpbEhlbHBlcnMuaGlkZVRodW1ibmFpbCh0aHVtYm5haWxzSG9sZGVyKTtcbiAgICB9KTtcbiAgICBwcm9ncmVzc0NvbnRyb2wub24oJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICBUaHVtYm5haWxIZWxwZXJzLmhpZGVUaHVtYm5haWwodGh1bWJuYWlsc0hvbGRlcik7XG4gICAgfSk7XG4gICAgcGxheWVyLm9uKCd1c2VyaW5hY3RpdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIFRodW1ibmFpbEhlbHBlcnMuaGlkZVRodW1ibmFpbCh0aHVtYm5haWxzSG9sZGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5jb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4vLyBDcm9zcy1jb21wYXRpYmlsaXR5IGZvciBWaWRlby5qcyA1IGFuZCA2LlxuY29uc3QgcmVnaXN0ZXJQbHVnaW4gPSB2aWRlb2pzLnJlZ2lzdGVyUGx1Z2luIHx8IHZpZGVvanMucGx1Z2luO1xuLy8gY29uc3QgZG9tID0gdmlkZW9qcy5kb20gfHwgdmlkZW9qcztcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIFRoaXMgaXMgYSBncmVhdCBwbGFjZSBmb3IgeW91ciBwbHVnaW4gdG8gaW5pdGlhbGl6ZSBpdHNlbGYuIFdoZW4gdGhpc1xuICogZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpdHMgRE9NIGFuZCBjaGlsZCBjb21wb25lbnRzXG4gKiBpbiBwbGFjZS5cbiAqXG4gKiBAZnVuY3Rpb24gb25QbGF5ZXJSZWFkeVxuICogQHBhcmFtICAgIHtQbGF5ZXJ9IHBsYXllclxuICogICAgICAgICAgIEEgVmlkZW8uanMgcGxheWVyLlxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICogICAgICAgICAgIEFuIG9iamVjdCBvZiBvcHRpb25zIGxlZnQgdG8gdGhlIHBsdWdpbiBhdXRob3IgdG8gZGVmaW5lLlxuICovXG5cbmNvbnN0IHByZXBhcmVUaHVtYm5haWxzQ2xpcHMgPSAodmlkZW9UaW1lLCBvcHRpb25zKSA9PiB7XG5cbiAgbGV0IGN1cnJlbnRUaW1lID0gMDtcbiAgbGV0IGN1cnJlbnRJdGVyYXRpb24gPSAwO1xuICBsZXQgdGh1bWJuYWlsT2Zmc2V0ID0gMDtcbiAgY29uc3Qgc3RlcFRpbWUgPSBvcHRpb25zLnN0ZXBUaW1lO1xuICBjb25zdCB0aHVtYm5haWxXaWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIGNvbnN0IHNwcml0ZVVSTCA9IG9wdGlvbnMuc3ByaXRlVXJsO1xuICBjb25zdCB0aHVtYm5haWxDbGlwcyA9IHtcbiAgICAwOiB7XG4gICAgICBzcmM6IHNwcml0ZVVSTCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGxlZnQ6ICh0aHVtYm5haWxXaWR0aCAvIDIgKiAtMSkgKyAncHgnLFxuICAgICAgICB3aWR0aDogKChNYXRoLmZsb29yKHZpZGVvVGltZSAvIHN0ZXBUaW1lKSArIDEpICogdGh1bWJuYWlsV2lkdGgpICsgJ3B4JyxcbiAgICAgICAgY2xpcDogJ3JlY3QoMCwnICsgb3B0aW9ucy53aWR0aCArICdweCwnICsgb3B0aW9ucy53aWR0aCArICdweCwgMCknXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdoaWxlIChjdXJyZW50VGltZSA8PSB2aWRlb1RpbWUpIHtcbiAgICBjdXJyZW50VGltZSArPSBzdGVwVGltZTtcbiAgICB0aHVtYm5haWxPZmZzZXQgPSArK2N1cnJlbnRJdGVyYXRpb24gKiB0aHVtYm5haWxXaWR0aDtcbiAgICB0aHVtYm5haWxDbGlwc1tjdXJyZW50VGltZV0gPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBsZWZ0OiAoKHRodW1ibmFpbFdpZHRoIC8gMiArIHRodW1ibmFpbE9mZnNldCkgKiAtMSkgKyAncHgnLFxuICAgICAgICBjbGlwOiAncmVjdCgwLCAnICsgKHRodW1ibmFpbFdpZHRoICsgdGh1bWJuYWlsT2Zmc2V0KSArICdweCwnICtcbiAgICAgICAgICAgICAgb3B0aW9ucy53aWR0aCArICdweCwgJyArIHRodW1ibmFpbE9mZnNldCArICdweCknXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdGh1bWJuYWlsQ2xpcHM7XG59O1xuXG5jb25zdCBpbml0aWFsaXplVGh1bWJuYWlscyA9ICh0aHVtYm5haWxzQ2xpcHMsIHBsYXllcikgPT4ge1xuXG4gIGNvbnN0IHRodW1ibmFpbENsaXBzID0gVGh1bWJuYWlsSGVscGVycy5jcmVhdGVUaHVtYm5haWxzKHt9LCBkZWZhdWx0cywgdGh1bWJuYWlsc0NsaXBzKTtcbiAgY29uc3QgcHJvZ3Jlc3NDb250cm9sID0gcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sO1xuICBjb25zdCB0aHVtYm5haWxJbWcgPSBUaHVtYm5haWxIZWxwZXJzLmNyZWF0ZVRodW1ibmFpbEltZyh0aHVtYm5haWxDbGlwcyk7XG4gIGNvbnN0IHRpbWVsaW5lVGltZSA9IFRodW1ibmFpbEhlbHBlcnMuY3JlYXRlVGh1bWJuYWlsVGltZSgpO1xuICBjb25zdCB0aHVtYm5haWxBcnJvd0Rvd24gPSBUaHVtYm5haWxIZWxwZXJzLmNyZWF0ZVRodW1ibmFpbEFycm93RG93bigpO1xuICBsZXQgdGh1bWJuYWlzbEhvbGRlciA9IFRodW1ibmFpbEhlbHBlcnMuY3JlYXRlVGh1bWJuYWlzbEhvbGRlcigpO1xuXG4gIHRodW1ibmFpc2xIb2xkZXIgPSBUaHVtYm5haWxIZWxwZXJzLm1lcmdlVGh1bWJuYWlsRWxlbWVudHModGh1bWJuYWlzbEhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbEFycm93RG93bik7XG4gIFRodW1ibmFpbEhlbHBlcnMuaGlkZVBsYXllck9uSG92ZXJUaW1lKHByb2dyZXNzQ29udHJvbCk7XG5cbiAgaWYgKGdsb2JhbC53aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2FuZHJvaWQnKSAhPT0gLTEpIHtcbiAgICBUaHVtYm5haWxIZWxwZXJzLnN1cG9ydEFuZHJvaWRFdmVudHMoKTtcbiAgfVxuXG4gIFRodW1ibmFpbEhlbHBlcnMuY3JlYXRlVGh1bWJuYWlscyh0aHVtYm5haWxJbWcuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxDbGlwc1snMCddLnN0eWxlKTtcblxuICBUaHVtYm5haWxIZWxwZXJzLmNlbnRlclRodW1ibmFpbE92ZXJDdXJzb3IodGh1bWJuYWlsSW1nKTtcblxuICBUaHVtYm5haWxIZWxwZXJzLmFkZFRodW1ibmFpbFRvUGxheWVyKHByb2dyZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haXNsSG9sZGVyKTtcblxuICBUaHVtYm5haWxIZWxwZXJzLnVwYWRhdGVPbkhvdmVyKHByb2dyZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haXNsSG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbENsaXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyKTtcblxuICBUaHVtYm5haWxIZWxwZXJzLnVwYWRhdGVPbkhvdmVyT3V0KHByb2dyZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haXNsSG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcik7XG59O1xuXG5jb25zdCBvblBsYXllclJlYWR5ID0gKHBsYXllciwgb3B0aW9ucykgPT4ge1xuICBwbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCgpID0+IHtcbiAgICBjb25zdCB0aHVtYm5haWxzQ2xpcHMgPSBwcmVwYXJlVGh1bWJuYWlsc0NsaXBzKHBsYXllci5kdXJhdGlvbigpLCBvcHRpb25zKTtcblxuICAgIGluaXRpYWxpemVUaHVtYm5haWxzKHRodW1ibmFpbHNDbGlwcywgcGxheWVyKTtcbiAgfSkpO1xufTtcbi8qKlxuICogQSB2aWRlby5qcyBwbHVnaW4uXG4gKlxuICogSW4gdGhlIHBsdWdpbiBmdW5jdGlvbiwgdGhlIHZhbHVlIG9mIGB0aGlzYCBpcyBhIHZpZGVvLmpzIGBQbGF5ZXJgXG4gKiBpbnN0YW5jZS4gWW91IGNhbm5vdCByZWx5IG9uIHRoZSBwbGF5ZXIgYmVpbmcgaW4gYSBcInJlYWR5XCIgc3RhdGUgaGVyZSxcbiAqIGRlcGVuZGluZyBvbiBob3cgdGhlIHBsdWdpbiBpcyBpbnZva2VkLiBUaGlzIG1heSBvciBtYXkgbm90IGJlIGltcG9ydGFudFxuICogdG8geW91OyBpZiBub3QsIHJlbW92ZSB0aGUgd2FpdCBmb3IgXCJyZWFkeVwiIVxuICpcbiAqIEBmdW5jdGlvbiB0aHVtYm5haWxzXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IHRodW1ibmFpbHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMucmVhZHkoKCkgPT4ge1xuICAgIG9uUGxheWVyUmVhZHkodGhpcywgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpKTtcbiAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG5yZWdpc3RlclBsdWdpbigndGh1bWJuYWlscycsIHRodW1ibmFpbHMpO1xuXG4vLyBJbmNsdWRlIHRoZSB2ZXJzaW9uIG51bWJlci5cbnRodW1ibmFpbHMuVkVSU0lPTiA9ICdfX1ZFUlNJT05fXyc7XG5cbm1vZHVsZS5leHBvcnRzID0gdGh1bWJuYWlscztcbiJdfQ==
