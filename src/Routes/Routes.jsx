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
import AllUsers from "../pages/AllUsers/AllUsers";
import ManageSurvey from "../pages/ManageSurveys/ManageSurveys";
import SurveysDetailsPage from "../pages/SurveysDetailsPage/SurveysDetailsPage";

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
              element:<PrivateRoute> <SurveysPage></SurveysPage></PrivateRoute>
            }, 
            {
              path: '/addsurvey', 
              element: <AddASurvey></AddASurvey>
            }, 
            {
              path: '/allusers', 
              element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            }, 
            {
              path: '/managesurveys', 
              element: <ManageSurvey></ManageSurvey>
            }, 
            {
              path: '/surveysdetails/:id', 
              element: <SurveysDetailsPage></SurveysDetailsPage>, 
              loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
            }
      ]
    },
  ]);