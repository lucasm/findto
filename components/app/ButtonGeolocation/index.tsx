import Style from '../../../styles/App.module.css'
import React, { useState } from 'react'
import { useSearch } from '../../../contexts/SearchContext'

export default function ButtonGeolocation() {
  const { setLatitude, setLongitude, permissionLocation, setPermissionLocation } = useSearch()

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
          console.log(`latitude: ${latitude}, longitude: ${longitude}`)
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
    } else {
      console.error('Geolocation not supported in this browser.')
    }
  }

  return (
    <div>
      {!permissionLocation && (
        <>
          <button onClick={handleClick} className={Style.button}>
            View nearby places
          </button>

          {locationError && (
            <p>
              <br />
              <br />
              {locationError}
            </p>
          )}
        </>
      )}
    </div>
  )
}
