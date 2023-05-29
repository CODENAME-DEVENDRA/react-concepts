import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import MuiForm from "../components/MuiForm";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<MuiForm />} />
        </Route>
    )
)


