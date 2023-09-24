interface WelcomeProps {
  name: string
}

export default function Welcome({ name }: WelcomeProps) {
  return (
    <>
      <span className="text-[32px] lg:text-5xl">Hey {name}!</span>
      <span className="font-raleway text-base lg:text-xl">
        Lets create something awesome today ✨💫
      </span>
    </>
  )
}
