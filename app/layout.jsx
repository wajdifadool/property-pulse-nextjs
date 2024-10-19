//main entry point , the Childer are Home Page
import '@/assets/styles/globals.css'
// Components
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footet'
import AuthProvider from '@/components/AuthProvider'
// export const metadata = {
//   title: 'Property Pulse',
//   keyword: 'rental, property, real estate, keywordsgoes here ',
//   description: 'find the perfect rental for you  ',
// }
// Main Entry Point
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </AuthProvider>

  )
}

export default MainLayout
