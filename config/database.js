// this is basic templaet to connect
// to mongodb with mongose ORM
import mongoose from 'mongoose'
import colors from 'colors'
let connected = false
const connectDB = async () => {
  // strictQuery will make sure that only fileds in our schema can be set in the database =
  mongoose.set('strictQuery', true)

  // if the database already conecetd dont connect again
  if (connected) {
    console.log(colors.green('MongoDB is connected, yeaaah').bgYellow.bold)
    return
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('MongoDB is connected')
  } catch (error) {
    console.log(colors.red(error).bgWhite)
  }
}

export default connectDB
