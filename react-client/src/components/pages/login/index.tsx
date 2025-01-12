import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { loginApi } from './service';
import { useState } from 'react';
import  backgroundImage from "/images/backroundImage.jpg";

import { CircularProgress, InputLabel } from '@mui/material';
import { useAuth, useUserContext } from '../../../context';




const defaultTheme = createTheme();

export default function LoginPage() {
  
  const { setToken } = useAuth();
  const {  setId  }  = useUserContext()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [EmailInput, setEmailInput] = useState('');
  const [inputError, setInputError] = useState({ isError: false, errorMessage: "" });
  const [PasswordInput, setPasswordInput] = useState('');

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await loginApi({ email: EmailInput, password: PasswordInput });
      if (result.token) {
        console.log(result.idUser);
        
        setId(result.idUser)
        setToken(result.token);
        navigate("/home");
       
        
      }
     
    } catch (error: any) {
      if (error.response.data.error==="something went wrong") {
       alert("something went wrong");
        
      }else{
      console.log(error);
      setInputError({ isError: true, errorMessage: "email or password is incorrect" });
    }} finally {
      setIsLoading(false);
    }
  };

  function isSubmitDisabled(): boolean {
    return !EmailInput || !PasswordInput;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <div   style={{backgroundColor:"#a6ffc3de"}}>
      <Grid
     
        container
        component="main"
        sx={{ bgcolor:"transparent",height: '100vh', justifyContent: 'center', alignItems: 'center',
         
          }
      }
      >
        <CssBaseline />

     
        <Grid container spacing={2} justifyContent="center" alignItems="center"   sx={{ padding: 0, margin:0}}>

          <Grid
            item
           
            xs={10} md={3}
            component={Paper}
            elevation={6}
            square
            sx={{
              boxShadow: 2,
              padding: 2,
              width: 400, 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Box component="form" sx={{ mt: 1 }}>
              {inputError.isError && (
                <InputLabel style={{ color: "#D32F2E" }}>
                  {inputError.errorMessage}
                </InputLabel>
              )}
              <TextField
                error={inputError.isError}
                label="Email"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={EmailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="email"
              />
           
                <TextField
                  error={inputError.isError}
                  label="Password"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={PasswordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
             
              {isLoading ? <LoadingLogin /> :
                <Button
                  disabled={isSubmitDisabled()}
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>}
              <Grid container>
                <Grid />
                <Grid >
                </Grid>
              </Grid>
            </Box>
          </Grid>


          
        </Grid>
      </Grid>
      </div>
    </ThemeProvider>
    
  );
}

function LoadingLogin() {
  return <span><CircularProgress /> Please wait ...</span>;
}
