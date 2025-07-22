"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface CommandResponsiveDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function CommandResponsiveDialog({
  open,
  onOpenChange,
}: CommandResponsiveDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const CommandContent = () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search agents, meetings..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>🤖 Create new agent</span>
          </CommandItem>
          <CommandItem>
            <span>📅 Schedule meeting</span>
          </CommandItem>
          <CommandItem>
            <span>📊 View analytics</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Recent">
          <CommandItem>
            <span>Language Tutor Agent</span>
          </CommandItem>
          <CommandItem>
            <span>Business Coach Meeting</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[450px] p-0">
          <CommandContent />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CommandContent />
        </div>
      </DrawerContent>
    </Drawer>
  )
} 