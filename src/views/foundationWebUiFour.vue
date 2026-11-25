<template>
    <div class="cj-ui">
        <div class="pilot">
            <c-space direction="vertical">
                <c-alert theme="success" message="这是一条成功的消息提示" />
                <c-alert theme="info" :message="infoMessage" />
                <c-alert theme="warning">
                    <template #message>这是一条警示信息</template>
                </c-alert>
                <c-alert theme="error">高危操作/出错信息提示</c-alert>
            </c-space>
        </div>
        <div class="pilot">
            <c-space>
                <c-button theme="primary" @click="onClick">基础确认对话框</c-button>
                <c-dialog v-model:visible="visible" header="对话框标题" width="max(40%, min(480px, calc(100vw - 32px)))"
                    :confirm-on-enter="true" :on-cancel="onCancel" :on-esc-keydown="onEscKeydown"
                    :on-close-btn-click="onCloseBtnClick" :on-overlay-click="onOverlayClick" :on-close="close"
                    :on-confirm="onConfirmAnother">
                    <c-space class="dialog-base-content" direction="vertical">
                        <div>
                            <p>这是弹框内容</p>
                            <p>This is Dialog Content</p>
                        </div>
                        <c-pagination class="dialog-base-pagination" v-model="current" v-model:pageSize="pageSize"
                            :total="30" />
                    </c-space>
                </c-dialog>
            </c-space>
        </div>
        <div class="pilot">
            <c-drawer v-model:visible="visible_drawer" header="标题名称" :on-confirm="handleClose" @close="handleClose">
                <c-space direction="vertical" size="large" style="width: 100%">
                    <c-space direction="vertical" :size="0" style="width: 100%">
                        <span>标签 A</span>
                        <c-input />
                    </c-space>
                    <c-space direction="vertical" :size="0" style="width: 100%">
                        <span>标签 B</span>
                        <c-input />
                    </c-space>
                    <c-space direction="vertical" :size="0" style="width: 100%">
                        <span>标签 C</span>
                        <c-input />
                    </c-space>
                </c-space>
            </c-drawer>
            <c-button variant="outline" @click="handleClick">打开抽屉</c-button>
        </div>
        <div class="pilot">
            <div class="highlight-content-demo">
                <c-button @click="current_guide = 0">查看自定义高亮</c-button>
                <div class="highlight-targets">
                    <div ref="todo" class="highlight-target">
                        <strong>待办事项</strong>
                        <p>3 项任务待处理</p>
                    </div>
                    <div ref="progress" class="highlight-target">
                        <strong>处理进度</strong>
                        <p>今日已完成 8 项任务</p>
                    </div>
                </div>
                <c-guide v-model="current_guide" :steps="steps" />
            </div>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-message theme="info">用于表示普通操作信息提示</c-message>
                <c-message theme="success">用于表示操作顺利达成</c-message>
                <c-message theme="warning">用于表示操作引起一定后果</c-message>
                <c-message theme="error">用于表示操作引起严重的后果</c-message>
                <c-message theme="question">用于帮助用户操作的信息提示</c-message>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" style="max-width: 100%">
                <c-notification theme="info" title="普通通知" content="这是一条普通的消息通知" :close-btn="true" />
                <c-notification theme="error" title="危险通知" content="这是一条危险的消息通知" :footer="footer" />
                <c-notification theme="warning" title="告警通知" content="这是一条告警的消息通知">
                    <template #title>
                        <div>消息通知标题 <small>消息通知副标题</small></div>
                    </template>
                    <template #footer>
                        <div class="t-notification__detail">
                            <c-button class="t-notification__detail-item" theme="default" variant="text">取消</c-button>
                            <c-button class="t-notification__detail-item" theme="primary" variant="text"
                                @click="remind">
                                稍后提醒我(10s)
                            </c-button>
                        </div>
                    </template>
                </c-notification>
                <c-notification theme="success" title="成功通知" content="这是一条成功的消息通知" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" :size="50">
                <c-space class="popconfirm-icon-row" :size="[24, 'var(--popconfirm-icon-gap, 180px)']" break-line>
                    <c-popconfirm v-model="visible1">
                        <template #content>
                            <p class="title">带描述的气泡确认框文字按钮</p>
                            <p class="describe">带描述的气泡确认框在主要说明之外增加了操作相关的详细描述</p>
                        </template>
                        <c-button>默认</c-button>
                    </c-popconfirm>

                    <c-popconfirm v-model="visible2" theme="warning" content="事件通知类型偏向于提示">
                        <c-button theme="warning">警告</c-button>
                    </c-popconfirm>

                    <c-popconfirm v-model="visible3" theme="danger" content="事件通知类型偏向于高危提醒">
                        <c-button theme="danger">危险</c-button>
                    </c-popconfirm>
                </c-space>

                <c-space class="popconfirm-custom-icon-row" :size="[24, 'var(--popconfirm-custom-icon-gap, 80px)']"
                    break-line>
                    <c-popconfirm content="基础气泡确认框文案示意文字按钮" :popup-props="{ placement: 'bottom' }">
                        <template #icon>
                            <c-icon :icon="Eye" class="t-icon t-icon-browse" size="1em" style="color: #0052d9" />
                        </template>
                        <c-button variant="outline">自定义图标（插槽）</c-button>
                    </c-popconfirm>

                    <c-popconfirm content="基础气泡确认框文案示意文字按钮" :icon="customIcon" :popup-props="{ placement: 'bottom' }">
                        <c-button variant="outline">自定义图标（属性）</c-button>
                    </c-popconfirm>
                </c-space>
            </c-space>
        </div>
        <div class="pilot">
            <c-space size="large" break-line>
                <!-- 共三种方式自定义浮层内容 -->

                <!-- 使用 content 属性渲染浮层内容 -->
                <c-popup content="可以在浮层内容中描述禁用原因">
                    <div><c-button variant="outline" disabled>禁用状态</c-button></div>
                </c-popup>

                <!-- 使用 content 插槽渲染浮层内容 -->
                <!-- slot="content" 写法不建议使用，请使用 #content 写法 -->
                <c-popup>
                    <c-button variant="outline">触发元素</c-button>
                    <!-- <div slot="content">触发元素是指触发浮层内容显示的元素</div> -->
                    <template #content>
                        <div>触发元素是指触发浮层内容显示的元素</div>
                    </template>
                </c-popup>

                <!-- 使用 content 渲染函数输出浮层内容 -->
                <c-popup :content="renderPopupContent">
                    <c-button variant="outline">浮层内容</c-button>
                </c-popup>
            </c-space>
        </div>
        <div class="pilot">

        </div>
    </div>
</template>

<script setup lang="tsx">
import { h, ref, watch } from 'vue';
import { Eye } from '@lucide/vue';
import {
    CAlert, CSpace, CButton, CDialog, CPagination, CDrawer, CInput, CGuide, CMessage
    , CNotification, CPopconfirm, CIcon, CPopup
} from '@chengjian/foundation-web';
import type {
    CAlertProps, CButtonProps, CDialogProps, CDrawerProps, CGuideProps, CNotificationProps
    , CPopconfirmProps
} from '@chengjian/foundation-web';

const infoMessage: CAlertProps['message'] = () => <div>这是一条普通的消息提示 </div>;
const visible = ref(false);
const current = ref(1);
const pageSize = ref(10);
const onClick: CButtonProps['onClick'] = (context) => {
    console.log('点击了确认按钮，弹出弹窗', context);
    visible.value = true;
};
const onConfirmAnother: CDialogProps['onConfirm'] = (context) => {
    console.log('点击了确认按钮', context);
    visible.value = false;
};
const close: CDialogProps['onClose'] = (context) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
};
const onCancel: CDialogProps['onCancel'] = (context) => {
    console.log('点击了取消按钮', context);
};
const onEscKeydown: CDialogProps['onEscKeydown'] = (context) => {
    console.log('按下了ESC', context);
};
const onCloseBtnClick: CDialogProps['onCloseBtnClick'] = (context) => {
    console.log('点击了关闭按钮', context);
};
const onOverlayClick: CDialogProps['onOverlayClick'] = (context) => {
    console.log('点击了蒙层', context);
};

const visible_drawer = ref(false);
const handleClick: CButtonProps['onClick'] = () => {
    visible_drawer.value = true;
};
const handleClose = () => {
    visible_drawer.value = false;
};

const current_guide = ref(-1);
const todo = ref<HTMLElement>();
const progress = ref<HTMLElement>();
const highlightSize = ref({ width: 0, height: 0 });
watch(current_guide, (step, _, onCleanup) => {
    const target = [todo.value, progress.value][step];
    if (!target) return;
    const updateSize = () => {
        const { width, height } = target.getBoundingClientRect();
        highlightSize.value = { width, height };
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(target);
    onCleanup(() => observer.disconnect());
});
function renderHighlight() {
    const { width, height } = highlightSize.value;
    return h('div', {
        class: 'guide-highlight-frame',
        style: {
            width: `${width + 16}px`,
            height: `${height + 16}px`,
            boxSizing: 'border-box',
            border: '2px dashed var(--td-brand-color)',
            borderRadius: '12px',
            background: 'rgba(0, 82, 217, 0.08)',
        },
    });
}
const steps: CGuideProps['steps'] = [
    {
        element: () => todo.value!,
        title: '查看待办事项',
        body: '蓝色虚线框是自定义的高亮内容，覆盖本页的待办事项区域。',
        highlightContent: renderHighlight,
        placement: 'bottom',
    },
    {
        element: () => progress.value!,
        title: '关注处理进度',
        body: '高亮框随步骤切换到处理进度。你可以返回上一步，或点击完成结束引导。',
        highlightContent: renderHighlight,
        placement: 'bottom',
    },
];

const footer: CNotificationProps['footer'] = () => {
    return (
        <div class="t-notification__detail">
            {h(CButton, { class: 't-notification__detail-item', theme: 'primary', variant: 'text' }, () => '查看详情')}
        </div>
    );
};
const remind: CButtonProps['onClick'] = () => {
    visible.value = false;
    setTimeout(() => {
        visible.value = true;
    }, 10000);
};

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const customIcon: CPopconfirmProps['icon'] = () => {
    return (
        h(CIcon, {
            icon: Eye, class: 't-icon t-icon-browse', size: '1em', style: {
                marginRight: 8,
                color: ' #0052d9',
            }
        })
    );
};

function renderPopupContent() {
    return <div>浮层内容是指浮层里面显示的全部内容，这里的浮层内容使用渲染函数定义</div>;
}
</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}

.highlight-targets {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;
}

.highlight-target {
    box-sizing: border-box;
    width: 220px;
    max-width: 100%;
    padding: 16px;
    border: 1px solid var(--td-component-stroke);
    border-radius: var(--td-radius-medium);
    color: var(--td-text-color-primary);
    background: var(--td-bg-color-container);
}

.highlight-target strong {
    font-size: 14px;
    line-height: 22px;
}

.highlight-target p {
    margin: 8px 0 0;
    color: var(--td-text-color-secondary);
    line-height: 22px;
}
</style>