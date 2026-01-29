"use client"

import * as React from "react"
import {BookOpen, GalleryVerticalEnd} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "HealDocs",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "Todo List",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Team Meeting",
          url: "#",
        },
        {
          title: " Work on Branding",
          url: "#",
        },
        {
          title: "Make a report for client",
          url: "#",
        },
        {
          title: "Create a planner",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
