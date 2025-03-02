import axios from "axios";


const API_URL = "http://localhost:3000/api/v1/branches";

async function  getAPIData () {
    return axios.get(API_URL).then((response) => response.data);
}




export default async function Branches_API() {
    const data : Array<{ id: string, branch_name: string, branch_address: string }>= await getAPIData();
    let dataArray: any[] = [];
    let dataFound = false;
    if(data){
        dataFound = true;
        data.map((item)=> {
            dataArray.push(item);
        });
        
    }
    const firstData = dataArray?.[0] || null;

    console.log("Is my data found ? ", {dataFound})
    console.log("your data is : ", {firstData})
   

    return (
        <>
        
        </>
    )


}