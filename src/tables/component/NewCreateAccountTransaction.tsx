import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateAccountTransactionMutation } from "@/rtk/createApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";



export default function NewCreateAccountTransactionForm() {
  const userCardIds: string[] = useSelector((state: any) => state.auth.userCardIds) || []; // Fetch user's cards
  const [createTransaction, { isLoading, error }] = useCreateAccountTransactionMutation();
  const navigate = useNavigate();
  // State for form fields
  const [formData, setFormData] = useState({
    user_card_id: "",
    amount: "",
    merchant_id: "UC001", // Default merchant
    location: "",
    transaction_type: "purchase",
  });
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Handle submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.user_card_id || !formData.amount || !formData.location) {
      alert("Please fill in all fields");
      return;
    }
    
    try {
      await createTransaction({ account_transaction: formData }).unwrap();
      alert("Transaction created successfully!");
      navigate("/dashboard");
      setFormData({ user_card_id: "", amount: "", merchant_id: "UC001", location: "", transaction_type: "purchase" });
    } catch (error) {
      alert("Error creating transaction");
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-slate-50 border-b">
        <CardTitle className="text-xl font-semibold text-slate-800">Create New Transaction</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select User Card (payer) */}
          <div className="space-y-2">
            <Label htmlFor="user_card_id" className="text-sm font-medium text-slate-700">Select Card</Label>
            <Select 
              value={formData.user_card_id} 
              onValueChange={(value) => setFormData({ ...formData, user_card_id: value })}
            >
              <SelectTrigger id="user_card_id" className="w-full border-slate-300">
                <SelectValue placeholder="Select a card" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-slate-300 shadow-lg rounded-md">

                {userCardIds.map((cardId) => (
                  <SelectItem key={cardId} value={cardId}>{cardId}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium text-slate-700">Amount</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-slate-500">₹</span>
              </div>
              <Input 
                id="amount"
                type="number" 
                name="amount" 
                placeholder="0.00"
                value={formData.amount} 
                onChange={handleChange} 
                className="pl-8 border-slate-300" 
              />
            </div>
          </div>
          
          {/* Merchant Select (receiver) */}
          <div className="space-y-2">
            <Label htmlFor="merchant" className="text-sm font-medium text-slate-700">Select Merchant</Label>
            <Select 
              value={formData.merchant_id} 
              onValueChange={(value) => setFormData({ ...formData, merchant_id: value })}
            >
              <SelectTrigger id="merchant" className="w-full border-slate-300">
                <SelectValue placeholder="Select merchant" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-slate-300 shadow-lg rounded-md">

                <SelectItem value="UC001">UC001</SelectItem>
                <SelectItem value="UC002">UC002</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Location Input */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-slate-700">Location</Label>
            <Input 
              id="location"
              type="text" 
              name="location" 
              placeholder="Enter location"
              value={formData.location} 
              onChange={handleChange} 
              className="border-slate-300" 
            />
          </div>
          
          {/* Transaction Type */}
          <div className="space-y-2">
            <Label htmlFor="transaction_type" className="text-sm font-medium text-slate-700">Transaction Type</Label>
            <Select 
              value={formData.transaction_type} 
              onValueChange={(value) => setFormData({ ...formData, transaction_type: value })}
            >
              <SelectTrigger id="transaction_type" className="w-full border-slate-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-slate-300 shadow-lg rounded-md">

                <SelectItem value="purchase">Purchase</SelectItem>
                {/* <SelectItem value="refund">Refund</SelectItem>
                <SelectItem value="adjustment">Adjustment</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 transition-colors"
          >
            {isLoading ? 
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </span> : 
              "Create Transaction"
            }
          </Button>
          
          {/* Error Message */}
          {error && (
            <div className="mt-2 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
              Failed to create transaction. Please try again.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}










// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useCreateAccountTransactionMutation } from "@/rtk/createApi";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// export default function NewCreateAccountTransactionForm() {
//   const userCardIds: string[] = useSelector((state: any) => state.auth.userCardIds) || []; // Fetch user's cards
//   const [createTransaction, { isLoading, error }] = useCreateAccountTransactionMutation();

//   // State for form fields
//   const [formData, setFormData] = useState({
//     user_card_id: "",
//     amount: "",
//     merchant_id: "UC001", // Default merchant
//     location: "",
//     transaction_type: "purchase",
//   });

//   // Handle input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.user_card_id || !formData.amount || !formData.location) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       await createTransaction({ account_transaction: formData }).unwrap();
//       alert("Transaction created successfully!");
//       setFormData({ user_card_id: "", amount: "", merchant_id: "UC001", location: "", transaction_type: "purchase" });
//     } catch (error) {
//       alert("Error creating transaction");
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Create a New Transaction</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Select User Card (payer) */}
//           <div>
//             <label className="block font-medium">Select Card:</label>
//             <select name="user_card_id" value={formData.user_card_id} onChange={handleChange} className="w-full px-3 py-2 border rounded">
//               <option value="">-- Select Card --</option>
//               {userCardIds.map((cardId) => (
//                 <option key={cardId} value={cardId}>{cardId}</option>
//               ))}
//             </select>
//           </div>

//           {/* Amount Input */}
//           <div>
//             <label className="block font-medium">Amount:</label>
//             <Input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full" />
//           </div>

//           {/* Merchant Select (receiver) */}
//           <div>
//             <label className="block font-medium">Select Merchant:</label>
//             <Select value={formData.merchant_id} onValueChange={(value) => setFormData({ ...formData, merchant_id: value })}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select Merchant" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="UC001">UC001</SelectItem>
//                 <SelectItem value="UC002">UC002</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Location Input */}
//           <div>
//             <label className="block font-medium">Location:</label>
//             <Input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full" />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isLoading} className="w-full">
//             {isLoading ? "Creating..." : "Create Transaction"}
//           </Button>

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm mt-2">Failed to create transaction</p>}
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
