import { lazy } from "react";

const Home = lazy(() => import("../Page/index"))
const NewProfile = lazy(() => import("../Page/AddNewProfile"))
const AllProfiles = lazy(() => import("../Component/Body Content/BodyContent"))
export const PublicRoutes = [
    {
        path: "/AddNewProfile",
        component: NewProfile,
        exact: false,
        main: () => <h2>qqqqqqqqqqqq</h2>
    },
    {
        path: "/",
        component: Home,
        exact: true,
        main: () => <h2>eeee</h2>
    }
]