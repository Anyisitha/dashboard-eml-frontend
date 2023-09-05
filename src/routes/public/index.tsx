import React from "react";
import { map } from "lodash";
import { Route } from "react-router-dom";
/** Local Modules */
import PublicRoute from "./PublicRoute";
import useViews from "views";

interface IRoutes {
    component: any;
    path: string;
    layout: React.ComponentType<any>;
}

const usePublicRoutes = () => {
    /** Views */
    const {useScreens, useLayouts} = useViews();
    const {Login} = useScreens();
    const {AuthLayout} = useLayouts();


    /** Variables */
    const routes: IRoutes[] = [
        {
            path: "/login",
            component: Login,
            layout: AuthLayout
        }
    ];

    return map(routes, (item: IRoutes, index:number) => (
        <Route key={index} path={item.path} element={<PublicRoute component={item.component} layout={item.layout}/>} />
    ))
}

export default usePublicRoutes;