import Home from '../pages/User/Home';
import Categorys from '../pages/User/Categorys';
import ProductDetail from '../pages/User/ProductDetail';
import Cart from '../pages/User/Cart';
import OderDetail from '../pages/User/OderDetail';
import Oder from '../pages/User/Oder';
const publicRoutes = [
    { path: "/", component: Home },
    { path: '/categorys/:id', component: Categorys },
    { path: '/productdetail', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/oderdetail', component: OderDetail },
    { path: '/oder', component: Oder }


]
const privateRoutes = []
export { publicRoutes, privateRoutes }