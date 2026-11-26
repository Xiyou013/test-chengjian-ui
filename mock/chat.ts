import { json } from 'node:stream/consumers'
import type { Connect, Plugin } from 'vite'

const handleChat: Connect.NextHandleFunction = async (req, res, next) => {
  if (req.url?.split('?')[0] !== '/__cj_demo/sse/normal') return next()
  if (req.method !== 'POST') {
    res.writeHead(405, { Allow: 'POST' }).end()
    return
  }

  const body = await json(req).catch(() => null) as { prompt?: unknown } | null
  if (res.destroyed) return
  if (typeof body?.prompt !== 'string' || !body.prompt.trim()) {
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify({ message: '请提供非空的 prompt' }))
    return
  }

  const parts = [
    '已收到你的消息。',
    `本次输入共 ${Array.from(body.prompt.trim()).length} 个字符。`,
    '\n\n这段演示回复来自测试项目，',
    '正在逐段显示。',
  ]
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
  })
  res.flushHeaders()

  let index = 0
  const timer = setInterval(() => {
    res.write(`data: ${JSON.stringify({ msg: parts[index++] })}\n\n`)
    if (index === parts.length) {
      clearInterval(timer)
      res.end()
    }
  }, 400)
  res.once('close', () => clearInterval(timer))
}

export const chatDemo: Plugin = {
  name: 'local-chat-demo',
  configureServer({ middlewares }) {
    middlewares.use(handleChat)
  },
  configurePreviewServer({ middlewares }) {
    middlewares.use(handleChat)
  },
}
