import { useEffect } from "react";
import { useFetchUserCardsQuery } from "@/rtk/createApi";
import { useDispatch } from "react-redux";
import { setUserCardIds } from "@/rtk/authSlice";

// Define the expected data structure
interface UserCard {
  id: string;
  credit_card_id: string;
}

interface UserCardsResponse {
  user_cards: UserCard[];
}

export default function NewUserCardData(): null {
  const { data, error } = useFetchUserCardsQuery<UserCardsResponse>(); // Specify response type
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.user_cards) {
      const cardIds = data.user_cards.map((card :any) => card.id); // Extract credit card IDs
      dispatch(setUserCardIds(cardIds)); // Store in Redux
    }
  }, [data, dispatch]);

  if (error) {
    console.error("Error fetching user cards:", error);
  }

  return null; // No UI rendering needed
}


