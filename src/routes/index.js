import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import UpLoad from "../pages/Upload";
import Live from "../pages/Live";

import routes from "../config/routes";

//PublicRoutes
const publicRoutes = [
    {path:routes.home,component:Home},
    {path:routes.follwing,component:Following},
    {path:routes.profile,component:Profile},
    {path:routes.live,component:Live},
    {path:routes.upload,component:UpLoad,layout:1}

];


const privateRoutes = [];

export {privateRoutes,publicRoutes};
