import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Cta() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">今すぐStreamLineを始めましょう</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              14日間の無料トライアルで、StreamLineがあなたのビジネスにどのように役立つかをお確かめください。
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="メールアドレスを入力" className="max-w-lg flex-1" />
              <Button type="submit">無料で試す</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              登録することで、
              <Link href="#" className="underline underline-offset-2">
                利用規約
              </Link>
              と
              <Link href="#" className="underline underline-offset-2">
                プライバシーポリシー
              </Link>
              に同意したことになります。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
