import Home from './Home';
import Contact from './Contact';
import About from './About';
import Add from './Add';
const  routes = [
    {
        path: "/",
        name: "Home page",
        component: <Home/>
    },
    {
        path: "/contact",
        name: "Contact page",
        component:<Contact/>
    },
    {
        path: "/about",
        name: "About page",
        component: <About/>
    },
    {
        path: "/add",
        name: "Thêm sp",
        component: <Add/>
    }
];
export default routes;