import TrendCard from 'components/TrendCard/TrendCard'
import Input from 'components/Input'
import TrendRow from 'components/TrendRow/TrendRow'
import { trendingData } from 'data/mockData'
import Column from 'components/Layout/Column'
import Plus from 'assets/icons/Plus.svg?react'
import Welcome from 'components/Welcome'
import Navigation from 'components/Navigation'
import TopControl from 'components/TopControl'
import MobileMenu from 'components/MobileMenu'
import Button from 'components/Button'
import Select from 'components/Select'

export default function Home() {
  return (
    <div className="flex">
      <Navigation />
      <Column className="min-w-0">
        <TopControl />
        <Column className="relative mb-8 rounded-b-3xl bg-[#F1EDFD] bg-[url('../public/Background.svg')] bg-cover bg-no-repeat px-4 pb-[74px] text-zinc-600 md:mx-3 lg:rounded-3xl">
          <MobileMenu />

          <div className="flex">
            <Column className="flex-1 gap-2 text-zinc-600 lg:gap-12">
              <Welcome name="James" />
              <div className="hidden pb-12 lg:block">
                <Button type="GHOST" label="Start Creating" />
              </div>
            </Column>
            <Column className="hidden flex-1 items-end gap-9 pr-7 pt-[62px] lg:flex">
              <Select
                placeholder="select"
                value="Zara ventures"
                className="w-1/3"
              />
              <Column className="mr-12 gap-[14px] font-raleway text-base backdrop-blur">
                <span className="p-[10px]">
                  You should have more engagement by 6pm today, try posting
                  then. 📆
                </span>
                <span className="p-[10px]">
                  Try our SEO optimization tool to increase engagement by 40% 🔥
                </span>
              </Column>
            </Column>
          </div>

          <div className="absolute left-0 top-[90%] w-full px-[inherit] lg:hidden">
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
      </Column>
      <button className="fixed bottom-3 right-6 bg-white lg:hidden">
        <Plus />
      </button>
    </div>
  )
}
