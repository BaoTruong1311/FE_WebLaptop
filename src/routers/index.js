import Home from '../pages/User/Home';
import Categorys from '../pages/User/Categorys';
import ProductDetail from '../pages/User/ProductDetail';
import Cart from '../pages/User/Cart';
import OderDetail from '../pages/User/OderDetail';
import Oder from '../pages/User/Oder';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BrandList from '../pages/Admin/BrandList/BrandList';
import OrderList from '../pages/Admin/OrderList/OrderList';
import ProductList from '../pages/Admin/ProductList/ProductList';
import UserList from '../pages/Admin/UserList/UserList';
import AdminLayout from '../components/Layout/AdminLayout';
import AdminBrandPost from '../components/AdminBrandPost';
import AdminProductPost from '../components/AdminProductPost';
const publicRoutes = [
    { path: "/", component: Home },
    { path: '/categorys/:id', component: Categorys },
    { path: '/productdetail/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/oderdetail', component: OderDetail },
    { path: '/oder', component: Oder },


    { path: '/login', component: Login, layout: null },
    { path: "/register", component: Register, layout: null }


]
const privateRoutes = [
    { path: "/admin/brand", component: BrandList, layout: AdminLayout },
    { path: "/admin/brand/post", component: AdminBrandPost, layout: AdminLayout },
    { path: "/admin/Order", component: OrderList, layout: AdminLayout },
    { path: "/admin/Product", component: ProductList, layout: AdminLayout },
    { path: "/admin/product/post", component: AdminProductPost, layout: AdminLayout },
    { path: "/admin/User", component: UserList, layout: AdminLayout }

]
export { publicRoutes, privateRoutes }