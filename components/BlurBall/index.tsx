'use client'

import Styles from './BlurBall.module.css'
import GradientComponent from '../GradientComponent'

const BlurBall = () => {
  const color = 'var(--color-text-black)'

  const gradient = `linear-gradient(to right, ${color} 0%, ${color} 100%)`
  const gradientReverse = `linear-gradient(to left, ${color} 0%, ${color} 100%)`

  const ballStyle = {
    borderRadius: '50%',
    height: '4rem',
    width: '4rem',
    position: 'absolute' as const,
    zIndex: -1,
    backgroundImage: gradient,
    animation: 'float 3s ease-in-out infinite',
  }

  const ballStyleReverse = {
    ...ballStyle,
    backgroundImage: gradientReverse,
    position: 'static' as const,
    filter: 'blur(38px)',
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
        <div style={ballStyle} />
        <div style={ballStyleReverse} />

        <GradientComponent />
      </div>
    </>
  )
}

export default BlurBall
