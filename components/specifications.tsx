import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Specifications() {
  return (
    <section id="specifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#009977]/10 px-3 py-1 text-sm text-[#009977]">構成・仕様</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">システム構成と仕様</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl mx-auto">
              Mujiken Expressの詳細な構成と技術仕様をご紹介します。
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="system" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="system">システム構成</TabsTrigger>
              <TabsTrigger value="specs">技術仕様</TabsTrigger>
            </TabsList>
            <TabsContent value="system" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] w-full">
                  <img
                    src="/MujikenLP/images/system-diagram.png"
                    alt="Mujiken Express システム構成図"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">検査ユニット</h3>
                    <p className="text-gray-500">
                      高精度カメラと照明システムを搭載した検査ユニットにより、様々な欠陥を検出します。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">制御ユニット</h3>
                    <p className="text-gray-500">
                      高性能プロセッサを搭載した制御ユニットで、リアルタイム画像処理を実現します。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">操作パネル</h3>
                    <p className="text-gray-500">タッチパネル式の操作画面で、直感的な操作が可能です。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ネットワーク連携</h3>
                    <p className="text-gray-500">工場システムとの連携が可能で、検査データの統合管理を実現します。</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">項目</TableHead>
                    <TableHead>仕様</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">検査対象</TableCell>
                    <TableCell>フィルム、シート、金属板、不織布など各種無地表面</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">検査速度</TableCell>
                    <TableCell>最大300m/分（材質により異なる）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">検査幅</TableCell>
                    <TableCell>最大2,000mm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">検出欠陥</TableCell>
                    <TableCell>異物、穴、しわ、汚れ、ムラなど</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">カメラ解像度</TableCell>
                    <TableCell>4K（オプションで8K対応可能）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">照明方式</TableCell>
                    <TableCell>LED照明（透過/反射/斜光照明切替可能）</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">電源</TableCell>
                    <TableCell>AC200V±10% 50/60Hz</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">消費電力</TableCell>
                    <TableCell>最大3.5kVA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">外形寸法</TableCell>
                    <TableCell>W800×D600×H1,800mm（標準構成時）</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
