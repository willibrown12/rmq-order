import axios from "axios";

export async function getOrderApi() {
  
    
        const url = `http://localhost:3001/getOrder`;
        const result = await axios.get(url)
      


        return result.data.queueData
      
      
    
      }


      export type getOrderType= {
        messageId:string,
        payload?: number,
        timestamp?: string
    }

    export async function getStatsApi(token:any) {
  
    
      const url = `http://34.82.202.15:3001/getOrder/stats`;
      const headers = token ? { Authorization: token } : {};
      const result = await axios.get(url,{ headers })
    
   
    
    
      return result.data.messages
    
    
  
    }

