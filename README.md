# TimResumeMook

TimResumeMook，个人简历软件。
毕业季，苦于各大简历平台的收费，故觉得自己写一个简历软件，支持 pdf 导出。
技术栈

- electron，前端开发者的桌面开发神器
- react，渲染进程的视图
- typescript
- react-router-dom v6，基本的路由库
- @redux/toolkit，redux 的封装库，感觉比 umi 香啊

## 使用

安装依赖:

```
npm i

// 启动react
npm run start:render

// 再启动Electron
npm run start:main
```

## 导出 pdf 问题

方案 1：jspdf+html2canvas
缺点：

1. 需要手动计算分页
2. 可能会被截断
3. 图片质量会较差
4. 写的怎么都写不出多页

方案 2：electron 自带的 printToPDf
缺点

1. flex 布局崩了......

前端搞 pdf 导出似乎没有一致性的解决方案........
