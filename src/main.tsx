import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Layout from './sidebar/component/Layout.tsx'
import { BreadcrumbWithCustomSeparator } from './breadcrumb/component/BreadcrumbWithCustomSeparator.tsx'
import { TopNavbar } from './topnavbar/component/topnavbar.tsx'
// import PaymentForm from './cards/component/CreditCard.tsx'
import InfoCard from './cards/component/InfoCard.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Layout children />
    <TopNavbar/> */}
    {/* <BreadcrumbWithCustomSeparator /> */}
    {/* <PaymentForm/> */}
    <div className='flex item-center w-screen'>

    <InfoCard data = {"Get my expenses"}/>
    <InfoCard data = {"Number of Transactions"}/>
    </div>
  </StrictMode>
)
