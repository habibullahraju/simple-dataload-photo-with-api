/*
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
const obj = {name: 'habibullah raju',
    age: 20,
    country: 'bangladesh',
    isSingle: true,
    array: [23,53,65,35,25],
    raju: [0] = this.array,

};
console.log(obj.age);