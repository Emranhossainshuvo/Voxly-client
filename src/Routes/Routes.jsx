import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Pricing from "../pages/Pricing/Pricing";
import PrivateRoute from "./PrivateRoute";
import SurveysPage from "../pages/Surveys/Surveys";
import AddASurvey from "../pages/AddASurvey/AddASurvey";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
              path: '/login', 
              element: <Login></Login>
            }, 
            {
              path: '/register', 
              element: <Register></Register>
            }, 
            {
              path: '/pricing', 
              element: <PrivateRoute><Pricing></Pricing></PrivateRoute>
            }, 
            {
              path: '/surveys', 
              element: <SurveysPage></SurveysPage>
            }, 
            {
              path: '/addsurvey', 
              element: <AddASurvey></AddASurvey>
            }
      ]
    },
  ]);