const dayJs = require('dayjs')

function day (date) {
    const today = dayJs()

    const birthDay = dayJs(date)

    const age = today.diff(birthDay, 'year')

    const nextBirthDay = birthDay.add(age + 1, 'year')

    const dayNextBirthDay = nextBirthDay.diff(today, "day") + 1

    console.log(`Idade: ${age}`)
    console.log(`Proxima data de aniversario: ${nextBirthDay.format("DD/MM/YYYY")}`)
    console.log(`Dias faltantes para o proximo aniversario: ${dayNextBirthDay} Dias`)          
                
}

day("2001-12-09")
