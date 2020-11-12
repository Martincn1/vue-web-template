import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nprogress from 'nprogress'

Vue.use(VueRouter)

// 利用require.context,遍历该文件夹下的所有文件,排除index.js,最后合并数组
let routes = []
const requireContext = require.context(
  './', // 其组件目录的相对路径
  true, // 是否查询其子目录
  /\.js$/ // 匹配基础组件文件名的正则表达式
)
requireContext.keys().forEach(filename => {
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new VueRouter({
  routes
})

// 动态路由
router.addRoutes([
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
])

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.role === 'admin') {
    console.log('这是管理员才能进来的页面！')
  }
  Nprogress.start()
  next()
})
router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
