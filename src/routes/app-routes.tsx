import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "@/sidebar/component/Layout";
import Dashboard from "@/deshboard/Dashboard";
import UserCardsTable from "@/tables/component/UserCardsTable";
import Login from "../login/component/login"; // Ensure you have a Login component

// Function to check if user is authenticated
const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("token"); // Check if token exists
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes Wrapped in Layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <Layout>
                <UserCardsTable />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;












// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "@/sidebar/component/Layout";

// import Dashboard from "@/deshboard/Dashboard";
// // import UserAccountTransaction from "@/tables/component/ShowUserAccountTransaction";
// import UserCardsTable from "@/tables/component/UserCardsTable";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<>Home</>} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/cards" element={<>Cards</>} />
          
//           {/* Pass `userAccountTransactionId` as a prop */}
//           <Route
//             path="/UserCards"
//             element={
//               <UserCardsTable />
//             }
//           />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }








// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "@/sidebar/component/Layout";

// // import Dashboard from "@/deshboard/Dashboard";
// // import UserAccountTransaction from "@/tables/component/UserAccountTransaction";

// // export default function AppRoutes() {
// //   return (
// //     <BrowserRouter>
// //       <Layout>
// //         <Routes>
// //           <Route path="/" element={<>Home</>} />
// //           <Route path='/dashboard' element={<Dashboard />} />
// //           <Route path='/cards' element={<>Cards </>} />
// //           <Route path='/transactions' element={<UserAccountTransaction></UserAccountTransaction>} />
          
// //         </Routes>
// //       </Layout>
// //     </BrowserRouter>
// //   );
// // }