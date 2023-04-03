/**
 * 数组扁平化
 * @Author susu
 * @Date 2023-4-3
 * @param {*} arr 数组
 * @returns []
 */
const flatten = (arr) => {
  return arr.reduce((prev, curValue) => {
    return prev.concat(Array.isArray(curValue) ? flatten(curValue) : curValue);
  }, []);
};
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);
