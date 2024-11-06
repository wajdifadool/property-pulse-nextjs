'use server'

// // /**
// //  * This is server side function
// //  * itc called servers Actions
// //  * https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// //  */

import cloudinary from '@/config/cloudinary'
import connectDB from '@/config/database'
import Property from '@/models/Property'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser()

  // Check for session
  if (!sessionUser || !sessionUser.id) {
    throw new Error('User ID is required')
  }

  const { id } = sessionUser

  await connectDB()

  const property = await Property.findById(propertyId)

  if (!property) throw new Error('Property Not Found')

  // Verify ownership
  if (property.owner.toString() !== id) {
    throw new Error('Unauthorized')
  }

  // extract public id's from image url in DB
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split('/')
    return parts.at(-1).split('.').at(0)
  })

  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('propertypulse/' + publicId)
    }
  }

  // Proceed with property deletion
  await property.deleteOne()

  revalidatePath('/', 'layout')
}

export default deleteProperty
