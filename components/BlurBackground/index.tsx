const BlurBackground = () => {
  return (
    <div
      className={`
        fixed -top-45 -z-10 moveGradient

        w-[90%] h-[70%] md:h-[90%] rounded-full blur-2xl md:blur-3xl opacity-90

        bg-[linear-gradient(270deg,var(--color-red)_14%,var(--color-orange)_28%,var(--color-yellow)_42%,var(--color-green)_56%,var(--color-blue)_70%,var(--color-purple)_84%,var(--color-pink)_98%)]
        `}></div>
  )
}

export default BlurBackground
