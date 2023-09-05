import useLayouts from "./layouts";
import useScreens from "./screens";

const useViews = () => {
    return {
        useScreens,
        useLayouts
    }
}

export default useViews;