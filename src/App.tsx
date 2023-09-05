import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
/** Local Modules */
import useRouter from "./routes";
import theme from 'theme/theme';

const App: React.FC = (): JSX.Element => {
    /** Variables */
    const Router = useRouter();
    return (
        <React.Suspense fallback={<p>cargando...</p>}>
            <ChakraProvider theme={theme}>{Router}</ChakraProvider>
        </React.Suspense>
    );
};

export default App;
