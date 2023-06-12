# rp-mini-program-cli

如易行uniapp+vue3+vite脚手架

## 技术方案
采用uni-app框架，主页使用原生小程序展示，其他界面使用h5形式展示，便于更新。
### 开发调试
1. npm start || npm run dev:h5
2. npm run dev:mp-weixin
3. 使用微信开发者工具，导入项目dist/dev/mp-weixin 即可开始开发
### 打包部署

[//]: # (首先检查`modifyManifest.js`文件中 `环境静态资源URL` 是否正确对应准备部署的静态资源地址)

#### 开发环境部署:
1. h5开发环境 npm run build:dev-h5
2. 微信小程序开发环境 npm run build:dev-mp-weixin
3. 支付宝小程序开发环境 build:dev-mp-alipay

#### 测试环境部署:
1. h5测试环境 npm run build:test-h5. <br/>上传dist/build/h5内容到  对应的静态资源路径
2. 微信小程序测试环境 npm run build:test-mp-weixin<br/>使用微信开发者工具，导入项目dist/build/mp-weixin ，点击 工具内"上传"按钮

#### 生产环境部署:
1. h5测试环境 npm run build:release-h5. <br/>上传dist/build/h5内容到  https://static.ruubypay.com/xxx 对应的静态资源路径，刷新https://static.ruubypay.com/xxx/index.html cdn缓存
2. 微信小程序测试环境 npm run build:test-mp-weixin<br/>使用微信开发者工具，导入项目dist/build/mp-weixin ，点击 工具内"上传"按钮
