let arr = [
    ['Hello', 'world'],
    ['Hello', 'world', '0000'],
    ['Brad', 'came', 'to', 'dinner', 'with', 'us','us', 'to'],
    ['He', 'loves', 'tacos']
]

const formattingConditions = ['LEFT', 'LEFT', 'RIGHT', 'LEFT']

const limitChar = 16

function textForPublication(arrToText, formCond, limCh) {
    txt = []

    for (let i = 0; i < arrToText.length; i++) {
        let str = arrToText[i].join(' ')

        if (str.length <= limCh) {
            formCond[i] === 'LEFT'
                ? str = `*${str}${' '.repeat(limCh - str.length)}*`
                : formCond[i] === 'RIGHT'
                    ? str = `*${' '.repeat(limCh - str.length)}${str}*`
                    : null

            txt.push(str)
        } else {
            str = ''
            for (let j = 0; j < arrToText[i].length; j++) {
                (str.length + arrToText[i][j].length) < limCh
                    ? str += arrToText[i][j] + ' '
                    : (
                        (formCond[i] === 'LEFT'
                            ? str = `*${str}${' '.repeat(limCh - str.length)}*`
                            : formCond[i] === 'RIGHT'
                                ? str = `*${' '.repeat(limCh - str.length)}${str}*`
                                : null),
                        txt.push(str), str = '', j--
                    )
            }
            formCond[i] === 'LEFT'
                ? str = `*${str}${' '.repeat(limCh - str.length)}*`
                : formCond[i] === 'RIGHT'
                    ? str = `*${' '.repeat(limCh - str.length)}${str}*`
                    : null

            txt.push(str)
        }
    }

    txt.unshift('*'.repeat(limCh + 2))
    txt.push('*'.repeat(limCh + 2))

    return txt
}

console.log(textForPublication(arr, formattingConditions, limitChar))