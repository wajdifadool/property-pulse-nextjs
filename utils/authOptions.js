import GoogleProvider from 'next-auth/providers/google'
import colors from 'colors'

import connectDB from '@/config/database'
import User from '@/models/User'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        // cancel auto sign in
        params: {
          propmpt: 'consent',
          accses_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  //
  callbacks: {
    // invokded on s success sign in
    async signIn({ profile }) {
      // 1 . coneect to DB
      const dbConnectedDB = await connectDB()
      console.log(colors.green(connectDB))

      // Mean while no able to connect to the database
      // 2. check if user Exisets
      const userExists = await User.findOne({ email: profile.email })

      // 3. if not, Create User
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.slice(0, 20),
          image: profile.picture,
        })
      }

      // 4. return True to allow signin
      return true
    },

    // Seesion Callback functoin that modfies the session object
    async session({ session }) {
      // 1.Get user from DB
      const user = await User.findOne({ email: session.user.email })

      // 2. assign user id from the seesion
      session.user.id = user._id.toString()

      // 3. return the session
      return session
    },
  },
}
