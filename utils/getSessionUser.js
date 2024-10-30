import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/utils/authOptions'

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions)
  if (session) return session.user
}
