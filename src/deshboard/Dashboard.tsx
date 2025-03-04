// import { BreadcrumbWithCustomSeparator } from "@/breadcrumb/component/BreadcrumbWithCustomSeparator";
import CreditCard from "@/cards/component/CreditCard";
import InfoCard from "@/cards/component/InfoCard";
import UserAccountTransaction from "@/tables/component/ShowUserAccountTransaction";
// import UserCardsTable from "@/tables/component/UserCardsTable";


const Dashboard: React.FC = () => {
    return (
        <>
            {/* <div className='ml-9'>
                <BreadcrumbWithCustomSeparator />
            </div> */}


            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                <InfoCard data="Balance" className="flex-1 min-w-[250px]" />
                <InfoCard data="Transaction" className="flex-1 min-w-[250px]" />
                <div className="flex-1 flex justify-center">
                    <CreditCard />
                </div>
            </div>


            <div className="p-6 bg-gray-50 rounded-lg shadow">
                {/* <UserCardsTable /> */}
                <UserAccountTransaction userAccountTransactionId="T001">
                </UserAccountTransaction>
            </div>
        </>
    );
}

export default Dashboard;