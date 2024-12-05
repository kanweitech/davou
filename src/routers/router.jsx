import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
      ]
    },
  ]);

  export default router;