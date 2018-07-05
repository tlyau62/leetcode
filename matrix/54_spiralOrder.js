var spiralOrder = function (matrix) {
    
    if (matrix.length === 0) {
        return [];
    }
    
    const res = [], total = matrix.length * matrix[0].length;
    let dir, x, y, max_x, max_y, min_x, min_y, total_count;

    dir = x = y = min_x = min_y = total_count = 0;
    max_x = matrix.length - 1;
    max_y = matrix[0].length - 1;

    while (total_count < total) {
        if (matrix[x][y] !== null) {
            // save cell
            res.push(matrix[x][y]);
            matrix[x][y] = null;
            total_count++;

            // go to next cell
            if (dir === 0) {
                y = y < max_y ? y + 1 : y;
            } else if (dir === 1) {
                x = x < max_x ? x + 1 : x;
            } else if (dir === 2) {
                y = y > min_y ? y - 1 : y;
            } else if (dir === 3) {
                x = x > min_x ? x - 1 : x;
            }
        } else {
            // not moving -> dir needs to be changed
            if (dir === 0) {
                x++;
                min_x++;
            } else if (dir === 1) {
                y--
                max_y--;
            } else if (dir === 2) {
                x--
                max_x--;
            } else if (dir === 3) {
                y++;
                min_y++;
            }
            dir = (dir + 1) % 4;
        }
    }

    return res;
};