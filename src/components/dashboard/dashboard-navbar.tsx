"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { CommandResponsiveDialog } from "@/components/ui/command-responsive-dialog"
import { Search } from "lucide-react"

export function DashboardNavbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1" />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSearchOpen(true)}
          className="relative h-8 w-full justify-start text-sm font-normal text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        >
          <Search className="mr-2 h-4 w-4" />
          Search...
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </header>

      <CommandResponsiveDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen} 
      />
    </>
  )
} 