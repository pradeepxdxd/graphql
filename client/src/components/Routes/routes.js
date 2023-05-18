import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import CreateQuotes from "../CreateQuotes/CreateQuotes";
import SignUp from '../SignUp/SignUp'
import Quotes from '../Quotes/Quotes'
import OtherUserProfile from '../OtherUserProfile/OtherUserProfile'

export const routes = [
    {path:'/', element: <Home/>},
    {path:'/login', element: <Login/>},
    {path:'/signup', element:<SignUp/> },
    {path:'/profile', element: <Profile/>},
    {path:'/create-quotes', element: <CreateQuotes/>},
    {path:'/quotes', element: <Quotes/>},
    {path:'/profile/:userId', element: <OtherUserProfile/>},
]