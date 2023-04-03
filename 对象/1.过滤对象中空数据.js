/**
 * 过滤对象中数据为null/undefined/空字符串的字段
 * @Author susu
 * @Date 2023-4-3
 * @param {*} data 对象
 * @returns 返回一对象，删除其中值为null/undefined/空字符串的字段
 */
const filterParams = (data) => {
  const params = Object.keys(data)
    .filter(
      (key) =>
        data[key] !== null && data[key] !== undefined && data[key] !== "",
    )
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: data[key],
      }),
      {},
    );
  return params;
};
console.log(
  filterParams({
    data: "",
    data2: undefined,
    data3: null,
    name: "苏苏",
  }),
);
