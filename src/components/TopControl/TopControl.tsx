import Avatar from 'components/Avatar'
import IconButton from 'components/IconButton'
import Calendar from '../../assets/icons/Calendar.svg?react'
import Alert from '../../assets/icons/Alert.svg?react'
import Coin from '../../assets/icons/Coin.svg?react'
import Button from 'components/Button'
import Input from 'components/Input'

export default function TopControl() {
  return (
    <div className="sticky top-0 z-10 hidden grid-cols-4 pb-[36px] lg:grid">
      <div className="col-span-3 flex items-center justify-between border border-[#6b59b1] px-3 py-[17px]">
        <Input
          placeholder="Search for templates, projects, etc"
          className="w-2/5"
        />
        <div className="flex gap-[29px]">
          <Button label="Create account" />
          <div className="flex gap-[9px] rounded-2xl bg-[#F1EDFD] pb-[9px] pl-[13px] pr-[11px] pt-[6px] font-raleway font-semibold shadow">
            <Coin className="h-6 w-6" />
            20
          </div>
        </div>
      </div>
      <div className="pl-[3px] pt-[3px]">
        <div className="flex items-center justify-between border border-[#D4C8F8] bg-[#F1EDFD] px-2 shadow-inner">
          <IconButton icon={Calendar} />
          <IconButton icon={Alert} />
          <Avatar src="https://via.placeholder.com/40x40" />
        </div>
      </div>
    </div>
  )
}
