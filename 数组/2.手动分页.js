const pageAll = Array.from(Array(100).keys(), (n) => n + 1);
const PAGE_SIZE = 10; //分页size
console.log("总页数", Math.ceil(pageAll.length / PAGE_SIZE));
/**
 * 手动分页
 * @param {*} e 数组
 * @param {*} pageIndex 当前页码
 * @param {*} pageSize  当前每页数量
 * @returns
 */
const handleGetData = (e, pageIndex, pageSize) => {
  return e.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
};
console.log(handleGetData(pageAll, 2, PAGE_SIZE));
