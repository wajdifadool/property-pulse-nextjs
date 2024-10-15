//main entry point , the Childer are Home Page
import '@/assets/styles/globals.css'
import NavBar from '@/components/Navbar'

// export const metadata = {
//   title: 'Property Pulse',
//   keyword: 'rental, property, real estate, keywordsgoes here ',
//   description: 'find the perfect rental for you  ',
// }
// Main Entry Point
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
