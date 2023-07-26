import {createBrowserRouter} from 'react-router-dom'
import Homepage from '../pages/homepage'
import Loginpage from '../pages/loginpage'
import Registrationpage from '../pages/registrationpage'
import Productdetailpage from '../pages/productdetailpage'
import Productlistingpage from '../pages/productlistingpage'
import Wishlistpage from '../pages/wishlistpage'
import Cartpage from '../pages/cartpage'
import Errorpage from '../pages/errorpage'


export const router= createBrowserRouter(
    [
        {
            path:'/',
            element: <Homepage/>
        },
        {
            path:'/loginpage',
            element:<Loginpage/>

        },
        {
            path:'/registrationpage',
            element:<Registrationpage/>

        },
        {
            path:'/category/:category',
            element:<Productlistingpage/>,
            

        },
        {
            path:'/products/:productID',
            element:<Productdetailpage/>

        },
        {
            path:'/wishlistpage',
            element:<Wishlistpage/>

        },
        {
            path:'/cartpage',
            element:<Cartpage/>

        },
        {
            path:'/errorpage',
            element:<Errorpage/>

        },
    ]
)