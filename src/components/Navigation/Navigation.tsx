import Column from 'components/Layout/Column'
import Logo from '../../assets/icons/Logo.svg?react'
import Home from '../../assets/icons/Home.svg?react'
import Content from '../../assets/icons/Content.svg?react'
import Logout from '../../assets/icons/Logout.svg?react'
import Settings from '../../assets/icons/Settings.svg?react'
import IconButton from 'components/IconButton'

export default function Navigation() {
  return (
    <nav className="sticky top-0 hidden h-screen  flex-col justify-between bg-[#F1EDFD] px-[15px] py-6 lg:flex">
      <Column className="items-center gap-10">
        <Logo />
        <IconButton icon={Home} />
        <IconButton icon={Content} />
      </Column>
      <Column className="gap-10">
        <IconButton icon={Settings} />
        <IconButton icon={Logout} />
      </Column>
    </nav>
  )
}
