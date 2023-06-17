import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import MuiForm from "../components/MuiForm";
import Products from "../pages/Products";
import ProductDescription from "../pages/ProductDescription";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>

            <Route index element={<Dashboard />} />
            <Route path="login" element={< MuiForm />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDescription />} />

        </Route >
    )
)


