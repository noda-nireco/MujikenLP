import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">お客様の声</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">お客様からの評価</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              StreamLineを利用している企業からの声をご紹介します。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=40&width=40" alt="田中 健太" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">田中 健太</div>
                  <div className="text-sm text-muted-foreground">株式会社テックイノベーション CEO</div>
                </div>
              </div>
              <div className="mt-4 flex">
                <Quote className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                <p className="text-muted-foreground">
                  StreamLineを導入してから、チームの生産性が30%向上しました。直感的なインターフェースと強力な機能で、日々のタスク管理が格段に楽になりました。
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=40&width=40" alt="佐藤 美咲" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">佐藤 美咲</div>
                  <div className="text-sm text-muted-foreground">
                    グローバルマーケティング株式会社 マーケティングディレクター
                  </div>
                </div>
              </div>
              <div className="mt-4 flex">
                <Quote className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                <p className="text-muted-foreground">
                  複数のプロジェクトを同時に管理する必要がある私たちのチームにとって、StreamLineは救世主です。分析機能も素晴らしく、データに基づいた意思決定ができるようになりました。
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=40&width=40" alt="鈴木 大輔" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">鈴木 大輔</div>
                  <div className="text-sm text-muted-foreground">
                    フューチャーデザイン株式会社 プロジェクトマネージャー
                  </div>
                </div>
              </div>
              <div className="mt-4 flex">
                <Quote className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                <p className="text-muted-foreground">
                  StreamLineのおかげで、リモートワークへの移行がスムーズに行えました。チームのコミュニケーションが改善され、プロジェクトの納期も守れるようになりました。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
