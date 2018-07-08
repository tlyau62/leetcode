/**
 * dfs
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {

    const oldColor = image[sr][sc];
    dfs(sr, sc);
    return image;

    function dfs(i, j) {

        if (i < 0 || j < 0 || i >= image.length || j >= image[i].length
            || image[i][j] !== oldColor) {
            return;
        }

        // mark visited
        image[i][j] = -1;

        // search in 4 dir
        dfs(i - 1, j);
        dfs(i, j - 1);
        dfs(i + 1, j);
        dfs(i, j + 1);

        // update new Color
        image[i][j] = newColor;
    }
};