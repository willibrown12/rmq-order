import axios from "axios";

export async function getOrderApi() {
  
    
        const url = `http://localhost:3001/getOrder`;
        const result = await axios.get(url)
      
      console.log(result);
      
      
        return result.data.queueData
      
      
    
      }


      export type getOrderType= {
        messageId:string,
        payload?: number,
        timestamp?: string
    }