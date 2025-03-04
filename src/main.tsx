import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import App from "./App";
import "./index.css";
// import LoginPage from "./login/component/login";
ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <App />
    {/* <LoginPage/> */}
  </React.StrictMode>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'




// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//     {/* <Layout children /> */}
//     {/* <TopNavbar/> */}
//     {/* <BreadcrumbWithCustomSeparator /> */}
//     {/* <CreditCardComponent/> */}
//     {/* <Branches_API/> */}
//     {/* <UserCardsTable/> */}
//     {/* <LeftSideBar ><BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>
//     <InfoCard/>
//     <CreditCard/>
//     </LeftSideBar> */}
//     {/* <AppSidebar/> */}
//   </StrictMode>
// )
