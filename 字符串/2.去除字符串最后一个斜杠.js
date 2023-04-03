  /**
   * 去除最后一个斜杆
   * @Author susu
   * @Date 2023-3-29
   * @param {*} e
   * @returns
   */
   const replaceString = (e) => {
    if (!e) return;
    return e.replace(/^\/|\/$/g, "");
  };
console.log( replaceString( 'https://www.baidu.com/' ) )
console.log(replaceString('https://www.susu.com'))