import {createBrowserRouter} from "react-router-dom"
import Baselayout from "../layouts/BaseLayouts"
import HomePage from "../pages/home/home"
import SignInPage from "../pages/sign-in/sign-in"
import SignUpPage from "../pages/sign-up/sign-up"
import DetailPage from "../pages/detail-page/detail-page"
import ProfilePage from "../pages/profile/profile"

const router = createBrowserRouter(
    [
        {
            element :<Baselayout/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/sign-in',
                    element: <SignInPage/>
                },
                {
                    path: '/sign-uo',
                    element: <SignUpPage/>
                },
                {
                    path: '/profile',
                    element: <ProfilePage/>
                },
                {
                    path: '/:id',
                    element: <DetailPage/>
                },
            ]
        }
    ]
)

export default router