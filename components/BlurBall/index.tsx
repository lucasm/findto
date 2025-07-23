'use client'

import Styles from './BlurBall.module.css'

// import SvgLogo from '../SvgLogo'

const BlurBall = () => {
  const yellow = 'var(--color-yellow)'
  const green = 'var(--color-green)'
  const red = '#ff8a8a'
  const blue = '#91d3ff'

  const gradient = `linear-gradient(to right, ${yellow} 0%, ${green} 50%, ${blue} 75%, ${red} 100%)`
  const gradientReverse = `linear-gradient(to left, ${blue} 0%, ${red} 100%)`

  const ballStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
    position: 'absolute' as const,
    zIndex: -1,
    backgroundImage: gradient,
    animation: 'float 3s ease-in-out infinite',
  }

  const ballStyleReverse = {
    ...ballStyle,
    backgroundImage: gradientReverse,
    position: 'static' as const,
    filter: 'blur(2rem)',
  }

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0px);
          }
          50% {
            transform: translate(0, 5px);
          }
          100% {
            transform: translate(0, -0px);
          }
        }
      `}</style>
      <div className={Styles.container}>
        <div style={ballStyle}>
          <div className={Styles.icon}>{/* <SvgLogo /> */}</div>
        </div>
        <div style={ballStyleReverse} />

        {/* <div className={css.circlePosition}></div> */}

        {/* <div className="w-32 h-32 rounded-full blur-xl animate-float bg-[conic-gradient(var(--color-yellow),var(--color-orange),var(--color-green),var(--color-blue),var(--color-purple),var(--color-pink),var(--color-red),var(--color-yellow))]"></div> */}
      </div>
    </>
  )
}

export default BlurBall
