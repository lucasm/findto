import Style from './ButtonGeolocation.module.css'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearch } from '@/contexts/SearchContext'
import { IconLocationGps } from '@/components/SvgIcons'
import Button from '@/components/Button'

export default function ButtonGeolocation() {
  const t = useTranslations('t')

  const { setUserLocation, permissionLocation, setPermissionLocation } =
    useSearch()

  const [locationError, setLocationError] = useState('')

  const handleClick = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude

          setPermissionLocation(true)

          setUserLocation(() => ({
            latitude: latitude,
            longitude: longitude,
          }))

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
    if (permissionLocation) {
      handleClick()
    }
  }, [permissionLocation])

  return (
    <>
      {!permissionLocation && (
        <div className={Style.container}>
          <Button onClick={handleClick} color="black">
            <>
              <IconLocationGps />
              {t('viewNearbyPlaces')}
            </>
          </Button>

          {locationError && <p>{locationError}</p>}
        </div>
      )}
    </>
  )
}
