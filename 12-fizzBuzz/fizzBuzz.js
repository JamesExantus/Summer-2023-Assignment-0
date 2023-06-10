function fizzBuzz(start, end) {
  // Insert code here;
  const nums = new Array();
  for(let i = start; i < nums.end; i++){
    if(nums[i] > 3 && nums[i] % 5 ==0){
      nums[i]= "Buzz";
    }
    /*
    else if( nums[i] % 3 ==0){
      nums[i] = "Fizz";
    }
    else if(nums[i] %3 ==0 && nums[i] % 5 ==0){
      nums[i] = "FizzBuzz";
    }
    else if(nums[i] % 3 != 0 && nums[i] % 5 != 0) {
      nums[i] = i;
    }*/

    }

    return nums;
  }

  


// Do not edit this line;
module.exports = fizzBuzz;