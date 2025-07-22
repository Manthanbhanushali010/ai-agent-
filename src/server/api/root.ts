import { createTRPCRouter } from "@/server/api/trpc"
import { agentRouter } from "./routers/agent"
import { meetingRouter } from "./routers/meeting"

export const appRouter = createTRPCRouter({
  agent: agentRouter,
  meeting: meetingRouter,
})

export type AppRouter = typeof appRouter 