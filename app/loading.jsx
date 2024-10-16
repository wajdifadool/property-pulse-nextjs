'use client'
import { ClipLoader } from 'react-spinners'
// Over ride the css style for the ClipLoader
const overRide = {
  display: 'block',
  margin: '100px auto',
}
const LoadingPage = () => {
  return (
    <ClipLoader
      //
      color="#3b82f6"
      cssOverride={overRide}
      size={150}
      aria-label="Loading Spinner"
    />
  )
}

export default LoadingPage
