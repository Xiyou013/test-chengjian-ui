import { createRouter, createWebHistory } from 'vue-router'
import WorkspaceView from '../views/WorkspaceView.vue'
import TestChengJianUIView from '../views/ChengjianUiTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/chengjian-ui-test', name: 'chengjian-ui-test', component: () => import('../views/ChengjianUiTestView.vue'), meta: { title: '城建 UI 接入测试' } },
    { path: '/', name: 'home', component: WorkspaceView, meta: { title: '工作台', description: '查看工作概览，快速进入常用功能。' } },
    { path: '/projects', name: 'projects', component: WorkspaceView, meta: { title: '项目管理', description: '集中管理项目基本信息与建设情况。' } },
    { path: '/progress', name: 'progress', component: WorkspaceView, meta: { title: '建设进度', description: '跟踪建设任务与项目进展。' } },
    { path: '/documents', name: 'documents', component: WorkspaceView, meta: { title: '资料中心', description: '归集和查阅项目相关资料。' } },
    { path: '/settings', name: 'settings', component: WorkspaceView, meta: { title: '系统设置', description: '管理系统配置与偏好设置。' } },
    { path: '/testCJui', name: 'testCJui', component: TestChengJianUIView, meta: { title: 'ui试验', description: '城建ui组件试验。' } },
  ],
})

export default router
