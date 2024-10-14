//main entry point , the Childer are Home Page
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse',
  keyword: 'rental, property, real estate, keywordsgoes here ',
  description: 'find the perfect rental for you  ',
}
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
