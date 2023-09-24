import TrendCard from './TrendCard/TrendCard'
import '../styles.css'
import Input from './Input'

export default function Application() {
  return (
    <>
      <div className="flex h-64 flex-col gap-2 rounded-b-3xl bg-purple-100 pl-4 text-zinc-600">
        <span className="text-[32px]">Hey James!</span>
        <span className="font-raleway text-base">
          Lets create something awesome today ✨💫
        </span>
      </div>

      <div className="px-5 pb-4">
        <Input placeholder="Search for templates, projects, etc" />
      </div>
      <main className="flex flex-col px-4">
        <div className="flex flex-col gap-2 font-raleway ">
          <span className="text-lg font-semibold leading-none  text-zinc-600 lg:text-2xl">
            Most Popular Tools
          </span>
          <span className="text-sm leading-none text-zinc-400 lg:text-lg">
            Explore the trending tools to create your copies fast
          </span>
        </div>
      </main>

      {/* <div className="inline-flex h-12 w-80 items-center justify-center">
        <div className="h-12 w-80 rounded-md border border-gray-200 bg-white shadow" />
      </div> */}
      {/* <Card /> */}
    </>
  )
}
