/**
 * calculate the new bounding box for a rotated image
 * if a rotated image is drawn on the original bounding box, clipping will occurs
 * 
 * see explaination for rotating with angle in quadrant 0 in rotate_bounding_box.png
 * 
 * for quadrant 1, 2, 3: use the same theta (0 - 90 degree) as in quadrant 0, 
 * add back the offset angle in final step
 * 
 * e.g. in quadrant 1, add 90 degree in final step;
 *      in quadrant 2, add 180 degree in final step
 * 
 * trigo formular is useful
 * - http://silverwind1982.pixnet.net/blog/post/32859552-%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B8-%28trigonometry%29
 * 
 * @param {*} width the width of the image (rectangle)
 * @param {*} height the height of the image (rectangle)
 * @param {*} radian the rotate angle in radian
 */
function rotate_bbox(width, height, radian) {
    if (radian >= 2 * Math.PI) {
        console.error('radian must be in range [0, 2 * PI)');
    }

    const quadrant = ~~(radian / (Math.PI / 2));
    const rotationMatrix = [[1, 1], [-1, 1], [-1, -1], [1, -1]][quadrant];

    return {
        width: rotationMatrix[0] * width * Math.cos(radian) + rotationMatrix[1] * height * Math.sin(radian),
        height: rotationMatrix[0] * height * Math.cos(radian) + rotationMatrix[1] * width * Math.sin(radian)
    };
}