import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/sidebar/component/Layout";
import Dashboard from "@/deshboard/Dashboard";
import Login from "../login/component/login"; // Ensure you have a Login component
import NewUserCardTable from "@/tables/component/NewUserCardTable";
import NewCreateAccountTransactionForm from "@/tables/component/NewCreateAccountTransaction";
import ProfilePage from "@/profile/component/ProfilePage";
import ProfileUpdate from "@/profile/component/ProfileUpdate";
import LandingPage from "@/landingPage/component/LandingPage";


// Function to check if user is authenticated
const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("token"); // Check if token exists
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/landing" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route index path="/landing" element={<LandingPage/>} />
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
                <NewUserCardTable />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/newTransaction"
          element={
            <ProtectedRoute>
              <Layout>
                <NewCreateAccountTransactionForm />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage/>
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profileUpdate"
          element={
            <ProtectedRoute>
              <Layout>
                <ProfileUpdate/>
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