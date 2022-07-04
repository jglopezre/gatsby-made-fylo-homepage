import { useEffect, useState } from 'react'


let [defaultHeight, defaultWidth] = [];

if (typeof window !== `undefined`) {
    defaultWidth = window.innerWidth;
    defaultHeight = window.innerHeight;
}

const useWindowResize = () => {
    const [ dimension, setDimension ] = useState({
        windowWidth: defaultWidth,
        windowHeight: defaultHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setDimension({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            });
        };
                
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return dimension;
}

export default useWindowResize