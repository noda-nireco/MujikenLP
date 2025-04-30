import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">導入業界</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">様々な業界での活用</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressは様々な業界で活用されています。
              フィルム、金属、不織布など多様な製造現場で品質向上と生産性アップに貢献しています。
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img src="/MujikenLP/images/film-factory.png" alt="フィルム製造工場" className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="bg-[#009977]">フィルム製造業</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">高機能フィルム検査</h3>
              <p className="text-gray-500 mb-6">
                高機能フィルムの製造ラインにMujiken Expressを導入。
                微細な欠陥検出能力により、不良率を大幅に削減し、製品品質と顧客満足度の向上に貢献します。
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">主な検出対象</p>
                  <p className="text-lg font-bold text-[#009977]">異物・キズ・ムラ</p>
                </div>
                <div>
                  <p className="text-sm font-medium">適用製品</p>
                  <p className="text-lg font-bold text-[#009977]">光学・包装・工業用</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img src="/MujikenLP/images/metal-factory.png" alt="金属板製造工場" className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="bg-[#009977]">金属加工業</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">金属表面検査</h3>
              <p className="text-gray-500 mb-6">
                高級金属板の製造工程にMujiken Expressを導入。
                高速検査能力により、生産ラインの速度を落とすことなく100%検査を実現し、品質保証レベルを向上させます。
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">主な検出対象</p>
                  <p className="text-lg font-bold text-[#009977]">キズ・打痕・変色</p>
                </div>
                <div>
                  <p className="text-sm font-medium">適用製品</p>
                  <p className="text-lg font-bold text-[#009977]">精密部品・建材</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img src="/MujikenLP/images/textile-factory.png" alt="不織布製造工場" className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="bg-[#009977]">不織布製造業</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">医療用不織布検査</h3>
              <p className="text-gray-500 mb-6">
                医療用不織布の製造ラインにMujiken Expressを導入。
                高い品質要求に応える検査体制を構築し、安定した品質と信頼性の確保に貢献します。
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">主な検出対象</p>
                  <p className="text-lg font-bold text-[#009977]">異物・穴・厚みムラ</p>
                </div>
                <div>
                  <p className="text-sm font-medium">適用製品</p>
                  <p className="text-lg font-bold text-[#009977]">医療用・衛生用</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            上記以外にも、電子部品、紙・パルプ、ガラス、プラスチックなど様々な業界で活用されています。
            あなたの業界でも、Mujiken Expressが品質向上と生産性アップに貢献します。
            詳細な適用事例や業界別の効果についてはお問い合わせください。
          </p>
          <Button className="bg-[#009977] hover:bg-[#007755]">
            <a href="#contact" className="flex items-center">
              お問い合わせはこちら <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
