import connectDB from '@/config/database'
import GoogleProvider from 'next-auth/providers/google'

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
  callbacks: {
    // invokded on s success sign in
    async signIn({ profile }) {
      // 1 . coneect to DB
      // const dbConnectedDB = await connectDB()
      // 2. check if user Exisets
      // profile.name ;
      // profile.id;
      // await
      // 3. if not, Create User
      // 4. return True to allow signin
    },
    // Seesion Callback functoin that modfies the session object

    async session({ session }) {
      // 1.Get user from DB
      // 2. assign user id from the seesoin
      // 3. return the session
    },
  },
}
