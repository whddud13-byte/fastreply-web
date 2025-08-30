import { Check } from 'lucide-react'
import ChatWidget from '../components/ChatWidget'

export default function Page(){
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold">24시간, 3초 응답 고객상담 시스템 — FastReply</h1>
          <p className="mt-3 text-gray-600">채팅·이메일·SNS 문의를 자동 처리하고, 복잡한 건 담당자에게 연결합니다.</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="rounded-2xl border px-4 py-2">무료 체험</a>
            <a href="#features" className="rounded-2xl border px-4 py-2">데모 보기</a>
          </div>
          <p className="mt-2 text-xs text-gray-500">국내 결제: 카카오/토스 • 해외 결제: Stripe/PayPal</p>
        </div>
        <div className="rounded-3xl border p-6">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5"/> 응답시간 90% 단축</li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5"/> 야간 문의 자동 처리</li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5"/> 인건비 절감, 24/7 운영</li>
          </ul>
        </div>
      </section>
      <ChatWidget />
    </main>
  )
}
