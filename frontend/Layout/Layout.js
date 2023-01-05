import React, {useEffect, useState} from "react";

import Desktop from '../context/LayoutContext/LayoutDesktop';
import Mobile from '../context/LayoutContext/LayoutMobile';

export default () => {

    const [width, setWidth] = useState(768);

    const handleWindowSizeChange = () =>  setWidth(window.innerWidth);
    
    useEffect(() => {

        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange)
    }, []);

    const IsMob = ( width <= 768 );

    return {
        Layout: IsMob ? Mobile : Desktop,
        IsMobile: IsMob
    };

}