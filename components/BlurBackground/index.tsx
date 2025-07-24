const BlurBackground = () => {
  return (
    <div className="fixed -top-100 inset-0 -z-10 flex items-center justify-center">
      <div className="w-[90%] h-[600px] rounded-full blur-xl md:blur-3xl opacity-70 bg-linear-[90deg,var(--color-red)_14%,var(--color-orange)_28%,var(--color-yellow)_42%,var(--color-green)_56%,var(--color-blue)_70%,var(--color-purple)_84%,var(--color-pink)_98%] "></div>
    </div>
  )
}

export default BlurBackground
