const arrForCheck = [1, 3, 5, 4, 5, 7]

function checkArr(check) {
    let arrResult = []
    for (let i = 1; i < check.length - 1; i++) {
        check[i] > check[i - 1] && check[i] > check[i + 1] || check[i] < check[i - 1] && check[i] < check[i + 1]
            ? arrResult.push(1)
            : arrResult.push(0)
    }

    return arrResult
}

arrForCheck.length > 2
    ? console.log(checkArr(arrForCheck))
    : console.log('Min array length - 3!')
