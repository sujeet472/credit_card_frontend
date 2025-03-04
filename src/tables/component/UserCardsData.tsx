import axios from "axios";
import { useEffect, useState } from "react";

const API_url = "http://localhost:3000/api/v1/user_cards/UC001";
function getApiData() {
    return axios.get(API_url).then((response) => response.data);
}

interface User_card_data {
    card_id: string;
    credit_card_id: string,
    profile_id: string;
    issue_date: Date;
    expiry_date: Date;  
    available_limit: number;
    is_active: boolean;
}

export default function UserCardsTable() {
    const [data, setData] = useState<User_card_data>({
        card_id: "xx",
        credit_card_id: "zzz",
        profile_id: "yy",
        issue_date: new Date(),
        expiry_date: new Date(),
        available_limit: 0,
        is_active: false,
    });

    useEffect(() => {
        async function fetchData() {
            const data1 = await getApiData();
            const formattedData: User_card_data = {
                card_id: data1.id,
                credit_card_id: data1.credit_card_id,
                profile_id: data1.profile_id,
                issue_date: new Date(data1.issue_date),
                expiry_date: new Date(data1.expiry_date),
                available_limit: Number(data1.available_limit),
                is_active: data1.is_active,
            };
            setData(formattedData);
        }

        fetchData();
    }, []);

    
    useEffect(() => {
        console.log("Updated data:", data);
    }, [data]);

    return <></>;
}
