import { Badge } from '@/components/ui/badge'

export default function PestMonitorPage() {
  return (
    <div className="container space-y-8 py-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          海南省农作物重大病虫疫情信息调度指挥平台
        </h1>

        <div className="grid grid-cols-4 gap-4">
          {/* 左侧统计数据 */}
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">农药备品数量</h3>
              <div className="text-3xl font-bold text-blue-500">
                123 <span className="text-sm font-normal">吨</span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">防治组织</h3>
              <div className="text-3xl font-bold text-blue-500">
                15 <span className="text-sm font-normal">个</span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">无人机</h3>
              <div className="text-3xl font-bold text-blue-500">
                55 <span className="text-sm font-normal">台</span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">日防治能力</h3>
              <div className="text-3xl font-bold text-blue-500">
                15.98 <span className="text-sm font-normal">万亩</span>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">灾情县</h3>
              <div className="text-3xl font-bold text-blue-500">
                2 <span className="text-sm font-normal">个</span>
              </div>
            </div>
          </div>

          {/* 右侧预警信息 */}
          <div className="col-span-3 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">病虫害发生预警</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span>1、</span>
                  <p>
                    稻飞虱预计将落地本县，降落时间为{' '}
                    <span className="text-blue-500">2025年1月15日19时</span>
                    。请及时关注！
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span>2、</span>
                  <p>
                    您的周边县xxx县稻飞虱发生程度达到5级，
                    <span className="text-red-500">有扩散至本县的风险</span>
                    ，请及时关注！
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">病虫害监测数据</h2>
              <div className="space-y-2">
                <p>发生程度3级：五指山市、xxx县</p>
                <p>发生程度4级：临高县（已上报灾情）</p>
                <p>发生程度5级：白沙黎族自治县（已上报灾情）</p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">迁飞预测</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge>预测开始迁出地 临高县</Badge>
                  <Badge>预计将落地为 儋州市</Badge>
                </div>
                <p>
                  降落时间为2025年1月15日19时，作物生育期为孕穗期；xx市/县/区，降落时间为xxxx年xx月xx日xx时，作物生育期为x期。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
