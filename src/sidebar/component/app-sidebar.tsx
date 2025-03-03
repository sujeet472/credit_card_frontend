

import { ChevronDown, CreditCard, FileText, Send, Users, Languages, Moon, Key, Image } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"

// Menu structure
const menuItems = [
    {
        title: "Services",
        icon: CreditCard,
        submenu: [
            { title: "New Card", icon: CreditCard },
            { title: "Checkbook", icon: FileText },
            { title: "Account Statement", icon: FileText },
            { title: "Money Transfer", icon: Send },
            { title: "Add Beneficiary", icon: Users },
        ],
    },
    {
        title: "Settings",
        icon: Key,
        submenu: [
            { title: "Change Language", icon: Languages },
            { title: "Dark Mode", icon: Moon },
            { title: "Reset Password", icon: Key },
            { title: "Reset Profile Photo", icon: Image },
        ],
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((menu) => (
                                <Collapsible key={menu.title} className="group">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <button className="flex items-center justify-between w-full px-3 py-2">
                                                <div className="flex items-center gap-2">
                                                    <menu.icon className="w-5 h-5" />
                                                    <span>{menu.title}</span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                                            </button>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {menu.submenu.map((sub) => (
                                                    <SidebarMenuSubItem key={sub.title} className="flex items-center gap-2">
                                                        <sub.icon className="w-4 h-4" />
                                                        {sub.title}
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
