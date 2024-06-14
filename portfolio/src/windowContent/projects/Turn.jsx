import React, { useEffect, useRef } from 'react';

const FlipBookComponent = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const $ = require('jquery');
    
    (function (f) {
      function I(a, b, c) {
        if (!c[0] || "object" == typeof c[0]) return b.init.apply(a, c);
        if (b[c[0]]) return b[c[0]].apply(a, Array.prototype.slice.call(c, 1));
        throw p(c[0] + " is not a method or property");
      }
      function l(a, b, c, d) {
        return {
          css: {
            position: "absolute",
            top: a,
            left: b,
            overflow: d || "hidden",
            zIndex: c || "auto"
          }
        };
      }
      function R(a, b, c, d, e) {
        var h = 1 - e,
          f = h * h * h,
          g = e * e * e;
        return j(
          Math.round(f * a.x + 3 * e * h * h * b.x + 3 * e * e * h * c.x + g * d.x),
          Math.round(f * a.y + 3 * e * h * h * b.y + 3 * e * e * h * c.y + g * d.y)
        );
      }
      function j(a, b) {
        return { x: a, y: b };
      }
      function E(a, b, c) {
        return y && c
          ? " translate3d(" + a + "px," + b + "px, 0px) "
          : " translate(" + a + "px, " + b + "px) ";
      }
      function F(a) {
        return " rotate(" + a + "deg) ";
      }
      function n(a, b) {
        return Object.prototype.hasOwnProperty.call(b, a);
      }
      function S() {
        for (
          var a = ["Moz", "Webkit", "Khtml", "O", "ms"], b = a.length, c = "";
          b--;

        )
          a[b] + "Transform" in document.body.style &&
            (c = "-" + a[b].toLowerCase() + "-");
        return c;
      }
      function O(a, b, c, d, e) {
        var h,
          f = [];
        if ("-webkit-" == v) {
          for (h = 0; h < e; h++)
            f.push("color-stop(" + d[h][0] + ", " + d[h][1] + ")");
          a.css({
            "background-image":
              "-webkit-gradient(linear, " +
              b.x +
              "% " +
              b.y +
              "%," +
              c.x +
              "% " +
              c.y +
              "%, " +
              f.join(",") +
              " )"
          });
        } else {
          var b = { x: (b.x / 100) * a.width(), y: (b.y / 100) * a.height() },
            c = { x: (c.x / 100) * a.width(), y: (c.y / 100) * a.height() },
            g = c.x - b.x;
          h = c.y - b.y;
          var i = Math.atan2(h, g),
            w = i - Math.PI / 2,
            w =
              Math.abs(a.width() * Math.sin(w)) +
              Math.abs(a.height() * Math.cos(w)),
            g = Math.sqrt(h * h + g * g),
            c = j(c.x < b.x ? a.width() : 0, c.y < b.y ? a.height() : 0),
            k = Math.tan(i);
          h = -1 / k;
          k = (h * c.x - c.y - k * b.x + b.y) / (h - k);
          c = h * k - h * c.x + c.y;
          b = Math.sqrt(Math.pow(k - b.x, 2) + Math.pow(c - b.y, 2));
          for (h = 0; h < e; h++)
            f.push(" " + d[h][1] + " " + (100 * (b + g * d[h][0])) / w + "%");
          a.css({
            "background-image":
              v + "linear-gradient(" + -i + "rad," + f.join(",") + ")"
          });
        }
      }
      function s(a, b, c) {
        a = f.Event(a);
        b.trigger(a, c);
        return a.isDefaultPrevented()
          ? "prevented"
          : a.isPropagationStopped()
          ? "stopped"
          : "";
      }
      function p(a) {
        function b(a) {
          this.name = "TurnJsError";
          this.message = a;
        }
        b.prototype = Error();
        b.prototype.constructor = b;
        return new b(a);
      }
      function C(a) {
        var b = { top: 0, left: 0 };
        do (b.left += a.offsetLeft), (b.top += a.offsetTop);
        while ((a = a.offsetParent));
        return b;
      }
      var y,
        T,
        v = "",
        J = Math.PI,
        K = J / 2,
        t = "ontouchstart" in window,
        q = t
          ? {
              down: "touchstart",
              move: "touchmove",
              up: "touchend",
              over: "touchstart",
              out: "touchend"
            }
          : {
              down: "mousedown",
              move: "mousemove",
              up: "mouseup",
              over: "mouseover",
              out: "mouseout"
            },
        o = {
          backward: ["bl", "tl"],
          forward: ["br", "tr"],
          all: "tl bl tr br l r".split(" ")
        },
        U = ["single", "double"],
        V = ["ltr", "rtl"],
        W = {
          acceleration: !0,
          display: "double",
          duration: 600,
          page: 1,
          gradients: !0,
          turnCorners: "bl,br",
          when: null
        },
        X = { cornerSize: 100 },
        g = {
          init: function (a) {
            y =
              "WebKitCSSMatrix" in window ||
              "MozPerspective" in document.body.style;
            var b;
            T = (b = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))
              ? 534.3 < parseFloat(b[1])
              : !0;
            v = S();
            var c;
            b = 0;
            var d = this.data(),
              e = this.children(),
              a = f.extend(
                {
                  width: this.width(),
                  height: this.height(),
                  direction: this.attr("dir") || this.css("direction") || "ltr"
                },
                W,
                a
              );
            d.opts = a;
            d.pageObjs = {};
            d.pages = {};
            d.pageWrap = {};
            d.pageZoom = {};
            d.pagePlace = {};
            d.pageMv = [];
            d.zoom = 1;
            d.totalPages = a.pages || 0;
            d.eventHandlers = {
              touchStart: f.proxy(g._touchStart, this),
              touchMove: f.proxy(g._touchMove, this),
              touchEnd: f.proxy(g._touchEnd, this),
              start: f.proxy(g._eventStart, this)
            };
            if (a.when) for (c in a.when) n(c, a.when) && this.bind(c, a.when[c]);
            this.css({ position: "relative", width: a.width, height: a.height });
            this.turn("display", a.display);
            "" !== a.direction && this.turn("direction", a.direction);
            y && !t && a.acceleration && this.transform(E(0, 0, !0));
            for (c = 0; c < e.length; c++)
              "1" != f(e[c]).attr("ignore") && this.turn("addPage", e[c], ++b);
            f(this)
              .bind(q.down, d.eventHandlers.touchStart)
              .bind("end", g._eventEnd)
              .bind("pressed", g._eventPressed)
              .bind("released", g._eventReleased)
              .bind("flip", g._flip);
            f(this).parent().bind("start", d.eventHandlers.start);
            f(document)
              .bind(q.move, d.eventHandlers.touchMove)
              .bind(q.up, d.eventHandlers.touchEnd);
            this.turn("page", a.page);
            d.done = !0;
            return this;
          },
          addPage: function (a, b) {
            var c = this.data(),
              d = f(a),
              e = "double" == c.display;
            if (
              b &&
              ("" === c.pagePlace[b] ||
                c.pageObjs[b] ||
                ((c.pagePlace[b] = b),
                (c.pageObjs[b] = d),
                d.attr("page", b),
                this.turn("stop"),
                e && this.turn("options", "direction")
                  ? d.css({ float: "right" })
                  : e && d.css({ float: "left" }),
                n(b, c.pageWrap)
                  ? c.pageObjs[b].appendTo(c.pageWrap[b])
                  : ((c.pageWrap[b] = f("<div/>", l(0, 0, 2)).appendTo(this)),
                    c.pageObjs[b].appendTo(c.pageWrap[b])),
                e &&
                  ((c.pagePlace[g._viewPage(b)[0]] = b),
                  (c.pagePlace[g._viewPage(b)[1]] = b)),
                d.css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }),
                c.done && s("added", this, [b]))),
              c.done)
            )
              this.turn("update");
            else {
              e = {};
              for (var h in c.pageWrap)
                n(h, c.pageWrap) &&
                  (e[h] = c.pageWrap[h].css("z-index"));
              c.pageWrap[b] &&
                (c.pageWrap[b].remove(),
                delete c.pageWrap[b],
                this.turn("addPage", a, b),
                f(c.pageObjs[b]).hasClass("even")
                  ? f(c.pageObjs[b]).removeClass("even")
                  : f(c.pageObjs[b]).addClass("even"),
                c.pageWrap[b].css(e[b]));
            }
            return this;
          },
          next: function () {
            return this.turn("page", Math.min(this.data().totalPages, this.data().page + 1));
          },
          previous: function () {
            return this.turn("page", Math.max(1, this.data().page - 1));
          },
          page: function (a) {
            var b = this.data().page;
            if (1 > a || a > this.data().totalPages) return this;
            if (this.data().page != a) {
              var c = this.data().pageObjs[a],
                d = this.data().pageWrap[a];
              if (c && d) {
                var e = this.turn("view", a);
                this.turn("stop");
                this.turn("pages", a);
                for (var f = 0; f < e.length; f++) this.turn("peel", e[f]);
                this.turn("turnPage", b, a);
                s("turning", this, [a, e]);
              }
            }
            return this;
          },
          peel: function (a) {
            this.data().pageObjs[a] &&
              (this.data().pageObjs[a].css({
                left: this.turn("options", "direction")
                  ? "left"
                  : "right",
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0
              }),
              this.turn("view", a));
            return this;
          },
          view: function (a) {
            var b = this.data();
            if (!b.pageObjs[a] || b.pagePlace[a]) return this;
            var c = g._viewPage(a);
            if (b.pageObjs[c[0]] && b.pageObjs[c[1]]) return this.turn("pages", a), this;
            var d = a;
            b.pageObjs[d] &&
              b.pageWrap[d] &&
              (b.pageWrap[d].remove(),
              b.pageWrap[d].detach(),
              b.pageWrap[d].removeClass("even"),
              this.turn("addPage", b.pageObjs[d], d),
              b.pageWrap[d].css({ display: "" }),
              b.pageWrap[d].appendTo(this),
              b.pagePlace[d] == d && (b.pagePlace[d] = a));
            return this;
          },
          transform: function (a) {
            this.css({ transform: a });
            return this;
          }
        };
      f.fn.turn = function (a) {
        return I(this, g, arguments);
      };
      f.fn.transform = function (a, b) {
        var c = {};
        c[v + "transform"] = a;
        b && ((c[v + "transform-origin"] = b[0] + "% " + b[1] + "%"));
        this.css(c);
        return this;
      };
    })(jQuery);

    const bookElement = $(bookRef.current);

    bookElement.turn({
      width: 400,
      height: 300,
      autoCenter: true,
    });

    return () => {
      bookElement.turn('destroy');
    };
  }, []);

  return (
    <div ref={bookRef} style={{ width: '400px', height: '300px' }}>
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
      <div>Page 4</div>
    </div>
  );
};

export default FlipBookComponent;
