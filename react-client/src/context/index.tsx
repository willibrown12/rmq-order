import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";





type tokenType = {
    token: string,
    setToken: (token: string | null) => void;
}

type userType = {
    id:number
    setId: (id: number ) => void;
    setFullName : (fullName: string ) => void;
    fullName: string
}




const AuthContext = createContext<tokenType>({} as tokenType)
const userContext = createContext<userType>({} as userType)


export function ContextWrapper({ children }: any) {
   
    const [token, setTokenState] = useState<string | null>(localStorage.getItem("token"));
    const [id, setId] = useState<number>(localStorage.getItem("idUser") ? Number(localStorage.getItem("idUser")) : 0);

    const [full_Name, setFullName] = useState<string>("");
   

   


    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            response => response,  // If the request is successful, just return the response
            error => {
                if (error.response && error.response.status === 401) {
                    // Clear the token and user data from localStorage
                    localStorage.removeItem("token");
                    localStorage.removeItem("idUser");
                    
                    // Redirect to login page
                    window.location.href = "/login";
                }
                return Promise.reject(error);
            }
        );

        // Cleanup interceptor on unmount
        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);



    useEffect(() => {
        if (token) {
          
            axios.defaults.headers.common["Authorization"] = token;
            localStorage.setItem("token", token);
            localStorage.setItem("idUser", id.toString());
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
            localStorage.removeItem("idUser");
        }
    }, [token]);

   


const setToken = (newToken: string | null) => {
    setTokenState(newToken);

    if (newToken) {
        axios.defaults.headers.common["Authorization"] = newToken;
        localStorage.setItem("token", newToken);
        localStorage.setItem("idUser", id.toString());
    } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        window.location.href = "/login"; 
    }
};



    
    const contextValuetype: any = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );


    const userContextValue = { fullName: full_Name , setId, id,setFullName , };


    return (
        <AuthContext.Provider value={contextValuetype}>
            <userContext.Provider value={userContextValue}>
            
                {children}
             
            </userContext.Provider>
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const result = useContext(AuthContext);
    return result
};


export function useUserContext() {
    const result = useContext(userContext);
    return result
};




