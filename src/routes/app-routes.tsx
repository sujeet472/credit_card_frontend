
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/sidebar/component/Layout";

import Dashboard from "@/deshboard/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cards' element={<>Cards </>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}