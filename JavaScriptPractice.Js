let array = ["Dhoni","Jedaja","Pant","Axar","Kohli","Sachin","Shewag","Nehra"]
//Only array['1'] is an actual array index. array['01'] is an arbitrary string property 
//that will not be visited in array iteration.
//Indexing the array using string
console.log(array["1"]);
console.log(array.length);
//Push the element into array
array.push("Scott");
console.log(array);
//pop the element from array
console.log(array.pop())
console.log(array);

//at
//The at() method of Array instances takes an integer value and returns the item at that index, 
// allowing for positive and negative integers. Negative integers count back from the last item in the array.
const array1 =  ["Kohli","Salt","Padikkal","Patidar","Sharma","Livingstone","David","Shepard","Kumar","Pandya","Hazelwood","Dayal"];
let index=5;
console.log(`An index of array1 of ${index} and the elemnet ${array1.at(index)}`);
let index1 = -4
console.log(`An index of array1 of ${index1} and the elemnet ${array1.at(index1)}`);

//concat
const array2 =  ["Virat","Phil","Devdutt","Rajat","Jithesh","Liam","Tim","Romero","Bhuvi","Krunal","Josh","Yash"];
let array3 = array1.concat(array2)
console.log(array3)