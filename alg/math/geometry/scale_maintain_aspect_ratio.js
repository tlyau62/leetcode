/**
 * scale a image while maintaining its aspect ratio
 *
 * @param {Number} baseW the original image width
 * @param {Number} baseH the original image height
 * @param {Number} scaledW desired width
 * @param {Number} scaledH desired height
 * @returns {Object} scaled dimension with the same aspect ratio
 */
function aspectRatio(baseW, baseH, scaledW, scaledH) {
    const ratio = baseW / baseH;
    const maxW = scaledH * ratio;
    const maxH = scaledW / ratio;

    return {
        width: scaledW > maxW ? maxW : scaledW,
        height: scaledH > maxH ? maxH : scaledH
    };
}