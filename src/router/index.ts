import { createWebHashHistory, createRouter, RouterOptions } from 'vue-router'

enum ROUTE_NAME {
  HOMEPAGE = 'Homepage',
  SIGN_IN = 'SignIn',
}

const nonAuthPages: ROUTE_NAME[] = [ROUTE_NAME.SIGN_IN]

const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: ROUTE_NAME.HOMEPAGE,
    component: () => import('@/modules/homepage/pages/HomePage.vue'),
    meta: {
      menu: 'homepage',
      showHeader: true,
      showMenu: true,
      title: '首页',
    },
  },
  {
    path: '/signin',
    name: ROUTE_NAME.SIGN_IN,
    component: () => import('@/modules/auth/pages/SignInPage.vue'),
    meta: {
      menu: 'signin',
      showHeader: false,
      showMenu: false,
      title: '登录',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由拦截
router.beforeEach((to, from, next) => {
  // if (to.name !== ROUTE_NAME.SIGN_IN && !localStorage.getItem(import.meta.env.VITE_APP_JWT_NAME)) {
  //   next({ name: ROUTE_NAME.SIGN_IN })
  // } else {
  //   next()
  // }
  next()
})

export { router, ROUTE_NAME }
