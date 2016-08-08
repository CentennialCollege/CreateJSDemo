module objects {
    export class Button extends createjs.Bitmap {
        /**
         * Creates an instance of Button.
         * 
         * @param {string} imageSource
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(imageSource:string,
        x: number, y: number, isCentered: boolean) {
            super(imageSource)

            if(isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this.mouseOver, this);
            this.on("mouseout", this.mouseOut, this);
        }

        private mouseOver(event:createjs.MouseEvent):void {
            this.alpha = 0.8;
        }
        
        private mouseOut(event:createjs.MouseEvent):void {
            this.alpha = 1;
        }

    }
}