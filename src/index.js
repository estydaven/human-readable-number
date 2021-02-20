//let number = 19;
module.exports = function toReadable (number) {
  let nums = {
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
      10: 'ten'
  };
  let numbers = {
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
  };
  let tens = {
      2: 'twenty', 
      3: 'thirty', 
      4: 'fourty', 
      5: 'fifty', 
      6: 'sixty', 
      7: 'seventy', 
      8: 'eighty', 
      9: 'ninety'
  };
  let result = '';
  let string = number.toString();
  let keysNums = Object.keys(nums);
  let keysNumbers = Object.keys(numbers);
  let keysTens = Object.keys(tens);

  if (number === 0){
    return nums[0];
  }

    if (string.length = 1){
      for (let i = 0; i < keysNums.length; i++){
          if(string == keysNums[i]){
            return result = nums[keysNums[i]];     
          }
      }
    }
 
    if (string.length = 2 && string[0] == 1){
      for (let i = 0; i < keysNumbers.length; i++){
          if(string == keysNumbers[i]){
            return result = numbers[keysNumbers[i]];
          }
      }
    }
  
    let leftover = Math.trunc(number / 10);
    for (let i = 0; i < keysTens.length; i++){
      if (leftover == keysTens[i]){
        return result = tens[keysTens[i]]; 
      }
    }

}