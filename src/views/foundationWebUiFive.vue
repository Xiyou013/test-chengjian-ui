<template>
    <div class="cj-ui">
        <div class="pilot">
            <c-chatbot :chat-service-config="chatServiceConfig" />
        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
    </div>
</template>

<script setup lang="ts">
import { CChatbot, } from '@chengjian/foundation-web-chat';
import type { SSEChunkData, AIMessageContent, ChatServiceConfig } from '@chengjian/foundation-web-chat';

// * 快速开始示例
//
//  * 学习目标：
//  * - 了解 Chatbot 组件的最小配置
//  * - 理解 endpoint 和 onMessage 的作用
//  * - 实现一个基于SSE流式传输的最简可用的对话界面


// 聊天服务配置
const chatServiceConfig: ChatServiceConfig = {
    // 开发和本地预览默认使用本项目的演示服务。
    endpoint: import.meta.env.VITE_CHAT_ENDPOINT || '/__cj_demo/sse/normal',
    // 开启流式传输
    stream: true,
    onRequest: ({ prompt }) => ({
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
    }),
    // 解析后端返回的数据，转换为组件所需格式
    onMessage: ({ data }: SSEChunkData): AIMessageContent | null => {
        if (data && typeof data === 'object' && 'msg' in data && typeof data.msg === 'string') {
            return { type: 'markdown', data: data.msg };
        }
        return null;
    },
};
</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}
</style>
