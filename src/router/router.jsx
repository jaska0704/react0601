import { Home } from "../pages/home";
import { Detail } from "../pages/detail";

export const route = [
    {
        component: <Home/>
    },
    {
        component: <Detail/>,
        path: "detail/:id"
    },
]