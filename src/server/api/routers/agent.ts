import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc"

export const agentRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id
    // This will connect to database later and filter by userId
    return [
      {
        id: "1",
        userId,
        name: "Language Tutor",
        description: "AI agent that helps with language learning",
        instructions: "You are a helpful language tutor...",
        createdAt: new Date(),
      },
    ]
  }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      description: z.string().min(1),
      instructions: z.string().min(1),
    }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id
      // This will save to database later
      return {
        id: Date.now().toString(),
        userId,
        ...input,
        createdAt: new Date(),
      }
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().min(1).optional(),
      description: z.string().min(1).optional(), 
      instructions: z.string().min(1).optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id
      // This will update in database later with proper ownership check
      return {
        id: input.id,
        userId,
        name: input.name || "Updated Agent",
        description: input.description || "Updated description",
        instructions: input.instructions || "Updated instructions",
        createdAt: new Date(),
      }
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id
      // This will delete from database later with proper ownership check
      return { success: true, id: input.id, userId }
    }),
}) 