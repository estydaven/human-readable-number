//let number = 999;
module.exports = function toReadable (number) {
  let simpleNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];     
  let tenNumbers = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];
  let result = '';
  let ten = tenNumbers[Math.trunc(number / 10)];
  let hundred = simpleNumbers[Math.trunc(number / 100)];
  let hundredTen = simpleNumbers[number % 100];
  let num = simpleNumbers[number % 10];
  let leftTen = number % 100;
  let bigHundred = tenNumbers[Math.trunc(leftTen / 10)];
  
  if (number === 0){
    return result = 'zero';
  }
  if (number <= 20){
    return result = simpleNumbers[number];
  }
  if (number >= 20 && number <= 100){
    return result = ten + " " + num;
  }
  if (number > 100 && leftTen < 20){
    return result = hundred + ' hundred ' + hundredTen;
  }
  if (number > 100 && leftTen >= 20){
    return result = hundred + ' hundred ' + bigHundred + ' ' + num;
  }
  /*let result = '';
  let string = number.toString();
  let keysNums = Object.keys(nums);
  let keysNumbers = Object.keys(numbers);
  let keysTens = Object.keys(tens);

  if (number === 0){
    console.log(nums[0]);
  }

    if (string.length = 1){
      for (let i = 0; i < keysNums.length; i++){
          if(string === keysNums[i]){
            console.log(result = nums[keysNums[i]]);     
          }
      }
    }
 
    if (string.length = 2 && string[0] == 1){
      for (let i = 0; i < keysNumbers.length; i++){
          if(string === keysNumbers[i]){
            console.log(result = numbers[keysNumbers[i]]);
          }
      }
    }
  
    let leftover = string[0];    
    let digit = string[1];
    for (let i = 0; i < keysTens.length; i++){
      if (leftover === keysTens[i] || digit === keysNums[i]){        
        console.log(result = (tens[keysTens[i]]) + " " + (nums[keysNums[i]])); 
      }
    }*/
    
    
}