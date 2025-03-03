
import { Route } from 'lucide-react'
import './App.css'
import Layout from './sidebar/component/LeftSideBar'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { BreadcrumbWithCustomSeparator } from './breadcrumb/component/BreadcrumbWithCustomSeparator'
import InfoCard from './cards/component/InfoCard'
import CreditCard from './cards/component/CreditCard'
import UserCardsTable from './tables/component/UserCardsTable'
// "use client";

function App() {
  return (
    <Layout>
      <div className='ml-9'>
      <BreadcrumbWithCustomSeparator />
      </div>

     
      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
        <InfoCard data="Balance" className="flex-1 min-w-[250px]" />
        <InfoCard data="Transaction" className="flex-1 min-w-[250px]" />
        <div className="flex-1 flex justify-center">
          <CreditCard />
        </div>
      </div>

      
      <div className="p-6 bg-gray-50 rounded-lg shadow">
        <UserCardsTable />
      </div>
    </Layout>
  );
}





export default App
