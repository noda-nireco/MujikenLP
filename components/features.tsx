import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">特長</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mujiken Expressの優れた特長</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressは、無地表面検査において圧倒的なパフォーマンスを発揮します。
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[300px] w-full">
              <Image
                src="/MujikenLP/images/high-speed-system.png"
                alt="高速検査システム"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">高速・高容量の検査性能</h3>
              <p className="text-gray-500">
                最新の画像処理技術により、高速ラインでも安定した検査性能を発揮します。大容量データも効率的に処理し、生産性向上に貢献します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>高速ラインに対応した検査速度</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>大容量データの効率的処理</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>安定した検査精度の維持</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="order-1 md:order-2 relative h-[300px] w-full">
              <Image
                src="/MujikenLP/images/detection-system.png"
                alt="高精度検出システム"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-2xl font-bold">高精度な欠陥検出能力</h3>
              <p className="text-gray-500">
                微細な欠陥も見逃さない高感度センサーと独自のアルゴリズムにより、高い検出精度を実現します。様々な材質や表面状態に対応可能です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>微細欠陥の高精度検出</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>多様な材質・表面状態への対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>独自の画像処理アルゴリズム</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] w-full">
              <Image
                src="/MujikenLP/images/user-interface.png"
                alt="使いやすいインターフェース"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">使いやすい操作性</h3>
              <p className="text-gray-500">
                直感的なユーザーインターフェースにより、専門知識がなくても簡単に操作できます。設定変更や検査結果の確認も容易に行えます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>直感的な操作画面</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>簡単な設定変更</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#009977] mt-0.5" />
                  <span>わかりやすい検査結果表示</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
