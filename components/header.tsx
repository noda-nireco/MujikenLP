"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#e60012]">NIRECO</span>
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex gap-6">
          <Link href="#overview" className="text-sm font-medium transition-colors hover:text-[#009977]">
            概要
          </Link>
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#009977]">
            特長
          </Link>
          <Link href="#specifications" className="text-sm font-medium transition-colors hover:text-[#009977]">
            構成・仕様
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-[#009977]">
            お問い合わせ
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#e60012] hover:bg-[#c00010]">カタログダウンロード</Button>
        </div>

        {/* モバイルメニューボタン */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="#overview"
              className="text-sm font-medium transition-colors hover:text-[#009977]"
              onClick={() => setIsMenuOpen(false)}
            >
              概要
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-[#009977]"
              onClick={() => setIsMenuOpen(false)}
            >
              特長
            </Link>
            <Link
              href="#specifications"
              className="text-sm font-medium transition-colors hover:text-[#009977]"
              onClick={() => setIsMenuOpen(false)}
            >
              構成・仕様
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-[#009977]"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button className="w-full bg-[#e60012] hover:bg-[#c00010]">カタログダウンロード</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
