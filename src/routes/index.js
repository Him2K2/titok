import Home from "../pages/Home";
import Follwing from "../pages/Following";
import Profile from "../pages/Profile";
import UpLoad from "../pages/Upload";

//PublicRoutes
const publicRoutes = [
    {path:"/",component:Home},
    {path:"/following",component:Follwing},
    {path:"/profile",component:Profile},
    {path:"/upload",component:UpLoad,layout:1}

];


const privateRoutes = [];

export {privateRoutes,publicRoutes};
