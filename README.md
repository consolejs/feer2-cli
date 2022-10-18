<p>
	<img alt="Front End Developer Integration." src="./static/logo2.jpg">
</p>

# Feer

**`Feer2`** 全新前端工具集成环境. &ensp;🚀  &ensp;&ensp;[**English Docs**](./README_EN.md)

> Feer2是[Feer](https://github.com/consolejs/feer-cli)的升级版，此命名灵感来自 **`F`** ront- **`E`** nd&ensp; Engine **`er`**, 即前端工程构建师 `FEer`, 类似`JAVAer`、 `PHPer`

<p align='center'>
  <img src='./cli.svg' width='640' alt='yarn start'>
</p>

### 使用

- 全局安装
```bash
npm i feer2 -g
```
- 默认使用
```
feer2 <your-project-name>
```
- 或者
```bash
npx feer2 <your-project-name>
```

### 场景支持

在使用 `feer2` 命令创建过程中，会提供模板选择功能, 可支持多种技术栈:

```bash
? Which type do you want to create? (Use arrow keys)
❯ ES - (base on the webpack & es)
  React - (base on the webpack & react)
  Vite - (base on the vitejs & react)
```

### 文件目录结构

```c
├── .babelrc ---> babel配置文件
├── .gitignore ---> git过滤规则
├── .eslintrc ---> ESLint配置
├── .eslintignore ---> ESLint过滤规则
├── README.MD
├── package.json
├── build/dist ---> 打包文件夹
├── config ---> 配置文件夹(`*`)
├── images ---> 图片资源文件 (使用cdn时，可删除该文件夹)
└── src ---> 源代码文件夹
```

### config 配置

```c
├── env.js ----> 基础环境变量
├── dev.js ----> 开发环境配置
└── prod.js ---> 生产环境配置
```

### src 代码资源

```c
├── libs ---> 可存放引入的第三方库文件
├── mods ---> 各模块业务逻辑
├── index.js ---> 入口文件index.js
└── sass/less ---> scss 源代码文件夹, 可自定义
```

### build/dist 编译输出

```c
├── index.html ---> html模板文件
├── js ---> js源代码文件夹
├── css ---> css资源文件
└── img ---> 图片资源文件 (使用cdn时，可删除该文件夹)
```

### 特性

* 基于时下最流行的打包编译方案
* 快速打包，实现bundle最小化
* Tree-shaking帮助你移除无用代码
* 支持单/多页面开发
* 支持Proxy代理访问接口
* 基于MockJS 模拟 api
* 配置简单便捷、打包迅速
* 支持Sass、Less强大的CSS扩展语言
* 可灵活配置路由
* 支持自动打开浏览器(自动获取本地的ip地址)
* 久经历练考验、不断迭代升级



### License

[MIT](./LICENSE)
 
