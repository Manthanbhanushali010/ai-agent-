import { createAuthClient } from "better-auth/client"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
})

export const { 
  signUp, 
  signIn, 
  signOut, 
  useSession,
  getSession
} = authClient 