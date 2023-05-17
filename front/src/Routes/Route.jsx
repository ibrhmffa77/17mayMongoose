import AdminRoot from "../Pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Home from "../Pages/Site/Home/Home";
import SiteRoot from "../Pages/Site/SiteRoot/SiteRoot";

export const ROUTES =[{
    path:'/',
    element: <SiteRoot/>,
    children: [
        {
            path: "",
            element: <Home/>
        }
    ]
  
},
      {
        path: '/admin',
        element : <AdminRoot/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            }
        ]
      }
]