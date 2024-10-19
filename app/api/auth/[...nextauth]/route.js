import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";


// So whenever I get request or a post request is made to API slash auth, it's going to do what it's going to.
// Basically this is going to take over.
const handler = NextAuth(authOptions)


export {handler as GET , handler as  POST  }