import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import Login from '../pages/AuthPages/Login'
import HomePage from "../pages/HomePage/HomePage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import ContactUs from "../pages/Contact/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/PrivacyPolicy/TermsAndConditions";
import TestForm from '../pages/AuthPages/TestForm';
import SignUp from '../pages/AuthPages/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route index element={<HomePage />} />
                    <Route path="AboutUs" element={<AboutUs />} />
                    <Route path="Services" element={<Services />} />
                    <Route path="ContactUs" element={<ContactUs />} />
                    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="TermsAndConditions" element={<TermsAndConditions />} />
                    <Route path='Testforom' element={<TestForm /> } />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<SignUp /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
