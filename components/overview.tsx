import { ArrowRight } from "lucide-react"

export default function Overview() {
  return (
    <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">概要</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mujiken Expressとは</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressは、無地表面の品質検査を高速かつ高精度に行う最新の検査装置です。
              製造ラインにおける品質管理の効率化と信頼性向上を実現します。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="rounded-full bg-[#009977]/10 p-4 mb-4">
              <svg
                className="h-8 w-8 text-[#009977]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">高速処理</h3>
            <p className="text-gray-500">
              最新のイメージングシステムと処理アルゴリズムにより、高速な検査処理を実現します。
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="rounded-full bg-[#009977]/10 p-4 mb-4">
              <svg
                className="h-8 w-8 text-[#009977]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">高精度検出</h3>
            <p className="text-gray-500">微細な欠陥も見逃さない高精度な検出能力で、製品品質の向上に貢献します。</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="rounded-full bg-[#009977]/10 p-4 mb-4">
              <svg
                className="h-8 w-8 text-[#009977]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">簡単操作</h3>
            <p className="text-gray-500">直感的なインターフェースで、専門知識がなくても簡単に操作できます。</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#features" className="inline-flex items-center text-[#009977] hover:underline">
            特長をもっと見る <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
