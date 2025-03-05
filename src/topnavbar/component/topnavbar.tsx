import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/rtk/store"; // Adjust path if needed

export function TopNavbar() {
    const profile = useSelector((state: RootState) => state.profile.profile);

    const fullName = profile ? `${profile.first_name} ${profile.last_name}` : "Guest User";
    const profileImage = profile?.profile_image || "https://via.placeholder.com/150"; // Default image

    return (
        <nav className="flex justify-between w-full items-center bg-white dark:bg-gray-900 px-6 py-3">
            
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dew's Bank of India</h1>

            
            <div className="flex items-center gap-3">
                <span className="text-gray-900 dark:text-white font-medium">{fullName}</span>
                <Avatar>
                    <AvatarImage src={profileImage} alt="Profile Picture" />
                    <AvatarFallback>{fullName.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
}










// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"

// export function TopNavbar() {
//     return (
//         <nav className="flex justify-between w-full items-center bg-white dark:bg-gray-900 px-6 py-3">
//             {/* Left Side: Hamburger Menu + Title */}
//             <div className="flex items-center gap-3">
//                 <h1 className="text-lg font-semibold text-gray-900 dark:text-white">User Dashboard</h1>
//             </div>

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











// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import { AlignLeft } from "lucide-react"

// // export function TopNavbar() {
// //     return (
// //         <nav className="flex justify-between items-center bg-white dark:bg-gray-900 shadow-md px-6 py-3">
// //             {/* Left Side: Title */}
// //             <h1 className="text-lg font-semibold text-gray-900 dark:text-white"><AlignLeft />Dashboard Settings</h1>

// //             {/* Right Side: User Info */}
// //             <div className="flex items-center gap-3">
// //                 <span className="text-gray-900 dark:text-white font-medium">John Doe</span>
// //                 <Avatar>
// //                     <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Picture" />
// //                     <AvatarFallback>JD</AvatarFallback>
// //                 </Avatar>
// //             </div>
// //         </nav>
// //     )
// // }


