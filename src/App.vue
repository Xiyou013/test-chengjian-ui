<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppIcon from './components/AppIcon.vue'
import { routes } from './router'

const route = useRoute()
const navigation = routes.flatMap((item) =>
  item.meta?.menu ? [{ path: item.path, ...item.meta.menu }] : [],
)
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
          <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" class="nav-link" exact-active-class="active">
            <AppIcon :icon="item.icon" size="var(--sidebar-icon-size)" />
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
