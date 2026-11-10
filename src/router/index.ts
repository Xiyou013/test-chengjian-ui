import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import type { IconName } from '../components/icons/types'
import WorkspaceView from '../views/WorkspaceView.vue'
import TestChengJianUIView from '../views/ChengjianUiTestView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    menu?: { label: string; icon: IconName }
  }
}

// Only routes with menu metadata are displayed in the sidebar, in this order.
export const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: WorkspaceView, meta: { title: '工作台', menu: { label: '工作台', icon: 'grid' }, description: '查看工作概览，快速进入常用功能。' } },
    { path: '/projects', name: 'projects', component: WorkspaceView, meta: { title: '项目管理', menu: { label: '项目管理', icon: 'folder' }, description: '集中管理项目基本信息与建设情况。' } },
    { path: '/progress', name: 'progress', component: WorkspaceView, meta: { title: '建设进度', menu: { label: '建设进度', icon: 'chart' }, description: '跟踪建设任务与项目进展。' } },
    { path: '/documents', name: 'documents', component: WorkspaceView, meta: { title: '资料中心', menu: { label: '资料中心', icon: 'document' }, description: '归集和查阅项目相关资料。' } },
    { path: '/settings', name: 'settings', component: WorkspaceView, meta: { title: '系统设置', menu: { label: '系统设置', icon: 'settings' }, description: '管理系统配置与偏好设置。' } },
    { path: '/testCJui', name: 'testCJui', component: TestChengJianUIView, meta: { title: 'ui试验', menu: { label: '城建ui试验', icon: 'settings' }, description: '城建ui组件试验。' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
