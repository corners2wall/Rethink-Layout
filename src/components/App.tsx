import TrendCard from './TrendCard/TrendCard'
import '../styles.css'
import Input from './Input'
import TrendRow from './TrendRow/TrendRow'
import { trendingData } from 'data/mockData'
import Column from './Layout/Column'
import Menu from '../assets/icons/Menu.svg?react'
import Plus from '../assets/icons/Plus.svg?react'
import Avatar from './Avatar'
import Welcome from './Welcome'
import Select from './Select'

export default function Application() {
  return (
    <>
      <Column className="relative mb-8 rounded-b-3xl bg-[#F1EDFD] bg-heder-texture bg-cover bg-no-repeat px-4 pb-[74px] text-zinc-600">
        <div className="flex items-center justify-between pb-6 pt-[14px]">
          <div className="inline-flex h-9 w-10 items-start justify-start gap-2.5 rounded-xl bg-white px-1.5 py-1 opacity-50 backdrop-blur-lg">
            <Menu />
          </div>
          <Select placeholder="select" value="Zara ventures" />
          <Avatar src="https://via.placeholder.com/40x40" />
        </div>
        <Column className="gap-2 text-zinc-600">
          <Welcome name="James" />
        </Column>
        <div className="absolute left-0 top-[90%] w-full px-[inherit]">
          <Input placeholder="Search for templates, projects, etc" />
        </div>
      </Column>
      <main className="flex flex-col px-4">
        <Column className="gap-2 pb-6 font-raleway">
          <span className="text-lg font-semibold leading-none  text-zinc-600 lg:text-2xl">
            Most Popular Tools
          </span>
          <span className="text-sm leading-none text-zinc-400 lg:text-lg">
            Explore the trending tools to create your copies fast
          </span>
        </Column>
        <TrendRow
          title="Blog Writing"
          items={trendingData}
          renderRowItem={({ id, ...props }) => (
            <TrendCard key={id} {...props} />
          )}
        />
        <TrendRow
          title="Social media"
          items={trendingData}
          renderRowItem={({ id, ...props }) => (
            <TrendCard key={id} {...props} />
          )}
        />
      </main>
      <button className="fixed bottom-3 right-6 bg-white">
        <Plus />
      </button>
    </>
  )
}
