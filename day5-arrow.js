let oddnum = (arr)=>
{
let result=[]
for(let ele of arr){
    if(ele%2!==0)
    {
        result.push(ele)
    }
    
}
return result;
 }
console.log(oddnum([1,2,3,4,5,6,7]));

//Convert all the strings to title caps in a string array

let sentenceCase=(str)=>
 {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
    
   return str.replace(/\w\S*/g, 
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
  }
    
  console.log (sentenceCase('geeks for geeks'));

//Sum of all numbers in an array

let sumNumbers =(...nos)=>
{
    let sum=0;
    for (let i of nos){
        sum=sum+i
    }

  return sum;
}

let sum= sumNumbers(1,2,3,4,5);
console.log(sum);

//Return all the prime numbers in an array


let isPrime= (num) => {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

const Ar = [1,2,3,4,5,6,7,8,9,10]; 

console.log(Ar.filter(isPrime));
  

// Return all palindromes in an array

const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
let isPalindrome = (el) => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
