
const UpperCaseFirstLetterOfWord = (word) => {
    let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    console.log(newWord)
}

const sayHello = (name) => {
    return name.toLowerCase() === 'mark'
        ? console.log(`Hi, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`)
        : console.log(`Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`)
}

const filterString = (stringArr, maxArrLength) => {
    let result = []
    stringArr.forEach(el=>{el.length <= maxArrLength && result.push(el)})
    console.log(result)
}


UpperCaseFirstLetterOfWord('пиТеР')
UpperCaseFirstLetterOfWord('javaScript')

sayHello('Mark')
sayHello('Viktor')
sayHello('Pavel')
sayHello('mark')

filterString(['I love JS','some very long string','hell'],9)
filterString(['a','ab','abc'],2)