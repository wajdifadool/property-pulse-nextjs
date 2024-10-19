import connectDB from '@/config/database'
import Property from '@/models/Property'

export const GET = async () => {
  try {
    // cconnecctTo DB
    await connectDB()
    const proprties = await Property.find({})

    return new Response(proprties, { status: 200 })
  } catch (error) {
    return new Response('Sometginh went worng', {
      status: 500,
    })
  }
}
