import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Layout from './sidebar/component/Layout.tsx'
// import { BreadcrumbWithCustomSeparator } from './breadcrumb/component/BreadcrumbWithCustomSeparator.tsx'
// import { TopNavbar } from './topnavbar/component/topnavbar.tsx'
// import PaymentForm from './cards/component/CreditCard.tsx'
// import InfoCard from './cards/component/InfoCard.tsx'
// import CreditCardComponent from './cards/container/CreditCardComponent.tsx'
import Branches_API from './branches_api/component/Branches_api.tsx'
import UserCardsTable from './tables/component/UserCardsTable.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Layout children />
    <TopNavbar/> */}
    {/* <BreadcrumbWithCustomSeparator /> */}
      {/* <CreditCardComponent/> */}
      {/* <Branches_API/> */}
      <UserCardsTable/>
  </StrictMode>
)
