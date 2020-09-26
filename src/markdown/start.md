# 快速上手
## 安装
NPM安装：

```
npm install lab-uicl
```

或Yarn安装：

```
yarn add lab-uicl
```
## 引入组件
### 导入样式

在main.js文件或根组件中导入样式

```
import "lab-uicl/dist/lib/lab-ui.css";
```
包含图标的组件需要在index.html中引入下方代码
```
<script src="//at.alicdn.com/t/font_2025491_ywm2qicgnt.js"></script>
```
### 按需引用
手动引入需要的组件，代码示例：

```
import {Button,Switch} from "lab-uicl"
export default {
  components: {Button,Switch}
}
```
注：组件文档中所有代码示例引入方式都需改为`import {} from "lab-uicl"`