import { initTRPC, TRPCError } from "@trpc/server"
import { type NextRequest } from "next/server"
import superjson from "superjson"
import { ZodError } from "zod"
import { auth } from "@/lib/auth"

export const createTRPCContext = async (opts: { req: NextRequest }) => {
  // Get session from request
  const sessionData = await auth.api.getSession({ 
    headers: opts.req.headers 
  })

  return {
    req: opts.req,
    session: sessionData,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router
export const publicProcedure = t.procedure

// Protected procedure for authenticated users
export const protectedProcedure = t.procedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }
    return next({
      ctx: {
        ...ctx,
        session: { ...ctx.session, user: ctx.session.user },
      },
    })
  }),
) 