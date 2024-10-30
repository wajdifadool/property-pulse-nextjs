'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import connectDB from '@/config/database'
import Property from '@/models/Property'
import { getSessionUser } from '@/utils/getSessionUser'

/**
 * This is server side function
 * itc called servers Actions
 * https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
async function addProperty(formData) {
  const userSession = await getSessionUser()

  if (!userSession || !userSession.id) {
    // when we throw an error it will shaoe page called Erorr.jsx
    throw new Error('User not found')
  }

  const { id } = userSession

  const amenities = formData.getAll('amenities')

  const images = formData
    .getAll('images')
    .filter((image) => image.name != '')
    .map((image) => image.name)

  const propertyData = {
    owner: id,
    type: formData.get('type'),
    name: formData.get('name'),
    description: formData.get('description'),
    location: {
      street: formData.get('location.street'),
      city: formData.get('location.city'),
      state: formData.get('location.state'),
      zipcode: formData.get('location.zipcode'),
    },
    beds: formData.get('beds'),
    baths: formData.get('baths'),
    square_feet: formData.get('square_feet'),
    amenities,
    rates: {
      weekly: formData.get('rates.weekly'),
      monthly: formData.get('rates.monthly'),
      nightly: formData.get('rates.nightly'),
    },
    seller_info: {
      name: formData.get('seller_info.name'),
      email: formData.get('seller_info.email'),
      phone: formData.get('seller_info.phone'),
    },
    images,
  }

  // console.log(propertyData)

  // create the Object Schema
  const newProperty = new Property(propertyData)
  await newProperty.save() // in the databse

  // revladite path, meaning cleaering the back history stack
  revalidatePath('/', 'layout')

  // redirect to the new property ppage
  redirect(`/properties/${newProperty._id}`)
}

export default addProperty

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
