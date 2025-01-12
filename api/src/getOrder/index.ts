
import express from "express";



import { getQueue } from "../rmq/getOrder";


export const router = express.Router();



router.post("/", async (req, res, next): Promise<any>  => {
    try {

     const queueData =getQueue()
      
      
      return res.status(200).json({queueData})
    } catch (error) {

      res.send(error);
      console.log(error);
      
    }
  });
  


  export type OrderType = {

    id: string;
    phoneNumber?: string;
    
  
  }

  export type OrderPayloadType = {
    priority:number
    turn: string;
    package?: string;
  
  }

  
function extractOrder(body: any): OrderType {
  const { id, phoneNumber } = body;
  return { id, phoneNumber};
}
