import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/Layout/AuthLayout";
import Login from "./pages/auth/Login";
import WebPage from "./pages/WebPage";
import Form from "./pages/Form";

function AppRouter() {


    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>

            <Route path="/" element={<AuthLayout />}>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/webpage" element={<WebPage/>}></Route>
                <Route path="/webpage/webpage" element={<WebPage />}></Route>
                <Route path="/webpage/formulario" element={<Form />}></Route>
                
            </Route>
        </Routes>       
    )
}

export default AppRouter;