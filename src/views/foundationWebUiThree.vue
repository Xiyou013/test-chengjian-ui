<template>
    <div class="cj-ui">
        <div class="pilot">
            <c-space :size="40">
                <c-avatar :icon="icon" />
                <c-avatar :image="wordmark" alt="城建 UI" :image-props="{ fit: 'contain' }"
                    :hide-on-load-failed="false" />
                <c-avatar>W</c-avatar>
            </c-space>
        </div>
        <div class="pilot">
            <c-space size="large">
                <c-badge shape="circle" count="2">
                    <div class="badge-block" />
                </c-badge>
                <c-badge shape="round" count="99">
                    <div class="badge-block" />
                </c-badge>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" size="large" style="max-width: 100%">
                <c-space size="small" align="center" break-line>
                    <label>请选择风格：</label>
                    <c-select v-model="theme">
                        <c-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
                    </c-select>
                    <c-button theme="primary" @click="toCurrent()"> 今天（当前高亮日期） </c-button>
                </c-space>
                <div>
                    <label>日期补零：</label>
                    <c-switch v-model="fillWithZero" size="large" />
                </div>
                <c-calendar ref="myCalendar" :theme="theme" :is-show-weekend-default="true"
                    :fill-with-zero="fillWithZero" />
            </c-space>
        </div>
        <div class="pilot">
            <c-card :title="title" hover-shadow style="width: min(400px, 100%)">
                {{ infoMessage }}
                <template #actions>
                    <c-link theme="primary" hover="color" href="#" @click.prevent="clickHandler">操作</c-link>
                </template>
            </c-card>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-collapse :default-value="[1]" @change="handlePanelChange">
                    <c-collapse-panel header="这是一个折叠标题">
                        这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                    </c-collapse-panel>
                    <c-collapse-panel destroy-on-collapse header="设置默认展开项">
                        这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                    </c-collapse-panel>
                    <c-collapse-panel header="自定义折叠面板内容">
                        <div class="tdesign-demo-block-column" style="width: 100%">
                            <c-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" />

                            <c-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

                            <c-tag-input :default-value="tags3" label="UnControlled: " clearable />
                        </div>
                    </c-collapse-panel>
                    <c-collapse-panel header="嵌套折叠面板">
                        <c-collapse default-expand-all>
                            <c-collapse-panel header="子面板1"> 这是子面板1 </c-collapse-panel>
                            <c-collapse-panel header="子面板2"> 这是子面板2 </c-collapse-panel>
                            <c-collapse-panel header="子面板3"> 这是子面板3 </c-collapse-panel>
                            <c-collapse-panel header="子面板4"> 这是子面板4 </c-collapse-panel>
                        </c-collapse>
                    </c-collapse-panel>
                </c-collapse>

                <p>当前展开项:{{ currentItem }}</p>
            </c-space>
        </div>
        <div class="pilot">
            <section class="comment-operation-demo__item">
                <h3>Slot</h3>
                <c-comment v-bind="commentProps">
                    <template #actions>
                        <c-space :size="6" align="center">
                            <c-icon :icon="ThumbsUp" class="t-icon t-icon-thumb-up comment-action-icon" size="1em" />
                            <span>6</span>
                        </c-space>
                        <c-space :size="6" align="center">
                            <c-icon :icon="MessageCircle" class="t-icon t-icon-chat comment-action-icon" size="1em" />
                            <span>回复</span>
                        </c-space>
                    </template>
                </c-comment>
            </section>
        </div>
        <div class="pilot">
            <c-descriptions title="Shipping address" bordered :column="3" style="min-width: 54em">
                <c-descriptions-item label="Name">ChengJian</c-descriptions-item>
                <c-descriptions-item label="Telephone Number">139****0609</c-descriptions-item>
                <c-descriptions-item label="Area">China Tencent Headquarters</c-descriptions-item>
                <c-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</c-descriptions-item>
            </c-descriptions>
        </div>
        <div class="pilot">
            <c-row :gutter="40">
                <c-col>
                    <c-empty type="empty"></c-empty>
                </c-col>
                <c-col>
                    <c-empty type="maintenance"></c-empty>
                </c-col>
                <c-col>
                    <c-empty type="network-error"></c-empty>
                </c-col>
                <c-col>
                    <c-empty type="success"></c-empty>
                </c-col>
                <c-col>
                    <c-empty type="fail"></c-empty>
                </c-col>
            </c-row>
        </div>
        <div class="pilot">
            <h3 :style="{ 'margin-bottom': '15px' }">加载中的图片</h3>
            <div class="image-states">
                <c-space direction="vertical">
                    <span>默认占位</span>
                    <component :is="ReplayPlaceholder" v-if="loadingPending" />
                    <c-image v-else :src="illustration" :style="imageStyle" />
                    <c-button variant="outline" :icon="renderIcon" @click="replayLoading">
                        重演 loading
                    </c-button>
                </c-space>
                <c-space direction="vertical">
                    <span>自定义占位</span>
                    <component :is="ReplayPlaceholder" v-if="loadingPending"><c-icon :icon="ImageOff"
                            class="t-icon t-icon-image-error" :size="24" /></component>
                    <c-image v-else :src="illustration" :style="imageStyle" :loading="CustomIcon" />
                </c-space>
            </div>
        </div>
        <div class="pilot">
            <div class="tdesign-demo-image-viewer__base">
                <c-image-viewer :images="[wordmark]" :z-index="10000"></c-image-viewer>
            </div>
        </div>
        <div class="pilot">
            <c-space direction="vertical" size="large">
                <c-list :split="true">
                    <c-list-item>
                        <c-list-item-meta :image="wordmark" title="列表标题" description="列表内容的描述性文字" />
                    </c-list-item>
                    <c-list-item>
                        <c-list-item-meta :image="wordmark" title="列表标题" description="列表内容的描述性文字" />
                    </c-list-item>
                    <c-list-item>
                        <c-list-item-meta :image="wordmark" title="列表标题" description="列表内容的描述性文字" />
                    </c-list-item>
                </c-list>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="loading-attach-demo">
                <div id="alice" class="loading-attach-demo__title">Hello, I'm Alice. I'm going to be a front-end
                    developer.
                </div>
                <c-loading attach="#alice" size="small" :loading="loading"></c-loading>

                <c-switch v-model="loading" :custom-value="[true, false]" :label="['显示', '隐藏']" />
            </c-space>
        </div>
        <div class="pilot">
            <h3>动态更新示例</h3>
            <c-space direction="vertical" size="small" class="t-progress-demo-width">
                <div class="t-progress-demo-margin">进度正常更新</div>
                <c-progress :percentage="percent" />
            </c-space>
            <c-space align="center" direction="vertical" size="small" class="t-progress-demo-inner">
                <div class="t-progress-demo-margin">默认样式</div>
                <c-progress theme="circle" :percentage="percent" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="c-space-style" direction="vertical" align="center">
                <c-qrcode :value="text || '-'" />
                <c-input v-model="text" placeholder="-" />
            </c-space>
        </div>
        <div class="pilot">
            <section class="t-skeleton-demo-card">
                <div class="t-skeleton-demo-header">组合成网页效果</div>
                <c-skeleton :row-col="rowCol" class="t-skeleton-demo-page"></c-skeleton>
            </section>
        </div>
        <div class="pilot">
            <c-space :size="32" break-line>
                <c-statistic title="Total Assets" :value="56.32" unit="%">
                    <template #prefix>
                        <c-icon :icon="Monitor" class="t-icon t-icon-control-platform" size="1em" />
                    </template>
                </c-statistic>
                <c-statistic title="Total Assets" :value="176059" prefix="$" unit="%" trend="increase" />

                <c-statistic title="Total Assets" :value="62.58" unit="%">
                    <template #suffix>
                        <c-icon :icon="ChevronDown" class="t-icon t-icon-arrow-triangle-down-filled" size="1em"
                            style="color: #ee4d38" />
                    </template>
                </c-statistic>
            </c-space>
        </div>
        <div class="pilot">
            <c-swiper class="tdesign-demo-block--swiper" :duration="300" :interval="2000">
                <c-swiper-item v-for="item in 6" :key="item">
                    <div class="demo-item">{{ item }}</div>
                </c-swiper-item>
            </c-swiper>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="table-base-demo" style="width: 100%; min-width: 0">
                <!-- 按钮操作区域 -->
                <c-radio-group v-model="size" variant="default-filled">
                    <c-radio-button value="small">小尺寸</c-radio-button>
                    <c-radio-button value="medium">中尺寸</c-radio-button>
                    <c-radio-button value="large">大尺寸</c-radio-button>
                </c-radio-group>

                <c-space break-line>
                    <c-checkbox v-model="stripe"> 显示斑马纹 </c-checkbox>
                    <c-checkbox v-model="bordered"> 显示表格边框 </c-checkbox>
                    <c-checkbox v-model="hover"> 显示悬浮效果 </c-checkbox>
                    <c-checkbox v-model="tableLayout"> 宽度自适应 </c-checkbox>
                    <c-checkbox v-model="showHeader"> 显示表头 </c-checkbox>
                </c-space>

                <!-- 当数据为空需要占位时，会显示 cellEmptyContent -->
                <c-table row-key="index" :data="data" :columns="columns" :stripe="stripe" :bordered="bordered"
                    :hover="hover" :table-layout="tableLayout ? 'auto' : 'fixed'" :size="size" :pagination="pagination"
                    :show-header="showHeader" cell-empty-content="-" resizable lazy-load @row-click="handleRowClick">
                </c-table>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="tag-demo" break-line>
                <c-tag variant="light-outline">灰标签</c-tag>
                <c-tag theme="primary" variant="light-outline">
                    <template #icon>
                        <c-icon :icon="Tag" class="t-icon t-icon-discount" size="1em" />
                    </template>
                    插槽图标
                </c-tag>
                <c-tag theme="success" variant="light-outline" closable>标签二</c-tag>
                <c-tag theme="warning" variant="light-outline">标签三</c-tag>
                <c-tag theme="danger" variant="light-outline">标签四</c-tag>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="timeline-demo">
                <c-space align="center" break-line>
                    <h3>时间轴方向</h3>
                    <c-radio-group v-model="layout" variant="default-filled">
                        <c-radio-button value="vertical">垂直时间轴</c-radio-button>
                        <c-radio-button value="horizontal">水平时间轴</c-radio-button>
                    </c-radio-group>
                </c-space>
                <div :key="layout" class="timeline-demo-scroll" role="region" aria-label="基础时间轴预览" tabindex="0">
                    <c-timeline class="timeline-demo-content" :layout="layout" mode="same">
                        <c-timeline-item v-for="(item, index) in options_time" :key="index" :label="item.label"
                            dot-color="primary">
                            {{ item.content }}
                        </c-timeline-item>
                    </c-timeline>
                </div>
            </c-space>
        </div>
        <div class="pilot">
            <c-space break-line>
                <c-tooltip content="文字提示仅展示文本内容">
                    <c-button theme="default">default</c-button>
                </c-tooltip>
                <c-tooltip content="文字提示仅展示文本内容" theme="primary">
                    <c-button theme="primary">primary</c-button>
                </c-tooltip>
                <c-tooltip content="文字提示仅展示文本内容" theme="success">
                    <c-button theme="success">success</c-button>
                </c-tooltip>
                <c-tooltip content="文字提示仅展示文本内容" theme="danger">
                    <c-button theme="danger">danger</c-button>
                </c-tooltip>
                <c-tooltip content="文字提示仅展示文本内容" theme="warning">
                    <c-button theme="warning">warning</c-button>
                </c-tooltip>
                <c-tooltip content="文字提示仅展示文本内容" theme="light">
                    <c-button variant="outline">light</c-button>
                </c-tooltip>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-tree :data="items" activable hover transition />
            </c-space>
        </div>
        <div class="pilot">
            <c-watermark :watermark-content="[
                { text: '水印文本', fontColor: 'black' },
                { url: wordmark },
            ]" :line-space="24" :x="100" :y="120" :width="159" :height="53" :alpha="0.3">
                <div style="height: 300px" />
            </c-watermark>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <h3>未评分状态</h3>
                <c-rate />
                <h3>满分状态</h3>
                <c-rate :default-value="5" />
                <h3>半星状态</h3>
                <c-rate :default-value="4.5" allow-half />
            </c-space>
        </div>
    </div>
</template>

<script setup lang="tsx">
import { computed, h, ref, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
import type { VNode } from 'vue';
import {
    User, MessageCircle, ThumbsUp, Image, ImageOff, RotateCw, ChevronDown, Monitor
    , CircleAlert, CircleCheck, CircleX, Tag
} from '@lucide/vue';
import {
    CAvatar, CIcon, CSpace, CBadge, CButton, CCalendar, COption, CSelect, CSwitch
    , CCard, CLink, MessagePlugin, CCollapse, CCollapsePanel, CTagInput, CComment
    , CDescriptions, CDescriptionsItem, CCol, CEmpty, CRow, CImage, CImageViewer
    , CList, CListItem, CListItemMeta, CLoading, CProgress, CQrcode, CInput, CSkeleton
    , CStatistic, CSwiper, CSwiperItem, CCheckbox, CRadioButton, CRadioGroup, CTable, CTag
    , CTimeline, CTimelineItem, CTooltip, CTree, CWatermark, CRate
} from '@chengjian/foundation-web';
import type {
    CAvatarProps, CCalendarProps, CalendarInstanceFunctions, CCardProps, CCollapseProps, CTagInputProps
    , CCommentProps, CButtonProps, CSkeletonProps, CTagProps, CTableProps, CTimelineProps
    , CTreeProps
} from '@chengjian/foundation-web';
import type { FunctionalComponent } from 'vue';
import illustration from '@chengjian/foundation-web/media/city-illustration.png';
import wordmark from '@chengjian/foundation-web/media/autocomplete-wordmark.png';
import '@chengjian/foundation-web/internal/style/web/components/swiper/_docs.less';

const icon = computed<CAvatarProps['icon']>(() => () => h(CIcon, { icon: User, class: 't-icon t-icon-user', size: '1em' }));

const options = [
    {
        value: 'full',
        label: '全屏风格',
    },
    {
        value: 'card',
        label: '卡片风格',
    },
];
const theme = ref<CCalendarProps['theme']>('card');
const myCalendar = ref<Required<CalendarInstanceFunctions>>();
const fillWithZero = ref(true);
const toCurrent = () => {
    if (!myCalendar.value) return;
    myCalendar.value.toCurrent();
    const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
    MessagePlugin.success(`已定位到今天（${today}）`);
};

const clickHandler = () => {
    MessagePlugin.success('操作');
};
const title: CCardProps['title'] = '标题';
const infoMessage = `卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。`;

const currentItem = ref<number[]>([1]);
const tags1 = ref(['Vue', 'React']);
const tags2 = ref<CTagInputProps['value']>(['Vue', 'React']);
const tags3 = ref<CTagInputProps['defaultValue']>(['Vue', 'React']);
const handlePanelChange: CCollapseProps['onChange'] = (val) => {
    currentItem.value = val.map((n) => Number(n));
};
const onTagInputEnter: CTagInputProps['onEnter'] = (val, context) => {
    console.log(val, context);
};
const onChange: CTagInputProps['onChange'] = (val, context) => {
    console.log(val, context);
    tags2.value = val;
};
const onPaste: CTagInputProps['onPaste'] = (context) => {
    console.log(context);
};

const commentProps = {
    avatar: wordmark,
    author: '评论作者名',
    datetime: '今天16:38',
    content: '这里是评论者写的评论内容。',
};

const imageStyle = { width: '100%', minHeight: 0, aspectRatio: '284 / 160' };
function useReplay() {
    const pending = ref(false);
    let timer: number;
    function replay() {
        window.clearTimeout(timer);
        pending.value = true;
        timer = window.setTimeout(() => {
            pending.value = false;
        }, 2500);
    }
    onBeforeUnmount(() => window.clearTimeout(timer));
    return { pending, replay };
}
const { pending: loadingPending, replay: replayLoading } = useReplay();
const CustomIcon = () => h(CIcon, { icon: ImageOff, class: 't-icon t-icon-image-error', size: 24 });
const ReplayPlaceholder: FunctionalComponent = (_, { slots }) =>
    h('div', { class: 't-image__wrapper', style: imageStyle }, [
        h('div', { class: 't-image__loading' }, slots.default?.() ?? [
            h(CSpace, { direction: 'vertical', size: 8, align: 'center' }, () => [
                h(CIcon, { icon: Image, class: 't-icon t-icon-image', size: '1em' }),
                h('span', '图片加载中'),
            ]),
        ]),
    ]);
const renderIcon: CButtonProps['icon'] = () => {
    return h(CIcon, { icon: RotateCw, class: 't-icon t-icon-refresh', size: '1em' });
};

const loading = ref(false);

const percent = ref(10);
let timer: number | undefined;
onMounted(() => {
    timer = window.setInterval(() => {
        percent.value = (percent.value % 100) + 10;
    }, 1000);
});
onUnmounted(() => {
    if (timer) clearInterval(timer);
});

const text = ref('123456');

const rowCol: CSkeletonProps['rowCol'] = [
    [1, 1, 1].map(() => ({
        type: 'rect',
        content: 'image',
        width: '33%',
        height: '180px',
    })),
    [
        {
            type: 'circle',
            size: '50px',
        },
        {
            type: 'rect',
            margin: '20px 0',
            width: '80%',
            height: '30px',
        },
        {
            type: 'rect',
            marginLeft: '20px',
            width: '80px',
            height: '30px',
            content: '确定',
        },
    ],
    1,
    1,
    {
        type: 'text',
        width: '70%',
        margin: '0 0 16px 0',
    },
    {
        type: 'rect',
        width: '100%',
        height: '300px',
        content: () => (
            <div class="row-col-content">
                <h3 class="row-col-content__header">标题</h3>
                <section class="row-col-content__content"> 内容</section>
            </div>
        ),
    },
];

const statusNameListMap: Record<number, { label: string; theme: CTagProps['theme']; icon: VNode }> = {
    0: {
        label: '审批通过',
        theme: 'success',
        icon: h(CIcon, { icon: CircleCheck, class: 't-icon t-icon-check-circle-filled', size: '1em' }),
    },
    1: {
        label: '审批失败',
        theme: 'danger',
        icon: h(CIcon, { icon: CircleX, class: 't-icon t-icon-close-circle-filled', size: '1em' }),
    },
    2: {
        label: '审批过期',
        theme: 'warning',
        icon: h(CIcon, { icon: CircleAlert, class: 't-icon t-icon-error-circle-filled', size: '1em' }),
    },
};
const data: CTableProps['data'] = [];
const total = 28;
for (let i = 0; i < total; i++) {
    data.push({
        index: i + 1,
        applicant: ['贾明', '张三', '王芳'][i % 3],
        status: i % 3,
        channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
        detail: {
            email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
        },
        matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
        time: [2, 3, 1, 4][i % 4],
        createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
}
const stripe = ref(true);
const bordered = ref(true);
const hover = ref(false);
const tableLayout = ref(false);
const size = ref<NonNullable<CTableProps['size']>>('medium');
const showHeader = ref(true);
const columns = ref<NonNullable<CTableProps['columns']>>([
    {
        colKey: 'applicant',
        title: '申请人',
        width: '100',
    },
    {
        colKey: 'status',
        title: '申请状态',
        cell: (h, { row }) => {
            const status = statusNameListMap[row.status];
            // 状态不存在时，显示占位符，避免页面报错
            if (!status) return '-';
            return h(CTag, { shape: 'round', theme: status.theme, variant: 'light-outline' }, () => [
                status.icon,
                status.label,
            ]);
        },
    },
    {
        colKey: 'channel',
        title: '签署方式',
    },
    {
        colKey: 'detail.email',
        title: '邮箱地址',
        ellipsis: true,
    },
    {
        colKey: 'createTime',
        title: '申请时间',
    },
]);
const handleRowClick: CTableProps['onRowClick'] = (e) => {
    console.log(e);
};
const pagination: CTableProps['pagination'] = {
    defaultCurrent: 1,
    defaultPageSize: 5,
    total,
};

const layout = ref<NonNullable<CTimelineProps['layout']>>('vertical');
const options_time = [
    {
        label: '2022-01-01',
        content: '事件一',
    },
    {
        label: '2022-02-01',
        content: '事件二',
    },
    {
        label: '2022-03-01',
        content: '事件三',
    },
    {
        label: '2022-04-01',
        content: '事件四',
    },
];

const items = ref<NonNullable<CTreeProps['data']>>([
    {
        label: '第一段',
        children: [
            {
                label: '第二段',
            },
            {
                label: '第二段',
            },
        ],
    },
    {
        label: '第一段',
        children: [
            {
                label: '第二段',
            },
            {
                label: '第二段',
            },
        ],
    },
    {
        label: '第一段',
        children: [
            {
                label: '第二段',
            },
            {
                label: '第二段',
            },
        ],
    },
    {
        label: '第一段',
        children: [
            {
                label: '第二段',
            },
            {
                label: '第二段',
            },
        ],
    },
]);

</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}

.c-space-style {
    width: 400px;
    height: auto;
}

.badge-block {
    width: 40px;
    height: 40px;
    background: #eeeeee;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    border-radius: 3px;
}

.comment-operation-demo__item+.comment-operation-demo__item {
    margin-top: 24px;
}

:deep(.t-comment__avatar-image) {
    object-fit: contain;
}

.image-states {
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 284px));
    gap: 16px;
}

.tdesign-demo-image-viewer__base {
    width: 160px;
    height: 160px;
    margin: 10px;
    border: 4px solid var(--td-bg-color-secondarycontainer);
    border-radius: var(--td-radius-medium);
}

:deep(.t-list-item__meta-avatar img) {
    object-fit: contain;
}

.loading-attach-demo {
    width: min(360px, 100%);
}

.loading-attach-demo__title {
    /** `position: relative` is required as a parent node */
    position: relative;
    text-align: center;
}

.t-progress-demo-width {
    width: 400px;
}
</style>