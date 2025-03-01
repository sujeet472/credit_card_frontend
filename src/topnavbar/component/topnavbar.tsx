import { AlignLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function TopNavbar() {
    return (
        <nav className="flex justify-between items-center bg-white dark:bg-gray-900 shadow-md px-6 py-3">
            {/* Left Side: Hamburger Menu + Title */}
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon">
                    <AlignLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                </Button>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard Settings</h1>
            </div>

            {/* Right Side: User Info */}
            <div className="flex items-center gap-3">
                <span className="text-gray-900 dark:text-white font-medium">John Doe</span>
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Picture" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}











// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { AlignLeft } from "lucide-react"

// export function TopNavbar() {
//     return (
//         <nav className="flex justify-between items-center bg-white dark:bg-gray-900 shadow-md px-6 py-3">
//             {/* Left Side: Title */}
//             <h1 className="text-lg font-semibold text-gray-900 dark:text-white"><AlignLeft />Dashboard Settings</h1>

//             {/* Right Side: User Info */}
//             <div className="flex items-center gap-3">
//                 <span className="text-gray-900 dark:text-white font-medium">John Doe</span>
//                 <Avatar>
//                     <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Picture" />
//                     <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//             </div>
//         </nav>
//     )
// }


