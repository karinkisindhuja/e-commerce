import {Routes, Route} from "react-router-dom";
import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
const AppRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element = {<ProductListing/>}/>
            <Route path='/products/:id' element = {<ProductDetail/>}/>

        </Routes>
    )
}
export default AppRoutes;