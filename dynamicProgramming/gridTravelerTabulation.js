// Say that you are a traveler on a 2D grid.You begin in the
// top-left corner and your goal is to travel to the bottom-right
// corner . You may only move down or right

// how many ways can done this travel on grid with dimensions m * n


const gridTraveler = (m, n) => {
    // O (mn) time   
    // O (mn) space

    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j]
            if (j + 1 <= n) table[i][j] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n]// Final number
}

console.log(gridTraveler(2, 3))