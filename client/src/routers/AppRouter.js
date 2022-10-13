import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCustomers } from "../actions/customers";
import { getTransfers } from "../actions/transfers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import CustomersPage from "../components/CustomersPage";
import TransferPage from "../components/TransferPage";
import AboutPage from "../components/AboutPage";
import AllTransfersPage from "../components/AllTransfersPage";
import NotFoundPage from "../components/NotFoundPage";


export const history = createBrowserHistory()


const AppRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCustomers())
        dispatch(getTransfers())
    })
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/customers' element={<CustomersPage />} />
            <Route path='/customers/:id' element={<TransferPage />} />
            <Route path='/all-transfers' element={<AllTransfersPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)}

export default AppRouter