import { MediaType } from './common'

export interface PostDto {
  id: number
  type: MediaType
  title: string
  isTrending: boolean
  description: string
}
