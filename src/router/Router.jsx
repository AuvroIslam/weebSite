import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LogInlayout from "../layouts/LogInlayout";
import RegisterLayout from "../layouts/RegisterLayout";

import HomePages from "../pages/SearchPage";
import SearchPage from "../pages/SearchPage";
import TopAnimes from "../layouts/TopAnimes";
import TopManga from "../layouts/TopManga";
import AnimeDetails from "../pages/AnimeDetails";
import PrivateRoute from "../routes/PrivateRoutes";



const Router = createBrowserRouter(
    [
        {
            path: "/",
            element:<HomeLayout/>,
            children:[
                {
                    path:"/",
                    element:<SearchPage></SearchPage>
                },
                {
                    path:"/top-manga",
                    element:<TopManga></TopManga>

                },
                {
                    path:"/top-anime",
                    element:<TopAnimes></TopAnimes>
                },
                {
                    path:"/anime-details",
                    element:<PrivateRoute><AnimeDetails></AnimeDetails></PrivateRoute>
                }
                
            ]
        },
        {
            path:"/login",
            element:<LogInlayout></LogInlayout>
        },
        {
            path:"/register",
            element:<RegisterLayout></RegisterLayout>

        }
        ,
        {
            path:"*",
            element:<h1>404</h1>
        }
    ]
)

export default Router;