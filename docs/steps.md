# 使用脚手架工具搭建项目框架
* git init或者clone一个空项目
* vue create搭建项目基础框架
* 使用`vue add element-ui`添加element UI,考虑到后期有可能需要修改element的默认样式，
  所以在添加element的时候需要选择使用scss theme

# 完善项目目录结构
使用vue-cli工具搭建完项目基础框架后，根据项目的具体情况对目录结构进一步的调整
* 根据模块建立视图文件夹，所有视图根据模块来保存在对应的文件夹内
* 在views下建立layout目录，用于保存页面的整体布局
* 创建utils文件夹，用户保存存放功能文件
* 创建services文件夹，用于保存服务（接口）调用文件
* 创建assets文件夹，放置所有的公共静态资源（图片，图标，样式）
* components下创建global文件夹，放置全局公共组件

# 第三方通用工具包安装
## normalize.css
使用normalize.css能够让我们在各个浏览器得到一样的渲染样式效果，因为各个浏览器的默认样式是存在细微差别的，
使用normalize.css能够解决这个问题。

## axios
使用axios来实现ajax的请求，并通过配置拦截器来实现通过配置的添加
* 从环境变量获取接口请求的地址，根据环境的不同可以将地址配置在不同的文件中`.env.development`和`.env.production`
* 从utils文件夹下新建文件request.js，实现axios的实例化和拦截器方法，并导出实例
* 请求拦截器，对用户的授权token进行统一添加
* 响应拦截器，对响应的信息进行统一的前置处理，使用element-ui的`message`组件实现提示功能

## NProgress
NProgress能够为我们在路由跳转，ajax请求加载过程中提供友好的进度条效果。使用场景有两个地方：
* 路由切换的时候，在全局路由导航守卫添加该方法
* ajax请求过程中，在请求拦截器和响应拦截器实现该方法

## 强制代码规范检查
* husky和lint-staged，实现代码规范性检查
