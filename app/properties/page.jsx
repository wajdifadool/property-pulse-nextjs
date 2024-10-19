import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/database'
import Property from '@/models/Property'

const PropertiesPage = async () => {
  //   const searchParams = useSearchParams()
  //   console.log(searchParams.get('name'))

  // we can connect to the dataBase immediatly
  connectDB()

  // Fetch all properties ,
  // lean will return plain js object format insted of mongoDB object
  const properties = await Property.find({}).lean()

  return (
    <div>
      <section className="px-4 py-6">
        {/* lg:container mean in laargescree or bigger it will apply class container */}
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p className=""> No Properties Found</p>
          ) : (
            // list goes here
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((propertiy) => (
                // <div>{propertiy.name}</div>
                // We have to pass key as uniqe id
                <PropertyCard
                  key={propertiy._id}
                  //
                  item={propertiy}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PropertiesPage
