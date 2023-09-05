import React from "react";

interface IPublicRoute {
    component: React.ComponentType<any>;
    layout: any;
} 

const PublicRoute: React.FC<IPublicRoute> = ({
    component,
    layout, 
    
}): JSX.Element => {
    const Component: React.ComponentType<any> = component;
    const Layout: React.ComponentType<any> = layout;

    const [props, setProps] = React.useState({});

    React.useEffect(() => {
        if(layout._payload._result.props) {
            setProps(layout._payload._result.props());
        }
    }, [layout])

    return (
        <Layout {...props}>
            <Component/>
        </Layout>
    );
}

export default PublicRoute;