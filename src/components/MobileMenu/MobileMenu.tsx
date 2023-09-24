import Avatar from 'components/Avatar'
import Select from 'components/Select'
import MenuIcon from 'assets/icons/Menu.svg?react'

export default function MobileMenu() {
  return (
    <div className="flex items-center justify-between pb-6 pt-[14px] lg:hidden">
      <div className="inline-flex h-9 w-10 items-start justify-start gap-2.5 rounded-xl bg-white px-1.5 py-1 opacity-50 backdrop-blur-lg">
        <MenuIcon />
      </div>
      <Select placeholder="select" value="Zara ventures" />
      <Avatar src="https://via.placeholder.com/40x40" />
    </div>
  )
}
