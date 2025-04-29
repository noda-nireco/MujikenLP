import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">導入事例</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">お客様の成功事例</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressを導入したお客様の声と成果をご紹介します。
              様々な業界で品質向上と生産性アップに貢献しています。
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/images/film-factory.png" alt="フィルム製造工場" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-[#009977]">フィルム製造業</Badge>
                <span className="text-sm text-gray-500">導入時期: 2023年4月</span>
              </div>
              <h3 className="text-xl font-bold mb-2">株式会社テクノフィルム</h3>
              <p className="text-gray-500 mb-4">
                高機能フィルムの製造ラインにMujiken
                Expressを導入。微細な欠陥検出能力により、不良率を60%削減し、顧客満足度が大幅に向上しました。
              </p>
              <div className="border-l-4 border-[#009977] pl-4 py-2 bg-[#009977]/5 mb-4">
                <div className="flex">
                  <Quote className="h-5 w-5 text-[#009977] shrink-0 mr-2" />
                  <p className="text-gray-600 italic">
                    「以前は目視検査で見逃していた微細な欠陥も検出できるようになり、クレーム対応コストが大幅に削減されました。投資以上の効果を実感しています。」
                  </p>
                </div>
                <p className="text-right text-sm text-gray-500 mt-2">- 品質管理部長</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">不良率削減</p>
                  <p className="text-2xl font-bold text-[#009977]">60%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">生産性向上</p>
                  <p className="text-2xl font-bold text-[#009977]">35%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ROI達成</p>
                  <p className="text-2xl font-bold text-[#009977]">8ヶ月</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/images/metal-factory.png" alt="金属板製造工場" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-[#009977]">金属加工業</Badge>
                <span className="text-sm text-gray-500">導入時期: 2022年10月</span>
              </div>
              <h3 className="text-xl font-bold mb-2">大和金属工業株式会社</h3>
              <p className="text-gray-500 mb-4">
                高級金属板の製造工程にMujiken
                Expressを導入。高速検査能力により、生産ラインの速度を落とすことなく100%検査を実現しました。
              </p>
              <div className="border-l-4 border-[#009977] pl-4 py-2 bg-[#009977]/5 mb-4">
                <div className="flex">
                  <Quote className="h-5 w-5 text-[#009977] shrink-0 mr-2" />
                  <p className="text-gray-600 italic">
                    「従来のシステムでは検出できなかった微細なキズも検出できるようになり、高級製品の品質保証レベルが格段に向上しました。操作も簡単で、現場での受け入れもスムーズでした。」
                  </p>
                </div>
                <p className="text-right text-sm text-gray-500 mt-2">- 製造部 課長</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">検査精度</p>
                  <p className="text-2xl font-bold text-[#009977]">99.8%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ライン速度</p>
                  <p className="text-2xl font-bold text-[#009977]">+20%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">クレーム</p>
                  <p className="text-2xl font-bold text-[#009977]">-85%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/images/textile-factory.png" alt="不織布製造工場" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-[#009977]">不織布製造業</Badge>
                <span className="text-sm text-gray-500">導入時期: 2023年1月</span>
              </div>
              <h3 className="text-xl font-bold mb-2">東洋テキスタイル株式会社</h3>
              <p className="text-gray-500 mb-4">
                医療用不織布の製造ラインにMujiken
                Expressを導入。高い品質要求に応える検査体制を構築し、医療機関からの信頼を獲得しました。
              </p>
              <div className="border-l-4 border-[#009977] pl-4 py-2 bg-[#009977]/5 mb-4">
                <div className="flex">
                  <Quote className="h-5 w-5 text-[#009977] shrink-0 mr-2" />
                  <p className="text-gray-600 italic">
                    「医療用製品の品質管理は最重要課題です。Mujiken
                    Expressの導入により、人的ミスをなくし、一定の品質基準を保てるようになりました。特に記録機能が監査対応に役立っています。」
                  </p>
                </div>
                <p className="text-right text-sm text-gray-500 mt-2">- 品質保証部 部長</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">品質基準</p>
                  <p className="text-2xl font-bold text-[#009977]">適合</p>
                </div>
                <div>
                  <p className="text-sm font-medium">人件費</p>
                  <p className="text-2xl font-bold text-[#009977]">-40%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">監査対応</p>
                  <p className="text-2xl font-bold text-[#009977]">迅速化</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-[#009977]/5 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">導入効果の業界別比較</h3>
              <p className="text-gray-500 mb-6">
                Mujiken Expressは様々な業界で導入され、それぞれの業界特性に合わせた効果を発揮しています。
                不良率の削減、生産性の向上、品質の安定化など、多くのお客様が具体的な成果を実感されています。
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">フィルム製造業</span>
                    <span className="text-sm font-medium">不良率 60%削減</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#009977] h-2.5 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">金属加工業</span>
                    <span className="text-sm font-medium">生産性 20%向上</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#009977] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">不織布製造業</span>
                    <span className="text-sm font-medium">人件費 40%削減</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#009977] h-2.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">電子部品製造業</span>
                    <span className="text-sm font-medium">クレーム 85%削減</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#009977] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <Image src="/images/industry-chart.png" alt="業界別導入効果グラフ" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            あなたの業界でも、Mujiken Expressが品質向上と生産性アップに貢献します。
            詳細な導入事例や業界別の効果についてはお問い合わせください。
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
