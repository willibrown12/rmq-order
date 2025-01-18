import { Box, Button, Grid, Paper } from "@mui/material";


import { useState } from "react";
import { getOrderApi, getOrderType } from "./service";

// import { sendOrderApi } from "./service";




export default function Home() {

  const [clientTurn, setClientTurn] = useState<getOrderType>({messageId: ''});

  return (
<Box sx={{ p: 3 }}>
  <Grid container spacing={2} direction="column" alignItems="center">
    {/* Top Paper */}
    <Grid item xs={12}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          fontSize: '2rem',
          fontWeight: 'bold',
          width: '200px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ margin: '0px' }}>{clientTurn.messageId}</h3>
      </Paper>
    </Grid>

    {/* Center Buttons (Side by Side) */}
    <Grid item xs={12}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ height: '100px' }}
            onClick={async () => {
           
              const result = await getOrderApi();
              setClientTurn(result);
              console.log(result);
              
            }}
          >
            Turn Completed
       
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ height: '100px' }}
            onClick={async () => {
  
              const result = await getOrderApi();
              setClientTurn(result);
            }}
          >
            Turn Didn't Show Up
          
          </Button>
        </Grid>
      </Grid>
    </Grid>

    {/* Bottom Paper */}
    <Grid item xs={12}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        Additional Content Here
      </Paper>
    </Grid>
  </Grid>
</Box>



  );
}
