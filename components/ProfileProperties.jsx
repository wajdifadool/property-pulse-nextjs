'use client'

import { useState } from 'react'
import Image from 'next/image'
// import Property from '@/models/Property'

// Actions
import deleteProperty from '@/app/actions/deleteProperty'

const ProfileProprties = ({ properties: initialProprties }) => {
  const [properties, setProperties] = useState(initialProprties)

  const handleDeleteProperty = async (propertyId) => {
    // TODO: add Loadiong state
    deleteProperty(propertyId)

    const updatedProperties = properties.filter(
      (property) => property._id !== propertyId
    )

    setProperties(updatedProperties)
  }

  /**
   * _id: '6722330366bb9afe82eb559c',
  owner: '67209ab40902b4cc57859570',
  name: 'Giacomo Shannon',
  type: 'House',
  description: 'Enim nisi consequat',
  location: {
    street: 'Impedit enim recusa',
    city: 'Animi similique ut ',
    state: 'Recusandae Temporib',
    zipcode: '98871'
  },
  beds: 88,
  baths: 51,
  square_feet: 55,
  amenities: [
    'Washer & Dryer',
    'Swimming Pool',
    'Hot Tub',
    '24/7 Security',
    'Wheelchair Accessible',
    'Dishwasher',
    'Air Conditioning',
    'Balcony/Patio'
  ],
  rates: { nightly: 63, weekly: 48, monthly: 8 },
  seller_info: {
    name: 'Flavia Thomas',
    email: 'keji@mailinator.com',
    phone: '+1 (418) 797-8162'
  },
  images: [
   */
  //   console.log(properties[0])
  return (
    <>
      {properties.map((pro) => (
        <div className="mb-10" key={pro._id.toString()}>
          <a href={`/properties/${pro._id.toString()}`}>
            <Image
              className="h-32 w-full rounded-md object-cover"
              src={`${pro.images[0]}`}
              alt={`${pro.name} display image `}
              width={200}
              height={200}
            />
          </a>
          <div className="mt-2">
            <p className="text-lg font-semibold">{pro.name}</p>
            <p className="text-gray-600">
              {pro.location.street} , {pro.location.city} ,{pro.location.state}
            </p>
          </div>
          <div className="mt-2">
            <a
              href="/add-property.html"
              className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600">
              Edit
            </a>
            <button
              onClick={() => {
                console.log(pro._id)
                handleDeleteProperty(pro._id)
              }}
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              type="button">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProfileProprties
