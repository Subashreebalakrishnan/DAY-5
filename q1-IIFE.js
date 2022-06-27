(function(Odd){
    for(var i = 0 ; i< Odd.length ; i++){
               if(Odd[i]%2!=0){
                  console.log(Odd[i])
               } 
          }
    })([1,2,3,4])

//Convert all the strings to title caps in a string array -ddddddd

;(function(str)
 {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
    
   let a= str.replace(/\w\S*/g, 
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
         console.log(a)

  })(("geeks for geeks"));

  

//Sum of all numbers in an array

(function(a)
{
    let sum=0;
    for (i=0;i<a.length;i++)
    {
        sum=sum+a[i]
        
    }
   console.log(sum)
   
})([2,3,4,5])

//Return all the prime numbers in an array

;(function(numArray)
{
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) 
    {
        if (number % i === 0) 
        
        return false;
    }
    return true;
});
console.log(numArray);
})([1,2,3,4,5,7]);

// Return all palindromes in an array --dddd

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

;(function(ar1, ar2, n)
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
    let h= parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    console.log (h);
    })([ 1, 12, 15, 26, 38 ],[ 2, 13, 17, 30, 45 ],5);
     
     

    
    

    //Remove duplicates from an array

    (function (arr)
    {
    
        let uniqueArr = [];
        
        for(let i of arr) {
            if(uniqueArr.indexOf(i) === -1) {
                uniqueArr.push(i);
            }
        }
        console.log(uniqueArr);
    })([1, 2, 3, 2, 3]);


   // Rotate an array by k times

(function (a, n, k)
{
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
            console.log(a[n + i - k]);
        }
        else {

            console.log(((a[i - k])));
        }
    }
    
})( [1, 2, 3, 4, 5],5,2)
 


