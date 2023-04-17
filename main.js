const fs = require('fs');

// read from stdin and create a 2D array from the text file
const data = fs.readFileSync(process.stdin.fd, 'utf-8');
const map = data.replace(/\n$/, "").split('\n').map(row => row.split(''));

function getMaxIslandArea(map) {
    const maxRow = map.length;
    const maxCol = map[0].length;

    function dfs(r, c) {
        // base case: when row or column is out of bound, cell has water, or cell has been visited
        if (r < 0 || r === maxRow || c < 0 || c === maxCol || map[r][c] === '~' || map[r][c] === '*') {
            return 0;
        }

        // throw an error for invalid map
        if (!['~', '^', '*'].includes(map[r][c])) {
            process.stdout.write(`The map has invalid characters or is not a rectangle:\n${data}`);
            process.exit(1);
        }

        // mark cell as visited, then do depth-first search in all 4 directions
        map[r][c] = '*';
        return 1 + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1);
    }

    // traverse through every cell and update the max area
    let maxArea = 0;
    for (let r = 0; r < maxRow; r += 1) {
        for (let c = 0; c < maxCol; c += 1) {
            maxArea = Math.max(maxArea, dfs(r, c));
        }
    }
    return maxArea;
}

process.stdout.write(getMaxIslandArea(map));
process.exit();
