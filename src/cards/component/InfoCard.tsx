"use client"; 
// import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // Smooth animations
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InfoCard(props: any) {
  const [showData, setShowData] = useState( false );

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[400px] shadow-xl rounded-2xl bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">{props.data}</CardTitle>
          <CardDescription className="text-gray-600">
            Data as per your selected card
          </CardDescription>
        </CardHeader>
        <CardContent>
          
          
            <motion.div
              className="mt-4 p-3 bg-gray-50 border rounded-lg shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700">🚀 {showData?"2000":"xxxx"}</p>
            </motion.div>
          
        </CardContent>
        <CardFooter className="flex justify-between">
         
          <Button onClick={() =>{ setShowData(!showData)}} className="bg-blue-600 hover:bg-blue-700 text-white">
            {showData ? "Hide" : "Show"}
          </Button>
          
        </CardFooter>
      </Card>
    </motion.div>
  );
}


















// // import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"




// export default function InfoCard() {
//     console.log("Component mounted");
  
//     return (
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Create project</CardTitle>
//           <CardDescription>Deploy your new project in one-click.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Input id="name" placeholder="Name of your project" />
//               </div>
//               <div className="flex flex-col space-y-1.5">
                
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button variant="outline">Cancel</Button>
//           <Button>Deploy</Button>
//         </CardFooter>
//       </Card>
//     );
//   }
  



// // export default function InfoCard() {
// //   return (
// //     <Card className="w-[350px]">
// //       <CardHeader>
// //         <CardTitle>Create project</CardTitle>
// //         <CardDescription>Deploy your new project in one-click.</CardDescription>
// //       </CardHeader>
// //       <CardContent>
// //         <form>
// //           <div className="grid w-full items-center gap-4">
// //             <div className="flex flex-col space-y-1.5">
// //               <Label htmlFor="name">Name</Label>
// //               <Input id="name" placeholder="Name of your project" />
// //             </div>
// //             <div className="flex flex-col space-y-1.5">
// //               <Label htmlFor="framework">Framework</Label>
// //               <Select>
// //                 <SelectTrigger id="framework">
// //                   <SelectValue placeholder="Select" />
// //                 </SelectTrigger>
// //                 <SelectContent position="popper">
// //                   <SelectItem value="next">Next.js</SelectItem>
// //                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
// //                   <SelectItem value="astro">Astro</SelectItem>
// //                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
// //                 </SelectContent>
// //               </Select>
// //             </div>
// //           </div>
// //         </form>
// //       </CardContent>
// //       <CardFooter className="flex justify-between">
// //         <Button variant="outline">Cancel</Button>
// //         <Button>Deploy</Button>
// //       </CardFooter>
// //     </Card>
// //   )
// // }
