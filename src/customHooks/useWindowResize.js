import React, { useEffect, useState } from 'react'

const useWindowResize = () => {
    const [ dimension, setDimension ] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
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