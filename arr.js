/*৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/
const arr = [23,43,56,75,54,49,37,99];
const arr2 = []
arr.map(element => arr2.push(element/7) );
console.log(arr2);

/*
1.array.map();

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

2.array.forEach()

The forEach() method executes a provided function once for each array element.

3.array.filter()
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


*/
