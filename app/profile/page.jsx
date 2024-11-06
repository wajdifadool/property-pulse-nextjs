import Image from 'next/image'
import connectDB from '@/config/database'
import Property from '@/models/Property'
import { getSessionUser } from '@/utils/getSessionUser'
import ProfileDefault from '@/assets/images/profile.png'
import ProfileProprties from '@/components/ProfileProperties'

import { convertToSerializeableObject } from '@/utils/convertToObject'

const ProfilePage = async () => {
  await connectDB()
  const sessionUser = await getSessionUser()

  //   console.log(sessionUser)
  const { id: userId, image: userImage, name, email } = sessionUser

  if (!userId) {
    throw new Error('User ID is requierd ')
  }

  const propertiesDocs = await Property.find({ owner: userId }).lean()

  const properties = propertiesDocs.map(convertToSerializeableObject)

  //   console.log(properties)

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={userImage || ProfileDefault}
                  alt="User Profile image"
                  width={200}
                  height={200}
                />
              </div>

              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {name}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span> {email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>

              <ProfileProprties properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
