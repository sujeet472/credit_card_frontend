import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Layout children /> */}
    {/* <TopNavbar/> */}
    {/* <BreadcrumbWithCustomSeparator /> */}
    {/* <CreditCardComponent/> */}
    {/* <Branches_API/> */}
    {/* <UserCardsTable/> */}
    {/* <LeftSideBar ><BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>
    <InfoCard/>
    <CreditCard/>
    </LeftSideBar> */}
    {/* <AppSidebar/> */}
  </StrictMode>
)
