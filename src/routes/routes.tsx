import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from '../sharedKernel/constants/routes'
import {Home} from "../main/home";
import {Registration} from "../main/startForm";
import {MainPage} from "../main/mainPage";
export const RoutesBuilder = (): JSX.Element => {
    return (
        <Routes>
            {/*Esse nao existe ainda, mas sera feito*/}
            {/*<Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />*/}
            
            {/* Hotsite */}
            <Route path={ROUTES.HOTSITE.ROOT} element={<Home />} />
            <Route path={ROUTES.HOTSITE.REGISTER} element={<Registration />} />
            <Route path={ROUTES.HUB.CAMERAS} element={<MainPage />} />
            
            {/* SETTINGS */}
            {/*<Route path={ROUTES.HUB.ROOT} element={<InnerPage></InnerPage>}>*/}
            {/*    {hubRoutes.map((route, index) => {*/}
            {/*        return (<AuthRoute key={index} path={route.path} features={route.features} element={route.component} />)*/}
            {/*    })}*/}
            {/*</Route>*/}
        </Routes>
    )
}

export const CreateRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <RoutesBuilder />
        </BrowserRouter>
    )
}
