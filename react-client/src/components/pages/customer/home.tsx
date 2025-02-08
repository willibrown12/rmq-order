import { Button, Container, CssBaseline, Grid } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useState } from "react";
import { sendOrderApi } from "./service";
import Numpad from "./numpad";


export default function Customer() {


    
  const [postBox, setPostBox] = useState<string>("1");
  const [clientTurn, setClientTurn] = useState<string>("");



  if (postBox === "3") {
    setTimeout(() => {
      setPostBox("1")
    }, 5 * 1000)

  }


  return (
    postBox === "1" ?
    <Container  
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh' 
    }}
  >
      <Grid container rowSpacing={2} columnSpacing={1} sx={{ display: 'flex', justifyContent: "center",}}>
        <Grid   item xs={10} sx={{ display: 'flex', justifyContent: "center" }}>
          <h1> Pick a Service That Fits Your Needs </h1>
        </Grid>

        <Grid   item xs={6} >
          <Button variant="contained" color="error" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("3")
            const result = await sendOrderApi({ id: "1" })
            setClientTurn(result)



          }}>
            customer service
            
              <ManageAccountsIcon sx={{marginLeft:"10px"}}/>
            
          </Button>
        </Grid>
        <Grid    item xs={6}>
          <Button variant="contained" color="success" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("3")
            const result = await sendOrderApi({ id: "1" })
            setClientTurn(result)



          }}>
            buy
            
              <AddShoppingCartIcon sx={{marginLeft:"10px"}}/>
            
          </Button>
        </Grid>
        <Grid   item xs={6}>
          <Button variant="contained" color="primary" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("2")
          }} >
            delivery
            
              <Inventory2Icon sx={{marginLeft:"10px"}} />
            
          </Button>
        </Grid>
        <Grid   item xs={6} >
          <Button variant="contained" color="warning" fullWidth sx={{ height: '200px' }} onClick={async () => {
            setPostBox("3")
            const result = await sendOrderApi({ id: "3" })
            setClientTurn(result)



          }}>
            Accessibility
        
              <AccessibilityIcon sx={{marginLeft:"10px"}} />
         
          </Button>
        </Grid>
  <CssBaseline/>
      </Grid> 
      </Container>
      : postBox === "3" ?
      <Container  
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}
    >
        <Grid container rowSpacing={2} columnSpacing={1} >
          <Grid    item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
            <h1> Thank you your turn is {clientTurn} </h1>
          </Grid>

        </Grid> </Container>: <Numpad doSomething2={() => setPostBox("1")} doSomething={async (data: any): Promise<void> => {
          try {
            console.log("aaaa");
            
            const result = await sendOrderApi({ id: "2" , phoneNumber:data.phoneNumber });
            setClientTurn(result)
            setPostBox("3")
          } catch (error) {
            console.error("Error sending order:", error);
          }
        }}></Numpad>


  );
  
}
