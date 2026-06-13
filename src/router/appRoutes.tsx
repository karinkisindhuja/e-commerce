import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const ProductListing = lazy(() => import("../pages/ProductListing/ProductListing"));
const ProductDetail = lazy(() => import("../pages/ProductDetail/ProductDetail"));
const AppRoutes = () =>{
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<ProductListing />} />
                <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
        </Suspense>
    );
}
export default AppRoutes;