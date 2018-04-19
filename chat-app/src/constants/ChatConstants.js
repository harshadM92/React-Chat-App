import Login from "../components/Login";
import ChatHome from "../components/ChatHome";

export const getRoutes = () => {
    const mainRoutes = [
        {
            path: '/login',
            component: Login,
            authed: true,
        },
        {
            path: '/home',
            component: ChatHome,
            authed: true,
        }
    ];
    return mainRoutes;
}
export const chatEndPoint = 'http://localhost:4001';