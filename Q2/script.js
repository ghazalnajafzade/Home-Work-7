const sortFromHightoLow = (...array) => {
  let a = array;
  // console.log(array);
  const b = a.map((item) => {
    return item;
  });
  const string = a.join().split(",");

  const sortArr = string.sort((a, b) => b - a);
  console.log(sortArr);
  const strToNum = sortArr.map((str) => {
    return parseInt(str);
  });
  console.log(strToNum);
};

sortFromHightoLow([1, 5, 6, 2], [3, 7, 1], [4, 5, 6, 8, 9]);
