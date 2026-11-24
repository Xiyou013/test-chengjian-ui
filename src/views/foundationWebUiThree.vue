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

        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, h, ref, onBeforeUnmount } from 'vue';
import { User, MessageCircle, ThumbsUp, Image, ImageOff, RotateCw } from '@lucide/vue';
import {
    CAvatar, CIcon, CSpace, CBadge, CButton, CCalendar, COption, CSelect, CSwitch
    , CCard, CLink, MessagePlugin, CCollapse, CCollapsePanel, CTagInput, CComment
    , CDescriptions, CDescriptionsItem, CCol, CEmpty, CRow, CImage, CImageViewer
    , CList, CListItem, CListItemMeta, CLoading,
} from '@chengjian/foundation-web';
import type {
    CAvatarProps, CCalendarProps, CalendarInstanceFunctions, CCardProps, CCollapseProps, CTagInputProps
    , CCommentProps, CButtonProps
} from '@chengjian/foundation-web';
import type { FunctionalComponent } from 'vue';
import illustration from '@chengjian/foundation-web/media/city-illustration.png';
import wordmark from '@chengjian/foundation-web/media/autocomplete-wordmark.png';

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

</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
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
</style>