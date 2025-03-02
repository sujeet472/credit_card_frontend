import CreditCard from "../component/CreditCard";
import InfoCard from "../component/InfoCard";

export default function CreditCardComponent() {
    return (
        <>


            <div className='flex item-center justify-center items-center bg-gray-200 w-screen '>
                <InfoCard data={"Get my expenses"} />
                <InfoCard data={"Number of Transactions"} />
                <CreditCard />

            </div>
        </>
    )
}