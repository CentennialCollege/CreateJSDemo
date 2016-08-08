var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        /**
         * Creates an instance of Button.
         *
         * @param {string} imageSource
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Button(imageSource, x, y, isCentered) {
            _super.call(this, imageSource);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this.mouseOver, this);
            this.on("mouseout", this.mouseOut, this);
        }
        Button.prototype.mouseOver = function (event) {
            this.alpha = 0.8;
        };
        Button.prototype.mouseOut = function (event) {
            this.alpha = 1;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map