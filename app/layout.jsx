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

// For Toastify
// https://www.npmjs.com/package/react-toastify

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Main Entry Point
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
