import { Backdrop, Box, Button, CircularProgress, CssBaseline, Grid, Paper } from "@mui/material";


import { useEffect, useState } from "react";
import { getOrderApi, getOrderType, getStatsApi } from "./service";
import { useAuth, useUserContext } from "../../../context";
import { useNavigate } from "react-router-dom";







export default function Home() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const {fullName } = useUserContext();
  const [clientTurn, setClientTurn] = useState<getOrderType>({messageId: ''});
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<number>(0);


  useEffect(() => {
    let isSetState = true;
    async function Start() {
      try {
        setIsLoading(true);
        const result: any = await getStatsApi(token);
     
        
        if (isSetState) {
          setStats(result);
         
        }
      } catch (error: any) {
        console.log(error);
        alert(error?.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
    Start();
    return () => {
      isSetState = false;
    };
  }, [clientTurn]);


  console.log(clientTurn);
  console.log(stats);
  

  return (
    
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#a6ffc3de' }}>
      {isLoading? <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>:
        <><Box sx={{ p: 3 }}>
          {"hello " + fullName}
          <Button onClick={() => navigate('logout')}>Logout</Button>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* Top Paper */}
            <Grid item xs={12}>

              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  width: "300px",
                  height: "130px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: "column"
                }}
              >
                <h3 style={{ margin: '0px' }}>{clientTurn.messageId === "no turns" ? "" : clientTurn.messageId}</h3>
                <h6 style={{ margin: '0px' }}>  {clientTurn.payload ? "packacge number: " + clientTurn.payload : ""}</h6>
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

                    } }
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
                    } }
                  >
                    Turn Didn't Show Up

                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Bottom Paper */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
              >persons waiting for queue: {stats}

              </Paper>

            </Grid>
          </Grid>
        </Box><CssBaseline /></>
}
</div>

  );
}
