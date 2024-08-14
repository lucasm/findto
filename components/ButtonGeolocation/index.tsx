import Style from './ButtonGeolocation.module.css'
import React, { useEffect, useState } from 'react'
import { useSearch } from '@/contexts/SearchContext'
import { IconLocationGps } from '../SvgIcons'
import { useTranslations } from 'next-intl'

export default function ButtonGeolocation() {
  const t = useTranslations('t')

  const {
    setLatitude,
    setLongitude,
    permissionLocation,
    setPermissionLocation,
  } = useSearch()

  const [locationError, setLocationError] = useState('')

  const handleClick = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude

          setPermissionLocation(true)
          setLatitude(latitude)
          setLongitude(longitude)
          // console.log(`latitude: ${latitude}, longitude: ${longitude}`)
        },
        (error) => {
          if (error.code === 1) {
            setPermissionLocation(false)
            setLocationError('Allow location access to see nearby places.')
          } else {
            setLocationError('Error getting location: ' + error.message)
          }
        }
      )
    }
  }

  useEffect(() => {
    permissionLocation && handleClick()
  }, [permissionLocation])

  return (
    <div>
      {!permissionLocation && (
        <div className={Style.container}>
          <button onClick={handleClick} className={Style.button}>
            <IconLocationGps />
            {t('viewNearbyPlaces')}
          </button>

          {locationError && <p>{locationError}</p>}
        </div>
      )}
    </div>
  )
}
