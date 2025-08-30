'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, `사용자: ${input}`, `AI: "${input}"에 대한 자동 응답입니다.`])
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 w-72 rounded-xl border bg-white p-3 shadow-lg">
      <div className="h-40 overflow-y-auto border-b pb-2 mb-2 text-sm">
        {messages.map((m, i) => (
          <div key={i} className="mb-1">{m}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 rounded border px-2 py-1 text-sm"
        />
        <button onClick={sendMessage} className="rounded bg-black px-3 py-1 text-sm text-white">전송</button>
      </div>
    </div>
  )
}
