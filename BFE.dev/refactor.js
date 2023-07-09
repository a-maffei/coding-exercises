/* // Given an input of array, 
// which is made of items with >= 3 properties

let items = [
    {color: 'red', type: 'tv', age: 18}, 
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17}
  ] 
  
  // an exclude array made of key value pair
  const excludes = [ 
    {k: 'color', v: 'silver'}, 
    {k: 'type', v: 'tv'}, 
    ...
  ] 
  
  function excludeItems(items, excludes) { 
    excludes.forEach( pair => { 
      items = items.filter(item => item[pair.k] === item[pair.v])
    })
   
    return items
  } 
  What does this function excludeItems do?
  Is this function working as expected ?
  What is the time complexity of this function?
  How would you optimize it?  */

let items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

// an exclude array made of key value pair
const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

function excludeItems(items, excludes) {
  //create a Map
  // store kv pairs in map, first creating a set, so that if multiple items in excludes have they "color" no value will be overwritten
  // filter items
  // look for item keys and check that for every key
  // if you look it up in the map, either it's not there or has a different value

  const excludeMap = new Map();

  //Important: you destructure your item + you chain a Map method with a Set method
  excludes.forEach(({ k, v }) => {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set());
    }
    excludeMap.get(k).add(v);
  });

  //Important: you check that either the key isn't present or the corresponding value isn't what it's in your item
  return items.filter((item) =>
    Object.keys(item).every(
      (key) => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  );
}
