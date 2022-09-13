"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addFormat(format) {
        if (!this.formats.includes(format)) {
            this.formats.push(format);
        }
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height,
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addFormat(ImageFormat.Jpeg)
    .addFormat(ImageFormat.Png)
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());
