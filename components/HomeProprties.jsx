import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'
import connectDB from '@/config/database'

import Property from '@/models/Property'

const HomeProprties = async () => {
  // connect to DB
  connectDB()

  // Fetch all properties ,
  // lean will return plain js object format insted of mongoDB object
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()

  return (
    <div>
      <section className="px-4 py-6">
        {/* lg:container mean in laargescree or bigger it will apply class container */}
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-5">
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <p className=""> No Properties Found</p>
          ) : (
            // list goes here
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((propertiy) => (
                // <div>{propertiy.name}</div>
                // We have to pass key as uniqe id
                <PropertyCard
                  pr={JSON.stringify(propertiy)}
                  key={propertiy._id}
                  //
                  item={propertiy}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Show More Properties */}
      <section className="m-auto max-w-lg my-1 px-6">
        {/* Link to Proprties */}
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6   rounded-xl hover:bg-gray-700">
          View all properties
        </Link>
      </section>
    </div>
  )
}

export default HomeProprties
