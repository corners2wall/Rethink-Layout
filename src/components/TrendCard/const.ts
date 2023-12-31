import { MediaType } from 'types/common'
import Pencil from '../../assets/icons/Pencil.svg?react'
import Edit from '../../assets/icons/Edit.svg?react'
import TextBullet from '../../assets/icons/TextBullet.svg?react'

export const MediaTypeMap: Record<
  MediaType,
  React.FC<React.ComponentProps<'svg'> & { title?: string; className?: string }>
> = {
  ARTICLE: TextBullet,
  BLOG: Pencil,
  PRODUCT: Edit
}
