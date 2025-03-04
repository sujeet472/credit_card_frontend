import { useState } from 'react';
import { useFetchAccountTransactionsQuery } from "@/rtk/createApi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSelector } from 'react-redux';

// Define TypeScript Interface for Transactions
interface Transaction {
    id: string;
    user_card_id: string;
    transaction_date: string;
    amount: string;
    merchant_id: string;
    location: string;
    transaction_type: string;
    created_at: string;
    updated_at: string;
    discarded_at: string | null;
}

export default function NewUserAccountTransactions() { 
    const { data = [], error, isLoading } = useFetchAccountTransactionsQuery() as { data?: Transaction[]; error?: any; isLoading: boolean };

    const userCardIds: string[] = useSelector((state: any) => state.auth.userCardIds) || []; // Ensure it's an array

    // State to store selected card ID for filtering
    const [selectedCardId, setSelectedCardId] = useState<string>("all");

    // Filter transactions to include both sender and receiver
    const filteredTransactions = selectedCardId === "all" 
        ? data 
        : data.filter((transaction) => 
            transaction.user_card_id === selectedCardId || transaction.merchant_id === selectedCardId
        );

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Account Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-500">Loading transactions...</p>
                </CardContent>
            </Card>
        );
    }

    if (error) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Error</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-red-500">Failed to load transactions</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Account Transactions</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Dropdown Filter */}
                <div className="mb-4">
                    <label htmlFor="card-filter" className="font-medium text-gray-700">Filter by Card ID:</label>
                    <select
                        id="card-filter"
                        value={selectedCardId}
                        onChange={(e) => setSelectedCardId(e.target.value)}
                        className="ml-2 px-3 py-2 border rounded-md text-gray-700"
                    >
                        <option value="all">All Transactions</option>
                        {userCardIds.map((cardId) => (
                            <option key={cardId} value={cardId}>{cardId}</option>
                        ))}
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Transaction ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Payer (User Card ID)</TableHead>
                                <TableHead>Receiver (Merchant ID)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {(filteredTransactions ?? []).map((transaction: Transaction) => {
                                const isMerchant = userCardIds.includes(transaction.merchant_id);
                                const isPayer = userCardIds.includes(transaction.user_card_id);

                                return (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.id}</TableCell>
                                        <TableCell>
                                            {new Date(transaction.transaction_date).toLocaleString()}
                                        </TableCell>
                                        <TableCell className={
                                            `font-semibold ${
                                                isMerchant ? 'text-green-600' // Incoming payment
                                                : isPayer ? 'text-red-600' // Outgoing payment
                                                : 'text-gray-600'
                                            }`
                                        }>
                                            ${parseFloat(transaction.amount).toFixed(2)}
                                        </TableCell>
                                        <TableCell>{transaction.location}</TableCell>
                                        <TableCell className={
                                            `font-semibold ${
                                                isPayer ? 'text-red-600' 
                                                : isMerchant ? 'text-green-600' 
                                                : 'text-gray-600'
                                            }`
                                        }>
                                            {transaction.user_card_id}
                                        </TableCell>
                                        <TableCell>{transaction.merchant_id}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    {Array.isArray(filteredTransactions) && filteredTransactions.length === 0 && (
                        <p className="text-center text-gray-500 py-4">
                            No transactions found for this card
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}












// *****************PERFECTLY WORKING CODE. NEXT TO IMPLMENT THE FILTER OPTION*****************



// import { useFetchAccountTransactionsQuery } from "@/rtk/createApi";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useSelector } from 'react-redux';

// // Define TypeScript Interface for Transactions
// interface Transaction {
//     id: string;
//     user_card_id: string;
//     transaction_date: string;
//     amount: string;
//     merchant_id: string;
//     location: string;
//     transaction_type: string;
//     created_at: string;
//     updated_at: string;
//     discarded_at: string | null;
// }

// export default function NewUserAccountTransactions() { 
//     // Explicitly define return type: data is Transaction[] or undefined
//     const { data = [], error, isLoading } = useFetchAccountTransactionsQuery() as { data?: Transaction[]; error?: any; isLoading: boolean };
    
//     const userCardIds: string[] = useSelector((state: any) => state.auth.userCardIds) || []; // Ensure it's an array

//     if (isLoading) {
//         return (
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Account Transactions</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-gray-500">Loading transactions...</p>
//                 </CardContent>
//             </Card>
//         );
//     }

//     if (error) {
//         return (
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Error</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-red-500">Failed to load transactions</p>
//                 </CardContent>
//             </Card>
//         );
//     }

//     return (
//         <Card className="w-full">
//             <CardHeader>
//                 <CardTitle>Account Transactions</CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <div className="overflow-x-auto">
//                     <Table>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead>Transaction ID</TableHead>
//                                 <TableHead>Date</TableHead>
//                                 <TableHead>Amount</TableHead>
//                                 <TableHead>Location</TableHead>
//                                 <TableHead>Card ID</TableHead>
//                                 <TableHead>Merchant ID</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {(data ?? []).map((transaction: Transaction) => {
//                                 const isMerchant = userCardIds.includes(transaction.merchant_id);
//                                 const isPayer = userCardIds.includes(transaction.user_card_id);

//                                 return (
//                                     <TableRow key={transaction.id}>
//                                         <TableCell>{transaction.id}</TableCell>
//                                         <TableCell>
//                                             {new Date(transaction.transaction_date).toLocaleString()}
//                                         </TableCell>
//                                         <TableCell className={
//                                             `font-semibold ${
//                                                 isMerchant ? 'text-green-600' 
//                                                 : isPayer ? 'text-red-600' 
//                                                 : 'text-gray-600'
//                                             }`
//                                         }>
//                                             ${parseFloat(transaction.amount).toFixed(2)}
//                                         </TableCell>
//                                         <TableCell>{transaction.location}</TableCell>
//                                         <TableCell className={
//                                             `font-semibold ${
//                                                 isPayer ? 'text-red-600' 
//                                                 : isMerchant ? 'text-green-600' 
//                                                 : 'text-gray-600'
//                                             }`
//                                         }>
//                                             {transaction.user_card_id}
//                                         </TableCell>
//                                         <TableCell>{transaction.merchant_id}</TableCell>
//                                     </TableRow>
//                                 );
//                             })}
//                         </TableBody>
//                     </Table>
//                     {Array.isArray(data) && data.length === 0 && (
//                         <p className="text-center text-gray-500 py-4">
//                             No transactions found
//                         </p>
//                     )}
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }











// import React from 'react';
// import { useFetchAccountTransactionsQuery } from "@/rtk/createApi";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function NewUserAccountTransactions() { 
//     const { data, error, isLoading } = useFetchAccountTransactionsQuery();

//     if (isLoading) {
//         return (
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Account Transactions</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-gray-500">Loading transactions...</p>
//                 </CardContent>
//             </Card>
//         );
//     }

//     if (error) {
//         return (
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Error</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-red-500">Failed to load transactions</p>
//                 </CardContent>
//             </Card>
//         );
//     }

//     return (
//         <Card className="w-full">
//             <CardHeader>
//                 <CardTitle>Account Transactions</CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <div className="overflow-x-auto">
//                     <Table>
//                         <TableHeader>
//                             <TableRow>
//                                 <TableHead>Transaction ID</TableHead>
//                                 <TableHead>Date</TableHead>
//                                 <TableHead>Type</TableHead>
//                                 <TableHead>Amount</TableHead>
//                                 <TableHead>Location</TableHead>
//                                 <TableHead>Merchant ID</TableHead>
//                                 <TableHead>Card ID</TableHead>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                             {data?.map((transaction: any) => (
//                                 <TableRow key={transaction.id}>
//                                     <TableCell>{transaction.id}</TableCell>
//                                     <TableCell>
//                                         {new Date(transaction.transaction_date).toLocaleString()}
//                                     </TableCell>
//                                     <TableCell>
//                                         <span className={`
//                                             px-2 py-1 rounded text-xs font-medium
//                                             ${transaction.transaction_type === 'purchase' 
//                                                 ? 'bg-green-100 text-green-800' 
//                                                 : 'bg-blue-100 text-blue-800'
//                                             }
//                                         `}>
//                                             {transaction.transaction_type}
//                                         </span>
//                                     </TableCell>
//                                     <TableCell className={`
//                                         font-semibold
//                                         ${parseFloat(transaction.amount) > 0 
//                                             ? 'text-green-600' 
//                                             : 'text-red-600'
//                                         }
//                                     `}>
//                                         ${parseFloat(transaction.amount).toFixed(2)}
//                                     </TableCell>
//                                     <TableCell>{transaction.location}</TableCell>
//                                     <TableCell>{transaction.merchant_id}</TableCell>
//                                     <TableCell>{transaction.user_card_id}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                     {(!data || data.length === 0) && (
//                         <p className="text-center text-gray-500 py-4">
//                             No transactions found
//                         </p>
//                     )}
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }
















// import { useFetchAccountTransactionsQuery } from "@/rtk/createApi";


// export default function NewUserAccountTransactions() { 
//     const { data, error, isLoading } = useFetchAccountTransactionsQuery();
//     console.log(data);
//     return (
//         <div>
//             <h1>NewUserAccountTransactions</h1>
//         </div>
//     )
// }