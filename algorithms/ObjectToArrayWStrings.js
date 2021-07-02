//converts an object to an array with strings
const feed = {likes: 2, dislikes: 3, followers: 10};
const objectToArray = (feed) => {
  let j = Object.entries(feed);
  const newArray = j.map(createArray);
  function createArray  (value, index, array) { 
    return value.toString();
  }
  return newArray;
}
console.log(objectToArray(feed));