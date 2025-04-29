import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">料金プラン</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">あなたのビジネスに合ったプランを選択</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              ビジネスの規模や要件に合わせて、最適なプランをお選びいただけます。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          <Card>
            <CardHeader>
              <CardTitle>スタータープラン</CardTitle>
              <div className="text-4xl font-bold">
                ¥2,980<span className="text-sm font-normal text-muted-foreground">/月</span>
              </div>
              <CardDescription>小規模チームや個人向け</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>最大5ユーザー</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>基本的なタスク管理</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>5GBのストレージ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>メールサポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">今すぐ始める</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <div className="text-center text-sm font-medium text-primary mb-2">人気</div>
              <CardTitle>プロフェッショナルプラン</CardTitle>
              <div className="text-4xl font-bold">
                ¥7,980<span className="text-sm font-normal text-muted-foreground">/月</span>
              </div>
              <CardDescription>成長中の企業向け</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>最大20ユーザー</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>高度なタスク管理</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>20GBのストレージ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>優先サポート</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>高度な分析機能</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">今すぐ始める</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>エンタープライズプラン</CardTitle>
              <div className="text-4xl font-bold">
                ¥19,800<span className="text-sm font-normal text-muted-foreground">/月</span>
              </div>
              <CardDescription>大規模企業向け</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>無制限のユーザー</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>カスタマイズ可能なワークフロー</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>100GBのストレージ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7専任サポート</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>高度なセキュリティ機能</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>APIアクセス</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">お問い合わせ</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
