<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const navigation = [
  { to: '/', label: '工作台', icon: 'grid' },
  { to: '/projects', label: '项目管理', icon: 'folder' },
  { to: '/progress', label: '建设进度', icon: 'chart' },
  { to: '/documents', label: '资料中心', icon: 'document' },
  { to: '/settings', label: '系统设置', icon: 'settings' },
  { to: '/testCJui', label: '城建ui试验', icon: 'settings' },
]
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 24V13l11-7 11 7v11M11 24V15l5-3 5 3v9M4 24h24" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
        <div><div class="brand-title">城建UI试验</div><div class="brand-subtitle">URBAN DEVELOPMENT</div></div>
      </div>
      <div class="topbar-right"><span class="topbar-caption">城市建设 · 协同工作空间</span><span class="topbar-divider"></span><span class="avatar">城</span><span class="account">工作空间</span></div>
    </header>

    <div class="workspace">
      <aside class="sidebar">
        <div class="sidebar-label">工作空间 <span>WORKSPACE</span></div>
        <nav aria-label="主导航" class="sidebar-nav">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="nav-link" exact-active-class="active">
            <svg v-if="item.icon === 'grid'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>
            <svg v-else-if="item.icon === 'folder'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h4l2 2h6A2.5 2.5 0 0 1 20.5 9v8A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7Z"/><path d="M3.5 9.5h17"/></svg>
            <svg v-else-if="item.icon === 'chart'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19.5h16M6.5 16v-4m5 4V6m5 10V9"/><circle cx="6.5" cy="10" r="1"/><circle cx="11.5" cy="4" r="1"/><circle cx="16.5" cy="7" r="1"/></svg>
            <svg v-else-if="item.icon === 'document'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 3.5h7l4 4v11a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"/><path d="M13.5 3.5v4h4M8 12h6M8 15.5h7"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .32 1.76l.05.05-1.8 3.12-.07-.02a1.6 1.6 0 0 0-1.69.6l-.04.06h-3.6l-.03-.07a1.6 1.6 0 0 0-1.5-1.02 1.6 1.6 0 0 0-1.5 1.02l-.03.07h-3.6l-.04-.06a1.6 1.6 0 0 0-1.69-.6l-.07.02-1.8-3.12.05-.05A1.6 1.6 0 0 0 2.68 15l-.06-.03v-3.6l.06-.03a1.6 1.6 0 0 0 .68-2.78l-.05-.05 1.8-3.12.07.02a1.6 1.6 0 0 0 1.69-.6l.04-.06h3.6l.03.07a1.6 1.6 0 0 0 3 0l.03-.07h3.6l.04.06a1.6 1.6 0 0 0 1.69.6l.07-.02 1.8 3.12-.05.05a1.6 1.6 0 0 0 .68 2.78l.06.03v3.6l-.06.03Z" transform="translate(1.35 -0.35) scale(.89)"/></svg>
            <span>{{ item.label }}</span><span class="nav-arrow">›</span>
          </RouterLink>
        </nav>
        <div class="sidebar-footer"><span class="status-dot"></span>平台已就绪 <span class="version">V 1.0</span></div>
      </aside>
      <main class="main-content">
        <div class="breadcrumb"><span>工作空间</span><span class="crumb-separator">/</span><span>{{ route.meta.title }}</span></div>
        <RouterView />

      </main>
    </div>
  </div>
</template>
