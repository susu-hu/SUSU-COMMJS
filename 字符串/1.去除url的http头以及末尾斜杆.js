  /**
   * 去除网址中的http://或者https://,以及最后一个斜杆
   * @Author susu
   * @Date 2023-3-29
   * @param {*} e
   * @returns
   */
   const replaceString = (e) => {
    if (!e) return;
    let url = e.replace(/^https?\:\/\//i, "");
    return url.replace(/^\/|\/$/g, "");
  };
console.log( replaceString( 'https://www.baidu.com/' ) )
console.log(replaceString('https://www.susu.com'))