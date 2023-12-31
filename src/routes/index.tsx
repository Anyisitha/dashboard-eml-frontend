import { BrowserRouter, Routes } from "react-router-dom";
import { map } from "lodash";
/** Local Modules */
import usePublicRoutes from "./public";

const useRouter = () => {
    const PublicRoutes = [...usePublicRoutes()];
    const resultRoutes = [...PublicRoutes];

    return (
        <BrowserRouter>
            <Routes>
                {map(resultRoutes)}
            </Routes>
        </BrowserRouter>
    );
}

export default useRouter;