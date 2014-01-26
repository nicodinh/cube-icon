// Generated by CoffeeScript 1.6.3
(function() {
  var CubeIcon, box, dirt, grass_side, grass_top, stone;

  module.exports = function(opts) {
    return new CubeIcon;
  };

  CubeIcon = (function() {
    function CubeIcon(opts) {
      var ch, cw, dz, face, faceName, faceTransforms, i, rotateX, rotateY, s, scale, showFaces, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;
      if (opts == null) {
        opts = {};
      }
      showFaces = (_ref = opts.showFaces) != null ? _ref : ['left', 'top', 'front'];
      if (opts.side != null) {
        opts.left = opts.front = opts.side;
      }
      rotateX = (_ref1 = opts.rotateX) != null ? _ref1 : -30;
      rotateY = (_ref2 = opts.rotateY) != null ? _ref2 : 45;
      scale = (_ref3 = opts.scale) != null ? _ref3 : 10;
      s = (_ref4 = opts.size) != null ? _ref4 : 16;
      this.container = document.createElement('div');
      ch = Math.ceil(s * (1 + Math.cos(rotateY * Math.PI / 180)));
      cw = Math.ceil(s * (1 - Math.sin(rotateX * Math.PI / 180)));
      this.container.setAttribute('style', "-webkit-transform: rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateX(" + (cw - s) + "px) translateY(" + (ch - s) + "px);-webkit-transform-origin: 0 0;position: relative;-webkit-transform-style: preserve-3d;width: " + cw + "px;height: " + ch + "px;");
      dz = s / 2;
      faceTransforms = {
        front: "rotateY(   0deg ) translateZ( " + dz + "px )",
        back: "rotateX( 180deg ) translateZ( " + dz + "px )",
        right: "rotateY(  90deg ) translateZ( " + dz + "px )",
        left: "rotateY( -90deg ) translateZ( " + dz + "px )",
        top: "rotateX(  90deg ) translateZ( " + dz + "px )",
        bottom: "rotateX( -90deg ) translateZ( " + dz + "px )"
      };
      for (i = _i = 0, _len = showFaces.length; _i < _len; i = ++_i) {
        faceName = showFaces[i];
        face = document.createElement('div');
        face.setAttribute('style', "-webkit-transform-style: preserve-3d;-webkit-transform: " + faceTransforms[faceName] + ";position: absolute;border: 0.5px solid black;width: " + s + "px;height: " + s + "px;");
        face.style.backgroundImage = 'url(' + opts[faceName] + ')';
        face.textContent = i;
        this.container.style.webkitTransition = '-webkit-transform 1s';
        this.container.appendChild(face);
      }
    }

    return CubeIcon;

  })();

  dirt = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAb0lEQVQ4y2OYmWb8/84U7/8gGhfGJg8TY8AlQchQGGYgRhGyYegGM5BiK7o8iM9Air+xegGbqcQahuICYm1EV8tArI24LGAgN/5R0gEl4cBAbujDA5EYDQQTErGKceYFcqMQwwXEBCZRYUDIIGQ+AHmcSKuZbPIVAAAAAElFTkSuQmCC';

  stone = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVQ4y+1SsQ0AMAjidz/gYTu1MU2QprODE6CggmSqiohTCkMldAKF49fBxlGJt1A1kw66aXIHjuCi4DWvigN3JucC8wfzB2QuoGWkP++xVxEAAAAASUVORK5CYII=';

  grass_top = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVQ4y61TwREAIAiy/cdyGqao3qWIXQ8flgGimfmYhh1OAuQsvahAPQOoFCACUFkR5K2+wxbQMMyZApXxrJUZ8TIFBoRoCl8UdL2QHpSLpBanf+F1hJcCNP2AugckXwA2yZhbyqZNAAAAAElFTkSuQmCC';

  grass_side = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdElEQVQ4y2NgOMz4n+ElEB/Gg1/iEcMpQchQGJ6ZZvyfEL4zxRsrG4QZkAXRJfEZBOMzEKsYF2bAZiqxhqG4gFgb0dUyEGsjLgsYSAk0bAHOgCt0yXYBqWHBQIwGggmJWMXY1DFQEoUYLiAmMIkKA0IGIfMBkw04/LuclggAAAAASUVORK5CYII=';

  box = document.createElement('div');

  box.setAttribute('style', 'border: 1px solid black;');

  document.body.appendChild(box);

  box.appendChild(new CubeIcon({
    side: grass_side,
    top: grass_top
  }).container);

  box.appendChild(new CubeIcon({
    left: dirt,
    front: stone,
    top: grass_top
  }).container);

}).call(this);
