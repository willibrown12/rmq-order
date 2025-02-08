import { Box, Button, Container, Grid, Paper,  } from "@mui/material";


import { useState } from "react";


export default function Numpad(props: {  doSomething2?: () => void,doSomething?: (p: any) => void }) {

  const [phoneNumber, setPhoneNumber] = useState<string>("");



  function handleChange(addNumber: string) {

    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + addNumber)
    }

  }




  return (
    <Container 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh' ,
      
    }}
  >
    <Box sx={{ textAlign: 'center', p: 3 }}>
     
     <Paper
  elevation={3} 
  sx={{ 
    p: 2,
    mb: 1, 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    height: "70px", 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}
>
<h3 style={{margin:"0"}}>phone number</h3>
  <h3 style={{margin:"0px"}}>{phoneNumber}</h3>
</Paper>

    <Grid container rowSpacing={1} columnSpacing={1} sx={{ display: 'flex', justifyContent: "center", }}>

    <Grid   item xs={12} >
        <Button variant="contained" color="error" fullWidth sx={{ height: '50px' }} onClick={() => {
          if (props.doSomething2) {
            props.doSomething2();
          }

        }}>
          go back

        </Button>
      </Grid>

      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("1")

        }}>
          1

        </Button>
      </Grid>
      <Grid   item xs={4}>
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("2")


        }}>
          2

        </Button>
      </Grid>
      <Grid    item  xs={4}>
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("3")


        }}>
          3

        </Button>
      </Grid>
      <Grid   item  xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("4")



        }}>
          4

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("5")



        }}>
          5

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("6")



        }}>
          6

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("7")



        }}>
          7

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("8")



        }}>
          8

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("9")



        }}>
          9

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="warning" fullWidth sx={{ height: '100px' }} onClick={() => {
          setPhoneNumber(phoneNumber.slice(0, -1))



        }}>
          x

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="info" fullWidth sx={{ height: '100px' }} onClick={() => {
          handleChange("0")



        }}>
          0

        </Button>
      </Grid>
      <Grid   item xs={4} >
        <Button variant="contained" color="success" fullWidth sx={{ height: '100px' }} onClick={() => {
          if (props.doSomething) {
            props.doSomething({ phoneNumber });
          }
        }}>
          send

        </Button>
      </Grid>



    </Grid>
    </Box>
    </Container>
  );
}
