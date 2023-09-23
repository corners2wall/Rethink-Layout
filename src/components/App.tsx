import Card from './Card/Card'
import '../styles.css'
import Input from './Input'

export default function Application() {
  return (
    <>
      <div className="flex flex-col gap-2 font-raleway ">
        <span className="text-lg font-semibold leading-none  text-zinc-600 lg:text-2xl">
          Most Popular Tools
        </span>
        <span className="text-sm leading-none text-zinc-400 lg:text-lg">
          Explore the trending tools to create your copies fast
        </span>
      </div>
      <Input placeholder="Search for templates, projects, etc" />

      {/* <div className="inline-flex h-12 w-80 items-center justify-center">
        <div className="h-12 w-80 rounded-md border border-gray-200 bg-white shadow" />
      </div> */}
      {/* <Card /> */}
    </>
  )
}
