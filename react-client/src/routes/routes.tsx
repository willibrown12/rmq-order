import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";




import LoginPage from "../components/pages/login";
import { ProtectedRoute } from "./protectedRoutes";
import { LoggedInAlready } from "../components/container/loggedinAlready";
import RootPage from "../components/pages/root/root";
import Home from "../components/pages/getOrder";
import Logout from "../components/pages/logout";
import Customer from "../components/pages/customer/home";




export function RoutesArray(){
  

  
  const routesForPublic = [
    {
        path: "/",
        label: "loginAuto",
        element:  <Navigate to="/login" replace />,
       
    },
    {
      path: "/customer",
      label: "loginAuto",
      element:  <Customer/>,
     
  },


  ];


  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
            path: "Home",
            label: "Home",
            element: <Home />
           
        },
        {
          path: "Home/logout",
          label: "logout",
          element: <Logout />
         
      },
      ],
    },
  ];
  

  const routesForNotAuthenticatedOnly = [
    
    {
      path: "/login",
      element:<LoggedInAlready><LoginPage/></LoggedInAlready>,
    },
  ];


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        ...routesForPublic,
        ...(routesForNotAuthenticatedOnly ),
        ...routesForAuthenticatedOnly,
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default RoutesArray;