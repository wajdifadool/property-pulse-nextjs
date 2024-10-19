{
  /* <div>Search Params : = {searchParams.name}</div> */
}
// Server side components by default
// useRouter this is onlty for clinet components
// Hooks
import Link from 'next/link'

// Model
import Property from '@/models/Property'
import connectDB from '@/config/database'

// Components
import { FaArrowLeft } from 'react-icons/fa'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyHeadImage from '@/components/PropertyHeaderImage'

const PropertPage = async ({ params, searchParams }) => {
  // C
  await connectDB()

  const property = await Property.findById(params.id).lean()

  return (
    <div>
      <PropertyHeadImage image={property.images[0]} />

      {/* <!-- Go Back --> */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className=" mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>

      <section>
        <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6"></div>
            {/* <!--Property Info --> */}

            <PropertyDetails property={property} />

            {/* end of Main  */}
          </div>
        </section>
      </section>
    </div>
  )
}

export default PropertPage
