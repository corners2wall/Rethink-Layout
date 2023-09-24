interface WelcomeProps {
  name: string
}

export default function Welcome({ name }: WelcomeProps) {
  return (
    <>
      <span className="text-[32px]">Hey {name}!</span>
      <span className="font-raleway text-base ">
        Lets create something awesome today ✨💫
      </span>
    </>
  )
}
