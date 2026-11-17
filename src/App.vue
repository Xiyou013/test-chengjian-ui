<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppIcon from './components/AppIcon.vue'
import { routes } from './router'

const route = useRoute()
const navigation = routes.flatMap((item) => {
  if (!item.meta?.menu) return []
  const children = (item.children ?? []).flatMap((child) =>
    child.meta?.menu
      ? [{ path: child.path.startsWith('/') ? child.path : `${item.path.replace(/\/$/, '')}/${child.path}`, ...child.meta.menu }]
      : [],
  )
  return [{ path: item.path, ...item.meta.menu, children }]
})

const expandedMenus = ref<string[]>([])
function toggleMenu(path: string) {
  expandedMenus.value = expandedMenus.value.includes(path)
    ? expandedMenus.value.filter((item) => item !== path)
    : [...expandedMenus.value, path]
}

watch(() => route.path, () => {
  for (const item of navigation) {
    if (item.children.some((child) => child.path === route.path) && !expandedMenus.value.includes(item.path)) {
      expandedMenus.value.push(item.path)
    }
  }
}, { immediate: true })
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
          <div v-for="(item, index) in navigation" :key="item.path" class="nav-group">
            <button v-if="item.children.length" type="button" class="nav-link nav-group-toggle"
              :class="{ 'group-active': item.children.some((child) => child.path === route.path) }"
              :aria-expanded="expandedMenus.includes(item.path)" :aria-controls="`submenu-${index}`"
              @click="toggleMenu(item.path)">
              <AppIcon :icon="item.icon" size="var(--sidebar-icon-size)" />
              <span>{{ item.label }}</span><span class="group-arrow" aria-hidden="true">{{ expandedMenus.includes(item.path) ? '⌄' : '›' }}</span>
            </button>
            <RouterLink v-else :to="item.path" class="nav-link" exact-active-class="active">
              <AppIcon :icon="item.icon" size="var(--sidebar-icon-size)" />
              <span>{{ item.label }}</span><span class="nav-arrow">›</span>
            </RouterLink>
            <div v-if="item.children.length" v-show="expandedMenus.includes(item.path)" :id="`submenu-${index}`" class="submenu">
              <RouterLink v-for="child in item.children" :key="child.path" :to="child.path" class="nav-link submenu-link" exact-active-class="active">
                <span class="submenu-dot" aria-hidden="true"></span><span>{{ child.label }}</span>
              </RouterLink>
            </div>
          </div>
        </nav>
        <div class="sidebar-footer"><span class="status-dot"></span>平台已就绪 <span class="version">V 1.0</span></div>
      </aside>
      <main class="main-content">
        <div class="breadcrumb"><span>工作空间</span><template v-for="matched in route.matched" :key="matched.path"><template v-if="matched.meta.title"><span class="crumb-separator">/</span><span>{{ matched.meta.title }}</span></template></template></div>
        <div class="route-content" tabindex="0" role="region" aria-label="页面内容">
          <RouterView />
        </div>

      </main>
    </div>
  </div>
</template>
