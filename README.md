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

### Upload 组件优化

1. upload 组件，当页面离开时，维持、还是取消当前的文件上传；删除时并没有添加 axios 的请求取消逻辑
2. progress 组件的样式美化
3. 图片文件预览
4. onDownload、

### 2022.7.4

新增 Message 与 Tree 树形控件

#### Message

Message 组件需要一个 MessageContainer 组件，用于页面容器；当 Message 自身动画结束后从 MessageContainer 中的 messages 数组中删除，容器组件类组件为宜（？）。

#### Tree

Tree 组件接受一个树形的 data，如果某个子项还有 children，则继续递归渲染自身：一个 Tree 由一个 ul 与 li 组成；而删除叶子结点则是从当前节点层的数组中删除；传入的数据需要加工，以增加 clicked、opened 属性；点击父项的 clicked 时，需要递归修改子组件的 clicked，一同选中。
