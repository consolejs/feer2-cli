## 开发

```sh
npm start
npm run build
npm run ci # commit
```

## Vscode 插件安装

> https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

> https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## Commit Message Type

```
feat: 新功能（feature）
fix: 修补bug
docs: 文档（documentation）
style: 格式（不影响代码运行的变动）
refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
perf: 提高性能的修改
test: 增加测试
build: 构建工具或外部依赖包的修改。比如更新依赖包的版本等
ci: 持续集成的配置文件或脚本的修改
chore: 构建过程或辅助工具的变动
revert: 撤销某次提交
```

## 组件


## 常用库

```sh
# qs https://github.com/ljharb/qs
npm install qs --save

# js-cookie https://github.com/js-cookie/js-cookie
npm install js-cookie --save

# classnames https://github.com/JedWatson/classnames
# 操作类名, 必备库
npm install classnames --save

# axios https://github.com/axios/axios
npm install axios --save
```

## TODO

- [✅] .env 配置启用
- [✅] stylelint 集成
- [✅] 添加 router@6
- [✅] loading (组件)
- [✅] 数据上报 (组件)
- [✅] 测试环境 VConsole
- [✅] 增加 .env 配置适配宽度
- [✅] esbuild 打包支持
- [✅] browserslistrc 支持
- [✅] postcss 支持

## 文档


## 关于 .env 文件

```ini
PORT=5001
HTTPS=true
PUBLIC_PATH="https://xxx.com"
ESBUILD=true
# 图片 base64 阈值
IMAGE_INLINE_LIMIT=0
# ui 适配宽度
DESIGN_WIDTH=750
```

## FAQ


