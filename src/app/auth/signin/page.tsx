"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { signIn, signUp, authClient } from "@/lib/auth-client"
import { useToast } from "@/hooks/use-toast"

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (isSignUp) {
        const { error } = await signUp.email({
          email,
          password,
          name,
        })

        if (error) {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive",
          })
          return
        }

        toast({
          title: "Account created!",
          description: "You can now sign in to your account.",
        })
        setIsSignUp(false)
      } else {
        const { error } = await signIn.email({
          email,
          password,
        })

        if (error) {
          toast({
            title: "Sign in failed",
            description: error.message,
            variant: "destructive",
          })
          return
        }

        toast({
          title: "Welcome back!",
          description: "You have been signed in successfully.",
        })
        router.push("/dashboard")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {isSignUp ? "Create an account" : "Welcome to Meet AI"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isSignUp 
              ? "Enter your details to create your account" 
              : "Sign in to your account to start meeting with AI agents"
            }
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => authClient.signIn.social({ provider: "google" })}
              disabled={isLoading}
              type="button"
            >
              Continue with Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => authClient.signIn.social({ provider: "github" })}
              disabled={isLoading}
              type="button"
            >
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleAuth} className="grid gap-6">
          {isSignUp && (
            <div className="grid gap-2">
              <input
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="Your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          )}
          
          <div className="grid gap-2">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : (isSignUp ? "Create account" : "Sign In")}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            disabled={isLoading}
          >
            {isSignUp 
              ? "Already have an account? Sign in" 
              : "Don't have an account? Sign up"
            }
          </button>
        </div>
      </div>
    </div>
  )
} 