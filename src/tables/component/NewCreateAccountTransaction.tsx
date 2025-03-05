import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateAccountTransactionMutation } from "@/rtk/createApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewCreateAccountTransactionForm() {
  const userCardIds: string[] = useSelector((state: any) => state.auth.userCardIds) || []; // Fetch user's cards
  const [createTransaction, { isLoading, error }] = useCreateAccountTransactionMutation();

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
      setFormData({ user_card_id: "", amount: "", merchant_id: "UC001", location: "", transaction_type: "purchase" });
    } catch (error) {
      alert("Error creating transaction");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select User Card (payer) */}
          <div>
            <label className="block font-medium">Select Card:</label>
            <select name="user_card_id" value={formData.user_card_id} onChange={handleChange} className="w-full px-3 py-2 border rounded">
              <option value="">-- Select Card --</option>
              {userCardIds.map((cardId) => (
                <option key={cardId} value={cardId}>{cardId}</option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block font-medium">Amount:</label>
            <Input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full" />
          </div>

          {/* Merchant Select (receiver) */}
          <div>
            <label className="block font-medium">Select Merchant:</label>
            <Select value={formData.merchant_id} onValueChange={(value) => setFormData({ ...formData, merchant_id: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Merchant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UC001">UC001</SelectItem>
                <SelectItem value="UC002">UC002</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location Input */}
          <div>
            <label className="block font-medium">Location:</label>
            <Input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full" />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Creating..." : "Create Transaction"}
          </Button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">Failed to create transaction</p>}
        </form>
      </CardContent>
    </Card>
  );
}
