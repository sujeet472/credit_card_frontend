import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/sidebar/component/Layout";

import Dashboard from "@/deshboard/Dashboard";
// import UserAccountTransaction from "@/tables/component/ShowUserAccountTransaction";
import UserCardsTable from "@/tables/component/UserCardsTable";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<>Cards</>} />
          
          {/* Pass `userAccountTransactionId` as a prop */}
          <Route
            path="/UserCards"
            element={
              // <UserAccountTransaction userAccountTransactionId="T001">
              // </UserAccountTransaction>
              <UserCardsTable />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}








// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "@/sidebar/component/Layout";

// import Dashboard from "@/deshboard/Dashboard";
// import UserAccountTransaction from "@/tables/component/UserAccountTransaction";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<>Home</>} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path='/cards' element={<>Cards </>} />
//           <Route path='/transactions' element={<UserAccountTransaction></UserAccountTransaction>} />
          
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }