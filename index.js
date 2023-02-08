function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[Math.floor(Math.random()*array.length)];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}
function bblSort(arr) {

  for (var i = 0; i < arr.length; i++) {


    for (var j = 0; j < (arr.length - i - 1); j++) {


      if (arr[j] > arr[j + 1]) {


        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr;

}
let n = 10;///maximun n
console.log('reverse sorted array quickSort\n');
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
  quicksort(arr);
  arr.reverse();
  //console.log(arr);
  //console.log('n=' + i);
  console.time();
  quicksort(arr)
  console.timeEnd();
}
console.log('sorted array quickSort\n')
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
  quicksort(arr);
  
  //console.log('n=' + i);
  console.time();
  quicksort(arr)
  console.timeEnd();
}
console.log('random array quicksort')
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
 // console.log('n=' + i);
  console.time();
  quicksort(arr)
  console.timeEnd();
}
console.log('------------------------------');
console.log('bubbleSort\n');
console.log('reverse sort bubleSort\n');
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
  //console.log('n=' + i);
  bblSort(arr);
  arr.reverse();
  console.time();
  bblSort(arr);
  console.timeEnd();
}
console.log('sorted array\n');
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
  //console.log('n=' + i);
  bblSort(arr);
  console.time();
  bblSort(arr);
  //console.log(bblSort(arr));
  console.timeEnd();
}
console.log('random array:\n');
for (let i = 1; i < n; i++) {

  var arr = Array.from({ length: i }, () => Math.floor(Math.random() * 40));
 // console.log('n=' + i);
  console.time();
  bblSort(arr);
  //console.log(bblSort(arr));
  console.timeEnd();
}
