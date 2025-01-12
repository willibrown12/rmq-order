import { Box, Button, Grid, IconButton, Paper } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useState } from "react";

// import { sendOrderApi } from "./service";




export default function Home() {

  const [postBox, setPostBox] = useState<string>("1");
  const [clientTurn, setClientTurn] = useState<string>("");

  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
     
     <Paper
  elevation={3} 
  sx={{ 
    p: 2,
    mb: 1, 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    height: "100px", 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}
>
  <h3 style={{margin:"0px"}}>{clientTurn}</h3>
</Paper>
      <Grid container rowSpacing={2} columnSpacing={1} sx={{ display: 'flex', justifyContent: "center" }}>
       
        <Grid size={6} >
          <Button variant="contained" color="error" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("3")
            const result = await getOrderApi({ id: "1" })
            setClientTurn(result)



          }}>
           turn completed
            <IconButton color="inherit">
              <ManageAccountsIcon />
            </IconButton>
          </Button>
        </Grid>
        <Grid size={6}>
          <Button variant="contained" color="success" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("3")
            const result = await sendOrderApi({ id: "1" })
            setClientTurn(result)



          }}>
            turn didn't showup
            <IconButton color="inherit">
              <AddShoppingCartIcon />
            </IconButton>
          </Button>
        </Grid>
      
       

      </Grid> 

    
      </Box>

  );
}
