// 时间戳变成类似 2021/03/09 这样的字符串，处理成年月日
export function intToDateString(num: number, unit = '/'): string {
  let date;
  if (!num) {
    date = new Date();
  } else {
    date = new Date(num);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${unit}${month >= 10 ? month : '0' + month}${unit}${day >= 10 ? day : '0' + day}`;
}

// 时间戳变成类似14:28:19这样的字符串
// 处理时分秒
export function intToTimeString(num?: number): string {
  let date;
  if (!num) {
    date = new Date();
  } else {
    date = new Date(num);
  }
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}:${
    second >= 10 ? second : '0' + second
  }
      `;
}

// 时间戳变成类似2018/01/12 12:32:21这样的字符串
// 上述两者进行拼接
export function formatToString(num: number | undefined, unit = '/') {
  if (!num) return '';
  const date1 = intToDateString(num, unit);
  const date2 = intToTimeString(num);
  return `${date1} ${date2}`;
}
