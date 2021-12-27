import Home from "./pages/index";
import Error from "./pages/error";
import Login from "./pages/login";

const Routes = [
    {
        id: 1,
        path: "/",
        exact: true,
        component: <Home />
    },
    {
        id: 2,
        path: "/error",
        exact: true,
        component: <Error />
    },
    {
        id: 3,
        path: "/login",
        exact: true,
        component: <Login />
    },
];

export default Routes;