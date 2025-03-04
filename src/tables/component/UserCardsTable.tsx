import { useFetchUserCardsQuery } from "@/rtk/createApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Calendar, AlertCircle } from "lucide-react";

interface UserCardData {
  id: string;
  credit_card_id: string;
  profile_id: string;
  issue_date: string;
  expiry_date: string;
  available_limit: number;
}

export default function UserCardsTable() {
  const { data, error, isLoading } = useFetchUserCardsQuery();

  // Format dates to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Check if card is expiring soon (within 30 days)
  const isExpiringSoon = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  // Check if card is expired
  const isExpired = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    return expiry < today;
  };

  if (isLoading) {
    return (
      <div className="w-full p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded col-span-1"></div>
            ))}
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid grid-cols-6 gap-4">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="h-8 bg-gray-200 rounded col-span-1"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <AlertCircle className="mr-2 h-5 w-5" />
            Error Loading Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">
            {"status" in error ? `Error ${error.status}: Unable to fetch cards` : "An unexpected error occurred while loading your cards."}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Use data from API or fallback to empty array if no data
  const userCards = data || [];

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Your Payment Cards
          </CardTitle>
          <Badge variant="outline" className="text-white border-white">
            {userCards.length} Card{userCards.length !== 1 ? 's' : ''}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[100px]">User Card ID</TableHead>
                <TableHead>Credit Card ID</TableHead>
                <TableHead>Profile ID</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead className="text-right">Available Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userCards.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No cards found. New cards will appear here.
                  </TableCell>
                </TableRow>
              ) : (
                userCards.map((card: UserCardData) => {
                  const expiringSoon = isExpiringSoon(card.expiry_date);
                  const expired = isExpired(card.expiry_date);
                  
                  return (
                    <TableRow key={card.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-medium font-mono text-sm">
                        {card.id}
                      </TableCell>
                      <TableCell>{card.credit_card_id}</TableCell>
                      <TableCell>{card.profile_id}</TableCell>
                      <TableCell className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        {formatDate(card.issue_date)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                          <span>{formatDate(card.expiry_date)}</span>
                          {expired ? (
                            <Badge variant="destructive" className="ml-2">Expired</Badge>
                          ) : expiringSoon ? (
                            <Badge className="ml-2 bg-amber-500">Expiring Soon</Badge>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className={`text-right font-medium ${card.available_limit > 1000 ? 'text-green-600' : card.available_limit > 200 ? 'text-amber-600' : 'text-red-600'}`}>
                        ${card.available_limit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

















// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
  
//   interface UserCardData {
//     card_id: string;
//     credit_card_id: string;
//     profile_id: string;
//     issue_date: string;  // Changed to string for display
//     expiry_date: string;  // Changed to string for display
//     available_limit: number;
//   }
  

  
//   export default function UserCardsTable() {
//     return (
//       <Table>
//         <TableCaption>A list of your user cards.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">User Card ID</TableHead>
//             <TableHead>Credit Card ID</TableHead>
//             <TableHead>Profile ID</TableHead>
//             <TableHead>Issue Date</TableHead>
//             <TableHead>Expiry Date</TableHead>
//             <TableHead className="text-right">Available Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {sampleUserCards.map((card) => (
//             <TableRow key={card.card_id}>
//               <TableCell className="font-medium">{card.card_id}</TableCell>
//               <TableCell>{card.credit_card_id}</TableCell>
//               <TableCell>{card.profile_id}</TableCell>
//               <TableCell>{card.issue_date}</TableCell>
//               <TableCell>{card.expiry_date}</TableCell>
//               <TableCell className="text-right">${card.available_limit}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     );
//   }
  