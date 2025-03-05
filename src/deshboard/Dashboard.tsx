// import { BreadcrumbWithCustomSeparator } from "@/breadcrumb/component/BreadcrumbWithCustomSeparator";
import CreditCard from "@/cards/component/CreditCard";
import InfoCard from "@/cards/component/InfoCard";
// import NewCreateAccountTransactionForm from "@/tables/component/NewCreateAccountTransaction";
import NewUserAccountTransactions from "@/tables/component/NewUserAccountTransactions";
// import NewUserCardData from "@/tables/component/NewUserCardTable";
// import ShowUserAccountTransaction from "@/tables/component/ShowUserAccountTransaction";
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
                
                {/* <ShowUserAccountTransaction userAccountTransactionId="T001"> */}
                {/* </ShowUserAccountTransaction> */}
                {/* <NewUserCardData/>  */}
                <NewUserAccountTransactions/>
                {/* <NewCreateAccountTransactionForm/> */}

            </div>
        </>
    );
}

export default Dashboard;