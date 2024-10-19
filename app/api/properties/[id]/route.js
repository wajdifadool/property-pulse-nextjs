import connectDB from '@/config/database'
import Property from '@/models/Property'

export const GET = async (req, { params }) => {
  try {
    // cconnecctTo DB
    await connectDB()
    const pro = await Property.findById(params.id)

    if (!pro) return new Reponse('Prperty Not Found', { status: 404 })

    return new Response(pro, { status: 200 })
  } catch (error) {
    return new Response('Sometginh went worng', {
      status: 500,
    })
  }
}
