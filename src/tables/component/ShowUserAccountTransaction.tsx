import { useFetchAccountTransactionQuery } from "@/rtk/createApi";

interface AccountTransactionProps {
  userAccountTransactionId: string;
}

const UserAccountTransaction: React.FC<AccountTransactionProps> = ({ userAccountTransactionId }) => {
  const { data, error, isLoading } = useFetchAccountTransactionQuery(userAccountTransactionId);

  if (isLoading) return (
    <div className="flex items-center justify-center p-8 h-64">
      <div className="animate-pulse text-gray-600">Loading transaction details...</div>
    </div>
  );

  if (error) {
    const errorMessage =
      "status" in error ? `Error: ${error.status}` : "An unexpected error occurred";
    return (
      <div className="p-6 border border-red-200 rounded-lg bg-red-50 text-red-600">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
          <h3 className="font-medium">Transaction Error</h3>
        </div>
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (!data) return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 text-gray-600">
      No transaction found for the provided ID
    </div>
  );

  // Determine if transaction is credit or debit for styling
  const isCredit = data.transaction_type?.toLowerCase().includes('credit');
  const amountColor = isCredit ? 'text-green-600' : 'text-red-600';

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
        <h1 className="text-xl font-bold text-white">Transaction Details</h1>
      </div>
      
      <div className="p-6">
        {/* Transaction Amount */}
        <div className="text-center mb-6">
          <span className={`text-3xl font-bold ${amountColor}`}>
            {isCredit ? '+' : '-'}${Math.abs(data.amount).toFixed(2)}
          </span>
          <div className="text-sm text-gray-500 mt-1">{data.transaction_type}</div>
        </div>
        
        {/* Primary Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{new Date(data.transaction_date).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500">{new Date(data.transaction_date).toLocaleTimeString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Merchant</p>
              <p className="font-medium truncate">{data.merchant_id}</p>
              <p className="text-xs text-gray-500 truncate">{data.location}</p>
            </div>
          </div>
        </div>
        
        {/* Additional Details */}
        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Transaction Information</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono text-gray-800">{data.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">User Card ID</span>
              <span className="font-mono text-gray-800">{data.user_card_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Created</span>
              <span className="text-gray-800">{new Date(data.created_at).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Updated</span>
              <span className="text-gray-800">{new Date(data.updated_at).toLocaleString()}</span>
            </div>
            {data.discarded_at && (
              <div className="flex justify-between">
                <span className="text-gray-500">Discarded</span>
                <span className="text-gray-800">{new Date(data.discarded_at).toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountTransaction;





















// // import { useFetchAccountTransactionQuery } from "@/rtk/createApi";
// // // import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// // interface AccountTransactionProps {
// //   userAccountTransactionId: string;
// // }

// // const UserAccountTransaction: React.FC<AccountTransactionProps> = ({ userAccountTransactionId }) => {
// //   const { data, error, isLoading } = useFetchAccountTransactionQuery(userAccountTransactionId);

// //   if (isLoading) return <div>Loading...</div>;

// //   if (error) {
// //     const errorMessage =
// //       "status" in error ? `Error: ${error.status}` : "An unexpected error occurred";
// //     return <div className="text-red-500">{errorMessage}</div>;
// //   }

// //   if (!data) return <div>No transaction found</div>;

// //   return (
// //     <div className="p-4 border rounded-lg shadow-md bg-white">
// //       <h1 className="text-xl font-bold mb-2">Account Transaction Details</h1>
// //       <ul className="list-disc pl-5">
// //         <li><strong>ID:</strong> {data.id}</li>
// //         <li><strong>User Card ID:</strong> {data.user_card_id}</li>
// //         <li><strong>Transaction Date:</strong> {new Date(data.transaction_date).toLocaleString()}</li>
// //         <li><strong>Amount:</strong> ${data.amount}</li>
// //         <li><strong>Merchant ID:</strong> {data.merchant_id}</li>
// //         <li><strong>Location:</strong> {data.location}</li>
// //         <li><strong>Transaction Type:</strong> {data.transaction_type}</li>
// //         <li><strong>Created At:</strong> {new Date(data.created_at).toLocaleString()}</li>
// //         <li><strong>Updated At:</strong> {new Date(data.updated_at).toLocaleString()}</li>
// //         <li><strong>Discarded At:</strong> {data.discarded_at ? new Date(data.discarded_at).toLocaleString() : "Not discarded"}</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default UserAccountTransaction;
