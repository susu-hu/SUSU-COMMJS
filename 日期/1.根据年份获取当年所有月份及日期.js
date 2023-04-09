/**
 * 根据年份以及月份获取当月的总天数
 * @param {*} year 年份
 * @param {*} month 月份
 * @returns 总天数
 */
const getDaysCount = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};
/**
 * 补0
 * @param {*} num 当前值
 * @returns 补充0之后的字段
 */
const addZero = (num) => {
  return num < 10 ? "0" + num : num;
};
/**
 * 根据年份获取当年的月份以及每个月下的日期列表
 * @param {*} year 年份
 * @returns 日期列表
 */
const getDayListByYear = (year = new Date().getFullYear()) => {
  let dates = [];
  let date = new Date(year, 0, 1);
  while (date.getFullYear() === year) {
    let month = date.getMonth();
    let daysCount = getDaysCount(date.getFullYear(), month);
    dates.push({
      month: month + 1, //月份
      dayList: [], //所有天数
    });
    for (let day = 1; day <= daysCount; day++) {
      dates[month].dayList.push({
        day: year + "-" + addZero(month + 1) + "-" + addZero(day),
      });
    }
    date.setDate(date.getDate() + daysCount); //下个月的第一天
  }
  return dates;
};
console.log(getDayListByYear());
console.log(JSON.stringify(getDayListByYear()));
