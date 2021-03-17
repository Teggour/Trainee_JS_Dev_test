const matrix = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
]

function checkMatrix(mtrx) {
    let resArr = []

    for (let k = 0; k < mtrx[0].length - 2; k++) {
        let arr = []
        for (let i = 0; i < 3; i++) {
            for (let j = k; j < k + 3; j++) {
                arr.push(mtrx[i][j])
            }
        }
        resArr.push(arr.sort((a, b) => a - b).join() == [1, 2, 3, 4, 5, 6, 7, 8, 9].join())
    }

    return resArr
}

console.log(checkMatrix(matrix))