enum ImageFormat {
  Png = "png",
  Jpeg = "jpeg",
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];

  addFormat(format: ImageFormat) {
    if (!this.formats.includes(format)) {
      this.formats.push(format);
    }
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];
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

console.log(
  new ImageBuilder()
    .addFormat(ImageFormat.Jpeg)
    .addFormat(ImageFormat.Png)
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
);
