"use client"

import { trpc } from "@/lib/trpc"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { LoadingState } from "@/components/ui/loading-state"
import { ErrorState } from "@/components/ui/error-state"

export default function DashboardPage() {
  const { 
    data: agents, 
    isLoading: agentsLoading, 
    error: agentsError,
    refetch: refetchAgents 
  } = trpc.agent.getAll.useQuery()
  
  const { 
    data: meetings, 
    isLoading: meetingsLoading, 
    error: meetingsError,
    refetch: refetchMeetings
  } = trpc.meeting.getAll.useQuery()

  if (agentsLoading || meetingsLoading) {
    return <LoadingState message="Loading dashboard..." />
  }

  if (agentsError || meetingsError) {
    return (
      <ErrorState
        message="Failed to load dashboard data. Please try again."
        onRetry={() => {
          refetchAgents()
          refetchMeetings()
        }}
      />
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your AI agents and meetings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Agents
              </p>
              <p className="text-2xl font-bold">{agents?.length || 0}</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              🤖
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Scheduled Meetings
              </p>
              <p className="text-2xl font-bold">
                {meetings?.filter((m: any) => m.status === 'scheduled').length || 0}
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              📅
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Completed Meetings
              </p>
              <p className="text-2xl font-bold">
                {meetings?.filter((m: any) => m.status === 'completed').length || 0}
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              ✅
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Calls
              </p>
              <p className="text-2xl font-bold">
                {meetings?.filter((m: any) => m.status === 'active').length || 0}
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              📹
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="text-lg font-semibold">Recent Agents</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="p-6 pt-0">
            {agents && agents.length > 0 ? (
              <div className="space-y-4">
                {agents.slice(0, 3).map((agent: any) => (
                  <div key={agent.id} className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      🤖
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{agent.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {agent.description}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(agent.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-6">
                No agents created yet
              </p>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="p-6 pt-0">
            {meetings && meetings.length > 0 ? (
              <div className="space-y-4">
                {meetings
                  .filter((m: any) => m.status === 'scheduled')
                  .slice(0, 3)
                  .map((meeting: any) => (
                  <div key={meeting.id} className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      📅
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{meeting.title}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {meeting.description}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(meeting.scheduledFor)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-6">
                No upcoming meetings
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 