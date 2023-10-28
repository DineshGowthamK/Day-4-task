//Question 1 : Print odd numbers in an array

//By Anonymous Function
var a= function odd(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([2,6,48,5,3,9,11]));

//By IIFE Function
(function (arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([2,6,48,5,3,9,11]);

//By Arrow Function
var b =(arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
b([2,6,48,5,3,9,11]);

//Question 2 : Convert all the strings to title caps in a string array

//By Anonymous Function
var c= function upperCase(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
    }
    return result;
}
console.log(c(["dinesh","ram","rupan","deepak"]));

//By IIFE Function
(function (arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
    }
    console.log(result);
})(["dinesh","ram","rupan","deepak"]);

//By Arrow Function
var d=(arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
    }
    console.log(result);
}
d(["dinesh","ram","rupan","deepak"]);

//Question 3 : Sum of all numbers in an array

//By Anonymous Function
var e = function sum(arr){
    var result =0;
    for(var i=0;i<arr.length;i++){
        result += +arr[i];
    }
    return result;
}
console.log(e([52,3,61,43,58]));

//By IIFE Function
(function (arr){
    var result =0;
    for(var i=0;i<arr.length;i++){
        result += +arr[i];
    }
    console.log(result);
})([52,3,61,43,58]);

//By Arrow Function
var f =(arr)=>{
    var result =0;
    for(var i=0;i<arr.length;i++){
        result += +arr[i];
    }
    console.log(result);
}
f([52,3,61,43,58]);

//Question 4 : Return all the prime numbers in an array

//By Anonymous Function
var g = function prime(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr[i];j++){
            if(+arr[i]%j===0){
                check = false;
            }
        }
        if(check){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(g([8,3,19,10,5,13,48,7,17]));

//By IIFE Function
(function prime(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr[i];j++){
            if(+arr[i]%j===0){
                check = false;
            }
        }
        if(check){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([8,3,19,10,5,13,48,7,17]);

//By Arrow Function
var h = (arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i++){
        var check = true;
        for(var j=2;j<arr[i];j++){
            if(+arr[i]%j===0){
                check = false;
            }
        }
        if(check){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
h([8,3,19,10,5,13,48,7,17]);

//Question 5 : Return all the palindromes in an array

//By Anonymous Function
var k = function palindrome(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(k(["madam","hello","mam"]));

//By IIFE Function
(function (arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);
        }
    }
    console.log(result);
})(["madam","hello","mam"]);

//By Arrow Function
var l = (arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split("").reverse().join("");
        if(arr[i]==temp){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
l(["madam","hello","mam"]);

//Question 6 : Return median of two sorted arrays of the same size.

//By Anonymous Function
var m = function median(arr1,arr2){
    var result =0;
    function compareNumbers(p, q) {
        return p- q;
      }
    var temp = arr1.concat(arr2);
    temp1 = temp.sort(compareNumbers);
    var len = temp1.length;
    if(len%2 === 0){
        result=(temp1[len/2]+temp1[(len/2)-1])/2;
    }
    else{
        result = temp[len/2];
    }
    return result;
}
console.log(m([2,5,6,8,16],[4,8,13,20,25]));

//By IIFE Function
(function (arr1,arr2){
    var result =0;
    function compareNumbers(p, q) {
        return p- q;
      }
    var temp = arr1.concat(arr2);
    temp1 = temp.sort(compareNumbers);
    var len = temp1.length;
    if(len%2 === 0){
        result=(temp1[len/2]+temp1[(len/2)-1])/2;
    }
    else{
        result = temp[len/2];
    }
    console.log(result);
})([2,5,6,8,16],[4,8,13,20,25]);

//Question 7 : Remove duplicates from an array

//By Anonymous Function
var r = function removeDuplicates(arr) { 
    return [...new Set(arr)]; 
} 
console.log(r(["apple", "mango", "apple","orange", "Watermelon", "mango"]));

//By IIFE Function
(function (arr) { 
    console.log([...new Set(arr)]); 
})(["apple", "mango", "apple","orange", "Watermelon", "mango"]);

//Question 8 : Rotate an array by k times

//By Anonymous Function
var s=function rotate(arr,k){
    for(var i=1;i<=k;i++){
        arr.push(arr.shift());
    }
    return arr;
}
console.log(s(["Dinesh","Ram","Deepak","Kirthick","Hari"],3));
//console.log(s([5,6,2,3,8],3))

//By IIFE Function
(function rotate(arr,k){
    for(var i=1;i<=k;i++){
        arr.push(arr.shift());
    }
    console.log(arr);
})([5,6,2,3,8],3);