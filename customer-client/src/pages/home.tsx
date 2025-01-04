import { Button, Grid2, IconButton } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Height } from "@mui/icons-material";
import { useState } from "react";
import { sendOrderApi } from "./service";

export default function Home() {

  const [postBox, setPostBox] = useState<boolean>(true);
  const [clientTurn, setClientTurn] = useState<string>("");



if (postBox=== false) {
  setTimeout(()=>{
    setPostBox(true)
  },10*1000)
  
}


  return (
    postBox? 
    <Grid2 container rowSpacing={2} columnSpacing={1}  sx={{ display: 'flex' , justifyContent:"center"}}>
        <Grid2 size={10}>
             <h1> Pick a Service That Fits Your Needs </h1>
             </Grid2>
    
      <Grid2 size={6} >
        <Button variant="contained" color="error" fullWidth  sx={{ height: '200px' }} onClick={async ()=>{
          setPostBox(false)
         const result=await sendOrderApi({id:"1"})
         setClientTurn(result)
        
         

        }}>
          customer service
          <IconButton color="inherit">
            <ManageAccountsIcon />
          </IconButton>
        </Button>
      </Grid2>
      <Grid2 size={6}>
        <Button variant="contained" color="success" fullWidth  sx={{ height: '200px' }} onClick={async ()=>{
          setPostBox(false)
         const result=await sendOrderApi({id:"1"})
         setClientTurn(result)
        
         

        }}>
          buy
          <IconButton color="inherit">
            <AddShoppingCartIcon />
          </IconButton>
        </Button>
      </Grid2>
      <Grid2 size={6}>
        <Button variant="contained" color="primary" fullWidth  sx={{ height: '200px' }} >
          delivery
          <IconButton color="inherit">
            <Inventory2Icon />
          </IconButton>
        </Button>
      </Grid2>
      <Grid2 size={6} >
        <Button variant="contained" color="warning" fullWidth sx={{ height: '200px' }} onClick={async ()=>{
          setPostBox(false)
         const result=await sendOrderApi({id:"3"})
         setClientTurn(result)
        
         

        }}>
          Accessibility
          <IconButton color="inherit">
            <AccessibilityIcon />
          </IconButton>
        </Button>
      </Grid2>
      
    </Grid2>:
    <Grid2 container rowSpacing={2} columnSpacing={1}  sx={{ display: 'flex' , justifyContent:"center"}}>
        <Grid2 size={10}>
             <h1> Thank you your turn is {clientTurn} </h1>
             </Grid2> 
    </Grid2>
  );
}
