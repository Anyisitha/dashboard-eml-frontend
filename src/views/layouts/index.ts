import React from "react";

const AuthLayout = React.lazy(() => import("./auth").then((res) => res));

const useLayouts = () => {
    return {
        AuthLayout
    }
}

export default useLayouts;