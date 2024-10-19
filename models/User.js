import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    // user can bookmark thier proprties

    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const User = models.User || model('User', UserSchema)

export default User
