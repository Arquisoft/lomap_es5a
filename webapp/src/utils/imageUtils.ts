import Compressor from "compressorjs";

const DEFAULT_IMAGE_COMPRESSION_QUALITY: number = 0.6;
const DEFAULT_IMAGE_COMPRESSION_WIDTH: number = 640;
const DEFAULT_IMAGE_COMPRESSION_HEIGHT: number = 640;

/**
 * Compress an image for web performance.
 *
 * @param {*} img Image file.
 * @param {*} quality Output quality, {@link DEFAULT_IMAGE_COMPRESSION_QUALITY} by default.
 * @param {*} width Output width, {@link DEFAULT_IMAGE_COMPRESSION_WIDTH} by default.
 * @param {*} height Output height, {@link DEFAULT_IMAGE_COMPRESSION_HEIGHT} by default.
 * @returns image optimized.
 */
const compressImage = (
  img: File,
  callback: (result: File | Blob) => void,
  width = DEFAULT_IMAGE_COMPRESSION_WIDTH,
  height = DEFAULT_IMAGE_COMPRESSION_HEIGHT,
  quality = DEFAULT_IMAGE_COMPRESSION_QUALITY,
) => {
  //!img?.type.includes('image')
  if (!img) {
    return;
  }

  try {
    new Compressor(img, {
      quality,
      width,
      height,
      resize: "cover",
      success(result) {
        callback(result);
      },
      error(err) {
        console.error(err.message);
      },
    });
  } catch (error) {
    console.error(
      `An unexpected error ocurred proccessing the image. ${error}`
    );
  }
};

/**
 *
 * @param {*} file File to check.
 * @returns true if the file is an image, false otherwise.
 */
const checkIsImageFile = (file: File) => {
  return file.type.includes("image");
};

export { compressImage, checkIsImageFile };
