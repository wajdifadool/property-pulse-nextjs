// page.jsx is loaded in layout.jsx
import NavBar from '@/components/Navbar'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>
          {' '}
          this is the Home page at <span className="text-primary"> / </span>
        </h1>
      </div>
      {/* <NavBar /> */}

      {/* <h3 className="text-3xl">Wlecoms</h3>
      <Link
        className="btn btn-link"
        href={{
          pathname: 'properties',
          query: { name: 'text' },
        }}>
        {' '}
        Go to proprties
      </Link> */}
    </div>
  )
}

export default HomePage
