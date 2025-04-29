import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#e60012]">NIRECO</span>
            </Link>
            <p className="text-sm text-gray-500">
              無地表面検査のリーディングカンパニー。高品質な検査装置で製造業の品質向上に貢献します。
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">製品情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  Mujiken Express
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  Mujiken Express TypeS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  Mujiken+
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  その他の検査装置
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  カタログダウンロード
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  メンテナンス情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#009977]">
                  IR情報
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NIRECO Corporation. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              プライバシーポリシー
            </Link>{" "}
            |
            <Link href="#" className="hover:underline ml-2">
              サイトマップ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
