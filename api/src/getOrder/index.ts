
import express from "express";
import getMessage from "../rmq/getOrder";






export const router = express.Router();



router.get("/", async (req, res, next): Promise<any>  => {
    try {


     const queueData =await getMessage()
      

      
      return res.status(200).json({queueData})
    } catch (error) {

      res.send(error);
      console.log(error);
      
    }
  });
  

