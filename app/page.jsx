// page.jsx is loaded in layout.jsx
//  ` `
import Hero from '@/components/Hero'
import HomeProprties from '@/components/HomeProprties'
import InfoBoxes from '@/components/infoBoxes'

import connectDB from '@/config/database'
const HomePage = () => {
  // console.log(process.env.MONGODB_URI)
  connectDB()
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProprties />
    </>
  )
}

export default HomePage
