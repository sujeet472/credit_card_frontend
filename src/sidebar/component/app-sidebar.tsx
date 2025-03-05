

import { ChevronDown, CreditCard, FileText, Send, Users, Languages, Moon, Key, Image, ChevronUp, User2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { url } from "inspector"


const generalItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: CreditCard
    },
    {
        title: "Cards",
        url: "/cards",
        icon: CreditCard
    },
    {
        title: "New Transaction",
        url: "/newTransaction",
        icon: Send
    },
]
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

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
};

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <b>NAVIGATION BAR</b>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                        
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {generalItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
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
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                <a href="/profileupdate">
                                    <span>Edit Profile</span></a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="/profile">
                                    <span>View Profile</span></a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span onClick={handleLogout}>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
