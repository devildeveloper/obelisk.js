/*
 * PixelView
 */

(function (obelisk) {
    "use strict";

    var PixelView = function (canvas, point) {
        this.initialize(canvas, point);
    };
    var p = PixelView.prototype;

    // public properties
    p.context = null
    p.point = null;

    // constructor
    p.initialize = function (canvas, point) {
        if (!canvas) {
            throw new Error("Canvas is not defined");
        }

        this.context = canvas.getContext('2d');
        this.point = point || new obelisk.Point(0, 0);

        return this;
    };

    // public methods
    p.renderObject = function (primitive, point3D) {
        var po = new obelisk.PixelObject(primitive, point3D);
        this.context.drawImage(po.canvas,
            this.point.x + po.x,
            this.point.y + po.y
        );
    };

    p.toString = function () {
        return "[PixelView]";
    };

    obelisk.PixelView = PixelView;
}(obelisk));