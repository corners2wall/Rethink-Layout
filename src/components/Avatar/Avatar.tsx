interface AvatarProps {
  src: string
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <div className="h-10 w-10  rounded-xl shadow">
      <img className="rounded-xl" src={src} />
    </div>
  )
}
