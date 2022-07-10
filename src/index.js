module.exports = function toReadable (x) {
let result
const digit = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven', 
      12: 'twelve', 
      13: 'thirteen',
      15: 'fifteen', 
      18: 'eighteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty', 
      50: 'fifty',
      80: 'eighty'
    }

    const numberString = x.toString()
    const numberOfDigits = numberString.length
    
    function getUnitNumber (n, array) {
      for (let key in array) {
        if (key === n.toString()) {
          return array[key]}
      }
    }
    
    function getDozensNumber (n, array) {
      for (let key in array) {
        if (key === (n%10).toString())
          return `${array[key]}teen`
        }
    }
    
    function getTyNumber (n, array) {
      for (let key in array) {
        if (key === ((Math.trunc(n/10)).toString()))
        return `${array[key]}ty`
      } }
    
    function numberTwoDigit (n, array) {      
      if (n >= 10 && n <= 13 || n === 15 || n === 18 || n === 20 || n === 30 || n === 40 || n === 50 || n === 80){
        return getUnitNumber(n, array)
      }
      else if (n < 20) {
        return getDozensNumber(n, array)
      }
    
      else {
        if (n >= 20 && n < 60 || n > 80 && n < 90) {
          return  getUnitNumber(n - n%10, array) + ' ' + getUnitNumber(n%10, array)
      } else if (n % 10 === 0) {
            return getTyNumber(n, array)
      } else {
        return getTyNumber(n, array)+ ' ' + getUnitNumber(n%10, array)
      }
      }
      }
          
    switch(numberOfDigits) {
      case 1:
       result = getUnitNumber(x, digit)
      break
    
      case 2:
       result = numberTwoDigit (x, digit)
      break
    
      case 3:
        if  (x % 100 === 0) {
          result = `${getUnitNumber(Math.trunc(x/100), digit)} hundred`
        }
        else if (x % 100 <= 10) {
          result = `${getUnitNumber(Math.trunc(x/100), digit)} hundred` + ' ' + getUnitNumber(x % 100, digit)
        } else {
          result = `${getUnitNumber(Math.trunc(x/100), digit)} hundred` + ' ' + numberTwoDigit(x % 100, digit)
        }
        
        break
    }
 return result
}
