import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">お問い合わせ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">製品に関するお問い合わせ</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressに関するご質問やデモのご依頼など、お気軽にお問い合わせください。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#009977] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">お電話でのお問い合わせ</h3>
                    <p className="text-gray-500 mt-1">平日 8:45〜17:30</p>
                    <p className="text-xl font-bold mt-2">042-660-7330</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#009977] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">メールでのお問い合わせ</h3>
                    <p className="text-gray-500 mt-1">24時間受付中</p>
                    <p className="text-xl font-bold mt-2">info@nireco.co.jp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#009977] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">所在地</h3>
                    <p className="text-gray-500 mt-1">本社</p>
                    <p className="text-xl font-bold mt-2">〒192-8522 東京都八王子市石川町2951-4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4">お問い合わせフォーム</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    会社名
                  </label>
                  <Input id="company" placeholder="株式会社〇〇" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    お名前
                  </label>
                  <Input id="name" placeholder="山田 太郎" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  メールアドレス
                </label>
                <Input id="email" type="email" placeholder="example@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  電話番号
                </label>
                <Input id="phone" placeholder="03-1234-5678" />
              </div>
              <div className="space-y-2">
                <label htmlFor="inquiry" className="text-sm font-medium">
                  お問い合わせ内容
                </label>
                <Textarea id="inquiry" placeholder="製品に関するお問い合わせ内容をご記入ください" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-[#009977] hover:bg-[#007755]">
                送信する
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
