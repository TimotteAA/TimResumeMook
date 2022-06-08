export function isHttpOrHttps(url: string) {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
