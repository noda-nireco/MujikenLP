import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977] mb-4">
                無地表面 品質検査装置
              </div>
              <div className="relative h-16 w-64 mb-4">
                <img
                  src="/MujikenLP/images/logo.svg"
                  alt="Mujiken Express ロゴ"
                  className="h-full w-auto object-contain object-left"
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                高速・高容量の圧倒的な検査パフォーマンス
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl mt-4">
                Mujikenシリーズにハイグレードモデル登場！製造ラインの品質管理を革新する最先端の無地表面検査装置です。
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button className="bg-[#009977] hover:bg-[#007755]" size="lg">
                詳細を見る
              </Button>
              <Button variant="outline" className="border-[#009977] text-[#009977] hover:bg-[#009977]/10" size="lg">
                お問い合わせ
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <img
                src="/MujikenLP/placeholder.jpg"
                alt="Mujiken Express 装置"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
