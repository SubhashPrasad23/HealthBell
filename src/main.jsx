import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MedicineLIst from "./components/MedicineLIst";
import AddMedicine from "./components/AddMedicine";
import Setting from "./components/Setting";

const router = createBrowserRouter([{
path:"/",
element:<App/>,
children:[{
   path: "/",
          element: <MedicineLIst />,
},
{
  path:"/AddMedicine",
  element:<AddMedicine/>
},
{
  path:"/Setting",
  element:<Setting/>
}
]


}]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>   
);
