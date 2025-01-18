import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";




import LoginPage from "../components/pages/login";
import { ProtectedRoute } from "./protectedRoutes";
import { LoggedInAlready } from "../components/container/loggedinAlready";
import RootPage from "../components/pages/root/root";
import Home from "../components/pages/getOrder";




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
            path: "Home",
            label: "Home",
            element: <Home />
           
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