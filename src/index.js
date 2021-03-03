module.exports = function toReadable (number) {
  let simpleNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];     
  let tenNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];
  let result = '';
  let ten = tenNumbers[Math.trunc(number / 10)];
  let hundred = simpleNumbers[Math.trunc(number / 100)];
  let num = simpleNumbers[number % 10];
  let hundredTen = simpleNumbers[number % 100];  
  let leftTen = number % 100;
  let bigHundred = tenNumbers[Math.trunc(leftTen / 10)];
  let string = number.toString();
  
  if (number === 0){
    return result = 'zero';
  }
  if (number <= 20){
    return result = simpleNumbers[number];
  }
  if (number > 20 && number <= 100){    
    if (string[1] === 0){
      result = ten;
      return result.trim();
    } 
    if (string[0] !== 0) {
      result = ten + " " + num;
      return result.trim();
    }    
  }
  if (number > 100 && leftTen < 20){
    result = hundred + ' hundred ' + hundredTen;
    return result.trim();
  }
  if (number > 100 && leftTen >= 20){
    result = hundred + ' hundred ' + bigHundred + ' ' + num;
    return result.trim();
  }  
}