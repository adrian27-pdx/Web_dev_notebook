let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  var index = result.indexOf(item);
  result.splice(index,1);
  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  if(index < 0)
  {
    return "Null"
  }
  var temp = index;
  index = result[index];
  result.splice(temp,1);
  return index;
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  return result;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
