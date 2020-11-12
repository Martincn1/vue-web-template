export default [
  {
    path: '/users',
    name: 'user-list',
    component: () => import('@/views/layout/common.vue'),
    redirect: '/users/list',
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: () => import('@/views/user/list.vue'),
        meta: {
          title: '用户列表',
          role: 'admin'
        }
      },
      {
        path: 'edit',
        name: 'user-edit',
        component: () => import('@/views/user/edit.vue'),
        meta: {
          title: '用户编辑'
        }
      }
    ]
  }
]
