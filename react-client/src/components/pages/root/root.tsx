
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { Outlet, } from 'react-router-dom';
import { useAuth, useUserContext } from '../../../context';
import { SendToApiID } from './service';










function RootPage() {



  const { token } = useAuth(); 
  const {id,setFullName, } = useUserContext();

  useEffect(() => {
    let isSetState = true
    async function userStart() {
      try {
        if (isSetState) {
        if (token) {
                const user: any = await SendToApiID(token,id)
       
       
          
                setFullName(user.full_name);
              }

        }

      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Something went wrong while fetching user data.");
      } 
    }
    userStart()
    return () => {
      isSetState = false;
    }
  }, [token,id])



  return (
   <>
    
    <Box >
    <Outlet />
  </Box>
  </>
  );
}
export default RootPage;



