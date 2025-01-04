import axios from "axios";


export type OrderType = {

    id: string;
    phoneNumber?: string;
  
  }


export async function sendOrderApi(body:OrderType) {
console.log(body);

    const url = `http://localhost:3001/sendOrder`;
    const result = await axios.post(url, body)
  
  console.log(result);
  
  
    return result.data.order.turn
  
  

  }