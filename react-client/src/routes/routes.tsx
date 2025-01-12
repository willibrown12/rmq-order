import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";



import { Vacations } from "../components/pages/vacations";

import LoginPage from "../components/pages/login";
import { ProtectedRoute } from "./protectedRoutes";
import { LoggedInAlready } from "../components/container/loggedinAlready";
import RootPage from "../components/pages/root/root";




export function RoutesArray(){
  

  
  const routesForPublic = [
    {
        path: "/",
        label: "loginAuto",
        element:  <Navigate to="/login" replace />,
       
    },

  ];


  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
            path: "Vacations",
            label: "Vacations",
            element: <Vacations />
           
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