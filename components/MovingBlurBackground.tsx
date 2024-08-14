import React from 'react'

interface FloatingBallProps {
  color: string // Cor hexadecimal
}

const FloatingBall: React.FC<FloatingBallProps> = ({ color }) => {
  const gradient = `linear-gradient(to right, ${color} 0%, ${color} 100%)`
  const gradientReverse = `linear-gradient(to left, ${color} 0%, ${color} 100%)`

  const containerStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const ballStyle = {
    borderRadius: '50%',
    height: '8vw',
    width: '8vw',
    position: 'absolute' as 'absolute',
    zIndex: 1,
    backgroundImage: gradient,
    animation: 'float 3s ease-in-out infinite',
  }

  const ballStyleReverse = {
    ...ballStyle,
    backgroundImage: gradientReverse,
    position: 'static' as 'static',
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
      <div style={containerStyle}>
        <div style={ballStyle} />
        <div style={ballStyleReverse} />
      </div>
    </>
  )
}

export default FloatingBall
