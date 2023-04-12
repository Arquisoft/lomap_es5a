import Compressor from "compressorjs";

const DEFAULT_IMAGE_COMPRESSION_QUALITY = 0.6;
const DEFAULT_IMAGE_COMPRESSION_WIDTH = 350;
const DEFAULT_IMAGE_COMPRESSION_HEIGHT = 240;

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
  // callback: (result: File | Blob) => void,
  width = DEFAULT_IMAGE_COMPRESSION_WIDTH,
  height = DEFAULT_IMAGE_COMPRESSION_HEIGHT,
  quality = DEFAULT_IMAGE_COMPRESSION_QUALITY
): Promise<File> => {
  //!img?.type.includes('image')
  if (!img) {
    return Promise.reject("No image provided");
  }

  return new Promise<File>((resolve, reject) => {
    new Compressor(img, {
      quality,
      width,
      height,
      resize: "cover",
      success(result) {
        resolve(result as File);
      },
      error(err) {
        console.error(err.message);
        reject(err);
      },
    });
  }).catch((err) => {
    console.error(err);
    return Promise.reject(err);
  });
};

/**
 *
 * @param {*} file File to check.
 * @returns true if the file is an image, false otherwise.
 */
const checkIsImageFile = (file: File) => {
  return file.type.includes("image");
};

export {
  compressImage,
  checkIsImageFile,
  DEFAULT_IMAGE_COMPRESSION_WIDTH,
  DEFAULT_IMAGE_COMPRESSION_HEIGHT,
  DEFAULT_IMAGE_COMPRESSION_QUALITY,
};
