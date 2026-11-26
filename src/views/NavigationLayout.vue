<template>
    <div class="cj-ui">
        <c-back-top container=".route-content" :visible-height="0" size="medium" :offset="['20px', '20px']"
            theme="light"></c-back-top>
        <div class="pilot">
            <c-space>
                <!-- 这里 container 指的是项目之前改的固定视口  -->
                <c-affix ref="affix" container=".route-content" :offset-top="10" :offset-bottom="20">
                    <c-button>固钉</c-button>
                </c-affix>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="cj-ui" size="24px" break-line>
                <c-button theme="primary">
                    <template #icon>
                        <c-icon :icon="Plus" />
                    </template>
                    新建
                </c-button>
                <c-button variant="outline">
                    <template #icon>
                        <c-icon :icon="CloudUpload" />
                    </template>
                    上传文件
                </c-button>
                <c-button theme="primary" shape="circle" aria-label="标签">
                    <template #icon>
                        <c-icon :icon="Tag" />
                    </template>
                </c-button>
                <c-button theme="primary" shape="circle" aria-label="下载">
                    <template #icon>
                        <c-icon :icon="CloudDownload" />
                    </template>
                </c-button>
                <c-button variant="outline" :icon="renderSearch">搜索</c-button>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-slider v-model="strokeWidth" :step="0.5" :min="0.5" :max="2.5" style="width: 200px" />
                <c-space break-line style="color: var(--td-brand-color)">
                    <c-icon :icon="Search" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="Plus" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="ArrowUp" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="Calendar" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="House" size="1em" :stroke-width="strokeWidth" />
                </c-space>
            </c-space>
            <c-space style="width: min(400px, 100%)">
                <c-select ref="picker" v-model="value" placeholder="请选择"
                    :popup-props="{ overlayInnerStyle: { width: `${popupWidth}px` } }">
                    <c-option v-for="item in options" :key="item.stem" :value="item.stem" class="overlay-options">
                        <div>
                            <c-icon :icon="item.icon" size="1em" />
                        </div>
                    </c-option>
                    <template #valueDisplay>
                        <c-icon :icon="selectedIcon" size="1em"
                            style="margin-right: 8px; color: var(--td-text-color-placeholder)" />{{ value }}
                    </template>
                </c-select>
            </c-space>
        </div>
        <div class="pilot">
            <c-space break-line style="white-space: nowrap">
                <li class="file-icon-demo__card">
                    <ExcelIcon :size="24" class="file-icon-demo__icon" />
                    <div class="file-icon-demo__details">
                        <span class="file-icon-demo__filename" title="excel-file.xlsx">excel-file.xlsx</span>
                        <code class="file-icon-demo__component">ExcelIcon</code>
                    </div>
                </li>
                <ul class="file-icon-demo">
                    <li v-for="file in files" :key="file.componentName" class="file-icon-demo__card">
                        <c-icon :icon="file.icon" :size="24" class="file-icon-demo__icon" />
                        <div class="file-icon-demo__details">
                            <span class="file-icon-demo__filename" :title="file.name">{{ file.name }}</span>
                            <code class="file-icon-demo__component">{{ file.componentName }}</code>
                        </div>
                    </li>
                </ul>
            </c-space>
        </div>
        <div class="pilot">
            <c-space break-line style="white-space: nowrap">
                <c-link theme="default" :prefix-icon="renderPrefixIcon" :on-click="clickLink"> 跳转链接 </c-link>
                <c-link theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
                    <template #prefix-icon>
                        <c-icon :icon="LinkIcon" size="1em" />
                    </template>
                    跳转链接
                </c-link>
                <c-link theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank"
                    @click="clickLink">
                    <template #suffix-icon>
                        <c-icon :icon="ExternalLink" size="1em" />
                    </template>
                    跳转链接
                </c-link>
                <c-link theme="warning" :suffix-icon="renderSuffixIcon" disabled> 跳转链接 </c-link>
            </c-space>
        </div>
        <div class="pilot">
            <c-typography-paragraph :ellipsis="ellipsisState1">{{ content }}</c-typography-paragraph>
        </div>
        <div class="pilot">
            <div :style="{ width: '200px' }">
                <span>正直</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>进取</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>合作</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>创新</span>
            </div>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="grid-demo">
                <span>space-around</span>
                <c-row justify="space-around">
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                </c-row>
            </c-space>
        </div>
        <div class="pilot">
            <div class="layout-demo">
                <c-layout>
                    <c-header class="layout-demo__header">Header</c-header>
                    <c-layout>
                        <c-aside class="layout-demo__aside" width="30%">Aside</c-aside>
                        <c-content class="layout-demo__content">Content</c-content>
                    </c-layout>
                    <c-footer class="layout-demo__footer">Footer</c-footer>
                </c-layout>
            </div>
        </div>
        <div class="pilot">
            <div class="space-size-scroll" role="region" aria-label="间距大小示例" tabindex="0">
                <c-slider v-model="size" class="space-size-slider" />
                <br />
                <c-space :size="size">
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                </c-space>
            </div>

        </div>
        <div class="pilot">
            <div class="anchor-demo anchor-container-demo">
                <c-anchor container="#anchor-container" @click="handleClick">
                    <c-anchor-item href="#cj-anchor-content-1" title="content-1" />
                    <c-anchor-item href="#cj-anchor-content-2" title="content-2" />
                    <c-anchor-item href="#cj-anchor-content-3" title="content-3" />
                    <c-anchor-item href="#cj-anchor-content-4" title="content-4" />
                </c-anchor>
                <c-space id="anchor-container" direction="vertical" :size="0">
                    <div id="cj-anchor-content-1" class="anchor-content-1">anchor-content-1</div>
                    <div id="cj-anchor-content-2" class="anchor-content-2">anchor-content-2</div>
                    <div id="cj-anchor-content-3" class="anchor-content-3">anchor-content-3</div>
                    <div id="cj-anchor-content-4" class="anchor-content-4">anchor-content-4</div>
                    <div id="cj-anchor-content-5" class="anchor-content-5">anchor-content-5</div>
                </c-space>
            </div>
        </div>
        <div class="pilot">
            <c-breadcrumb :separator="() => '/'" style="flex-wrap: wrap; row-gap: var(--td-comp-margin-xs)">
                <c-breadcrumb-item :to="{ path: '/' }">页面1</c-breadcrumb-item>
                <c-breadcrumb-item href="http://tdesign.tencent.com/">页面2</c-breadcrumb-item>
                <c-breadcrumb-item @click="onClickItem">页面3</c-breadcrumb-item>
            </c-breadcrumb>
            <div style="margin-top: 20px">点击计数器：{{ count }}</div>
        </div>
        <div class="pilot">
            <c-space class="tdesign-demo-dropdown">
                <c-dropdown :options="options_dropdown" :max-column-width="120" :max-height="200" @click="clickHandler">
                    <c-button variant="text">
                        下拉菜单
                        <template #suffix><c-icon :icon="ChevronDown" :size="16" class="t-icon" /></template>
                    </c-button>
                </c-dropdown>
            </c-space>
        </div>
        <div class="pilot">
            <div class="menu-demo-scroll" role="region" aria-label="平铺式侧边导航示例" tabindex="0">
                <div class="box menu-demo-content">
                    <c-menu v-model:expanded="expanded" theme="light" default-value="3-2" expand-mutex
                        :collapsed="collapsed">
                        <template #logo>
                            <img v-if="collapsed" :src="brandMark" width="40" alt="城建 UI" style="margin-inline: auto" />
                            <img v-else :src="brandWordmark" width="132" alt="城建 UI" />
                        </template>
                        <c-submenu value="3">
                            <template #icon>
                                <c-icon :icon="Mail" :size="20" class="t-icon" />
                            </template>
                            <template #title>
                                <span>消息区</span>
                            </template>
                            <c-submenu value="3-1" title="二级菜单">
                                <c-menu-item value="3-1-1"> 三级菜单内容 </c-menu-item>
                                <c-menu-item value="3-1-2"> 三级菜单内容 </c-menu-item>
                                <c-menu-item value="3-1-3"> 三级菜单内容 </c-menu-item>
                            </c-submenu>
                            <c-submenu value="3-5" title="二级菜单">
                                <c-menu-item value="3-5-1"> 三级菜单内容 </c-menu-item>
                                <c-menu-item value="3-5-2"> 三级菜单内容 </c-menu-item>
                                <c-menu-item value="3-5-3"> 三级菜单内容 </c-menu-item>
                            </c-submenu>
                            <c-menu-item value="3-2"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="3-3"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="3-4"> 二级菜单内容 </c-menu-item>
                        </c-submenu>
                        <c-menu-item value="user-circle">
                            <template #icon>
                                <c-icon :icon="CircleUser" :size="20" class="t-icon" />
                            </template>
                            个人中心
                        </c-menu-item>
                        <c-submenu value="4">
                            <template #icon>
                                <c-icon :icon="CirclePlay" :size="20" class="t-icon" />
                            </template>
                            <template #title>
                                <span>视频区</span>
                            </template>
                            <c-menu-item value="4-1"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="4-2"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="4-3"> 二级菜单内容 </c-menu-item>
                        </c-submenu>
                        <c-menu-item value="edit1">
                            <template #icon>
                                <c-icon :icon="SquarePen" :size="20" class="t-icon" />
                            </template>
                            资源编辑
                        </c-menu-item>
                        <template #operations>
                            <c-button variant="text" shape="square" @click="changeCollapsed">
                                <template #icon><c-icon :icon="List" size="1em" class="t-icon" /></template>
                            </c-button>
                        </template>
                    </c-menu>

                    <c-menu v-model:expanded="expanded2" theme="dark" default-value="2-1" style="margin-left: 50px"
                        :collapsed="collapsed2">
                        <template #logo>
                            <img v-if="collapsed2" :src="brandMarkWhite" width="40" alt="城建 UI"
                                style="margin-inline: auto" />
                            <img v-else :src="brandWordmarkWhite" width="132" alt="城建 UI" />
                        </template>
                        <c-menu-item value="item1">
                            <template #icon>
                                <c-icon :icon="LayoutDashboard" :size="20" class="t-icon" />
                            </template>
                            仪表盘
                        </c-menu-item>
                        <c-menu-item value="resource">
                            <template #icon>
                                <c-icon :icon="Server" :size="20" class="t-icon" />
                            </template>
                            资源列表
                        </c-menu-item>
                        <c-menu-item value="root">
                            <template #icon>
                                <c-icon :icon="ListTree" :size="20" class="t-icon" />
                            </template>
                            根目录
                        </c-menu-item>
                        <c-submenu value="2">
                            <template #icon>
                                <c-icon :icon="Monitor" :size="20" class="t-icon" />
                            </template>
                            <template #title>
                                <span>调度平台</span>
                            </template>
                            <c-menu-item value="2-1"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="2-2"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="2-3"> 二级菜单内容 </c-menu-item>
                        </c-submenu>
                        <c-menu-item value="precise-monitor">
                            <template #icon>
                                <c-icon :icon="Monitor" :size="20" class="t-icon" />
                            </template>
                            精准监控
                        </c-menu-item>
                        <c-submenu title="消息区" value="3" disabled>
                            <template #icon>
                                <c-icon :icon="Mail" :size="20" class="t-icon" />
                            </template>
                            <template #title>
                                <span>消息区</span>
                            </template>
                            <c-menu-item value="3-1"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="3-2"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="3-3"> 二级菜单内容 </c-menu-item>
                        </c-submenu>
                        <c-menu-item value="user-circle">
                            <template #icon>
                                <c-icon :icon="CircleUser" :size="20" class="t-icon" />
                            </template>
                            个人中心
                        </c-menu-item>
                        <c-submenu value="4">
                            <template #icon>
                                <c-icon :icon="CirclePlay" :size="20" class="t-icon" />
                            </template>
                            <template #title>
                                <span>视频区</span>
                            </template>
                            <c-menu-item value="4-1"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="4-2"> 二级菜单内容 </c-menu-item>
                            <c-menu-item value="4-3"> 二级菜单内容 </c-menu-item>
                        </c-submenu>
                        <c-menu-item value="edit1">
                            <template #icon>
                                <c-icon :icon="SquarePen" :size="20" class="t-icon" />
                            </template>
                            资源编辑
                        </c-menu-item>
                        <template #operations>
                            <c-button class="t-demo-collapse-btn" variant="text" shape="square"
                                @click="changeCollapsed2">
                                <template #icon><c-icon :icon="List" size="1em" class="t-icon" /></template>
                            </c-button>
                        </template>
                    </c-menu>
                </div>
            </div>
        </div>
        <div class="pilot">
            <c-pagination v-model="current" v-model:pageSize="pageSize" :total="100" @change="onChange"
                @page-size-change="onPageSizeChange" @current-change="onCurrentChange" />
        </div>
        <div class="pilot">
            <!-- 如果 c-step-item 没有传入 value，则使用 index 作为唯一标识 -->
            <c-steps :default-current="1">
                <c-step-item title="已完成的步骤" />
                <c-step-item title="进行中的步骤" />
                <c-step-item title="未进行的步骤" />
                <c-step-item title="未进行的步骤" />
            </c-steps>
            <br />
            <!-- 使用 options 渲染步骤条 -->
            <c-steps v-model="current_steps" :options="steps" />
        </div>
        <div class="pilot">
            <c-sticky-tool :style="{ position: 'relative' }" width="60px" :offset="[-80, -24]" @click="handleClick_qr"
                @hover="handleHover">
                <c-sticky-item label="chat">
                    <template #icon><c-icon :icon="MessageCircle" :size="24" class="t-icon" /></template>
                </c-sticky-item>
                <c-sticky-item label="add">
                    <template #icon><c-icon :icon="Plus" :size="24" class="t-icon" /></template>
                </c-sticky-item>
                <c-sticky-item label="aqcode" :trigger="qrTrigger" :icon="renderQrIcon" :popup="renderPopup"
                    :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }">
                </c-sticky-item>
            </c-sticky-tool>
        </div>
        <div class="pilot">
            <c-space>
                <c-radio-group v-model="theme" variant="default-filled">
                    <c-radio-button value="normal">常规型</c-radio-button>
                    <c-radio-button value="card">卡片型</c-radio-button>
                </c-radio-group>
            </c-space>
            <c-tabs :value="value_tabs" :theme="theme" @change="handlerChange">
                <c-tab-panel value="first">
                    <template #label> <c-icon :icon="House" size="1em" class="t-icon tabs-icon-margin" /> 首页 </template>
                    <p style="padding: 25px">
                        {{ `${theme}选项卡1内容` }}
                    </p>
                </c-tab-panel>
                <c-tab-panel value="second">
                    <template #label> <c-icon :icon="Calendar" size="1em" class="t-icon tabs-icon-margin" /> 日程
                    </template>
                    <p style="padding: 25px">
                        {{ `${theme}选项卡2内容` }}
                    </p>
                </c-tab-panel>
                <c-tab-panel value="third">
                    <template #label> <c-icon :icon="Layers" size="1em" class="t-icon tabs-icon-margin" /> 事项
                    </template>
                    <p style="padding: 25px">
                        {{ `${theme}选项卡3内容` }}
                    </p>
                </c-tab-panel>
            </c-tabs>
        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
    </div>
</template>

<script setup lang="ts">
import { h, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import {
    CButton, CIcon, CSpace, CSlider, COption, CSelect, CLink, type CLinkProps
    , CTypographyParagraph, CDivider, CCol, CRow, CAside, CContent, CFooter, CHeader, CLayout
    , CAffix, CAnchor, CAnchorItem, CBackTop, CBreadcrumb, CBreadcrumbItem, CDropdown, MessagePlugin
    , CMenu, CMenuItem, CSubmenu, CPagination, CStepItem, CSteps, CStickyItem, CStickyTool
    , CRadioButton, CRadioGroup, CTabPanel, CTabs
} from '@chengjian/foundation-web';
import {
    ExcelIcon, WordIcon, ImageIcon, PdfIcon, PptIcon,
    ZipIcon, Mp4Icon, Mp3Icon, MarkdownIcon,
} from '@chengjian/foundation-web';
import type {
    CButtonProps, TypographyEllipsis, CAnchorProps, CBreadcrumbItemProps, CDropdownProps
    , CMenuProps, CPaginationProps, CStepsProps, CStickyItemProps, CStickyToolProps, CTabsProps
    ,
} from '@chengjian/foundation-web';
// import '@chengjian/foundation-web/style.css';
import {
    createLucideIcon, CloudDownload, CloudUpload, Plus, Search, Tag, ArrowUp, Calendar
    , House, ExternalLink, Link as LinkIcon, ChevronDown, CirclePlay, CircleUser, LayoutDashboard
    , List, ListTree, Mail, Monitor, Server, SquarePen, MessageCircle, QrCode, Layers
    ,
} from '@lucide/vue';
import { glyphs, lucideName, lucideNodes } from '@chengjian/foundation-web/icon-glyphs';

import brandMark from '@chengjian/foundation-web/media/chengjian-ui-mark.png';
import brandMarkWhite from '@chengjian/foundation-web/media/chengjian-ui-mark-white.png';
import brandWordmark from '@chengjian/foundation-web/media/chengjian-ui-wordmark.png';
import brandWordmarkWhite from '@chengjian/foundation-web/media/chengjian-ui-wordmark-white.png';
import qrCodeUrl from '@chengjian/foundation-web/media/chengjian-ui-qr.png';



const renderSearch: CButtonProps['icon'] = (h) => h(CIcon, { icon: Search });
const strokeWidth = ref(2);
const options = Object.keys(glyphs).map(stem => ({
    stem,
    icon: createLucideIcon(lucideName(stem), lucideNodes(stem)),
}));
const value = ref('plus');
const picker = ref<InstanceType<typeof CSelect> | null>(null);
const popupWidth = ref(400);
const selectedIcon = computed(() => options.find(item => item.stem === value.value)?.icon ?? Plus);

let pickerObserver: ResizeObserver | undefined;
onMounted(() => {
    const control = picker.value?.$el;
    if (!(control instanceof HTMLElement)) return;
    popupWidth.value = control.offsetWidth;
    pickerObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) popupWidth.value = entry.contentRect.width;
    });
    pickerObserver.observe(control);
});
onBeforeUnmount(() => pickerObserver?.disconnect());

const renderPrefixIcon: CLinkProps['prefixIcon'] = (h) => h(CIcon, { icon: LinkIcon, size: '1em' });
const renderSuffixIcon: CLinkProps['suffixIcon'] = (h) => h(CIcon, { icon: ExternalLink, size: '1em' });
const clickLink: CLinkProps['onClick'] = () => {
    console.log('不触发');
};

const content = `TDesign was founded with the principles of open-source collaboration from the beginning. The collaboration scheme discussion, component design, and API design, including source code, are fully open within the company, garnering widespread attention from internal developers and designers. TDesign follows an equal, open, and strict policy, regardless of the participants' roles.`;
const ellipsisState1: TypographyEllipsis = {
    row: 2,
    expandable: true,
    collapsible: true,
};

const size = ref(8);

const handleClick: CAnchorProps['onClick'] = ({ e, href, title }) => {
    e.preventDefault();
    console.log('click', href, title);
};

const count = ref(0);
const onClickItem: CBreadcrumbItemProps['onClick'] = () => {
    count.value += 1;
};

const options_dropdown: CDropdownProps['options'] = [
    {
        content: '选项一',
        value: 1,
        children: [
            {
                content: '选项九',
                value: 9,
            },
        ],
    },
    {
        content: '选项二',
        value: 2,
        children: [
            {
                content: '选项五',
                value: 5,
            },
            {
                content: '选项六',
                value: 6,
            },
        ],
    },
    {
        content: '选项三',
        value: 3,
        children: [
            {
                content: '选项十',
                value: 10,
            },
        ],
    },
    {
        content: '选项四',
        value: 4,
        children: [
            {
                content: '选项十一',
                value: 11,
            },
        ],
    },
    {
        content: '选项五',
        value: 5,
        children: [
            {
                content: '选项十二',
                value: 12,
            },
        ],
    },
    {
        content: '选项六',
        value: 6,
        children: [
            {
                content: '选项十三',
                value: 13,
            },
        ],
    },
    {
        content: '选项七',
        value: 7,
    },
    {
        content: '选项八',
        value: 8,
    },
    {
        content: '选项十八',
        value: 18,
        children: [
            {
                content: '选项十四',
                value: 14,
            },
            {
                content: '选项十五',
                value: 15,
            },
            {
                content: '选项十六',
                value: 16,
                children: [
                    {
                        content: '三级选项一',
                        value: 20,
                    },
                    {
                        content: '三级选项二',
                        value: 21,
                    },
                ],
            },
            {
                content: '选项十七',
                value: 17,
            },
        ],
    },
];
const clickHandler: CDropdownProps['onClick'] = (data) => {
    MessagePlugin.success(`选中【${data.content}】`);
};

const collapsed = ref(false);
const collapsed2 = ref(false);
const changeCollapsed: CButtonProps['onClick'] = () => {
    collapsed.value = !collapsed.value;
};
const changeCollapsed2: CButtonProps['onClick'] = () => {
    collapsed2.value = !collapsed2.value;
};
const expanded = ref<CMenuProps['expanded']>(['2', '3']);
const expanded2 = ref<CMenuProps['expanded']>(['2']);

const current = ref(1);
const pageSize = ref(5);
const onPageSizeChange: CPaginationProps['onPageSizeChange'] = (size) => {
    console.log('page-size:', size);
    MessagePlugin.success(`pageSize变化为${size}`);
};
const onCurrentChange: CPaginationProps['onCurrentChange'] = (index, pageInfo) => {
    MessagePlugin.success(`转到第${index}页`);
    console.log(pageInfo);
};
const onChange: CPaginationProps['onChange'] = (pageInfo) => {
    console.log(pageInfo);
};

const steps: CStepsProps['options'] = [
    {
        title: '已完成的步骤',
        value: 'first',
        content: '点击切换步骤',
    },
    {
        title: '进行中的步骤',
        value: 'second',
        content: '点击切换步骤',
    },
    {
        title: '进行中的步骤',
        value: 'third',
        content: () => '这是进行中的步骤',
    },
    {
        title: '已完成的步骤',
        value: 'forth',
        content: '点击切换步骤',
    },
];
const current_steps = ref('third');

const handleClick_qr: CStickyToolProps['onClick'] = (context) => {
    console.log('click', context);
};
const handleHover: CStickyToolProps['onHover'] = (context) => {
    console.log('hover', context);
};
const qrTrigger = ref<'hover' | 'click'>('hover');
const renderQrIcon: CStickyItemProps['icon'] = () => {
    return h(CIcon, { icon: QrCode, size: 24, class: 't-icon' });
};
const renderPopup: CStickyItemProps['popup'] = () => {
    return h('img', { alt: '城建 UI 二维码', width: 120, height: 120, src: qrCodeUrl });
};

const value_tabs = ref<CTabsProps['value']>('first');
const theme = ref<CTabsProps['theme']>('normal');
const handlerChange: CTabsProps['onChange'] = (newValue) => {
    value_tabs.value = newValue;
};

const files = [
    //   { name: 'excel-file.xlsx', componentName: 'ExcelIcon', icon: ExcelIcon },
    { name: 'word-file.docx', componentName: 'WordIcon', icon: WordIcon },
    { name: 'image-file.png', componentName: 'ImageIcon', icon: ImageIcon },
    { name: 'pdf-file.pdf', componentName: 'PdfIcon', icon: PdfIcon },
    { name: 'ppt-file.pptx', componentName: 'PptIcon', icon: PptIcon },
    { name: 'zip-file.zip', componentName: 'ZipIcon', icon: ZipIcon },
    { name: 'video-file.mp4', componentName: 'Mp4Icon', icon: Mp4Icon },
    { name: 'audio-file.mp3', componentName: 'Mp3Icon', icon: Mp3Icon },
    { name: 'markdown-file.md', componentName: 'MarkdownIcon', icon: MarkdownIcon },
];

</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}

.grid-demo {
    width: 100%;
}

.grid-demo :deep(.t-row > .t-col > div) {
    box-sizing: border-box;
    display: grid;
    place-items: center;
    min-height: 40px;
    padding: 4px;
    background-color: var(--td-brand-color-7);
    color: var(--td-text-color-anti);
    text-align: center;
    overflow-wrap: anywhere;
}

.grid-demo :deep(.t-row > .t-col:nth-child(even) > div) {
    background-color: var(--td-brand-color-4);
    color: var(--td-text-color-primary);
}

.layout-demo {
    --layout-demo-label-color: var(--td-text-color-primary);
    box-sizing: border-box;
    display: grid;
    gap: 16px;
    padding: clamp(12px, 3vw, 32px);
    border-radius: 6px;
    background-color: var(--td-bg-color-secondarycontainer);
}

:root:is(.dark, [theme-mode="dark"]) .layout-demo {
    --layout-demo-label-color: var(--td-text-color-anti);
}

.layout-demo__header,
.layout-demo__content,
.layout-demo__footer,
.layout-demo__aside {
    box-sizing: border-box;
    display: grid;
    place-items: center;
    padding: 8px;
    color: var(--layout-demo-label-color);
    font: var(--td-font-body-large);
    text-align: center;
}

.layout-demo__header,
.layout-demo__footer {
    background-color: var(--td-brand-color-4);
}

.layout-demo__header {
    height: 56px;
}

.layout-demo__content {
    min-height: 100px;
    background-color: var(--td-brand-color-5);
}

.layout-demo__footer {
    min-height: 88px;
}

.layout-demo__aside {
    flex: none;
    background-color: var(--td-brand-color-7);
    color: var(--td-text-color-anti);
}

.space-size-scroll {
    max-width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: var(--td-scrollbar-hover-color) transparent;
}

.space-size-slider {
    box-sizing: border-box;
    padding: 4px 8px 0;
}

.anchor-container-demo {
    display: flex;
}

#anchor-container {
    flex-grow: 1;
    height: 200px;
    overflow: auto;
}

#anchor-container div {
    text-align: center;
    font-size: 22px;
    line-height: 100px;
}

#anchor-container .anchor-content-1 {
    background: #ecf2fe;
}

#anchor-container .anchor-content-2 {
    background: #d4e3fc;
}

#anchor-container .anchor-content-3 {
    background: #bbd3fb;
}

#anchor-container .anchor-content-4 {
    background: #96bbf8;
}

#anchor-container .anchor-content-5 {
    background: #699ef5;
}

.t-demo-collapse-btn {
    color: #fff;
}

.file-icon-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 168px), 1fr));
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.file-icon-demo__card {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 8px 12px;
    border: 1px solid var(--td-bg-color-component, #e7e7e7);
    border-radius: 6px;
    background: var(--td-bg-color-secondarycontainer, #f3f3f3);
}

.file-icon-demo__icon {
    flex: none;
}

.file-icon-demo__details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    overflow-wrap: anywhere;
}

.file-icon-demo__filename {
    overflow: hidden;
    color: var(--td-text-color-primary, #1d2129);
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.file-icon-demo__component {
    color: var(--td-text-color-secondary, #4e5969);
    font-size: 12px;
    line-height: 16px;
}
</style>

<style>
.overlay-options {
    display: inline-block;
    font-size: 20px;
}
</style>