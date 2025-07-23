// import css from './GradientBall.module.css'

export default function GradientBall() {
  return (
    <>
      {/* <div className="w-32 h-32 rounded-full blur-m animate-float bg-[conic-gradient(var(--color-yellow),var(--color-orange),var(--color-green),var(--color-blue),var(--color-purple),var(--color-pink),var(--color-red),var(--color-yellow))]"></div> */}

      {/* <div className={css.circlePosition}></div> */}

      <div className="fixed -top-100 inset-0 -z-10 flex items-center justify-center">
        <div className="w-[90%] h-[600px] rounded-full blur-xl md:blur-3xl opacity-70 bg-linear-[90deg,var(--color-red)_14%,var(--color-orange)_28%,var(--color-yellow)_42%,var(--color-green)_56%,var(--color-blue)_70%,var(--color-purple)_84%,var(--color-pink)_98%] "></div>
      </div>
    </>
  )
}
