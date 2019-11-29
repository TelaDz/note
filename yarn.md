# yarn 和 npm 的对比，以及项目中使用方式

## 相比 npm 的优点

1. npm 安装是串行，而 yarn 是并行，速度大大提升
2. 已经下载过的包会被缓存，无需重复下载,更关键的是，支持离线安装
3. 精准的版本控制，加上验证每个包的完整性，保证每次安装的 npm 包完全一致
   npm 版本控制缺陷带来的严重问题(https://blog.csdn.net/qiansg123/article/details/80129453)
4. 优化的输出信息

## npm5 改进

1. 引入了 package-lock.json，默认会被添加到项目，增强了版本控制
2. 提升了安装速度，还是稍慢于 yarn,引入了离线缓存
3. 优化输出信息

## Yarn 工作流、对应命令上 npm 的差别

### 创建一个新项目

初始化

npm init yarn init

### 添加/更新/删除依赖项

添加(使用 package@version 指定版本号 global 指定全局安装)

加入生产依赖 npm i [package] -S (-g) yarn (global) add [package]@[version]

加入开发依赖(打包时忽略) npm i [package] -D yarn add [package]@[version] --dev

更新

查询过期版本

npm outdated [package] yarn outdated [package]

npm outdated yarn outdated

更新版本

yarn upgrade [package]@[version]

卸载

npm uninstall [package] yarn remove [package]

重新安装所有依赖

rm -rf node_modules&&npm install yarn upgrade

yarn global add <package...>全局安装依赖。

注意：yarn add global <package...>会变成本地安装，注意顺序。

npm list -g --depth=0 查看 npm 上已经全局安装的命令

yarn config set registry http://registry.npm.taobao.org

### 安装/重新安装依赖项

初始化安装

npm install yarn install

### 运行脚本

yarn run [script][<args>]

### 使用版本管理工具

### 持续集成

总结:

在 yarn 这位搅局者的出现,npm 终于给了一次力,npm5 和 yarn 区别已经不大，况且，yarn 更新慢，对 npm 参数支持有限，目前推荐用 yarn 来管理版本，npm 来跑命令
