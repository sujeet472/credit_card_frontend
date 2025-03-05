import { useEffect } from "react";
import { useFetchUserCardsQuery } from "@/rtk/createApi";
import { useDispatch } from "react-redux";
import { setUserCardIds } from "@/rtk/authSlice";



export default function NewUserCardData(): null {
  const { data, error } = useFetchUserCardsQuery();

  const dispatch = useDispatch();
  console.log("Fetched user cards:", data);

  useEffect(() => {
    if (data && data.user_cards) {
      const cardIds = data.user_cards.map((card) => card.id); 
      dispatch(setUserCardIds(cardIds)); 
    }
  }, [data, dispatch]);

  if (error) {
    console.error("Error fetching user cards:", error);
  }

  return null; 
}


