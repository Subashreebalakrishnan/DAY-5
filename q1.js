let oddnum = (function(arr) 
{
let result=[]
for(let ele of arr){
    if(ele%2!==0)
    {
        result.push(ele)
    }
    
}
return result;
 })
console.log(oddnum([1,2,3,4,5,6,7]));

//Convert all the strings to title caps in a string array

let sentenceCase= function(str)
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

let sumNumbers =(function(...nos)
{
    let sum=0;
    for (let i of nos){
        sum=sum+i
    }

  return sum;
})

let sum= sumNumbers(1,2,3,4,5);
console.log(sum);

//Return all the prime numbers in an array


let isPrime= function(num) {
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
let isPalindrome = function(el) {
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

//Return median of two sorted arrays of the same size

let getMedian= function(ar1, ar2, n)
    {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
     
    let ar1 = [ 1, 12, 15, 26, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];
 
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2)
    console.log (getMedian(ar1, ar2, n1));
    else
    console.log ("Doesn't work for arrays of unequal size");

    //Remove duplicates from an array

    let getUnique= function (arr)
    {
    
        let uniqueArr = [];
        
        for(let i of arr) {
            if(uniqueArr.indexOf(i) === -1) {
                uniqueArr.push(i);
            }
        }
        return uniqueArr;
    }
    
    const array = [1, 2, 3, 2, 3];
    
   console.log((getUnique(array)));

   // Rotate an array by k times

 let RightRotate = function (a, n, k)
{
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
            console.log(a[n + i - k] + " ");
        }
        else {

            console.log(((a[i - k]) + " "));
        }
    }
    
}
 
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
RightRotate(Array, N, K);


