
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let lineArr = [];
  matrix.forEach((arr, ind) => {
	if (ind % 2 === 0) lineArr = lineArr.concat(arr);		
	if (ind % 2 !== 0) lineArr = lineArr.concat(arr.reverse());		
	})

  return lineArr;
}
