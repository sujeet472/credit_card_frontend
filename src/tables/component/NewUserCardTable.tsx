import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useFetchUserCardsQuery } from "@/rtk/createApi";
import { CreditCard, CheckCircle2, XCircle } from 'lucide-react';

interface UserCard {
  id: string;
  credit_card_id: string;
  profile_id: string;
  available_limit: string;
  is_active: boolean;
  issue_date: string;
  expiry_date: string;
}

export default function NewUserCardData() {
  const { data, error, isLoading } = useFetchUserCardsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full p-4">
        <div className="animate-spin">
          <CreditCard size={48} />
        </div>
        <p className="ml-2">Loading cards...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">Unable to fetch user cards</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <CreditCard className="mr-2" /> My Credit Cards
      </h1>
      
      {data?.user_cards && data.user_cards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.user_cards.map((card: UserCard) => (
            <Card key={card.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Card Type - {card.credit_card_id}</CardTitle>
                {card.is_active ? (
                  <Badge variant="success" className="bg-green-100 text-green-800">
                    <CheckCircle2 className="mr-1" size={16} /> Active
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="bg-red-100 text-red-800">
                    <XCircle className="mr-1" size={16} /> Inactive
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  ${parseFloat(card.available_limit).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Available Limit</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Issue Date:</span>
                    <span>{new Date(card.issue_date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expiry Date:</span>
                    <span>{new Date(card.expiry_date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Card ID: {card.id}</span>
                <span className="text-xs text-muted-foreground">Profile: {card.profile_id}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground p-4">
          No credit cards found
        </div>
      )}
    </div>
  );
}











// import { useFetchUserCardsQuery } from "@/rtk/createApi";


// export default function NewUserCardData() {
//     const { data, error, isLoading } = useFetchUserCardsQuery();

//     console.log(data);
//     return (
//         <div>
//             <h1>NewUserCardData</h1>
//         </div>
//     )
// }