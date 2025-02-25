import axios from "axios"



export type loginType ={        
    email: string;                       
    password: string;        
  }



const BASE_URL = `http://34.82.202.15/:3001`

export async function loginApi(user: loginType): Promise<{ message: string, token: string , idUser:number}> {
   
    
    const result = await axios.post(`${BASE_URL}/login`,
        user,
        { headers: { "content-type": "application/json" } })
        console.log(result);
    return result.data
}

