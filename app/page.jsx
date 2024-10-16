// page.jsx is loaded in layout.jsx
import Hero from '@/components/Hero'
import HomeProprties from '@/components/HomeProprties'
import InfoBoxes from '@/components/infoBoxes'
const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProprties />
    </>
  )
}

export default HomePage
