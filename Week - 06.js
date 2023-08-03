//Question 1 -A
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

var last = ages[ages.length - 1] //the last index of array

var first = ages[ages.length - ages.length] 

var diff = last - first //calculating 

console.log(`Difference between first and last element is: ${diff}`)
//Code B

var ages = [3, 9, 23, 64, 2, 8, 28, 93]

ages.push(20) 



var last = ages[ages.length - 1] 

var first = ages[ages.length - ages.length] 

var diff = last - first //calculating difference

console.log(`Difference between first and last element is: ${diff}`)

//Code C
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

ages.push(20) //pushing a new age to the array

var sum = 0, avg = 0.0

for (var i = 0; i < ages.length; i++) {

sum = sum + ages[i]//adding

}

avg = sum / ages.length//calculating avg

console.log(`The average of elements is: ${avg}`)//printing the average to the console

//QUESTION 2 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length; // Add the length of each name to the totalLetters variable.
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // Concatenate each name
  if (i !== names.length - 1) {
    concatenatedNames += " "; // 
  }
}
console.log("Concatenated names:", concatenatedNames);

//Question 3 - How do you access the last element of any array?
// - To get the last item in an array when you don't know the length of that array: const lastItem = dog[dog. length - 1]

//Question 4 -How do you access the first element of any array?
// - Array[0] In this way you can acess the first element of the arraay

//Question 5 
let namesArray = ["Kelly", "Sam", "Kate"]; 

let nameLengths = [];

for(var i=0;i<namesArray.length;i++)
	nameLengths.push(namesArray[i].length); 

console.log('namesArray: ',namesArray);
console.log('nameLengths: ',nameLengths);


//Question 6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalLengths = 0;

for(var i=0;i<nameLengths.length;i++)
	totalLengths += nameLengths[i];

console.log('Sum of all elements: ',totalLengths);

//Question 7  - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
func = (word, n) => {

    var concat = ""
    
    while (n != 0) {
    
    
    concat += word
    
    n--
    
    }
    
    return concat
    
    }
    
    console.log(func("Hello", 3))

    //Question 8 -
    //Write a function that takes two parameters, firstName and lastName, and returns a full name. 
    //The full name should be the first and the last name separated by a space.
    function fullName(firstName,lastName) {
      fullname =("Kelly" , "Silva");
      return 'Kelly Silva';
   }
   
   function fullName(firstName,lastName){
       fullname =("Alex" , "George");
   }

   //Question 9 -Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
   function greaterThan100(array)
{

arr_len = array.length; 
count = 0; 

for(i=0; i<arr_len; i++)
{
if(array[i] > 100) 
{
count = count+1; 
}
}

return count; 
}
console.log(greaterThan100reaterThan100([22, 67, 125, 345, 12]))

//Question 10 -Write a function that takes an array of numbers and returns the average of all the elements in the array.
numbers = [2, 4, 6, 8, 10]
avg = average(numbers)
console.log(avg);

//QUESTION 11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.
 let(arr1, arr2)
    if arr.length(arr1) == 0 || len(arr2) == 0;
        return False 
    avg1 = sum(arr1) / len(arr1)
    avg2 = sum(arr2) / len(arr2)
    return avg1 > avg2

arr1 = [1, 2, 3, 4, 5]
arr2 = [2, 4, 6, 8, 10]
console.log(compare_averages(arr1, arr2))  

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
console.log(compare_averages(arr1, arr2)) 

arr1 = [4, 2, 3]
arr2 = [3, 2, 1]
console.log(compare_averages(arr1, arr2)) 

//Question 12 - Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,/
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside , moneyInPocket){
   if (isHotOutside && moneyInPocket>10.5){
    return true;
   }
   else{
      return false;
   }
}
 
let a=willBuyDrink(true,12);
console.log(a);

//Question 133333- Create a function of your own that solves a problem. In comments, write what the function does and why you created it

function greet(name, lastName){
  console.log("Hello" + name + lastName)
}
greet('Josh')
