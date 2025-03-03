import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  interface UserCardData {
    card_id: string;
    credit_card_id: string;
    profile_id: string;
    issue_date: string;  // Changed to string for display
    expiry_date: string;  // Changed to string for display
    available_limit: number;
  }
  
  const sampleUserCards: UserCardData[] = [
    {
      card_id: "UC001",
      credit_card_id: "CC001",
      profile_id: "P001",
      issue_date: "2025-03-01",
      expiry_date: "2028-03-01",
      available_limit: 5000,
    },
    {
      card_id: "UC002",
      credit_card_id: "CC002",
      profile_id: "P002",
      issue_date: "2025-04-10",
      expiry_date: "2028-04-10",
      available_limit: 3000,
    },
  ];
  
  export default function UserCardsTable() {
    return (
      <Table>
        <TableCaption>A list of your user cards.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User Card ID</TableHead>
            <TableHead>Credit Card ID</TableHead>
            <TableHead>Profile ID</TableHead>
            <TableHead>Issue Date</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead className="text-right">Available Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUserCards.map((card) => (
            <TableRow key={card.card_id}>
              <TableCell className="font-medium">{card.card_id}</TableCell>
              <TableCell>{card.credit_card_id}</TableCell>
              <TableCell>{card.profile_id}</TableCell>
              <TableCell>{card.issue_date}</TableCell>
              <TableCell>{card.expiry_date}</TableCell>
              <TableCell className="text-right">${card.available_limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  