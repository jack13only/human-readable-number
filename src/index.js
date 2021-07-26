module.exports = function toReadable(num) {
  const one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const three = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let output = '';
  if (num == 100) return 'one hundred'
  if (num == 0) return 'zero'
  numStr = num.toString();
  if (numStr.length == 3) {
    if (!(num % 100)) return output + one[+numStr[0]] + ' hundred'
    output += one[+numStr[0]] + ' hundred ';
    num = num % 100;
    return output + toReadable(num)
  }

  if (numStr.length == 2 & num < 20) {
    output += two[+numStr[1]]
    return output;
  }

  if (numStr.length == 2 & num >= 20) {
    if (!(num % 10)) return output + three[+numStr[0]]
      output += three[+numStr[0]] + ' '  
      num = num % 10;
      return output + toReadable(num)

  }
  if (numStr.length == 1) {
    output += one[+numStr[0]]
    return output;
  }
}