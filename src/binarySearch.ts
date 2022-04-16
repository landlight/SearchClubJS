export default function binarySearch(itemsArr, searchItem) {
  // Sort the array
  itemsArr.sort();
  console.log(itemsArr);
  // Get Center of items 
  let min = 0;
  let max = itemsArr.length - 1;
  while (max > min) {
    let guess = Math.round(min + max / 2);  
    if (itemsArr[guess] === searchItem) {
      return guess;
    }
    if (itemsArr[guess] < searchItem) {
      min = guess + 1;
    } else {
      max = guess -1;
    }
  }
  return -1;
}
