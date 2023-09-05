import React from "react";

const Login = React.lazy(() => import("./login"));

const useScreens = () => {
    return {
        Login
    }
}

export default useScreens;