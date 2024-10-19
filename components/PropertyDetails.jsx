import {
  FaTimes,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaMapMarker,
} from 'react-icons/fa'

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          {/* <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i> */}
          <FaMapMarker className="text-orange-700 mr-2" />
          <p className="text-orange-700">{property.location.street}</p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>

        {/* <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold">
              <i className="fa fa-xmark text-red-700"></i>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">{`$${property.rates.weekly.toLocaleString()}`}</div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">{`$${property.rates.monthly.toLocaleString()}`}</div>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description & Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <FaBed className="inline-block mr-2" />
            {property.beds} <span className="hidden sm:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-2" />
            {property.baths}
            {'  '}
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2" />
            {property.square_feet}
            <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>

      {/* Amenities */}

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((item, index) => (
            <li key={index}>
              <FaCheck className="text-green-600 mr-2 inline-block" /> {item}
            </li>
          ))}
          {/* <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i> Wifi
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Full
            kitchen
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Washer &
            Dryer
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Free
            Parking
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Hot Tub
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>24/7
            Security
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Wheelchair
            Accessible
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Elevator
            Access
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Dishwasher
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Gym/Fitness
            Center
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Air
            Conditioning
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>
            Balcony/Patio
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Smart TV
          </li>
          <li>
            <i className="fas fa-check text-green-600 mr-2 mt-3"></i>Coffee
            Maker
          </li> */}
        </ul>
      </div>

      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  )
}

export default PropertyDetails
