'use client'

import Styles from './BlurBall.module.css'
import GradientComponent from '../GradientComponent'
import SvgLogo from '../SvgLogo'

const BlurBall = () => {
  const color = 'var(--color-text-black)'

  const gradient = `linear-gradient(to right, ${color} 0%, ${color} 100%)`
  const gradientReverse = `linear-gradient(to left, ${color} 0%, ${color} 100%)`

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
            transform: translate(0, 20px);
          }
          100% {
            transform: translate(0, -0px);
          }
        }
      `}</style>
      <div className={Styles.container}>
        <div style={ballStyle}>
          <div className={Styles.icon}>
            <SvgLogo />
          </div>
        </div>
        <div style={ballStyleReverse} />

        <GradientComponent />
      </div>
    </>
  )
}

export default BlurBall
